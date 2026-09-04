"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutQuad = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeOutQuad * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface AnimatedCounterProps {
  stats: StatItem[];
  variant?: "default" | "cards" | "minimal";
}

export default function AnimatedCounter({ stats, variant = "default" }: AnimatedCounterProps) {
  if (variant === "cards") {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
          >
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
              <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className="flex flex-wrap justify-center gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    );
  }

  // Default variant - for dark backgrounds
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      {stats.map((stat, index) => (
        <div key={index}>
          <p className="text-4xl md:text-5xl font-bold text-white mb-2">
            <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
          </p>
          <p className="text-blue-200">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
