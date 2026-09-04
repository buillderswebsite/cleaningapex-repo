"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AnimatedServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image?: string;
  variant?: "reveal" | "flip" | "lift";
}

export default function AnimatedServiceCard({
  id,
  title,
  description,
  features,
  icon: Icon,
  image,
  variant = "reveal",
}: AnimatedServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (variant === "flip") {
    return (
      <div
        className="group perspective-1000 h-80"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
            isHovered ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <Icon size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={`/services#${id}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors mt-4"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "lift") {
    return (
      <Link
        href={`/services#${id}`}
        className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      >
        {/* Image */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon size={24} className="text-white" />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
            View Details
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    );
  }

  // Default: reveal variant
  return (
    <div
      className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary to-primary-700 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div className="relative p-8 transition-colors duration-300">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
            isHovered ? "bg-white/20" : "bg-primary/10"
          }`}
        >
          <Icon
            size={28}
            className={`transition-colors duration-300 ${
              isHovered ? "text-white" : "text-primary"
            }`}
          />
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-bold mb-3 transition-colors duration-300 ${
            isHovered ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm mb-4 transition-colors duration-300 ${
            isHovered ? "text-white/80" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        {/* Features (revealed on hover) */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-2 mb-4">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-white/90 text-sm">
                <Check size={16} className="mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link
          href={`/services#${id}`}
          className={`inline-flex items-center gap-2 font-medium text-sm transition-all duration-300 ${
            isHovered ? "text-white" : "text-primary"
          }`}
        >
          Learn More
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
