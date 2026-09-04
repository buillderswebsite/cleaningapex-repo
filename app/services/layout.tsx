import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Cleaning Services",
  description:
    "Comprehensive cleaning services for homes and businesses in London. Domestic cleaning, commercial cleaning, end of tenancy, deep cleaning, office cleaning, and carpet cleaning.",
  openGraph: {
    title: "Professional Cleaning Services | Cleaning Apex",
    description:
      "Comprehensive cleaning services for homes and businesses across London and surrounding areas.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
