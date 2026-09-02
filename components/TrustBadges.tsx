import {
  Shield,
  Award,
  Star,
  Leaf,
  Clock,
  ThumbsUp,
} from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Fully Insured",
    subtitle: "£5M Coverage",
  },
  {
    icon: Award,
    title: "DBS Checked",
    subtitle: "Vetted Staff",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    subtitle: "Google Reviews",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction",
    subtitle: "Guaranteed",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    subtitle: "Safe Products",
  },
  {
    icon: Clock,
    title: "10+ Years",
    subtitle: "Experience",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="container-custom py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <badge.icon
                  size={28}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>
              <p className="font-semibold text-gray-900 text-sm">
                {badge.title}
              </p>
              <p className="text-xs text-gray-500">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
