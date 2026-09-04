import { Shield, Star, Clock, CheckCircle, Award } from "lucide-react";

interface TrustBarProps {
  variant?: "light" | "dark" | "primary";
}

export default function TrustBar({ variant = "light" }: TrustBarProps) {
  const badges = [
    { icon: Shield, label: "Fully Insured" },
    { icon: CheckCircle, label: "Vetted Cleaners" },
    { icon: Star, label: "5★ Rated" },
    { icon: Clock, label: "Same-Day Available" },
    { icon: Award, label: "Satisfaction Guaranteed" },
  ];

  const bgClass = {
    light: "bg-gray-50 border-y border-gray-100",
    dark: "bg-gray-900",
    primary: "bg-primary",
  }[variant];

  const textClass = {
    light: "text-gray-600",
    dark: "text-gray-300",
    primary: "text-white/90",
  }[variant];

  const iconClass = {
    light: "text-primary",
    dark: "text-secondary",
    primary: "text-secondary",
  }[variant];

  return (
    <div className={bgClass}>
      <div className="container-custom py-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 text-sm ${textClass}`}
            >
              <badge.icon size={18} className={iconClass} />
              <span className="font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
