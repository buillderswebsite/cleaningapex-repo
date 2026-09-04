"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Gift, ArrowRight } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    const hasShown = sessionStorage.getItem("exitPopupShown");
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    // Only add listener after a delay
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsVisible(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-slide-up">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-accent to-accent-600 p-8 text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift size={32} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Wait! Don&apos;t Leave Yet!
          </h2>
          <p className="text-white/90">
            Get 10% off your first cleaning
          </p>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <p className="text-gray-600 mb-6">
            Book within the next 48 hours and use code <strong className="text-accent">WELCOME10</strong> to save on your first clean.
          </p>

          <div className="space-y-3">
            <Link
              href="/contact"
              onClick={() => setIsVisible(false)}
              className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-600 text-white font-semibold py-4 rounded-xl transition-colors"
            >
              Claim My 10% Off
              <ArrowRight size={20} />
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="w-full text-gray-500 hover:text-gray-700 py-2 text-sm transition-colors"
            >
              No thanks, I&apos;ll pay full price
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-6">
            *Offer valid for new customers only. Cannot be combined with other offers.
          </p>
        </div>
      </div>
    </div>
  );
}
