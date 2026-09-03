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
} from "lucide-react";
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <div className="bg-white rounded-lg p-3 inline-block">
                  <Image
                    src="/logo.png"
                    alt="Cleaning Apex & Facility Services"
                    width={160}
                    height={50}
                    className="h-10 w-auto"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional cleaning services across London and surrounding areas.
              We take pride in delivering exceptional results that exceed
              expectations.
            </p>
            <div className="flex gap-4">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white  font-semibold text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-secondary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white  font-semibold text-lg mb-6">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {SERVICE_AREAS.london.slice(0, 8).map((area) => (
                <li key={area}>
                  <Link
                    href="/areas"
                    className="hover:text-secondary transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-secondary hover:text-secondary-300 transition-colors font-medium"
                >
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white  font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 hover:text-secondary transition-colors"
                >
                  <Phone size={20} className="mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3 hover:text-secondary transition-colors"
                >
                  <Mail size={20} className="mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span>
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: {COMPANY_INFO.hours.weekdays}</p>
                  <p>Saturday: {COMPANY_INFO.hours.saturday}</p>
                  <p>Sunday: {COMPANY_INFO.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 pb-24 md:pb-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
