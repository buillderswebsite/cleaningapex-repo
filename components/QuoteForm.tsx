"use client";

import { useState, useEffect, FormEvent } from "react";
import { Send, CheckCircle, Loader2, Calculator } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

const serviceOptions = [
  { id: "domestic-regular", name: "Regular Domestic Cleaning", price: 23, unit: "/hour", minHours: 3 },
  { id: "domestic-oneoff", name: "One-Off Domestic Cleaning", price: 28, unit: "/hour", minHours: 3 },
  { id: "deep-cleaning", name: "Deep Cleaning", price: 0, unit: "fixed", minHours: 0 },
  { id: "end-of-tenancy", name: "End of Tenancy Cleaning", price: 0, unit: "fixed", minHours: 0 },
  { id: "commercial", name: "Commercial/Office Cleaning", price: 24, unit: "/hour", minHours: 2 },
  { id: "carpet", name: "Carpet & Upholstery Cleaning", price: 0, unit: "fixed", minHours: 0 },
];

const bedroomPricing = {
  "deep-cleaning": [
    { beds: "studio", label: "Studio", price: 179 },
    { beds: "1", label: "1 Bedroom", price: 219 },
    { beds: "2", label: "2 Bedrooms", price: 279 },
    { beds: "3", label: "3 Bedrooms", price: 359 },
    { beds: "4", label: "4 Bedrooms", price: 439 },
    { beds: "5+", label: "5+ Bedrooms", price: 519 },
  ],
  "end-of-tenancy": [
    { beds: "studio", label: "Studio", price: 159 },
    { beds: "1", label: "1 Bedroom", price: 189 },
    { beds: "2", label: "2 Bedrooms", price: 239 },
    { beds: "3", label: "3 Bedrooms", price: 299 },
    { beds: "4", label: "4 Bedrooms", price: 369 },
    { beds: "5+", label: "5+ Bedrooms", price: 449 },
  ],
};

const addOnOptions = [
  { id: "oven", name: "Oven Deep Clean", price: 45 },
  { id: "fridge", name: "Fridge Deep Clean", price: 25 },
  { id: "carpet-room", name: "Carpet Cleaning (per room)", price: 40 },
  { id: "windows-inside", name: "Inside Windows", price: 30 },
  { id: "balcony", name: "Balcony/Patio", price: 30 },
  { id: "extra-bathroom", name: "Extra Bathroom", price: 35 },
];

const carpetOptions = [
  { id: "carpet-1room", name: "1 Room", price: 40 },
  { id: "carpet-2room", name: "2 Rooms", price: 75 },
  { id: "carpet-3room", name: "3 Rooms", price: 99 },
  { id: "carpet-4room", name: "4 Rooms", price: 129 },
  { id: "sofa-2seat", name: "2-Seater Sofa", price: 65 },
  { id: "sofa-3seat", name: "3-Seater Sofa", price: 85 },
  { id: "sofa-corner", name: "Corner Sofa", price: 120 },
];

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [selectedService, setSelectedService] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [hours, setHours] = useState(3);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedCarpetOptions, setSelectedCarpetOptions] = useState<string[]>([]);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const currentService = serviceOptions.find(s => s.id === selectedService);
  const isCarpetService = selectedService === "carpet";
  const needsBedrooms = selectedService === "deep-cleaning" || selectedService === "end-of-tenancy";

  // Calculate price
  useEffect(() => {
    let total = 0;

    if (selectedService) {
      const service = serviceOptions.find(s => s.id === selectedService);

      if (service) {
        if (service.unit === "/hour") {
          total += service.price * hours;
        } else if (needsBedrooms && bedrooms) {
          const pricing = bedroomPricing[selectedService as keyof typeof bedroomPricing];
          const bedroomPrice = pricing?.find(p => p.beds === bedrooms);
          if (bedroomPrice) {
            total += bedroomPrice.price;
          }
        }
      }
    }

    selectedAddOns.forEach(addonId => {
      const addon = addOnOptions.find(a => a.id === addonId);
      if (addon) total += addon.price;
    });

    selectedCarpetOptions.forEach(optionId => {
      const option = carpetOptions.find(o => o.id === optionId);
      if (option) total += option.price;
    });

    setEstimatedPrice(total);
  }, [selectedService, bedrooms, hours, selectedAddOns, selectedCarpetOptions, needsBedrooms]);

  const toggleAddOn = (addonId: string) => {
    setSelectedAddOns(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const toggleCarpetOption = (optionId: string) => {
    setSelectedCarpetOptions(prev =>
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const getSelectedAddOnsText = () => {
    return selectedAddOns.map(id => {
      const addon = addOnOptions.find(a => a.id === id);
      return addon ? `${addon.name} (£${addon.price})` : "";
    }).filter(Boolean).join(", ") || "None";
  };

  const getSelectedCarpetOptionsText = () => {
    return selectedCarpetOptions.map(id => {
      const option = carpetOptions.find(o => o.id === id);
      return option ? `${option.name} (£${option.price})` : "";
    }).filter(Boolean).join(", ") || "None";
  };

  const getBedroomsLabel = () => {
    if (!needsBedrooms || !bedrooms) return "N/A";
    const pricing = bedroomPricing[selectedService as keyof typeof bedroomPricing];
    const bedroomOption = pricing?.find(p => p.beds === bedrooms);
    return bedroomOption ? `${bedroomOption.label} (£${bedroomOption.price})` : "N/A";
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    // Add calculated fields
    formData.set("selectedService", currentService?.name || "Not selected");
    formData.set("propertySize", getBedroomsLabel());
    formData.set("hoursBooked", currentService?.unit === "/hour" ? `${hours} hours` : "N/A");
    formData.set("selectedAddOns", getSelectedAddOnsText());
    formData.set("carpetUpholsteryItems", getSelectedCarpetOptionsText());
    formData.set("estimatedTotal", `£${estimatedPrice}`);

    try {
      const response = await fetch("https://formspree.io/f/xvkorqwn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2";
  const checkboxClasses = "w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary";

  if (isSubmitted) {
    return (
      <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-white" />
        </div>
        <h3 className="font-bold text-2xl text-gray-900 mb-2">
          Request Received
        </h3>
        <p className="text-gray-600 mb-2">
          Thank you for your booking request.
        </p>
        {estimatedPrice > 0 && (
          <p className="text-gray-600 mb-4">
            Estimated total: <span className="font-bold text-primary">£{estimatedPrice}</span>
          </p>
        )}
        <p className="text-gray-600 mb-6">
          We will confirm availability and final pricing within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setSelectedService("");
            setBedrooms("");
            setHours(3);
            setSelectedAddOns([]);
            setSelectedCarpetOptions([]);
            setAgreedToTerms(false);
          }}
          className="text-primary font-medium hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Price Estimate Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-700 text-white rounded-xl p-4 md:p-6 sticky top-20 z-20 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Calculator size={20} />
            </div>
            <div>
              <p className="text-xs text-blue-200 uppercase tracking-wide">Estimated Price</p>
              <p className="text-xs text-blue-200">Final price confirmed after booking</p>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-2xl md:text-3xl font-bold">
              {estimatedPrice > 0 ? `£${estimatedPrice}` : "Select options"}
            </span>
            {currentService?.unit === "/hour" && estimatedPrice > 0 && (
              <p className="text-sm text-blue-200">for {hours} hours</p>
            )}
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Service Selection */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">1. Select Your Service</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {serviceOptions.map((service) => (
            <button
              type="button"
              key={service.id}
              onClick={() => {
                setSelectedService(service.id);
                setBedrooms("");
                setSelectedCarpetOptions([]);
              }}
              className={`flex flex-col items-start p-4 rounded-lg border-2 text-left transition-all ${
                selectedService === service.id
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-primary/50 bg-white"
              }`}
            >
              <span className="font-medium text-gray-900">{service.name}</span>
              {service.price > 0 && (
                <span className="text-sm text-primary font-semibold">
                  £{service.price}{service.unit} (min {service.minHours}hrs)
                </span>
              )}
              {service.price === 0 && (
                <span className="text-sm text-gray-500">
                  Price based on selection
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bedrooms Selection */}
      {needsBedrooms && (
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">2. Select Property Size</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {bedroomPricing[selectedService as keyof typeof bedroomPricing]?.map((option) => (
              <button
                type="button"
                key={option.beds}
                onClick={() => setBedrooms(option.beds)}
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all ${
                  bedrooms === option.beds
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-primary/50 bg-white"
                }`}
              >
                <span className="font-medium text-gray-900">{option.label}</span>
                <span className="text-lg font-bold text-primary">£{option.price}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hours Selection */}
      {currentService?.unit === "/hour" && (
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">2. How Many Hours?</h3>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={currentService.minHours}
              max="8"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center">
              {hours} hrs
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            £{currentService.price}/hour = £{currentService.price * hours} total
          </p>
        </div>
      )}

      {/* Carpet Options */}
      {isCarpetService && (
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">2. Select Items to Clean</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {carpetOptions.map((option) => (
              <label
                key={option.id}
                className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedCarpetOptions.includes(option.id)
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-primary/50 bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedCarpetOptions.includes(option.id)}
                    onChange={() => toggleCarpetOption(option.id)}
                    className={checkboxClasses}
                  />
                  <span className="font-medium text-gray-900">{option.name}</span>
                </div>
                <span className="font-bold text-primary">£{option.price}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Add-ons */}
      {(selectedService && !isCarpetService) && (
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">Optional Add-Ons</h3>
          <p className="text-gray-500 text-sm mb-4">Select any additional services</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {addOnOptions.map((addon) => (
              <label
                key={addon.id}
                className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedAddOns.includes(addon.id)
                    ? "border-accent bg-accent/5"
                    : "border-gray-200 hover:border-accent/50 bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(addon.id)}
                    onChange={() => toggleAddOn(addon.id)}
                    className={checkboxClasses}
                  />
                  <span className="font-medium text-gray-900">{addon.name}</span>
                </div>
                <span className="font-bold text-accent">+£{addon.price}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Contact Details */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">Your Details</h3>

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
          </div>

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
          </div>

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
        </div>

        <div className="mt-6">
          <label htmlFor="address" className={labelClasses}>
            Property Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="123 Example Street, London"
            className={inputClasses}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="preferredDate" className={labelClasses}>
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="preferredTime" className={labelClasses}>
              Preferred Time
            </label>
            <select id="preferredTime" name="preferredTime" className={inputClasses}>
              <option value="Flexible">Flexible</option>
              <option value="Morning (8am-12pm)">Morning (8am-12pm)</option>
              <option value="Afternoon (12pm-4pm)">Afternoon (12pm-4pm)</option>
              <option value="Evening (4pm-7pm)">Evening (4pm-7pm)</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="message" className={labelClasses}>
            Special Requests or Notes
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Any access instructions, specific areas to focus on, or other requirements..."
            className={inputClasses}
          />
        </div>
      </div>

      {/* Price Summary */}
      {estimatedPrice > 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Booking Summary</h3>
          <div className="space-y-2 text-sm">
            {selectedService && (
              <div className="flex justify-between">
                <span>{currentService?.name}</span>
                <span className="font-medium">
                  {currentService?.unit === "/hour"
                    ? `£${currentService.price} x ${hours}hrs = £${currentService.price * hours}`
                    : bedrooms
                      ? `£${bedroomPricing[selectedService as keyof typeof bedroomPricing]?.find(p => p.beds === bedrooms)?.price}`
                      : ""
                  }
                </span>
              </div>
            )}
            {selectedCarpetOptions.map(id => {
              const option = carpetOptions.find(o => o.id === id);
              return option && (
                <div key={id} className="flex justify-between text-gray-600">
                  <span>{option.name}</span>
                  <span>£{option.price}</span>
                </div>
              );
            })}
            {selectedAddOns.map(id => {
              const addon = addOnOptions.find(a => a.id === id);
              return addon && (
                <div key={id} className="flex justify-between text-gray-600">
                  <span>{addon.name}</span>
                  <span>+£{addon.price}</span>
                </div>
              );
            })}
            <div className="border-t border-gray-300 pt-2 mt-2 flex justify-between text-lg font-bold">
              <span>Estimated Total</span>
              <span className="text-primary">£{estimatedPrice}</span>
            </div>
          </div>
        </div>
      )}

      {/* Terms Agreement */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="w-5 h-5 mt-0.5 text-primary border-gray-300 rounded focus:ring-primary flex-shrink-0"
          />
          <span className="text-sm text-gray-700">
            I have read and agree to the{" "}
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a
              href="/terms#cancellation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Cancellation Policy
            </a>
            .
          </span>
        </label>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting || !agreedToTerms}
        className="w-full bg-primary hover:bg-primary-600 text-white text-lg py-4 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors shadow-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            <Send size={20} />
            {estimatedPrice > 0 ? `Request Booking - £${estimatedPrice}` : "Request Quote"}
          </>
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">
        We will confirm availability and final pricing within 24 hours. No payment required now.
      </p>
    </form>
  );
}
