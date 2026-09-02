import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
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
                        {trimmed.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (trimmed.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                        {trimmed.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                    return (
                      <p key={index} className="font-semibold text-gray-900 mt-6 mb-2">
                        {trimmed.replace(/\*\*/g, "")}
                      </p>
                    );
                  }
                  if (trimmed.startsWith("- ")) {
                    return (
                      <li key={index} className="text-gray-600 ml-4">
                        {trimmed.replace("- ", "")}
                      </li>
                    );
                  }
                  if (/^\d+\./.test(trimmed)) {
                    return (
                      <li key={index} className="text-gray-600 ml-4 list-decimal">
                        {trimmed.replace(/^\d+\.\s*/, "")}
                      </li>
                    );
                  }

                  return (
                    <p key={index} className="text-gray-600 leading-relaxed mb-4">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-medium">Share this article:</span>
                  <div className="flex gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://cleaningapex.co.uk/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                    >
                      <Share2 size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 bg-accent/10 rounded-2xl p-8 border border-accent/20">
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
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Get a Free Quote
                </Link>
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
