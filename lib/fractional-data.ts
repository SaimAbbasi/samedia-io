import type { ServiceData } from './services-data'

export const fractionalServices: ServiceData[] = [
  {
    slug: 'fractional-cmo',
    n: 'F1',
    name: 'Fractional CMO',
    eyebrow: 'FRACTIONAL C-SUITE',
    tagline: 'Senior marketing leadership. Without the full-time price tag.',
    description:
      'A Fractional CMO brings C-level marketing strategy to your business at a fraction of the cost. From brand positioning to go-to-market execution, SA Media places experienced marketing leaders inside your team, part-time commitment, full strategic impact.',
    whoFor:
      'Series A-C startups that need marketing leadership between hires, scaling SMBs that cannot justify a full-time CMO salary, and growth-stage companies that need strategy before they can build the team to execute it.',
    includes: [
      'Go-to-Market Strategy',
      'Brand Positioning & Messaging',
      'Marketing Team Leadership',
      'Channel Allocation & Budget Planning',
      'Campaign Oversight & QA',
      'Marketing Analytics & KPI Dashboards',
      'Agency & Vendor Management',
      'Board-Level Marketing Reporting',
    ],
    outcomes: [
      { stat: '60%', label: 'Average cost saving vs. a full-time CMO salary and benefits' },
      { stat: '90 days', label: 'From engagement start to a fully deployed marketing strategy' },
      { stat: '3-5×', label: 'Marketing ROI improvement in the first six months of engagement' },
    ],
    process: [
      {
        n: '01',
        title: 'Discovery',
        desc: 'We audit your current marketing output, team structure, tech stack, and competitive position. We identify the highest-leverage gaps and opportunities before recommending a plan.',
      },
      {
        n: '02',
        title: 'Strategy',
        desc: 'We build your marketing strategy: ICP, positioning, channel mix, messaging hierarchy, and 90-day action plan. This becomes the operating framework for every marketing decision.',
      },
      {
        n: '03',
        title: 'Team Alignment',
        desc: 'We align with your existing team, agencies, and vendors. We establish clear ownership, workflows, and reporting so execution is coordinated from day one.',
      },
      {
        n: '04',
        title: 'Execution Oversight',
        desc: 'We lead execution across campaigns, content, and paid media. We hold the team accountable to KPIs and make real-time adjustments based on performance data.',
      },
      {
        n: '05',
        title: 'Review & Scale',
        desc: 'Monthly reviews with leadership. Quarterly strategy refreshes. We build the systems and playbooks that make your marketing team self-sufficient over time.',
      },
    ],
    philosophy: {
      title: 'Marketing leadership is not a luxury. It is a prerequisite for growth.',
      body: 'Most growth-stage companies either have no marketing leadership or have promoted their best marketer into a role they were not ready for. Both paths lead to the same outcome: uncoordinated execution, wasted budget, and a brand that cannot articulate why it exists. A Fractional CMO changes the equation, you get the strategic clarity of senior leadership without the 18-month hiring process or the $300K salary.',
      principles: [
        {
          heading: 'Strategy before tactics',
          detail:
            'Every tactical decision, which channels to run, which content to create, which agencies to hire, flows from a clear positioning strategy. We build the strategy first, every time.',
        },
        {
          heading: 'Marketing earns its seat at the revenue table',
          detail:
            'We tie every marketing activity to a revenue outcome. Impressions and engagement are inputs. Pipeline, revenue, and market share are outputs. We measure what matters.',
        },
        {
          heading: 'Systems over heroics',
          detail:
            'A great CMO builds a marketing machine that works without them. Our goal is to create the playbooks, processes, and team capabilities that outlast the engagement.',
        },
      ],
    },
    faq: [
      {
        q: 'How many hours per week does a Fractional CMO engage?',
        a: 'Typically 10-20 hours per week depending on scope. We structure the time to cover strategic leadership, team oversight, and executive reporting, the activities that generate the most leverage.',
      },
      {
        q: 'Can a Fractional CMO manage our internal marketing team?',
        a: 'Yes. The Fractional CMO becomes the de facto head of marketing for your business, leading your internal team, managing agencies, and reporting to your CEO or board.',
      },
      {
        q: 'How long do Fractional CMO engagements typically last?',
        a: 'Most engagements run 6-18 months. Some companies transition to a full-time CMO hire after the fractional engagement; others retain the model permanently as a cost-effective alternative.',
      },
      {
        q: 'What is the cost of a Fractional CMO vs. a full-time hire?',
        a: 'A full-time CMO in North America costs $250,000-$400,000 in total compensation. A Fractional CMO engagement typically runs $8,000-$20,000 per month, a 60-70% saving for comparable strategic output.',
      },
      {
        q: 'Do you work across industries or specialize in specific verticals?',
        a: 'SA Media has placed Fractional CMOs across technology, real estate, hospitality, finance, e-commerce, and professional services. We match the right leader to your specific market context.',
      },
    ],
  },
  {
    slug: 'fractional-cto',
    n: 'F2',
    name: 'Fractional CTO',
    eyebrow: 'FRACTIONAL C-SUITE',
    tagline: 'Technical leadership that builds. Not just advises.',
    description:
      'A Fractional CTO brings engineering depth and technology strategy to your organization without a full-time executive commitment. SA Media places experienced technology leaders who make architectural decisions, lead development teams, and translate business goals into technical execution.',
    whoFor:
      'Non-technical founders who need a trusted technical voice, startups scaling their engineering teams, companies evaluating new technology investments, and businesses preparing for technical due diligence ahead of fundraising or acquisition.',
    includes: [
      'Technology Roadmap Development',
      'Architecture Review & Design',
      'Engineering Team Leadership',
      'Vendor & Platform Selection',
      'Security & Compliance Strategy',
      'Technical Due Diligence Support',
      'DevOps & Infrastructure Strategy',
      'AI & Automation Integration Planning',
    ],
    outcomes: [
      { stat: '70%', label: 'Cost saving compared to a full-time CTO with equity and benefits' },
      { stat: '6 weeks', label: 'To a prioritized technology roadmap aligned to business goals' },
      { stat: '40%', label: 'Reduction in technical debt and infrastructure costs on average' },
    ],
    process: [
      {
        n: '01',
        title: 'Technical Audit',
        desc: 'We review your current codebase, infrastructure, team composition, and vendor relationships. We identify technical debt, security gaps, and scalability constraints before recommending a path forward.',
      },
      {
        n: '02',
        title: 'Roadmap Development',
        desc: 'We build a prioritized technology roadmap aligned to your business objectives. Every item on the roadmap has a business rationale, not just a technical one.',
      },
      {
        n: '03',
        title: 'Team Structure',
        desc: 'We assess and restructure your engineering team as needed, hiring plans, role definitions, performance standards, and development workflows that support the roadmap.',
      },
      {
        n: '04',
        title: 'Execution Leadership',
        desc: 'We lead the engineering team through delivery, sprint planning, architecture decisions, code review standards, and incident response. We are accountable for technical output.',
      },
      {
        n: '05',
        title: 'Transition Planning',
        desc: 'We document everything: architecture decisions, runbooks, team processes, and vendor contracts. We build for the full-time CTO you will eventually hire, not for ourselves.',
      },
    ],
    philosophy: {
      title: 'Technology strategy is business strategy. They are the same conversation.',
      body: 'Most companies treat technology as a cost center to be managed rather than a capability to be built. The result is a reactive engineering culture that builds what is asked rather than what is needed. A Fractional CTO changes the orientation, technology decisions are made with the business outcome in mind, and the business strategy is stress-tested against technical reality.',
      principles: [
        {
          heading: 'Architecture is a long game',
          detail:
            'Every shortcut in architecture becomes a constraint at scale. We make the right architectural decisions early, even when they take longer, because the alternative is rebuilding at the worst possible time.',
        },
        {
          heading: 'Build for the team, not the technology',
          detail:
            'The best technology stack is the one your team can maintain, extend, and debug at 2am. We choose tools that fit your team, not tools that showcase our preferences.',
        },
        {
          heading: 'Security is not optional',
          detail:
            'Security is designed into systems, not bolted on afterward. Every architecture review starts with a threat model and ends with a compliance framework appropriate for your industry.',
        },
      ],
    },
    faq: [
      {
        q: 'Does a Fractional CTO write code?',
        a: 'It depends on the engagement. For early-stage companies, a Fractional CTO may contribute hands-on to critical systems. For more mature organizations, the role is primarily strategic, architecture, leadership, and decision-making.',
      },
      {
        q: 'How does a Fractional CTO interact with my development team?',
        a: 'The Fractional CTO becomes the technical leader for your team, running planning sessions, reviewing architecture decisions, conducting code reviews on critical systems, and being the escalation point for complex technical problems.',
      },
      {
        q: 'Can a Fractional CTO help with fundraising preparation?',
        a: 'Yes. Technical due diligence is critical for Series A and beyond. A Fractional CTO can prepare your codebase, documentation, and infrastructure for investor scrutiny and represent the technical vision to potential investors.',
      },
      {
        q: 'What is the cost of a Fractional CTO?',
        a: 'A full-time CTO typically costs $200,000-$350,000 in total compensation plus equity. A Fractional CTO engagement runs $8,000-$18,000 per month depending on scope and hours, a 70% saving.',
      },
      {
        q: 'How does this differ from hiring a technical consultant?',
        a: 'A consultant delivers a report or a project. A Fractional CTO takes ongoing accountability for your technology outcomes, they are a member of your leadership team, not a vendor delivering a deliverable.',
      },
    ],
  },
  {
    slug: 'fractional-cfo',
    n: 'F3',
    name: 'Fractional CFO',
    eyebrow: 'FRACTIONAL C-SUITE',
    tagline: 'Financial clarity that drives decisions, not just reports.',
    description:
      'A Fractional CFO provides the financial leadership that growing businesses need without the overhead of a full-time executive hire. SA Media places experienced financial leaders who build forecasting models, support fundraising, and give your leadership team the financial visibility to make confident decisions.',
    whoFor:
      'Pre-Series B startups preparing for fundraising, family-owned businesses scaling operations, companies navigating M&A, and any growth-stage organization that needs financial strategy beyond bookkeeping but cannot justify a full-time CFO.',
    includes: [
      'Financial Modelling & Forecasting',
      'Cash Flow Management',
      'Fundraising Support & Investor Relations',
      'Board & Investor Reporting',
      'Unit Economics Analysis',
      'Financial Systems & Software Implementation',
      'Budgeting & Variance Analysis',
      'Tax & Compliance Strategy',
    ],
    outcomes: [
      { stat: '65%', label: 'Cost saving compared to a full-time CFO in total compensation' },
      { stat: '30 days', label: 'To a complete financial model and cash flow forecast' },
      { stat: '2×', label: 'Fundraising success rate improvement with professional financial preparation' },
    ],
    process: [
      {
        n: '01',
        title: 'Financial Audit',
        desc: 'We review your existing financial records, accounting systems, reporting structures, and cash position. We identify gaps in visibility and controls that need to be addressed before anything else.',
      },
      {
        n: '02',
        title: 'Model & Forecast',
        desc: 'We build a financial model that reflects your business: revenue drivers, cost structure, unit economics, and cash runway. This model becomes the foundation for every strategic financial decision.',
      },
      {
        n: '03',
        title: 'Systems & Controls',
        desc: 'We implement or optimize your financial systems, accounting software, reporting dashboards, approval workflows, and spend controls that give you real-time financial visibility.',
      },
      {
        n: '04',
        title: 'Strategic Leadership',
        desc: 'We attend leadership meetings as your CFO, contributing financial perspective to operational decisions, hiring plans, pricing strategy, and capital allocation.',
      },
      {
        n: '05',
        title: 'Fundraising or Exit Support',
        desc: 'When you are raising capital or preparing for acquisition, we lead the financial preparation, data room construction, financial narrative, investor Q&A, and due diligence support.',
      },
    ],
    philosophy: {
      title: 'Financial clarity is not about looking backward. It is about seeing forward.',
      body: 'Most growing businesses have a bookkeeper who tells them what happened and an accountant who files their taxes. What they lack is a financial leader who can model what will happen, explain the trade-offs, and help the team make better resource allocation decisions. A Fractional CFO fills that gap, connecting the financial story to the business strategy in a way that drives action, not just compliance.',
      principles: [
        {
          heading: 'Cash is the only metric that cannot be spun',
          detail:
            'Revenue can be recognized in multiple ways. Profit can be adjusted. Cash in the bank is a fact. We build our financial frameworks around cash visibility and cash discipline above all else.',
        },
        {
          heading: 'Every financial decision is a strategy decision',
          detail:
            'Where you spend money is where you are placing your bets. We make the connection between capital allocation and strategic priorities explicit, so leadership teams spend intentionally.',
        },
        {
          heading: 'Investors invest in clarity',
          detail:
            'A founder who can explain their unit economics, their path to profitability, and their key financial risks will raise capital more easily than one who cannot. We build that clarity.',
        },
      ],
    },
    faq: [
      {
        q: 'Does a Fractional CFO replace my bookkeeper or accountant?',
        a: 'No. A Fractional CFO works alongside your existing bookkeeping and accounting function, operating at a higher strategic level. We often help select or optimize those supporting functions.',
      },
      {
        q: 'How does a Fractional CFO support fundraising?',
        a: 'We build the financial models investors expect, prepare the data room, coach founders through financial Q&A, and often make direct introductions to appropriate capital sources.',
      },
      {
        q: 'What size company benefits most from a Fractional CFO?',
        a: 'Companies with $1M-$30M in revenue typically get the most value. Below $1M, basic bookkeeping usually suffices. Above $30M, a full-time CFO is usually justified by complexity.',
      },
      {
        q: 'Can a Fractional CFO manage our accounting team?',
        a: 'Yes. The Fractional CFO becomes the head of finance, managing controllers, accountants, and finance operations staff while reporting to the CEO or board.',
      },
      {
        q: 'How involved is the Fractional CFO in daily operations?',
        a: 'Typically 8-16 hours per week. The role focuses on strategic financial leadership, modelling, reporting, fundraising, rather than day-to-day transaction processing.',
      },
    ],
  },
  {
    slug: 'fractional-cso',
    n: 'F4',
    name: 'Fractional CSO',
    eyebrow: 'FRACTIONAL C-SUITE',
    tagline: 'Corporate strategy that translates to execution.',
    description:
      'A Fractional CSO provides the strategic leadership that helps organizations navigate market expansion, competitive threats, and growth decisions without full-time executive overhead. SA Media places experienced strategy leaders who facilitate corporate planning, evaluate opportunities, and build the frameworks your leadership team needs to make aligned decisions.',
    whoFor:
      'Companies entering new markets, organizations preparing for M&A activity, leadership teams that need an external strategic perspective, and growth-stage businesses that have outgrown their original strategy but have not yet defined the next one.',
    includes: [
      'Corporate Strategy Development',
      'Market Expansion Planning',
      'Competitive Intelligence Framework',
      'M&A Target Identification & Due Diligence Support',
      'OKR & KPI Framework Design',
      'Strategic Partnership Development',
      'Board Strategy Presentations',
      'Scenario Planning & Risk Assessment',
    ],
    outcomes: [
      { stat: '50%', label: 'Cost saving versus a full-time Chief Strategy Officer role' },
      { stat: '60 days', label: 'To a complete corporate strategy with 12-month execution plan' },
      { stat: '3×', label: 'Faster strategic decision-making with a clear framework and decision criteria' },
    ],
    process: [
      {
        n: '01',
        title: 'Strategic Assessment',
        desc: 'We map your current strategic position: market share, competitive threats, organizational capabilities, and growth constraints. We identify the strategic choices that will have the most impact.',
      },
      {
        n: '02',
        title: 'Strategy Development',
        desc: 'We facilitate strategy sessions with your leadership team, building a corporate strategy that is specific, measurable, and grounded in market reality, not a vision deck, but a decision framework.',
      },
      {
        n: '03',
        title: 'Execution Framework',
        desc: 'We translate strategy into execution: OKRs, KPIs, initiative prioritization, and resource allocation decisions. Strategy without an execution framework is just a document.',
      },
      {
        n: '04',
        title: 'Ongoing Governance',
        desc: 'We facilitate quarterly strategy reviews, track progress against strategic milestones, and help leadership navigate the decisions that arise when strategy meets reality.',
      },
      {
        n: '05',
        title: 'Opportunity Evaluation',
        desc: 'As strategic opportunities arise, new markets, partnerships, acquisitions, we evaluate them against the strategic framework and provide a recommendation with supporting analysis.',
      },
    ],
    philosophy: {
      title: 'Strategy is a series of deliberate choices about what you will not do.',
      body: 'Most companies do not have a strategy problem, they have a focus problem. They pursue too many initiatives, serve too many customer segments, and compete in too many markets. The result is a business that is competent at many things and excellent at nothing. A Fractional CSO brings the discipline of saying no: defining where to compete, how to win, and what to stop doing so the organization can concentrate its energy where it has the right to win.',
      principles: [
        {
          heading: 'Strategy must survive first contact with competition',
          detail:
            'A strategy that assumes competitors will not respond is not a strategy, it is a hope. We stress-test every strategic plan against competitive responses and market disruptions before committing to it.',
        },
        {
          heading: 'Alignment is the multiplier',
          detail:
            'A mediocre strategy executed with full organizational alignment will outperform a brilliant strategy executed by a divided team. We invest as much energy in building alignment as in building the strategy itself.',
        },
        {
          heading: 'The best strategy is the one the organization can actually execute',
          detail:
            'Strategic ambition must be calibrated to organizational capability. We build strategies that stretch the organization without breaking it, ambitious but achievable with the right focus.',
        },
      ],
    },
    faq: [
      {
        q: 'How is a Fractional CSO different from a management consultant?',
        a: 'A management consultant delivers a project, typically a report or a recommendation. A Fractional CSO takes ongoing accountability for strategic outcomes, participates in leadership team decisions, and evolves the strategy as the business evolves.',
      },
      {
        q: 'Can a Fractional CSO support an M&A process?',
        a: 'Yes. We can identify acquisition targets, conduct strategic fit analysis, support financial due diligence preparation, and help leadership navigate the strategic implications of a transaction.',
      },
      {
        q: 'Does the Fractional CSO attend board meetings?',
        a: 'Typically yes, at least quarterly. Board strategy presentations are one of the core deliverables of the role, translating the business strategy into the language and format that boards need.',
      },
      {
        q: 'How many hours per week is a typical Fractional CSO engagement?',
        a: 'Strategy work is cyclical, intensive during planning cycles and opportunity evaluations, lighter during execution phases. Most engagements average 8-14 hours per week over the engagement period.',
      },
      {
        q: 'What is the cost of a Fractional CSO?',
        a: 'Full-time Chief Strategy Officers typically earn $180,000-$300,000 in total compensation. Fractional CSO engagements run $6,000-$15,000 per month depending on scope and intensity.',
      },
    ],
  },
  {
    slug: 'fractional-cro',
    n: 'F5',
    name: 'Fractional CRO',
    eyebrow: 'FRACTIONAL C-SUITE',
    tagline: 'Revenue architecture. Built to compound.',
    description:
      'A Fractional CRO builds the revenue systems, sales processes, and growth frameworks that turn your pipeline into predictable revenue. SA Media places experienced revenue leaders who align marketing, sales, and customer success into a single revenue operation focused on scalable, repeatable growth.',
    whoFor:
      'B2B companies with stagnant or unpredictable revenue growth, post-funding startups building their first formal sales process, companies with strong marketing but poor sales conversion, and businesses preparing for a growth round that requires demonstrated revenue scalability.',
    includes: [
      'Revenue Strategy & Annual Planning',
      'Sales Process Design & Documentation',
      'Pipeline Architecture & CRM Implementation',
      'Revenue Forecasting & Reporting',
      'Sales Team Structure & Coaching',
      'Marketing-Sales Alignment (SLA Development)',
      'Partnership & Channel Revenue Development',
      'Pricing Strategy & Packaging Optimization',
    ],
    outcomes: [
      { stat: '40%', label: 'Average improvement in sales conversion rate within 6 months' },
      { stat: '25%', label: 'Reduction in average sales cycle length through process optimization' },
      { stat: '55%', label: 'Cost saving versus a full-time CRO in total compensation' },
    ],
    process: [
      {
        n: '01',
        title: 'Revenue Audit',
        desc: 'We map every stage of your revenue process: lead sources, pipeline stages, conversion rates, deal velocity, win/loss patterns, and customer lifetime value. We identify where revenue is leaking and why.',
      },
      {
        n: '02',
        title: 'Process Design',
        desc: 'We design or redesign your sales process, stage definitions, qualification criteria, objection handling frameworks, and closing sequences. Every step is documented and trainable.',
      },
      {
        n: '03',
        title: 'CRM & Systems',
        desc: 'We implement or optimize your CRM and revenue operations stack. Forecasting requires data. Data requires discipline. We build the systems and habits that make your pipeline data trustworthy.',
      },
      {
        n: '04',
        title: 'Team Development',
        desc: 'We coach your sales and account management team, onboarding frameworks, call review processes, performance standards, and incentive structures that align effort with the right outcomes.',
      },
      {
        n: '05',
        title: 'Growth Loops',
        desc: 'We build the partnership programs, referral systems, and expansion revenue mechanisms that compound your revenue growth without proportionally scaling your sales team headcount.',
      },
    ],
    philosophy: {
      title: 'Revenue is not a result. It is a system. Build the system.',
      body: 'Most companies treat revenue as something that happens when salespeople work hard enough. The best revenue organizations treat it as an engineered outcome, the predictable result of a well-designed system of processes, incentives, data, and team capability. A Fractional CRO builds that system: aligning marketing, sales, and customer success around a shared revenue model and holding each function accountable for its contribution to the whole.',
      principles: [
        {
          heading: 'Pipeline quality over pipeline quantity',
          detail:
            'A pipeline full of unqualified opportunities is a resource drain and a forecasting lie. We build qualification frameworks that produce smaller, more accurate pipelines that actually close.',
        },
        {
          heading: 'Revenue operations is a discipline, not a department',
          detail:
            'Marketing, sales, and customer success are three parts of one revenue system. When they are misaligned, revenue suffers regardless of individual performance. We align them.',
        },
        {
          heading: 'Predictability is the product',
          detail:
            'Investors, boards, and leadership teams do not want high revenue, they want predictable revenue. Predictability comes from process discipline, data integrity, and a culture of accountability.',
        },
      ],
    },
    faq: [
      {
        q: 'Does a Fractional CRO manage the sales team directly?',
        a: 'Yes. The Fractional CRO becomes the head of revenue, managing sales managers, account executives, and customer success leads directly, with accountability to the CEO or board.',
      },
      {
        q: 'How quickly can a Fractional CRO impact revenue?',
        a: 'Early wins, pipeline visibility, qualification improvements, and quick process fixes, typically show impact within 60-90 days. Structural improvements to sales process and team capability take 3-6 months to compound.',
      },
      {
        q: 'Can a Fractional CRO help set up our CRM from scratch?',
        a: 'Yes. CRM implementation and optimization is a core part of most Fractional CRO engagements. We select the right tool, configure it correctly, and build the data discipline that makes it useful.',
      },
      {
        q: 'What is the cost of a Fractional CRO versus full-time?',
        a: 'Full-time CROs at growth-stage companies typically earn $200,000-$350,000 plus commission structures. Fractional CRO engagements run $8,000-$18,000 per month, a 55-65% saving.',
      },
      {
        q: 'How does a Fractional CRO coordinate with our marketing team?',
        a: 'One of the first deliverables in any Fractional CRO engagement is an SLA between marketing and sales, defining lead quality standards, handoff processes, and shared revenue targets.',
      },
    ],
  },
  {
    slug: 'fractional-cos',
    n: 'F6',
    name: 'Fractional COS',
    eyebrow: 'FRACTIONAL C-SUITE',
    tagline: 'Executive leverage. Operational clarity. Delivered part-time.',
    description:
      'A Fractional Chief of Staff gives founders and CEOs the operational bandwidth to lead at the level their business demands. SA Media places experienced chiefs of staff who run strategic projects, align cross-functional teams, prepare board communications, and handle the high-priority work that falls between every other executive role.',
    whoFor:
      'Founders and CEOs whose calendars are full but whose strategic priorities are not moving fast enough, scaling companies where cross-functional coordination is breaking down, executives preparing for fundraising or board engagement who need rigorous operational support, and leadership teams that need a trusted generalist to own the work that does not fit neatly into any department.',
    includes: [
      'Executive Calendar and Priority Management',
      'Strategic Project Ownership and Oversight',
      'Cross-Functional Team Coordination',
      'Board and Investor Communication Preparation',
      'OKR Tracking and Leadership Alignment',
      'Meeting Design and Follow-Through',
      'Operational Process Documentation',
      'Special Projects and CEO-Delegated Initiatives',
    ],
    outcomes: [
      { stat: '30%', label: 'More CEO time spent on high-leverage strategic work within 60 days' },
      { stat: '50%', label: 'Cost saving versus a full-time Chief of Staff in total compensation' },
      { stat: '2x', label: 'Faster execution of cross-functional strategic initiatives' },
    ],
    process: [
      {
        n: '01',
        title: 'Priority Audit',
        desc: 'We spend the first two weeks understanding your calendar, your priorities, and the gap between where your time is going and where it needs to go. We identify the highest-leverage areas where operational support will free up your strategic capacity.',
      },
      {
        n: '02',
        title: 'System Design',
        desc: 'We build the operating system around you: meeting cadences, communication protocols, project tracking, and the decision-making frameworks that allow your leadership team to move faster with less dependency on your direct involvement.',
      },
      {
        n: '03',
        title: 'Project Ownership',
        desc: 'We take direct ownership of the strategic projects and initiatives that need a senior operator to drive them. These are the high-priority items that have been sitting on the list because no one owns them with sufficient authority and attention.',
      },
      {
        n: '04',
        title: 'Team Alignment',
        desc: 'We attend leadership meetings, track commitments, follow up on action items, and surface the misalignments and gaps between functions before they become problems. We are the operational connective tissue across the leadership team.',
      },
      {
        n: '05',
        title: 'Board and Investor Preparation',
        desc: 'When board meetings, investor updates, or fundraising processes are approaching, we lead the preparation: coordinating inputs, building the narrative, preparing materials, and rehearsing the Q&A so leadership arrives ready.',
      },
    ],
    philosophy: {
      title: 'A great COS makes the CEO more effective without making them more dependent.',
      body: 'The best chiefs of staff do not create a new dependency, they build the systems and relationships that make the entire leadership team more capable. Their goal is to accelerate strategic execution, surface the information the CEO needs to make good decisions, and protect the time and attention of the leader from the operational noise that would otherwise consume it. Done well, the Chief of Staff role creates leverage that compounds over time.',
      principles: [
        {
          heading: 'Proximity with judgment',
          detail:
            'A Chief of Staff is closest to the CEO in information access. That proximity is only valuable if paired with sound judgment about what to escalate, what to handle, and what to eliminate from the agenda entirely.',
        },
        {
          heading: 'Alignment is the product',
          detail:
            'Most execution failures are alignment failures: different teams with different understandings of the priority, the timeline, or the decision that was made. A Chief of Staff prevents these failures by making alignment explicit and persistent.',
        },
        {
          heading: 'Serve the work, not the calendar',
          detail:
            'A Chief of Staff is not a sophisticated calendar manager. They are a strategic operator. The calendar is a tool; the outcome is a leadership team that is executing on the right priorities at the right pace.',
        },
      ],
    },
    faq: [
      {
        q: 'How is a Fractional Chief of Staff different from an Executive Assistant?',
        a: 'An Executive Assistant manages logistics: calendar, travel, correspondence. A Chief of Staff manages strategic priorities: project ownership, cross-functional coordination, board preparation, and leadership team alignment. The Chief of Staff operates at a significantly higher strategic level and takes accountability for outcomes, not just tasks.',
      },
      {
        q: 'How many hours per week does a Fractional Chief of Staff engage?',
        a: 'Most engagements run ten to twenty hours per week, structured around the highest-leverage activities: leadership team meetings, project oversight, executive preparation, and the strategic initiatives they own directly. The hours flex around strategic cycles, heavier during board preparation periods, lighter during execution phases.',
      },
      {
        q: 'Can a Fractional Chief of Staff manage other members of the leadership team?',
        a: 'The Chief of Staff does not manage the leadership team directly, they coordinate across it. They track commitments, facilitate alignment, and follow up on action items. They influence through the authority delegated by the CEO, not through a formal reporting relationship with other leaders.',
      },
      {
        q: 'What is the cost of a Fractional Chief of Staff versus a full-time hire?',
        a: 'A full-time Chief of Staff at a growth-stage company typically earns $120,000 to $200,000 in total compensation. A Fractional Chief of Staff engagement runs $5,000 to $12,000 per month depending on scope and hours, a 50 to 65 percent saving with comparable strategic output.',
      },
      {
        q: 'What types of companies benefit most from a Fractional Chief of Staff?',
        a: 'Companies at the Series A to Series C stage benefit most: large enough that the CEO cannot personally manage every strategic initiative, but not yet large enough to justify a full-time Chief of Staff. Also common among founder-led businesses scaling past $5M in revenue, and companies preparing for a fundraising round or board restructuring.',
      },
    ],
  },
]

export function getFractionalService(slug: string) {
  return fractionalServices.find((s) => s.slug === slug)
}
