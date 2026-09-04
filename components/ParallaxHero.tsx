"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

interface ParallaxHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showVideo?: boolean;
  videoUrl?: string;
  overlay?: "dark" | "gradient" | "none";
  height?: "full" | "large" | "medium";
}

export default function ParallaxHero({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Get Started",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  showVideo = false,
  videoUrl,
  overlay = "gradient",
  height = "large",
}: ParallaxHeroProps) {
  const [offsetY, setOffsetY] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setOffsetY(window.scrollY * 0.5);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heightClasses = {
    full: "min-h-screen",
    large: "min-h-[80vh]",
    medium: "min-h-[60vh]",
  };

  const overlayClasses = {
    dark: "bg-black/60",
    gradient: "bg-gradient-to-r from-black/70 via-black/50 to-transparent",
    none: "",
  };

  return (
    <>
      <section
        ref={heroRef}
        className={`relative ${heightClasses[height]} flex items-center overflow-hidden`}
      >
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${offsetY}px) scale(1.1)`,
          }}
        />

        {/* Overlay */}
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />

        {/* Animated gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            {/* Animated line */}
            <div className="w-20 h-1 bg-accent mb-8 animate-pulse" />

            {/* Title with staggered animation */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="inline-block animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                {subtitle}
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
              >
                {ctaText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {secondaryCtaText && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-white/20"
                >
                  {secondaryCtaText}
                </Link>
              )}

              {showVideo && videoUrl && (
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="inline-flex items-center gap-3 text-white font-semibold px-6 py-4 transition-colors hover:text-accent"
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
                    <Play size={24} fill="white" />
                  </div>
                  Watch Video
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && videoUrl && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              Close
            </button>
            <iframe
              src={videoUrl}
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
