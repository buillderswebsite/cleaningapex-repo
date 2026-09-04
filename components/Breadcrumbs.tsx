"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const pathNameMap: Record<string, string> = {
  about: "About Us",
  services: "Services",
  areas: "Service Areas",
  pricing: "Pricing",
  contact: "Contact",
  blog: "Blog",
  faq: "FAQ",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  cookies: "Cookie Policy",
  accessibility: "Accessibility",
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = pathNameMap[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const isLast = index === segments.length - 1;

    return { href, label, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
      <div className="container-custom py-3">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors"
            >
              <Home size={14} />
              <span>Home</span>
            </Link>
          </li>

          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-gray-400" />
              {crumb.isLast ? (
                <span className="text-gray-900 font-medium">{crumb.label}</span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
