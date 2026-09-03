import { Shield, Award, CheckCircle, FileCheck, Leaf, Users } from "lucide-react";

const accreditations = [
  {
    name: "Fully Insured",
    description: "Public liability up to £5M",
    icon: Shield,
  },
  {
    name: "DBS Checked",
    description: "All staff background verified",
    icon: FileCheck,
  },
  {
    name: "ICO Registered",
    description: "Data protection compliant",
    icon: CheckCircle,
  },
  {
    name: "Eco-Friendly",
    description: "Sustainable products available",
    icon: Leaf,
  },
  {
    name: "Trained Staff",
    description: "Professional training programme",
    icon: Users,
  },
  {
    name: "Quality Assured",
    description: "100% satisfaction guarantee",
    icon: Award,
  },
];

interface AccreditationsProps {
  variant?: "light" | "dark";
  columns?: 3 | 6;
}

export default function Accreditations({ variant = "light", columns = 6 }: AccreditationsProps) {
  const bgClass = variant === "dark" ? "bg-primary" : "bg-gray-50";
  const textClass = variant === "dark" ? "text-white" : "text-gray-900";
  const subtextClass = variant === "dark" ? "text-blue-200" : "text-gray-500";
  const iconBgClass = variant === "dark" ? "bg-white/10" : "bg-white";
  const iconColorClass = variant === "dark" ? "text-secondary" : "text-primary";
  const borderClass = variant === "dark" ? "border-white/10" : "border-gray-200";

  const gridCols = columns === 3
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6";

  return (
    <section className={`py-12 ${bgClass}`}>
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className={`text-2xl font-bold ${textClass}`}>
            Why Trust Cleaning Apex?
          </h2>
        </div>
        <div className={`grid ${gridCols} gap-6`}>
          {accreditations.map((item) => (
            <div
              key={item.name}
              className={`flex flex-col items-center text-center p-4 rounded-xl border ${borderClass} ${
                variant === "dark" ? "bg-white/5" : "bg-white"
              }`}
            >
              <div
                className={`w-14 h-14 ${iconBgClass} rounded-xl flex items-center justify-center mb-3`}
              >
                <item.icon className={iconColorClass} size={28} />
              </div>
              <h3 className={`font-semibold ${textClass} mb-1`}>{item.name}</h3>
              <p className={`text-sm ${subtextClass}`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
