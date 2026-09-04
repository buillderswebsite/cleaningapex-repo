import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ category: string }>;
}

// Get unique categories
const getCategories = () => {
  const categories = [...new Set(BLOG_POSTS.map((post) => post.category))];
  return categories.map((cat) => ({
    name: cat,
    slug: cat.toLowerCase().replace(/\s+/g, "-"),
  }));
};

export async function generateStaticParams() {
  return getCategories().map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getCategories().find((c) => c.slug === category);

  if (!categoryData) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${categoryData.name} Articles | Cleaning Tips & Guides`,
    description: `Read our ${categoryData.name.toLowerCase()} articles for expert cleaning tips, advice, and guides from Cleaning Apex professionals.`,
    openGraph: {
      title: `${categoryData.name} | Cleaning Apex Blog`,
      description: `Expert ${categoryData.name.toLowerCase()} articles and guides.`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = getCategories().find((c) => c.slug === category);

  if (!categoryData) {
    notFound();
  }

  const posts = BLOG_POSTS.filter(
    (post) => post.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-16">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
            Blog Category
          </span>
          <h1 className="heading-1 text-white mb-4">{categoryData.name}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {posts.length} article{posts.length !== 1 ? "s" : ""} in this category
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-gray-600 font-medium">Categories:</span>
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary transition-colors"
            >
              All
            </Link>
            {getCategories().map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat.slug === category
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found in this category.</p>
              <Link href="/blog" className="text-primary hover:underline mt-4 inline-block">
                View all articles
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Need Professional Cleaning?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Put these tips into action with our professional cleaning services. Get a free quote today!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
