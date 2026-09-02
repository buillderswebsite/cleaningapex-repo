import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Cleaning Tips & Advice",
  description:
    "Expert cleaning guides, tips, and advice from Cleaning Apex. Learn about end of tenancy cleaning, deep cleaning, eco-friendly practices, and more.",
  openGraph: {
    title: "Cleaning Tips & Advice | Cleaning Apex Blog",
    description:
      "Expert guides and cleaning tips from London's trusted cleaning professionals.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
