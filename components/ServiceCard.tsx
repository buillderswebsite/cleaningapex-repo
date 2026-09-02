import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Building2,
  Key,
  Sparkles,
  Briefcase,
  Sofa,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Key,
  Sparkles,
  Briefcase,
  Sofa,
};

interface ServiceCardProps {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  image?: string;
  features?: string[];
  variant?: "default" | "compact";
}

export default function ServiceCard({
  id,
  title,
  shortDescription,
  icon,
  image,
  features,
  variant = "default",
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Sparkles;

  if (variant === "compact") {
    return (
      <Link
        href={`/services#${id}`}
        className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
      >
        {image && (
          <div className="relative h-40 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        )}
        <div className="p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
            <IconComponent
              size={24}
              className="text-primary group-hover:text-white transition-colors"
            />
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {shortDescription}
          </p>
          <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
            Learn more
            <ArrowRight
              size={16}
              className="ml-1 group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div
      id={id}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 scroll-mt-24"
    >
      {image && (
        <div className="relative h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <IconComponent size={28} className="text-primary" />
            </div>
          </div>
        </div>
      )}

      <div className="p-8">
        {!image && (
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
            <IconComponent size={32} className="text-white" />
          </div>
        )}

        <h3 className="font-bold text-2xl text-gray-900 mb-3">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">{shortDescription}</p>

        {features && features.length > 0 && (
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          Get a quote for this service
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
