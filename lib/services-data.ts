export interface ServiceData {
  slug: string
  n: string
  name: string
  eyebrow: string
  tagline: string
  description: string
  includes: string[]
  outcomes: { stat: string; label: string }[]
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
  },
  {
    slug: 'brand-identity-design',
    n: '02',
    name: 'Brand Identity & Design',
    eyebrow: 'DESIGN',
    tagline: 'Every pixel has a job.',
    description:
      'We build brand identities that communicate before you say a word — logos, visual systems, UX/UI, motion design, and print collateral that make your brand impossible to ignore.',
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
  },
  {
    slug: 'social-media-management',
    n: '03',
    name: 'Social Media Management',
    eyebrow: 'SOCIAL',
    tagline: 'Always on. Always sharp.',
    description:
      'We run your social media channels as a full-stack operation — strategy, content calendar, creative production, posting, community management, and monthly reporting. You show up every day without lifting a finger.',
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
  },
  {
    slug: 'content-creation',
    n: '04',
    name: 'Content Creation',
    eyebrow: 'CONTENT',
    tagline: 'Content that earns attention.',
    description:
      'We produce photo, video, UGC, and written content at the scale modern brands need — from short-form social clips to long-form editorial, shot to your brand standards and optimized for every platform.',
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
  },
  {
    slug: 'media-buying-ads',
    n: '05',
    name: 'Media Buying & Ads',
    eyebrow: 'PERFORMANCE',
    tagline: 'Spend less. Convert more.',
    description:
      'We manage paid media campaigns on Google, Meta, and TikTok — from audience research and creative strategy through to daily optimization and transparent reporting. Every dollar is tracked to a result.',
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
  },
  {
    slug: 'influencer-marketing',
    n: '06',
    name: 'Influencer Marketing',
    eyebrow: 'CREATORS',
    tagline: 'The right creator. The right audience.',
    description:
      'We source, vet, brief, and manage creator partnerships that actually convert — from nano-influencers driving niche community trust to macro campaigns with massive reach, all matched to your audience.',
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
  },
  {
    slug: 'seo-content-strategy',
    n: '07',
    name: 'SEO & Content Strategy',
    eyebrow: 'SEO',
    tagline: 'Organic growth you own forever.',
    description:
      'We build long-term organic visibility through technical SEO, authority content, and link building — so your brand earns traffic that compounds over time, not traffic you stop paying for the moment your budget runs out.',
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
  },
  {
    slug: 'email-crm-automation',
    n: '08',
    name: 'Email & CRM Automation',
    eyebrow: 'EMAIL & CRM',
    tagline: 'Nurture while you sleep.',
    description:
      'We build email sequences, automation flows, and CRM pipelines that nurture leads and retain customers on autopilot — from welcome series and abandoned cart flows to full lifecycle marketing programs.',
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
  },
  {
    slug: 'web-ecommerce-development',
    n: '09',
    name: 'Web & E-commerce Development',
    eyebrow: 'WEB & E-COMM',
    tagline: 'Built to convert. Built to scale.',
    description:
      'We design and develop websites, landing pages, and e-commerce stores that are fast, beautiful, and optimized for conversion — from custom Next.js builds to Shopify storefronts built for seven-figure brands.',
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
  },
  {
    slug: 'app-development',
    n: '10',
    name: 'App Development',
    eyebrow: 'APP DEV',
    tagline: 'Custom software. Real-world outcomes.',
    description:
      'We build custom web and mobile applications end-to-end — from initial architecture and design through to deployment and ongoing maintenance. If your business needs software that doesn\'t exist off the shelf, we build it.',
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
  },
  {
    slug: 'analytics-attribution',
    n: '11',
    name: 'Analytics & Attribution',
    eyebrow: 'ANALYTICS',
    tagline: 'Know what\'s working. Prove it.',
    description:
      'We install and configure GA4, GTM, and multi-touch attribution pipelines so you can see exactly which channels, campaigns, and creatives are driving revenue — and cut spend on everything that isn\'t.',
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
  },
  {
    slug: 'ai-development-automation',
    n: '12',
    name: 'AI Development & Automation',
    eyebrow: 'AI SYSTEMS',
    tagline: 'Your operation, automated.',
    description:
      'We build custom AI tools, workflow automations, and infrastructure that plug directly into your existing operations — eliminating the repetitive work that drains your team and budget every single week.',
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
    tagline: 'Agents that work while you don\'t.',
    description:
      'We design and build autonomous AI agents that handle real business tasks end-to-end — from researching prospects and drafting outreach to managing tickets and executing multi-step workflows without human oversight.',
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
      'AI search engines — ChatGPT, Perplexity, Gemini, Claude — are becoming the first touch for millions of buying decisions. We optimize your brand\'s presence across these platforms so you\'re cited, recommended, and found when it matters most.',
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
      { stat: '1st', label: 'Mover advantage — most brands haven\'t started yet' },
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
    n: '15',
    name: 'Event Planning & Production',
    eyebrow: 'EVENTS',
    tagline: 'Moments that move people.',
    description:
      'We plan and produce corporate events, brand activations, product launches, and hybrid experiences from concept to close — with full event branding, logistics, live production, and post-event marketing baked in.',
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
  },
]

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}
