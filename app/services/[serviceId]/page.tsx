import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, CheckCircle, Clock, Shield, Sparkles, Star } from "lucide-react";
import { SERVICES, COMPANY_INFO, TESTIMONIALS } from "@/lib/constants";
import FAQAccordion from "@/components/FAQAccordion";

interface Props {
  params: Promise<{ serviceId: string }>;
}

// Extended service data with FAQs and pricing
const SERVICE_DETAILS: Record<string, {
  faqs: { question: string; answer: string }[];
  pricing: string;
  duration: string;
  benefits: string[];
}> = {
  domestic: {
    faqs: [
      { question: "How often should I book domestic cleaning?", answer: "We recommend weekly or bi-weekly cleaning for most households. This maintains a consistently clean home without letting dirt and dust accumulate." },
      { question: "Do I need to be home during the clean?", answer: "No, many clients provide us with keys or access codes. All our cleaners are fully vetted and insured, so you can trust us with access to your home." },
      { question: "What products do you use?", answer: "We use professional-grade, eco-friendly cleaning products that are safe for families and pets. If you have specific preferences, just let us know." },
      { question: "Can I request the same cleaner each time?", answer: "Yes! We try to assign the same cleaner for regular bookings so they become familiar with your home and preferences." },
    ],
    pricing: "From £23/hour",
    duration: "2-4 hours",
    benefits: ["Consistent, reliable service", "Flexible scheduling", "Same cleaner each visit", "All supplies included"],
  },
  commercial: {
    faqs: [
      { question: "Do you offer after-hours cleaning?", answer: "Yes, we specialise in after-hours cleaning to minimise disruption to your business operations. We can work evenings, nights, or weekends." },
      { question: "Can you clean multiple office locations?", answer: "Absolutely. We serve businesses with multiple locations across London and can coordinate cleaning schedules across all your sites." },
      { question: "What's included in commercial cleaning?", answer: "Our commercial cleaning covers workstations, common areas, kitchens, washrooms, floors, and waste management. We can customise the service to your needs." },
      { question: "Do you provide specialist cleaning equipment?", answer: "Yes, we bring all professional-grade equipment including industrial vacuums, floor polishers, and sanitisation equipment." },
    ],
    pricing: "Custom quotes",
    duration: "Varies by size",
    benefits: ["After-hours availability", "Customised cleaning plans", "Regular or one-off service", "Fully insured team"],
  },
  "end-of-tenancy": {
    faqs: [
      { question: "Will this help me get my deposit back?", answer: "Yes! We offer a deposit-back guarantee. Our end of tenancy cleaning meets inventory standards. If your landlord or agent isn't satisfied, we'll return to re-clean for free." },
      { question: "How long does end of tenancy cleaning take?", answer: "Typically 4-8 hours depending on property size and condition. A studio flat takes around 4 hours, while a 3-bed house may take 6-8 hours." },
      { question: "Should I clean before you arrive?", answer: "No need! Just ensure the property is empty of personal belongings. We'll handle everything from there." },
      { question: "Do you clean ovens and appliances?", answer: "Yes, oven and appliance cleaning inside and out is included in our end of tenancy service." },
    ],
    pricing: "From £159",
    duration: "4-8 hours",
    benefits: ["Deposit-back guarantee", "Inventory standard cleaning", "Oven & appliance cleaning", "Carpet cleaning available"],
  },
  "deep-cleaning": {
    faqs: [
      { question: "What's the difference between deep cleaning and regular cleaning?", answer: "Deep cleaning goes beyond surface cleaning to tackle built-up grime, inside cupboards, behind appliances, light fixtures, and areas often missed in regular cleans." },
      { question: "How often should I book a deep clean?", answer: "We recommend a deep clean every 3-6 months, or after events like renovations, moving in, or seasonal changes." },
      { question: "Can you deep clean specific rooms only?", answer: "Yes, we can focus on specific areas like kitchens or bathrooms if that's what you need." },
      { question: "Is deep cleaning suitable for all homes?", answer: "Yes, deep cleaning benefits all homes, whether they're regularly maintained or haven't been cleaned in a while." },
    ],
    pricing: "From £179",
    duration: "4-8 hours",
    benefits: ["Inside cupboards & drawers", "Behind appliances", "Light fixtures & fans", "Skirting boards & door frames"],
  },
  office: {
    faqs: [
      { question: "How do you handle security in offices?", answer: "Our team members are DBS-checked and trained in confidentiality. We can work with your security protocols and sign NDAs if required." },
      { question: "Can you clean during working hours?", answer: "Yes, we can clean discreetly during office hours, focusing on common areas and washrooms while avoiding busy workspaces." },
      { question: "Do you provide washroom supplies?", answer: "We can include washroom supply replenishment as part of your package, including soap, paper towels, and toilet rolls." },
      { question: "What about COVID-19 safety measures?", answer: "We follow all health guidelines with regular sanitisation, PPE usage, and can provide enhanced disinfection services." },
    ],
    pricing: "Custom quotes",
    duration: "Varies by size",
    benefits: ["Flexible scheduling", "DBS-checked staff", "Washroom maintenance", "Meeting room preparation"],
  },
  carpet: {
    faqs: [
      { question: "How long does carpet cleaning take to dry?", answer: "With our professional hot water extraction method, carpets typically dry within 4-6 hours, faster with good ventilation." },
      { question: "Can you remove pet stains and odours?", answer: "Yes, we use specialised treatments for pet stains and odours that neutralise smells and remove marks." },
      { question: "Do you clean upholstery as well?", answer: "Yes, we offer upholstery cleaning for sofas, chairs, and mattresses using appropriate techniques for each fabric type." },
      { question: "Is carpet cleaning safe for children and pets?", answer: "Absolutely. We use eco-friendly, non-toxic solutions that are safe for families and pets once dry." },
    ],
    pricing: "From £50 per room",
    duration: "30-60 mins per room",
    benefits: ["Hot water extraction", "Stain removal treatment", "Quick drying times", "Deodorising included"],
  },
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    serviceId: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId } = await params;
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} London | Professional ${service.title} Services`,
    description: `${service.description} Fully insured, vetted cleaners. Free quotes available. Serving all London areas.`,
    openGraph: {
      title: `${service.title} in London | Cleaning Apex`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { serviceId } = await params;
  const service = SERVICES.find((s) => s.id === serviceId);
  const details = SERVICE_DETAILS[serviceId];

  if (!service || !details) {
    notFound();
  }

  // Get related testimonial
  const relatedTestimonial = TESTIMONIALS.find(
    (t) => t.service.toLowerCase().includes(service.title.toLowerCase().split(" ")[0])
  ) || TESTIMONIALS[0];

  // JSON-LD Schema for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Cleaning Apex & Facility Services",
      telephone: COMPANY_INFO.phone,
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: details.pricing,
        priceCurrency: "GBP",
      },
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: details.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                Professional Service
              </span>
              <h1 className="heading-1 text-white mb-4">
                {service.title} in London
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white">
                  <Clock size={20} className="text-secondary" />
                  <span>{details.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Sparkles size={20} className="text-secondary" />
                  <span>{details.pricing}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight size={20} />
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                >
                  <Phone size={20} />
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 text-gray-900 mb-6">
                What&apos;s Included
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="heading-2 text-gray-900 mb-6">
                Why Choose Us
              </h2>
              <div className="space-y-4">
                {details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Shield size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-700 mb-6">
              &ldquo;{relatedTestimonial.text}&rdquo;
            </blockquote>
            <p className="font-semibold text-gray-900">{relatedTestimonial.name}</p>
            <p className="text-gray-500">{relatedTestimonial.location}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion
              variant="bordered"
              items={details.faqs}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready to Book Your {service.title}?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. {details.pricing} with fully insured, vetted professionals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
