// Single source of truth for FAQ content.
// Both the homepage FAQ component and the full FAQ page import from here,
// so updating an answer only needs to happen in one place.

export interface FaqItem {
  q: string
  a: string
}

export interface FaqCategory {
  name: string
  faqs: FaqItem[]
}

// The 5 questions shown in the homepage FAQ accordion.
export const homeFaqs: FaqItem[] = [
  {
    q: 'What services does SA Media offer?',
    a: 'We offer brand strategy and positioning, brand identity and design, social media management, content creation, media buying and ads, influencer marketing, SEO and content strategy, email and CRM automation, web and e-commerce development, app development, analytics and attribution, AI development and automation, AI agent building, AIEO and GEO optimization, and event planning and production.',
  },
  {
    q: 'How does SA Media measure campaign success?',
    a: 'We track measurable KPIs including reach, engagement rate, conversion rates, cost per acquisition, and revenue attribution. Everything is reported transparently so you always know what your investment is doing.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We work across real estate, fintech, hospitality, fashion, luxury retail, e-commerce, legal, SaaS, healthcare, fitness, education, and professional services. Our playbook adapts to your industry, audience, and goals.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Paid campaigns typically show measurable results within 30 days. Organic growth through SEO and content compounds over three to six months. We set honest expectations upfront and report progress throughout.',
  },
  {
    q: 'Do you work with businesses of all sizes?',
    a: 'Yes. We work with bootstrapped startups and established brands alike. Our approach scales to your stage, from launch campaigns to full-funnel growth systems across multiple markets.',
  },
]

// Full FAQ page categories (22 questions across 5 topics).
export const faqCategories: FaqCategory[] = [
  {
    name: 'Services',
    faqs: [
      {
        q: 'What services does SA Media offer?',
        a: 'SA Media offers brand strategy and positioning, brand identity and design, social media management, content creation, media buying and ads, influencer marketing, SEO and content strategy, email and CRM automation, web and e-commerce development, app development, analytics and attribution, AI development and automation, AI agent building, AIEO and GEO optimisation, and event planning and production.',
      },
      {
        q: 'Can SA Media handle both creative and technical work?',
        a: 'Yes. We operate as a full-service media firm, which means our team covers brand strategy, graphic design, motion, copywriting, web development, app development, paid media, SEO, and AI automation all under one roof. You work with one team, not five agencies.',
      },
      {
        q: 'Do you offer one-off projects or only retainers?',
        a: 'We offer both. Some clients engage us for a specific deliverable like a website build, a brand identity, or a launch campaign. Others retain us on an ongoing basis for social media management, paid media, and growth strategy. We scope each engagement based on your goals.',
      },
      {
        q: 'What is AIEO and why does it matter?',
        a: 'AIEO stands for AI Engine Optimisation. As consumers increasingly use tools like ChatGPT, Perplexity, and Gemini to find information and recommendations, brands need to ensure they are visible and well-represented in AI-generated answers. We optimise your content, structure, and brand signals so you appear when it matters.',
      },
      {
        q: 'What is GEO optimisation?',
        a: 'GEO stands for Generative Engine Optimisation. It is the practice of structuring your brand presence so that AI-powered search engines and generative tools recommend and reference your brand in response to relevant queries. It is the next frontier beyond traditional SEO.',
      },
    ],
  },
  {
    name: 'Process',
    faqs: [
      {
        q: 'How does SA Media measure campaign success?',
        a: 'We track measurable KPIs including reach, engagement rate, conversion rates, cost per acquisition, and revenue attribution. Everything is reported transparently so you always know what your investment is doing. We use GA4, GTM, and platform-native analytics to build a complete picture.',
      },
      {
        q: 'What does the onboarding process look like?',
        a: 'We start with a discovery session to understand your brand, audience, goals, and current performance. From there we build a 90-day strategy and present it for your review. Once aligned, we move into execution within one to two weeks. The process is structured, fast, and requires minimal time from you.',
      },
      {
        q: 'How long does it take to see results?',
        a: 'Paid campaigns typically show measurable results within 30 days. Organic growth through SEO and content compounds over three to six months. Brand identity and website projects have defined delivery timelines agreed upfront. We set honest expectations from the start and report progress throughout.',
      },
      {
        q: 'How often do we communicate during a project?',
        a: 'You will receive weekly performance updates, monthly strategy reviews, and access to a shared project workspace where everything is tracked. Your dedicated point of contact is reachable whenever you need them. We do not believe in radio silence.',
      },
      {
        q: 'Do I need to be heavily involved in the day-to-day?',
        a: 'No. We are built to run independently once we have understood your brand and goals. Most clients spend one to two hours per month reviewing results and providing approvals. The less you need to hand-hold us, the better we are doing our job.',
      },
    ],
  },
  {
    name: 'Clients & Fit',
    faqs: [
      {
        q: 'What industries do you specialise in?',
        a: 'We work across real estate, fintech, hospitality, fashion, luxury retail, e-commerce, legal, SaaS, healthcare, fitness, education, and professional services. Our playbook adapts to your industry, audience, and goals while maintaining the same high execution standard across all of them.',
      },
      {
        q: 'Do you work with businesses of all sizes?',
        a: 'Yes. We work with bootstrapped startups and established brands alike. Our approach scales to your stage, from launch campaigns to full-funnel growth systems across multiple markets. We have worked with first-time founders and seasoned CEOs of globally recognised businesses.',
      },
      {
        q: 'Do you work with clients outside of Toronto?',
        a: 'Absolutely. We have active operations in New York and Dubai and serve clients globally. Time zone differences are never a blocker. We use async communication, scheduled reviews, and shared workspaces to keep everything running smoothly regardless of location.',
      },
      {
        q: 'Can SA Media work with an existing in-house team?',
        a: 'Yes. We often operate alongside in-house marketing teams, acting as a specialist extension rather than a replacement. We define clear ownership of each function upfront so there is no duplication or confusion.',
      },
    ],
  },
  {
    name: 'Pricing',
    faqs: [
      {
        q: 'How is SA Media pricing structured?',
        a: 'Pricing depends on the scope, channels, and deliverables involved. We offer project-based pricing for defined deliverables and monthly retainers for ongoing work. We will never quote before understanding your goals. Reach out and we will put together a proposal that fits your budget and objectives.',
      },
      {
        q: 'Is there a minimum engagement size?',
        a: 'We work with clients at various investment levels. We can discuss what is realistic for your goals during an initial call. Our aim is always to deliver measurable ROI regardless of the budget scope.',
      },
      {
        q: 'Does SA Media offer performance-based contracts?',
        a: 'We discuss performance structures on a case-by-case basis for clients with clear attribution models and defined KPIs. Get in touch to discuss what structure makes sense for your engagement.',
      },
    ],
  },
  {
    name: 'AI & Technology',
    faqs: [
      {
        q: 'What AI tools does SA Media use?',
        a: 'We work with ChatGPT, Claude, Gemini, Midjourney, Runway, ElevenLabs, HeyGen, Stable Diffusion, Make, and Jasper among others. We integrate these tools into our production workflows to increase speed and quality while keeping a human creative layer over everything.',
      },
      {
        q: 'Can SA Media build AI agents for my business?',
        a: 'Yes. We build custom AI agents that handle customer service, lead qualification, content generation, internal operations, and more. If there is a repetitive workflow in your business, there is likely an AI agent that can automate it.',
      },
      {
        q: 'How does SA Media approach AI-powered content?',
        a: 'We use AI as a production accelerator, not a replacement for human creative thinking. Strategy, brand voice, and editorial judgment always come from our team. AI helps us move faster and scale output. The result is content that sounds and feels like your brand, not like a machine.',
      },
    ],
  },
]

// Schema.org JSON-LD for the FAQ page — rendered server-side in app/faq/page.tsx.
export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    }))
  ),
}
