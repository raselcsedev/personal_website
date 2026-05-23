// ─── Core Data Types ─────────────────────────────────────────────────────────

export interface SkillItem {
  name: string;
  level: number; // 0–100
  icon: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  category: "fullstack" | "frontend" | "backend" | "mobile" | "dashboard";
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  tech: string[];
  type: "full-time" | "freelance" | "contract";
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

// ─── Component Prop Types ─────────────────────────────────────────────────────

export interface SectionProps {
  className?: string;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface SkillCardProps {
  skill: Skill;
  index: number;
}

export interface ExperienceItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export interface ServiceCardProps {
  service: Service;
  index: number;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

// ─── Form Types ───────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
