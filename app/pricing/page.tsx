"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  Building2,
  Key,
  Sparkles,
  Sofa,
  Check,
  Phone,
  Info,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const tabs = [
  { id: "domestic", label: "Domestic", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "end-of-tenancy", label: "End of Tenancy", icon: Key },
  { id: "deep-cleaning", label: "Deep Cleaning", icon: Sparkles },
  { id: "carpet", label: "Carpet & Upholstery", icon: Sofa },
];

const domesticPricing = {
  title: "Domestic Cleaning",
  description: "Regular home cleaning to keep your space spotless",
  prices: [
    {
      name: "Regular Clean",
      price: "£23",
      unit: "per hour",
      description: "Weekly or fortnightly visits",
      features: [
        "Minimum 3 hours per visit",
        "Same cleaner each visit",
        "All cleaning supplies included",
        "Flexible scheduling",
        "No contracts required",
      ],
      popular: true,
    },
    {
      name: "One-Off Clean",
      price: "£28",
      unit: "per hour",
      description: "Single visit cleaning",
      features: [
        "Minimum 3 hours",
        "Perfect for special occasions",
        "All supplies included",
        "Same-week availability",
        "No commitment",
      ],
      popular: false,
    },
    {
      name: "Monthly Clean",
      price: "£25",
      unit: "per hour",
      description: "Once a month deep maintenance",
      features: [
        "Minimum 4 hours per visit",
        "More thorough than regular",
        "Inside cupboards included",
        "All supplies included",
        "Flexible dates",
      ],
      popular: false,
    },
  ],
};

const commercialPricing = {
  title: "Commercial & Office Cleaning",
  description: "Professional cleaning for businesses of all sizes",
  prices: [
    {
      name: "Regular Office",
      price: "£24",
      unit: "per hour",
      description: "Daily or weekly contracts",
      features: [
        "Desks & workstations",
        "Kitchen & break rooms",
        "Washroom sanitisation",
        "Bin emptying & recycling",
        "Floor care included",
      ],
      popular: true,
    },
    {
      name: "One-Off Office",
      price: "£30",
      unit: "per hour",
      description: "Single visit clean",
      features: [
        "Full office clean",
        "All areas covered",
        "Equipment supplied",
        "Weekend availability",
        "After-hours options",
      ],
      popular: false,
    },
    {
      name: "Deep Clean",
      price: "£38",
      unit: "per hour",
      description: "Intensive commercial clean",
      features: [
        "All regular services",
        "Inside cabinets & drawers",
        "Light fixtures & vents",
        "Skirting boards",
        "Window frames",
      ],
      popular: false,
    },
  ],
  areaRates: [
    { size: "Up to 1,000 sq ft", price: "From £120" },
    { size: "1,000 - 2,500 sq ft", price: "From £180" },
    { size: "2,500 - 5,000 sq ft", price: "From £280" },
    { size: "5,000+ sq ft", price: "Custom quote" },
  ],
};

const endOfTenancyPricing = {
  title: "End of Tenancy Cleaning",
  description: "Guaranteed to meet inventory standards",
  prices: [
    { beds: "Studio", price: "£159", features: ["1 bathroom", "Kitchen", "Living area"] },
    { beds: "1 Bedroom", price: "£189", features: ["1 bathroom", "Kitchen", "Living area"] },
    { beds: "2 Bedroom", price: "£239", features: ["1 bathroom", "Kitchen", "Living area"] },
    { beds: "3 Bedroom", price: "£299", features: ["Up to 2 bathrooms", "Kitchen", "Living area"] },
    { beds: "4 Bedroom", price: "£369", features: ["Up to 2 bathrooms", "Kitchen", "Living area"] },
    { beds: "5+ Bedroom", price: "From £449", features: ["Multiple bathrooms", "Kitchen", "All areas"] },
  ],
  addOns: [
    { name: "Extra bathroom", price: "+£35" },
    { name: "Carpet cleaning (per room)", price: "+£40" },
    { name: "Oven deep clean", price: "+£45" },
    { name: "Fridge deep clean", price: "+£25" },
    { name: "Inside windows", price: "+£5/window" },
    { name: "Balcony/patio", price: "+£30" },
  ],
  guarantee: "Deposit-back guarantee – we'll re-clean for free if needed",
};

const deepCleaningPricing = {
  title: "Deep Cleaning",
  description: "Intensive cleaning for a thorough refresh",
  prices: [
    { beds: "Studio", price: "£179", time: "3-4 hours" },
    { beds: "1 Bedroom", price: "£219", time: "4-5 hours" },
    { beds: "2 Bedroom", price: "£279", time: "5-6 hours" },
    { beds: "3 Bedroom", price: "£359", time: "6-7 hours" },
    { beds: "4 Bedroom", price: "£439", time: "7-8 hours" },
    { beds: "5+ Bedroom", price: "From £519", time: "8+ hours" },
  ],
  includes: [
    "All regular cleaning tasks",
    "Inside all cupboards & drawers",
    "Behind & under appliances",
    "Light fixtures & ceiling fans",
    "Skirting boards & door frames",
    "Inside oven & fridge",
    "Window frames & sills",
    "Deep bathroom descaling",
  ],
};

const carpetPricing = {
  title: "Carpet & Upholstery Cleaning",
  description: "Professional hot water extraction cleaning",
  carpet: [
    { name: "Single Room", price: "£40", note: "up to 15m²" },
    { name: "Double Room", price: "£55", note: "up to 25m²" },
    { name: "Large Room", price: "£70", note: "up to 35m²" },
    { name: "Staircase", price: "£45", note: "standard straight" },
    { name: "Hallway", price: "£30", note: "up to 8m²" },
    { name: "Landing", price: "£25", note: "standard size" },
  ],
  upholstery: [
    { name: "2-Seater Sofa", price: "£65" },
    { name: "3-Seater Sofa", price: "£85" },
    { name: "Corner Sofa", price: "£120" },
    { name: "Armchair", price: "£40" },
    { name: "Dining Chair", price: "£15" },
    { name: "Mattress (Single)", price: "£35" },
    { name: "Mattress (Double)", price: "£45" },
    { name: "Mattress (King)", price: "£55" },
  ],
  packages: [
    { name: "3 Rooms", price: "£99", saving: "Save £21" },
    { name: "4 Rooms", price: "£129", saving: "Save £31" },
    { name: "5 Rooms", price: "£155", saving: "Save £45" },
    { name: "Whole House", price: "From £199", saving: "Best value" },
  ],
};

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("domestic");

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Transparent Pricing
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Competitive rates for professional cleaning services across London.
            No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-[72px] md:top-[108px] bg-white border-b border-gray-200 z-30">
        <div className="container-custom">
          <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-1 md:gap-2 py-4 mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Domestic Cleaning */}
          {activeTab === "domestic" && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="heading-2 text-gray-900 mb-4">{domesticPricing.title}</h2>
                <p className="text-gray-600 text-lg">{domesticPricing.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {domesticPricing.prices.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl p-8 border-2 transition-shadow hover:shadow-xl ${
                      plan.popular ? "border-accent shadow-lg" : "border-gray-200"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-sm font-medium px-4 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.unit}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                        plan.popular
                          ? "bg-accent hover:bg-accent-600 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                      }`}
                    >
                      Get a Quote
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Commercial Cleaning */}
          {activeTab === "commercial" && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="heading-2 text-gray-900 mb-4">{commercialPricing.title}</h2>
                <p className="text-gray-600 text-lg">{commercialPricing.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                {commercialPricing.prices.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl p-8 border-2 transition-shadow hover:shadow-xl ${
                      plan.popular ? "border-accent shadow-lg" : "border-gray-200"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-sm font-medium px-4 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.unit}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                        plan.popular
                          ? "bg-accent hover:bg-accent-600 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                      }`}
                    >
                      Get a Quote
                    </Link>
                  </div>
                ))}
              </div>

              {/* Area-based rates */}
              <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Contract Rates by Office Size
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {commercialPricing.areaRates.map((rate, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-white rounded-lg p-4 border border-gray-200"
                    >
                      <span className="text-gray-700">{rate.size}</span>
                      <span className="font-semibold text-primary">{rate.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-gray-500 text-sm mt-4">
                  Prices per visit. Custom quotes for larger spaces.
                </p>
              </div>
            </div>
          )}

          {/* End of Tenancy */}
          {activeTab === "end-of-tenancy" && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="heading-2 text-gray-900 mb-4">{endOfTenancyPricing.title}</h2>
                <p className="text-gray-600 text-lg">{endOfTenancyPricing.description}</p>
                <div className="inline-flex items-center gap-2 mt-4 bg-accent/10 text-accent px-4 py-2 rounded-full">
                  <Check size={18} />
                  <span className="font-medium">{endOfTenancyPricing.guarantee}</span>
                </div>
              </div>

              {/* Main pricing grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                {endOfTenancyPricing.prices.map((plan, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.beds}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                          <Check size={16} className="text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="block text-center py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-lg font-medium transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                ))}
              </div>

              {/* Add-ons */}
              <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Optional Add-Ons
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {endOfTenancyPricing.addOns.map((addon, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-white rounded-lg p-4 border border-gray-200"
                    >
                      <span className="text-gray-700">{addon.name}</span>
                      <span className="font-semibold text-primary">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Deep Cleaning */}
          {activeTab === "deep-cleaning" && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="heading-2 text-gray-900 mb-4">{deepCleaningPricing.title}</h2>
                <p className="text-gray-600 text-lg">{deepCleaningPricing.description}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Pricing table */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Pricing by Property Size</h3>
                  <div className="space-y-4">
                    {deepCleaningPricing.prices.map((plan, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-primary/30 transition-colors"
                      >
                        <div>
                          <h4 className="font-semibold text-gray-900">{plan.beds}</h4>
                          <p className="text-sm text-gray-500">Approx. {plan.time}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary">{plan.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-8 w-full block text-center py-4 bg-accent hover:bg-accent-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>

                {/* What's included */}
                <div className="bg-primary/5 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">What&apos;s Included</h3>
                  <ul className="space-y-4">
                    {deepCleaningPricing.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-white" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Carpet & Upholstery */}
          {activeTab === "carpet" && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="heading-2 text-gray-900 mb-4">{carpetPricing.title}</h2>
                <p className="text-gray-600 text-lg">{carpetPricing.description}</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Carpet prices */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Carpet Cleaning</h3>
                  <div className="space-y-3">
                    {carpetPricing.carpet.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                      >
                        <div>
                          <span className="text-gray-800 font-medium">{item.name}</span>
                          <span className="text-gray-400 text-sm ml-2">({item.note})</span>
                        </div>
                        <span className="font-semibold text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upholstery prices */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Upholstery Cleaning</h3>
                  <div className="space-y-3">
                    {carpetPricing.upholstery.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-800 font-medium">{item.name}</span>
                        <span className="font-semibold text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Package deals */}
                <div className="bg-accent/10 rounded-2xl p-6 border-2 border-accent/30">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Package Deals</h3>
                  <div className="space-y-4">
                    {carpetPricing.packages.map((pkg, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-white rounded-lg p-4"
                      >
                        <div>
                          <span className="text-gray-800 font-medium">{pkg.name}</span>
                          <span className="block text-accent text-sm font-medium">{pkg.saving}</span>
                        </div>
                        <span className="text-xl font-bold text-primary">{pkg.price}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 w-full block text-center py-3 bg-accent hover:bg-accent-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    Book Package
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Price Note */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <Info size={24} className="text-primary flex-shrink-0 mt-1" />
            <div className="text-sm text-gray-600">
              <p className="mb-2">
                <strong>Please note:</strong> All prices are starting prices and may vary based on
                property condition, location, and specific requirements. Central London postcodes
                may incur a small surcharge.
              </p>
              <p>
                We provide free, no-obligation quotes tailored to your specific needs. Contact us
                for an accurate price for your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Book Your Clean?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a free, personalised quote for your property. We&apos;ll respond within 24 hours.
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
