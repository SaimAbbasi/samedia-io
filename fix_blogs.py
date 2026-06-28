#!/usr/bin/env python3
"""
Robustly parse blog-data.ts posts, deduplicate, fix year mismatches,
sort oldest-first, and rewrite the complete file.
"""

import re

SRC = "/Users/saim/Downloads/Claude Code/SAMEDIA.IO/samedia-io/lib/blog-data.ts"
raw = open(SRC).read()

# ── 1. Find where the posts array starts ─────────────────────────────────────
ARRAY_OPEN = "export const posts: BlogPost[] = ["
array_start = raw.index(ARRAY_OPEN) + len(ARRAY_OPEN)

# Everything from array_start onward (we'll parse posts out of it, ignore broken footer)
array_section = raw[array_start:]

# ── 2. Extract individual post objects by brace matching ─────────────────────
posts = []
slugs_seen = set()
i = 0
text = array_section

while i < len(text):
    # Find next '{'
    start = text.find('\n  {', i)
    if start == -1:
        break
    # Find matching closing '},' by counting braces
    depth = 0
    j = start
    in_backtick = False
    backtick_depth = 0
    while j < len(text):
        c = text[j]
        if c == '`' and not in_backtick:
            in_backtick = True
            j += 1
            continue
        if c == '`' and in_backtick:
            # check it's not escaped
            if j > 0 and text[j-1] != '\\':
                in_backtick = False
            j += 1
            continue
        if in_backtick:
            j += 1
            continue
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                break
        j += 1

    block = text[start:j+1]

    def get_field(b, field):
        # backtick
        m = re.search(rf'^\s+{field}:\s+`(.*?)`\s*,\s*$', b, re.MULTILINE | re.DOTALL)
        if m:
            return m.group(1)
        # single quote
        m = re.search(rf"^\s+{field}:\s+'([^']*)'\s*,\s*$", b, re.MULTILINE)
        if m:
            return m.group(1)
        return ''

    slug     = get_field(block, 'slug')
    title    = get_field(block, 'title')
    date     = get_field(block, 'date')
    category = get_field(block, 'category')
    location = get_field(block, 'location')
    readTime = get_field(block, 'readTime')
    excerpt  = get_field(block, 'excerpt')
    content  = get_field(block, 'content')

    # Skip if no date (broken fragment at end of file) or duplicate slug
    if date and re.match(r'\d{4}-\d{2}-\d{2}', date) and slug and slug not in slugs_seen:
        slugs_seen.add(slug)
        posts.append(dict(
            slug=slug, title=title, date=date,
            category=category or 'Marketing',
            location=location or 'Global',
            readTime=readTime or '6 min',
            excerpt=excerpt, content=content,
        ))

    i = j + 1

print(f"Parsed {len(posts)} unique posts")

# ── 3. Fix year references in titles + excerpts ───────────────────────────────
YEARS = {'2024', '2025', '2026'}

fixed = 0
for p in posts:
    cy = p['date'][:4]

    def yr_fix(m):
        return cy if m.group(0) in YEARS else m.group(0)

    nt = re.sub(r'\b(2024|2025|2026)\b', yr_fix, p['title'])
    ne = re.sub(r'\b(2024|2025|2026)\b', yr_fix, p['excerpt'])
    # Content: only fix in forward-looking phrases to avoid clobbering history refs
    nc = re.sub(
        r'(?i)((?:in|for|of|trend[s]?|guide|playbook)\s+)(2024|2025|2026)',
        lambda m: m.group(1) + (cy if m.group(2) in YEARS else m.group(2)),
        p['content']
    )
    if nt != p['title'] or ne != p['excerpt'] or nc != p['content']:
        fixed += 1
    p['title']   = nt
    p['excerpt'] = ne
    p['content'] = nc

print(f"Fixed year refs in {fixed} posts")

# ── 4. Sort oldest → newest ───────────────────────────────────────────────────
posts.sort(key=lambda p: p['date'])
print(f"Date range: {posts[0]['date']} to {posts[-1]['date']}")

# ── 5. Serialise ─────────────────────────────────────────────────────────────
def ts_esc(s):
    s = s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    return s

def render(p):
    return (
        "  {\n"
        f"    slug: `{ts_esc(p['slug'])}`,\n"
        f"    title: `{ts_esc(p['title'])}`,\n"
        f"    date: '{p['date']}',\n"
        f"    category: '{p['category']}',\n"
        f"    location: '{p['location']}',\n"
        f"    readTime: '{p['readTime']}',\n"
        f"    excerpt: `{ts_esc(p['excerpt'])}`,\n"
        f"    content: `{ts_esc(p['content'])}`,\n"
        "  },"
    )

HEADER = """export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  location: string
  readTime: string
  excerpt: string
  content: string
}

export const posts: BlogPost[] = [
"""

FOOTER = """]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getRecentPosts(n = 3): BlogPost[] {
  return posts.slice(0, n)
}
"""

body = "\n".join(render(p) for p in posts)
final = HEADER + body + "\n" + FOOTER

open(SRC, 'w').write(final)
print(f"Written. Lines: {final.count(chr(10))}, em-dashes: {len(re.findall(r'[—–]', final))}")
assert 'export function getPost' in final
assert 'export function getRecentPosts' in final
print("Footer OK")
