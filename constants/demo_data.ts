import { Project, Skill, Experience, Service, Testimonial } from "@/types";

export const PERSONAL_INFO = {
  name: "Md. Rasel Aktar",
  title: "Full Stack JavaScript Developer",
  tagline: "Building Scalable Web Experiences",
  bio: "3+ years crafting high-performance web applications with Next.js, Node.js, and modern JavaScript. I specialize in end-to-end product development — from elegant frontends to robust backend APIs.",
  email: "raselcse.dev@gmail.com",
  location: "Remote / Worldwide",
  github: "https://github.com/raselcsedev",
  linkedin: "https://bd.linkedin.com/in/md-rasel-1a9957174",
  resumeUrl: "/resume.pdf",
};

export const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", level: 95, icon: "⚡" },
      { name: "React.js", level: 92, icon: "⚛️" },
      { name: "Angular", level: 78, icon: "🔴" },
      { name: "TypeScript", level: 90, icon: "🔷" },
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Redux Toolkit", level: 85, icon: "🔄" },
      { name: "React Query", level: 88, icon: "🔗" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Express.js", level: 87, icon: "🚀" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "REST APIs", level: 92, icon: "🔌" },
      { name: "Authentication", level: 88, icon: "🔒" },
      { name: "Payment Gateway", level: 82, icon: "💳" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 90, icon: "📦" },
      { name: "GitHub", level: 90, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Postman", level: 88, icon: "📬" },
      { name: "Figma", level: 75, icon: "🎭" },
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
    company: "TechFlow Solutions",
    role: "Frontend Developer",
    duration: "Nov 2023 – Present",
    description: [
      "Lead frontend architecture for 3 SaaS products. Built reusable component systems, optimized Core Web Vitals by 40%, and mentored 2 junior developers.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"],
    type: "full-time",
  },
  {
    id: "2",
    company: "DigitalCraft Agency",
    role: "Full Stack JavaScript Developer",
    duration: "Jul 2021 – Dec 2022",
    description: [
      "Delivered 12+ client projects including e-commerce platforms, admin dashboards, and REST APIs. Integrated Stripe, PayPal, and SSLCommerz payment gateways.",
    ],
    tech: ["React.js", "Express.js", "MongoDB", "Stripe", "Redux"],
    type: "full-time",
  },
  {
    id: "3",
    company: "FreelanceStack",
    role: "Freelance Web Developer",
    duration: "Jan 2021 – Jul 2021",
    description: [
      "Built custom web applications for 8 clients across retail, education, and healthcare. Specialized in Angular frontends with RESTful Node.js backends.",
    ],
    tech: ["Angular", "Node.js", "MongoDB", "REST APIs"],
    type: "freelance",
  },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Full Stack Development",
    description:
      "End-to-end web application development from database design to polished UI. Scalable architecture, clean code, and production deployment.",
    icon: "layers",
  },
  {
    id: "2",
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive interfaces using Next.js and React. Optimized for performance, accessibility, and exceptional user experience.",
    icon: "monitor",
  },
  {
    id: "3",
    title: "Backend API Development",
    description:
      "Robust RESTful APIs with Express.js and MongoDB. Authentication, rate limiting, caching, and comprehensive error handling.",
    icon: "server",
  },
  {
    id: "4",
    title: "Dashboard Development",
    description:
      "Data-rich admin dashboards with real-time charts, role-based access control, and complex data tables for business intelligence.",
    icon: "layout-dashboard",
  },
  {
    id: "5",
    title: "E-Commerce Development",
    description:
      "Complete e-commerce systems with inventory management, payment gateway integration, order tracking, and multi-vendor support.",
    icon: "shopping-cart",
  },
  {
    id: "6",
    title: "Website Optimization",
    description:
      "Performance audits and optimization for Core Web Vitals, SEO improvements, image optimization, and load time reduction.",
    icon: "zap",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "CTO, RetailEdge",
    content:
      "Alex delivered our e-commerce platform 2 weeks early with zero critical bugs. The code quality was exceptional — clean, well-documented, and easy for our team to maintain.",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
  },
  {
    id: "2",
    name: "James Okonkwo",
    role: "Founder, FoodDash",
    content:
      "Our delivery app needed to handle real-time updates for 500+ concurrent orders. Alex's WebSocket architecture handled it flawlessly. Absolutely brilliant developer.",
    avatar: "/avatars/james.jpg",
    rating: 5,
  },
  {
    id: "3",
    name: "Priya Sharma",
    role: "Product Manager, SaaSify",
    content:
      "Working with Alex on our multi-vendor dashboard was a pleasure. He asked the right questions upfront, maintained clear communication, and delivered beyond expectations.",
    avatar: "/avatars/priya.jpg",
    rating: 5,
  },
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];
