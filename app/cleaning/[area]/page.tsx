import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, CheckCircle, Star } from "lucide-react";
import { SERVICES, COMPANY_INFO } from "@/lib/constants";

// Area data - All London boroughs
const AREA_DATA: Record<string, { name: string; description: string; postcodes: string[] }> = {
  hackney: {
    name: "Hackney",
    description: "Professional cleaning services in Hackney, East London. We cover all E5, E8, E9, and N16 postcodes.",
    postcodes: ["E5", "E8", "E9", "N16"],
  },
  islington: {
    name: "Islington",
    description: "Expert cleaning services throughout Islington, North London. Covering N1, N5, N7, and EC1 areas.",
    postcodes: ["N1", "N5", "N7", "EC1"],
  },
  camden: {
    name: "Camden",
    description: "Trusted cleaning professionals in Camden, North London. Serving NW1, NW3, NW5, and WC1 postcodes.",
    postcodes: ["NW1", "NW3", "NW5", "WC1"],
  },
  westminster: {
    name: "Westminster",
    description: "Premium cleaning services in Westminster, Central London. Covering SW1, W1, W2, and WC2.",
    postcodes: ["SW1", "W1", "W2", "WC2"],
  },
  greenwich: {
    name: "Greenwich",
    description: "Reliable cleaning services in Greenwich, South East London. Serving SE3, SE7, SE10, and SE18 areas.",
    postcodes: ["SE3", "SE7", "SE10", "SE18"],
  },
  southwark: {
    name: "Southwark",
    description: "Professional cleaners in Southwark, South London. Covering SE1, SE5, SE15, SE17, and SE22.",
    postcodes: ["SE1", "SE5", "SE15", "SE17", "SE22"],
  },
  lewisham: {
    name: "Lewisham",
    description: "Quality cleaning services in Lewisham, South East London. Covering SE4, SE6, SE12, SE13, and SE14.",
    postcodes: ["SE4", "SE6", "SE12", "SE13", "SE14"],
  },
  "tower-hamlets": {
    name: "Tower Hamlets",
    description: "Professional cleaning in Tower Hamlets, East London. Serving E1, E2, E3, E14, and E1W areas.",
    postcodes: ["E1", "E2", "E3", "E14", "E1W"],
  },
  lambeth: {
    name: "Lambeth",
    description: "Expert cleaning services in Lambeth, South London. Covering SE11, SE24, SE27, SW2, SW4, and SW9.",
    postcodes: ["SE11", "SE24", "SE27", "SW2", "SW4", "SW9"],
  },
  wandsworth: {
    name: "Wandsworth",
    description: "Reliable cleaning services in Wandsworth, South West London. Serving SW11, SW12, SW15, SW17, and SW18.",
    postcodes: ["SW11", "SW12", "SW15", "SW17", "SW18"],
  },
  "hammersmith-fulham": {
    name: "Hammersmith & Fulham",
    description: "Quality cleaning in Hammersmith and Fulham, West London. Covering W6, W12, W14, SW6, and W3.",
    postcodes: ["W6", "W12", "W14", "SW6", "W3"],
  },
  "kensington-chelsea": {
    name: "Kensington & Chelsea",
    description: "Premium cleaning services in Kensington and Chelsea. Serving SW3, SW5, SW7, SW10, W8, and W11.",
    postcodes: ["SW3", "SW5", "SW7", "SW10", "W8", "W11"],
  },
  newham: {
    name: "Newham",
    description: "Affordable cleaning services in Newham, East London. Covering E6, E7, E12, E13, E15, and E16.",
    postcodes: ["E6", "E7", "E12", "E13", "E15", "E16"],
  },
  "barking-dagenham": {
    name: "Barking & Dagenham",
    description: "Professional cleaning in Barking and Dagenham. Serving IG11 and RM postcodes.",
    postcodes: ["IG11", "RM8", "RM9", "RM10"],
  },
  bexley: {
    name: "Bexley",
    description: "Trusted cleaning services in Bexley, South East London. Covering DA5, DA6, DA7, DA14, DA15, and DA16.",
    postcodes: ["DA5", "DA6", "DA7", "DA14", "DA15", "DA16"],
  },
  bromley: {
    name: "Bromley",
    description: "Expert cleaning services in Bromley, South London. Serving BR1, BR2, BR3, BR4, BR5, and BR6.",
    postcodes: ["BR1", "BR2", "BR3", "BR4", "BR5", "BR6"],
  },
  croydon: {
    name: "Croydon",
    description: "Quality cleaning services in Croydon, South London. Covering CR0, CR2, CR7, and CR9 postcodes.",
    postcodes: ["CR0", "CR2", "CR7", "CR9"],
  },
  sutton: {
    name: "Sutton",
    description: "Reliable cleaning services in Sutton, South London. Serving SM1, SM2, SM3, SM5, and SM6.",
    postcodes: ["SM1", "SM2", "SM3", "SM5", "SM6"],
  },
  merton: {
    name: "Merton",
    description: "Professional cleaners in Merton, South West London. Covering SW19, SW20, CR4, and SM4.",
    postcodes: ["SW19", "SW20", "CR4", "SM4"],
  },
  kingston: {
    name: "Kingston upon Thames",
    description: "Expert cleaning services in Kingston, South West London. Serving KT1, KT2, KT3, and KT5.",
    postcodes: ["KT1", "KT2", "KT3", "KT5"],
  },
  richmond: {
    name: "Richmond upon Thames",
    description: "Premium cleaning in Richmond, South West London. Covering TW1, TW2, TW9, TW10, and SW14.",
    postcodes: ["TW1", "TW2", "TW9", "TW10", "SW14"],
  },
  hounslow: {
    name: "Hounslow",
    description: "Quality cleaning services in Hounslow, West London. Serving TW3, TW4, TW5, TW7, and TW8.",
    postcodes: ["TW3", "TW4", "TW5", "TW7", "TW8"],
  },
  ealing: {
    name: "Ealing",
    description: "Trusted cleaning services in Ealing, West London. Covering W5, W7, W13, UB1, and UB6.",
    postcodes: ["W5", "W7", "W13", "UB1", "UB6"],
  },
  brent: {
    name: "Brent",
    description: "Professional cleaning in Brent, North West London. Serving NW2, NW6, NW9, NW10, and HA9.",
    postcodes: ["NW2", "NW6", "NW9", "NW10", "HA9"],
  },
  harrow: {
    name: "Harrow",
    description: "Expert cleaning services in Harrow, North West London. Covering HA1, HA2, HA3, HA5, and HA7.",
    postcodes: ["HA1", "HA2", "HA3", "HA5", "HA7"],
  },
  barnet: {
    name: "Barnet",
    description: "Quality cleaning services in Barnet, North London. Serving EN4, EN5, N2, N3, N11, N12, and NW7.",
    postcodes: ["EN4", "EN5", "N2", "N3", "N11", "N12", "NW7"],
  },
  haringey: {
    name: "Haringey",
    description: "Reliable cleaning services in Haringey, North London. Covering N4, N6, N8, N10, N15, N17, and N22.",
    postcodes: ["N4", "N6", "N8", "N10", "N15", "N17", "N22"],
  },
  enfield: {
    name: "Enfield",
    description: "Professional cleaning in Enfield, North London. Serving EN1, EN2, EN3, N9, N13, N14, and N21.",
    postcodes: ["EN1", "EN2", "EN3", "N9", "N13", "N14", "N21"],
  },
  "waltham-forest": {
    name: "Waltham Forest",
    description: "Trusted cleaning services in Waltham Forest, East London. Covering E4, E10, E11, and E17.",
    postcodes: ["E4", "E10", "E11", "E17"],
  },
};

interface Props {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return Object.keys(AREA_DATA).map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const areaInfo = AREA_DATA[area];

  if (!areaInfo) {
    return { title: "Area Not Found" };
  }

  return {
    title: `Cleaning Services ${areaInfo.name} | Professional Cleaners`,
    description: areaInfo.description,
    openGraph: {
      title: `Cleaning Services in ${areaInfo.name} | Cleaning Apex`,
      description: `Professional domestic and commercial cleaning in ${areaInfo.name}. Fully insured, vetted cleaners. Free quotes.`,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { area } = await params;
  const areaInfo = AREA_DATA[area];

  if (!areaInfo) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Area Not Found</h1>
          <Link href="/areas" className="text-primary hover:underline">
            View all service areas
          </Link>
        </div>
      </div>
    );
  }

  // JSON-LD Schema for Local Business in this area
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Cleaning Apex - ${areaInfo.name}`,
    description: areaInfo.description,
    url: `https://cleaningapex.co.uk/cleaning/${area}`,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    areaServed: {
      "@type": "City",
      name: areaInfo.name,
    },
    priceRange: "££",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-700 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-secondary mb-4">
              <MapPin size={20} />
              <span className="font-medium">Serving {areaInfo.name}</span>
            </div>
            <h1 className="heading-1 text-white mb-4">
              Professional Cleaning Services in {areaInfo.name}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {areaInfo.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Get a Free Quote
                <ArrowRight size={20} />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                <Phone size={20} />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Postcodes */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-600 font-medium">Postcodes we cover:</span>
            {areaInfo.postcodes.map((postcode) => (
              <span
                key={postcode}
                className="px-4 py-2 bg-white rounded-full text-primary font-semibold border border-primary/20"
              >
                {postcode}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              Cleaning Services Available in {areaInfo.name}
            </h2>
            <p className="text-gray-600 text-lg">
              We offer our full range of professional cleaning services to homes and businesses in {areaInfo.name}.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="text-primary font-medium text-sm hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-gray-900 mb-6">
                Why Choose Cleaning Apex in {areaInfo.name}?
              </h2>
              <div className="space-y-4">
                {[
                  "Local cleaners who know the area",
                  "Fully insured and vetted staff",
                  "Flexible scheduling to suit you",
                  "Eco-friendly cleaning products",
                  "Satisfaction guaranteed",
                  "Competitive local rates",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6">
                &ldquo;Excellent service in {areaInfo.name}! The team was professional, thorough, and left our home spotless.&rdquo;
              </p>
              <p className="font-semibold text-gray-900">Happy Customer</p>
              <p className="text-gray-500 text-sm">{areaInfo.name} resident</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready for a Cleaner Home in {areaInfo.name}?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. We serve all {areaInfo.postcodes.join(", ")} postcodes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
