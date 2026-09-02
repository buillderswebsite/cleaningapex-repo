import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for Cleaning Apex & Facility Services Limited. Read our service agreement, cancellation policy, and legal terms.",
};

export default function TermsPage() {
  const lastUpdated = "1 September 2026";

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Terms of Service</h1>
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
                These Terms of Service (&quot;Terms&quot;) govern your use of the cleaning and facility
                services provided by {COMPANY_INFO.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;the Company&quot;),
                a company registered in England and Wales.
              </p>
              <p className="text-gray-600 mb-4">
                By booking our services, you (&quot;the Client&quot;, &quot;you&quot;, or &quot;your&quot;) agree to be bound
                by these Terms. Please read them carefully before making a booking.
              </p>
              <p className="text-gray-600">
                These Terms are compliant with the Consumer Rights Act 2015, the Consumer Contracts
                (Information, Cancellation and Additional Charges) Regulations 2013, UK GDPR, and
                the Data Protection Act 2018.
              </p>
            </div>

            {/* Definitions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>&quot;Services&quot;</strong> means any cleaning, maintenance, or facility services we provide.</li>
                <li><strong>&quot;Booking&quot;</strong> means a confirmed appointment for Services.</li>
                <li><strong>&quot;Property&quot;</strong> means the premises where Services are to be performed.</li>
                <li><strong>&quot;Quote&quot;</strong> means our written estimate for the cost of Services.</li>
                <li><strong>&quot;Working Day&quot;</strong> means Monday to Friday, excluding UK public holidays.</li>
              </ul>
            </div>

            {/* Service Agreement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Agreement</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Booking and Confirmation</h3>
              <p className="text-gray-600 mb-4">
                A binding contract is formed when we confirm your booking in writing (including email).
                All bookings are subject to availability. We reserve the right to decline any booking
                at our discretion.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Quotations</h3>
              <p className="text-gray-600 mb-4">
                Quotes are valid for 30 days from the date of issue unless otherwise stated.
                Prices quoted are based on the information you provide. If the actual scope of work
                differs significantly, we reserve the right to adjust the price accordingly, with
                your prior agreement.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Service Standards</h3>
              <p className="text-gray-600 mb-4">
                We commit to providing Services with reasonable care and skill in accordance with
                the Consumer Rights Act 2015. Our cleaning standards comply with British Institute
                of Cleaning Science (BICSc) guidelines and relevant health and safety regulations.
              </p>
            </div>

            {/* Access and Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Access and Property</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Property Access</h3>
              <p className="text-gray-600 mb-4">
                You must ensure we have safe and reasonable access to the Property at the agreed time.
                If access is not possible, a cancellation fee may apply (see Section 6).
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Key Holding</h3>
              <p className="text-gray-600 mb-4">
                If you provide us with keys or access codes, we will store them securely and use them
                only for the purpose of delivering Services. Keys are held at your own risk, though
                we take reasonable precautions to ensure their security.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Property Condition</h3>
              <p className="text-gray-600 mb-4">
                You warrant that the Property is safe for our staff to work in. You must inform us
                of any hazards, including but not limited to: pest infestations, structural damage,
                hazardous materials (e.g., asbestos), or any conditions that may affect the health
                and safety of our team.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Pricing</h3>
              <p className="text-gray-600 mb-4">
                All prices are quoted in British Pounds Sterling (GBP) and include VAT where applicable.
                We are VAT registered and will provide VAT invoices upon request.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Payment Methods</h3>
              <p className="text-gray-600 mb-4">
                We accept payment by bank transfer, debit card, credit card, and other methods as
                communicated at the time of booking. Payment processing is handled securely in
                compliance with PCI DSS standards.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Payment Schedule</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>One-off Services:</strong> Payment is due upon completion unless otherwise agreed.</li>
                <li><strong>Regular Services:</strong> Payment is due monthly in advance or as agreed in your service contract.</li>
                <li><strong>Commercial Contracts:</strong> Payment terms as specified in your individual agreement (typically 14-30 days).</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.4 Late Payment</h3>
              <p className="text-gray-600 mb-4">
                We reserve the right to charge interest on overdue amounts at 8% above the Bank of
                England base rate, in accordance with the Late Payment of Commercial Debts (Interest)
                Act 1998. We may also suspend Services until payment is received.
              </p>
            </div>

            {/* Cancellation Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cancellation and Rescheduling</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Your Right to Cancel</h3>
              <p className="text-gray-600 mb-4">
                Under the Consumer Contracts Regulations 2013, you have the right to cancel a booking
                within 14 days of making it, provided Services have not yet commenced. To exercise this
                right, contact us in writing.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Cancellation Fees</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <ul className="space-y-2 text-gray-600">
                  <li><strong>More than 48 hours notice:</strong> No charge</li>
                  <li><strong>24-48 hours notice:</strong> 25% of the quoted price</li>
                  <li><strong>Less than 24 hours notice:</strong> 50% of the quoted price</li>
                  <li><strong>No-show / No access:</strong> 100% of the quoted price</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Our Right to Cancel</h3>
              <p className="text-gray-600 mb-4">
                We may cancel or reschedule a booking due to unforeseen circumstances (e.g., staff
                illness, extreme weather, emergencies). In such cases, we will offer an alternative
                date or a full refund at your choice.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.4 Regular Service Contracts</h3>
              <p className="text-gray-600 mb-4">
                For ongoing service contracts, either party may terminate with 30 days written notice.
                Any Services already scheduled and confirmed will be honoured or subject to standard
                cancellation fees.
              </p>
            </div>

            {/* Liability and Insurance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Liability and Insurance</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Our Insurance</h3>
              <p className="text-gray-600 mb-4">
                We maintain comprehensive insurance coverage including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Public Liability Insurance (minimum £5 million)</li>
                <li>Employer&apos;s Liability Insurance (minimum £10 million)</li>
                <li>Professional Indemnity Insurance</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Certificates of insurance are available upon request.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Damage Claims</h3>
              <p className="text-gray-600 mb-4">
                If you believe our staff have caused damage to your property, you must notify us
                within 24 hours of the Service being completed. We will investigate all claims
                fairly and promptly. Genuine claims will be processed through our insurance.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.3 Limitation of Liability</h3>
              <p className="text-gray-600 mb-4">
                Nothing in these Terms excludes or limits our liability for death or personal injury
                caused by our negligence, fraud, or any other liability that cannot be excluded by law.
              </p>
              <p className="text-gray-600 mb-4">
                Subject to the above, our total liability for any claim shall not exceed the greater
                of: (a) the price paid for the specific Service giving rise to the claim, or (b) £1,000.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.4 Exclusions</h3>
              <p className="text-gray-600 mb-4">
                We are not liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Pre-existing damage or wear and tear</li>
                <li>Damage to fragile, antique, or high-value items not disclosed prior to cleaning</li>
                <li>Colour fading or shrinkage of fabrics during cleaning</li>
                <li>Stains that cannot be removed despite our best efforts</li>
                <li>Any indirect or consequential losses</li>
              </ul>
            </div>

            {/* Guarantee */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Satisfaction Guarantee</h2>
              <p className="text-gray-600 mb-4">
                We are committed to your satisfaction. If you are not happy with any aspect of our
                Service, please contact us within 24 hours and we will:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Return to re-clean the affected areas at no additional charge</li>
                <li>If re-cleaning does not resolve the issue, discuss a partial or full refund</li>
              </ul>
              <p className="text-gray-600">
                This guarantee applies to domestic cleaning services and end of tenancy cleans
                (subject to a satisfactory re-inspection within 72 hours of the original clean).
              </p>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Protection and Privacy</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 GDPR Compliance</h3>
              <p className="text-gray-600 mb-4">
                We process your personal data in accordance with the UK General Data Protection
                Regulation (UK GDPR) and the Data Protection Act 2018. For full details, please
                refer to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Data We Collect</h3>
              <p className="text-gray-600 mb-4">
                We collect and process the following data to provide our Services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Name, address, and contact details</li>
                <li>Property access information (keys, codes)</li>
                <li>Payment information</li>
                <li>Service history and preferences</li>
                <li>Communications between you and us</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.3 Your Rights</h3>
              <p className="text-gray-600 mb-4">
                Under UK GDPR, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request erasure of your data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO)</li>
              </ul>
            </div>

            {/* Health and Safety */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Health and Safety</h2>
              <p className="text-gray-600 mb-4">
                We comply with the Health and Safety at Work Act 1974 and all relevant regulations.
                Our staff are trained in safe working practices, COSHH (Control of Substances
                Hazardous to Health), and manual handling.
              </p>
              <p className="text-gray-600 mb-4">
                We use eco-friendly, non-toxic cleaning products wherever possible. If you have
                specific requirements regarding cleaning products (e.g., allergies, environmental
                concerns), please inform us before your booking.
              </p>
            </div>

            {/* Complaints */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Complaints Procedure</h2>
              <p className="text-gray-600 mb-4">
                If you have a complaint, please contact us:
              </p>
              <ul className="list-none text-gray-600 space-y-2 mb-4">
                <li><strong>Email:</strong> {COMPANY_INFO.email}</li>
                <li><strong>Phone:</strong> {COMPANY_INFO.phone}</li>
                <li><strong>Post:</strong> {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}</li>
              </ul>
              <p className="text-gray-600 mb-4">
                We aim to acknowledge complaints within 2 working days and provide a full response
                within 10 working days. If you remain dissatisfied, you may refer the matter to
                alternative dispute resolution services or the courts.
              </p>
            </div>

            {/* General */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. General Provisions</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">12.1 Entire Agreement</h3>
              <p className="text-gray-600 mb-4">
                These Terms, together with our Privacy Policy and any specific service agreement,
                constitute the entire agreement between you and us.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">12.2 Amendments</h3>
              <p className="text-gray-600 mb-4">
                We may update these Terms from time to time. Material changes will be communicated
                to existing customers. Continued use of our Services after changes constitutes
                acceptance of the updated Terms.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">12.3 Severability</h3>
              <p className="text-gray-600 mb-4">
                If any provision of these Terms is found to be invalid or unenforceable, the
                remaining provisions shall continue in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">12.4 Governing Law</h3>
              <p className="text-gray-600 mb-4">
                These Terms are governed by the laws of England and Wales. Any disputes shall be
                subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">12.5 Third Party Rights</h3>
              <p className="text-gray-600 mb-4">
                These Terms do not confer any rights on any third party under the Contracts
                (Rights of Third Parties) Act 1999.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none text-gray-600 space-y-2">
                <li><strong>Company:</strong> {COMPANY_INFO.name}</li>
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
