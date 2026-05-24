"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/constants/data";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { TestimonialCardProps } from "@/types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-[rgb(var(--text-muted))]"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="card-solid p-6 flex flex-col h-full hover:border-[rgb(var(--accent)/0.25)] transition-colors"
    >
      <StarRating rating={testimonial.rating} />
      <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed my-5 flex-1">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-[rgb(var(--border-subtle))]">
        <div className="w-9 h-9 rounded-full accent-bg flex items-center justify-center text-white text-xs font-600">
          {initials}
        </div>
        <div>
          <p className="text-sm font-500 text-[rgb(var(--text-primary))]">{testimonial.name}</p>
          <p className="text-xs text-[rgb(var(--text-muted))]">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-[rgb(var(--bg-secondary)/0.3)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader label="Social Proof" title="What Clients Say" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
