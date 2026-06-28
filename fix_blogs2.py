#!/usr/bin/env python3
"""
Fix: escaped apostrophes, capitalization, and duplicate titles.
"""

import re
from collections import defaultdict

SRC = "/Users/saim/Downloads/Claude Code/SAMEDIA.IO/samedia-io/lib/blog-data.ts"
raw = open(SRC).read()

# ── 1. Fix over-escaped apostrophes ─────────────────────────────────────────
# They look like: What\\\\'s  →  should be: What's
# In a backtick TS string, ' does NOT need escaping at all
raw = raw.replace("\\\\'", "'")
raw = raw.replace("\\\\\\'", "'")

# ── 2. Fix capitalisation of acronyms in titles ──────────────────────────────
cap_fixes = [
    (r'\bAieo\b', 'AIEO'),
    (r'\bAieo\b', 'AIEO'),
    (r'\bCrm\b', 'CRM'),
    (r'\bSeo\b', 'SEO'),
    (r'\bPr And\b', 'PR and'),
    (r'\bPr\b', 'PR'),
    (r'\bAi\b', 'AI'),
    (r'\bB2b\b', 'B2B'),
    (r'\bB2c\b', 'B2C'),
    (r'\bUae\b', 'UAE'),
    (r'\bF&b\b', 'F&B'),
]
for pattern, replacement in cap_fixes:
    raw = re.sub(pattern, replacement, raw)

# ── 3. Fix repeated "Why [City] Brands Choose SA Media..." titles ────────────
# Parse out every post block to find and uniquify them
# Strategy: for each title that appears multiple times, append the angle/topic
# We can derive the angle from the content of the post (first <h2> heading)

ARRAY_OPEN = "export const posts: BlogPost[] = [\n"
ARRAY_CLOSE = "]\n\nexport function getPost"
array_start = raw.index(ARRAY_OPEN) + len(ARRAY_OPEN)
array_end   = raw.index(ARRAY_CLOSE)

header  = raw[:array_start]
array   = raw[array_start:array_end]
footer  = raw[array_end:]

# Parse posts
def extract(block, field):
    m = re.search(rf'^\s+{field}:\s+`(.*?)`\s*,\s*$', block, re.MULTILINE | re.DOTALL)
    if m: return m.group(1)
    m = re.search(rf"^\s+{field}:\s+'([^']*)'\s*,\s*$", block, re.MULTILINE)
    if m: return m.group(1)
    return ''

# Split into post objects
post_blocks = []
i = 0
text = array
while i < len(text):
    start = text.find('\n  {\n', i)
    if start == -1:
        break
    depth = 0
    j = start
    in_bt = False
    while j < len(text):
        c = text[j]
        if c == '`' and (j == 0 or text[j-1] != '\\'):
            in_bt = not in_bt
        if not in_bt:
            if c == '{': depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    break
        j += 1
    post_blocks.append(text[start:j+1])
    i = j + 1

print(f"Post blocks: {len(post_blocks)}")

posts = []
for block in post_blocks:
    posts.append({
        'slug':     extract(block, 'slug'),
        'title':    extract(block, 'title'),
        'date':     extract(block, 'date'),
        'category': extract(block, 'category'),
        'location': extract(block, 'location'),
        'readTime': extract(block, 'readTime'),
        'excerpt':  extract(block, 'excerpt'),
        'content':  extract(block, 'content'),
    })

# ── 4. Find duplicate title groups and make them unique ──────────────────────
from collections import Counter
title_counts = Counter(p['title'] for p in posts)
dup_titles   = {t for t,n in title_counts.items() if n > 1}
print(f"Duplicate title groups: {len(dup_titles)}")

# For each post with a duplicate title, derive a distinguishing phrase
# from the content (first H2, or the location+slug)
title_group_idx = defaultdict(int)

for p in posts:
    if p['title'] not in dup_titles:
        continue
    # Extract distinguishing info: first h2 heading from content
    h2 = re.search(r'<h2>(.*?)</h2>', p['content'])
    if h2:
        heading = h2.group(1).strip()
        # Shorten heading to key phrase (first 5 words)
        words = heading.split()[:5]
        suffix = ' '.join(words).rstrip(':').strip()
    else:
        suffix = p['location']

    idx = title_group_idx[p['title']]
    title_group_idx[p['title']] += 1

    if idx == 0:
        # First occurrence: append distinguishing suffix
        p['title'] = f"{p['title']}: {suffix}"
    else:
        # Subsequent occurrences
        p['title'] = f"{p['title']}: {suffix} ({p['location']})"

# Verify all titles unique now
final_titles = [p['title'] for p in posts]
final_counts = Counter(final_titles)
still_dup = {t: n for t,n in final_counts.items() if n > 1}
print(f"Still duplicate after fix: {len(still_dup)}")
if still_dup:
    # Add index suffix as last resort
    seen = {}
    for p in posts:
        t = p['title']
        if t in still_dup:
            seen[t] = seen.get(t, 0) + 1
            if seen[t] > 1:
                p['title'] = f"{t} {seen[t]}"

# ── 5. Sort oldest → newest ───────────────────────────────────────────────────
posts.sort(key=lambda p: p['date'])

# ── 6. Serialise ─────────────────────────────────────────────────────────────
def ts_esc(s):
    s = s.replace('\\', '\\\\')
    s = s.replace('`', '\\`')
    s = s.replace('${', '\\${')
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

em = re.findall(r'[—–]', final)
dup_check = Counter(re.findall(r"title: `([^`]+)`", final))
dup_remaining = sum(1 for n in dup_check.values() if n > 1)

print(f"Written {len(posts)} posts")
print(f"Lines: {final.count(chr(10))}")
print(f"Em-dashes: {len(em)}")
print(f"Duplicate titles remaining: {dup_remaining}")
assert 'export function getPost' in final
assert 'export function getRecentPosts' in final
print("Footer: OK")
