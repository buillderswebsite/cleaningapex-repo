"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Clock, Sparkles } from "lucide-react";

interface UrgencyBannerProps {
  message?: string;
  ctaText?: string;
  ctaHref?: string;
  dismissible?: boolean;
}

export default function UrgencyBanner({
  message = "Book this week and get 10% off your first clean!",
  ctaText = "Book Now",
  ctaHref = "/contact",
  dismissible = true,
}: UrgencyBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-accent via-accent-600 to-accent text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-custom py-3 relative">
        <div className="flex items-center justify-center gap-4 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="animate-pulse" />
            <span className="font-medium">{message}</span>
          </div>

          <Link
            href={ctaHref}
            className="hidden sm:inline-flex items-center gap-1 bg-white text-accent font-semibold px-4 py-1.5 rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            <Clock size={14} />
            {ctaText}
          </Link>

          {dismissible && (
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
