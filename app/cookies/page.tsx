import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Cleaning Apex & Facility Services Limited. Learn about how we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  const lastUpdated = "1 September 2026";

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Cookie Policy</h1>
          <p className="text-blue-100">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What Are Cookies?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are stored on your device
                (computer, tablet, or mobile) when you visit a website. They
                help websites remember your preferences and understand how you
                use the site.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Use Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {COMPANY_INFO.name} uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Essential cookies:</strong> Required for the website
                  to function properly (e.g., remembering your cookie consent)
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how
                  visitors use our website so we can improve it
                </li>
                <li>
                  <strong>Marketing cookies:</strong> Used to deliver relevant
                  advertisements and track campaign performance
                </li>
                <li>
                  <strong>Functionality cookies:</strong> Remember your
                  preferences and settings
                </li>
              </ul>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies We Use
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                        Cookie Name
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                        Provider
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                        Purpose
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        cookie_consent
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Cleaning Apex
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Stores your cookie consent preferences
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        1 year
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        _ga, _ga_*
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Google Analytics
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Tracks website usage and visitor behaviour
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        2 years
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        _fbp
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Facebook
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Tracks visits for advertising purposes
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        3 months
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        _clck, _clsk
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Microsoft Clarity
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Session recording and heatmaps for UX improvement
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        1 year
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Managing Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Browser settings:</strong> Most browsers allow you to
                  refuse or delete cookies. Check your browser&apos;s help section
                  for instructions.
                </li>
                <li>
                  <strong>Our cookie banner:</strong> When you first visit our
                  site, you can choose which cookies to accept.
                </li>
                <li>
                  <strong>Opt-out links:</strong> You can opt out of specific
                  tracking:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Google Analytics:{" "}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Google Analytics Opt-out
                      </a>
                    </li>
                    <li>
                      Facebook:{" "}
                      <a
                        href="https://www.facebook.com/settings?tab=ads"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Facebook Ad Preferences
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Impact of Disabling */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Impact of Disabling Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you choose to disable cookies, some features of our website
                may not work as intended. Essential cookies cannot be disabled
                as they are necessary for the website to function.
              </p>
            </div>

            {/* Updates */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Questions?
              </h2>
              <p className="text-gray-600 mb-4">
                If you have questions about our use of cookies, please contact
                us:
              </p>
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-primary hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="text-gray-600">
                Phone:{" "}
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                  className="text-primary hover:underline"
                >
                  {COMPANY_INFO.phone}
                </a>
              </p>
            </div>

            {/* Related Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                See also:{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
