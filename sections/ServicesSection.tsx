"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Monitor,
  Server,
  LayoutDashboard,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { SERVICES } from "@/constants/demo_data";
import { SectionHeader } from "@/components/shared/SectionHeader";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  layers: <Layers className="w-5 h-5" />,
  monitor: <Monitor className="w-5 h-5" />,
  server: <Server className="w-5 h-5" />,
  "layout-dashboard": <LayoutDashboard className="w-5 h-5" />,
  "shopping-cart": <ShoppingCart className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="What I Offer"
          title="Services"
          subtitle="End-to-end web development for startups, agencies, and enterprises."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-solid p-6 group hover:border-[rgb(var(--accent)/0.3)] hover:shadow-lg hover:shadow-[rgb(var(--accent)/0.05)] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl accent-bg flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                {SERVICE_ICONS[service.icon]}
              </div>
              <h3 className="font-display text-base font-600 mb-2 text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent))] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
