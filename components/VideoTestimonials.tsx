"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Star, Quote } from "lucide-react";

interface VideoTestimonial {
  id: string;
  name: string;
  role?: string;
  location?: string;
  thumbnail: string;
  videoUrl: string;
  quote?: string;
  rating?: number;
}

interface VideoTestimonialsProps {
  testimonials: VideoTestimonial[];
  title?: string;
  subtitle?: string;
}

export default function VideoTestimonials({
  testimonials,
  title = "What Our Clients Say",
  subtitle = "Real stories from real customers",
}: VideoTestimonialsProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="heading-2 text-gray-900 mt-3 mb-4">{title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Video Thumbnail */}
              <div
                className="relative aspect-video cursor-pointer overflow-hidden"
                onClick={() => setActiveVideo(testimonial.videoUrl)}
              >
                <Image
                  src={testimonial.thumbnail}
                  alt={`${testimonial.name} testimonial`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                    <Play size={28} className="text-primary ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration badge (optional) */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  2:30
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Quote */}
                {testimonial.quote && (
                  <div className="relative mb-4">
                    <Quote size={24} className="text-primary/20 absolute -top-1 -left-1" />
                    <p className="text-gray-600 text-sm italic pl-5 line-clamp-3">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                )}

                {/* Rating */}
                {testimonial.rating && (
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonial.rating!
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-200"
                        }
                      />
                    ))}
                  </div>
                )}

                {/* Author */}
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  {(testimonial.role || testimonial.location) && (
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                      {testimonial.role && testimonial.location && " • "}
                      {testimonial.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={activeVideo}
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
