"use client";

import { useState } from "react";
import { MapPin, CheckCircle, XCircle, Loader2 } from "lucide-react";
import Link from "next/link";

// London postcodes and surrounding areas we cover
const COVERED_POSTCODES = [
  // London postcodes
  "E", "EC", "N", "NW", "SE", "SW", "W", "WC",
  // Outer London
  "BR", "CR", "DA", "EN", "HA", "IG", "KT", "RM", "SM", "TW", "UB",
  // Surrounding areas
  "WD", "AL", "SL", "HP", "GU", "RH", "TN",
];

export default function PostcodeChecker() {
  const [postcode, setPostcode] = useState("");
  const [status, setStatus] = useState<"idle" | "checking" | "covered" | "not-covered">("idle");
  const [error, setError] = useState("");

  const checkPostcode = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Clean and validate postcode
    const cleaned = postcode.toUpperCase().replace(/\s/g, "");

    if (cleaned.length < 2) {
      setError("Please enter a valid postcode");
      return;
    }

    setStatus("checking");

    // Simulate a brief check
    setTimeout(() => {
      // Extract the outward code (first part before the space)
      const outwardCode = cleaned.match(/^[A-Z]{1,2}/)?.[0] || "";

      if (COVERED_POSTCODES.includes(outwardCode)) {
        setStatus("covered");
      } else {
        setStatus("not-covered");
      }
    }, 500);
  };

  const reset = () => {
    setPostcode("");
    setStatus("idle");
    setError("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <MapPin className="text-primary" size={24} />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Check Your Area</h3>
          <p className="text-gray-500 text-sm">Enter your postcode to see if we cover your area</p>
        </div>
      </div>

      {status === "idle" || status === "checking" ? (
        <form onSubmit={checkPostcode} className="space-y-4">
          <div>
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value.toUpperCase())}
              placeholder="e.g. SW1A 1AA"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg"
              maxLength={8}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={status === "checking"}
            className="w-full bg-primary hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {status === "checking" ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Checking...
              </>
            ) : (
              <>
                <MapPin size={20} />
                Check Coverage
              </>
            )}
          </button>
        </form>
      ) : status === "covered" ? (
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-accent" size={32} />
          </div>
          <h4 className="font-bold text-gray-900 text-xl mb-2">Great News!</h4>
          <p className="text-gray-600 mb-6">
            We cover the <strong>{postcode.toUpperCase()}</strong> area. Book your cleaning today!
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="flex-1 bg-accent hover:bg-accent-600 text-white font-semibold py-3 rounded-lg transition-colors text-center"
            >
              Get a Free Quote
            </Link>
            <button
              onClick={reset}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg transition-colors"
            >
              Check Another
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="text-orange-500" size={32} />
          </div>
          <h4 className="font-bold text-gray-900 text-xl mb-2">Outside Our Usual Area</h4>
          <p className="text-gray-600 mb-6">
            We don&apos;t typically cover <strong>{postcode.toUpperCase()}</strong>, but contact us
            anyway - we may still be able to help or recommend a trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="flex-1 bg-primary hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition-colors text-center"
            >
              Contact Us Anyway
            </Link>
            <button
              onClick={reset}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg transition-colors"
            >
              Check Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
