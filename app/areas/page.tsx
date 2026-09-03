import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";
import { SERVICE_AREAS, SERVICES } from "@/lib/constants";
import Map from "@/components/Map";
import PostcodeChecker from "@/components/PostcodeChecker";

export const metadata: Metadata = {
  title: "Service Areas | Cleaning Services London & Surrounding Areas",
  description:
    "Professional cleaning services across all London boroughs and surrounding areas including Watford, Croydon, Bromley, and more. Find local cleaners near you.",
  openGraph: {
    title: "Service Areas | Cleaning Apex London",
    description:
      "Professional cleaning services across all London boroughs and surrounding areas. Find local cleaners near you.",
  },
};

export default function AreasPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Our Service Areas</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Professional cleaning services across London and the surrounding
            Home Counties. Find out if we cover your area.
          </p>
        </div>
      </section>

      {/* Map placeholder & Coverage intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Coverage
              </span>
              <h2 className="heading-2 text-gray-900 mt-3 mb-6">
                Serving Greater London & Beyond
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                From Central London to the outer boroughs and surrounding towns,
                Cleaning Apex provides professional cleaning services to areas
                and businesses across a wide area.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of local cleaners knows each area well, ensuring
                reliable service with minimal travel time. Whether you&apos;re
                in Westminster or Watford, we&apos;re here to help.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={20} className="text-accent" />
                  <span>All 32 London boroughs</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={20} className="text-accent" />
                  <span>15+ surrounding towns</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={20} className="text-accent" />
                  <span>Same-day availability</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <Map height="450px" />
              <p className="text-sm text-gray-500 mt-3 text-center">
                Our service coverage across Greater London and surrounding areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* London Boroughs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              London
            </span>
            <h2 className="heading-2 text-gray-900 mt-3 mb-4">
              All London Boroughs Covered
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide cleaning services across different London boroughs,
              surrounding towns and areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICE_AREAS.london.map((area) => (
              <div
                key={area}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <span className="font-medium text-gray-900">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surrounding Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Beyond London
            </span>
            <h2 className="heading-2 text-gray-900 mt-3 mb-4">
              Surrounding Towns & Areas
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our services extends beyond London to surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICE_AREAS.surrounding.map((area) => (
              <div
                key={area}
                className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-4 border border-secondary/20 hover:border-secondary/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-secondary-600" />
                  </div>
                  <span className="font-medium text-gray-900">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-4">
              Services Available in All Areas
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              No matter where you&apos;re located, you&apos;ll have access to our
              full range of professional cleaning services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-blue-100 text-sm">{service.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postcode Checker */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <PostcodeChecker />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-accent to-accent-700">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready to Book Your Clean?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get your free quote today. We&apos;ll match you with cleaners in your
            local area.
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
