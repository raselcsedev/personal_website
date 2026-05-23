# Developer Portfolio — Next.js 15

A premium, fully responsive developer portfolio for job hunting, remote opportunities, and freelance clients. Built with Next.js 15 App Router, TypeScript, Tailwind CSS, ShadCN UI, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # run production server
npm run lint    # ESLint
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your domain.

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout, fonts, SEO
│   ├── page.tsx         # Home — all sections
│   ├── loading.tsx      # Skeleton loading UI
│   ├── globals.css      # Theme variables, utilities
│   ├── sitemap.ts       # SEO sitemap
│   └── robots.ts        # Crawler rules
│
├── sections/            # Page sections (About, Skills, Experience…)
├── components/
│   ├── layout/          # Navbar, Footer, ThemeProvider, PageTransition
│   ├── sections/        # Hero, Projects, Contact
│   ├── projects/        # ProjectCard, skeletons
│   ├── shared/          # SectionHeader, HeroBackground
│   └── ui/              # ShadCN-style Button, Input, Badge, Skeleton
│
├── constants/data.ts    # Portfolio content (edit this first)
├── types/index.ts       # TypeScript interfaces
├── lib/                 # utils, animations, seo helpers
├── hooks/               # useMounted, useScrollSpy
└── public/              # resume.pdf, og-image.png, project images
```

---

## Features

| Feature | Implementation |
|---------|----------------|
| Responsive layout | Mobile-first Tailwind, sticky navbar |
| Dark / light mode | `next-themes` + CSS variables |
| Animations | Framer Motion scroll reveals, typewriter hero |
| SEO | Metadata, Open Graph, sitemap, robots |
| Contact form | React Hook Form + Zod validation |
| Project filters | Category tabs with AnimatePresence |
| Scroll progress | Framer Motion spring bar |
| Loading UI | Route-level skeletons in `app/loading.tsx` |

---

## Customization

### 1. Personal info

Edit `constants/data.ts` — update `PERSONAL_INFO`, `PROJECTS`, `SKILLS`, `EXPERIENCE`, `SERVICES`, `TESTIMONIALS`.

### 2. Colors & fonts

- Colors: `app/globals.css` (`:root` and `.dark`)
- Fonts: `app/layout.tsx` (Google Fonts via `next/font`)

### 3. Assets

Add to `public/`:

- `resume.pdf` — linked from hero CTA
- `og-image.png` — 1200×630 for social sharing
- `projects/*.jpg` — optional project thumbnails

### 4. Contact form

Replace the mock submit in `components/sections/ContactSection.tsx` with [Resend](https://resend.com), [Formspree](https://formspree.io), or your API route.

---

## Deploy to Vercel

### CLI

```bash
npm install -g vercel
vercel
```

### GitHub

1. Push the repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Framework: **Next.js** (auto-detected)
4. Add environment variable: `NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app`
5. Deploy

### Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO |
| `RESEND_API_KEY` | Optional — email API |
| `CONTACT_EMAIL` | Optional — form recipient |

---

## Tech Stack

- **Next.js 15** — App Router, Server Components
- **TypeScript** — strict types in `types/`
- **Tailwind CSS** — utility-first styling
- **ShadCN UI** — Button, Input, Textarea, Badge, Skeleton
- **Framer Motion** — animations & scroll progress
- **React Hook Form + Zod** — contact validation
- **Lucide React** — icons
- **next-themes** — theme toggle

---

## License

MIT — use freely for your personal portfolio.
