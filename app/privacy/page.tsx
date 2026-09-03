import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Cleaning Apex & Facility Services Limited. Learn how we collect, use, and protect your personal data under UK GDPR.",
};

export default function PrivacyPage() {
  const lastUpdated = "September 2026";

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Privacy Policy</h1>
          <p className="text-blue-100">Cleaning Apex & Facility Services Ltd</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-gray prose-lg">

            {/* Introduction */}
            <div className="mb-10">
              <p className="text-gray-600 leading-relaxed">
                This Privacy Policy explains how Cleaning Apex & Facility Services Ltd collects, uses, stores and protects your personal information when you use our services or interact with us. We are committed to protecting your privacy and handling your data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Who We Are</h2>
              <p className="text-gray-600 mb-4">
                Cleaning Apex & Facility Services Ltd is the data controller responsible for your personal data.
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="list-none text-gray-600 space-y-2">
                  <li><strong>Company:</strong> Cleaning Apex & Facility Services Ltd</li>
                  <li><strong>Address:</strong> {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}</li>
                  <li><strong>Email:</strong> {COMPANY_INFO.email}</li>
                  <li><strong>Phone:</strong> {COMPANY_INFO.phone}</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect personal information that you provide to us when booking our services, making enquiries, or communicating with us. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Contact details:</strong> Name, address, email address, phone number</li>
                <li><strong>Property information:</strong> Address of property to be cleaned, access arrangements, keys or access codes</li>
                <li><strong>Payment information:</strong> Bank details, payment card information (processed securely through our payment provider)</li>
                <li><strong>Service preferences:</strong> Cleaning requirements, scheduling preferences, special instructions</li>
                <li><strong>Communications:</strong> Records of correspondence between you and us</li>
                <li><strong>Feedback:</strong> Reviews, complaints, or other feedback you provide</li>
              </ul>
              <p className="text-gray-600">
                As outlined in our <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link>, we may also collect information about allergies, sensitivities or specific requirements relating to cleaning products.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service delivery:</strong> To provide cleaning services, manage bookings, and access your property as agreed</li>
                <li><strong>Communication:</strong> To confirm bookings, send reminders, and respond to your enquiries</li>
                <li><strong>Payment processing:</strong> To process deposits (as per our Terms & Conditions, a 25% deposit is required for one-off bookings) and final payments</li>
                <li><strong>Quality assurance:</strong> To handle complaints, investigate issues, and improve our services</li>
                <li><strong>Legal compliance:</strong> To comply with legal obligations and protect our legitimate interests</li>
                <li><strong>Marketing:</strong> With your consent, to send you information about our services and special offers</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing</h2>
              <p className="text-gray-600 mb-4">
                We process your personal data on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Contract:</strong> Processing necessary to perform our contract with you (e.g., providing cleaning services)</li>
                <li><strong>Legal obligation:</strong> Processing necessary to comply with legal requirements</li>
                <li><strong>Legitimate interests:</strong> Processing necessary for our legitimate business interests, such as improving services and preventing fraud</li>
                <li><strong>Consent:</strong> Where you have given consent for specific processing activities (e.g., marketing communications)</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Key Holding and Property Access</h2>
              <p className="text-gray-600 mb-4">
                As stated in our Terms & Conditions, if you provide us with keys or access codes to your property:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We store keys securely and separately from any identifying information</li>
                <li>Access codes are stored securely and only shared with team members assigned to your property</li>
                <li>This information is used solely for the purpose of delivering our cleaning services</li>
                <li>Keys are held at your own risk, though we take reasonable precautions to ensure their security</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Photographs</h2>
              <p className="text-gray-600 mb-4">
                As outlined in our Terms & Conditions, photographs may be taken before or after cleaning to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Document the condition of the property</li>
                <li>Confirm completion of work</li>
                <li>Assist with resolving complaints (particularly for our 48-hour End of Tenancy guarantee)</li>
              </ul>
              <p className="text-gray-600">
                We will not use identifiable photographs of your property for advertising or promotional purposes without your appropriate permission.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Who We Share Your Data With</h2>
              <p className="text-gray-600 mb-4">
                We may share your personal information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Our cleaning team:</strong> Team members assigned to clean your property will receive necessary information to carry out the service</li>
                <li><strong>Payment processors:</strong> Secure third-party payment providers to process transactions</li>
                <li><strong>Professional advisors:</strong> Accountants, lawyers, or insurers where necessary</li>
                <li><strong>Legal authorities:</strong> Where required by law or to protect our legal rights</li>
              </ul>
              <p className="text-gray-600">
                We do not sell your personal data to third parties.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Active customers:</strong> Data retained while you remain a customer and for a reasonable period thereafter</li>
                <li><strong>Booking records:</strong> Retained for 6 years for tax and legal purposes</li>
                <li><strong>Complaints and disputes:</strong> Retained until fully resolved and for a reasonable period thereafter</li>
                <li><strong>Marketing preferences:</strong> Until you withdraw consent</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or damage. These include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Secure storage of physical records</li>
                <li>Password protection and encryption for digital records</li>
                <li>Restricted access to personal data on a need-to-know basis</li>
                <li>Regular review of security practices</li>
                <li>Secure payment processing through PCI DSS compliant providers</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Under UK GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to erasure:</strong> Request deletion of your data in certain circumstances</li>
                <li><strong>Right to restrict processing:</strong> Request limitation of how we use your data</li>
                <li><strong>Right to data portability:</strong> Request transfer of your data to another organisation</li>
                <li><strong>Right to object:</strong> Object to processing based on legitimate interests or for direct marketing</li>
                <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time where processing is based on consent</li>
              </ul>
              <p className="text-gray-600">
                To exercise any of these rights, please contact us using the details provided below.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Our website uses cookies to improve your experience and analyse site usage. For detailed information about the cookies we use, please see our <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Marketing Communications</h2>
              <p className="text-gray-600 mb-4">
                We may send you marketing communications about our services if you have:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Requested information from us</li>
                <li>Used our services and not opted out of marketing</li>
                <li>Given your explicit consent to receive marketing</li>
              </ul>
              <p className="text-gray-600">
                You can opt out of marketing communications at any time by contacting us or using the unsubscribe link in our emails.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Complaints</h2>
              <p className="text-gray-600 mb-4">
                If you have concerns about how we handle your personal data, please contact us first so we can try to resolve the issue.
              </p>
              <p className="text-gray-600 mb-4">
                You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO):
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="list-none text-gray-600 space-y-2">
                  <li><strong>Website:</strong> <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ico.org.uk</a></li>
                  <li><strong>Phone:</strong> 0303 123 1113</li>
                </ul>
              </div>
            </div>

            {/* Section 14 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="list-none text-gray-600 space-y-2">
                  <li><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline">{COMPANY_INFO.email}</a></li>
                  <li><strong>Phone:</strong> <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">{COMPANY_INFO.phone}</a></li>
                  <li><strong>Address:</strong> {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}</li>
                </ul>
              </div>
            </div>

            {/* Related Links */}
            <div className="mb-10 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                See also: <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link> | <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>
              </p>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-500 font-medium">
                Last updated: {lastUpdated}
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
