import Link from "next/link";
import { Home, Phone, Search } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
          It might have been moved or doesn&apos;t exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <Home size={20} />
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <Search size={20} />
            View Services
          </Link>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-gray-600 mb-3">Need help? Contact us:</p>
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-600 transition-colors"
          >
            <Phone size={20} />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
