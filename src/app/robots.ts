import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // standard best practice
    },
    sitemap: "https://gobah-tech.ru/sitemap.xml",
  };
}
