"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { SERVICES, SERVICE_AREAS } from "@/lib/constants";

export default function QuoteForm() {
  const [state, handleSubmit] = useForm("xvkorqwn");

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2";

  if (state.succeeded) {
    return (
      <div className="bg-accent/10 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-white" />
        </div>
        <h3 className="font-bold text-2xl text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600">
          We&apos;ve received your quote request and will get back to you within
          24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Smith"
            className={inputClasses}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            className={inputClasses}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>
      </div>

      {/* Phone and Service row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="07123 456789"
            className={inputClasses}
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            required
            className={inputClasses}
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>
      </div>

      {/* Area and Property Type row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="area" className={labelClasses}>
            Your Area
          </label>
          <select id="area" name="area" className={inputClasses}>
            <option value="">Select your area</option>
            <optgroup label="London Boroughs">
              {SERVICE_AREAS.london.slice(0, 15).map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </optgroup>
            <optgroup label="Surrounding Areas">
              {SERVICE_AREAS.surrounding.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <div>
          <label htmlFor="propertyType" className={labelClasses}>
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            className={inputClasses}
          >
            <option value="">Select property type</option>
            <option value="Flat / Apartment">Flat / Apartment</option>
            <option value="House">House</option>
            <option value="Office">Office</option>
            <option value="Retail / Shop">Retail / Shop</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Bedrooms and Preferred Contact */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="bedrooms" className={labelClasses}>
            Number of Bedrooms
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            className={inputClasses}
          >
            <option value="">Select bedrooms</option>
            <option value="Studio">Studio</option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedrooms">2 Bedrooms</option>
            <option value="3 Bedrooms">3 Bedrooms</option>
            <option value="4 Bedrooms">4 Bedrooms</option>
            <option value="5+ Bedrooms">5+ Bedrooms</option>
            <option value="Not Applicable">Not Applicable</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredContact" className={labelClasses}>
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            className={inputClasses}
          >
            <option value="Email">Email</option>
            <option value="Phone Call">Phone Call</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us more about your cleaning needs, any specific requirements, preferred dates, etc."
          className={inputClasses}
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full btn-primary text-lg py-4 gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Get My Free Quote
          </>
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">
        We&apos;ll respond within 24 hours. Your information is secure and will
        never be shared.
      </p>
    </form>
  );
}
