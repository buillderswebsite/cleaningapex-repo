"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <p>Professional cleaning services across London & surrounding areas</p>
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 hover:text-secondary-200 transition-colors"
          >
            <Phone size={16} />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Cleaning Apex & Facility Services"
              width={220}
              height={70}
              className="h-14 md:h-16 lg:h-18 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium py-2"
                  >
                    {link.label}
                    <ChevronDown size={16} />
                  </Link>
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-fade-in">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services#${service.id}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.label === "Get a Quote"
                      ? "bg-accent hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                      : "text-gray-700 hover:text-primary transition-colors font-medium"
                  }
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    link.label === "Get a Quote"
                      ? "bg-accent hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg text-center mt-2 shadow-md"
                      : "py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                  }
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 py-2 text-primary font-medium"
              >
                <Phone size={18} />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
