import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export default function Testimonial({
  name,
  location,
  rating,
  text,
  service,
}: TestimonialProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-primary/10">
        <Quote size={48} />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={20}
            className={
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
            }
          />
        ))}
      </div>

      {/* Testimonial text */}
      <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Service badge */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-sm rounded-full">
          {service}
        </span>
      </div>
    </div>
  );
}
