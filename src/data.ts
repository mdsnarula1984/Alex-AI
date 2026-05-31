/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, FAQItem, CaseStudy, ToolExpertiseItem, TestimonialItem, AutomationScenario } from "./types";

export const servicesData: ServiceItem[] = [
  {
    id: "workflow-automation",
    title: "AI Workflow Automation",
    iconName: "Cpu",
    description: "Connect disjointed toolstacks and standardise operations. We design autonomous workflows that pass context, draft assets, and trigger actions with zero human touchpoints.",
    benefits: [
      "Process reports, documents, and content in bulk",
      "Decrease visual copy-pasting by up to 90%",
      "Eradicate human error in repetitive operations",
      "Immediate asynchronous system notifications"
    ],
    statText: "90% Error Reduction",
    tools: ["Zapier", "Make", "n8n", "OpenAI"]
  },
  {
    id: "custom-agents",
    title: "Custom AI Agents",
    iconName: "Workflow",
    description: "Autonomous virtual specialists trained directly on your internal company wiki, policies, databases, and playbooks to triage issues, synthesize info, and execute scripts.",
    benefits: [
      "Custom RAG-based systems with instant search indexing",
      "Intelligent routing of support tickets and lead notes",
      "Automated document summarisation & draft assembly",
      "Runs silently in background queues with email triggers"
    ],
    statText: "95% Task Autonomy",
    tools: ["Claude", "OpenAI", "Pinecone", "LangChain"]
  },
  {
    id: "crm-integration",
    title: "CRM Automation",
    iconName: "Database",
    description: "Align sales pipelines with automation layers. Connect forms directly to CRMs, auto-enrich contacts, score opportunities, and generate tailored sales decks on the fly.",
    benefits: [
      "Sync records across systems in real-time",
      "Eliminate manual cold-entry administrative lag",
      "Intelligent scoring & automated owner assignment",
      "Personalised multi-channel sales sequencing"
    ],
    statText: "15hrs Saved/Rep Weekly",
    tools: ["HubSpot", "Salesforce", "Zapier", "Notion"]
  },
  {
    id: "lead-generation",
    title: "Lead Generation Engines",
    iconName: "Target",
    description: "Smarter outbound lists. Automatically scrape prospect lists, enrich details, filter via qualifying agents, and draft highly relevant personalized messages.",
    benefits: [
      "Continuous prospective client enrichment flows",
      "Automated qualitative lead scoring using AI agents",
      "Direct scheduling link distributions inside sequences",
      "Full dashboard analytics on engagement rates"
    ],
    statText: "3x Higher Bookings",
    tools: ["Make", "Apollo", "OpenAI", "Google Sheets"]
  },
  {
    id: "customer-support",
    title: "Support Automation",
    iconName: "MessageSquareText",
    description: "Delight customers with instant resolutions. Deploy support agents configured with safe fallback guardrails to handle up to 70% of common queries automatically.",
    benefits: [
      "24/7 instant initial support response SLAs",
      "Intelligent handoffs to human reps for edge cases",
      "Stripe integrations to update invoice/subscription data",
      "Structured data extraction from customer reviews"
    ],
    statText: "70% Ticket Deflection",
    tools: ["Zendesk", "Claude", "Make", "Slack"]
  },
  {
    id: "process-optimization",
    title: "Operational Auditing",
    iconName: "TrendingUp",
    description: "Full-scale corporate techstack analysis. We analyze your team's screen time, uncover operational bottlenecks, and draw precise blueprints to replace friction with code.",
    benefits: [
      "Detailed visual maps of hidden operating costs",
      "Actionable 30-60-90 day automation roadmap",
      "Full API compatibility and vendor assessments",
      "ROI projection metrics based on salary rates"
    ],
    statText: "250K+ Annual Savings",
    tools: ["n8n", "Miro", "Notion", "Make"]
  }
];

export const processSteps = [
  {
    step: "01",
    title: "The Audit",
    label: "Audit",
    description: "We shadow your team or analyze your custom schemas to map existing manual procedures, highlighting cost-saving opportunities and API bottlenecks.",
    deliverable: "Digital Bottleneck Map & Audit Document",
    color: "from-blue-500 to-indigo-600"
  },
  {
    step: "02",
    title: "The Strategy",
    label: "Strategy",
    description: "We draft a precise architecture document displaying tool connectors, logic branches, LLM touchpoints, cost estimates, and timeline expectations.",
    deliverable: "System Flowchart & ROI Blueprint",
    color: "from-cyan-500 to-blue-500"
  },
  {
    step: "03",
    title: "The Build",
    label: "Build",
    description: "We construct secure n8n or Make orchestrations and custom Node.js endpoint layers. Security guardrails are developed and embedded directly.",
    deliverable: "Operational Sandbox App & Webhooks",
    color: "from-violet-500 to-purple-600"
  },
  {
    step: "04",
    title: "The Integration",
    label: "Integrate",
    description: "We connect the workspace systems to your active CRM, Workspace, and internal databases, supporting smooth hand-offs and absolute stability.",
    deliverable: "Live Synchronization & Team Handover",
    color: "from-purple-500 to-pink-500"
  },
  {
    step: "05",
    title: "The Optimization",
    label: "Optimize",
    description: "We monitor execution logs, re-align LLM parameters to reduce API token burn, and expand automated nodes based on active performance telemetry.",
    deliverable: "Refined Prompts & Dashboard Tracking",
    color: "from-emerald-500 to-cyan-500"
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "marketing-agency",
    category: "Operations Sync",
    clientName: "ApexMedia Group",
    tagline: "Saved 120 Hours Monthly via Unified Client Orchestration",
    beforeState: "Account reps spent 15 hours a week manually copy-pasting raw client creative requests from Slack messages, jotting deadlines in HubSpot, creating Google Drive folders, and messaging freelancers on Asana.",
    afterState: "An intelligent Make.com flow captures incoming creative briefs, analyzes deadlines using structured Claude prompts, generates nested Google Drive folders, assigns tasks in Asana based on team loads, and summarizes project tasks directly in slack Channels.",
    metric: "120hrs",
    metricLabel: "Saved Monthly",
    description: "Integrated multiple endpoints safely, freeing account managers to focus entirely on high-budget creative strategy.",
    detailedResults: [
      "Client onboarding timeline slashed from 3 days to 4 minutes",
      "Zero missed briefs or scheduling delays in 6 months of operations",
      "HubSpot customer profiles auto-updated with live Asana task trackers",
      "Annual administrative salary savings of over $72,000"
    ],
    toolsUsed: ["Make.com", "HubSpot", "Slack", "Claude 3.5"]
  },
  {
    id: "ecom-brand",
    category: "Customer Experience",
    clientName: "BoltCart Essentials",
    tagline: "3x Faster Response Times and Automated Ticket Resolution",
    beforeState: "A team of five support reps spent hours sifting through emails, typing refund checks, lookup orders in Shopify, and updating Shippo. Reps struggled to meet their 12-hour SLA response target.",
    afterState: "A custom LLM agent reads inbound tickets, translates languages, queries Shopify databases via metadata webhooks, and handles common queries like refund requests under $30 completely autonomously.",
    metric: "3.2x",
    metricLabel: "Response Speed Boost",
    description: "Deflected the majority of recurring transactional queries so support personnel could dedicate time to complex disputes.",
    detailedResults: [
      "Inbound ticket queue size decreased from 450 active threads to 35",
      "Average response time plummeted from 14 hours to 8 seconds",
      "Refund requests under $30 processed automatically without human review",
      "Saved $110,000 in support hire overheads while keeping customer rates at 98%"
    ],
    toolsUsed: ["OpenAI API", "Zendesk", "Shopify API", "n8n"]
  },
  {
    id: "consulting-firm",
    category: "Sales Enablement",
    clientName: "Vanguard Partners",
    tagline: "70% Reduction in Enterprise Proposal Generation Efforts",
    beforeState: "Consultants manually researched incoming prospects using Google searches and LinkedIn, drafted customized 20-page strategic proposal decks, structured pitch estimations, and manually formatted margins using templates.",
    afterState: "An automated lead enrichment system scrapes prospect sites, extracts key executive pain points, drafts a detailed 8-page consulting roadmap using specific OpenAI assistant endpoints, and pre-fills elegant pricing templates.",
    metric: "70%",
    metricLabel: "Time Saved on Slideware",
    description: "Secured consistent enterprise branding and streamlined the proposal delivery cycle from weeks to a single afternoon.",
    detailedResults: [
      "Standardised proposal formatting across 4 global regional offices",
      "Lead dossiers auto-enriched with financial disclosures and tech stacks",
      "Win-ratio increased by 14% due to hyper-personalized strategy briefs",
      "Allowed senior partners to focus on pitching rather than manual presentations"
    ],
    toolsUsed: ["GPT-4o", "HubSpot", "Notion API", "n8n"]
  }
];

export const toolsExpertiseData: ToolExpertiseItem[] = [
  {
    id: "openai",
    name: "OpenAI",
    category: "ai",
    logoText: "GPT",
    description: "Setting the standard in high-end logic reasoning, formatting structured JSON outputs, and embedding models.",
    expertiseLevel: 98,
    useCase: "Complex reasoning agents, lead scoring systems, dynamic code generation, and financial analysis tables."
  },
  {
    id: "claude",
    name: "Claude AI",
    category: "ai",
    logoText: "Anthropic",
    description: "Industry-leading context windows, empathetic copy structure, precise document reasoning, and code parsing capabilities.",
    expertiseLevel: 95,
    useCase: "RAG agent search setups, proposal drafting, support desk processing, and deep regulatory audit sheets."
  },
  {
    id: "zapier",
    name: "Zapier Editor",
    category: "nocode",
    logoText: "Zapier",
    description: "Rapid deployment environment for standard business automations, with deep supports for 5,000+ business APIs.",
    expertiseLevel: 94,
    useCase: "Form collection, basic Slack automation, instant alerts, and legacy software micro-connectors."
  },
  {
    id: "make",
    name: "Make.com",
    category: "nocode",
    logoText: "Make",
    description: "Highly visual multi-step processing, complex logic filters, granular array-mapping buffers, and high volume routers.",
    expertiseLevel: 97,
    useCase: "Lead capture pipelines, raw text batch summaries, visual database replication, and bulk document generation."
  },
  {
    id: "n8n",
    name: "n8n.io",
    category: "nocode",
    logoText: "n8n",
    description: "Flexible nodes, secure self-hosting capacities, custom JavaScript embedding, and direct JSON parsing engines.",
    expertiseLevel: 96,
    useCase: "Enterprise data sync routes, private AI workflows, secure on-prem webhooks, and cost-efficient scaling loops."
  },
  {
    id: "hubspot",
    name: "HubSpot CRM",
    category: "crm",
    logoText: "HubSpot",
    description: "Premier marketing/sales ledger. Deep fields customization, pipeline stages, engagement histories, and APIs triggers.",
    expertiseLevel: 92,
    useCase: "Automated deal movement, client communication loops, meeting link triggers, and attribution reports."
  },
  {
    id: "salesforce",
    name: "Salesforce CRM",
    category: "crm",
    logoText: "SFDC",
    description: "Enterprise state management. Scalable object architectures, apex-level trigger chains, and native integration hooks.",
    expertiseLevel: 88,
    useCase: "Cross-department updates, custom objects matching, custom account hierarchies, and mass marketing syncing."
  },
  {
    id: "workspace",
    name: "Google Workspace",
    category: "workspace",
    logoText: "GSuite",
    description: "Collaborative framework. Sheets lists, automatic Drive templates, calendar schedulers, and programmatic Gmail queues.",
    expertiseLevel: 95,
    useCase: "Drafting dynamic presentations, writing custom Sheets reports, scheduling event invites, and archiving logs."
  },
  {
    id: "notion",
    name: "Notion Systems",
    category: "workspace",
    logoText: "Notion",
    description: "Modern wiki structure. Structured relational databases, task trackers, internal knowledge-bases, and client portals.",
    expertiseLevel: 93,
    useCase: "Knowledge base pipelines, internal QA logs, automatic meeting brief summaries, and task dashboard syncs."
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "jenkins",
    name: "Sarah Jenkins",
    role: "VP of Product Operations",
    company: "ApexMedia Group",
    review: "Alex Carter fundamentally transformed our client operations. We went from copy-pasting customer feedback reports across three teams to a fully automated agent that routes, summarizes, and drafts tickets in Jira. Our team has recovered hundreds of head hours.",
    rating: 5,
    avatarColor: "bg-blue-600 text-white"
  },
  {
    id: "vance",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "BoltCart Essentials",
    review: "The automation Alex built on n8n and Make eliminated our back-office bottleneck overnight. Our response window dropped from 14 hours to under 10 seconds, directly increasing our conversion rates by 42%. Worth every single penny of the consulting retainer.",
    rating: 5,
    avatarColor: "bg-cyan-600 text-slate-100"
  },
  {
    id: "rostova",
    name: "Elena Rostova",
    role: "Managing Partner",
    company: "Vanguard Partners",
    review: "Before working with Alex, our senior partners spent 15 hours a week in CRM administration and building custom pitch decks. Now, our leads are auto-scored, enriched, and matched with highly tailored slide sheets before we even hop on the call. Absolutely incredible work.",
    rating: 5,
    avatarColor: "bg-purple-600 text-white"
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What exactly is AI automation and how does it fit my business?",
    answer: "AI automation moves beyond standard triggers (like 'when X, do Y') by inserting cognitive intelligence into the system. It allows workflows to parse unstructured texts, draft relevant assets, categorize feedback, score leads, or extract structured items from unstructured files like emails or PDFs. If your team spends time reading text, typing standardized emails, copying information across software, or updating databases, those tasks can be automated.",
    category: "concept"
  },
  {
    id: "faq-2",
    question: "How long does a typical implementation take from onset to live deployment?",
    answer: "Minor automation structures or single CRM sync triggers can be running within 1 to 2 weeks. Full enterprise processes involving complex AI agents, knowledge-base indexing, and customized system APIs generally take between 4 to 8 weeks. We deploy in secure sandbox platforms first, ensuring complete testing before transitioning to the live workspace.",
    category: "timeline"
  },
  {
    id: "faq-3",
    question: "What logic platforms, CRM software, and AI systems do you specialize in?",
    answer: "We specialize in OpenAI (GPT Models) and Anthropic (Claude models) for AI logic layers. For flow execution, we deploy on Make.com, n8n.io, or Zapier depending on complexity and security parameters. We integrate directly with Salesforce, HubSpot, Shopify, Slack, Notion, Asana, Zendesk, and any custom systems that expose RESTful API connectors.",
    category: "tech"
  },
  {
    id: "faq-4",
    question: "Is AI automation expensive and what kind of budget is required?",
    answer: "Our consulting packages conform directly to the complexity of your custom requirements. A single strategic audit is highly cost-accessible, while comprehensive workflows range from mid to high four-figures. We design explicitly with structural ROI metrics in mind; if an automation doesn't save at least 3x its budget in saved hours or overhead within the first year, we suggest not building it.",
    category: "cost"
  },
  {
    id: "faq-5",
    question: "How secure is our proprietary customer data when routed through AI models?",
    answer: "Data security is our primary architecture directive. We ensure all integrations utilize official developer API keys, which guarantee that OpenAI, Anthropic, or CRM vendors DO NOT train their models on your routed input data. Where required, we utilize local parameters or set up self-hosted instances on n8n inside private Google Cloud instances to enforce absolute data isolation.",
    category: "security"
  },
  {
    id: "faq-6",
    question: "What is the concrete difference between a Custom AI Agent and a standard chatbot?",
    answer: "Standard chatbots follow rigid, script-based flowcharts. If a user says 'hello', ask 'how can I help?'. An AI Agent leverages Large Language Models to evaluate queries, dynamically access secure API databases, match logic rules, format custom outputs, and perform actions like triggering refunds, syncing files, or scoring clients autonomously based on conversational context.",
    category: "ai"
  },
  {
    id: "faq-7",
    question: "Why would I hire an AI consultant instead of building this with my internal team?",
    answer: "While internal IT teams are exceptional at scaling databases or troubleshooting networks, automation design demands specialized systems engineering. We live and breathe specific visual platforms (n8n, Make), prompt optimization vectors, and API schemas daily. We recognize edge cases, structural rate-limiting thresholds, and token-cost variables that save companies dozens of hours of troubleshooting.",
    category: "business"
  },
  {
    id: "faq-8",
    question: "How do we get started? What is the client onboarding workflow?",
    answer: "Getting started starts with booking a free Strategy Discovery Call. On this 30-minute call, we analyze your current operations, isolate your primary bottlenecks, and review high-yield automation areas. If there's a strong procedural match, we submit a formal proposal and scope document showing direct pricing structure and estimated hour recoveries.",
    category: "business"
  }
];

export const automationScenariosData: AutomationScenario[] = [
  {
    id: "lead-enrichment",
    title: "Inbound Lead Triage & Enrichment",
    description: "Intercept incoming contact requests instantly, gather deep background telemetry on metadata, score lead potential, enter records in HubSpot, and draft personalized sequences.",
    trigger: "New Contact Request Form Submitted",
    metrics: [
      { label: "Original Human Manual Work", value: "22 mins" },
      { label: "AI Automation Sandbox Runtime", value: "12 seconds" },
      { label: "Sales Rep Meeting Conversion", value: "+38%" }
    ],
    steps: [
      {
        id: "le-1",
        title: "Catch Webhook",
        description: "Receive the payload from Webflow form submission. Capture name (Sarah Miller), email (sarah@vanguard.com), and company info.",
        output: "{ name: 'Sarah Miller', email: 'sarah@vanguard.com', challenges: 'CRM out of sync' }",
        status: "idle"
      },
      {
        id: "le-2",
        title: "Enrich Company Data",
        description: "Pull technical profiles and company growth metrics. Query Clearbit API.",
        output: "{ company: 'Vanguard Corp', employees: 145, sector: 'E-commerce SaaS', ARR: '$12M' }",
        status: "idle"
      },
      {
        id: "le-3",
        title: "AI Lead Validation & Scoring",
        description: "Feed details into GPT-4o Agent. Validate fits and draft priority briefing dossiers.",
        output: "{ score: 94, tier: 'A', priorityCode: 'HIGH_CONVERSION_FIT', summary: 'Qualifying enterprise SaaS with scaling issues.' }",
        status: "idle"
      },
      {
        id: "le-4",
        title: "HubSpot Deal Generation",
        description: "Create structured record, write deal, assign task to principal owner, and synchronize timelines.",
        output: "{ hubspotId: 8871263, status: 'Pipeline created', ownerName: 'Alex Carter' }",
        status: "idle"
      },
      {
        id: "le-5",
        title: "Slack Notification & Hyper-Draft",
        description: "Ping internal channel with Lead Alert, matching executive dossiers, and pre-draft custom response emails.",
        output: "{ slackChannel: '#inbound-leads', msg: 'Lead Sarah Miller enriched automatically.' }",
        status: "idle"
      }
    ]
  },
  {
    id: "content-pipeline",
    title: "Content & Social Syndication Hub",
    description: "Publish once, distribute across multiple social spaces instantly. Transform raw audio transcripts or updates into tailored LinkedIn posts, newsletters, and quotes.",
    trigger: "New Raw Document Uploaded on Google Drive",
    metrics: [
      { label: "Original Human Writing Time", value: "3.5 hours" },
      { label: "AI Automation Assembly Loop", value: "45 seconds" },
      { label: "Organic Content Reach Boost", value: "+150%" }
    ],
    steps: [
      {
        id: "cp-1",
        title: "Detect New Upload",
        description: "Google Drive webhook intercepts a new .docx or text transcript document file.",
        output: "{ fileName: 'AI_Trends_May26.docx', fileSize: '1.2MB' }",
        status: "idle"
      },
      {
        id: "cp-2",
        title: "Transcript Analysis",
        description: "Parse main content themes, arguments, key statistics, and structural timestamps.",
        output: "{ wordsCount: 3200, keyThemes: ['n8n', 'NoCode API', 'GDPR compliance'] }",
        status: "idle"
      },
      {
        id: "cp-3",
        title: "Claude Content Creation",
        description: "Deploy Claude 3.5 Sonnet to draft highly engageable creative copies for LinkedIn, Twitter threads, and newsletters.",
        output: "{ linkedinCopiedText: '...', twitterThreadText: '...', newsletterSummary: '...' }",
        status: "idle"
      },
      {
        id: "cp-4",
        title: "Structured Database Logging",
        description: "Log draft outputs, metadata keywords, and social links in the internal Notion content calendar.",
        output: "{ notionPageId: '90a8cbb1', status: 'Pending Review', assignees: ['Alex Carter'] }",
        status: "idle"
      },
      {
        id: "cp-5",
        title: "Slack Approval Alert",
        description: "Send dynamic buttons on Slack allowing teammates to review, adjust, or instantly dispatch drafts to Buffer/Hootsuite.",
        output: "{ slackMsgToken: '88712a3', buttonStates: ['Approve', 'Edit Draft'] }",
        status: "idle"
      }
    ]
  },
  {
    id: "support-agent",
    title: "AI Support Agent & self-correction flow",
    description: "Detect frustrated customer sentiment instantly, index solutions sheets, resolve refund queries autonomously under limits, and escalate issues smoothly.",
    trigger: "Negative Review or Frustrated Email Received",
    metrics: [
      { label: "Original Ticket Response SLA", value: "14 hours" },
      { label: "AI Resolved Support Loop", value: "9 seconds" },
      { label: "Customer Satisfaction Rate", value: "98.4%" }
    ],
    steps: [
      {
        id: "sa-1",
        title: "Inbound Email Sentiment Parser",
        description: "Fetch new tickets in Zendesk. Classify customer sentiments and urgency tiers.",
        output: "{ sentiment: 'FRUSTRATED', urgency: 'CRITICAL', text: 'My subscription was double-billed!' }",
        status: "idle"
      },
      {
        id: "sa-2",
        title: "Database Vector Search",
        description: "Search customer history, billing codes, and standard support knowledge-bases.",
        output: "{ billingRecordFound: true, subscriptionCost: '$29.99', lastPaymentDate: 'May 30', status: 'Double charge confirmed' }",
        status: "idle"
      },
      {
        id: "sa-3",
        title: "Stripe Refund Dispatch",
        description: "Trigger programmatic refund via safe checkout webhooks for proven system errors.",
        output: "{ stripeTransactionRefunded: '$29.99', id: 're_18u2i', status: 'Refund processed successfully' }",
        status: "idle"
      },
      {
        id: "sa-4",
        title: "AI Response Composer",
        description: "Draft an empathetic, polite response notifying the client of the immediate refund and credit bonus.",
        output: "{ responseBody: 'Hello! I detected a billing overlap. I have processed an immediate refund to your card...' }",
        status: "idle"
      },
      {
        id: "sa-5",
        title: "Ticket Dispatch & Slack Log",
        description: "Send email, update ticket status to closed in Zendesk, log automated refund stats in Slack Operations dashboard.",
        output: "{ zendeskStatus: 'CLOSED', stripeReference: 'ref_33425', metricAdded: '$29.99' }",
        status: "idle"
      }
    ]
  }
];
