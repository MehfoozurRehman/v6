import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Code2,
  Laptop,
  Map,
  MessageCircle,
  MonitorCog,
  MousePointerClick,
  Rocket,
  School,
  Smartphone,
  UsersRound,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  businessValue: string;
  stack: string[];
  icon: LucideIcon;
  url?: string;
  logoUrl?: string;
  heroImageUrl?: string;
  problem: string;
  approach: string;
  outcome: string;
  responsibilities: string[];
  highlights: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ProcessStep = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  skills: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  focus: string[];
};

export const profile = {
  name: "Mehfooz-ur-Rehman",
  role: "Full-stack product developer",
  company: "Devscot",
  location: "Samundri, Faisalabad, Punjab, Pakistan",
  email: "mehfoozijaz786@gmail.com",
  phone: "+92 313 7178074",
  whatsapp: "https://wa.me/923137178074",
  github: "https://github.com/MehfoozurRehman",
  linkedin: "https://www.linkedin.com/in/mehfooz-rehman-37a1b0231/",
  instagram: "https://www.instagram.com/mehfoozurrehman___/",
  facebook: "https://www.facebook.com/MehfoozurRehmanIjaz/",
  codesandbox: "https://codesandbox.io/u/MehfoozurRehman",
  headline:
    "Full-stack product developer building web, mobile, desktop and AI-powered business systems.",
  subheadline:
    "I help businesses turn messy operations into fast, reliable software: dashboards, mobile apps, automation, AI assistants, WhatsApp workflows and complete SaaS products.",
  about:
    "I am a developer proficient in web, mobile and desktop app development. I enjoy turning complex problems into simple, beautiful and intuitive solutions, especially for consumer and business-facing systems where UI, UX and reliability matter.",
} as const;

export const services: Service[] = [
  {
    title: "SaaS and dashboards",
    icon: BriefcaseBusiness,
    description:
      "Admin panels, customer portals, analytics, billing flows and operations software built around real business workflows.",
  },
  {
    title: "Mobile apps",
    icon: Smartphone,
    description:
      "React Native and Expo apps for iOS and Android, including EAS builds, TestFlight and Play Console delivery.",
  },
  {
    title: "AI automation",
    icon: BrainCircuit,
    description:
      "OpenAI and Gemini powered assistants, summaries, action items, business chat, and workflow automation.",
  },
  {
    title: "Desktop tools",
    icon: MonitorCog,
    description:
      "Electron and background utilities that connect local desktop workflows with cloud dashboards.",
  },
];

export const projects: Project[] = [
  {
    slug: "schooliee",
    title: "Schooliee",
    category: "School management platform",
    icon: School,
    url: "https://www.schooliee.com",
    heroImageUrl: "/schooliee-hero.webp",
    summary:
      "A cloud-based school ERP for small to mid-sized schools in Pakistan with admissions, attendance, exams, family profiles, challans, staff tools and parent communication.",
    businessValue:
      "Helps schools replace scattered spreadsheets and manual follow-ups with one reliable daily workflow.",
    stack: ["Next.js", "Firebase", "React Native", "WhatsApp", "AI", "Convex"],
    problem:
      "Schools were juggling admissions, attendance, challans, staff work and parent communication in disconnected tools and chats.",
    approach:
      "Shaped the product around daily school operations with role-based workflows, practical mobile access and clear admin control.",
    outcome:
      "Gives schools one workflow for the full academic cycle instead of separate spreadsheets and manual follow-ups.",
    responsibilities: [
      "Product planning",
      "Full-stack implementation",
      "Parent and staff workflows",
      "Mobile delivery",
    ],
    highlights: [
      "Admissions",
      "Attendance",
      "Fees and challans",
      "Parent communication",
    ],
  },
  {
    slug: "dsme-globals",
    title: "DSME Globals",
    category: "Software and product development",
    icon: Building2,
    url: "https://dsmeglobal.web.app",
    logoUrl: "/dsme-logo-transparent.webp",
    heroImageUrl: "/dsme-hero.webp",
    summary:
      "A company site for a custom technology services firm focused on web and mobile development, scoping workshops, UI/UX and turnkey product delivery.",
    businessValue:
      "Shows the delivery side of the product work with a company profile centered on end-to-end software services.",
    stack: ["Web apps", "Mobile apps", "UI/UX", "Product delivery"],
    problem:
      "The company needed a clear, credible presence for services that were otherwise scattered across conversations and direct outreach.",
    approach:
      "Built a concise service site that makes capabilities, delivery scope and contact paths easy to understand.",
    outcome:
      "Creates a straightforward front door for product and software delivery work.",
    responsibilities: [
      "Information architecture",
      "Responsive UI",
      "Service positioning",
      "Brand presentation",
    ],
    highlights: [
      "Company profile",
      "Service clarity",
      "Delivery focus",
      "Client-facing presence",
    ],
  },
  {
    slug: "leadprofit",
    title: "LeadProfit",
    category: "Amazon seller suite",
    icon: MessageCircle,
    url: "https://www.leadprofit.com",
    heroImageUrl: "/leadprofit-hero.webp",
    summary:
      "An Amazon seller platform that focuses on pricing, inventory, order tracking and analytics to keep operations and profitability visible.",
    businessValue:
      "Turns marketplace operations into one dashboard so sellers can monitor performance without guesswork.",
    stack: ["Analytics", "Inventory", "Orders", "Amazon SP-API"],
    problem:
      "Amazon sellers need a single view of pricing, inventory and orders to avoid losing profit through blind spots.",
    approach:
      "Focused the interface on operations visibility and actionable monitoring rather than raw data display.",
    outcome:
      "Helps sellers keep tabs on daily marketplace activity from one place.",
    responsibilities: [
      "Marketplace workflows",
      "Dashboard design",
      "Operational data modeling",
      "API integration",
    ],
    highlights: ["Pricing", "Inventory", "Orders", "Analytics"],
  },
  {
    slug: "clipout",
    title: "Clipout",
    category: "Animated recording tool",
    icon: Bot,
    url: "https://clipout.video",
    heroImageUrl: "/clipout-hero.webp",
    summary:
      "A recording and animation tool that helps create polished clips with customizable templates and a streamlined capture flow.",
    businessValue:
      "Reduces the work needed to produce branded motion content and short recorded demos.",
    stack: ["Templates", "Recording", "Motion", "Editing"],
    problem:
      "Recording and polishing short demos can take too many manual steps for everyday marketing work.",
    approach:
      "Built around templated capture and streamlined editing so the user stays in flow.",
    outcome:
      "Makes branded motion content faster to produce and easier to repeat.",
    responsibilities: [
      "Capture workflow",
      "Template-driven UI",
      "Editing flow",
      "Product UX",
    ],
    highlights: ["Recording", "Templates", "Motion", "Editing"],
  },
  {
    slug: "whatsapp-business-automation",
    title: "WhatsApp Business Automation",
    category: "Customer support and lead handling",
    icon: MessageCircle,
    summary:
      "Lead capture, confirmations, AI-assisted replies and business process automation around WhatsApp conversations.",
    businessValue:
      "Designed for businesses in markets where customers already prefer WhatsApp over complex portals.",
    stack: ["Node.js", "OpenAI", "WhatsApp", "Webhooks"],
    problem:
      "Businesses needed to respond to leads and handle follow-up without constant manual replies.",
    approach:
      "Connected lead capture, automation and AI-assisted responses to WhatsApp-centric workflows.",
    outcome: "Cuts down response time and keeps customer communication moving.",
    responsibilities: [
      "Webhook logic",
      "Lead handling",
      "Automated replies",
      "AI assistance",
    ],
    highlights: [
      "Lead capture",
      "Confirmations",
      "Replies",
      "Workflow automation",
    ],
  },
  {
    slug: "teams-ai-meeting-assistant",
    title: "Teams AI Meeting Assistant",
    category: "Voice, captions and summaries",
    icon: Bot,
    summary:
      "Meeting join, caption capture, summary and action-item workflows using Microsoft Graph and AI services.",
    businessValue:
      "Turns meetings into structured follow-ups instead of lost context and manual note taking.",
    stack: ["Microsoft Graph", "AI", "Node.js", "Automation"],
    problem:
      "Meeting follow-up often gets lost once calls end and notes live in scattered places.",
    approach:
      "Captured meeting context, captions and summaries through Microsoft Graph and AI services.",
    outcome:
      "Turns calls into structured notes and action items people can actually use.",
    responsibilities: [
      "Meeting automation",
      "Microsoft Graph integration",
      "Summary pipelines",
      "Action-item flow",
    ],
    highlights: ["Join flow", "Captions", "Summaries", "Actions"],
  },
  {
    slug: "expo-mobile-apps",
    title: "Expo Mobile Apps",
    category: "Cross-platform mobile delivery",
    icon: Smartphone,
    summary:
      "Production mobile apps shipped through Expo, EAS, TestFlight and Google Play Console.",
    businessValue:
      "One codebase with practical native delivery for startups and internal business tools.",
    stack: ["Expo", "React Native", "EAS", "TypeScript"],
    problem:
      "Teams needed mobile delivery without maintaining separate iOS and Android codebases.",
    approach:
      "Used Expo and EAS to keep the app delivery practical while still shipping native builds.",
    outcome:
      "Keeps cross-platform releases manageable for real production use.",
    responsibilities: [
      "App architecture",
      "Store delivery",
      "Build pipelines",
      "Cross-platform UI",
    ],
    highlights: ["Expo", "EAS", "TestFlight", "Play Console"],
  },
  {
    slug: "desktop-automation-tools",
    title: "Desktop Automation Tools",
    category: "Electron and background apps",
    icon: Laptop,
    summary:
      "Desktop utilities that run background workflows and connect local machines to web dashboards.",
    businessValue:
      "Useful when the real workflow still depends on a user machine, files, browser sessions or local state.",
    stack: ["Electron", "React", "Node.js", "Dashboards"],
    problem:
      "Some workflows cannot be moved fully to the browser because they rely on the user machine or local state.",
    approach:
      "Used desktop tooling to bridge local sessions with cloud dashboards and background work.",
    outcome:
      "Keeps hybrid workflows usable without forcing every step into a web app.",
    responsibilities: [
      "Electron apps",
      "Background automation",
      "Local-to-cloud sync",
      "Operational tooling",
    ],
    highlights: [
      "Electron",
      "Background tasks",
      "Cloud sync",
      "Local sessions",
    ],
  },
];

export const process: ProcessStep[] = [
  {
    title: "Map the real workflow",
    icon: Map,
    text: "Start with how the business already works, where time is lost, and what customers actually do.",
  },
  {
    title: "Ship a useful first version",
    icon: Rocket,
    text: "Prioritize the smallest complete system that can create value, get feedback and prove the direction.",
  },
  {
    title: "Make it maintainable",
    icon: Code2,
    text: "Keep the code practical, typed, clean and easy to evolve after the first launch.",
  },
];

export const profileHighlights = [
  {
    title: "Full-stack execution",
    text: "Comfortable across frontend, backend, mobile, desktop, automation and deployment.",
    icon: Code2,
  },
  {
    title: "Business workflow focus",
    text: "Builds around real operations: fees, attendance, invoices, leads, dashboards and reporting.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Product communication",
    text: "Strong fit for teams that need clear implementation, UI judgment and practical delivery.",
    icon: UsersRound,
  },
  {
    title: "Reliable daily software",
    text: "Experience on systems where parents, schools, customers and internal teams use the product every day.",
    icon: MousePointerClick,
  },
];

export const experience: Experience[] = [
  {
    role: "Full-stack Developer",
    company: "Devscot",
    period: "Dec 2020 - Present",
    location: "Samundri, Punjab, Pakistan · Hybrid",
    summary:
      "Working on company products and software-as-a-service projects that help businesses grow, simplify operations and improve internal workflows.",
    skills: ["Node.js", "React.js", "Product development", "Automation"],
  },
  {
    role: "Full-stack Developer",
    company: "Schooliee - School Management System",
    period: "Mar 2025 - Present",
    location: "Samundri, Punjab, Pakistan · Hybrid",
    summary:
      "Building a multi-school management product that helps schools sign up, pay monthly and manage daily work with clearer communication between parents and schools.",
    skills: ["Next.js", "React Native", "SaaS", "School workflows"],
  },
  {
    role: "Full Stack Developer",
    company: "LeadProfit",
    period: "Mar 2023 - Feb 2024",
    location: "Samundri, Punjab, Pakistan · On-site",
    summary:
      "Supported internal systems and strengthened practical full-stack skills while working with business-facing software.",
    skills: ["React.js", "KnockoutJS", "Node.js", "Internal tools"],
  },
  {
    role: "Full-stack Developer",
    company: "CrazyBeings Studios (Pvt) Ltd.",
    period: "Dec 2020 - Mar 2023",
    location: "Faisalabad, Punjab, Pakistan · Hybrid",
    summary:
      "Built SaaS and digital identity projects for businesses that needed stronger reach, clearer product presence and revenue-focused systems.",
    skills: ["MERN Stack", "Express.js", "SaaS", "Digital products"],
  },
];

export const education: Education[] = [
  {
    school: "Virtual University of Pakistan",
    degree: "Bachelor's degree, Computer Science",
    period: "Apr 2019 - Jul 2023",
    focus: ["Computer Science", "English", "Mathematics"],
  },
];

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "React Native",
  "Expo",
  "Prisma",
  "MongoDB",
  "Convex",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Electron",
  "Node.js",
  "OpenAI",
  "Gemini",
  "Firebase",
  "Vercel",
  "Mapbox",
  "Microsoft Graph",
] as const;

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mehfooz is very talented and has a great eye for design. He is very professional and always delivers on time.",
    name: "Dayyan Shahid",
    role: "CEO, Dsme Globals",
  },
  {
    quote:
      "I have had the pleasure of working with Mehfooz for over two years, and he has been an indispensable asset to our team.",
    name: "Hammad Habib",
    role: "CEO, Devscot",
  },
  {
    quote:
      "Mehfooz was very helpful from beginning to end. He quickly solved one of my React bugs and explained the misunderstanding clearly.",
    name: "blackswanlrn",
    role: "Fiverr client",
  },
];
