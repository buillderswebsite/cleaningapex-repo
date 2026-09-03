import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Heart,
  Users,
  Award,
  Leaf,
  ThumbsUp,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cleaning Apex & Facility Services Limited. Our story, values, and commitment to delivering exceptional cleaning services across London.",
  openGraph: {
    title: "About Cleaning Apex | Our Story & Values",
    description:
      "Discover what makes Cleaning Apex different. Professional, reliable cleaning services built on trust and excellence.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {COMPANY_INFO.tagline}. Learn about our journey and what drives us to
            deliver excellence every day.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="heading-2 text-gray-900 mt-3 mb-6">
                Building Trust, One Clean at a Time
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cleaning Apex & Facility Services Limited is a trusted provider
                  of domestic and commercial cleaning services, dedicated to
                  achieving excellence in every environment we serve. We deliver
                  reliable, high-quality cleaning solutions that create safe,
                  healthy, and welcoming spaces for our clients.
                </p>
                <p>
                  Cleaning Apex & Facility Services Limited was founded with a
                  simple mission: to provide excellence in every clean, raising
                  cleaning standards and services you can truly rely on. What
                  started as a small operation has grown into a trusted name
                  across the capital.
                </p>
                <p>
                  At Cleaning Apex & Facility Services Limited, we understand that
                  inviting someone into your home or workplace requires trust.
                  That&apos;s why we&apos;ve built our entire operation around
                  transparency, reliability, and genuine care for our clients.
                  Every member of our team is carefully vetted, professionally
                  trained, and committed to exceeding expectations.
                </p>
                <p>
                  Over the years, we&apos;ve had the privilege of serving hundreds
                  of satisfied customers — from busy professionals needing regular
                  home help, to businesses requiring spotless commercial spaces,
                  to families preparing for new tenants. Each clean is an
                  opportunity to demonstrate why we&apos;re at the peak of
                  cleanliness.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/team-mopping.jpg"
                  alt="Our professional cleaning team"
                  width={500}
                  height={500}
                  className="object-cover w-full h-[450px]"
                />
              </div>

              {/* Accent element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="heading-2 text-gray-900 mt-3 mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-600 text-lg">
              These core values guide everything we do, from how we treat our
              clients to how we train our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Excellence",
                description:
                  "We don't cut corners. Every clean meets our high standards, because your space deserves nothing less than the best.",
              },
              {
                icon: Heart,
                title: "Care",
                description:
                  "We treat your home or business as if it were our own. Respect, attention to detail, and genuine care define our approach.",
              },
              {
                icon: Users,
                title: "Trust",
                description:
                  "Building lasting relationships with our clients through transparency, reliability, and consistent quality.",
              },
              {
                icon: Award,
                title: "Professionalism",
                description:
                  "From our uniformed staff to our punctual arrivals, we maintain the highest professional standards.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description:
                  "We prioritise eco-friendly products and practices, protecting both your health and the environment.",
              },
              {
                icon: ThumbsUp,
                title: "Satisfaction",
                description:
                  "Your satisfaction is our measure of success. We're not done until you're completely happy with our work.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className=" font-semibold text-xl text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "50+", label: "Team Members" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="heading-2 text-gray-900 mt-3 mb-4">
              The People Behind the Clean
            </h2>
            <p className="text-gray-600 text-lg">
              Our strength lies in our team. Every cleaner is carefully selected,
              trained, and committed to excellence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="heading-3 text-gray-900 mb-4">
                  Vetted & Trained Professionals
                </h3>
                <ul className="space-y-4">
                  {[
                    "Rigorous background checks on all staff",
                    "Comprehensive training programme",
                    "Regular performance reviews",
                    "Ongoing professional development",
                    "Uniformed and ID-carrying team members",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/team-cleaning.jpg"
                  alt="Team member cleaning"
                  width={400}
                  height={300}
                  className="object-cover w-full h-[280px]"
                />
                <div className="bg-primary/5 p-6 text-center">
                  <p className="text-gray-600">
                    Join our growing team of cleaning professionals
                  </p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=Job Enquiry`}
                    className="inline-block mt-3 text-primary font-semibold hover:underline"
                  >
                    View Career Opportunities
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-accent to-accent-700">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Experience the Cleaning Apex Difference
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Ready to see why hundreds of London homes and businesses trust us?
            Get your free quote today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-accent font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
