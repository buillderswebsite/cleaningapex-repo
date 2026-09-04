import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FacebookPixel from "@/components/FacebookPixel";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import "./globals.css";

// Analytics & Tracking IDs (set these in Vercel Environment Variables)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "";
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://cleaningapex.co.uk"),
  title: {
    default: "Cleaning Apex & Facility Services | Professional Cleaning London",
    template: "%s | Cleaning Apex",
  },
  description:
    "At the Peak of Cleanliness. Professional domestic and commercial cleaning services across London and surrounding areas. Fully insured, vetted cleaners. Get a free quote today.",
  keywords: [
    "cleaning services London",
    "commercial cleaning London",
    "domestic cleaning London",
    "house cleaning London",
    "end of tenancy cleaning London",
    "move out cleaning",
    "office cleaning London",
    "deep cleaning services London",
    "carpet cleaning London",
    "upholstery cleaning",
    "professional cleaners London",
    "cleaning company London",
    "home cleaning services",
    "regular cleaning London",
    "one-off cleaning",
    "spring cleaning London",
    "Airbnb cleaning London",
    "after builders cleaning",
    "window cleaning",
    "oven cleaning London",
    "cleaners near me",
    "affordable cleaning services",
    "insured cleaners London",
    "vetted cleaners",
    "eco-friendly cleaning London",
    "Westminster cleaning",
    "Camden cleaning",
    "Islington cleaning",
    "Hackney cleaning",
    "Southwark cleaning",
    "Greenwich cleaning",
  ],
  authors: [{ name: "Cleaning Apex & Facility Services Limited" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://cleaningapex.co.uk",
    siteName: "Cleaning Apex & Facility Services",
    title: "Cleaning Apex | Professional Cleaning Services London",
    description:
      "At the Peak of Cleanliness. Professional domestic and commercial cleaning across London. Fully insured & vetted cleaners.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cleaning Apex & Facility Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning Apex | Professional Cleaning Services London",
    description:
      "At the Peak of Cleanliness. Professional domestic and commercial cleaning across London.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

// JSON-LD Schema for LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://cleaningapex.co.uk",
  name: "Cleaning Apex & Facility Services Limited",
  description:
    "Professional domestic and commercial cleaning services across London and surrounding areas.",
  url: "https://cleaningapex.co.uk",
  telephone: "020 1234 5678",
  email: "info@cleaningapexfacillities.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "98 Fairlawn Park",
    addressLocality: "London",
    postalCode: "SE26 5SB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "££",
  image: "https://cleaningapex.co.uk/og-image.jpg",
  sameAs: [
    "https://facebook.com/cleaningapex",
    "https://instagram.com/cleaningapex",
    "https://linkedin.com/company/cleaningapex",
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Domestic Cleaning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Cleaning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "End of Tenancy Cleaning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep Cleaning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Office Cleaning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carpet & Upholstery Cleaning",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <FacebookPixel pixelId={FB_PIXEL_ID} />
        <MicrosoftClarity projectId={CLARITY_PROJECT_ID} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Cookie Consent Banner */}
        <CookieConsent />

        {/* WhatsApp Button */}
        <WhatsAppButton />

        {/* Back to Top Button */}
        <BackToTop />

        {/* Mobile sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:hidden z-40">
          <a
            href="/contact"
            className="btn-primary w-full text-center py-4 text-lg"
          >
            Get a Free Quote
          </a>
        </div>
      </body>
    </html>
  );
}
