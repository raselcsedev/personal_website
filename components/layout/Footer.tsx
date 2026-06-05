import Link from "next/link";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "@/constants/data";

/** Site footer with quick navigation and social links */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgb(var(--border-subtle))] bg-[linear-gradient(180deg,rgb(var(--bg-secondary)/0.35),rgb(var(--bg-primary)/0.55))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg accent-bg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-700 text-sm">
                raselcse<span className="gradient-text">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed max-w-xs">
              Frontend Developer building scalable web experiences
              with Next.js, React.js, and Tailwind CSS.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-600 mb-4 text-[rgb(var(--text-primary))]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent))] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-600 mb-4 text-[rgb(var(--text-primary))]">
              Connect
            </h3>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 text-sm text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors mb-4"
            >
              <Mail className="w-4 h-4" />
              {PERSONAL_INFO.email}
            </a>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl card-solid flex items-center justify-center text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] hover:border-[rgb(var(--accent)/0.35)] hover:bg-[linear-gradient(135deg,rgb(var(--accent)/0.10),rgb(var(--accent-2)/0.12))] transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl card-solid flex items-center justify-center text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] hover:border-[rgb(var(--accent)/0.35)] hover:bg-[linear-gradient(135deg,rgb(var(--accent)/0.10),rgb(var(--accent-2)/0.12))] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgb(var(--border-subtle))] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[rgb(var(--text-muted))]">
            © {year} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-xs text-[rgb(var(--text-muted))]">
            Built with Next.js 15 · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
