"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { SERVICES, SERVICE_AREAS } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  area: string;
  propertyType: string;
  bedrooms: string;
  message: string;
  preferredContact: string;
}

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2";
  const errorClasses = "text-red-500 text-sm mt-1";

  if (isSubmitted) {
    return (
      <div className="bg-accent/10 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-white" />
        </div>
        <h3 className=" font-bold text-2xl text-gray-900 mb-2">
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name and Email row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name *
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            id="name"
            placeholder="John Smith"
            className={inputClasses}
          />
          {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address *
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            placeholder="john@example.com"
            className={inputClasses}
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone and Service row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number *
          </label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            type="tel"
            id="phone"
            placeholder="07123 456789"
            className={inputClasses}
          />
          {errors.phone && (
            <p className={errorClasses}>{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>
            Service Required *
          </label>
          <select
            {...register("service", { required: "Please select a service" })}
            id="service"
            className={inputClasses}
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className={errorClasses}>{errors.service.message}</p>
          )}
        </div>
      </div>

      {/* Area and Property Type row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="area" className={labelClasses}>
            Your Area
          </label>
          <select {...register("area")} id="area" className={inputClasses}>
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
            {...register("propertyType")}
            id="propertyType"
            className={inputClasses}
          >
            <option value="">Select property type</option>
            <option value="flat">Flat / Apartment</option>
            <option value="house">House</option>
            <option value="office">Office</option>
            <option value="shop">Retail / Shop</option>
            <option value="other">Other</option>
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
            {...register("bedrooms")}
            id="bedrooms"
            className={inputClasses}
          >
            <option value="">Select bedrooms</option>
            <option value="studio">Studio</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5+">5+ Bedrooms</option>
            <option value="na">Not Applicable</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredContact" className={labelClasses}>
            Preferred Contact Method
          </label>
          <select
            {...register("preferredContact")}
            id="preferredContact"
            className={inputClasses}
          >
            <option value="email">Email</option>
            <option value="phone">Phone Call</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Additional Details
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          placeholder="Tell us more about your cleaning needs, any specific requirements, preferred dates, etc."
          className={inputClasses}
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary text-lg py-4 gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
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
