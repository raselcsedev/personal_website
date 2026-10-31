import type { MetadataRoute } from "next";
import { PROJECTS } from "@/constants/data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexrahman.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...PROJECTS.map((p) => ({
      url: `${SITE_URL}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
