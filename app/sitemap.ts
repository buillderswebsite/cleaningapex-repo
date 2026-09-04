import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";

const BASE_URL = "https://cleaningapex.co.uk";

// Area slugs for dynamic pages
const AREA_SLUGS = [
  "hackney",
  "islington",
  "camden",
  "westminster",
  "greenwich",
  "southwark",
  "lewisham",
  "tower-hamlets",
  "lambeth",
  "wandsworth",
  "hammersmith-fulham",
  "kensington-chelsea",
  "newham",
  "barking-dagenham",
  "bexley",
  "bromley",
  "croydon",
  "sutton",
  "merton",
  "kingston",
  "richmond",
  "hounslow",
  "ealing",
  "brent",
  "harrow",
  "barnet",
  "haringey",
  "enfield",
  "waltham-forest",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/areas`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/accessibility`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/sitemap-page`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Service-specific landing pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Area landing pages
  const areaPages: MetadataRoute.Sitemap = AREA_SLUGS.map((area) => ({
    url: `${BASE_URL}/cleaning/${area}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog category pages
  const categories = [...new Set(BLOG_POSTS.map((post) => post.category))];
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    ...mainPages,
    ...servicePages,
    ...areaPages,
    ...blogPages,
    ...categoryPages,
  ];
}
