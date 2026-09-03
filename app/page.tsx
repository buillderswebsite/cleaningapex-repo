import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Clock,
  Leaf,
  Award,
  MapPin,
  Phone,
} from "lucide-react";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Accreditations from "@/components/Accreditations";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import { SERVICES, TESTIMONIALS, SERVICE_AREAS, COMPANY_INFO } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="heading-2 text-gray-900 mt-3 mb-4">
              Professional Cleaning for Every Need
            </h2>
            <p className="text-gray-600 text-lg">
              From regular domestic cleaning to specialised commercial services,
              we have the expertise to keep your spaces immaculate.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                {...service}
                variant="compact"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary gap-2">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="heading-2 text-gray-900 mt-3 mb-6">
                The Cleaning Apex Difference
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We&apos;re not just another cleaning company. With years of
                experience serving London homes and businesses, we&apos;ve built
                our reputation on reliability, attention to detail, and genuine
                care for our clients.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Fully Insured
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Complete peace of mind with full liability coverage
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Flexible Scheduling
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Cleaning times that work around your life
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Eco-Friendly
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Safe, non-toxic products for your home
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Vetted Team
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Background-checked, trained professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/living-room-clean.jpg"
                  alt="Beautifully cleaned living room"
                  width={600}
                  height={450}
                  className="object-cover w-full h-[400px]"
                />
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px]">
                <p className="text-4xl font-bold text-primary mb-1">98%</p>
                <p className="text-gray-600 text-sm">
                  Customer satisfaction rate
                </p>
              </div>

              <div className="absolute -top-6 -right-6 bg-accent text-white rounded-xl shadow-xl p-6 max-w-[200px]">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm opacity-90">Years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary-200 font-semibold text-sm uppercase tracking-wider">
              Coverage Area
            </span>
            <h2 className="heading-2 text-white mt-3 mb-4">
              Serving London & Beyond
            </h2>
            <p className="text-blue-100 text-lg">
              We provide professional cleaning services across all London
              boroughs and many surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* London boroughs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-secondary" size={24} />
                <h3 className="text-xl font-semibold">London Boroughs</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.london.slice(0, 16).map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
                <span className="px-3 py-1 bg-secondary/30 rounded-full text-sm font-medium">
                  + more
                </span>
              </div>
            </div>

            {/* Surrounding areas */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-secondary" size={24} />
                <h3 className="text-xl font-semibold">Surrounding Areas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.surrounding.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View All Service Areas
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Clean Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="heading-2 text-gray-900 mt-3 mb-4">
              Every Corner, Every Surface
            </h2>
            <p className="text-gray-600 text-lg">
              From kitchens to living rooms, we handle every cleaning task with
              professional care and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/washing-dishes.jpg", label: "Kitchen Cleaning" },
              { src: "/images/cooker-cleaning.jpg", label: "Cooker & Hob" },
              { src: "/images/window-cleaning.jpg", label: "Window Cleaning" },
              { src: "/images/dusting-tv.jpg", label: "Dusting & Surfaces" },
              { src: "/images/dishwasher-clean.jpg", label: "Appliance Cleaning" },
              { src: "/images/outdoor-cleaning.jpg", label: "Outdoor Spaces" },
              { src: "/images/sofa-cleaning.jpg", label: "Upholstery Care" },
              { src: "/images/vacuuming.jpg", label: "Floor Care" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="heading-2 text-gray-900 mt-3 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Don&apos;t just take our word for it — hear from the homes and
              businesses we&apos;ve helped keep clean.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <Testimonial key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee & Accreditations */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <GuaranteeBadge />
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <Accreditations />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent to-accent-700">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. We&apos;ll get back to you
            within 24 hours with a competitive price tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-accent font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors"
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
