import Link from "next/link";
import { Home, ArrowLeft, Phone, Search } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <span className="text-[150px] md:text-[200px] font-bold text-gray-100 select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={40} className="text-primary" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            It might have been moved or doesn&apos;t exist.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <ArrowLeft size={20} />
              View Services
            </Link>
          </div>

          {/* Helpful links */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <h2 className="font-semibold text-gray-900 mb-4">
              Looking for something specific?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <Link
                href="/services"
                className="p-4 bg-white rounded-xl hover:shadow-md transition-shadow text-center"
              >
                <span className="text-primary font-medium">Our Services</span>
                <p className="text-gray-500 mt-1">View what we offer</p>
              </Link>
              <Link
                href="/pricing"
                className="p-4 bg-white rounded-xl hover:shadow-md transition-shadow text-center"
              >
                <span className="text-primary font-medium">Pricing</span>
                <p className="text-gray-500 mt-1">Check our rates</p>
              </Link>
              <Link
                href="/contact"
                className="p-4 bg-white rounded-xl hover:shadow-md transition-shadow text-center"
              >
                <span className="text-primary font-medium">Contact Us</span>
                <p className="text-gray-500 mt-1">Get a free quote</p>
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-2">Or give us a call:</p>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <Phone size={18} />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
