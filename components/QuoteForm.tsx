"use client";

import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
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
  { id: "ironing", name: "Ironing (per hour)", price: 20 },
  { id: "laundry", name: "Laundry Load", price: 15 },
];

const carpetOptions = [
  { id: "carpet-1room", name: "1 Room", price: 40 },
  { id: "carpet-2room", name: "2 Rooms", price: 75 },
  { id: "carpet-3room", name: "3 Rooms", price: 99 },
  { id: "carpet-4room", name: "4 Rooms", price: 129 },
  { id: "carpet-5room", name: "5 Rooms", price: 155 },
  { id: "carpet-stairs", name: "Staircase", price: 45 },
  { id: "sofa-2seat", name: "2-Seater Sofa", price: 65 },
  { id: "sofa-3seat", name: "3-Seater Sofa", price: 85 },
  { id: "sofa-corner", name: "Corner Sofa", price: 120 },
  { id: "armchair", name: "Armchair", price: 40 },
];

export default function QuoteForm() {
  const [formspreeState, handleFormspreeSubmit] = useForm("xvkorqwn");
  const [selectedService, setSelectedService] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [hours, setHours] = useState(3);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedCarpetOptions, setSelectedCarpetOptions] = useState<string[]>([]);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const currentService = serviceOptions.find(s => s.id === selectedService);
  const isFixedPrice = currentService?.unit === "fixed";
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

    // Add add-ons
    selectedAddOns.forEach(addonId => {
      const addon = addOnOptions.find(a => a.id === addonId);
      if (addon) total += addon.price;
    });

    // Add carpet options
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

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2";
  const checkboxClasses = "w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary";

  // Get selected items for form submission
  const getSelectedAddOnsText = () => {
    return selectedAddOns.map(id => {
      const addon = addOnOptions.find(a => a.id === id);
      return addon ? `${addon.name} (£${addon.price})` : "";
    }).filter(Boolean).join(", ");
  };

  const getSelectedCarpetOptionsText = () => {
    return selectedCarpetOptions.map(id => {
      const option = carpetOptions.find(o => o.id === id);
      return option ? `${option.name} (£${option.price})` : "";
    }).filter(Boolean).join(", ");
  };

  if (formspreeState.succeeded) {
    return (
      <div className="bg-accent/10 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-white" />
        </div>
        <h3 className="font-bold text-2xl text-gray-900 mb-2">
          Booking Request Received!
        </h3>
        <p className="text-gray-600 mb-4">
          We&apos;ve received your booking request for an estimated total of{" "}
          <span className="font-bold text-primary">£{estimatedPrice}</span>.
        </p>
        <p className="text-gray-600">
          We&apos;ll confirm availability and final pricing within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormspreeSubmit} className="space-y-8">
      {/* Price Estimate Banner */}
      <div className="bg-primary text-white rounded-xl p-6 sticky top-20 z-20 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calculator size={24} />
            <span className="font-medium">Estimated Price:</span>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold">
              {estimatedPrice > 0 ? `£${estimatedPrice}` : "Select options"}
            </span>
            {currentService?.unit === "/hour" && estimatedPrice > 0 && (
              <p className="text-sm text-blue-200">for {hours} hours</p>
            )}
          </div>
        </div>
        <p className="text-blue-200 text-sm mt-2">
          * Final price confirmed after booking. Prices may vary based on property condition.
        </p>
      </div>

      {/* Hidden fields for form submission */}
      <input type="hidden" name="estimatedPrice" value={`£${estimatedPrice}`} />
      <input type="hidden" name="selectedAddOns" value={getSelectedAddOnsText()} />
      <input type="hidden" name="selectedCarpetOptions" value={getSelectedCarpetOptionsText()} />

      {/* Service Selection */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">1. Select Your Service *</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {serviceOptions.map((service) => (
            <label
              key={service.id}
              className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedService === service.id
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-primary/50 bg-white"
              }`}
            >
              <input
                type="radio"
                name="service"
                value={service.name}
                checked={selectedService === service.id}
                onChange={() => {
                  setSelectedService(service.id);
                  setBedrooms("");
                  setSelectedCarpetOptions([]);
                }}
                className="w-5 h-5 text-primary"
                required
              />
              <div className="flex-1">
                <span className="font-medium text-gray-900">{service.name}</span>
                {service.price > 0 && (
                  <span className="block text-sm text-primary font-semibold">
                    £{service.price}{service.unit} (min {service.minHours}hrs)
                  </span>
                )}
                {service.price === 0 && (
                  <span className="block text-sm text-gray-500">
                    Price based on property size
                  </span>
                )}
              </div>
            </label>
          ))}
        </div>
        <ValidationError prefix="Service" field="service" errors={formspreeState.errors} className="text-red-500 text-sm mt-2" />
      </div>

      {/* Bedrooms Selection - for fixed price services */}
      {needsBedrooms && (
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">2. Select Property Size *</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {bedroomPricing[selectedService as keyof typeof bedroomPricing]?.map((option) => (
              <label
                key={option.beds}
                className={`flex flex-col items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  bedrooms === option.beds
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-primary/50 bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="bedrooms"
                  value={option.label}
                  checked={bedrooms === option.beds}
                  onChange={() => setBedrooms(option.beds)}
                  className="sr-only"
                  required={needsBedrooms}
                />
                <span className="font-medium text-gray-900">{option.label}</span>
                <span className="text-lg font-bold text-primary">£{option.price}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Hours Selection - for hourly services */}
      {currentService?.unit === "/hour" && (
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">2. How Many Hours? *</h3>
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
          <input type="hidden" name="hours" value={`${hours} hours`} />
          <p className="text-sm text-gray-500 mt-2">
            Minimum {currentService.minHours} hours. £{currentService.price}/hour = £{currentService.price * hours} total
          </p>
        </div>
      )}

      {/* Carpet & Upholstery Options */}
      {isCarpetService && (
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">2. Select Items to Clean *</h3>
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

      {/* Add-ons - show for relevant services */}
      {(selectedService && !isCarpetService) && (
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">Optional Add-Ons</h3>
          <p className="text-gray-500 text-sm mb-4">Select any additional services you need</p>
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
            <ValidationError prefix="Name" field="name" errors={formspreeState.errors} className="text-red-500 text-sm mt-1" />
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
            <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="text-red-500 text-sm mt-1" />
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
            <ValidationError prefix="Phone" field="phone" errors={formspreeState.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label htmlFor="area" className={labelClasses}>
              Your Area *
            </label>
            <select id="area" name="area" required className={inputClasses}>
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
            Property Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
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
              min={new Date().toISOString().split('T')[0]}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="preferredTime" className={labelClasses}>
              Preferred Time
            </label>
            <select id="preferredTime" name="preferredTime" className={inputClasses}>
              <option value="">Select time</option>
              <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
              <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
              <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
              <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
              <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
              <option value="Flexible">Flexible</option>
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
        <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Booking Summary</h3>
          <div className="space-y-2 text-sm">
            {selectedService && (
              <div className="flex justify-between">
                <span>{serviceOptions.find(s => s.id === selectedService)?.name}</span>
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
            <div className="border-t border-accent/30 pt-2 mt-2 flex justify-between text-lg font-bold">
              <span>Estimated Total</span>
              <span className="text-accent">£{estimatedPrice}</span>
            </div>
          </div>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={formspreeState.submitting || estimatedPrice === 0}
        className="w-full bg-accent hover:bg-accent-600 text-white text-lg py-4 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors shadow-lg"
      >
        {formspreeState.submitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Send size={20} />
            Book Now - £{estimatedPrice}
          </>
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">
        We&apos;ll confirm availability and final pricing within 24 hours. No payment required now.
      </p>
    </form>
  );
}
