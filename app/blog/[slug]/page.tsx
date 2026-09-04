import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import SocialShare from "@/components/SocialShare";
import type { Metadata } from "next";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

// Parse inline markdown (bold text)
function parseInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);

    if (boldMatch && boldMatch.index !== undefined) {
      // Add text before the bold
      if (boldMatch.index > 0) {
        parts.push(remaining.slice(0, boldMatch.index));
      }
      // Add the bold text
      parts.push(
        <strong key={key++} className="font-semibold text-gray-900">
          {boldMatch[1]}
        </strong>
      );
      // Continue with the rest
      remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
    } else {
      // No more bold, add remaining text
      parts.push(remaining);
      break;
    }
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 2);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-16">
        <div className="container-custom">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          {/* Category */}
          <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-custom -mt-8 relative z-10">
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-semibold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-li:text-gray-600
                  prose-strong:text-gray-900
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              >
                {post.content.split("\n").map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  if (trimmed.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        {parseInlineMarkdown(trimmed.replace("## ", ""))}
                      </h2>
                    );
                  }
                  if (trimmed.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                        {parseInlineMarkdown(trimmed.replace("### ", ""))}
                      </h3>
                    );
                  }
                  if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.slice(2, -2).includes("**")) {
                    return (
                      <p key={index} className="font-semibold text-gray-900 mt-6 mb-2">
                        {trimmed.replace(/\*\*/g, "")}
                      </p>
                    );
                  }
                  if (trimmed.startsWith("- ")) {
                    return (
                      <li key={index} className="text-gray-600 ml-4">
                        {parseInlineMarkdown(trimmed.replace("- ", ""))}
                      </li>
                    );
                  }
                  if (/^\d+\./.test(trimmed)) {
                    return (
                      <li key={index} className="text-gray-600 ml-4 list-decimal">
                        {parseInlineMarkdown(trimmed.replace(/^\d+\.\s*/, ""))}
                      </li>
                    );
                  }

                  return (
                    <p key={index} className="text-gray-600 leading-relaxed mb-4">
                      {parseInlineMarkdown(trimmed)}
                    </p>
                  );
                })}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <SocialShare
                  url={`https://cleaningapex.co.uk/blog/${post.slug}`}
                  title={post.title}
                />
              </div>

              {/* CTA */}
              <div className="mt-12 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20 relative overflow-hidden">
                {/* Animated background glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Need Professional Cleaning?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Let Cleaning Apex handle the hard work. We offer professional
                    cleaning services across London with competitive rates and
                    guaranteed satisfaction.
                  </p>
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
                  >
                    {/* Shine effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    {/* Pulse ring */}
                    <span className="absolute inset-0 rounded-xl animate-ping bg-accent opacity-20" style={{ animationDuration: '2s' }} />

                    <span className="relative z-10">Get a Free Quote</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-4">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={related.image}
                              alt={related.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                              {related.title}
                            </h4>
                            <span className="text-xs text-gray-500 mt-1">
                              {related.readTime}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Links */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services#domestic" className="hover:text-secondary transition-colors">
                      → Domestic Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#commercial" className="hover:text-secondary transition-colors">
                      → Commercial Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#end-of-tenancy" className="hover:text-secondary transition-colors">
                      → End of Tenancy
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#deep-cleaning" className="hover:text-secondary transition-colors">
                      → Deep Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-secondary transition-colors">
                      → View Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
