export interface ServiceData {
  slug: string
  n: string
  name: string
  eyebrow: string
  tagline: string
  description: string
  whoFor?: string
  includes: string[]
  outcomes: { stat: string; label: string }[]
  process?: { n: string; title: string; desc: string }[]
  faq?: { q: string; a: string }[]
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
      { stat: '3x to 5x', label: 'Better campaign performance when strategy leads creative' },
      { stat: '90 days', label: 'From discovery to a fully deployed marketing plan' },
    ],
    whoFor: 'Built for founders, CMOs, and growth leads at scaling companies who are spending on marketing without a clear strategic foundation and want to fix that before they spend another dollar.',
    process: [
      { n: '01', title: 'Discovery & Audit', desc: 'We conduct a full audit of your current positioning, messaging, channel mix, competitive landscape, and customer data. This includes interviews with your leadership team and, where possible, existing customers. We need to understand the gap between how you describe your brand and how the market perceives it.' },
      { n: '02', title: 'Market & Competitor Mapping', desc: 'We map every significant player in your category, identify white space in positioning, and define the battlefield. Where is the market crowded? Where is there authority to be claimed? What are competitors saying, and more importantly, what are they not saying? This is where most positioning opportunities live.' },
      { n: '03', title: 'Positioning Framework Build', desc: 'We build your positioning framework: the ICP definition, the value proposition, the messaging architecture for each audience segment, and the competitive differentiation statement. Every element is tested against the question: would someone actually buy based on this?' },
      { n: '04', title: 'Digital Marketing Plan Delivery', desc: 'We translate the strategy into an executable digital marketing plan: recommended channel mix, budget allocation framework, 90-day launch priorities, KPI targets, and attribution setup. You receive a full briefing session with your leadership team and a reference document your team can execute against.' },
    ],
    faq: [
      { q: 'What does a brand strategy engagement with SA Media include?', a: 'A brand strategy engagement includes a full audit of your current market position, ICP mapping, competitive landscape analysis, brand positioning framework, messaging architecture for each audience segment, channel and budget allocation recommendations, and a 90-day executable digital marketing plan. We deliver a reference document and a live briefing session with your leadership team.' },
      { q: 'How long does brand strategy take?', a: 'A full brand strategy engagement runs 4 to 8 weeks depending on the complexity of your market and the amount of customer research required. We deliver the complete positioning framework and digital marketing plan within 90 days of kickoff. Simpler engagements for early-stage companies can be completed in 3 to 4 weeks.' },
      { q: 'Do I need brand strategy before starting paid media or SEO?', a: 'Yes. Running paid media or SEO without a defined positioning and ICP framework means you are optimising for traffic without knowing whether that traffic converts. Strategy determines who you are targeting, what you are saying, and which channels are right for your business. Every campaign you run before doing this work costs more and performs worse than it should.' },
      { q: 'How is SA Media\'s brand strategy different from a traditional branding agency?', a: 'Traditional branding agencies produce visual and verbal identity. We produce marketing strategy: the decisions that determine how you acquire customers, how you position against competitors, and how you allocate budget across channels. Our output is an operational playbook, not a deck. Every recommendation is tied to a specific business objective and a measurable outcome.' },
    ],
    philosophy: {
      title: 'Most agencies sell decks. We sell decisions.',
      body: 'Strategy is not a deliverable. It is an operating lens that should inform every budget call, every creative brief, every channel trade-off your team makes for the next five years. The positioning frameworks we build are designed to be stress-tested against reality: the uncomfortable ICP question, the category you are avoiding naming, and the competitor advantage you have not neutralised yet. We do not build strategy that lives in a PDF. We build strategy that survives contact with the market. The top 0.1% of companies in the world do not win on execution alone. They win because their strategy eliminates the wrong decisions before they get made.',
      principles: [
        {
          heading: 'Uncomfortable truths before comfortable narratives',
          detail: 'We start every engagement by finding the thing you do not want to say about your market position. That is usually where the real opportunity lives. Most agencies skip this because it creates friction. We create friction intentionally, because a strategy that cannot withstand internal debate will not survive external competition.',
        },
        {
          heading: 'Positioning is a filter, not a tagline',
          detail: 'A brand position only works when it tells you what not to do. If your positioning says yes to every market, every customer, and every channel, it is not a position. It is a wish. We build positioning frameworks that make resource allocation obvious and trade-offs explicit. That is the difference between strategy and marketing copy.',
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
      'We build brand identities that communicate before you say a word: logos, visual systems, UX/UI, motion design, and print collateral that make your brand impossible to ignore.',
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
      { stat: '2 to 4 weeks', label: 'From brief to final brand identity delivery' },
      { stat: '100%', label: 'Consistent cross-channel brand presentation' },
      { stat: '∞', label: 'Scalable design system you own and can extend' },
    ],
    whoFor: 'Built for companies launching, rebranding, or scaling into new markets who need a visual identity system that matches the quality of their product and the ambition of their growth plans.',
    process: [
      { n: '01', title: 'Brand Discovery', desc: 'We run a structured discovery session with your leadership team to understand your company\'s values, personality, target audience, competitive context, and design references. We review existing brand assets, identify what is working and what is not, and define the emotional and functional impression your brand needs to create.' },
      { n: '02', title: 'Concept Exploration', desc: 'We develop two to three distinct creative directions, each with a rationale for why it serves your positioning. Each direction includes initial logo concepts, a colour palette, a typography selection, and an example application. This is the creative divergence phase: we need to explore before we converge.' },
      { n: '03', title: 'Design Development', desc: 'We develop the chosen direction into a full identity system: logo variants, colour system, typography hierarchy, iconography, photography style guidelines, and component-level design for your primary digital and print applications. We move through rounds of refinement until the system is complete.' },
      { n: '04', title: 'System Delivery & Handoff', desc: 'We deliver a complete brand guidelines document, all source files in every format you need, and an asset library organised for your internal team to use immediately. The handoff includes a walkthrough session covering how to apply the system correctly across every channel your brand operates in.' },
    ],
    faq: [
      { q: 'What deliverables do I receive from a brand identity project?', a: 'You receive the complete logo system in all formats (SVG, PNG, PDF, EPS), a comprehensive brand guidelines document covering colour, typography, logo usage rules, photography style, and application examples, a social media template library, and all source files in Figma and Adobe formats. Everything is yours to own and extend.' },
      { q: 'How many revision rounds are included?', a: 'Our process includes two structured revision rounds after the initial concept presentation, and one final revision round after the chosen direction is developed into the full system. Revisions outside this scope are available at a day rate. In practice, most projects are resolved within the included rounds when the discovery phase is thorough.' },
      { q: 'Can SA Media redesign an existing brand without losing brand equity?', a: 'Yes. A brand evolution that preserves existing equity while modernising the execution is a specific skill set. We audit what is working in your current brand, identify the elements that carry genuine recognition value, and build the new system around those foundations rather than discarding them. A rebrand does not need to mean starting from zero.' },
      { q: 'Do you handle brand identity for both digital and physical applications?', a: 'Yes. We design for both digital-first (web, social, digital advertising, mobile) and physical applications (packaging, print, signage, event materials). Our team designs systems that work across all surfaces, with specific guidance for how the identity adapts to each context without losing coherence.' },
    ],
    philosophy: {
      title: 'We do not design logos. We design decision frameworks.',
      body: 'The top 0.1% of brands in the world do not have good design. They have design systems that eliminate bad judgment at scale, across every surface, every format, every application their brand will ever encounter. A logo is the start of that system, not the end of it. Our approach treats visual identity as infrastructure: the set of rules, constraints, and assets that allows an entire organisation to communicate consistently without requiring a designer in every room. When we deliver a brand identity, we are delivering the operating system for every visual decision your brand will make for the next decade.',
      principles: [
        {
          heading: 'Distinctiveness over preference',
          detail: 'Design that you personally like is not the benchmark. Design that your ideal customer cannot mistake for anyone else is. We pressure-test every brand system against the competitive landscape to ensure it owns a position, in colour, in form, and in personality, that your market has not already claimed.',
        },
        {
          heading: 'Systems that survive scale',
          detail: 'A brand identity that works for a startup of five breaks at a company of five hundred. We design every system with that future scale in mind: component libraries that extend, guidelines specific enough to be enforced, and templates flexible enough to be adapted. Your brand should look consistent whether it is on a business card or a billboard.',
        },
        {
          heading: 'Motion is not decoration',
          detail: 'In a digital-first world, static design is half a brand. How your brand moves, how it enters a screen, how it transitions, how it draws attention, communicates as much as your logo. We build motion principles into every identity system because the brands that do not are already leaving a communication surface unmapped.',
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
      'We run your social media channels as a full-stack operation: strategy, content calendar, creative production, posting, community management, and monthly reporting. You show up every day without lifting a finger.',
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
    whoFor: 'Built for brands that need to show up consistently on social media but do not have the internal team, time, or creative infrastructure to do it at the quality and volume required to compete.',
    process: [
      { n: '01', title: 'Channel Audit & Strategy', desc: 'We audit your existing social presence, benchmark it against your top competitors, and identify the platforms, content formats, and posting cadences that offer the highest return for your specific audience. We define your brand voice, content pillars, and the KPIs we will track to measure success. This becomes the operating brief for everything that follows.' },
      { n: '02', title: 'Content Calendar Build', desc: 'We build a monthly content calendar mapping every post across every channel: the format, the caption direction, the creative brief, the publishing time, and the strategic purpose. You review and approve the calendar before anything is produced, giving you full visibility and control over what goes out under your brand.' },
      { n: '03', title: 'Creative Production', desc: 'Our creative team produces all content to the calendar: graphics, short-form video, Reels, Stories, carousels, and written copy. Everything is produced to your brand standards and platform specifications. We manage the full production pipeline and handle all scheduling and publishing.' },
      { n: '04', title: 'Community Management & Reporting', desc: 'We manage comments, DMs, and brand mentions across all channels, responding, engaging, and escalating where appropriate. At the end of each month, you receive a performance report covering reach, engagement, follower growth, and top-performing content, with recommendations for the following month.' },
    ],
    faq: [
      { q: 'Which social media platforms does SA Media manage?', a: 'We manage Instagram, TikTok, LinkedIn, X (formerly Twitter), Facebook, and YouTube. The platforms we prioritise for your brand are determined by your target audience, industry, and growth objectives. We do not manage every platform by default. We manage the platforms where your audience actually is and where your content can realistically compete.' },
      { q: 'How much input do I have in what gets posted?', a: 'You approve the monthly content calendar before anything is produced or posted. You can request changes, flag content that does not feel right, and set directional preferences at any time. We handle execution entirely, but you have full visibility and approval authority over everything published under your brand.' },
      { q: 'How quickly can SA Media take over our social media management?', a: 'We can have your first content calendar live within 30 days of onboarding. The first two weeks cover the strategy and brand immersion phase. By week three, we are producing content and have the calendar ready for your review. By week four, we are publishing.' },
      { q: 'Does social media management include paid advertising?', a: 'Social media management covers organic content strategy, production, scheduling, and community management. Paid social advertising (Meta Ads, TikTok Ads) is a separate service. Many clients run both. Organic builds the brand and community while paid amplifies the best-performing content and drives direct conversion. We offer both and can coordinate them as an integrated programme.' },
    ],
    philosophy: {
      title: 'Social media is not a content calendar. It is the most direct relationship your brand has with its audience.',
      body: 'Most agencies manage social media like a publishing schedule: post three times a week, use trending audio, include a call to action. That is the floor, not the ceiling. The brands in the top 0.1% treat their social channels as owned media properties, with editorial direction, audience development strategy, community culture, and platform-specific positioning that makes their presence feel irreplaceable rather than interchangeable. We run social media as an operating system for brand trust. Every piece of content serves a purpose in the audience journey: awareness, consideration, loyalty, or advocacy. Nothing goes out because it fills a slot.',
      principles: [
        {
          heading: 'Platform specificity over cross-posting',
          detail: 'A LinkedIn post shared to Instagram is noise on both platforms. Each channel has a distinct audience psychology, content format expectation, and algorithmic logic. We build platform-specific strategies that play to the native strengths of each channel, rather than publishing a single asset everywhere and calling it a social media strategy.',
        },
        {
          heading: 'Community is a competitive moat',
          detail: 'The brands that cannot be commoditised are the ones whose audiences feel a genuine relationship with them. Community management is not a customer service function. It is brand building at the comment level. How you respond, what you say, what you do not say, and how fast you move all communicate something about who you are.',
        },
        {
          heading: 'Data-led creative, not data-driven',
          detail: 'Analytics tell you what worked. They do not tell you what to try next. We use performance data to inform creative decisions, identifying the formats, topics, tones, and hooks that resonate with your specific audience, while preserving the creative risk-taking that generates breakout content. Brands that over-optimise for metrics stop surprising people.',
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
      'We produce photo, video, UGC, and written content at the scale modern brands need, from short-form social clips to long-form editorial, shot to your brand standards and optimised for every platform.',
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
      { stat: '3x to 5x', label: 'More content output vs. in-house teams at same cost' },
      { stat: '72 hrs', label: 'Average turnaround on content briefs' },
    ],
    whoFor: 'Built for brands that need a consistent, high-volume supply of on-brand content across photo, video, and copy without the overhead of an in-house creative team.',
    process: [
      { n: '01', title: 'Creative Brief & Direction', desc: 'We develop a master creative brief that defines your content pillars, visual style, tone of voice, and platform-specific requirements. For video content, we build storyboards and scripts. For photography, we build mood boards and shot lists. Every piece of content we produce is briefed before it is made. No guesswork, no off-brand surprises.' },
      { n: '02', title: 'Production', desc: 'Our creative team handles the full production pipeline: photography, videography, editing, graphic design, copywriting, and animation. We work to your brand standards and deliver content that is ready to publish across every channel without additional formatting work from your team.' },
      { n: '03', title: 'Review & Approval', desc: 'You review all content before it is published or handed over. We operate a structured feedback cycle: content is submitted for review with context on where it will be used and what it is designed to achieve. Revisions are handled within the same cycle, typically within 48 hours.' },
      { n: '04', title: 'Delivery & Repurposing', desc: 'We deliver all final assets in the correct formats for every intended platform. We also develop a repurposing plan: every long-form video becomes a series of short clips, every photo shoot becomes a three-month social asset library. The goal is to maximise the return on every production investment.' },
    ],
    faq: [
      { q: 'What types of content does SA Media produce?', a: 'We produce photography (product, lifestyle, editorial), short-form and long-form video (Reels, TikToks, YouTube, brand films), UGC at scale, graphic design (social templates, infographics, ad creatives), copywriting (captions, blog articles, email, ad copy), and scripts and storyboards. We handle single-channel content needs and full multi-format content programmes.' },
      { q: 'How fast is the content turnaround?', a: 'Our average turnaround on a creative brief is 72 hours for graphic and copy-based content, and 5 to 7 business days for video production including editing. Rush turnarounds are available. We operate on project-based and monthly retainer structures, with retainer clients receiving priority scheduling and dedicated creative team capacity.' },
      { q: 'Do I need to provide brand assets or do you build from scratch?', a: 'Both. If you have existing brand assets, we work within your guidelines to produce content that is consistent with your established identity. If you are building from scratch or your existing assets are not fit for purpose, we can develop a content-specific style guide as part of the engagement. We do not publish content that is off-brand.' },
      { q: 'Can SA Media handle UGC content at scale?', a: 'Yes. We have a network of content creators who produce authentic user-generated content to your brief. UGC programmes can run alongside professionally produced content or as a standalone supply, and are particularly effective for paid social advertising where authentic formats outperform polished production.' },
    ],
    philosophy: {
      title: 'Good content is not creative for creativity\'s sake. It is a distribution strategy with a visual execution.',
      body: 'Every piece of content we produce begins with a distribution question: where does this live, who sees it, and what do we need them to do when they do? Aesthetic is important. Brand consistency is non-negotiable. But a beautiful piece of content that does not move the audience toward a decision is expensive decoration. The top brands in the world have figured this out. They do not produce good content. They build content machines: systematic, repeatable production operations that generate high-quality output at the volume modern distribution requires, with the quality control to ensure every piece is on-brand and on-strategy.',
      principles: [
        {
          heading: 'Volume without sacrificing standards',
          detail: 'The algorithm rewards frequency. Audiences reward quality. The only way to do both simultaneously is with production systems, not heroics. We build content production operations that can scale output without scaling costs proportionally, through templatisation, modular creative systems, and briefing frameworks that eliminate re-work.',
        },
        {
          heading: 'UGC is not an afterthought',
          detail: 'User-generated content is the most trusted content format available to brands, and most brands treat it as an add-on rather than a strategic priority. We build UGC programmes as core content infrastructure, sourcing, directing, and deploying creator content that carries the authenticity no production budget can manufacture.',
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
      'We manage paid media campaigns on Google, Meta, and TikTok, from audience research and creative strategy through to daily optimisation and transparent reporting. Every dollar is tracked to a result.',
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
      { stat: '2x to 4x', label: 'Average ROAS improvement after first 60 days' },
      { stat: '30 days', label: 'To full campaign launch and first data cycle' },
    ],
    whoFor: 'Built for e-commerce brands, lead generation businesses, and B2B companies that need paid media campaigns that are managed with the same rigour as a financial investment and reported on with full revenue attribution.',
    process: [
      { n: '01', title: 'Account Audit & Strategy', desc: 'We audit your existing ad accounts, identify structural issues, wasted spend, and missed opportunities. We review your creative library, landing pages, audience structure, and attribution setup. This gives us a baseline and a clear set of priorities for the first 30 days.' },
      { n: '02', title: 'Campaign Architecture Build', desc: 'We build or rebuild your campaign structure from the ground up: audience segmentation, campaign objectives, bidding strategy, ad group organisation, and creative testing framework. We set up tracking, attribution, and reporting before the first campaign goes live.' },
      { n: '03', title: 'Creative Production & Launch', desc: 'We produce the ad creative: static images, video, carousel, and copy variants, and launch the initial campaign set. The first 30 days are a data collection phase: we are testing hypotheses about audiences, creatives, and messages rather than scaling spend prematurely.' },
      { n: '04', title: 'Ongoing Optimisation', desc: 'From day 30 forward, we operate in a continuous optimisation cycle: weekly creative tests, bid adjustments, audience expansions, and budget reallocation based on performance data. You receive weekly performance reports with clear revenue attribution, and a monthly strategy review covering what we have learned and what we are doing next.' },
    ],
    faq: [
      { q: 'Which advertising platforms does SA Media manage?', a: 'We manage Google Ads (Search, Display, Shopping, Performance Max, YouTube), Meta Ads (Facebook and Instagram), and TikTok Ads. We also work with LinkedIn Ads for B2B clients and Pinterest Ads for relevant e-commerce categories. The platforms we prioritise are determined by where your target audience is and where your offer can achieve the best cost-per-acquisition.' },
      { q: 'What ROAS can I expect from SA Media paid media management?', a: 'ROAS varies significantly by industry, product margin, and the state of your existing account. Clients coming to us with no prior paid media history typically see their first positive ROAS within 30 to 60 days as the account builds data. Clients migrating from underperforming agencies typically see a 2 to 4x ROAS improvement within 60 days of restructuring. We set honest expectations in the initial audit based on your specific category and competitive landscape.' },
      { q: 'How does SA Media handle ad creative?', a: 'We produce all ad creative in-house: static images, short-form video, carousels, and copy variants. Creative testing is built into every campaign structure. We run a minimum of 5 to 10 creative variants per campaign and systematically identify winners. We refresh creative every 2 to 4 weeks to prevent ad fatigue, which is one of the most common causes of declining campaign performance.' },
      { q: 'Do you require a minimum ad spend?', a: 'We work with ad budgets starting from $3,000 per month. Below this threshold, the data volume required for meaningful optimisation is insufficient and results are unreliable. For clients with larger budgets, we operate at any scale. Our management fee is separate from ad spend and covers strategy, creative production, campaign management, and reporting.' },
    ],
    philosophy: {
      title: 'The most dangerous thing in paid media is a comfortable ROAS.',
      body: 'It means you have stopped testing. The brands spending at the top of their category are not running campaigns. They are running permanent experimentation operations, with systematic creative testing, audience hypothesis validation, and bidding architecture that improves every week. A comfortable return means a stagnant creative library, a shrinking audience, and a competitor who is still testing while you are coasting. We approach every paid media engagement as a compounding system: the first 30 days build the data foundation, the next 60 days establish what works, and from day 90 forward we are in continuous optimisation, improving ROAS, expanding audiences, and reducing waste with every cycle.',
      principles: [
        {
          heading: 'Creative is the primary variable',
          detail: 'Targeting has commoditised. The algorithm is smarter than any manual audience build. The remaining lever is creative. Most brands are only testing two or three variants per campaign. We test ten to twenty creatives per cycle, with a systematic framework for identifying winning hooks, formats, and messages faster than any single-creative approach can.',
        },
        {
          heading: 'Attribution before optimisation',
          detail: 'You cannot optimise what you cannot measure. Before we spend the first dollar, we build the tracking infrastructure that tells us which channels, creatives, and audiences are actually driving revenue, not just clicks. Campaigns optimised against the wrong signal will improve the metric you are watching and worsen the one that actually matters.',
        },
        {
          heading: 'The landing page is half the campaign',
          detail: 'The best ad in the world cannot fix a landing page that does not convert. We treat the click destination as part of the campaign, auditing, optimising, and testing landing page elements in parallel with ad creative. The brands with the highest ROAS are rarely running the best ads. They are running the best ad-to-landing-page systems.',
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
      'We source, vet, brief, and manage creator partnerships that actually convert, from nano-influencers driving niche community trust to macro campaigns with massive reach, all matched to your audience.',
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
      { stat: '3x to 10x', label: 'Earned media value vs. paid media equivalent spend' },
      { stat: '14 days', label: 'From brief to first creator posts live' },
    ],
    whoFor: 'Built for consumer brands, e-commerce companies, and launches that need to build credibility and drive purchase intent through creator voices that their target audience already trusts.',
    process: [
      { n: '01', title: 'Campaign Strategy & Creator Criteria', desc: 'We define the campaign objective, the creator profile that matches your audience, the content format requirements, and the metrics we will track. We build the selection criteria that every creator must meet before being considered: audience demographics, engagement rate benchmarks, content quality standards, and brand safety requirements.' },
      { n: '02', title: 'Creator Research & Vetting', desc: 'We identify and vet a longlist of creators against your criteria, then narrow to a shortlist with individual analysis covering audience authenticity, engagement quality, brand alignment, and historical performance. We present the shortlist with our recommendation and rationale for each creator before any outreach begins.' },
      { n: '03', title: 'Outreach, Negotiation & Contracting', desc: 'We handle all creator outreach, rate negotiation, and contract execution. Contracts cover deliverables, timelines, exclusivity windows, content approval rights, and UGC usage rights. We protect your brand and budget at every stage of the negotiation.' },
      { n: '04', title: 'Content Management & Reporting', desc: 'We brief creators, review content before publication, manage revision cycles, and track campaign performance from first post to final report. Post-campaign, you receive a full analysis covering reach, engagement, conversion data, UGC assets acquired, and recommendations for the next campaign.' },
    ],
    faq: [
      { q: 'What size influencers does SA Media work with?', a: 'We work across all tiers: nano (1,000 to 10,000 followers), micro (10,000 to 100,000), mid-tier (100,000 to 500,000), macro (500,000 to 1M), and mega (1M+). The tier we recommend depends on your objective. For conversion-focused campaigns, nano and micro creators consistently outperform on cost-per-acquisition. For awareness campaigns, macro and mega creators deliver the reach. Many of our programmes combine tiers strategically.' },
      { q: 'How does SA Media vet influencers for brand safety?', a: 'Our vetting process covers audience authenticity (bot detection and engagement analysis), demographic verification against your ICP, content history review for brand safety risks, and engagement quality analysis. We reject creators with purchased followers, misaligned audiences, or a history of content that could create brand risk. We also verify that creators are not actively working with direct competitors under exclusivity agreements.' },
      { q: 'Who owns the content created by influencers?', a: 'Usage rights depend on the contract terms we negotiate. For UGC-specific campaigns, we negotiate full usage rights for your brand to repurpose content across paid social, website, and email channels. For standard influencer campaigns, usage rights typically cover the platform and duration specified in the contract. We advise on the right rights structure for your intended use before contracting begins.' },
      { q: 'How do you measure influencer campaign ROI?', a: 'We measure influencer ROI across several dimensions: reach and impressions, engagement rate and quality, tracked clicks and conversions via UTM links and promo codes, earned media value compared to equivalent paid media spend, and UGC asset value. For e-commerce brands, we can track direct revenue attribution through discount codes. We report on all metrics in a post-campaign analysis delivered within five business days of the campaign closing.' },
    ],
    philosophy: {
      title: 'We do not cast influencers. We build distribution partnerships with people who have earned their audience\'s trust.',
      body: 'Reach is a commodity. Any agency can book a creator with a million followers. The question is whether that creator\'s audience trusts them enough to take action on a recommendation, whether that audience actually overlaps with your ideal customer, and whether the content they produce serves your brand long after the post goes live. The top brands treating influencer marketing as a serious growth channel are not buying impressions. They are building creator networks that function as a distributed sales team. They brief creators like partners, not executors. They structure deals for long-term authentic association, not one-off posts. And they measure conversion, not vanity.',
      principles: [
        {
          heading: 'Audience fit over follower count',
          detail: 'A creator with 15,000 highly engaged followers in your exact niche will outperform a creator with 500,000 mismatched followers on every metric that matters. Our vetting process goes beyond demographic overlays. We analyse engagement authenticity, content-brand alignment, comment sentiment, and purchase behaviour signals before recommending a single creator to a client.',
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
    slug: 'public-relations',
    n: '07',
    name: 'Public Relations',
    eyebrow: 'PR',
    tagline: 'Earn the coverage that money cannot buy.',
    description:
      'We secure editorial coverage in the publications your customers, investors, and competitors actually read. From founder profiles to product launches and crisis management, we build media relationships that compound over time.',
    whoFor: 'Built for founders, CMOs, and communications leads at growth-stage companies that have a story worth telling but no systematic way to get it told. Ideal for companies preparing for a fundraise, entering a new market, launching a product, or building executive authority.',
    includes: [
      'Media Strategy and Target Publication Mapping',
      'Press Release Writing and Distribution',
      'Founder and Executive Profile Pitching',
      'Product Launch PR Campaigns',
      'Journalist and Editor Relationship Management',
      'Thought Leadership Article Placement',
      'Podcast Booking and Interview Preparation',
      'Award Submissions and Industry Recognition',
      'Crisis Communications Planning',
      'Investor and Financial PR',
      'Speaking Engagement Sourcing',
      'PR Reporting and Coverage Tracking',
    ],
    outcomes: [
      { stat: '15+', label: 'Media placements per quarter for active PR retainer clients' },
      { stat: '3x', label: 'Faster fundraise timelines when credibility is established through press' },
      { stat: '6 months', label: 'To build a durable media presence that generates inbound coverage' },
    ],
    process: [
      { n: '01', title: 'Story Mining and Media Audit', desc: 'We identify every story angle your company can credibly own: founder narrative, product differentiation, market timing, data assets, customer wins, and contrarian takes. We audit what coverage exists, map the journalists and publications that matter to your audience, and define a media strategy built around angles that will actually get picked up.' },
      { n: '02', title: 'Narrative Development', desc: 'We write the materials journalists need: a tight press release, a one-page company backgrounder, founder bios, and a media pitch that leads with the hook rather than the product features. Everything is written to editorial standards, because journalists respond to pitches that read like stories, not marketing copy.' },
      { n: '03', title: 'Outreach and Relationship Building', desc: 'We pitch directly to the journalists and editors we have relationships with, and build new relationships where gaps exist. We do not blast press releases. We send personalised pitches to the right contacts at the right time, follow up, answer questions, provide exclusives where appropriate, and make it easy for media to say yes.' },
      { n: '04', title: 'Coverage and Amplification', desc: 'When coverage lands, we amplify it across your social channels, in your email newsletter, in sales conversations, and in investor updates. We track every placement, measure reach and sentiment, and report monthly on coverage quality, share of voice, and pipeline influence attributable to PR activity.' },
    ],
    faq: [
      { q: 'Can you guarantee press coverage?', a: 'No. Any agency that guarantees coverage is either lying or paying for placements they will call earned media. What we guarantee is a disciplined, relationship-driven pitching process built around genuinely newsworthy angles. Our track record shows consistent placements for clients with real stories to tell.' },
      { q: 'Which publications do you have relationships with?', a: 'We work across business press including Globe and Mail, Financial Post, Forbes, Inc., and Fast Company; tech and startup media including TechCrunch, Wired, and BetaKit; trade and vertical publications specific to your industry; and podcast networks and newsletters with significant readership in your category.' },
      { q: 'How long before we see coverage?', a: 'First placements typically land within 30 to 45 days of engagement. Building a consistent cadence of coverage takes 3 to 6 months as we develop relationships and establish your spokespeople as credible sources. PR compounds over time.' },
      { q: 'Do you handle crisis communications?', a: 'Yes. We develop crisis communication frameworks in advance so you are never caught unprepared. If an issue emerges, we move immediately with stakeholder messaging, media response strategy, social monitoring, and controlled narrative management. Speed and clarity are everything in a crisis.' },
    ],
    philosophy: {
      title: 'Earned media outperforms paid media in every metric that actually matters.',
      body: 'Coverage in publications your audience trusts builds credibility that advertising cannot manufacture. A single well-placed profile in the right publication can open doors that sales teams spend months trying to unlock. But PR only works when the story is real, the angle is sharp, and the relationships are genuine. We build all three systematically and with long-term intent.',
      principles: [
        {
          heading: 'Story first, pitch second',
          detail: 'Journalists respond to stories, not product features. We spend as much time developing the angle as we do on outreach. A pitch built around a compelling narrative lands. A pitch built around a press release gets deleted.',
        },
        {
          heading: 'Relationships over databases',
          detail: 'We maintain real relationships with the journalists and editors who matter to your audience. We do not blast press releases to contact lists. We send targeted pitches to the right people at the right time with the right angle.',
        },
        {
          heading: 'Credibility compounds',
          detail: 'The more coverage you have, the easier it becomes to get more. We build a foundation of credible placements early so your media presence becomes a self-reinforcing asset rather than a one-off campaign.',
        },
      ],
    },
  },
  {
    slug: 'seo-content-strategy',
    n: '08',
    name: 'SEO & Content Strategy',
    eyebrow: 'SEO',
    tagline: 'Organic growth you own forever.',
    description:
      'We build long-term organic visibility through technical SEO, authority content, and link building, so your brand earns traffic that compounds over time and not traffic you stop paying for the moment your budget runs out.',
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
      { stat: '6 months', label: 'To meaningful organic traffic growth from a standing start' },
      { stat: '3x to 5x', label: 'More organic sessions after 12-month engagement' },
      { stat: '∞', label: 'Traffic that keeps coming even when you pause spend' },
    ],
    whoFor: 'Built for companies that want to own organic search traffic in their category rather than rent it through paid advertising, and are willing to invest in a 6 to 12 month programme that compounds over time.',
    process: [
      { n: '01', title: 'Technical SEO Audit & Fixes', desc: 'We run a full technical audit covering crawlability, indexation, site speed, Core Web Vitals, mobile performance, structured data, duplicate content, and internal linking. Critical issues are fixed before any content work begins, because technical problems cap the ceiling on everything else.' },
      { n: '02', title: 'Keyword Research & Content Strategy', desc: 'We build a keyword map of every search term your target customers use across the buying journey, from broad awareness queries to specific purchase-intent searches. We identify the content gaps between what your audience is searching for and what currently exists on your site, and we build an editorial calendar to close those gaps systematically.' },
      { n: '03', title: 'Content Production & On-Page Optimisation', desc: 'We produce authoritative content that targets your priority keyword clusters: long-form guides, comparison pages, local landing pages, and topic cluster articles. Every piece is optimised for search intent, readability, and AI citation. We also optimise existing pages that have ranking potential but are not performing at their ceiling.' },
      { n: '04', title: 'Authority Building & Reporting', desc: 'We build domain authority through digital PR, link acquisition from relevant publications, and brand mention campaigns. Every month you receive a rankings report showing position changes for your tracked keywords, organic traffic trends, and the content and link building activities completed that month.' },
    ],
    faq: [
      { q: 'How long does SEO take to show results?', a: 'For a site with no existing SEO foundation, meaningful organic traffic growth typically begins at 4 to 6 months and accelerates significantly from months 8 to 12. For sites with existing domain authority and fixable technical issues, results can come faster. SEO is a compounding investment. The longer you run the programme, the higher your traffic ceiling becomes and the lower your cost per acquisition falls.' },
      { q: 'What is the difference between SEO and AIEO?', a: 'Traditional SEO optimises for search engine rankings so users click through to your website. AIEO (AI Engine Optimization) optimises your brand to be cited by AI search tools like ChatGPT, Perplexity, and Google AI Overviews, which generate answers directly without requiring a click. Our SEO programmes are built to serve both. The content and authority signals that drive traditional rankings also improve AI citation rates, but AIEO requires additional work on structured data, brand mentions, and content format.' },
      { q: 'Does SA Media handle both technical SEO and content?', a: 'Yes. We handle the full SEO stack: technical infrastructure, keyword strategy, content production, on-page optimisation, and authority building. Most agencies specialise in one layer. We treat them as an integrated programme because technical SEO without content has no ceiling to reach, and great content on a technically broken site is invisible.' },
      { q: 'What reporting does SA Media provide for SEO?', a: 'You receive a monthly SEO report covering keyword ranking changes for your tracked terms, organic traffic trends by page and keyword cluster, technical issue log, content published that month, links acquired, and a strategic commentary on what is working and what the following month\'s priorities are. Rankings and traffic are tracked in a live dashboard you can access at any time.' },
    ],
    philosophy: {
      title: 'SEO is trust arbitrage. The question is not how to rank. It is how to become the brand the internet recommends.',
      body: 'Google, and increasingly AI search engines, are asking one fundamental question about every piece of content they surface: does the internet trust this source enough to send someone there? Trust is built through authority: the depth of your expertise, the quality of your content, and the quality of the sites that reference you. It is also built through technical excellence: a site that loads in three seconds, with clear structure and accessible content, signals seriousness. The top 0.1% of brands in organic search did not get there by optimising for algorithms. They got there by building genuine authority in their category, and then making sure the technical infrastructure did not hold them back.',
      principles: [
        {
          heading: 'Content depth over content volume',
          detail: 'Publishing fifty shallow blog posts does not build authority. Publishing ten genuinely useful, comprehensive pieces of content that answer the questions your target customer is actually asking does. We build content strategies around depth first, establishing authoritative positions on high-value topics before expanding into adjacent territory.',
        },
        {
          heading: 'Technical SEO is the foundation, not an afterthought',
          detail: 'Brilliant content on a technically broken site is invisible. Crawl errors, slow load times, duplicate content, broken internal linking, and missing structured data are all ceiling limiters that suppress even the best content. We audit and fix technical foundations before investing in content, because clean infrastructure multiplies the return on every content investment.',
        },
        {
          heading: 'AIEO is the new frontier of SEO',
          detail: 'AI search engines including ChatGPT, Perplexity, Gemini, and Google AI Overviews are now answering queries that used to generate clicks. Being the source that AI engines cite is the next chapter of organic visibility. We build every SEO programme with AI citation strategy integrated, because the brands that optimise for traditional search alone are already playing a shrinking game.',
        },
      ],
    },
  },
  {
    slug: 'email-crm-automation',
    n: '09',
    name: 'Email & CRM Automation',
    eyebrow: 'EMAIL & CRM',
    tagline: 'Nurture while you sleep.',
    description:
      'We build email sequences, automation flows, and CRM pipelines that nurture leads and retain customers on autopilot, from welcome series and abandoned cart flows to full lifecycle marketing programmes.',
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
      { stat: '40 to 60%', label: 'Average open rate on well-segmented SA Media sequences' },
      { stat: '3x to 8x', label: 'ROI on email vs. every other marketing channel' },
      { stat: '30 days', label: 'To first automated flow live and generating revenue' },
    ],
    whoFor: 'Built for e-commerce brands and B2B businesses that want to generate consistent revenue from their existing customer and lead database without increasing their acquisition spend.',
    process: [
      { n: '01', title: 'Platform Audit & Architecture Design', desc: 'We audit your current email platform setup, list health, existing flows, and sending history. We design the automation architecture: the flows required at each stage of the customer lifecycle, the segmentation structure, the trigger logic, and the integration requirements with your CRM and e-commerce platform.' },
      { n: '02', title: 'Flow Build & Copywriting', desc: 'We build every automated flow from scratch: welcome series, abandoned cart, post-purchase, re-engagement, and any campaign-specific sequences. We write all copy and design all templates to your brand standards. Every email in every flow is written with a specific conversion objective and a clear next step for the reader.' },
      { n: '03', title: 'Testing & Deliverability Setup', desc: 'Before any flow goes live, we test every email across devices and clients, validate all tracking and attribution links, check deliverability against spam filters, and confirm all automation triggers are firing correctly. We also configure domain authentication (SPF, DKIM, DMARC) to protect your sending reputation.' },
      { n: '04', title: 'Ongoing Optimisation', desc: 'We review flow performance monthly: open rates, click rates, conversion rates, and revenue attribution by flow. We test subject lines, send times, and content variations systematically. We add new flows as your programme matures and update existing flows to reflect changes in your product, offers, and customer segments.' },
    ],
    faq: [
      { q: 'Which email platforms does SA Media work with?', a: 'We work with Klaviyo, HubSpot, Mailchimp, ActiveCampaign, and Salesforce Marketing Cloud. For e-commerce clients, Klaviyo is our default recommendation due to its native Shopify integration and revenue attribution capability. For B2B clients, HubSpot provides the deepest CRM integration. We can migrate existing programmes between platforms as part of the engagement.' },
      { q: 'What email flows does every e-commerce brand need?', a: 'The four non-negotiable flows for any e-commerce brand are the welcome series (converts subscribers to first purchasers), abandoned cart (recovers lost revenue from checkout drop-offs), post-purchase sequence (drives repeat purchase and review collection), and winback campaign (re-engages lapsed customers). These four flows typically account for 30 to 40 percent of total email revenue. Everything else is built on top of this foundation.' },
      { q: 'How does SA Media approach email list segmentation?', a: 'We build segmentation structures based on purchase behaviour, engagement level, acquisition source, and lifecycle stage. The most impactful segments for most e-commerce brands are: new subscribers (no purchase), active customers (purchased in last 90 days), lapsed customers (no purchase in 90 to 180 days), and VIP customers (high lifetime value). Each segment receives messaging calibrated to where they are in their relationship with your brand.' },
      { q: 'Can SA Media improve an existing underperforming email programme?', a: 'Yes. We regularly take over email programmes that have been neglected or poorly configured and rebuild them into high-performing revenue channels. The first step is always an honest audit: identifying the structural issues (list hygiene, deliverability problems, broken flows, missing automations) and prioritising fixes by revenue impact. Most programmes show measurable improvement within 60 days of a rebuild.' },
    ],
    philosophy: {
      title: 'Email is the only channel you truly own. We treat it like the asset it is.',
      body: 'There is no algorithm between you and your subscriber. No ad auction, no feed ranking, no platform policy that decides whether your message reaches the person who asked to hear from you. Email is the highest-leverage owned asset in marketing, and the brands treating it as a newsletter they send when they remember to are leaving the majority of its value on the table. The top e-commerce and B2B brands in the world generate 30 to 50 percent of their revenue from email. Not because they send more email, but because they send the right message to the right person at the right moment in the customer journey. That requires architecture: segmentation, behavioural triggers, lifecycle stages, and continuous testing.',
      principles: [
        {
          heading: 'Automation is not set-and-forget',
          detail: 'A welcome sequence built eighteen months ago is optimised for an audience that no longer exists. We build email automation with continuous improvement built in: A/B testing frameworks, performance review cadences, and refresh cycles that keep flows performing at their ceiling rather than decaying toward the floor.',
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
    n: '10',
    name: 'Web & E-commerce Development',
    eyebrow: 'WEB & E-COMM',
    tagline: 'Built to convert. Built to scale.',
    description:
      'We design and develop websites, landing pages, and e-commerce stores that are fast, beautiful, and optimised for conversion, from custom Next.js builds to Shopify storefronts built for seven-figure brands.',
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
      { stat: '2x to 4x', label: 'Conversion rate improvement vs. DIY builds' },
      { stat: '<2s', label: 'Load time target on all SA Media builds' },
      { stat: '6 to 12 weeks', label: 'Full-scope website from kickoff to launch' },
    ],
    whoFor: 'Built for scaling companies whose website is underperforming, under-converting, or no longer reflects the quality and ambition of the business it represents.',
    process: [
      { n: '01', title: 'Discovery & Conversion Architecture', desc: 'We run a structured discovery process covering your business objectives, target audiences, key conversion paths, competitive benchmarks, and technical requirements. We map the information architecture and user journeys before any design work begins, because the structure of the site determines whether it converts, not the visual design.' },
      { n: '02', title: 'Design (UX + UI)', desc: 'We build wireframes for every key template, get alignment on information hierarchy and user flows, then develop high-fidelity UI designs. Every design decision is made in context of the user journey it is part of. We present designs with rationale, not just aesthetics, and refine through structured feedback cycles.' },
      { n: '03', title: 'Development', desc: 'We build in Next.js (React) for custom sites and Shopify for e-commerce, with a focus on performance, accessibility, and scalability. We integrate every third-party tool your stack requires: CRM, analytics, payment systems, booking platforms, and marketing automation. All code is production-grade, documented, and handed over with a CMS your team can manage.' },
      { n: '04', title: 'Launch & Optimisation', desc: 'We handle the full launch process: QA testing across devices and browsers, performance optimisation, SEO infrastructure setup, analytics and conversion tracking configuration, and a team training session on your CMS. Post-launch, we provide a 30-day support period and an optional ongoing optimisation retainer to improve conversion rates based on live data.' },
    ],
    faq: [
      { q: 'What technology does SA Media use to build websites?', a: 'We build custom websites in Next.js (React), the same framework used by Vercel, Nike, and thousands of high-performance marketing sites. For e-commerce, we build on Shopify with fully custom themes. We do not use Wix, Squarespace, or generic WordPress templates. Every build is performant by default, fully owned by you, and deployable on any hosting infrastructure.' },
      { q: 'How long does a website project take?', a: 'A standard marketing website (5 to 15 pages) runs 6 to 8 weeks from kickoff to launch. A full e-commerce build with custom features runs 8 to 12 weeks. More complex applications with custom functionality run 12 to 16 weeks. Timeline is determined by scope, feedback turnaround speed, and third-party integration complexity. We provide a detailed project timeline at the proposal stage.' },
      { q: 'Will I be able to manage the website myself after launch?', a: 'Yes. Every website we build includes a headless CMS integration (Sanity, Contentful, or Shopify\'s native CMS for e-commerce) that allows your team to update content, add pages, and manage products without touching code. We provide a training session at handoff and documentation covering every content management task your team needs to perform.' },
      { q: 'Does SA Media handle SEO as part of the website build?', a: 'We build SEO infrastructure into every site as standard: semantic HTML, correct heading hierarchy, page speed optimisation, meta title and description framework, Open Graph tags, canonical tags, XML sitemap, and robots.txt configuration. This is the technical foundation. Content SEO, covering keyword strategy, content production, and link building, is a separate ongoing programme that we run alongside or after the site launch.' },
    ],
    philosophy: {
      title: 'A website is not a brochure. It is a 24/7 sales system, a brand statement, and a conversion machine operating simultaneously.',
      body: 'Most companies underestimate how much their website is costing them. A slow load time costs conversions. A confusing information hierarchy costs leads. A checkout with too many steps costs sales. A design that does not match the quality of the product costs trust at the moment it matters most. The top brands in the world treat their website as the highest-leverage piece of digital infrastructure they own, because every campaign they run, every piece of content they produce, and every ad they buy is ultimately directing traffic to a page that either converts or does not. We build websites that work. Fast, opinionated, architecturally sound, and conversion-optimised from the first pixel to the last.',
      principles: [
        {
          heading: 'Performance is not optional',
          detail: 'Google\'s Core Web Vitals are a ranking factor. A one-second delay in page load reduces conversions by 7%. Users on mobile leave a slow site in under three seconds. Speed is not a technical nicety. It is a revenue variable. Every site we build is optimised for sub-two-second load times, with performance budgets enforced from the first commit.',
        },
        {
          heading: 'Conversion architecture before visual design',
          detail: 'The most beautiful website that does not guide the user toward a decision is expensive art. We map conversion architecture, including the user journey, the hierarchy of information, and the placement of calls to action, before a single visual element is designed. The result is a site where the aesthetics serve the function, not the other way around.',
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
    n: '11',
    name: 'App Development',
    eyebrow: 'APP DEV',
    tagline: 'Custom software. Real-world outcomes.',
    description:
      'We build custom web and mobile applications from initial architecture and design through to deployment and ongoing maintenance. If your business needs software that does not exist off the shelf, we build it.',
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
      { stat: '3 to 6 weeks', label: 'MVP delivery from approved spec' },
      { stat: '99.9%', label: 'Uptime SLA on all production deployments' },
      { stat: '∞', label: 'Scalable architecture that grows with your user base' },
    ],
    whoFor: 'Built for companies that need custom software to solve a specific business problem that off-the-shelf tools cannot address, and want it built to a production standard that can scale.',
    process: [
      { n: '01', title: 'Specification & Architecture', desc: 'We translate your business requirements into a technical specification: the features, the data model, the API contracts, the third-party integrations, and the infrastructure requirements. We define the MVP scope explicitly: what is in, what is explicitly out, and what gets built in phase two. Good specification is the highest-leverage investment in any software project.' },
      { n: '02', title: 'Design & User Experience', desc: 'We design the user interface and experience for every key workflow in the application. For consumer products, this includes user research and usability testing. For internal tools and B2B applications, it includes workflow mapping with the actual end users. Every interface we design is reviewed for usability before a line of code is written.' },
      { n: '03', title: 'Development & Testing', desc: 'We build in two-week sprints with defined deliverables and a working demo at the end of each sprint. Every feature is tested before it is merged: unit tests, integration tests, and manual QA across all target devices and browsers. We deploy to a staging environment throughout development so you can review progress continuously.' },
      { n: '04', title: 'Launch, Handover & Support', desc: 'We manage the production deployment, configure monitoring and alerting, and run a full security and performance audit before go-live. Post-launch, we provide a 60-day support period covering bug fixes and minor adjustments. We hand over all source code, documentation, and deployment instructions, and offer ongoing retainer support for clients who need it.' },
    ],
    faq: [
      { q: 'What kinds of applications does SA Media build?', a: 'We build web applications (dashboards, portals, internal tools, SaaS products), mobile applications in React Native, and backend APIs and data pipelines. We have delivered client-facing consumer products, internal operations tools, booking and scheduling platforms, custom e-commerce applications, and AI-powered workflow tools. If the requirement is clear and the business case is sound, we can build it.' },
      { q: 'How do you handle scope changes during a project?', a: 'We manage scope changes through a formal change request process. Any addition to the agreed specification is documented, estimated, and approved before work begins. We do not absorb scope changes silently. This is how projects run over time and budget. We are proactive about identifying requirements gaps early so that scope adjustments happen at the start of a sprint rather than the end of a project.' },
      { q: 'Who owns the code at the end of the project?', a: 'You own everything. All source code, all design files, all documentation, and all deployment infrastructure is transferred to you on project completion. We do not use proprietary frameworks or tools that create vendor dependency. You can take everything we build and have any other developer continue working on it.' },
      { q: 'Does SA Media provide ongoing maintenance after launch?', a: 'Yes. We offer ongoing maintenance and support retainers that cover dependency updates, security patches, performance monitoring, bug fixes, and minor feature additions. The appropriate level of retainer support depends on the complexity of the application and the frequency of changes your business requires. We discuss and recommend a support structure at the proposal stage.' },
    ],
    philosophy: {
      title: 'Software is operations made permanent. We build for where you are going, not just where you are.',
      body: 'Custom software is the highest-leverage investment a scaling company can make, and the most expensive to get wrong. An application architected for today\'s user volume breaks at ten times that volume. An interface designed without user testing requires expensive re-work when adoption stalls. An integration built without security consideration becomes a liability the moment your data becomes valuable. The top companies in the world treat their custom software as strategic infrastructure, not just internal tooling. We approach every application build with the same question: what would this need to look like if the company were ten times its current size? The architecture decisions made in the first sprint determine the ceiling of what you can build.',
      principles: [
        {
          heading: 'Architecture decisions are irreversible in practice',
          detail: 'Choosing the wrong database, the wrong state management pattern, or the wrong API structure at the start of a project creates a technical debt that compounds with every subsequent feature. We invest heavily in the specification and architecture phase, not because it delays launch, but because it is the only phase where the cost of a wrong decision is low.',
        },
        {
          heading: 'The MVP is a learning instrument, not a finished product',
          detail: 'The goal of a minimum viable product is to generate the highest-value information about what to build next at the lowest possible cost. An MVP that launches with the right core functionality and a clean data model for iteration is worth more than a fully featured launch that cannot be changed without a rebuild.',
        },
        {
          heading: 'Security and performance are requirements, not features',
          detail: 'They are not on the roadmap. They are not something to add after launch. Every production application we deploy is penetration-tested, performance-profiled, and monitored from day one, because the cost of a security incident or a performance failure at scale is not a development cost. It is a business cost.',
        },
      ],
    },
  },
  {
    slug: 'analytics-attribution',
    n: '12',
    name: 'Analytics & Attribution',
    eyebrow: 'ANALYTICS',
    tagline: 'Know what\'s working. Prove it.',
    description:
      'We install and configure GA4, GTM, and multi-touch attribution pipelines so you can see exactly which channels, campaigns, and creatives are driving revenue, and cut spend on everything that is not.',
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
      { stat: '20 to 40%', label: 'Typical ad spend savings when attribution is fixed' },
      { stat: '100%', label: 'Visibility into which channel closes deals' },
      { stat: '2 weeks', label: 'To full tracking stack live and validated' },
    ],
    whoFor: 'Built for marketing teams and business owners who are spending significant budgets across multiple channels and need to understand, with genuine precision, which channels, campaigns, and creatives are actually driving revenue.',
    process: [
      { n: '01', title: 'Tracking Audit', desc: 'We audit your existing analytics setup: GA4 configuration, tag manager deployment, conversion event definitions, ad platform pixel health, and CRM integration. We identify every tracking gap, broken event, and attribution misconfiguration. Most companies discover they are missing 30 to 50 percent of their actual conversion data.' },
      { n: '02', title: 'Architecture Design', desc: 'We design the tracking architecture: the event taxonomy, the attribution model appropriate for your sales cycle, the data sources to be integrated, and the reporting outputs your team needs to make decisions. We document every decision so the system is understandable and maintainable by your internal team.' },
      { n: '03', title: 'Implementation', desc: 'We implement the full tracking stack: GA4 event configuration via GTM, server-side tracking where browser-side tracking is unreliable, ad platform conversion APIs, CRM pipeline integration, and custom dashboard builds in Looker Studio or your preferred BI tool. Every implementation is tested and validated before sign-off.' },
      { n: '04', title: 'Reporting & Ongoing Support', desc: 'We deliver a live dashboard covering every marketing channel, with revenue attribution by campaign, creative, and audience. We train your team on reading and acting on the data. Ongoing support covers data validation, dashboard updates as your marketing mix evolves, and quarterly attribution model reviews.' },
    ],
    faq: [
      { q: 'Why is GA4 setup not enough for proper marketing attribution?', a: 'GA4 tracks what happens on your website, but by default it uses last-click attribution and cannot connect ad platform spend to CRM revenue. A complete attribution stack integrates GA4 with your ad platforms via their conversion APIs, connects to your CRM so you can see which marketing source drove closed deals, and uses a multi-touch attribution model that reflects how customers actually make decisions. GA4 alone is one lens. Attribution requires the full picture.' },
      { q: 'What is server-side tracking and why does it matter?', a: 'Browser-side tracking (standard Google Tag Manager) relies on JavaScript that runs in the user\'s browser. Ad blockers, iOS privacy restrictions, and browser limitations mean that 20 to 40 percent of conversions are typically not captured. Server-side tracking sends conversion data directly from your server to ad platforms and analytics tools, bypassing browser limitations. This improves data accuracy, improves ad platform optimisation (which learns from more signals), and future-proofs your tracking against further browser privacy restrictions.' },
      { q: 'How long does it take to set up proper attribution?', a: 'A standard attribution implementation (GA4, GTM, ad platform conversions, basic CRM integration) takes 2 to 3 weeks from audit to validated live deployment. More complex implementations involving server-side tracking, custom CRM integrations, or multi-source data pipelines take 4 to 6 weeks. The audit phase at the start of the project determines the scope.' },
      { q: 'Can SA Media fix broken tracking on an existing setup?', a: 'Yes, and this is one of the highest-ROI engagements we run. Most companies have tracking that was set up years ago by someone who has since left, with gaps that have accumulated as new platforms and tools were added. We audit the existing setup, identify the gaps, prioritise fixes by revenue impact, and rebuild where necessary. Most clients recover 20 to 40 percent of previously unmeasured conversions within the first month.' },
    ],
    philosophy: {
      title: 'Attribution is not a technical problem. It is the strategic problem that determines whether every other investment is rational.',
      body: 'Most companies are running in the dark. They have more data than they have ever had, and less insight than they need, because the data is badly structured, the tracking is broken, or the attribution model is attributing revenue to the last click rather than the channel that actually drove the decision. The top 0.1% of companies make marketing decisions with the same rigour they apply to financial decisions. They know, with genuine precision, which channels are driving pipeline, which creatives are closing deals, and which campaigns are consuming budget without generating returns. That level of visibility is not a reporting nicety. It is the precondition for rational resource allocation. We build the tracking infrastructure that makes intelligent decisions possible.',
      principles: [
        {
          heading: 'First-party data is the only data you can trust',
          detail: 'Third-party cookie deprecation, iOS privacy changes, and platform attribution discrepancies have made third-party data unreliable as a primary signal. We build analytics programmes around first-party data collection: server-side tracking, CRM integrations, and customer data platforms that give you a ground-truth view of your customer\'s journey independent of any platform\'s self-reported numbers.',
        },
        {
          heading: 'Attribution models are hypotheses, not facts',
          detail: 'Last-click attribution tells you which channel got the final touch. First-click tells you where awareness started. Neither tells you how the decision was actually made. We configure multi-touch models with position-based weighting calibrated to your specific sales cycle, and we review and update those models as the market and customer behaviour evolve.',
        },
        {
          heading: 'A dashboard nobody reads is not an analytics programme',
          detail: 'The test of an analytics build is not whether it captures data. It is whether it changes the decisions being made in the business. We design reporting outputs around the specific decisions your team needs to make: budget allocation calls, creative testing priorities, channel expansion decisions. Metrics without decisions attached to them are noise.',
        },
      ],
    },
  },
  {
    slug: 'ai-development-automation',
    n: '13',
    name: 'AI Development & Automation',
    eyebrow: 'AI SYSTEMS',
    tagline: 'Your operation, automated.',
    description:
      'We build custom AI tools, workflow automations, and infrastructure that plug directly into your existing operations, eliminating the repetitive work that drains your team and budget every single week.',
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
    whoFor: 'Built for operations-heavy businesses, marketing agencies, and scaling companies that are spending too much of their team\'s time on repetitive, rule-based work that could be automated and want to redeploy that capacity toward higher-value activity.',
    process: [
      { n: '01', title: 'Workflow Audit & Opportunity Mapping', desc: 'We map the workflows across your operations to identify automation opportunities ranked by time cost, error rate, and strategic value. We document every manual process that meets the criteria for automation: rule-based, repetitive, high-volume, or high-stakes. This audit becomes the prioritised roadmap for the engagement.' },
      { n: '02', title: 'Solution Design', desc: 'For each automation opportunity, we design the solution architecture: the trigger, the logic, the integrations required, the edge cases, and the human oversight points. We present the design before building it, with a realistic assessment of the time and cost savings it will generate, so you can make informed prioritisation decisions.' },
      { n: '03', title: 'Build & Integration', desc: 'We build each automation using the appropriate toolset for the complexity: n8n, Make, or Zapier for workflow automation; custom Python or Node.js scripts for data processing; LLM integrations for content or classification tasks; and API integrations for every tool in your stack. Everything is tested in a staging environment before production deployment.' },
      { n: '04', title: 'Deployment, Training & Monitoring', desc: 'We deploy to production with monitoring configured for every automated workflow. We train your team on managing and updating the automations, and provide documentation covering every workflow\'s logic, trigger conditions, and failure protocols. Ongoing support is available to add new automations and update existing ones as your operations evolve.' },
    ],
    faq: [
      { q: 'What business processes can SA Media automate?', a: 'We automate a broad range of business processes: client onboarding, lead qualification and routing, proposal and contract generation, reporting and analytics delivery, social media scheduling, email sequences, customer support ticket routing, invoice and payment processing, data enrichment and CRM updates, and any multi-step workflow that currently requires manual execution. If a process is rule-based and repetitive, it is a candidate for automation.' },
      { q: 'Does SA Media build automations with AI, or standard workflow automation?', a: 'Both. Standard workflow automation (using Make, Zapier, or n8n) handles rule-based processes with defined inputs and outputs. AI-powered automation adds a layer of intelligence for tasks that require classification, generation, summarisation, or decision-making. Most of our automation programmes combine both: standard automation for the workflow orchestration, and LLM integration for the tasks within the workflow that require language understanding or generation.' },
      { q: 'What tools and platforms does SA Media integrate with?', a: 'We integrate with the full standard business software stack: HubSpot, Salesforce, Notion, Airtable, Slack, Google Workspace, Microsoft 365, Shopify, Stripe, Xero, QuickBooks, Intercom, Zendesk, Typeform, Calendly, and hundreds of others via API. If the tool has an API, we can integrate it. If it does not, we build custom connectors using browser automation where necessary.' },
      { q: 'How do you ensure automated workflows do not make mistakes?', a: 'We build every automation with error handling, logging, and validation built in. High-stakes automations (anything involving financial transactions, customer communications, or data deletion) include explicit human approval steps. Every automation has a failure notification protocol so errors are caught immediately rather than silently propagating. We also build testing frameworks that verify automation outputs against expected results on a scheduled basis.' },
    ],
    philosophy: {
      title: 'The companies that will dominate the next decade are not the ones with the most employees. They are the ones with the most leverage.',
      body: 'AI automation is not an efficiency initiative. It is compound interest on the capacity of every person in your organisation. A team of ten with well-built AI infrastructure operates with the throughput of a team of thirty, while making faster, better-informed decisions than either. The top 0.1% of companies are not experimenting with AI. They have moved past experimentation into systematic deployment, with custom tools built to their specific workflows, automated pipelines that eliminate the repetitive work that consumes skilled people\'s time, and AI infrastructure that learns and improves as it runs. Working in partnership with our sister company Zune Lab, we build AI systems that work in production, not demos.',
      principles: [
        {
          heading: 'Build for the workflow, not the technology',
          detail: 'The most common failure in AI implementation is building around what the technology can do rather than what the business needs to do. We start every engagement with a workflow audit, mapping the actual processes that consume time, identifying the highest-leverage automation opportunities, and designing AI systems around eliminating those specific bottlenecks rather than deploying AI for its own sake.',
        },
        {
          heading: 'Human oversight is an architecture decision, not an afterthought',
          detail: 'The right level of automation is not always full automation. Some decisions require human judgment. Some outputs require human review. We design AI systems with explicit human-in-the-loop touchpoints where the cost of an error exceeds the cost of a review, and full automation where the reverse is true. The companies that deploy AI irresponsibly pay for it.',
        },
        {
          heading: 'Automation compounds when it is built on clean data',
          detail: 'An AI system trained on disorganised, inconsistent, or incomplete data produces disorganised, inconsistent, or incomplete outputs at a faster rate. Before we build automation, we audit the data infrastructure it will run on. The investment in clean data architecture before deployment multiplies every automation that runs on top of it.',
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
    n: '14',
    name: 'AI Agent Building',
    eyebrow: 'AI AGENTS',
    tagline: 'Agents that work while you do not.',
    description:
      'We design and build autonomous AI agents that handle real business tasks end-to-end, from researching prospects and drafting outreach to managing tickets and executing multi-step workflows without human oversight.',
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
      { stat: '4 to 6 weeks', label: 'From scoping to first agent live in production' },
    ],
    philosophy: {
      title: 'An AI agent is not a chatbot. It is a digital team member with a defined role, measurable output, and the ability to act.',
      body: 'The distinction matters. A chatbot answers questions. An agent takes actions, researching, writing, sending, scheduling, querying, updating, and deciding across multiple tools, in sequence, without a human initiating each step. The companies deploying agents at the top 0.1% level are not using them to handle FAQ responses. They are using them to eliminate entire job functions that were previously eating the time of their most skilled people. Sales development agents that research and personalise outreach at scale. Operations agents that monitor systems, identify anomalies, and generate remediation steps. Research agents that synthesise market intelligence daily and surface the insights that drive decisions. We build agents the same way we would hire for a role: with a clear scope, a defined set of tools, an operating playbook, and performance expectations from day one.',
      principles: [
        {
          heading: 'Scope before capability',
          detail: 'The most common failure in agent deployment is scoping too broadly. An agent given an open-ended mandate produces open-ended, untrustworthy results. We define every agent by its exact responsibility boundary: what it is authorised to do, what it must escalate, and what it should never attempt. Narrow scope with deep capability outperforms broad scope with shallow execution every time.',
        },
        {
          heading: 'Agents need guardrails, not just goals',
          detail: 'An agent optimising for a metric without constraints will find the shortest path to that metric, which is frequently not the path you intended. We build guardrail systems into every agent: output validation, confidence thresholds, escalation triggers, and audit logs that make agent behaviour traceable, predictable, and correctable.',
        },
        {
          heading: 'Memory architecture determines agent quality',
          detail: 'An agent without memory makes the same mistakes every session. An agent with well-structured memory improves with every interaction, learning the preferences, context, and history that allows it to operate with the judgment of someone who has been in the role for months. We build memory architectures using vector databases and context management systems that give agents the institutional knowledge they need to be genuinely useful.',
        },
      ],
    },
    whoFor: 'Built for mid-market and enterprise operations teams, sales organisations, and founders who have identified repeatable tasks that are consuming skilled headcount. Ideal for companies with at least one clearly defined workflow they want to remove from the human workload permanently.',
    process: [
      { n: '01', title: 'Agent Scoping Workshop', desc: 'We identify the exact tasks, tools, and decision points the agent will handle. Scope definition prevents the most common failure mode: an agent given too broad a mandate that produces unreliable outputs.' },
      { n: '02', title: 'Architecture & Tool Integration', desc: 'We design the agent architecture: model selection, tool use, memory system, and API integrations. Every agent is built on the specific infrastructure its task requires, not a generic template.' },
      { n: '03', title: 'Build, Test, Guardrail', desc: 'We build the agent with full guardrail systems: output validation, confidence thresholds, escalation triggers, and audit logging. We test against real edge cases before any production deployment.' },
      { n: '04', title: 'Deploy, Monitor, Improve', desc: 'We deploy your agent with monitoring dashboards, performance metrics, and a 30-day optimisation window. Agents improve with use. We track their output quality and refine the system based on real production data.' },
    ],
    faq: [
      { q: 'What is the difference between an AI agent and a chatbot?', a: 'A chatbot responds to questions. An AI agent takes autonomous action, researching, writing, sending, updating databases, calling APIs, and executing multi-step workflows without a human initiating each step. Agents are defined by their ability to act, not just respond.' },
      { q: 'How long does it take to build and deploy an AI agent?', a: 'Most agents go from scoping to first production deployment in 4 to 6 weeks. More complex multi-agent systems with deep integrations can take 8 to 12 weeks. We scope every project before committing to a timeline.' },
      { q: 'Which tasks are best suited for AI agents?', a: 'The highest-value targets are repetitive, rule-based workflows that currently consume skilled human time: prospecting research, report generation, ticket triage, data extraction and enrichment, scheduling coordination, and monitoring workflows. We help you identify your highest-ROI agent opportunity during scoping.' },
      { q: 'How do you ensure agent outputs are accurate and safe?', a: 'Every agent we build includes output validation logic, confidence thresholds that trigger human review for uncertain cases, comprehensive audit logs, and defined escalation paths. We also conduct red-team testing to identify failure modes before production deployment.' },
    ],
    zunelabPartner: true,
    zunelabStats: [
      { value: '$10M+', label: 'Value created across AI projects' },
      { value: '35+', label: 'Hours/week recovered per client' },
      { value: '2×', label: 'Capacity without new hires' },
    ],
  },
  {
    slug: 'aieo-geo-optimization',
    n: '15',
    name: 'AIEO & GEO Optimization',
    eyebrow: 'AIEO & GEO',
    tagline: 'Be the answer AI gives.',
    description:
      'AI search engines including ChatGPT, Perplexity, Gemini, and Claude are becoming the first touch for millions of buying decisions. We optimise your brand\'s presence across these platforms so you are cited, recommended, and found when it matters most.',
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
      { stat: '3 to 6 months', label: 'To measurable AI search visibility improvement' },
      { stat: '40%', label: 'Of Google searches now show AI overviews' },
      { stat: '1st', label: 'First-mover advantage. Most brands have not started yet.' },
    ],
    philosophy: {
      title: 'The next decade of search will be dominated by AI-generated answers. The brands cited by AI engines today are building a structural moat.',
      body: 'Traditional SEO optimised for a world where users clicked links. AIEO and GEO optimise for a world where users read answers, and the brands that appear in those answers capture demand that the brands who only invested in traditional search are invisible to. This is not a future state. It is happening now. ChatGPT processes over 100 million queries per day. Perplexity has grown to over 10 million daily active users. Google\'s AI Overviews appear on over 40% of searches. The buying journey for millions of consumers and business buyers now begins with an AI-generated answer, and the brands that appear in that answer own the beginning of the funnel in a way that no amount of traditional advertising can replicate. We are building the AIEO and GEO discipline that the top 0.1% of brands will have established as standard practice five years from now.',
      principles: [
        {
          heading: 'AI engines cite sources they trust',
          detail: 'The selection criteria for AI citation are not entirely different from the selection criteria for search ranking: authority, specificity, accuracy, and structured information. But the weight of each factor shifts. AI engines weight factual accuracy and structured data more heavily. They favour sources with deep topical authority over sources with broad shallow coverage. We build the content and technical infrastructure that positions your brand as the trusted source in your category.',
        },
        {
          heading: 'Brand mentions across the web are the new backlinks',
          detail: 'AI language models are trained on the internet. The frequency, context, and sentiment of your brand\'s mentions across the web directly influences how AI engines represent your brand in their outputs. AIEO is, in part, a reputation management discipline, building the breadth and quality of brand mentions that train AI models to represent your brand accurately and favourably.',
        },
        {
          heading: 'First-mover advantage compounds here more than anywhere',
          detail: 'The brands that establish AI citation positions now will be harder to displace than the brands that established early SEO positions in 2005. AI training data has a lag. Authority built today influences AI outputs for months and years. The brands that start this work now are establishing compounding advantages that late movers will find extremely expensive to overcome.',
        },
      ],
    },
    whoFor: 'Built for brands that are already investing in content and SEO but are invisible in AI-generated search results. Particularly valuable for B2B SaaS, professional services, financial services, and any category where buyers research through AI assistants before making decisions.',
    process: [
      { n: '01', title: 'AIEO Visibility Audit', desc: 'We benchmark your current AI search presence across ChatGPT, Perplexity, Gemini, and Google AI Overviews. We identify where you appear, where competitors appear instead of you, and the specific gap your brand needs to close.' },
      { n: '02', title: 'Authority Architecture', desc: 'We map the topical areas where your brand needs to establish AI citation authority and design the content and structured data infrastructure that positions you as the definitive source in your category.' },
      { n: '03', title: 'Content & Schema Execution', desc: 'We produce the authority content, FAQ structures, schema markup, and brand mention campaigns that signal trustworthiness to AI training data and retrieval systems. Every asset is built with AI citation criteria as the primary design constraint.' },
      { n: '04', title: 'Monitoring & Optimisation', desc: 'We track your AI search visibility monthly across all major platforms, identify citation trends, and refine the strategy based on what the data shows. AIEO is a compounding investment. We manage it as one.' },
    ],
    faq: [
      { q: 'What is AIEO and how is it different from SEO?', a: 'AIEO (AI Engine Optimization) and GEO (Generative Engine Optimization) are disciplines focused on making your brand appear in AI-generated answers from platforms like ChatGPT, Perplexity, and Google AI Overviews. Traditional SEO optimised for link clicks; AIEO optimises for citation in AI-generated answers. The technical signals overlap but the weighting is different. AI engines prioritise structured data, factual accuracy, and topical authority over keyword density.' },
      { q: 'How do you measure AIEO performance?', a: 'We measure brand citation frequency across major AI platforms, share of AI-generated answers in your category, Google AI Overview appearances, and referral traffic from AI platforms. We establish baselines at the start of every engagement and report monthly on visibility trends.' },
      { q: 'How long does it take to see results from AIEO?', a: 'Most clients see measurable improvement in AI citation frequency within 3-6 months. The timeline depends on your starting authority level and category competitiveness. AIEO is a compounding investment. Brands that start now will have structural advantages over brands that start in 12 months.' },
      { q: 'Does AIEO work alongside traditional SEO?', a: 'Yes, and the two disciplines reinforce each other. Strong domain authority and high-quality content improve both traditional search rankings and AI citation likelihood. We build AIEO strategies that compound on your existing SEO investment rather than replacing it.' },
    ],
    zunelabPartner: true,
    zunelabStats: [
      { value: '$10M+', label: 'Value created through AI-first strategy' },
      { value: '35+', label: 'Hours/week freed for growth work' },
      { value: '2×', label: 'Organic reach when AI cites your brand' },
    ],
  },
  {
    slug: 'event-planning-production',
    n: '16',
    name: 'Event Planning & Production',
    eyebrow: 'EVENTS',
    tagline: 'Moments that move people.',
    description:
      'We plan and produce corporate events, brand activations, product launches, and hybrid experiences from concept to close, with full event branding, logistics, live production, and post-event marketing baked in.',
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
      { stat: '2 to 8 weeks', label: 'Lead time depending on event scale' },
      { stat: '∞', label: 'Repurposed content from every event we produce' },
    ],
    philosophy: {
      title: 'An event is a moment of maximum brand intensity. Everything your brand claims to be is tested in real time, in front of the people who matter most.',
      body: 'For a few hours, your audience experiences your brand at full resolution: the production quality, the attention to detail, the calibre of the room, and the clarity of the message. There is no editing after the fact, no retake, no optimised caption. The event either delivers or it does not. The top 0.1% of brands treat events not as networking moments or sales opportunities but as brand investments that generate returns across multiple dimensions simultaneously: earned media from guests, content assets for six months of marketing, deepened relationships with the clients and partners in the room, and the organisational signal that this company is serious. We build events that justify every dollar spent by generating returns that extend far beyond the close of the evening.',
      principles: [
        {
          heading: 'Strategy before logistics',
          detail: 'The venue is not the event. The catering is not the event. The experience is the event, and it begins with the question every event should be able to answer before a single vendor is booked: what do we want every person in that room to think, feel, and do differently after leaving? We build event strategies around that objective and work backwards to every production decision.',
        },
        {
          heading: 'Every event is a content production operation',
          detail: 'A well-produced event generates six months of marketing content if it is approached correctly. Speaker sessions become video assets. Attendee reactions become testimonials. Behind-the-scenes footage becomes social content. The brands generating the highest return from their events are treating them as content productions with a live component, not live events that happen to generate some content on the side.',
        },
        {
          heading: 'Logistics perfection is the minimum',
          detail: 'A flawlessly executed event is table stakes. Guests remember when something goes wrong; they do not remember when everything went right. The production quality of the experience, the lighting, the sound, the timing, and the flow from arrival to departure, creates the container within which your brand message lands. We obsess over every operational detail because a logistical failure is a brand statement.',
        },
      ],
    },
    whoFor: 'Built for executive teams, brand leaders, and marketing directors at companies that treat events as brand investments, not budget line items. Particularly valuable for B2B companies hosting client events, financial services firms running investor or advisory events, and consumer brands executing product launches and activations.',
    process: [
      { n: '01', title: 'Event Strategy & Brief', desc: 'We begin every event engagement with a strategic brief: the objective, the audience, the key message, the success metrics, and the experience we want every guest to carry away. Logistics follow strategy, not the other way around.' },
      { n: '02', title: 'Creative Concept & Production Design', desc: 'We develop the event concept, visual identity, venue shortlist, and run-of-show structure. Every design decision, from the invitation to the exit experience, is built around the core strategic objective.' },
      { n: '03', title: 'Vendor Coordination & Pre-Production', desc: 'We manage every vendor relationship: venue, AV, catering, decor, speakers, live streaming, and photography. Our team handles all pre-production logistics so your team can focus on the content and the relationships.' },
      { n: '04', title: 'Live Execution & Content Capture', desc: 'On the day, we run the full production operation. We also ensure the event is captured as a comprehensive content asset: video, photography, testimonials, and social content that extends the event\'s marketing value for months after the room empties.' },
    ],
    faq: [
      { q: 'What types of events does SA Media produce?', a: 'We produce corporate conferences, executive roundtables, product launches, brand activations, client appreciation events, award ceremonies, hybrid and virtual events, and multi-city touring events. We operate across Toronto, New York, and Dubai.' },
      { q: 'How far in advance do you need to be engaged?', a: 'For most events we need 4 to 8 weeks of lead time. Large-scale productions, multi-day conferences, and events requiring complex venue sourcing may need 12 to 16 weeks. We have delivered events on compressed timelines for clients with urgent requirements.' },
      { q: 'Do you handle event marketing and promotion as well?', a: 'Yes. We handle everything from invitation design and email campaigns to social media promotion, PR outreach, and post-event content production. We treat every event as a marketing campaign with a live component, not a logistics project.' },
      { q: 'How do you measure event success?', a: 'We define success metrics at the brief stage before any production decisions are made. Depending on your objective, we track attendance quality, earned media coverage, content assets generated, attendee NPS, pipeline influenced, and post-event brand sentiment. We deliver a full post-event report with every engagement.' },
    ],
  },
  {
    slug: 'blockchain-crypto-marketing',
    n: '17',
    name: 'Blockchain & Crypto Marketing',
    eyebrow: 'WEB3',
    tagline: 'Build trust in trustless markets.',
    description:
      'We help crypto projects, Web3 protocols, NFT platforms, DeFi products, and blockchain startups build communities, establish authority, and grow with marketing that speaks the language of the space without the hype.',
    whoFor: 'Built for founders and marketing leads at crypto startups, DeFi protocols, NFT projects, blockchain infrastructure companies, and Web3 consumer apps that need to reach real audiences including investors, users, and builders, without sounding like a whitepaper or a pump account.',
    includes: [
      'Web3 Brand Strategy and Positioning',
      'Community Building via Discord, Telegram, and X',
      'Token Launch and TGE Marketing',
      'Crypto PR and Media Outreach',
      'Influencer and KOL Campaign Management',
      'NFT Drop and Mint Campaign Strategy',
      'DeFi Protocol Growth Marketing',
      'Crypto Content Creation and Thought Leadership',
      'Airdrop and Referral Campaign Design',
      'Exchange Listing Announcement Strategy',
      'Paid Ads on Crypto-Compliant Channels',
      'Investor and VC Narrative Development',
    ],
    outcomes: [
      { stat: '10x', label: 'Community growth achievable in 90 days with the right launch strategy' },
      { stat: '3x to 5x', label: 'Higher token launch visibility with coordinated PR and KOL activation' },
      { stat: '24/7', label: 'Community management, because crypto never sleeps' },
    ],
    process: [
      { n: '01', title: 'Project Audit and Narrative Build', desc: 'We start with a deep dive into your project: the technology, the tokenomics, the team, the competitive landscape, and the intended user. We identify the single most compelling thing about what you are building and turn it into a narrative that works for retail, institutions, and media simultaneously.' },
      { n: '02', title: 'Community Infrastructure Setup', desc: 'We build or restructure your Discord, Telegram, and X presence with the right channel architecture, moderation framework, and community roles. We establish the posting cadence, community guidelines, and engagement systems before we drive any traffic into the funnel.' },
      { n: '03', title: 'KOL and PR Activation', desc: 'We identify and brief the right Key Opinion Leaders for your project, selected for audience alignment rather than follower count. We run coordinated activations timed to your key milestones. Simultaneously, we pitch crypto media including CoinDesk, Decrypt, The Block, Cointelegraph, and relevant vertical publications.' },
      { n: '04', title: 'Campaign Execution and Growth', desc: 'We execute the full campaign calendar: content drops, AMA sessions, airdrop mechanics, partnership announcements, and community events. Every activity is tied to a specific milestone such as a launch, listing, product update, or fundraise, and every result is reported weekly with clear metrics.' },
    ],
    faq: [
      { q: 'Do you work with projects at pre-launch stage?', a: 'Yes. Pre-launch is often the best time to engage us. Building the community infrastructure, narrative, and media relationships before you launch gives you a significant advantage over projects that try to do it all at launch day.' },
      { q: 'Can you help with token launch marketing?', a: 'Yes. TGE and IDO marketing is one of our core capabilities. We handle the full marketing stack: community activation, KOL coordination, PR outreach, countdown campaigns, exchange listing announcements, and post-launch retention.' },
      { q: 'Do you work with NFT projects?', a: 'Yes. We have experience with NFT drops across art, gaming, and utility-based collections. We handle mint campaign strategy, allow-list growth, Discord setup, KOL outreach, and post-mint community engagement.' },
      { q: 'How do you handle crypto advertising restrictions?', a: 'We know exactly which channels allow crypto advertising and under what conditions. We work within compliant frameworks and focus heavily on organic, community-driven, and PR-led growth strategies that perform better in Web3 anyway.' },
    ],
    philosophy: {
      title: 'Web3 marketing is not traditional marketing with a whitepaper attached.',
      body: 'Most crypto projects fail not because of bad technology but because of bad communication. The space is saturated with hype, anonymous accounts, and meaningless metrics. The projects that build lasting communities and real liquidity are the ones that communicate with clarity, show up consistently, and earn trust rather than buy attention. That is the standard we hold ourselves to on every engagement.',
      principles: [
        {
          heading: 'Community before capital',
          detail: 'Token price follows community strength. We build the audience, the trust, and the engagement infrastructure first. Capital and liquidity follow from that foundation, not the other way around.',
        },
        {
          heading: 'Narrative before noise',
          detail: 'Every project needs a clear story that works for retail investors, institutions, and media simultaneously. We find the single most compelling thing about what you are building and make it impossible to ignore.',
        },
        {
          heading: 'Long-term trust over short-term volume',
          detail: 'Pump-and-dump marketing destroys projects. We focus on sustainable community growth, genuine media relationships, and content that educates and converts rather than hypes and disappears.',
        },
      ],
    },
  },
]

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}
