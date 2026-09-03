"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, ChevronRight, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
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
                width={320}
                height={100}
                className="h-20 md:h-24 lg:h-28 w-auto"
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
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="font-semibold text-gray-900">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Panel Content */}
          <div className="flex flex-col h-[calc(100%-64px)] overflow-y-auto">
            {/* Navigation Links */}
            <div className="flex-1 py-4">
              {NAV_LINKS.map((link) =>
                link.label === "Services" ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full px-6 py-4 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium">{link.label}</span>
                      <ChevronRight
                        size={20}
                        className={`text-gray-400 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {/* Services Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileServicesOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="bg-gray-50 py-2">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services#${service.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-10 py-3 text-gray-600 hover:text-primary transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : link.label === "Get a Quote" ? (
                  <div key={link.href} className="px-4 mt-4">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-600 text-white font-semibold py-4 rounded-xl shadow-lg transition-all"
                    >
                      {link.label}
                      <ChevronRight size={18} />
                    </Link>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center px-6 py-4 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Contact Info Footer */}
            <div className="border-t border-gray-100 p-6 bg-gray-50">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-medium">
                Contact Us
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <span className="font-medium">{COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <span className="font-medium text-sm">{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
