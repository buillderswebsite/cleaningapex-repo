import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Cleaning Apex & Facility Services Limited. Read our service agreement, cancellation policy, and legal terms.",
};

export default function TermsPage() {
  const lastUpdated = "September 2026";

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Terms & Conditions</h1>
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
                These Terms & Conditions apply to cleaning services provided by Cleaning Apex & Facility Services Ltd.
                By booking a service with us, you agree to these terms.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Bookings and Deposits</h2>
              <p className="text-gray-600 mb-4">
                A <strong>25% deposit</strong> is required to secure one-off cleaning bookings, including Deep Cleaning and End of Tenancy Cleaning.
              </p>
              <p className="text-gray-600 mb-4">
                A booking is not confirmed until the required deposit has been received and confirmation has been provided by Cleaning Apex & Facility Services Ltd.
              </p>
              <p className="text-gray-600 mb-4">
                The remaining balance is due on completion of the cleaning service unless otherwise agreed in writing.
              </p>
              <p className="text-gray-600">
                Regular domestic and commercial cleaning arrangements may have different payment terms, which will be confirmed separately.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cancellations and Rescheduling</h2>
              <p className="text-gray-600 mb-4">
                We understand that plans can change.
              </p>
              <p className="text-gray-600 mb-4">
                Customers should provide at least <strong>48 hours&apos; notice</strong> if they need to cancel or reschedule a booking.
              </p>
              <p className="text-gray-600 mb-4">
                Where sufficient notice is provided, we may allow the deposit to be transferred to another available booking date.
              </p>
              <p className="text-gray-600 mb-4">
                Where a customer cancels with less than 48 hours&apos; notice, we may retain some or all of the deposit to cover reasonable losses resulting from the cancellation, subject to applicable consumer law.
              </p>
              <p className="text-gray-600">
                Where applicable, nothing in these Terms & Conditions affects a customer&apos;s statutory cancellation or other consumer rights.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cancellation by Cleaning Apex & Facility Services Ltd</h2>
              <p className="text-gray-600 mb-4">
                In the unlikely event that we need to cancel a confirmed booking, we will offer an alternative date where possible.
              </p>
              <p className="text-gray-600 mb-4">
                If a suitable alternative cannot be agreed, any payment made for services that have not been provided will be refunded.
              </p>
              <p className="text-gray-600">
                We are not responsible for indirect losses arising from circumstances reasonably outside our control.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Access to the Property</h2>
              <p className="text-gray-600 mb-4">
                The customer is responsible for ensuring that our cleaners can access the property at the agreed time.
              </p>
              <p className="text-gray-600 mb-4">
                Keys, access codes or other access arrangements should be agreed before the appointment.
              </p>
              <p className="text-gray-600">
                If our team cannot gain access to the property at the agreed time, the booking may be treated as a late cancellation and a charge may apply to cover reasonable costs incurred.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Customer Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                Customers should inform us before the clean about:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Fragile, valuable or damaged items.</li>
                <li>Surfaces requiring specialist cleaning products or methods.</li>
                <li>Areas that should not be cleaned.</li>
                <li>Known hazards within the property.</li>
                <li>Any access, parking or building restrictions that could affect the service.</li>
              </ul>
              <p className="text-gray-600">
                We may decline work that our cleaners reasonably consider unsafe.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cleaning Equipment and Products</h2>
              <p className="text-gray-600 mb-4">
                Unless otherwise agreed, Cleaning Apex & Facility Services Ltd will provide the standard cleaning products and equipment required to complete the booked service.
              </p>
              <p className="text-gray-600">
                Customers should inform us before the appointment of any allergies, sensitivities or requirements relating to cleaning products.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Moving Furniture and Heavy Items</h2>
              <p className="text-gray-600 mb-4">
                Our cleaners may move lightweight items where reasonably necessary to complete the cleaning.
              </p>
              <p className="text-gray-600 mb-4">
                For health and safety reasons, cleaners are not required to move excessively heavy furniture, appliances or other items that cannot reasonably and safely be moved by one person.
              </p>
              <p className="text-gray-600">
                Areas that cannot safely be accessed may not be cleaned.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Times</h2>
              <p className="text-gray-600 mb-4">
                Any estimated cleaning duration provided before the appointment is an estimate.
              </p>
              <p className="text-gray-600 mb-4">
                The actual time required may vary depending on the size, condition and cleanliness of the property and the services requested.
              </p>
              <p className="text-gray-600">
                If substantially additional work is required beyond the agreed scope, we will discuss this with the customer before carrying out chargeable additional work.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. End of Tenancy Cleaning</h2>
              <p className="text-gray-600 mb-4">
                Our End of Tenancy Cleaning service is carried out to the scope agreed when the booking is confirmed.
              </p>
              <p className="text-gray-600 mb-4">
                Where advertised, our <strong>48-hour cleaning guarantee</strong> means that if an area included within the original cleaning specification has been missed or has not been cleaned to the agreed standard, the customer should contact us within <strong>48 hours of completion</strong>.
              </p>
              <p className="text-gray-600 mb-4">
                Where the complaint is valid, we will arrange to return and rectify the relevant area at no additional cleaning charge.
              </p>
              <p className="text-gray-600 mb-4">
                The guarantee does not cover:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Areas or services that were not included in the original booking.</li>
                <li>New dirt, staining or damage occurring after our service.</li>
                <li>Permanent stains, wear, deterioration or damage that cannot reasonably be removed through normal cleaning.</li>
                <li>Issues caused by third parties entering or using the property after cleaning.</li>
                <li>Additional cleaning subsequently requested by a landlord, agent or inventory clerk that was outside the original agreed scope.</li>
              </ul>
              <p className="text-gray-600">
                The guarantee is a cleaning rectification guarantee and does not constitute a guarantee that a landlord or letting agent will return a customer&apos;s tenancy deposit.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Damage and Breakages</h2>
              <p className="text-gray-600 mb-4">
                We take reasonable care while working in customers&apos; properties.
              </p>
              <p className="text-gray-600 mb-4">
                Any alleged damage or breakage should be reported to us as soon as reasonably possible, together with photographs or other relevant information where available.
              </p>
              <p className="text-gray-600 mb-4">
                We will investigate reported incidents and deal with valid claims in accordance with our legal obligations and any applicable insurance arrangements.
              </p>
              <p className="text-gray-600 mb-4">
                Pre-existing damage, normal wear and tear, deterioration, defective items or damage resulting from unstable or improperly fitted items are not considered damage caused by our cleaning service.
              </p>
              <p className="text-gray-600">
                Nothing in these terms excludes or limits liability where doing so would be unlawful.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Complaints</h2>
              <p className="text-gray-600 mb-4">
                If you are dissatisfied with any aspect of the service, please contact Cleaning Apex & Facility Services Ltd as soon as possible and provide details of the issue.
              </p>
              <p className="text-gray-600 mb-4">
                Where appropriate, we may request photographs so that we can assess the problem.
              </p>
              <p className="text-gray-600">
                We will aim to resolve legitimate service issues fairly and within a reasonable period.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Parking and Additional Charges</h2>
              <p className="text-gray-600 mb-4">
                The customer should inform us before booking if paid parking, congestion charges or other unavoidable access charges apply to the property.
              </p>
              <p className="text-gray-600 mb-4">
                Where such charges have not been included in the quoted price, they may be added to the final amount where this has been communicated and agreed with the customer.
              </p>
              <p className="text-gray-600">
                Any additional service requested on the day may incur an additional charge, which will be agreed before the additional work is carried out.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Photos</h2>
              <p className="text-gray-600 mb-4">
                Where necessary, photographs may be taken before or after cleaning to document the condition of the property, confirm completion of work or assist with resolving a complaint.
              </p>
              <p className="text-gray-600">
                We will not use identifiable photographs of a customer&apos;s property for advertising or promotional purposes without appropriate permission.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Consumer Rights</h2>
              <p className="text-gray-600 mb-4">
                Nothing in these Terms & Conditions is intended to restrict or remove any rights customers have under applicable UK consumer law.
              </p>
              <p className="text-gray-600 mb-4">
                Where a customer has statutory cancellation rights for a booking made online, by telephone or away from our business premises, those rights will apply.
              </p>
              <p className="text-gray-600">
                Where a customer specifically requests that services begin during an applicable statutory cancellation period, additional rules concerning cancellation and payment for services already supplied may apply.
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Changes to a Booking</h2>
              <p className="text-gray-600 mb-4">
                Any changes to the property, cleaning requirements or services requested should be communicated before the appointment.
              </p>
              <p className="text-gray-600 mb-4">
                Significant changes may result in a revised quotation.
              </p>
              <p className="text-gray-600">
                We will obtain the customer&apos;s agreement before carrying out additional chargeable work.
              </p>
            </div>

            {/* Section 16 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms & Conditions are governed by the applicable laws of England and Wales.
              </p>
              <p className="text-gray-600">
                Customers retain any rights they have regarding where legal proceedings may be brought under applicable consumer law.
              </p>
            </div>

            {/* Section 17 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact</h2>
              <p className="text-gray-600 mb-4">
                Questions about a booking, cancellation, payment or these Terms & Conditions should be directed to Cleaning Apex & Facility Services Ltd using the contact details provided on our website.
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="list-none text-gray-600 space-y-2">
                  <li><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline">{COMPANY_INFO.email}</a></li>
                  <li><strong>Phone:</strong> <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">{COMPANY_INFO.phone}</a></li>
                  <li><strong>Address:</strong> {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}</li>
                </ul>
              </div>
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
