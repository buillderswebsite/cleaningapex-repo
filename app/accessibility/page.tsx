import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility Statement for Cleaning Apex & Facility Services Limited. Our commitment to making our website accessible to everyone.",
};

export default function AccessibilityPage() {
  const lastUpdated = "1 September 2026";

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Accessibility Statement</h1>
          <p className="text-blue-100">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
            {/* Commitment */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Commitment
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {COMPANY_INFO.name} is committed to ensuring digital
                accessibility for people with disabilities. We are continually
                improving the user experience for everyone and applying the
                relevant accessibility standards.
              </p>
            </div>

            {/* Standards */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Accessibility Standards
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We aim to conform to the Web Content Accessibility Guidelines
                (WCAG) 2.1 at Level AA. These guidelines explain how to make web
                content more accessible for people with disabilities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Conformance with these guidelines helps make the web more
                user-friendly for everyone.
              </p>
            </div>

            {/* Measures Taken */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Measures We&apos;ve Taken
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We have taken the following measures to ensure accessibility:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Semantic HTML:</strong> We use proper HTML elements to
                  ensure content is structured correctly for screen readers
                </li>
                <li>
                  <strong>Keyboard navigation:</strong> All interactive elements
                  can be accessed and operated using a keyboard
                </li>
                <li>
                  <strong>Alt text:</strong> Images include descriptive
                  alternative text for users who cannot see them
                </li>
                <li>
                  <strong>Colour contrast:</strong> We maintain sufficient
                  colour contrast between text and backgrounds
                </li>
                <li>
                  <strong>Resizable text:</strong> Text can be resized up to
                  200% without loss of content or functionality
                </li>
                <li>
                  <strong>Clear navigation:</strong> Consistent and predictable
                  navigation throughout the site
                </li>
                <li>
                  <strong>Form labels:</strong> All form inputs have associated
                  labels for screen reader users
                </li>
                <li>
                  <strong>Focus indicators:</strong> Visible focus states for
                  interactive elements
                </li>
                <li>
                  <strong>Skip links:</strong> Allow keyboard users to skip
                  repeated content
                </li>
              </ul>
            </div>

            {/* Known Issues */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Known Issues
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are aware of the following accessibility issues and are
                working to resolve them:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Some older PDF documents may not be fully accessible. We are
                  working to update these.
                </li>
                <li>
                  The embedded Google Map may have limited keyboard
                  accessibility. Alternative contact methods are provided.
                </li>
              </ul>
            </div>

            {/* Assistive Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Compatibility with Assistive Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website is designed to be compatible with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
              </ul>
            </div>

            {/* Browser Support */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Browser Support
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For the best experience, we recommend using the latest versions
                of Chrome, Firefox, Safari, or Edge. The website is designed to
                work with browser accessibility features and extensions.
              </p>
            </div>

            {/* Feedback */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Feedback
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We welcome your feedback on the accessibility of our website. If
                you encounter any accessibility barriers or have suggestions for
                improvement, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-primary hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                    className="text-primary hover:underline"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> {COMPANY_INFO.address.street},{" "}
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}
                </p>
              </div>
              <p className="text-gray-600 mt-4">
                We aim to respond to accessibility feedback within 5 business
                days.
              </p>
            </div>

            {/* Enforcement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Enforcement Procedure
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you are not satisfied with our response to your accessibility
                concern, you can contact the Equality Advisory Support Service
                (EASS) at{" "}
                <a
                  href="https://www.equalityadvisoryservice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.equalityadvisoryservice.com
                </a>
                .
              </p>
            </div>

            {/* Assessment */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Assessment Approach
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {COMPANY_INFO.shortName} assesses the accessibility of this
                website through self-evaluation and automated testing tools. We
                regularly review and test our website to identify and fix
                accessibility issues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
