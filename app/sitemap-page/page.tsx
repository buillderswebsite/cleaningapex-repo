import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SERVICES, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Browse all pages on Cleaning Apex website. Find services, areas, pricing, and more.",
};

export default function SitemapPage() {
  const sections = [
    {
      title: "Main Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Our Services", href: "/services" },
        { label: "Service Areas", href: "/areas" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact / Get a Quote", href: "/contact" },
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Our Services",
      links: SERVICES.map((service) => ({
        label: service.title,
        href: `/services#${service.id}`,
      })),
    },
    {
      title: "Service Areas - London",
      links: SERVICE_AREAS.london.slice(0, 12).map((area) => ({
        label: area,
        href: "/areas",
      })),
    },
    {
      title: "Legal & Policies",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Accessibility", href: "/accessibility" },
      ],
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Sitemap</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Find your way around our website
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors group"
                      >
                        <ChevronRight
                          size={14}
                          className="text-gray-400 group-hover:text-primary transition-colors"
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
