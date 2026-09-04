import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900">
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-primary to-primary-700">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready for a Spotless Space?
              </h3>
              <p className="text-blue-100">
                Get your free quote today — no obligation, no hassle.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company info - wider column */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <Link href="/" className="inline-block">
                <div className="bg-white rounded-xl p-4 inline-block shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="Cleaning Apex & Facility Services"
                    width={280}
                    height={85}
                    className="h-14 w-auto"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
              Professional cleaning services across London and surrounding areas.
              We take pride in delivering exceptional results that exceed expectations.
            </p>

            {/* Social links */}
            <div>
              <p className="text-white font-medium mb-4">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all text-gray-400 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all text-gray-400 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={COMPANY_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all text-gray-400 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1 group"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Areas", href: "/areas" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1 group"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Contact Us
            </h3>

            <div className="space-y-5">
              {/* Phone */}
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                  <Phone size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-white font-medium group-hover:text-secondary transition-colors">
                    {COMPANY_INFO.phone}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                  <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-white font-medium group-hover:text-secondary transition-colors break-all">
                    {COMPANY_INFO.email}
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Address</p>
                  <p className="text-gray-300">
                    {COMPANY_INFO.address.street}<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Hours</p>
                  <div className="text-gray-300 text-sm space-y-0.5">
                    <p><span className="text-gray-500">Mon-Fri:</span> {COMPANY_INFO.hours.weekdays}</p>
                    <p><span className="text-gray-500">Sat:</span> {COMPANY_INFO.hours.saturday}</p>
                    <p><span className="text-gray-500">Sun:</span> {COMPANY_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 pb-28 md:pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-gray-500 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
