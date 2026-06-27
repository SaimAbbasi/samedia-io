export interface ServiceData {
  slug: string
  n: string
  name: string
  eyebrow: string
  tagline: string
  description: string
  includes: string[]
  outcomes: { stat: string; label: string }[]
  philosophy?: {
    title: string
    body: string
    principles: { heading: string; detail: string }[]
  }
  zunelabPartner?: boolean
  zunelabSystems?: { n: string; name: string; desc: string; items: string[] }[]
  zunelabStats?: { value: string; label: string }[]
}

export const services: ServiceData[] = [
  {
    slug: 'brand-strategy-positioning',
    n: '01',
    name: 'Brand Strategy & Positioning',
    eyebrow: 'STRATEGY',
    tagline: 'Clarity before execution.',
    description:
      'We map your market, define your positioning, and build the digital marketing plan that guides everything else. From ICP definition to competitive analysis, this is the foundation all growth is built on.',
    includes: [
      'Digital Marketing Plan',
      'Ideal Customer Profile (ICP) Mapping',
      'Competitive Landscape Analysis',
      'Brand Positioning Framework',
      'AI Opportunity Scan',
      'Channel & Budget Allocation',
      'Messaging & Value Proposition',
      'Analytics & Attribution Setup (GA4, GTM)',
    ],
    outcomes: [
      { stat: '1', label: 'Clear positioning statement your whole team can execute' },
      { stat: '3–5×', label: 'Better campaign performance when strategy leads creative' },
      { stat: '90 days', label: 'From discovery to a fully deployed marketing plan' },
    ],
    philosophy: {
      title: 'Most agencies sell decks. We sell decisions.',
      body: 'Strategy is not a deliverable. It is an operating lens that should inform every budget call, every creative brief, every channel trade-off your team makes for the next five years. The positioning frameworks we build are designed to be stress-tested against reality - the uncomfortable ICP question, the category you are avoiding naming, the competitor advantage you have not neutralised yet. We do not build strategy that lives in a PDF. We build strategy that survives contact with the market. The top 0.1% of companies in the world do not win on execution alone. They win because their strategy eliminates the wrong decisions before they get made.',
      principles: [
        {
          heading: 'Uncomfortable truths before comfortable narratives',
          detail: 'We start every engagement by finding the thing you do not want to say about your market position. That is usually where the real opportunity lives. Most agencies skip this because it creates friction. We create friction intentionally - because a strategy that cannot withstand internal debate will not survive external competition.',
        },
        {
          heading: 'Positioning is a filter, not a tagline',
          detail: 'A brand position only works when it tells you what not to do. If your positioning says yes to every market, every customer, and every channel, it is not a position - it is a wish. We build positioning frameworks that make resource allocation obvious and trade-offs explicit. That is the difference between strategy and marketing copy.',
        },
        {
          heading: 'Strategy is live or it is dead',
          detail: 'The market moves. Your competitors respond. Consumer behaviour shifts. A strategy document written once and reviewed annually is already obsolete. We build strategy with quarterly review cadences, channel performance feedback loops, and the operational infrastructure to adapt without losing direction.',
        },
      ],
    },
  },
  {
    slug: 'brand-identity-design',
    n: '02',
    name: 'Brand Identity & Design',
    eyebrow: 'DESIGN',
    tagline: 'Every pixel has a job.',
    description:
      'We build brand identities that communicate before you say a word - logos, visual systems, UX/UI, motion design, and print collateral that make your brand impossible to ignore.',
    includes: [
      'Logo Design & Brand Mark System',
      'Color, Typography & Visual Language',
      'Brand Guidelines Document',
      'UX Flows & Wireframes',
      'High-Fidelity UI Design',
      'Motion & Micro-interactions',
      'Social Media Visual Templates',
      'Print & Collateral Design',
    ],
    outcomes: [
      { stat: '2–4 wks', label: 'From brief to final brand identity delivery' },
      { stat: '100%', label: 'Consistent cross-channel brand presentation' },
      { stat: '∞', label: 'Scalable design system you own and can extend' },
    ],
    philosophy: {
      title: 'We do not design logos. We design decision frameworks.',
      body: 'The top 0.1% of brands in the world do not have good design. They have design systems that eliminate bad judgment at scale - across every surface, every format, every application their brand will ever encounter. A logo is the start of that system, not the end of it. Our approach treats visual identity as infrastructure: the set of rules, constraints, and assets that allows an entire organisation to communicate consistently without requiring a designer in every room. When we deliver a brand identity, we are delivering the operating system for every visual decision your brand will make for the next decade.',
      principles: [
        {
          heading: 'Distinctiveness over preference',
          detail: 'Design that you personally like is not the benchmark. Design that your ideal customer cannot mistake for anyone else is. We pressure-test every brand system against the competitive landscape to ensure it owns a position - in color, in form, in personality - that your market has not already claimed.',
        },
        {
          heading: 'Systems that survive scale',
          detail: 'A brand identity that works for a startup of five breaks at a company of five hundred. We design every system with that future scale in mind - component libraries that extend, guidelines specific enough to be enforced, templates flexible enough to be adapted. Your brand should look consistent whether it is on a business card or a billboard.',
        },
        {
          heading: 'Motion is not decoration',
          detail: 'In a digital-first world, static design is half a brand. How your brand moves - how it enters a screen, how it transitions, how it draws attention - communicates as much as your logo. We build motion principles into every identity system because the brands that do not are already leaving a communication surface unmapped.',
        },
      ],
    },
  },
  {
    slug: 'social-media-management',
    n: '03',
    name: 'Social Media Management',
    eyebrow: 'SOCIAL',
    tagline: 'Always on. Always sharp.',
    description:
      'We run your social media channels as a full-stack operation - strategy, content calendar, creative production, posting, community management, and monthly reporting. You show up every day without lifting a finger.',
    includes: [
      'Multi-Channel Strategy (Instagram, TikTok, LinkedIn, X)',
      'Monthly Content Calendar',
      'Post Creation & Scheduling',
      'Community Management & Engagement',
      'Hashtag & Trend Research',
      'Story & Reel Production',
      'Monthly Analytics Report',
      'Audience Growth Tracking',
    ],
    outcomes: [
      { stat: '1B+', label: 'Social media reach generated across client accounts' },
      { stat: '50M+', label: 'Likes and engagements generated' },
      { stat: '30 days', label: 'To your first full content calendar, live' },
    ],
    philosophy: {
      title: 'Social media is not a content calendar. It is the most direct relationship your brand has with its audience.',
      body: 'Most agencies manage social media like a publishing schedule: post three times a week, use trending audio, include a call to action. That is the floor, not the ceiling. The brands in the top 0.1% treat their social channels as owned media properties - with editorial direction, audience development strategy, community culture, and platform-specific positioning that makes their presence feel irreplaceable rather than interchangeable. We run social media as an operating system for brand trust. Every piece of content serves a purpose in the audience journey - awareness, consideration, loyalty, or advocacy. Nothing goes out because it fills a slot.',
      principles: [
        {
          heading: 'Platform specificity over cross-posting',
          detail: 'A LinkedIn post shared to Instagram is noise on both platforms. Each channel has a distinct audience psychology, content format expectation, and algorithmic logic. We build platform-specific strategies that play to the native strengths of each channel - rather than publishing a single asset everywhere and calling it a social media strategy.',
        },
        {
          heading: 'Community is a competitive moat',
          detail: 'The brands that cannot be commoditised are the ones whose audiences feel a genuine relationship with them. Community management is not a customer service function - it is brand building at the comment level. How you respond, what you say, what you do not say, and how fast you move all communicate something about who you are.',
        },
        {
          heading: 'Data-led creative, not data-driven',
          detail: 'Analytics tell you what worked. They do not tell you what to try next. We use performance data to inform creative decisions - identifying the formats, topics, tones, and hooks that resonate with your specific audience - while preserving the creative risk-taking that generates breakout content. Brands that over-optimise for metrics stop surprising people.',
        },
      ],
    },
  },
  {
    slug: 'content-creation',
    n: '04',
    name: 'Content Creation',
    eyebrow: 'CONTENT',
    tagline: 'Content that earns attention.',
    description:
      'We produce photo, video, UGC, and written content at the scale modern brands need - from short-form social clips to long-form editorial, shot to your brand standards and optimized for every platform.',
    includes: [
      'Photography (Product, Lifestyle, Editorial)',
      'Video Production (Short-form, Long-form, Reels)',
      'UGC (User-Generated Content) at Scale',
      'Copywriting & Blog Articles',
      'Email & Ad Copywriting',
      'Script Writing',
      'Content Repurposing & Reformatting',
      'Creative Direction & Storyboarding',
    ],
    outcomes: [
      { stat: '100+', label: 'Creatives produced across client campaigns' },
      { stat: '3–5×', label: 'More content output vs. in-house teams at same cost' },
      { stat: '72 hrs', label: 'Average turnaround on content briefs' },
    ],
    philosophy: {
      title: 'Good content is not creative for creativity\'s sake. It is a distribution strategy with a visual execution.',
      body: 'Every piece of content we produce begins with a distribution question: where does this live, who sees it, and what do we need them to do when they do? Aesthetic is important. Brand consistency is non-negotiable. But a beautiful piece of content that does not move the audience toward a decision is expensive decoration. The top brands in the world have figured this out. They do not produce good content. They build content machines - systematic, repeatable production operations that generate high-quality output at the volume modern distribution requires, with the quality control to ensure every piece is on-brand and on-strategy.',
      principles: [
        {
          heading: 'Volume without sacrificing standards',
          detail: 'The algorithm rewards frequency. Audiences reward quality. The only way to do both simultaneously is with production systems, not heroics. We build content production operations that can scale output without scaling costs proportionally - through templatisation, modular creative systems, and briefing frameworks that eliminate re-work.',
        },
        {
          heading: 'UGC is not an afterthought',
          detail: 'User-generated content is the most trusted content format available to brands, and most brands treat it as an add-on rather than a strategic priority. We build UGC programmes as core content infrastructure - sourcing, directing, and deploying creator content that carries the authenticity no production budget can manufacture.',
        },
        {
          heading: 'Repurposing is a multiplier, not a shortcut',
          detail: 'A long-form video becomes eight short-form clips. A photo shoot becomes three months of social assets. A blog post becomes an email sequence. Intelligent repurposing multiplies the return on every content investment without diluting quality. We build repurposing plans into every content brief before the first shot is taken.',
        },
      ],
    },
  },
  {
    slug: 'media-buying-ads',
    n: '05',
    name: 'Media Buying & Ads',
    eyebrow: 'PERFORMANCE',
    tagline: 'Spend less. Convert more.',
    description:
      'We manage paid media campaigns on Google, Meta, and TikTok - from audience research and creative strategy through to daily optimization and transparent reporting. Every dollar is tracked to a result.',
    includes: [
      'Google Ads (Search, Display, Shopping, YouTube)',
      'Meta Ads (Facebook & Instagram)',
      'TikTok Ads',
      'Audience Research & Segmentation',
      'Ad Creative Production',
      'A/B Testing & Optimization',
      'Landing Page Alignment',
      'Weekly Performance Reporting',
    ],
    outcomes: [
      { stat: '$1M+', label: 'In client sales generated through paid campaigns' },
      { stat: '2–4×', label: 'Average ROAS improvement after first 60 days' },
      { stat: '30 days', label: 'To full campaign launch and first data cycle' },
    ],
    philosophy: {
      title: 'The most dangerous thing in paid media is a comfortable ROAS.',
      body: 'It means you have stopped testing. The brands spending at the top of their category are not running campaigns - they are running permanent experimentation operations, with systematic creative testing, audience hypothesis validation, and bidding architecture that improves every week. A comfortable return means a stagnant creative library, a shrinking audience, and a competitor who is still testing while you are coasting. We approach every paid media engagement as a compounding system: the first 30 days build the data foundation, the next 60 days establish what works, and from day 90 forward we are in continuous optimisation - improving ROAS, expanding audiences, and reducing waste with every cycle.',
      principles: [
        {
          heading: 'Creative is the primary variable',
          detail: 'Targeting has commoditised. The algorithm is smarter than any manual audience build. The remaining lever is creative - and most brands are only testing two or three variants per campaign. We test ten to twenty creatives per cycle, with a systematic framework for identifying winning hooks, formats, and messages faster than any single-creative approach can.',
        },
        {
          heading: 'Attribution before optimisation',
          detail: 'You cannot optimise what you cannot measure. Before we spend the first dollar, we build the tracking infrastructure that tells us which channels, creatives, and audiences are actually driving revenue - not just clicks. Campaigns optimised against the wrong signal will improve the metric you are watching and worsen the one that actually matters.',
        },
        {
          heading: 'The landing page is half the campaign',
          detail: 'The best ad in the world cannot fix a landing page that does not convert. We treat the click destination as part of the campaign - auditing, optimising, and testing landing page elements in parallel with ad creative. The brands with the highest ROAS are rarely running the best ads. They are running the best ad-to-landing-page systems.',
        },
      ],
    },
  },
  {
    slug: 'influencer-marketing',
    n: '06',
    name: 'Influencer Marketing',
    eyebrow: 'CREATORS',
    tagline: 'The right creator. The right audience.',
    description:
      'We source, vet, brief, and manage creator partnerships that actually convert - from nano-influencers driving niche community trust to macro campaigns with massive reach, all matched to your audience.',
    includes: [
      'Creator Research & Vetting',
      'Audience Fit & Authenticity Analysis',
      'Campaign Brief & Creative Direction',
      'Negotiation & Contracting',
      'Content Review & Approval',
      'UGC Rights Management',
      'Campaign Tracking & Attribution',
      'Post-Campaign Reporting & ROI',
    ],
    outcomes: [
      { stat: '50+', label: 'Clients served with influencer campaigns' },
      { stat: '3–10×', label: 'Earned media value vs. paid media equivalent spend' },
      { stat: '14 days', label: 'From brief to first creator posts live' },
    ],
    philosophy: {
      title: 'We do not cast influencers. We build distribution partnerships with people who have earned their audience\'s trust.',
      body: 'Reach is a commodity. Any agency can book a creator with a million followers. The question is whether that creator\'s audience trusts them enough to take action on a recommendation, whether that audience actually overlaps with your ideal customer, and whether the content they produce serves your brand long after the post goes live. The top brands treating influencer marketing as a serious growth channel are not buying impressions - they are building creator networks that function as a distributed sales team. They brief creators like partners, not executors. They structure deals for long-term authentic association, not one-off posts. And they measure conversion, not vanity.',
      principles: [
        {
          heading: 'Audience fit over follower count',
          detail: 'A creator with 15,000 highly engaged followers in your exact niche will outperform a creator with 500,000 mismatched followers on every metric that matters. Our vetting process goes beyond demographic overlays - we analyse engagement authenticity, content-brand alignment, comment sentiment, and purchase behaviour signals before recommending a single creator to a client.',
        },
        {
          heading: 'Long-term partnerships over one-off posts',
          detail: 'Audiences trust creators they have seen endorse a brand across multiple touchpoints over months. A single sponsored post registers as advertising. Three posts over six months from a creator who genuinely uses the product registers as a recommendation. We structure creator relationships to build the repetition that drives real conviction.',
        },
        {
          heading: 'Brief like a collaborator, not a vendor',
          detail: 'The briefing process determines whether you get content that converts or content that complies. We write creator briefs that give enough strategic direction to ensure brand alignment while preserving enough creative latitude to produce content that feels authentic to that creator\'s voice. Overly prescriptive briefs kill the thing that made the creator worth working with.',
        },
      ],
    },
  },
  {
    slug: 'seo-content-strategy',
    n: '07',
    name: 'SEO & Content Strategy',
    eyebrow: 'SEO',
    tagline: 'Organic growth you own forever.',
    description:
      'We build long-term organic visibility through technical SEO, authority content, and link building - so your brand earns traffic that compounds over time, not traffic you stop paying for the moment your budget runs out.',
    includes: [
      'Technical SEO Audit & Fixes',
      'Keyword Research & Mapping',
      'Content Strategy & Editorial Calendar',
      'Authority Blog & Article Production',
      'On-Page Optimization',
      'Link Building & Digital PR',
      'Local SEO',
      'Monthly Rankings & Traffic Report',
    ],
    outcomes: [
      { stat: '6 mos', label: 'To meaningful organic traffic growth from a standing start' },
      { stat: '3–5×', label: 'More organic sessions after 12-month engagement' },
      { stat: '∞', label: 'Traffic that keeps coming even when you pause spend' },
    ],
    philosophy: {
      title: 'SEO is trust arbitrage. The question is not how to rank - it is how to become the brand the internet recommends.',
      body: 'Google, and increasingly AI search engines, are asking one fundamental question about every piece of content they surface: does the internet trust this source enough to send someone there? Trust is built through authority - the depth of your expertise, the quality of your content, the quality of the sites that reference you. It is also built through technical excellence: a site that loads in three seconds, with clear structure and accessible content, signals seriousness. The top 0.1% of brands in organic search did not get there by optimising for algorithms. They got there by building genuine authority in their category - and then making sure the technical infrastructure did not hold them back.',
      principles: [
        {
          heading: 'Content depth over content volume',
          detail: 'Publishing fifty shallow blog posts does not build authority. Publishing ten genuinely useful, comprehensive pieces of content that answer the questions your target customer is actually asking does. We build content strategies around depth first - establishing authoritative positions on high-value topics before expanding into adjacent territory.',
        },
        {
          heading: 'Technical SEO is the foundation, not an afterthought',
          detail: 'Brilliant content on a technically broken site is invisible. Crawl errors, slow load times, duplicate content, broken internal linking, and missing structured data are all ceiling limiters that suppress even the best content. We audit and fix technical foundations before investing in content - because clean infrastructure multiplies the return on every content investment.',
        },
        {
          heading: 'AIEO is the new frontier of SEO',
          detail: 'AI search engines - ChatGPT, Perplexity, Gemini, Google AI Overviews - are now answering queries that used to generate clicks. Being the source that AI engines cite is the next chapter of organic visibility. We build every SEO programme with AI citation strategy integrated - because the brands that optimise for traditional search alone are already playing a shrinking game.',
        },
      ],
    },
  },
  {
    slug: 'email-crm-automation',
    n: '08',
    name: 'Email & CRM Automation',
    eyebrow: 'EMAIL & CRM',
    tagline: 'Nurture while you sleep.',
    description:
      'We build email sequences, automation flows, and CRM pipelines that nurture leads and retain customers on autopilot - from welcome series and abandoned cart flows to full lifecycle marketing programs.',
    includes: [
      'Email Platform Setup & Migration',
      'CRM Configuration (HubSpot, Klaviyo, Mailchimp)',
      'Welcome & Onboarding Sequences',
      'Abandoned Cart & Browse Abandonment Flows',
      'Lead Nurture Drip Campaigns',
      'Re-engagement Campaigns',
      'Segmentation & Personalization',
      'A/B Testing & Deliverability Optimization',
    ],
    outcomes: [
      { stat: '40–60%', label: 'Average open rate on well-segmented SA Media sequences' },
      { stat: '3–8×', label: 'ROI on email vs. every other marketing channel' },
      { stat: '30 days', label: 'To first automated flow live and generating revenue' },
    ],
    philosophy: {
      title: 'Email is the only channel you truly own. We treat it like the asset it is.',
      body: 'There is no algorithm between you and your subscriber. No ad auction, no feed ranking, no platform policy that decides whether your message reaches the person who asked to hear from you. Email is the highest-leverage owned asset in marketing - and the brands treating it as a newsletter they send when they remember to are leaving the majority of its value on the table. The top e-commerce and B2B brands in the world generate 30-50% of their revenue from email. Not because they send more email - because they send the right message to the right person at the right moment in the customer journey. That requires architecture: segmentation, behavioural triggers, lifecycle stages, and continuous testing.',
      principles: [
        {
          heading: 'Automation is not set-and-forget',
          detail: 'A welcome sequence built eighteen months ago is optimised for an audience that no longer exists. We build email automation with continuous improvement built in - A/B testing frameworks, performance review cadences, and refresh cycles that keep flows performing at their ceiling rather than decaying toward the floor.',
        },
        {
          heading: 'Segmentation is the multiplier',
          detail: 'Sending the same email to your entire list is choosing to be relevant to no one. Customers who purchased last week, customers who have not opened in six months, and customers who just signed up for your lead magnet have completely different relationships with your brand. We build segmentation infrastructure that allows every email to be calibrated to the subscriber receiving it.',
        },
        {
          heading: 'Deliverability is the foundation',
          detail: 'An email that does not reach the inbox does not exist. Domain reputation, sending infrastructure, list hygiene, authentication protocols, and content quality all determine whether your carefully crafted sequence lands in the primary inbox or disappears into spam. We build on clean deliverability foundations because volume without deliverability is wasted investment.',
        },
      ],
    },
  },
  {
    slug: 'web-ecommerce-development',
    n: '09',
    name: 'Web & E-commerce Development',
    eyebrow: 'WEB & E-COMM',
    tagline: 'Built to convert. Built to scale.',
    description:
      'We design and develop websites, landing pages, and e-commerce stores that are fast, beautiful, and optimized for conversion - from custom Next.js builds to Shopify storefronts built for seven-figure brands.',
    includes: [
      'Custom Website Development (Next.js, React)',
      'Shopify & WooCommerce E-commerce',
      'Landing Page Design & Development',
      'E-commerce Development',
      'Custom Blocks & Theming',
      'Booking & Payment Systems',
      'API & Third-Party Integrations',
      'Performance & Core Web Vitals',
      'Security & Accessibility Compliance',
    ],
    outcomes: [
      { stat: '2–4×', label: 'Conversion rate improvement vs. DIY builds' },
      { stat: '<2s', label: 'Load time target on all SA Media builds' },
      { stat: '6–12 wks', label: 'Full-scope website from kickoff to launch' },
    ],
    philosophy: {
      title: 'A website is not a brochure. It is a 24/7 sales system, a brand statement, and a conversion machine operating simultaneously.',
      body: 'Most companies underestimate how much their website is costing them. A slow load time costs conversions. A confusing information hierarchy costs leads. A checkout with too many steps costs sales. A design that does not match the quality of the product costs trust at the moment it matters most. The top brands in the world treat their website as the highest-leverage piece of digital infrastructure they own - because every campaign they run, every piece of content they produce, and every ad they buy is ultimately directing traffic to a page that either converts or does not. We build websites that work. Fast, opinionated, architecturally sound, and conversion-optimised from the first pixel to the last.',
      principles: [
        {
          heading: 'Performance is not optional',
          detail: 'Google\'s Core Web Vitals are a ranking factor. A one-second delay in page load reduces conversions by 7%. Users on mobile leave a slow site in under three seconds. Speed is not a technical nicety - it is a revenue variable. Every site we build is optimised for sub-two-second load times, with performance budgets enforced from the first commit.',
        },
        {
          heading: 'Conversion architecture before visual design',
          detail: 'The most beautiful website that does not guide the user toward a decision is expensive art. We map conversion architecture - the user journey, the hierarchy of information, the placement and friction of calls to action - before a single visual element is designed. The result is a site where the aesthetics serve the function, not the other way around.',
        },
        {
          heading: 'Owned infrastructure, not rented platforms',
          detail: 'Template-based website builders make launch easy and scale expensive. The brands serious about growth need infrastructure they control: custom codebases that extend without restrictions, performance profiles that do not degrade as content grows, and integration capabilities that connect to every tool in their stack without middleware tax.',
        },
      ],
    },
  },
  {
    slug: 'app-development',
    n: '10',
    name: 'App Development',
    eyebrow: 'APP DEV',
    tagline: 'Custom software. Real-world outcomes.',
    description:
      'We build custom web and mobile applications end-to-end - from initial architecture and design through to deployment and ongoing maintenance. If your business needs software that does not exist off the shelf, we build it.',
    includes: [
      'Web Application Development (React, Next.js)',
      'Mobile App Development (React Native)',
      'Backend & API Development',
      'Database Architecture',
      'Third-Party API Integrations',
      'Admin Dashboards & Internal Tools',
      'Performance & Scalability Engineering',
      'QA Testing & Security Audits',
    ],
    outcomes: [
      { stat: '3–6 wks', label: 'MVP delivery from approved spec' },
      { stat: '99.9%', label: 'Uptime SLA on all production deployments' },
      { stat: '∞', label: 'Scalable architecture that grows with your user base' },
    ],
    philosophy: {
      title: 'Software is operations made permanent. We build for where you are going, not just where you are.',
      body: 'Custom software is the highest-leverage investment a scaling company can make - and the most expensive to get wrong. An application architected for today\'s user volume breaks at ten times that volume. An interface designed without user testing requires expensive re-work when adoption stalls. An integration built without security consideration becomes a liability the moment your data becomes valuable. The top companies in the world treat their custom software as strategic infrastructure - not just internal tooling. We approach every application build with the same question: what would this need to look like if the company were ten times its current size? The architecture decisions made in the first sprint determine the ceiling of what you can build.',
      principles: [
        {
          heading: 'Architecture decisions are irreversible in practice',
          detail: 'Choosing the wrong database, the wrong state management pattern, or the wrong API structure at the start of a project creates a technical debt that compounds with every subsequent feature. We invest heavily in the specification and architecture phase - not because it delays launch, but because it is the only phase where the cost of a wrong decision is low.',
        },
        {
          heading: 'The MVP is a learning instrument, not a finished product',
          detail: 'The goal of a minimum viable product is to generate the highest-value information about what to build next at the lowest possible cost. An MVP that launches with the right core functionality and a clean data model for iteration is worth more than a fully featured launch that cannot be changed without a rebuild.',
        },
        {
          heading: 'Security and performance are requirements, not features',
          detail: 'They are not on the roadmap. They are not something to add after launch. Every production application we deploy is penetration-tested, performance-profiled, and monitored from day one - because the cost of a security incident or a performance failure at scale is not a development cost. It is a business cost.',
        },
      ],
    },
  },
  {
    slug: 'analytics-attribution',
    n: '11',
    name: 'Analytics & Attribution',
    eyebrow: 'ANALYTICS',
    tagline: 'Know what\'s working. Prove it.',
    description:
      'We install and configure GA4, GTM, and multi-touch attribution pipelines so you can see exactly which channels, campaigns, and creatives are driving revenue - and cut spend on everything that is not.',
    includes: [
      'GA4 Setup & Migration',
      'Google Tag Manager Configuration',
      'Conversion Tracking (Ads, Social, Email)',
      'Multi-Touch Attribution Modeling',
      'Custom Dashboards (Looker Studio, Notion)',
      'E-commerce Revenue Tracking',
      'Server-Side Tracking',
      'Monthly Analytics Reporting',
    ],
    outcomes: [
      { stat: '20–40%', label: 'Typical ad spend savings when attribution is fixed' },
      { stat: '100%', label: 'Visibility into which channel closes deals' },
      { stat: '2 wks', label: 'To full tracking stack live and validated' },
    ],
    philosophy: {
      title: 'Attribution is not a technical problem. It is the strategic problem that determines whether every other investment is rational.',
      body: 'Most companies are running in the dark. They have more data than they have ever had, and less insight than they need - because the data is badly structured, the tracking is broken, or the attribution model is attributing revenue to the last click rather than the channel that actually drove the decision. The top 0.1% of companies make marketing decisions with the same rigour they apply to financial decisions. They know, with genuine precision, which channels are driving pipeline, which creatives are closing deals, and which campaigns are consuming budget without generating returns. That level of visibility is not a reporting nicety - it is the precondition for rational resource allocation. We build the tracking infrastructure that makes intelligent decisions possible.',
      principles: [
        {
          heading: 'First-party data is the only data you can trust',
          detail: 'Third-party cookie deprecation, iOS privacy changes, and platform attribution discrepancies have made third-party data unreliable as a primary signal. We build analytics programmes around first-party data collection - server-side tracking, CRM integrations, and customer data platforms that give you a ground-truth view of your customer\'s journey independent of any platform\'s self-reported numbers.',
        },
        {
          heading: 'Attribution models are hypotheses, not facts',
          detail: 'Last-click attribution tells you which channel got the final touch. First-click tells you where awareness started. Neither tells you how the decision was actually made. We configure multi-touch models with position-based weighting calibrated to your specific sales cycle - and we review and update those models as the market and customer behaviour evolve.',
        },
        {
          heading: 'A dashboard nobody reads is not an analytics programme',
          detail: 'The test of an analytics build is not whether it captures data - it is whether it changes the decisions being made in the business. We design reporting outputs around the specific decisions your team needs to make: budget allocation calls, creative testing priorities, channel expansion decisions. Metrics without decisions attached to them are noise.',
        },
      ],
    },
  },
  {
    slug: 'ai-development-automation',
    n: '12',
    name: 'AI Development & Automation',
    eyebrow: 'AI SYSTEMS',
    tagline: 'Your operation, automated.',
    description:
      'We build custom AI tools, workflow automations, and infrastructure that plug directly into your existing operations - eliminating the repetitive work that drains your team and budget every single week.',
    includes: [
      'AI Workflow Design & Architecture',
      'Custom AI Tool Development',
      'LLM Integration (OpenAI, Anthropic, Gemini)',
      'RAG Systems & Vector Database Setup',
      'Automation Pipelines (Make, Zapier, n8n)',
      'CRM & Tool Integration (HubSpot, Salesforce, Notion)',
      'Internal AI Dashboards & Interfaces',
      'Ongoing Monitoring & Optimization',
    ],
    outcomes: [
      { stat: '35+', label: 'Hours per week recovered per client on average' },
      { stat: '$147K+', label: 'Per year in manual work eliminated' },
      { stat: '2×', label: 'Client capacity without adding headcount' },
    ],
    philosophy: {
      title: 'The companies that will dominate the next decade are not the ones with the most employees. They are the ones with the most leverage.',
      body: 'AI automation is not an efficiency initiative. It is compound interest on the capacity of every person in your organisation. A team of ten with well-built AI infrastructure operates with the throughput of a team of thirty - while making faster, better-informed decisions than either. The top 0.1% of companies are not experimenting with AI. They have moved past experimentation into systematic deployment - with custom tools built to their specific workflows, automated pipelines that eliminate the repetitive work that consumes skilled people\'s time, and AI infrastructure that learns and improves as it runs. Working in partnership with our sister company Zune Lab, we build AI systems that work in production - not demos.',
      principles: [
        {
          heading: 'Build for the workflow, not the technology',
          detail: 'The most common failure in AI implementation is building around what the technology can do rather than what the business needs to do. We start every engagement with a workflow audit - mapping the actual processes that consume time, identifying the highest-leverage automation opportunities, and designing AI systems around eliminating those specific bottlenecks rather than deploying AI for its own sake.',
        },
        {
          heading: 'Human oversight is an architecture decision, not an afterthought',
          detail: 'The right level of automation is not always full automation. Some decisions require human judgment. Some outputs require human review. We design AI systems with explicit human-in-the-loop touchpoints where the cost of an error exceeds the cost of a review - and full automation where the reverse is true. The companies that deploy AI irresponsibly pay for it.',
        },
        {
          heading: 'Automation compounds when it is built on clean data',
          detail: 'An AI system trained on disorganised, inconsistent, or incomplete data produces disorganised, inconsistent, or incomplete outputs - faster. Before we build automation, we audit the data infrastructure it will run on. The investment in clean data architecture before deployment multiplies every automation that runs on top of it.',
        },
      ],
    },
    zunelabPartner: true,
    zunelabSystems: [
      {
        n: '01',
        name: 'AI Client Onboarding System',
        desc: 'Turn a 3-week manual process into a 4-hour automated pipeline.',
        items: [
          'Document collection and processing automation',
          'Intake form workflows with conditional logic',
          'Automated welcome and setup sequences',
          'Internal team notification and handoff triggers',
          'CRM integration and record creation',
        ],
      },
      {
        n: '02',
        name: 'Intelligent Communications & Ticket Routing',
        desc: 'Every message read, categorized, and routed in seconds. No human triage required.',
        items: [
          'Multi-channel message ingestion (email, Slack, support tools)',
          'AI classification and intent detection',
          'Auto-routing rules engine with priority logic',
          'Automated status update and acknowledgment sequences',
          'Escalation triggers and SLA monitoring',
        ],
      },
      {
        n: '03',
        name: 'Internal Knowledge Base & AI Brain',
        desc: 'Every answer your team needs, available instantly.',
        items: [
          'Document ingestion and semantic indexing',
          'RAG-tuned query interface trained on your data',
          'SOP digitization and standardized formatting',
          'Internal chat or Slack integration',
          'Ongoing update and maintenance workflow',
        ],
      },
      {
        n: '04',
        name: 'Automated Reporting & Client Deliverables',
        desc: 'Reports that write themselves, format themselves, and send themselves.',
        items: [
          'Multi-source data integration and live pulling',
          'AI narrative and insight generation',
          'PDF and document formatting automation',
          'Scheduled delivery to client or stakeholder lists',
          'Client-specific template and branding management',
        ],
      },
      {
        n: '05',
        name: 'AI Hiring & Recruitment Pipeline',
        desc: 'Screen 200 applicants, interview the top 10. No HR meetings required.',
        items: [
          'Applicant ingestion and AI screening against role criteria',
          'Automated scoring and ranking system',
          'Pre-screening questionnaire delivery and response analysis',
          'Calendar integration for top-candidate interviews',
          'Shortlist delivery with scoring rationale',
        ],
      },
      {
        n: '06',
        name: 'Sales Follow-Up & Pipeline Automation',
        desc: 'Every prospect followed up with. No manual tasks from your sales team.',
        items: [
          'Pipeline state tracking and deal health monitoring',
          'Personalized follow-up sequence automation',
          'Behavior-triggered outreach and re-engagement',
          'CRM sync and automatic record updates',
          'Reporting on pipeline velocity and conversion impact',
        ],
      },
    ],
    zunelabStats: [
      { value: '$10M+', label: 'Value created across projects' },
      { value: '35+', label: 'Hours/week saved per client' },
      { value: '$6M+', label: 'In projects delivered' },
    ],
  },
  {
    slug: 'ai-agent-building',
    n: '13',
    name: 'AI Agent Building',
    eyebrow: 'AI AGENTS',
    tagline: 'Agents that work while you do not.',
    description:
      'We design and build autonomous AI agents that handle real business tasks end-to-end - from researching prospects and drafting outreach to managing tickets and executing multi-step workflows without human oversight.',
    includes: [
      'Agentic System Architecture & Design',
      'Multi-Step Workflow Agents',
      'Research & Prospecting Agents',
      'Customer Service & Support Agents',
      'Internal Operations Agents',
      'Tool Use & API Calling (OpenAI, Anthropic)',
      'Memory & Context Management (LangChain, Pinecone)',
      'Agent Monitoring & Guardrails',
    ],
    outcomes: [
      { stat: '80%', label: 'Reduction in repetitive human-handled tasks' },
      { stat: '24/7', label: 'Agents work around the clock with zero overtime' },
      { stat: '4–6 wks', label: 'From scoping to first agent live in production' },
    ],
    philosophy: {
      title: 'An AI agent is not a chatbot. It is a digital team member with a defined role, measurable output, and the ability to act.',
      body: 'The distinction matters. A chatbot answers questions. An agent takes actions - it researches, writes, sends, schedules, queries, updates, and decides - across multiple tools, in sequence, without a human initiating each step. The companies deploying agents at the top 0.1% level are not using them to handle FAQ responses. They are using them to eliminate entire job functions that were previously eating the time of their most skilled people. Sales development agents that research and personalise outreach at scale. Operations agents that monitor systems, identify anomalies, and generate remediation steps. Research agents that synthesise market intelligence daily and surface the insights that drive decisions. We build agents the same way we would hire for a role: with a clear scope, a defined set of tools, an operating playbook, and performance expectations from day one.',
      principles: [
        {
          heading: 'Scope before capability',
          detail: 'The most common failure in agent deployment is scoping too broadly. An agent given an open-ended mandate produces open-ended, untrustworthy results. We define every agent by its exact responsibility boundary - what it is authorised to do, what it must escalate, and what it should never attempt. Narrow scope with deep capability outperforms broad scope with shallow execution every time.',
        },
        {
          heading: 'Agents need guardrails, not just goals',
          detail: 'An agent optimising for a metric without constraints will find the shortest path to that metric - which is frequently not the path you intended. We build guardrail systems into every agent: output validation, confidence thresholds, escalation triggers, and audit logs that make agent behaviour traceable, predictable, and correctable.',
        },
        {
          heading: 'Memory architecture determines agent quality',
          detail: 'An agent without memory makes the same mistakes every session. An agent with well-structured memory improves with every interaction - learning the preferences, context, and history that allows it to operate with the judgment of someone who has been in the role for months. We build memory architectures using vector databases and context management systems that give agents the institutional knowledge they need to be genuinely useful.',
        },
      ],
    },
    zunelabPartner: true,
    zunelabStats: [
      { value: '$10M+', label: 'Value created across AI projects' },
      { value: '35+', label: 'Hours/week recovered per client' },
      { value: '2×', label: 'Capacity without new hires' },
    ],
  },
  {
    slug: 'aieo-geo-optimization',
    n: '14',
    name: 'AIEO & GEO Optimization',
    eyebrow: 'AIEO & GEO',
    tagline: 'Be the answer AI gives.',
    description:
      'AI search engines - ChatGPT, Perplexity, Gemini, Claude - are becoming the first touch for millions of buying decisions. We optimise your brand\'s presence across these platforms so you are cited, recommended, and found when it matters most.',
    includes: [
      'AI Engine Optimization (AIEO) Audit',
      'Generative Engine Optimization (GEO) Strategy',
      'ChatGPT & Perplexity Visibility Analysis',
      'Google AI Overview Optimization',
      'Gemini & Claude Brand Mentions',
      'Structured Data & Schema Markup',
      'Authority Content for AI Citation',
      'Ongoing AIEO Monitoring & Reporting',
    ],
    outcomes: [
      { stat: '3–6 mos', label: 'To measurable AI search visibility improvement' },
      { stat: '40%', label: 'Of Google searches now show AI overviews' },
      { stat: '1st', label: 'Mover advantage - most brands have not started yet' },
    ],
    philosophy: {
      title: 'The next decade of search will be dominated by AI-generated answers. The brands cited by AI engines today are building a structural moat.',
      body: 'Traditional SEO optimised for a world where users clicked links. AIEO and GEO optimise for a world where users read answers - and the brands that appear in those answers capture demand that the brands who only invested in traditional search are invisible to. This is not a future state. It is happening now. ChatGPT processes over 100 million queries per day. Perplexity has grown to over 10 million daily active users. Google\'s AI Overviews appear on over 40% of searches. The buying journey for millions of consumers and business buyers now begins with an AI-generated answer - and the brands that appear in that answer own the beginning of the funnel in a way that no amount of traditional advertising can replicate. We are building the AIEO and GEO discipline that the top 0.1% of brands will have established as standard practice five years from now.',
      principles: [
        {
          heading: 'AI engines cite sources they trust',
          detail: 'The selection criteria for AI citation are not entirely different from the selection criteria for search ranking - authority, specificity, accuracy, and structured information. But the weight of each factor shifts. AI engines weight factual accuracy and structured data more heavily. They favour sources with deep topical authority over sources with broad shallow coverage. We build the content and technical infrastructure that positions your brand as the trusted source in your category.',
        },
        {
          heading: 'Brand mentions across the web are the new backlinks',
          detail: 'AI language models are trained on the internet. The frequency, context, and sentiment of your brand\'s mentions across the web directly influences how AI engines represent your brand in their outputs. AIEO is, in part, a reputation management discipline - building the breadth and quality of brand mentions that train AI models to represent your brand accurately and favourably.',
        },
        {
          heading: 'First-mover advantage compounds here more than anywhere',
          detail: 'The brands that establish AI citation positions now will be harder to displace than the brands that established early SEO positions in 2005. AI training data has a lag. Authority built today influences AI outputs for months and years. The brands that start this work now are establishing compounding advantages that late movers will find extremely expensive to overcome.',
        },
      ],
    },
    zunelabPartner: true,
    zunelabStats: [
      { value: '$10M+', label: 'Value created through AI-first strategy' },
      { value: '35+', label: 'Hours/week freed for growth work' },
      { value: '2×', label: 'Organic reach when AI cites your brand' },
    ],
  },
  {
    slug: 'event-planning-production',
    n: '15',
    name: 'Event Planning & Production',
    eyebrow: 'EVENTS',
    tagline: 'Moments that move people.',
    description:
      'We plan and produce corporate events, brand activations, product launches, and hybrid experiences from concept to close - with full event branding, logistics, live production, and post-event marketing baked in.',
    includes: [
      'Event Strategy & Concept Development',
      'Corporate Events & Conferences',
      'Brand Activations & Product Launches',
      'Venue Sourcing & Management',
      'Event Branding & Design',
      'Live Streaming & Video Production',
      'Hybrid & Virtual Event Setup',
      'Event Marketing & Promotion',
      'Sponsorship Sourcing & Management',
      'Post-Event Analytics & Recap',
    ],
    outcomes: [
      { stat: '100%', label: 'End-to-end ownership so you show up and present' },
      { stat: '2–8 wks', label: 'Lead time depending on event scale' },
      { stat: '∞', label: 'Repurposed content from every event we produce' },
    ],
    philosophy: {
      title: 'An event is a moment of maximum brand intensity. Everything your brand claims to be is tested in real time, in front of the people who matter most.',
      body: 'For a few hours, your audience experiences your brand at full resolution - the production quality, the attention to detail, the calibre of the room, the clarity of the message. There is no editing after the fact, no retake, no optimised caption. The event either delivers or it does not. The top 0.1% of brands treat events not as networking moments or sales opportunities but as brand investments that generate returns across multiple dimensions simultaneously: earned media from guests, content assets for six months of marketing, deepened relationships with the clients and partners in the room, and the organisational signal that this company is serious. We build events that justify every dollar spent by generating returns that extend far beyond the close of the evening.',
      principles: [
        {
          heading: 'Strategy before logistics',
          detail: 'The venue is not the event. The catering is not the event. The experience is the event - and it begins with the question every event should be able to answer before a single vendor is booked: what do we want every person in that room to think, feel, and do differently after leaving? We build event strategies around that objective and work backwards to every production decision.',
        },
        {
          heading: 'Every event is a content production operation',
          detail: 'A well-produced event generates six months of marketing content if it is approached correctly. Speaker sessions become video assets. Attendee reactions become testimonials. Behind-the-scenes footage becomes social content. The brands generating the highest return from their events are treating them as content productions with a live component - not live events that happen to generate some content on the side.',
        },
        {
          heading: 'Logistics perfection is the minimum',
          detail: 'A flawlessly executed event is table stakes. Guests remember when something goes wrong; they do not remember when everything went right. The production quality of the experience - the lighting, the sound, the timing, the flow from arrival to departure - creates the container within which your brand message lands. We obsess over every operational detail because a logistical failure is a brand statement.',
        },
      ],
    },
  },
]

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}
