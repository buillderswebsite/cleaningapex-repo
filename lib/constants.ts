export const COMPANY_INFO = {
  name: "Cleaning Apex & Facility Services Limited",
  shortName: "Cleaning Apex",
  tagline: "At the Peak of Cleanliness",
  phone: "020 1234 5678",
  whatsapp: "44 7960691109",
  email: "info@cleaningapexfacillities.co.uk",
  address: {
    street: "98 Fairlawn Park",
    city: "London",
    postcode: "SE26 5SB",
    country: "United Kingdom",
  },
  hours: {
    weekdays: "7:00 AM - 8:00 PM",
    saturday: "8:00 AM - 6:00 PM",
    sunday: "Closed",
  },
  social: {
    facebook: "https://facebook.com/cleaningapex",
    instagram: "https://instagram.com/cleaningapex",
    linkedin: "https://linkedin.com/company/cleaningapex",
  },
};

export const COLORS = {
  primary: "#1B4B8A",
  secondary: "#5BA3D9",
  accent: "#4CAF50",
  white: "#FFFFFF",
};

export const SERVICES = [
  {
    id: "domestic",
    title: "Domestic Cleaning",
    shortDescription: "Regular home cleaning tailored to your schedule",
    description:
      "Keep your home spotless with our reliable domestic cleaning services. Our trained professionals handle everything from dusting and vacuuming to kitchen and bathroom deep cleans.",
    icon: "Home",
    image: "/images/vacuuming.jpg",
    features: [
      "Weekly, bi-weekly, or monthly visits",
      "All cleaning supplies included",
      "Fully vetted and insured cleaners",
      "Flexible scheduling",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    shortDescription: "Professional cleaning for businesses of all sizes",
    description:
      "Create a pristine work environment that impresses clients and keeps employees healthy. We offer customised commercial cleaning packages for offices, retail spaces, and more.",
    icon: "Building2",
    image: "/images/office-clean.jpg",
    features: [
      "After-hours cleaning available",
      "Reception and common areas",
      "Washroom sanitisation",
      "Waste management",
    ],
  },
  {
    id: "end-of-tenancy",
    title: "End of Tenancy Cleaning",
    shortDescription: "Get your full deposit back with our deep clean",
    description:
      "Moving out? Our comprehensive end of tenancy cleaning meets the highest letting agent standards. We guarantee your deposit back or we'll re-clean for free.",
    icon: "Key",
    image: "/images/bathroom-clean.jpg",
    features: [
      "Deposit-back guarantee",
      "Oven and appliance cleaning",
      "Carpet deep cleaning",
      "Inventory checklist cleaning",
    ],
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    shortDescription: "Intensive cleaning for a thorough refresh. Pricing by property size, starts from £179",
    description:
      "Sometimes your space needs more than a regular clean. Our deep cleaning service reaches every corner, tackling built-up grime, limescale, and neglected areas.",
    icon: "Sparkles",
    image: "/images/kitchen-clean.jpg",
    features: [
      "Inside cupboards and drawers",
      "Light fixtures and ceiling fans",
      "Skirting boards and door frames",
      "Behind appliances",
    ],
  },
  {
    id: "office",
    title: "Office Cleaning",
    shortDescription: "Keep your workspace professional and hygienic",
    description:
      "A clean office boosts productivity and makes a great impression. We provide reliable daily, weekly, or one-off office cleaning tailored to your business needs.",
    icon: "Briefcase",
    image: "/images/table-cleaning.jpg",
    features: [
      "Desk and workstation cleaning",
      "Kitchen and break room sanitisation",
      "Meeting room preparation",
      "Floor care and vacuuming",
    ],
  },
  {
    id: "carpet",
    title: "Carpet & Upholstery Cleaning",
    shortDescription: "Restore your carpets and furniture to like-new condition",
    description:
      "Professional carpet and upholstery cleaning removes deep-seated dirt, stains, and allergens. We use industry-leading equipment for outstanding results.",
    icon: "Sofa",
    image: "/images/carpet-cleaning.jpg",
    features: [
      "Hot water extraction",
      "Stain removal treatment",
      "Quick drying times",
      "Deodorising included",
    ],
  },
];

export const SERVICE_AREAS = {
  london: [
    "Westminster",
    "Camden",
    "Islington",
    "Hackney",
    "Tower Hamlets",
    "Greenwich",
    "Lewisham",
    "Southwark",
    "Lambeth",
    "Wandsworth",
    "Hammersmith & Fulham",
    "Kensington & Chelsea",
    "City of London",
    "Newham",
    "Barking & Dagenham",
    "Redbridge",
    "Havering",
    "Bexley",
    "Bromley",
    "Croydon",
    "Sutton",
    "Merton",
    "Kingston upon Thames",
    "Richmond upon Thames",
    "Hounslow",
    "Ealing",
    "Brent",
    "Harrow",
    "Barnet",
    "Haringey",
    "Enfield",
    "Waltham Forest",
  ],
  surrounding: [
    "Watford",
    "St Albans",
    "Hemel Hempstead",
    "Slough",
    "Windsor",
    "Maidenhead",
    "Reading",
    "Woking",
    "Guildford",
    "Epsom",
    "Dartford",
    "Gravesend",
    "Romford",
    "Ilford",
    "Enfield",
    "Barnet",
  ],
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Islington, London",
    rating: 5,
    text: "Absolutely brilliant service! The team arrived on time and left my flat sparkling clean. I've been using Cleaning Apex for six months now and they've never let me down.",
    service: "Domestic Cleaning",
  },
  {
    id: 2,
    name: "James Thompson",
    location: "Canary Wharf",
    rating: 5,
    text: "We switched to Cleaning Apex for our office cleaning and the difference is remarkable. Professional, thorough, and always reliable. Highly recommend for any business.",
    service: "Commercial Cleaning",
  },
  {
    id: 3,
    name: "Emma Roberts",
    location: "Croydon",
    rating: 5,
    text: "Used their end of tenancy service and got my full deposit back! They cleaned areas I didn't even think about. The deposit-back guarantee gave me peace of mind.",
    service: "End of Tenancy Cleaning",
  },
  {
    id: 4,
    name: "David Chen",
    location: "Richmond",
    rating: 5,
    text: "The deep cleaning service transformed our home. After two years of lockdown, we needed a proper refresh. The attention to detail was impressive.",
    service: "Deep Cleaning",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/areas", label: "Service Areas" },
  { href: "/contact", label: "Get a Quote" },
];
