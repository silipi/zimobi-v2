import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://zimobi.com.br", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://zimobi.com.br/contato", lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
  ];
}
