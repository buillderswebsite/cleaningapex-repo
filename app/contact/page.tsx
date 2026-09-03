import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import Map from "@/components/Map";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get a Free Quote | Contact Us",
  description:
    "Request a free cleaning quote from Cleaning Apex. Professional cleaning services across London. Contact us by phone, email, or fill out our quick quote form.",
  openGraph: {
    title: "Get a Free Quote | Cleaning Apex",
    description:
      "Request a free cleaning quote. Professional cleaning services across London and surrounding areas.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Get a Free Quote</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 24
            hours with a competitive, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="heading-3 text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Prefer to speak to someone directly? We&apos;re here to help.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a
                        href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                        className="text-primary hover:text-primary-600 transition-colors font-medium"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Mon-Fri: {COMPANY_INFO.hours.weekdays}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-primary hover:text-primary-600 transition-colors font-medium"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                      <p className="text-gray-600">
                        {COMPANY_INFO.address.street}
                        <br />
                        {COMPANY_INFO.address.city},{" "}
                        {COMPANY_INFO.address.postcode}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Business Hours
                      </h3>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>
                          <span className="text-gray-700 font-medium">
                            Mon-Fri:
                          </span>{" "}
                          {COMPANY_INFO.hours.weekdays}
                        </p>
                        <p>
                          <span className="text-gray-700 font-medium">Sat:</span>{" "}
                          {COMPANY_INFO.hours.saturday}
                        </p>
                        <p>
                          <span className="text-gray-700 font-medium">Sun:</span>{" "}
                          {COMPANY_INFO.hours.sunday}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="mt-8 p-6 bg-accent/5 rounded-xl border border-accent/20">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Free, no-obligation quotes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Fully insured & vetted cleaners
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Flexible scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Satisfaction guaranteed
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="heading-3 text-gray-900 mb-2">
                  Request Your Free Quote
                </h2>
                <p className="text-gray-600 mb-8">
                  Tell us about your cleaning needs and we&apos;ll provide a
                  detailed quote within 24 hours.
                </p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="heading-3 text-gray-900 mb-3">Our Service Area</h2>
            <p className="text-gray-600">
              Serving all London boroughs and surrounding areas
            </p>
          </div>
          <Map height="400px" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How quickly can you start?",
                  a: "In most cases, we can schedule your first clean within 48-72 hours of confirming your booking. For urgent requests, same-day or next-day service may be available depending on your area.",
                },
                {
                  q: "What's included in the quote?",
                  a: "Our quotes include all labour, equipment, and cleaning products. There are no hidden fees. If any additional services are recommended after our assessment, we'll always discuss this with you first.",
                },
                {
                  q: "Do I need to be home during the clean?",
                  a: "Not necessarily. Many of our clients provide us with keys or access codes. All our staff are fully vetted and insured, so you can trust us with access to your property.",
                },
                {
                  q: "What if I'm not satisfied with the clean?",
                  a: "Your satisfaction is our priority. If you're not completely happy, let us know within 24 hours and we'll return to re-clean the areas of concern at no extra charge.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
