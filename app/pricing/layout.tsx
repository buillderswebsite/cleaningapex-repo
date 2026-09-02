import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Cleaning Services Rates London",
  description:
    "Transparent pricing for professional cleaning services in London. Domestic cleaning from £23/hr, end of tenancy from £159, commercial cleaning, carpet cleaning and more.",
  openGraph: {
    title: "Cleaning Services Pricing | Cleaning Apex London",
    description:
      "Competitive and transparent cleaning rates. Domestic, commercial, end of tenancy, deep cleaning and carpet cleaning prices.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
