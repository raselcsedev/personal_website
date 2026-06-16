import { Project, Skill, Experience, Service, Testimonial } from "@/types";

export const PERSONAL_INFO = {
  name: "Md. Rasel Aktar",
  title: "Frontend Developer",
  tagline: "Building scalable, responsive, performance-first UIs",
  bio: "Dynamic and detail-oriented Frontend Developer with 3+ years of experience building scalable, responsive, and high-performance web applications using Next.js, React.js, TypeScript, Tailwind CSS, and ShadCN UI. Passionate about clean code, reusable components, performance optimization, and pixel-perfect UI implementation.",
  email: "raselcse.dev@gmail.com",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/raselcsedev",
  linkedin: "https://bd.linkedin.com/in/md-rasel-1a9957174",
  resumeUrl: "/resume.pdf",
};

export const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", level: 95, icon: "⚡" },
      { name: "React.js", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 92, icon: "🔷" },
      { name: "JavaScript (ES6)", level: 94, icon: "🟨" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "ShadCN UI", level: 88, icon: "🧩" },
      { name: "React Hook Form", level: 90, icon: "📝" },
      { name: "TanStack Query", level: 90, icon: "🔗" },
    ],
  },
  {
    category: "UI & Styling",
    items: [
      { name: "HTML5", level: 95, icon: "📄" },
      { name: "CSS3", level: 92, icon: "🎨" },
      { name: "Tailwind CSS", level: 94, icon: "💨" },
      { name: "Shadcn/UI", level: 90, icon: "🧩" },
      { name: "SASS", level: 85, icon: "🎛️" },
      { name: "Bootstrap", level: 82, icon: "🅱️" },
      { name: "Aceternity UI", level: 80, icon: "✨" },
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
      { name: "Vercel", level: 85, icon: "☁️" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
  id: "1",
  title: "AI Content Studio — AI SaaS Platform",
  description:
    "A modern AI-powered SaaS platform for generating blog posts, emails, code snippets, and image prompts. Features secure authentication, content history, analytics dashboard, OpenAI integration, and a responsive user experience with dark/light themes.",
  image: "/projects/ai-content-studio.jpg",
  tech: [
    "Next.js 15",
    "TypeScript",
    "MongoDB",
    "OpenAI API",
    "Tailwind CSS",
    "Shadcn UI"
  ],
  github: "https://github.com/raselcsedev/ai-content-studio",
  live: "#",
  category: "fullstack",
  featured: true,
},
  {
    id: "2",
    title: "RetailPOS — Full-Stack Point of Sale System",
    description:
      "A modern full-stack POS and inventory management system built with Next.js 16, TypeScript, MongoDB, Tailwind CSS, NextAuth, Zustand, and TanStack Table. Includes role-based authentication, sales dashboard, barcode scanning, thermal receipt printing, inventory tracking, reporting, and offline-ready PWA support.",
    image: "/projects/retail-pos.jpg",
    tech: [
      "Next.js 16",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "NextAuth",
      "Zustand",
      "React Hook Form",
      "Zod",
      "TanStack Table",
      "Recharts",
    ],
    github: "https://github.com/raselcsedev/retail-pos",
    live: "https://jovial-sable-2db9bd.netlify.app/",
    category: "fullstack",
    featured: true,
  },
  {
    id: "3",
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
    title: "Easy Life Shopping",
    description:
      "An e-commerce shopping website with dynamic category-based filtering, responsive UI components, and advanced product navigation for a seamless customer experience.",
    image: "/projects/ecommerce-site.jpg",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/raselcsedev/EasyLife-Shopping",
    live: "https://easy-life-shopping.vercel.app/",
    category: "frontend",
    featured: true,
  },
  {
    id: "5",
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
    description: [
      "Developing Retails Master — a fully customizable single-vendor e-commerce platform with multi-language, multi-theme support, AI-powered product description generation, product management, order tracking, and integrated payment gateways including Stripe, bKash, Nagad, and SSLCommerz.",
      "Building Bizpost AI — an AI-powered social media content generation platform supporting multi-language and multi-theme, with AI-driven video generation, image generation, and content generation, featuring optimized templates for Facebook, TikTok, and LinkedIn to help users create and schedule posts efficiently.",
      "Maintaining Quick eCommerce — a large-scale multivendor platform with multi-language, multi-theme support, AI-powered product description generation, dedicated admin and seller dashboards, real-time live chat via Pusher, push notifications with Firebase, and multi-payment gateway support including Stripe, bKash, Nagad, and SSLCommerz.",
      "Built responsive ERP dashboards with React.js, Angular, Bootstrap, Tailwind CSS, and SCSS featuring complex data tables, dynamic charts, and role-based access control — optimized with TanStack Query, code splitting, lazy loading, memoization, React Hook Form, and Zod.",
    ],
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "React Hook Form",
      "Zod",
      "TanStack Query",
      "Angular",
      "Stripe",
      "bKash",
      "Nagad",
      "SSLCommerz",
      "Pusher",
      "Firebase",
    ],
    type: "full-time",
  },
  {
    id: "2",
    company: "Gain Solutions Ltd.",
    role: "JavaScript Developer",
    duration: "Sep 2022 – Oct 2023",
    description: [
      "Developed key features for the House Rental Management System (Unite Living) using React.js, GraphQL, and Apollo Client.",
      "Implemented efficient CRUD operations with GraphQL APIs.",
      "Delivered scalable UI components in an Agile environment.",
    ],
    tech: [
      "React.js",
      "GraphQL",
      "Apollo Client",
      "REST APIs",
      "CSS3",
      "SASS",
      "Bootstrap",
    ],
    type: "full-time",
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
      "Rasel delivered our e-commerce platform 2 weeks early with zero critical bugs. The code quality was exceptional — clean, well-documented, and easy for our team to maintain.",
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
