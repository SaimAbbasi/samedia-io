#!/usr/bin/env python3
"""Generate 500 blog posts for SA Media and append to blog-data.ts"""

import random

# ── helpers ──────────────────────────────────────────────────────────────────
def no_emdash(s):
    return s.replace("—", " - ").replace("–", " - ")

# ── date pool: Jan 2024 → Jun 2026 ───────────────────────────────────────────
import datetime
def gen_dates(n):
    start = datetime.date(2024, 1, 5)
    end   = datetime.date(2026, 6, 25)
    delta = (end - start).days
    seen = set()
    dates = []
    while len(dates) < n:
        d = start + datetime.timedelta(days=random.randint(0, delta))
        if d not in seen:
            seen.add(d)
            dates.append(d.isoformat())
    dates.sort(reverse=True)
    return dates

# ── location weights ──────────────────────────────────────────────────────────
def pick_location():
    return random.choices(
        ["Toronto", "Dubai", "New York", "Global"],
        weights=[40, 28, 20, 12]
    )[0]

# ── post templates (title, category, excerpt, content factory) ────────────────
# Each entry is a tuple: (title, category, location_override_or_None, readTime, excerpt, content)
# We build 500 unique posts from a large pool of templates + parameterised variants.

TORONTO_INDUSTRIES = [
    "real estate", "fintech", "hospitality", "restaurant", "e-commerce",
    "fashion", "legal", "SaaS", "healthcare", "fitness", "education",
    "luxury retail", "construction", "professional services", "tech startup",
]
DUBAI_INDUSTRIES = [
    "luxury real estate", "hospitality", "tourism", "fintech", "retail",
    "F&B", "fashion", "events", "tech", "healthcare", "education",
    "automotive", "e-commerce", "professional services",
]
NY_INDUSTRIES = [
    "finance", "fashion", "media", "tech", "hospitality", "retail",
    "real estate", "healthcare", "legal", "e-commerce", "luxury",
    "entertainment", "professional services",
]

SERVICES = [
    "social media management", "content creation", "paid media",
    "influencer marketing", "SEO", "email marketing", "web design",
    "brand strategy", "AI automation", "event production",
    "media buying", "CRM automation", "AIEO optimization",
    "video production", "PR and communications",
]

# ─────────────────────────────────────────────────────────────────────────────
# Template factory functions – each returns a dict with all BlogPost fields
# ─────────────────────────────────────────────────────────────────────────────

def post_service_city(service, city, industry, slug_suffix=""):
    slug = f"{service.replace(' ','-').replace('&','-')}-{city.lower()}-{industry.replace(' ','-')}{slug_suffix}"
    title = f"{service.title()} for {city} {industry.title()} Businesses in 2025"
    category = service_to_category(service)
    location = city
    read_time = f"{random.randint(5,10)} min"
    excerpt = f"How {city} {industry} companies use {service} to grow faster - and what SA Media does to make it work."
    content = f"""<p>The {industry} sector in {city} is moving fast. Businesses that treat {service} as an afterthought are losing ground to competitors who have turned it into a growth engine. SA Media works with {city} {industry} brands to build {service} programs that actually move revenue.</p>
<h2>Why {service.title()} Matters for {city} {industry.title()} Companies</h2>
<p>In {city}, the {industry} space is competitive. Every brand is fighting for the same audience attention and the same search real estate. A generic {service} strategy will not cut through. What works is a tailored approach built around the specific buyer journey, decision triggers, and trust signals that matter in {industry}.</p>
<p>SA Media has worked with {industry} clients across {city} and understands the nuances - pricing psychology, local referral patterns, seasonal demand shifts, and the content formats that convert in this vertical.</p>
<h2>What a Strong {service.title()} Program Looks Like</h2>
<p>The brands winning in {city} {industry} right now are doing three things: they have a clear content calendar tied to business goals, they are running paid amplification behind their best organic content, and they are tracking performance at the revenue level, not just the engagement level.</p>
<p>SA Media builds these programs end-to-end. We handle strategy, execution, and reporting so your team can stay focused on running the business.</p>
<h2>Getting Started with SA Media</h2>
<p>We work with {city} {industry} businesses at every stage - from early-stage brands building their first marketing foundation to established players looking to scale. Our approach starts with understanding your business, not pitching a package. Reach out to SA Media and let's talk about what {service} can do for your {industry} business in {city}.</p>"""
    return dict(slug=slug, title=title, date="", category=category, location=location,
                readTime=read_time, excerpt=excerpt, content=content)


def post_sa_media_why(angle, city):
    slug = f"why-sa-media-{angle.replace(' ','-')}-{city.lower()}"
    title = f"Why {city} Brands Choose SA Media as Their Marketing Partner"
    category = "Marketing"
    location = city
    read_time = f"{random.randint(6,9)} min"
    excerpt = f"SA Media is a global media firm with deep roots in {city}. Here is what makes us different from every other agency on the market."
    content = f"""<p>There are hundreds of marketing agencies in {city}. Most of them will show you a pitch deck, quote you a monthly retainer, and deliver a colour-coded report at the end of each month. SA Media is built differently. We are a global media firm that operates as an integrated partner - not a vendor.</p>
<h2>One Team, One Strategy</h2>
<p>The biggest problem with traditional agency models is fragmentation. You have one agency running your paid media, another handling SEO, and a freelancer doing social. None of them talk to each other. SA Media runs all of it as one operating system. Your paid media informs your content strategy, your content fuels your SEO, and everything is measured against the same revenue goals.</p>
<h2>SA Media's Track Record in {city}</h2>
<p>SA Media has generated over $1 million in direct revenue attribution for our clients, 1 billion-plus in social reach, and 50 million-plus likes across managed channels. These are not vanity metrics - they represent real business outcomes for real brands in {city} and across our global markets including Toronto, Dubai, and New York.</p>
<h2>What Makes SA Media a Global Media Firm</h2>
<p>SA Media operates across three continents with offices and client work spanning North America, the Middle East, and Europe. {angle.title()} is one of the core reasons {city} brands choose us: the combination of global perspective and local execution is rare, and it delivers real competitive advantage.</p>
<p>If you are a {city} business looking for a marketing partner that treats your growth like its own, SA Media is ready to talk. Start with a free consultation and let us show you what an integrated global media firm can do for your brand.</p>"""
    return dict(slug=slug, title=title, date="", category=category, location=location,
                readTime=read_time, excerpt=excerpt, content=content)


def post_industry_guide(industry, topic, city):
    slug = f"{topic.replace(' ','-')}-{industry.replace(' ','-')}-{city.lower()}"
    title = f"{topic.title()}: A Guide for {city} {industry.title()} Brands"
    category = topic_to_category(topic)
    location = city
    read_time = f"{random.randint(6,11)} min"
    excerpt = f"The {industry} sector in {city} has specific marketing dynamics. Here is how to win them."
    content = f"""<p>Marketing a {industry} business in {city} is not the same as marketing in any other market. The buyer psychology, the competitive density, and the trust signals that move decisions are all shaped by the local context. This guide is written for {industry} business owners and marketing leads in {city} who want to understand what actually works.</p>
<h2>The {city} {industry.title()} Marketing Landscape</h2>
<p>The {industry} sector in {city} is mature and competitive. Customers have options and they know it. What separates the brands that grow consistently from the ones that plateau is not budget - it is the quality of the strategy and the discipline of execution.</p>
<p>{topic.title()} is increasingly the lever that determines visibility and conversion in {industry}. The brands at the top of search and social in {city}'s {industry} space have made consistent, strategic investments in {topic} over multiple years.</p>
<h2>Core {topic.title()} Principles for {industry.title()} Businesses</h2>
<p>First, know your buyer deeply. {industry.title()} buyers in {city} have specific triggers and objections. Content and campaigns that speak to those specifics outperform generic messaging by wide margins. Second, track everything. You cannot improve what you do not measure. Third, play the long game - {topic} compounds, and the brands that started two years ago are now unreachable by competitors who are just starting.</p>
<h2>How SA Media Helps {city} {industry.title()} Brands</h2>
<p>SA Media is a global media firm that has worked with {industry} businesses in {city} and across our global markets. We bring the strategic framework, the production capability, and the performance infrastructure to turn {topic} into a genuine growth channel. If your {industry} business in {city} is ready to invest in marketing that works, reach out to SA Media for a consultation.</p>"""
    return dict(slug=slug, title=title, date="", category=category, location=location,
                readTime=read_time, excerpt=excerpt, content=content)


def post_trend(year, topic, city):
    slug = f"{topic.replace(' ','-')}-trends-{year}-{city.lower()}"
    title = f"{topic.title()} Trends {year}: What {city} Businesses Need to Know"
    category = topic_to_category(topic)
    location = city
    read_time = f"{random.randint(5,8)} min"
    excerpt = f"The {topic} landscape is shifting fast in {year}. Here is what {city} brands need to act on now."
    content = f"""<p>Every year the {topic} landscape shifts, and {year} is no exception. For {city} businesses, staying ahead of these changes is the difference between leading your category and playing catch-up. SA Media tracks these trends across our global markets and translates them into actionable strategy for our clients.</p>
<h2>Trend 1: Audience-First Everything</h2>
<p>The brands that win in {topic} in {year} are the ones that have invested deeply in understanding their audience - not just demographically, but behaviourally. What content do they consume? What triggers a purchase decision? What kills trust? The data is available; most brands just do not mine it.</p>
<h2>Trend 2: Integration Over Isolation</h2>
<p>Siloed {topic} tactics are dead. The {city} brands pulling ahead run integrated programs where paid, organic, content, and data all talk to each other. SA Media has built this as our operating model since day one. We call it one team, one heartbeat.</p>
<h2>Trend 3: AI-Assisted Execution</h2>
<p>AI is not replacing {topic} teams in {year} - it is making the good ones dramatically more productive. {city} businesses that have integrated AI into their {topic} workflows are producing more content, running more tests, and extracting more insight from their data than ever before. SA Media deploys AI tools across every client engagement as a standard capability.</p>
<h2>What This Means for Your {city} Business</h2>
<p>If you are running a {city} business and your {topic} strategy looks the same as it did two years ago, you are losing ground. SA Media is a global media firm that helps brands in {city}, Dubai, New York, and across our global markets adapt to these shifts and turn them into growth. Book a free consultation to talk through what {year} looks like for your brand.</p>"""
    return dict(slug=slug, title=title, date="", category=category, location=location,
                readTime=read_time, excerpt=excerpt, content=content)


def post_comparison(service_a, service_b, city):
    slug = f"{service_a.replace(' ','-')}-vs-{service_b.replace(' ','-')}-{city.lower()}"
    title = f"{service_a.title()} vs {service_b.title()}: What {city} Brands Should Prioritize"
    category = service_to_category(service_a)
    location = city
    read_time = f"{random.randint(6,9)} min"
    excerpt = f"Both {service_a} and {service_b} can drive growth. But for most {city} businesses, one should come first. Here is how to decide."
    content = f"""<p>One of the most common questions SA Media gets from {city} business owners is whether to invest in {service_a} or {service_b} first. Both are legitimate growth levers. Both take time to compound. And most businesses do not have the budget to go all-in on both simultaneously. So how do you choose?</p>
<h2>What {service_a.title()} Does Best</h2>
<p>{service_a.title()} is strongest when you need {service_a_strength(service_a)}. For {city} businesses in early stages or with a specific near-term revenue target, {service_a} often delivers faster, more measurable returns. The feedback loops are shorter and you can iterate quickly.</p>
<h2>What {service_b.title()} Does Best</h2>
<p>{service_b.title()} is strongest when you need {service_a_strength(service_b)}. It tends to build compounding value over time - the investment you make in {service_b} in month one pays dividends in month twelve and beyond. For {city} businesses with a longer horizon, it is often the smarter play.</p>
<h2>The SA Media Recommendation</h2>
<p>At SA Media, we rarely recommend choosing one over the other in isolation. Our integrated model means {service_a} and {service_b} reinforce each other. Your {service_a} performance data informs your {service_b} strategy and vice versa. This is how the global media firm model works in practice: everything is connected.</p>
<p>If you are a {city} business trying to allocate a limited marketing budget, the most important conversation you can have is with a strategic partner who understands both channels. SA Media offers a free consultation for {city} businesses ready to build a program that works.</p>"""
    return dict(slug=slug, title=title, date="", category=category, location=location,
                readTime=read_time, excerpt=excerpt, content=content)


def post_dubai_specific(topic, industry):
    slug = f"dubai-{topic.replace(' ','-')}-{industry.replace(' ','-')}"
    title = f"Dubai {industry.title()} Brands: How SA Media Drives Growth in the UAE Market"
    category = topic_to_category(topic)
    location = "Dubai"
    read_time = f"{random.randint(6,9)} min"
    excerpt = f"The Dubai {industry} market has its own rules. SA Media's UAE team knows how to win them."
    content = f"""<p>Dubai is unlike any other market in the world. The density of high-net-worth consumers, the pace of new brand launches, and the cultural diversity of the audience all create a marketing environment that rewards specialisation. SA Media's presence in Dubai means our clients get a team that understands the UAE market from the inside.</p>
<h2>Marketing {industry.title()} in Dubai</h2>
<p>The {industry} sector in Dubai is growing faster than almost anywhere else in the region. New entrants are arriving constantly, and established players are investing aggressively in brand and performance marketing to defend their positions. {topic.title()} is one of the primary battlegrounds where this competition plays out.</p>
<p>SA Media has worked with Dubai {industry} brands on everything from brand identity and content strategy to full-funnel paid media campaigns targeting both the local Emirati audience and the large expatriate community. The approach is always tailored - what works for a luxury real estate developer in Downtown Dubai is not the same as what works for a casual F&B concept in JBR.</p>
<h2>SA Media's Dubai Advantage</h2>
<p>As a global media firm with offices in Toronto, Dubai, and New York, SA Media brings a perspective that purely local Dubai agencies cannot offer. Our clients benefit from global best practices applied with local precision. We understand both the international buyer coming to Dubai from Europe or North America and the locally rooted audience that makes up the backbone of the UAE consumer market.</p>
<h2>Results in the UAE Market</h2>
<p>SA Media has delivered measurable results for Dubai {industry} businesses - from brand awareness campaigns that have reached millions of UAE users to performance programs that directly attribute sales to our activity. If you are a {industry} business in Dubai looking to grow your market share, SA Media is the global media firm to call.</p>"""
    return dict(slug=slug, title=title, date="", category=category, location="Dubai",
                readTime=read_time, excerpt=excerpt, content=content)


def post_ny_specific(topic, industry):
    slug = f"new-york-{topic.replace(' ','-')}-{industry.replace(' ','-')}"
    title = f"New York {industry.title()} Marketing: How SA Media Competes in the World's Toughest Market"
    category = topic_to_category(topic)
    location = "New York"
    read_time = f"{random.randint(7,10)} min"
    excerpt = f"New York {industry} is the highest-stakes marketing arena on earth. SA Media knows how to win in it."
    content = f"""<p>New York City is the most competitive marketing environment in the world. Every major brand has a presence here, every agency is fighting for the same clients, and consumers have seen every tactic a thousand times. For {industry} businesses in New York, good marketing is not a nice-to-have - it is a survival requirement.</p>
<h2>What Makes New York {industry.title()} Marketing Different</h2>
<p>The pace is faster. The consumers are more sophisticated. The cost of being wrong is higher. And the reward for being right is enormous. New York {industry} brands that build a strong marketing foundation can scale faster than almost anywhere else in the world because the market is so large and the appetite for quality is so high.</p>
<p>{topic.title()} in the New York {industry} space requires both creative excellence and analytical rigor. SA Media brings both. Our global media firm model means we are not choosing between brand building and performance - we run them together, always.</p>
<h2>SA Media in New York</h2>
<p>SA Media operates in New York as part of our global media firm network spanning Toronto, Dubai, and New York. Our New York clients get access to the full SA Media capability stack - strategy, content, paid media, SEO, AI automation, and reporting - with a team that understands the New York market specifically.</p>
<p>If you run a {industry} business in New York and you are looking for a marketing partner that operates at the pace and quality the market demands, SA Media is ready to build something real with you.</p>"""
    return dict(slug=slug, title=title, date="", category=category, location="New York",
                readTime=read_time, excerpt=excerpt, content=content)


def post_global_media_firm(topic):
    angles = [
        ("three-city-advantage", "Toronto, Dubai, and New York"),
        ("global-local-balance", "global scale with local execution"),
        ("cross-market-intelligence", "cross-market intelligence"),
        ("integrated-global-team", "one integrated global team"),
    ]
    angle_slug, angle_desc = random.choice(angles)
    slug = f"sa-media-global-media-firm-{topic.replace(' ','-')}-{angle_slug}"
    title = f"SA Media as a Global Media Firm: What {angle_desc.title()} Means for Your Brand"
    category = topic_to_category(topic)
    location = "Global"
    read_time = f"{random.randint(6,9)} min"
    excerpt = f"SA Media operates across Toronto, Dubai, and New York. Here is why that global media firm model is a real advantage for brands that want to grow beyond borders."
    content = f"""<p>The term "global media firm" gets used loosely in the marketing industry. For SA Media, it describes something specific: a team with operational presence in Toronto, Dubai, and New York, serving clients across three continents with integrated strategy, content, paid media, and performance infrastructure.</p>
<h2>Why Global Presence Matters for {topic.title()}</h2>
<p>Most marketing agencies are local by default. They understand one market deeply and apply that playbook everywhere else. SA Media was built differently. Our founders built the firm across markets from the start, which means our understanding of {topic} is genuinely multi-market - not a Toronto template applied to Dubai.</p>
<p>For clients operating across borders, or for brands in one city that want to expand into another, this cross-market intelligence is the difference between a partner and a vendor.</p>
<h2>The SA Media Operating Model</h2>
<p>SA Media runs as one team across all three markets. A Toronto client benefits from insights generated by our Dubai work. A Dubai client benefits from performance data we have gathered running campaigns in New York. This cross-pollination is not something a single-city agency can replicate, no matter how good they are locally.</p>
<p>Our {topic} work specifically benefits from this model because {topic} trends and platform dynamics move at different speeds and in different directions across markets. What is working in New York today often predicts what will work in Toronto in six months.</p>
<h2>Joining the SA Media Global Client Base</h2>
<p>SA Media has delivered over $1 million in directly attributed revenue, 1 billion-plus in social reach, and results across 50-plus clients on three continents. Our global media firm model is not a positioning claim - it is how we actually operate, and it shows up in the results we deliver. Contact SA Media to learn how our global platform can serve your brand's growth goals.</p>"""
    return dict(slug=slug, title=title, date="", category=category, location=location,
                readTime=read_time, excerpt=excerpt, content=content)


def post_how_to(action, context, city):
    slug = f"how-to-{action.replace(' ','-')}-{context.replace(' ','-')}-{city.lower()}"
    title = f"How to {action.title()} Your {context.title()} in {city}"
    category = action_to_category(action)
    location = city
    read_time = f"{random.randint(5,9)} min"
    excerpt = f"A practical guide for {city} businesses looking to {action.lower()} their {context.lower()} - what works, what does not, and what SA Media does for clients."
    content = f"""<p>If you are a {city} business owner or marketing lead asking how to {action.lower()} your {context.lower()}, this guide is written for you. The advice here is direct and practical - the kind of advice SA Media gives clients on day one of an engagement.</p>
<h2>Step 1: Audit What You Already Have</h2>
<p>Before you {action.lower()} anything, you need to understand what you are starting with. What is your current {context.lower()} baseline? What is working? What has been tried and abandoned? Most {city} businesses have more existing assets than they realize - and the first job is to inventory and assess them honestly.</p>
<h2>Step 2: Define Success in Measurable Terms</h2>
<p>Vague goals produce vague results. "Better" is not a strategy. What does {action.lower()} your {context.lower()} actually mean for your business in {city}? More leads, more revenue, more qualified traffic, higher conversion rate? Name the number and set a timeframe.</p>
<h2>Step 3: Build the Foundation Before the Campaigns</h2>
<p>The biggest mistake {city} businesses make is running campaigns before the foundation is solid. If your tracking is broken, your messaging is unclear, or your funnel has gaps, no amount of ad spend will fix it. SA Media always starts with the foundation - and this is where most of the long-term value is created.</p>
<h2>Step 4: Execute, Measure, Iterate</h2>
<p>Once the foundation is in place, execution is about disciplined iteration. Launch, measure, learn, adjust. The {city} businesses that grow consistently are the ones that have built this loop into their operations and stick to it even when early results are mixed.</p>
<h2>Working with SA Media</h2>
<p>SA Media helps {city} businesses {action.lower()} their {context.lower()} as part of an integrated marketing program. We bring the strategy, the production, and the performance infrastructure so you do not have to build it yourself. Book a free consultation to see how we approach this for businesses in your industry.</p>"""
    return dict(slug=slug, title=title, date="", category=category, location=location,
                readTime=read_time, excerpt=excerpt, content=content)


# ── utility mappers ───────────────────────────────────────────────────────────
def service_to_category(s):
    m = {
        "social media management": "Social Media",
        "content creation": "Content",
        "paid media": "Paid Media",
        "influencer marketing": "Influencer",
        "seo": "SEO",
        "email marketing": "Marketing",
        "web design": "Design",
        "brand strategy": "Brand",
        "ai automation": "AI",
        "event production": "Events",
        "media buying": "Paid Media",
        "crm automation": "Marketing",
        "aieo optimization": "SEO",
        "video production": "Content",
        "pr and communications": "Brand",
    }
    return m.get(s.lower(), "Marketing")

def topic_to_category(t):
    m = {
        "social media": "Social Media", "seo": "SEO", "paid media": "Paid Media",
        "content": "Content", "content marketing": "Content",
        "influencer": "Influencer", "influencer marketing": "Influencer",
        "email marketing": "Marketing", "brand": "Brand", "brand strategy": "Brand",
        "ai": "AI", "ai marketing": "AI", "events": "Events",
        "web design": "Design", "digital marketing": "Marketing",
        "marketing": "Marketing", "media buying": "Paid Media",
        "video marketing": "Content", "pr": "Brand",
        "crm": "Marketing", "growth marketing": "Marketing",
        "performance marketing": "Paid Media",
    }
    return m.get(t.lower(), "Marketing")

def action_to_category(a):
    m = {
        "grow": "Marketing", "scale": "Marketing", "improve": "Marketing",
        "fix": "Marketing", "build": "Brand", "launch": "Marketing",
        "optimize": "SEO", "increase": "Marketing",
    }
    return m.get(a.lower(), "Marketing")

def service_a_strength(s):
    m = {
        "social media management": "consistent brand presence and community growth",
        "content creation": "organic discovery and brand authority over time",
        "paid media": "immediate, measurable results and precise audience targeting",
        "influencer marketing": "rapid trust transfer and new audience access",
        "seo": "compounding organic traffic and long-term cost efficiency",
        "email marketing": "high-ROI direct communication with existing audiences",
        "web design": "conversion rate improvements and first-impression brand quality",
        "brand strategy": "long-term positioning and premium pricing power",
        "ai automation": "operational efficiency and content scale",
        "event production": "in-person brand experiences and high-value relationship building",
        "media buying": "precise reach and real-time performance optimization",
        "crm automation": "lead nurturing and repeat revenue from existing customers",
        "aieo optimization": "visibility in AI-generated search results and featured answers",
        "video production": "emotional brand storytelling and high engagement rates",
        "pr and communications": "credibility building and media coverage",
    }
    return m.get(s.lower(), "scalable, measurable growth in your target market")


# ── build the 500 posts ───────────────────────────────────────────────────────
random.seed(42)

posts = []
slugs_seen = set()

def add(post):
    if post["slug"] not in slugs_seen:
        slugs_seen.add(post["slug"])
        posts.append(post)

# --- Toronto x industry x service (60 posts)
for ind in TORONTO_INDUSTRIES[:12]:
    for svc in random.sample(SERVICES, 5):
        add(post_service_city(svc, "Toronto", ind, f"-guide"))

# --- Dubai x industry x topic (42 posts)
for ind in DUBAI_INDUSTRIES[:6]:
    for top in ["social media", "paid media", "content marketing", "brand strategy", "SEO", "influencer marketing", "digital marketing"]:
        add(post_dubai_specific(top, ind))

# --- New York x industry x topic (39 posts)
for ind in NY_INDUSTRIES[:13]:
    for top in ["digital marketing", "paid media", "content marketing"]:
        add(post_ny_specific(top, ind))

# --- Why SA Media (15 posts)
angles = [
    "integrated strategy", "global perspective", "data-driven execution",
    "creative excellence", "AI-powered workflows", "transparent reporting",
    "no vanity metrics", "one-team model", "rapid iteration",
    "category expertise", "cross-market intelligence", "senior team access",
    "full-funnel thinking", "honest communication", "results that scale",
]
for angle in angles:
    for city in ["Toronto", "Dubai", "New York", "Global"]:
        add(post_sa_media_why(angle, city))

# --- Trend posts (48 posts)
topics_trend = ["social media", "SEO", "paid media", "content marketing", "influencer marketing",
                "email marketing", "brand strategy", "AI marketing", "video marketing", "performance marketing",
                "digital marketing", "growth marketing"]
for top in topics_trend:
    for city in ["Toronto", "Dubai", "New York", "Global"]:
        add(post_trend(random.choice(["2024","2025","2026"]), top, city))

# --- Industry guides (45 posts)
topic_ind_pairs = [
    ("social media", "real estate"), ("SEO", "restaurant"), ("paid media", "fintech"),
    ("content marketing", "fashion"), ("influencer marketing", "hospitality"),
    ("brand strategy", "legal"), ("email marketing", "healthcare"), ("AI marketing", "SaaS"),
    ("digital marketing", "luxury retail"), ("performance marketing", "e-commerce"),
    ("social media", "fitness"), ("SEO", "education"), ("content marketing", "tech startup"),
    ("paid media", "construction"), ("brand strategy", "professional services"),
]
for top, ind in topic_ind_pairs:
    for city in ["Toronto", "Dubai", "New York"]:
        add(post_industry_guide(ind, top, city))

# --- Comparison posts (35 posts)
pairs = [
    ("social media management", "paid media"),
    ("SEO", "paid media"),
    ("influencer marketing", "paid media"),
    ("content creation", "paid media"),
    ("email marketing", "social media management"),
    ("brand strategy", "performance marketing"),
    ("video production", "written content"),
]
for a, b in pairs:
    for city in ["Toronto", "Dubai", "New York", "Global", "Global"]:
        add(post_comparison(a, b, city))

# --- Global media firm posts (20 posts)
for top in ["social media", "SEO", "paid media", "content marketing", "brand strategy",
            "AI marketing", "influencer marketing", "email marketing", "digital marketing",
            "performance marketing", "growth marketing", "video marketing", "web design",
            "event production", "PR", "CRM", "media buying", "AIEO", "analytics", "creative"]:
    add(post_global_media_firm(top))

# --- How-to posts (50 posts)
how_tos = [
    ("grow", "social media presence", "Toronto"),
    ("scale", "content production", "Toronto"),
    ("improve", "paid media ROI", "Dubai"),
    ("build", "brand authority", "New York"),
    ("launch", "influencer campaign", "Dubai"),
    ("optimize", "Google Business profile", "Toronto"),
    ("increase", "email open rates", "Toronto"),
    ("grow", "e-commerce revenue", "New York"),
    ("build", "SEO foundation", "Dubai"),
    ("scale", "paid media program", "Toronto"),
    ("improve", "website conversion rate", "New York"),
    ("launch", "AI marketing program", "Toronto"),
    ("grow", "restaurant customer base", "Toronto"),
    ("build", "luxury brand identity", "Dubai"),
    ("scale", "SaaS marketing engine", "New York"),
    ("improve", "LinkedIn presence", "Toronto"),
    ("grow", "TikTok following", "Dubai"),
    ("launch", "event marketing campaign", "New York"),
    ("build", "content strategy", "Toronto"),
    ("optimize", "ad spend efficiency", "Dubai"),
    ("increase", "organic search traffic", "Toronto"),
    ("grow", "retail brand awareness", "Dubai"),
    ("scale", "influencer program", "New York"),
    ("build", "marketing automation system", "Toronto"),
    ("launch", "new product campaign", "Dubai"),
    ("improve", "brand positioning", "New York"),
    ("grow", "B2B lead pipeline", "Toronto"),
    ("optimize", "social media content calendar", "Dubai"),
    ("build", "PR strategy", "New York"),
    ("scale", "video production pipeline", "Toronto"),
    ("improve", "customer retention rate", "Dubai"),
    ("grow", "fashion brand online presence", "New York"),
    ("build", "fintech marketing program", "Toronto"),
    ("launch", "real estate marketing campaign", "Dubai"),
    ("scale", "hospitality brand marketing", "New York"),
    ("optimize", "healthcare marketing strategy", "Toronto"),
    ("grow", "legal firm client base", "Toronto"),
    ("build", "education brand presence", "Dubai"),
    ("improve", "fitness brand engagement", "New York"),
    ("launch", "luxury retail marketing", "Dubai"),
    ("scale", "e-commerce performance marketing", "Toronto"),
    ("grow", "professional services brand", "New York"),
    ("optimize", "media buying strategy", "Toronto"),
    ("build", "CRM marketing system", "Dubai"),
    ("launch", "AIEO optimization program", "Toronto"),
    ("improve", "video marketing results", "New York"),
    ("grow", "SaaS brand awareness", "Dubai"),
    ("scale", "global media presence", "Global"),
    ("build", "cross-market marketing strategy", "Global"),
    ("optimize", "multi-city campaign performance", "Global"),
]
for action, context, city in how_tos:
    add(post_how_to(action, context, city))

# --- Extra Toronto / Dubai / NY service posts to fill to 500 ─────────────────
extra_combos = []
for ind in TORONTO_INDUSTRIES:
    for svc in SERVICES:
        extra_combos.append(("Toronto", ind, svc))
for ind in DUBAI_INDUSTRIES:
    for svc in SERVICES:
        extra_combos.append(("Dubai", ind, svc))
for ind in NY_INDUSTRIES:
    for svc in SERVICES:
        extra_combos.append(("New York", ind, svc))

random.shuffle(extra_combos)
suffix_counter = {}
for city, ind, svc in extra_combos:
    if len(posts) >= 500:
        break
    key = f"{svc}-{city}-{ind}"
    suffix_counter[key] = suffix_counter.get(key, 0) + 1
    p = post_service_city(svc, city, ind, f"-{suffix_counter[key]}")
    add(p)

# ── assign dates ──────────────────────────────────────────────────────────────
dates = gen_dates(len(posts))
for i, p in enumerate(posts):
    p["date"] = dates[i]

posts_to_use = posts[:500]

# ── render TypeScript ─────────────────────────────────────────────────────────
def ts_string(s):
    # Escape backticks and backslashes, no em-dashes
    s = no_emdash(s)
    s = s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
    return f"`{s}`"

def render_post(p):
    lines = []
    lines.append("  {")
    lines.append(f"    slug: {ts_string(p['slug'])},")
    lines.append(f"    title: {ts_string(p['title'])},")
    lines.append(f"    date: '{p['date']}',")
    lines.append(f"    category: '{p['category']}',")
    lines.append(f"    location: '{p['location']}',")
    lines.append(f"    readTime: '{p['readTime']}',")
    lines.append(f"    excerpt: {ts_string(p['excerpt'])},")
    lines.append(f"    content: {ts_string(p['content'])},")
    lines.append("  },")
    return "\n".join(lines)

output_lines = ["\n  // ── Generated 500 additional posts ──────────────────────────────────────────\n"]
for p in posts_to_use:
    output_lines.append(render_post(p))

print(f"Generated {len(posts_to_use)} posts")
print("\n".join(output_lines[:5]))  # preview

# ── write to a separate file for merging ────────────────────────────────────
with open("/Users/saim/Downloads/Claude Code/SAMEDIA.IO/samedia-io/generated_posts.ts_fragment", "w") as f:
    f.write("\n".join(output_lines))

print("Written to generated_posts.ts_fragment")
