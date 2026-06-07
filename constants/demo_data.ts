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
    id: "1",
    title: "ShopNest — E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with product management, cart, Stripe payments, order tracking, and admin dashboard. Handles 10k+ SKUs with sub-100ms response.",
    image: "/projects/ecommerce.jpg",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux Toolkit"],
    github: "https://github.com/alexrahman/shopnest",
    live: "https://shopnest.vercel.app",
    category: "fullstack",
    featured: true,
  },
  {
    id: "2",
    title: "SwiftPOS — Point of Sale System",
    description:
      "Real-time POS system for retail stores featuring inventory sync, receipt printing, sales analytics, multi-cashier support, and offline-first PWA capability.",
    image: "/projects/pos.jpg",
    tech: ["React.js", "Express.js", "MongoDB", "Socket.io", "PWA"],
    github: "https://github.com/raselcsedev/pos_system",
    live: "https://swiftpos.vercel.app",
    category: "fullstack",
    featured: true,
  },
  {
    id: "3",
    title: "VendorHub — Multi-Vendor Dashboard",
    description:
      "SaaS multi-vendor marketplace with role-based access, vendor onboarding, commission management, real-time analytics, and automated payouts via Stripe Connect.",
    image: "/projects/dashboard.jpg",
    tech: ["Next.js", "TypeScript", "Prisma", "Stripe Connect", "Shadcn UI"],
    github: "https://github.com/alexrahman/vendorhub",
    live: "https://vendorhub.vercel.app",
    category: "dashboard",
    featured: true,
  },
  {
    id: "4",
    title: "QuickByte — Food Delivery App",
    description:
      "End-to-end food delivery platform with restaurant discovery, real-time order tracking via WebSockets, driver assignment, and integrated payment processing.",
    image: "/projects/food.jpg",
    tech: ["React Native", "Node.js", "MongoDB", "Google Maps API", "Twilio"],
    github: "https://github.com/alexrahman/quickbyte",
    live: "https://quickbyte.vercel.app",
    category: "mobile",
    featured: false,
  },
  {
    id: "5",
    title: "AdminPro — Dashboard UI Kit",
    description:
      "Reusable admin dashboard component library with 50+ components, charts, data tables, authentication templates, and dark mode. Used by 3 production projects.",
    image: "/projects/admin.jpg",
    tech: ["Next.js", "Tailwind CSS", "Recharts", "ShadCN", "TypeScript"],
    github: "https://github.com/alexrahman/adminpro",
    live: "https://adminpro.vercel.app",
    category: "frontend",
    featured: false,
  },
  {
    id: "6",
    title: "StockSense — Inventory System",
    description:
      "Warehouse inventory management with barcode scanning, low-stock alerts, supplier management, purchase orders, and detailed reporting with CSV/PDF exports.",
    image: "/projects/inventory.jpg",
    tech: ["Angular", "Node.js", "MongoDB", "jsPDF", "Chart.js"],
    github: "https://github.com/alexrahman/stocksense",
    live: "https://stocksense.vercel.app",
    category: "fullstack",
    featured: false,
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
