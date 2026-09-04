import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions",
  description: "Find answers to common questions about Cleaning Apex services, booking, pricing, and policies. Professional cleaning services in London.",
};

const faqs = [
  {
    category: "Booking & Pricing",
    questions: [
      {
        q: "How do I book a cleaning service?",
        a: "You can book through our website by filling out the quote form, calling us directly, or sending us a WhatsApp message. We'll confirm your booking within 24 hours.",
      },
      {
        q: "How much do your cleaning services cost?",
        a: "Our prices start from £23/hour for regular domestic cleaning. End of tenancy and deep cleaning are priced based on property size. Visit our pricing page for detailed rates or request a free quote.",
      },
      {
        q: "Do you offer free quotes?",
        a: "Yes, all our quotes are completely free with no obligation. We'll provide a detailed breakdown of costs before you commit to anything.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, debit/credit cards, and cash. Payment is typically due after the cleaning is completed to your satisfaction.",
      },
      {
        q: "Can I cancel or reschedule my booking?",
        a: "Yes, you can cancel or reschedule with at least 24 hours notice at no charge. Cancellations with less than 24 hours notice may incur a fee.",
      },
    ],
  },
  {
    category: "Services",
    questions: [
      {
        q: "What cleaning services do you offer?",
        a: "We offer domestic cleaning, commercial cleaning, end of tenancy cleaning, deep cleaning, office cleaning, and carpet & upholstery cleaning. Each service can be customised to your needs.",
      },
      {
        q: "Do you bring your own cleaning supplies?",
        a: "Yes, we bring all necessary cleaning supplies and equipment. If you prefer us to use specific products (e.g., eco-friendly or hypoallergenic), just let us know.",
      },
      {
        q: "What's included in a deep clean?",
        a: "Deep cleaning covers everything in a regular clean plus inside cupboards, behind appliances, light fixtures, skirting boards, door frames, and other hard-to-reach areas.",
      },
      {
        q: "Do you clean windows?",
        a: "We clean interior windows as part of our service. External window cleaning can be arranged as an add-on service.",
      },
      {
        q: "Can you clean on weekends or evenings?",
        a: "Yes, we offer flexible scheduling including Saturdays. Evening slots may be available depending on your area. Just ask when booking.",
      },
    ],
  },
  {
    category: "Trust & Safety",
    questions: [
      {
        q: "Are your cleaners insured?",
        a: "Yes, we are fully insured with public liability coverage up to £5 million. This protects you and your property during every clean.",
      },
      {
        q: "Are your cleaners vetted?",
        a: "Absolutely. All our cleaners undergo thorough background checks, including DBS (criminal record) checks and reference verification.",
      },
      {
        q: "Do I need to be home during the clean?",
        a: "No, many clients provide us with keys or access codes. All our staff are fully vetted and insured, so you can trust us with access to your property.",
      },
      {
        q: "What if something gets damaged?",
        a: "In the rare event of damage, our insurance covers it. Report any issues within 24 hours and we'll resolve it promptly.",
      },
      {
        q: "Will I have the same cleaner each time?",
        a: "We try to assign the same cleaner for regular bookings so they become familiar with your home and preferences. If your regular cleaner is unavailable, we'll notify you in advance.",
      },
    ],
  },
  {
    category: "End of Tenancy",
    questions: [
      {
        q: "What's included in end of tenancy cleaning?",
        a: "Our end of tenancy clean covers the entire property to inventory standards: all rooms, kitchen appliances inside and out, bathrooms, windows (interior), and more.",
      },
      {
        q: "Do you guarantee I'll get my deposit back?",
        a: "Yes! We offer a deposit-back guarantee. If your landlord or letting agent isn't satisfied, we'll return to re-clean the areas of concern for free.",
      },
      {
        q: "How long does end of tenancy cleaning take?",
        a: "Typically 4-8 hours depending on property size and condition. A studio flat takes around 4 hours, while a 3-bed house may take 6-8 hours.",
      },
      {
        q: "Should I clean before you arrive?",
        a: "No need! Just ensure the property is empty of personal belongings. We'll handle everything from there.",
      },
    ],
  },
  {
    category: "Service Areas",
    questions: [
      {
        q: "What areas do you cover?",
        a: "We cover all London boroughs and surrounding areas including Watford, Croydon, Bromley, and more. Use our postcode checker or contact us to confirm coverage.",
      },
      {
        q: "Do you charge extra for travel?",
        a: "No, there are no travel charges within our standard coverage area. For locations outside our usual zones, we may discuss a small travel fee.",
      },
      {
        q: "How quickly can you start?",
        a: "We can often accommodate bookings within 48-72 hours. For urgent requests, same-day or next-day service may be available.",
      },
    ],
  },
];

export default function FAQPage() {
  // Generate FAQ Schema from all questions
  const allFaqs = faqs.flatMap((category) =>
    category.questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.a,
      },
    }))
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Find answers to common questions about our cleaning services,
            booking process, and policies.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {category.category}
                </h2>
                <FAQAccordion
                  variant="bordered"
                  items={category.questions.map((faq) => ({
                    question: faq.q,
                    answer: faq.a,
                  }))}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-3 text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Can&apos;t find what you&apos;re looking for? Our friendly team is
              here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Phone size={20} />
                {COMPANY_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle size={20} />
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
