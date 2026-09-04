"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  variant?: "default" | "minimal" | "bordered";
}

export default function FAQAccordion({ items, variant = "default" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (variant === "minimal") {
    return (
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 last:border-0"
          >
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full py-4 text-left group"
            >
              <span className="font-medium text-gray-900 group-hover:text-primary transition-colors pr-4">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                openIndex === index ? "max-h-96 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "bordered") {
    return (
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "border-primary bg-primary/5"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full p-5 text-left"
            >
              <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index
                    ? "bg-primary text-white rotate-180"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="px-5 pb-5 text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-white rounded-xl shadow-sm border overflow-hidden transition-all duration-300 ${
            openIndex === index
              ? "border-primary/30 shadow-md"
              : "border-gray-100 hover:shadow-md"
          }`}
        >
          <button
            onClick={() => toggle(index)}
            className="flex items-center justify-between w-full p-6 text-left group"
          >
            <span className="font-semibold text-lg text-gray-900 pr-4 group-hover:text-primary transition-colors">
              {item.question}
            </span>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                openIndex === index
                  ? "bg-primary text-white"
                  : "bg-primary/10 text-primary"
              }`}
            >
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-6 pb-6 text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
