import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES, COMPANY_INFO } from "@/lib/constants";

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

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Our Cleaning Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From regular home maintenance to specialised deep cleaning, we offer
            a complete range of professional cleaning solutions.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Showcase */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="heading-2 text-gray-900 mt-3 mb-4">
              Professional Results, Every Time
            </h2>
            <p className="text-gray-600 text-lg">
              See the quality and attention to detail we bring to every cleaning job.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="relative rounded-2xl overflow-hidden group">
              <Image
                src="/images/window-cleaning.jpg"
                alt="Professional window cleaning"
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Crystal Clear Windows</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <Image
                src="/images/cooker-cleaning.jpg"
                alt="Cooker and kitchen cleaning"
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Spotless Kitchens</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <Image
                src="/images/sofa-cleaning.jpg"
                alt="Sofa and upholstery cleaning"
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Fresh Upholstery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="heading-2 text-gray-900 mt-3 mb-4">
              Simple Booking Process
            </h2>
            <p className="text-gray-600 text-lg">
              Getting your space professionally cleaned is easy. Here&apos;s how
              we work.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Request a Quote",
                description:
                  "Fill out our simple form or give us a call. Tell us about your space and cleaning needs.",
              },
              {
                step: "02",
                title: "Receive Your Quote",
                description:
                  "We'll send you a detailed, no-obligation quote within 24 hours.",
              },
              {
                step: "03",
                title: "Book Your Clean",
                description:
                  "Choose a date and time that works for you. We offer flexible scheduling.",
              },
              {
                step: "04",
                title: "Enjoy the Results",
                description:
                  "Our professional team arrives on time and leaves your space sparkling clean.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="heading-2 text-gray-900 mt-3">
                Common Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Do I need to provide cleaning supplies?",
                  a: "No, we bring all the professional-grade cleaning products and equipment needed. If you prefer us to use specific eco-friendly or hypoallergenic products, just let us know.",
                },
                {
                  q: "Are your cleaners insured and vetted?",
                  a: "Yes, all our cleaning staff are fully insured, background-checked, and professionally trained. Your peace of mind is our priority.",
                },
                {
                  q: "What's included in a standard domestic clean?",
                  a: "Our domestic cleaning includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning (surfaces, sink, appliances exterior), and tidying. Deep cleaning of specific areas can be added on request.",
                },
                {
                  q: "How do you calculate your prices?",
                  a: "Our pricing depends on the size of your property, type of service, and specific requirements. We provide transparent, itemised quotes with no hidden fees.",
                },
                {
                  q: "Can I book a one-off clean?",
                  a: "Absolutely! While we offer regular cleaning contracts, one-off cleans are always welcome — whether it's a spring clean, post-party cleanup, or end of tenancy.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. We&apos;re here to
            make your space shine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Phone size={20} />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
