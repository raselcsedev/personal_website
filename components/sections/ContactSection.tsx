"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PERSONAL_INFO } from "@/constants/data";
import type { ContactFormData } from "@/types";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form submitted:", data);
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind or a role to fill? I'm actively looking for remote opportunities and freelance work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: PERSONAL_INFO.email },
                { icon: MapPin, label: "Location", value: PERSONAL_INFO.location },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl accent-bg flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[rgb(var(--text-muted))] mb-0.5">{label}</p>
                    <p className="text-sm text-[rgb(var(--text-primary))]">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs text-[rgb(var(--text-muted))] mb-4 uppercase tracking-widest">
                Find me on
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <div className="card-glass p-5 rounded-xl border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 pulse-glow" />
                <span className="text-sm font-500 text-green-400">Available Now</span>
              </div>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                Open to full-time remote roles and freelance projects. Typical response within
                24 hours.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="card-solid p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                  role="status"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="font-display text-xl font-600 mb-2">Message Sent!</h3>
                  <p className="text-[rgb(var(--text-secondary))] text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs text-[rgb(var(--text-muted))] mb-2 uppercase tracking-wider">
                        Name
                      </label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                        className={errors.name ? "border-red-400/50" : ""}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1" role="alert">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-[rgb(var(--text-muted))] mb-2 uppercase tracking-wider">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your@email.com"
                        aria-invalid={!!errors.email}
                        className={errors.email ? "border-red-400/50" : ""}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1" role="alert">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs text-[rgb(var(--text-muted))] mb-2 uppercase tracking-wider">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="What is this about?"
                      aria-invalid={!!errors.subject}
                      className={errors.subject ? "border-red-400/50" : ""}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 mt-1" role="alert">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs text-[rgb(var(--text-muted))] mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      aria-invalid={!!errors.message}
                      className={errors.message ? "border-red-400/50" : ""}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1" role="alert">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
