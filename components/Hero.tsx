import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-700 overflow-hidden">
      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                Trusted by 500+ London homes & businesses
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Professional Cleaning Services{" "}
              <span className="text-secondary-200 block mt-2">You Can Trust</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
              {COMPANY_INFO.tagline}. From domestic cleaning to commercial
              facilities, we deliver spotless results across London.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {[
                "Fully Insured",
                "Vetted Staff",
                "Eco-Friendly",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-blue-100"
                >
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Get a Free Quote
                <ArrowRight size={20} />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors font-medium border border-white/30"
              >
                <Phone size={20} />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/living-room-clean.jpg"
                  alt="Beautifully cleaned living room"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[480px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />

                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-4 text-white text-center">
                    <div>
                      <p className="text-2xl md:text-3xl font-bold">500+</p>
                      <p className="text-xs opacity-90">Happy Clients</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold">10+</p>
                      <p className="text-xs opacity-90">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold">100%</p>
                      <p className="text-xs opacity-90">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      Deposit-Back Guarantee
                    </p>
                    <p className="text-xs text-gray-500">
                      On all end of tenancy cleans
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
