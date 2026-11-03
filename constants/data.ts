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
    id: "12",
    slug: "careercraft-cv-portfolio-platform",
    title: "CareerCraft — CV Builder & Portfolio Platform",
    description:
      "A full-stack SaaS platform that helps professionals and students build professional CVs, import existing resumes from PDF or DOCX files, export print-ready PDFs, and publish personal portfolio websites with unique public URLs. Includes secure authentication, reusable profile management, customizable templates, and an admin dashboard.",
    overview:
      "CareerCraft is a full-stack CV builder and portfolio platform built with Next.js and NestJS. Users can create and customize CVs, import existing resumes, export print-ready A4 PDFs, and publish personal portfolio websites using unique URLs. The platform includes JWT-based authentication with HTTP-only cookies, profile management, project management, template customization, and role-based admin functionality. Prisma ORM and TiDB Cloud provide database access and persistent storage.",
    role: "Full-Stack Developer",
    projectType: "personal",
    features: [
      "CV builder with 6 customizable professional templates",
      "Import existing CVs from PDF and DOCX files with automatic parsing",
      "Export CVs as print-ready A4 PDFs",
      "Live CV preview with customizable colors, fonts, spacing, and section ordering",
      "Personal portfolio builder with 6 portfolio templates",
      "Publish and unpublish portfolios with unique public URLs",
      "Portfolio project management with technology tags, featured projects, and live links",
      "Secure authentication using JWT, HTTP-only cookies, and bcrypt password hashing",
      "Reusable profile management with automatic CV and portfolio data population",
      "Dashboard with CV, portfolio, and profile management",
      "Role-based access control with an admin dashboard for system statistics and template management",
      "REST API documentation with Swagger and automated unit testing",
      "Responsive UI with dark and light themes",
    ],
    image: "/projects/careercraft.jpg",
    tech: [
      "Next.js 14",
      "TypeScript",
      "NestJS",
      "Prisma ORM",
      "TiDB Cloud",
      "MySQL",
      "JWT",
      "Passport.js",
      "Tailwind CSS",
      "Jest",
      "Swagger",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/raselcsedev/career-craft",
    live: "https://career-craft-amber.vercel.app/",
    category: "fullstack",
    featured: true,
  },
  {
    id: "11",
    slug: "dotnet-backend-project",
    title: "Product Manager (.NET Backend Project)",
    description:
      "A backend application built with C# and .NET, expanding my stack beyond the JavaScript ecosystem. It focuses on clean, strongly typed code, a well-structured project layout, and building reliable APIs that can pair with my Next.js and React frontends.",
    overview:
      "A backend project built with C# and ASP.NET Core Web API. It extends my skills beyond the JavaScript ecosystem and shows how I design clean, strongly typed REST APIs that can be consumed by my Next.js and React frontends.",
    role: "Backend Developer",
    projectType: "personal",
    features: [
      "REST API built with C# and ASP.NET Core Web API",
      "Clean, strongly typed code with a well-structured project layout",
      "Designed to pair with Next.js and React frontends",
    ],
    image: "/projects/dotnet-project.jpg",
    tech: ["C#", ".NET", "ASP.NET Core Web API", "REST APIs"],
    github: "https://github.com/raselcsedev/product-manager",
    category: "backend",
    featured: false,
  },
  {
    id: "1",
    slug: "ai-content-studio",
    overview:
      "AI Content Studio is a SaaS-style web app that helps users generate blog posts, emails, code snippets, and image prompts with the OpenAI API. It combines secure authentication and role-based access control with a dashboard where users can review usage analytics and revisit everything they have generated before.",
    role: "Full-Stack Developer",
    projectType: "personal",
    features: [
      "AI generation of blog posts, emails, code snippets, and image prompts via the OpenAI API",
      "Authentication, user management, and profile settings",
      "Role-based access control",
      "Dashboard with usage analytics",
      "Searchable content history with pagination and filtering",
      "Dark and light themes with a fully responsive layout",
    ],
    title: "AI Content Studio — AI SaaS Platform",
    description:
      "An AI content generation platform for blog posts, emails, code snippets, and image prompts, powered by the OpenAI API. Includes authentication, user management, profile settings, and role-based access control. The responsive dashboard offers usage analytics, searchable content history with pagination and filtering, and dark/light themes.",
    image: "/projects/ai-content-studio.jpg",
    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "OpenAI API",
      "NextAuth",
      "Tailwind CSS",
    ],
    github: "https://github.com/raselcsedev/ai-content-studio",
    category: "fullstack",
    featured: true,
  },
  {
    id: "2",
    slug: "retailpos",
    overview:
      "RetailPOS is a full-stack point-of-sale and inventory management application for retail shops. It covers the daily workflow from product setup and stock tracking to checkout, receipts, and reporting, and it can be installed as a Progressive Web App.",
    role: "Full-Stack Developer",
    projectType: "personal",
    features: [
      "Product management with barcode generation and barcode scanning",
      "Inventory tracking and sales processing with checkout workflows",
      "Authentication with role-based access control",
      "Customer, supplier, purchase, and employee management modules",
      "Dashboard analytics and sales reporting",
      "Thermal receipt printing",
      "Progressive Web App (PWA) support",
    ],
    title: "RetailPOS — Point of Sale & Inventory System",
    description:
      "A full-stack point-of-sale and inventory management application with product management, barcode generation, inventory tracking, and sales processing. Features authentication, role-based access control, and customer, supplier, purchase, and employee modules, plus dashboard analytics, checkout workflows, reporting, thermal receipt printing, barcode scanning, and Progressive Web App (PWA) support.",
    image: "/projects/retail-pos.jpg",
    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "NextAuth",
      "Tailwind CSS",
    ],
    github: "https://github.com/raselcsedev/retail-pos",
    live: "https://jovial-sable-2db9bd.netlify.app/",
    category: "fullstack",
    featured: true,
  },
  {
    id: "8",
    slug: "bizpost-ai",
    overview:
      "Bizpost AI is an AI-powered social media content generation platform built at Digital Intelligence System Ltd. It helps users create content for Facebook, TikTok, and LinkedIn from one place. I worked on the Next.js and TypeScript frontend.",
    role: "Frontend Developer",
    projectType: "company",
    features: [
      "AI-powered content generation for social media",
      "Dedicated content creation for Facebook, TikTok, and LinkedIn",
      "Built with Next.js and TypeScript",
      "Responsive, reusable UI components",
    ],
    title: "Bizpost AI — AI Social Media Content Platform",
    description:
      "An AI-powered social media content generation platform for creating Facebook, TikTok, and LinkedIn content. Built with Next.js and TypeScript at Digital Intelligence System Ltd. as part of my frontend work.",
    image: "/projects/bizpost-ai.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
    // Company project: no public repo or demo link.
    category: "frontend",
    featured: true,
  },
  {
    id: "9",
    slug: "base-erp-hatil-erp",
    overview:
      "Base ERP and Hatil ERP are enterprise resource planning applications built at Digital Intelligence System Ltd. I build and maintain their Angular frontends and delivered workflows across the Sales, Purchase, and Inventory modules, as well as migrating older pages to a modern Angular codebase.",
    role: "Frontend Developer",
    projectType: "company",
    features: [
      "Sales workflows: Sales Bills, Repair Service, and Dealer Money Receipts",
      "Purchase and inventory workflows: Warehouse Bills, Raw Material Purchases, and Finished Goods Receipts",
      "Migration of legacy React, AngularJS, and ASP.NET WebForms pages to Angular 17+ standalone components",
      "Migrated modules across sales, inventory, procurement, HR, and admin",
      "Reusable, responsive UI components, including a configurable data-table component",
      "Integration with backend REST APIs for data-heavy workflows",
    ],
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
    id: "10",
    slug: "quick-ecommerce-retail-master",
    overview:
      "Quick eCommerce is a multi-vendor platform and Retail Master is a single-vendor platform, both built at Digital Intelligence System Ltd. I develop their storefronts with Next.js, including a library of industry-specific themes, local payment gateways, and multilingual, multi-currency support.",
    role: "Frontend Developer",
    projectType: "company",
    features: [
      "Multi-vendor (Quick eCommerce) and single-vendor (Retail Master) storefronts",
      "10+ industry-specific themes: grocery, medicine, furniture, footwear, watches, and lifestyle",
      "Dynamic theming",
      "bKash and SSLCommerz payment gateway integration",
      "Guest checkout and cash-on-delivery",
      "Multilingual support with next-intl and multi-currency support",
    ],
    title: "Quick eCommerce & Retail Master",
    description:
      "Multi-vendor (Quick eCommerce) and single-vendor (Retail Master) eCommerce platforms with 10+ industry-specific storefront themes (grocery, medicine, furniture, footwear, watches, lifestyle) and dynamic theming. Includes bKash and SSLCommerz payment gateways, guest checkout, cash-on-delivery, multilingual support with next-intl, and multi-currency.",
    image: "/projects/ecommerce-platforms.jpg",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "next-intl",
    ],
    // Company project: no public repo or demo link.
    category: "frontend",
    featured: true,
  },
  {
    id: "3",
    slug: "mohona-tours-and-travels",
    overview:
      "Mohona Tours and Travels is a responsive website for a travel agency. Visitors can browse featured travel packages and destinations and read a travel blog with tips and recommendations.",
    role: "Frontend Developer",
    projectType: "personal",
    features: [
      "Featured travel packages",
      "Travel destinations showcase",
      "Travel blog with tips and recommendations",
      "Responsive design built with Tailwind CSS",
      "State management with Redux",
    ],
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
    id: "4",
    slug: "easy-life-shopping",
    overview:
      "Easy Life Shopping is a responsive eCommerce application focused on making it easy to find products. It features dynamic category-based filtering and reusable UI components.",
    role: "Frontend Developer",
    projectType: "personal",
    features: [
      "Dynamic category-based product filtering",
      "Advanced product navigation",
      "Reusable UI components",
      "State management with Redux Toolkit",
      "Responsive layout for all screen sizes",
    ],
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
    id: "5",
    slug: "music-master",
    overview:
      "Music Master is a responsive frontend template for a music application, built with Next.js and TypeScript and styled with Aceternity UI for a polished, user-friendly listening experience.",
    role: "Frontend Developer",
    projectType: "personal",
    features: [
      "Responsive music application interface",
      "Polished animated UI with Aceternity UI components",
      "Type-safe code with TypeScript",
      "Built with the Next.js framework",
    ],
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
    id: "6",
    slug: "innovative-gadgets",
    overview:
      "Innovative Gadgets is an eCommerce website template focused on a responsive design, type safety, and reusable UI components, using React, Redux Toolkit, and TypeScript.",
    role: "Frontend Developer",
    projectType: "personal",
    features: [
      "Responsive eCommerce template",
      "Type-safe code with TypeScript",
      "Reusable UI components",
      "State management with Redux Toolkit",
      "Styled with Tailwind CSS",
    ],
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
    id: "7",
    slug: "ride-vibe",
    overview:
      "RideVibe is a modern car rental platform. Customers can discover vehicles, reserve them online, pay securely, and manage their bookings, while administrators get a management system to run the rental business.",
    role: "Full-Stack Developer",
    projectType: "personal",
    features: [
      "Vehicle discovery and online reservations",
      "Secure online payments with Stripe",
      "Booking management for customers",
      "Administrator management system",
      "Email notifications via SMTP",
      "Free map location support",
      "Built with Next.js, MongoDB, and ShadCN UI",
    ],
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
