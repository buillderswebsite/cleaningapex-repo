"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi! I'm interested in your cleaning services. Can you provide more information?"
  );

  const whatsappNumber = COMPANY_INFO.whatsapp.replace(/\s/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 md:bottom-8 right-4 md:right-6 z-50 group"
    >
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />

      {/* Button */}
      <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:pr-6">
        <MessageCircle size={28} className="flex-shrink-0" />
        <span className="hidden md:block font-medium whitespace-nowrap">
          Chat with us
        </span>
      </div>

      {/* Tooltip for mobile */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap md:hidden">
        Chat on WhatsApp
        <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-900" />
      </div>
    </a>
  );
}
