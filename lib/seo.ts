import type { Metadata } from "next";
import { PERSONAL_INFO } from "@/constants/demo_data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexrahman.dev";

/** Centralized SEO metadata factory */
export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`,
      template: `%s | ${PERSONAL_INFO.name}`,
    },
    description: PERSONAL_INFO.bio,
    keywords: [
      "Full Stack Developer",
      "Next.js Developer",
      "React Developer",
      "Node.js Developer",
      "JavaScript Developer",
      "Remote Developer",
      "Freelance Web Developer",
    ],
    authors: [{ name: PERSONAL_INFO.name }],
    creator: PERSONAL_INFO.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_URL,
      siteName: `${PERSONAL_INFO.name} — Developer Portfolio`,
      title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`,
      description: PERSONAL_INFO.bio,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${PERSONAL_INFO.name} — Full Stack Developer Portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`,
      description: PERSONAL_INFO.bio,
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
    ...overrides,
  };
}
