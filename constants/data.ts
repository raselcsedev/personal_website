import {
  Project,
  Skill,
  Experience,
  Education,
  Service,
  Testimonial,
} from "@/types";

export const PERSONAL_INFO = {
  name: "Md. Rasel Aktar",
  title: "Frontend Developer",
  tagline: "Building scalable, responsive, performance-first UIs",
  bio: "Frontend Developer with 4 years of professional experience building production web applications with React.js, Next.js, Angular, TypeScript, and JavaScript (ES6+). I have delivered enterprise ERP systems, multi-vendor eCommerce platforms, and AI-powered products used by real businesses. Strong in REST and GraphQL API integration, reusable component architecture, state management, payment gateway integration, and responsive, multilingual UI.",
  email: "raselcse.dev@gmail.com",
  phone: "+8801768297822",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/raselcsedev",
  linkedin: "https://bd.linkedin.com/in/md-rasel-1a9957174",
  resumeUrl: "/resume.pdf",
};

// NOTE: the CV does not give proficiency percentages. The levels below are
// estimates used for the progress bars - adjust them to your own judgement.
export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript (ES6+)", level: 94, icon: "🟨" },
      { name: "TypeScript", level: 92, icon: "🔷" },
      { name: "HTML5", level: 95, icon: "📄" },
      { name: "CSS3", level: 92, icon: "🎨" },
      { name: "Sass", level: 85, icon: "🎛️" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React.js", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 95, icon: "⚡" },
      { name: "Angular (Standalone)", level: 88, icon: "🅰️" },
      { name: "RxJS", level: 82, icon: "🔄" },
      { name: "Redux Toolkit", level: 88, icon: "🗃️" },
      { name: "TanStack Query", level: 90, icon: "🔗" },
      { name: "React Hook Form", level: 90, icon: "📝" },
      { name: "next-intl", level: 85, icon: "🌐" },
    ],
  },
  {
    category: "Styling & UI",
    items: [
      { name: "Tailwind CSS", level: 94, icon: "💨" },
      { name: "Bootstrap", level: 82, icon: "🅱️" },
      { name: "shadcn/ui", level: 90, icon: "🧩" },
      { name: "Aceternity UI", level: 80, icon: "✨" },
      { name: "Responsive Design", level: 95, icon: "📱" },
    ],
  },
  {
    category: "APIs & Integrations",
    items: [
      { name: "REST APIs", level: 92, icon: "🔌" },
      { name: "GraphQL", level: 85, icon: "◼️" },
      { name: "Apollo Client", level: 85, icon: "🚀" },
      { name: "OpenAI API", level: 82, icon: "🤖" },
      { name: "bKash", level: 82, icon: "💳" },
      { name: "SSLCommerz", level: 82, icon: "🔐" },
    ],
  },
  {
    category: "Backend Familiarity",
    items: [
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "🛤️" },
      { name: "MongoDB / Mongoose", level: 80, icon: "🍃" },
      { name: "ASP.NET Core Web API (C#)", level: 65, icon: "🟣" },
      { name: "MySQL", level: 70, icon: "🗄️" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git & GitHub", level: 90, icon: "🐙" },
      { name: "Jira", level: 85, icon: "📋" },
      { name: "Postman", level: 88, icon: "📬" },
      { name: "Chrome DevTools", level: 90, icon: "🛠️" },
      { name: "VS Code & npm", level: 95, icon: "💻" },
      { name: "Firebase", level: 78, icon: "🔥" },
      { name: "Vercel / Netlify", level: 85, icon: "☁️" },
    ],
  },
  {
    category: "Spoken Languages",
    items: [
      { name: "Bangla (Native)", level: 100, icon: "🇧🇩" },
      { name: "English (Full working proficiency)", level: 80, icon: "🇬🇧" },
    ],
  },
];

export const PROJECTS: Project[] = [
    {
    id: "1",
    // TODO: replace the title, description, tech list and github link with your real project details
    title: ".NET Backend Project",
    description:
      "A backend application built with C# and .NET, expanding my stack beyond the JavaScript ecosystem. It focuses on clean, strongly typed code, a well-structured project layout, and building reliable APIs that can pair with my Next.js and React frontends.",
    image: "/projects/dotnet-project.jpg",
    tech: ["C#", ".NET", "REST APIs"],
    category: "backend",
    featured: false,
  },
  {
    id: "2",
    title: "AI Content Studio — AI SaaS Platform",
    description:
      "An AI content generation platform for blog posts, emails, code snippets, and image prompts, powered by the OpenAI API. Includes authentication, user management, profile settings, and role-based access control. The responsive dashboard offers usage analytics, searchable content history with pagination and filtering, and dark/light themes.",
    image: "/projects/ai-content-studio.jpg",
    tech: ["Next.js", "TypeScript", "MongoDB", "OpenAI API", "NextAuth", "Tailwind CSS"],
    github: "https://github.com/raselcsedev/ai-content-studio",
    category: "fullstack",
    featured: true,
  },
  {
    id: "3",
    title: "RetailPOS — Point of Sale & Inventory System",
    description:
      "A full-stack point-of-sale and inventory management application with product management, barcode generation, inventory tracking, and sales processing. Features authentication, role-based access control, and customer, supplier, purchase, and employee modules, plus dashboard analytics, checkout workflows, reporting, thermal receipt printing, barcode scanning, and Progressive Web App (PWA) support.",
    image: "/projects/retail-pos.jpg",
    tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "NextAuth", "Tailwind CSS"],
    github: "https://github.com/raselcsedev/retail-pos",
    live: "https://jovial-sable-2db9bd.netlify.app/",
    category: "fullstack",
    featured: true,
  },
  {
    id: "4",
    title: "Bizpost AI — AI Social Media Content Platform",
    description:
      "An AI-powered social media content generation platform for creating Facebook, TikTok, and LinkedIn content. Built with Next.js and TypeScript at Digital Intelligence System Ltd. as part of my frontend work.",
    image: "/projects/bizpost-ai.jpg",
        tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
    // Company project: no public repo or demo link.
    category: "frontend",
    featured: true,
  },
  {
    id: "5",
    title: "Base ERP & Hatil ERP — Enterprise ERP Systems",
    description:
      "Enterprise ERP applications covering Sales, Purchase, and Inventory workflows such as Sales Bills, Warehouse Bills, Repair Service, Dealer Money Receipts, Raw Material Purchases, and Finished Goods Receipts. I also migrated legacy React, AngularJS, and ASP.NET WebForms pages to Angular 17+ standalone components, and built a reusable, configurable data-table component for data-heavy screens.",
    image: "/projects/erp.jpg",
    tech: ["Angular", "TypeScript", "RxJS", "Tailwind CSS", "TanStack Query"],
    // Company project: no public repo or demo link.
    category: "dashboard",
    featured: true,
  },
  {
    id: "6",
    title: "Quick eCommerce & Retail Master",
    description:
      "Multi-vendor (Quick eCommerce) and single-vendor (Retail Master) eCommerce platforms with 10+ industry-specific storefront themes (grocery, medicine, furniture, footwear, watches, lifestyle) and dynamic theming. Includes bKash and SSLCommerz payment gateways, guest checkout, cash-on-delivery, multilingual support with next-intl, and multi-currency.",
    image: "/projects/ecommerce-platforms.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "next-intl"],
    // Company project: no public repo or demo link.
    category: "frontend",
    featured: true,
  },
  {
    id: "8",
    title: "Mohona Tours and Travels",
    description:
      "A responsive travel agency website built with React and Tailwind CSS. Includes featured packages, travel destinations, and a travel blog for tips and recommendations.",
    image: "/projects/travel.jpg",
    tech: ["React.js", "Tailwind CSS", "Redux"],
    github: "https://github.com/raselcsedev/Mohona-ToursTravels",
    live: "https://mohona-tours-travels.vercel.app/",
    category: "frontend",
    featured: true,
  },
  {
    id: "9",
    title: "Easy Life Shopping",
    description:
      "A responsive eCommerce application with dynamic category-based product filtering and reusable UI components for a smooth shopping experience.",
    image: "/projects/ecommerce-site.jpg",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/raselcsedev/EasyLife-Shopping",
    live: "https://easy-life-shopping.vercel.app/",
    category: "frontend",
    featured: true,
  },
  {
    id: "10",
    title: "Music Master",
    description:
      "A responsive music application frontend template developed with Next.js, TypeScript, and Aceternity UI for a polished, user-friendly listening experience.",
    image: "/projects/music.jpg",
    tech: ["Next.js", "TypeScript", "Aceternity UI"],
    github: "https://github.com/raselcsedev/music-master",
    live: "https://musicmasterrsl.netlify.app/",
    category: "frontend",
    featured: false,
  },
  {
    id: "11",
    title: "Innovative Gadgets",
    description:
      "An e-commerce website template built with React and Redux Toolkit, focusing on responsive design, type safety, and reusable UI components.",
    image: "/projects/gadgets.jpg",
    tech: ["React.js", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/raselcsedev/innovative-gadgets",
    live: "https://innovative-gadgets.vercel.app/",
    category: "frontend",
    featured: false,
  },
  {
  id: "12",
  title: "Ride Vibe",
  description:
    "RideVibe is a modern car rental platform designed to provide a seamless vehicle booking experience for customers and a powerful management system for administrators. From vehicle discovery and online reservations to secure payments and booking management, RideVibe delivers a fast, scalable, and user-friendly rental experience.",
  image: "/projects/car-rental.jpg",
  tech: [
    "Next.js",
    "MongoDB",
    "Mongoose",
    "Stripe",
    "SMTP",
    "ShadCN UI",
    "Tailwind CSS",
    "Free Map Location",
  ],
  github: "https://github.com/raselcsedev/ride-vibe",
  live: "https://ride-vibe.vercel.app/",
  category: "fullstack",
  featured: true,
},

];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "Digital Intelligence System Ltd.",
    role: "Frontend Developer",
    duration: "Nov 2023 – Present",
    location: "Dhaka, Bangladesh",
    description: [
      "Build and maintain enterprise ERP applications (Base ERP, Hatil ERP) using Angular, TypeScript, RxJS, Tailwind CSS, and TanStack Query.",
      "Delivered frontend workflows across Sales, Purchase, and Inventory modules, including Sales Bills, Warehouse Bills, Repair Service, Dealer Money Receipts, Raw Material Purchases, and Finished Goods Receipts.",
      "Migrated legacy React, AngularJS, and ASP.NET WebForms pages to Angular 17+ standalone components across sales, inventory, procurement, HR, and admin modules.",
      "Integrated backend REST APIs and developed reusable, responsive UI components, including a configurable data-table component, for data-heavy enterprise workflows.",
      "Develop multi-vendor and single-vendor eCommerce platforms (Quick eCommerce, Retail Master) using Next.js, TypeScript, Tailwind CSS, and TanStack Query.",
      "Built and maintain 10+ industry-specific storefront themes (grocery, medicine, furniture, footwear, watches, lifestyle) with dynamic theming.",
      "Integrated bKash and SSLCommerz payment gateways and implemented guest checkout, cash-on-delivery, multilingual (next-intl), and multi-currency functionality.",
      "Developed Bizpost AI, an AI-powered social media content generation platform (Next.js, TypeScript) for creating Facebook, TikTok, and LinkedIn content.",
    ],
    tech: [
      "Angular",
      "Next.js",
      "TypeScript",
      "RxJS",
      "Tailwind CSS",
      "TanStack Query",
      "REST APIs",
      "next-intl",
      "bKash",
      "SSLCommerz",
    ],
    type: "full-time",
  },
  {
    id: "2",
    company: "Gain Solutions Ltd.",
    role: "JavaScript Developer",
    duration: "Sep 2022 – Oct 2023",
    location: "Dhaka, Bangladesh",
    description: [
      "Developed frontend features for Unite Living, a house rental management system, using React.js, GraphQL, and Apollo Client.",
      "Implemented CRUD functionality and integrated GraphQL APIs for application data management.",
      "Built reusable, maintainable UI components that improved interface consistency across the application.",
      "Collaborated with cross-functional team members in an Agile environment to deliver production-ready features.",
    ],
    tech: ["React.js", "GraphQL", "Apollo Client", "JavaScript"],
    type: "full-time",
  },
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "University of South Asia",
    duration: "May 2017 – Apr 2021",
    location: "Dhaka, Bangladesh",
  },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive interfaces with Next.js, React.js, and Angular. Reusable component architecture, clean state management, and cross-browser compatibility.",
    icon: "monitor",
  },
  {
    id: "2",
    title: "ERP & Dashboard Development",
    description:
      "Data-heavy enterprise interfaces with configurable data tables, role-based screens, and workflows for sales, purchase, inventory, HR, and admin modules.",
    icon: "layout-dashboard",
  },
  {
    id: "3",
    title: "E-Commerce Development",
    description:
      "Single-vendor and multi-vendor storefronts with dynamic themes, guest checkout, multilingual and multi-currency support, and bKash / SSLCommerz payments.",
    icon: "shopping-cart",
  },
  {
    id: "4",
    title: "AI-Powered Web Apps",
    description:
      "Frontends for AI products such as content generation tools, built with the OpenAI API, authentication, usage analytics, and content history.",
    icon: "zap",
  },
  {
    id: "5",
    title: "API Integration",
    description:
      "Reliable integration of REST and GraphQL APIs with TanStack Query and Apollo Client, plus light backend work with Node.js, Express.js, MongoDB, and ASP.NET Core Web API.",
    icon: "server",
  },
  {
    id: "6",
    title: "Legacy Migration & Modernization",
    description:
      "Moving legacy React, AngularJS, and ASP.NET WebForms pages to modern Angular 17+ standalone components without disrupting existing workflows.",
    icon: "layers",
  },
];

// Testimonials are intentionally not shown on the site (see app/page.tsx).
// Add real ones here and re-enable the section when you have them.
export const TESTIMONIALS: Testimonial[] = [];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];
