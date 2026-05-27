import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bumi-kopi.com";
  const pages = ["/", "/origins", "/processing", "/catalogue", "/about", "/request-sample", "/contact"];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/catalogue" ? "daily" : "monthly",
    priority: path === "/" ? 1 : path === "/request-sample" ? 0.9 : 0.7,
  }));
}
