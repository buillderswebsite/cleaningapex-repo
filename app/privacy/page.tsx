import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Cleaning Apex & Facility Services Limited. Learn how we collect, use, and protect your personal data under UK GDPR.",
};

export default function PrivacyPage() {
  const lastUpdated = "1 September 2026";

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Privacy Policy</h1>
          <p className="text-blue-100">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-gray prose-lg">

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                {COMPANY_INFO.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your
                privacy and personal data. This Privacy Policy explains how we collect, use,
                store, and protect your information in accordance with the UK General Data
                Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <p className="text-gray-600">
                We are the data controller for the personal data we process. If you have any
                questions about this policy or our data practices, please contact us using
                the details provided at the end of this document.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Information You Provide</h3>
              <p className="text-gray-600 mb-4">
                We collect information you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Request a quote or book our services</li>
                <li>Create an account or customer profile</li>
                <li>Contact us by phone, email, or through our website</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Provide feedback or reviews</li>
              </ul>
              <p className="text-gray-600 mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Identity data:</strong> Name, title</li>
                <li><strong>Contact data:</strong> Address, email, phone number</li>
                <li><strong>Property data:</strong> Property address, access information, keys/codes</li>
                <li><strong>Financial data:</strong> Payment card details, bank account information</li>
                <li><strong>Service data:</strong> Cleaning preferences, special requirements, service history</li>
                <li><strong>Communication data:</strong> Your correspondence with us</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Information Collected Automatically</h3>
              <p className="text-gray-600 mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Technical data:</strong> IP address, browser type, device information, operating system</li>
                <li><strong>Usage data:</strong> Pages visited, time spent, navigation paths</li>
                <li><strong>Location data:</strong> General geographic location based on IP address</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use your personal data for the following purposes and legal bases:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Contract Performance</h4>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Processing and fulfilling your bookings</li>
                  <li>Providing our cleaning services</li>
                  <li>Managing payments and invoicing</li>
                  <li>Communicating about your bookings</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Legitimate Interests</h4>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Improving our services and website</li>
                  <li>Analysing service usage and trends</li>
                  <li>Preventing fraud and ensuring security</li>
                  <li>Staff training and quality assurance</li>
                  <li>Business administration and record keeping</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Legal Obligations</h4>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Compliance with tax and accounting requirements</li>
                  <li>Responding to legal requests or court orders</li>
                  <li>Health and safety obligations</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Consent</h4>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Sending marketing communications (where consent obtained)</li>
                  <li>Using non-essential cookies</li>
                </ul>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing</h2>
              <p className="text-gray-600 mb-4">
                We may share your personal data with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Our staff:</strong> Cleaners and administrators who need access to perform their duties</li>
                <li><strong>Payment processors:</strong> To process your payments securely (e.g., Stripe, PayPal)</li>
                <li><strong>IT service providers:</strong> Who help us maintain our systems and website</li>
                <li><strong>Professional advisors:</strong> Accountants, lawyers, insurers as necessary</li>
                <li><strong>Regulatory authorities:</strong> HMRC, ICO, or other bodies when legally required</li>
              </ul>
              <p className="text-gray-600">
                We do not sell your personal data to third parties. Any third parties we share
                data with are contractually bound to protect your information and use it only
                for specified purposes.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your personal data only for as long as necessary:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Active customer data:</strong> For the duration of our business relationship plus 6 years</li>
                <li><strong>Financial records:</strong> 7 years (as required by HMRC)</li>
                <li><strong>Marketing data:</strong> Until you unsubscribe or withdraw consent</li>
                <li><strong>Website analytics:</strong> 26 months</li>
                <li><strong>CCTV footage:</strong> 30 days (if applicable to our premises)</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Under UK GDPR, you have the following rights:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Right of Access</h4>
                  <p className="text-gray-600 text-sm">Request a copy of your personal data we hold.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Right to Rectification</h4>
                  <p className="text-gray-600 text-sm">Request correction of inaccurate or incomplete data.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Right to Erasure</h4>
                  <p className="text-gray-600 text-sm">Request deletion of your data in certain circumstances.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Right to Restrict Processing</h4>
                  <p className="text-gray-600 text-sm">Request limitation of how we use your data.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Right to Data Portability</h4>
                  <p className="text-gray-600 text-sm">Receive your data in a structured, machine-readable format.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Right to Object</h4>
                  <p className="text-gray-600 text-sm">Object to processing based on legitimate interests or for marketing.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Right to Withdraw Consent</h4>
                  <p className="text-gray-600 text-sm">Withdraw consent at any time where processing is based on consent.</p>
                </div>
              </div>

              <p className="text-gray-600 mt-4">
                To exercise any of these rights, please contact us using the details below.
                We will respond within one month. There is no fee for most requests, but we
                may charge a reasonable fee for repetitive, manifestly unfounded, or excessive requests.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organisational measures to protect your
                personal data, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Encryption of data in transit (SSL/TLS) and at rest</li>
                <li>Secure password policies and access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Staff training on data protection</li>
                <li>Physical security measures for our premises</li>
                <li>Secure disposal of data when no longer needed</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Our website uses cookies to enhance your experience. Cookies are small text
                files stored on your device.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Essential cookies:</strong> Required for the website to function (no consent needed)</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
              <p className="text-gray-600">
                You can manage cookie preferences through your browser settings. Note that
                disabling certain cookies may affect website functionality.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-600 mb-4">
                Your data is primarily stored and processed within the UK. If we transfer data
                outside the UK, we ensure appropriate safeguards are in place, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Transfers to countries with adequate data protection (UK adequacy decisions)</li>
                <li>Standard Contractual Clauses approved by the ICO</li>
                <li>Binding Corporate Rules where applicable</li>
              </ul>
            </div>

            {/* Children */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-gray-600">
                Our services are not directed at children under 18. We do not knowingly collect
                personal data from children. If you believe we have collected data from a child,
                please contact us immediately.
              </p>
            </div>

            {/* Changes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy periodically. Material changes will be
                communicated to you via email or a prominent notice on our website. The
                &quot;Last updated&quot; date at the top indicates when this policy was last revised.
              </p>
            </div>

            {/* Complaints */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Complaints</h2>
              <p className="text-gray-600 mb-4">
                If you have concerns about how we handle your data, please contact us first
                so we can try to resolve the issue.
              </p>
              <p className="text-gray-600">
                You also have the right to lodge a complaint with the Information
                Commissioner&apos;s Office (ICO):
              </p>
              <ul className="list-none text-gray-600 mt-4 space-y-1">
                <li><strong>Website:</strong> <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ico.org.uk</a></li>
                <li><strong>Phone:</strong> 0303 123 1113</li>
                <li><strong>Post:</strong> Information Commissioner&apos;s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                For any questions about this Privacy Policy or to exercise your rights:
              </p>
              <ul className="list-none text-gray-600 space-y-2">
                <li><strong>Data Controller:</strong> {COMPANY_INFO.name}</li>
                <li><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline">{COMPANY_INFO.email}</a></li>
                <li><strong>Phone:</strong> <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">{COMPANY_INFO.phone}</a></li>
                <li><strong>Address:</strong> {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
