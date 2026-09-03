import { ShieldCheck } from "lucide-react";

interface GuaranteeBadgeProps {
  variant?: "inline" | "card";
  className?: string;
}

export default function GuaranteeBadge({ variant = "card", className = "" }: GuaranteeBadgeProps) {
  if (variant === "inline") {
    return (
      <div className={`inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full ${className}`}>
        <ShieldCheck size={20} />
        <span className="font-semibold text-sm">100% Satisfaction Guarantee</span>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-accent to-accent-700 rounded-2xl p-6 text-white ${className}`}>
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <ShieldCheck size={32} />
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">100% Satisfaction Guarantee</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Not happy with your clean? Let us know within 24 hours and we&apos;ll
            return to re-clean the areas of concern at no extra charge. Your
            satisfaction is our priority.
          </p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span>Free re-clean if unsatisfied</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span>No questions asked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span>Deposit-back guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
}
