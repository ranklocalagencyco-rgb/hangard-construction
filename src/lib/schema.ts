import { site, silos } from "./site";
import type { Service, Area, FAQ, Silo } from "./types";
import { servicesInSilo, serviceKey } from "../data/services";
import { areasMeta } from "../data/areas-meta";

/**
 * JSON-LD builders for the 55-page architecture, following schema-kit.md.
 * One GeneralContractor entity (#localbusiness) is the single source of truth;
 * every Service/area node references it as `provider`. FAQPage nodes are built
 * from each page's *visible* FAQ content so structured data matches the page.
 */

const ORIGIN = site.url; // https://hg-construction.co.uk
const BIZ_ID = `${ORIGIN}/#localbusiness`;
const SITE_ID = `${ORIGIN}/#website`;
const ref = (id: string) => ({ "@id": id });
const abs = (path: string) => (path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`);

const crumbLabel: Record<Silo, string> = {
  services: "Services",
  installations: "Installations",
  maintenance: "Maintenance",
};

const postalAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postcode,
  addressCountry: site.address.country,
});

// Per-service schema detail, lifted from schema-kit.md (serviceType, description,
// keyword-informed areaServed). Service node `name` reuses each page's <h1>.
const serviceSchema: Record<
  string,
  { serviceType: string; description: string; areaServed: string[] }
> = {
  "services/extensions": {
    serviceType: "House Extensions",
    description:
      "Single, double-storey, wrap-around and side-return house extensions, designed and built across West London, Buckinghamshire and the Home Counties.",
    areaServed: ["Ealing", "Richmond", "Chiswick", "Chelsea", "Fulham", "Watford", "Uxbridge", "Harefield"],
  },
  "services/renovations": {
    serviceType: "Home Renovations",
    description:
      "Full-house renovations, period property restoration and structural refurbishments across West London, Buckinghamshire and the Chilterns.",
    areaServed: ["Beaconsfield", "Gerrards Cross", "Amersham", "Harefield", "Watford"],
  },
  "services/basement-conversions": {
    serviceType: "Basement Conversions",
    description:
      "Basement excavation, underpinning and conversion for high-value homes, with party-wall and structural engineering managed end to end.",
    areaServed: ["Kensington", "Chelsea", "Fulham", "Holland Park", "Richmond", "Harefield"],
  },
  "services/loft-conversions": {
    serviceType: "Loft Conversions",
    description:
      "Dormer, hip-to-gable, mansard and rooflight loft conversions, designed and built across West London and Hertfordshire.",
    areaServed: ["Watford", "Ealing", "Richmond", "Windsor", "Bracknell", "Chiswick", "Fulham", "Harefield"],
  },
  "services/roofing": {
    serviceType: "Roofing",
    description:
      "New roofs, re-roofing, flat roofs, repairs and heritage roofing across West London and the Home Counties.",
    areaServed: ["Chelsea", "Watford", "Ealing", "Kensington", "Windsor", "Uxbridge", "Ruislip", "Harefield"],
  },
  "installations/kitchens": {
    serviceType: "Kitchen Fitting & Installation",
    description:
      "Full kitchen design, supply and installation — bespoke and fitted kitchens, worktops, plumbing, electrics and tiling.",
    areaServed: ["Watford", "Uxbridge", "Amersham", "Harefield", "Ruislip"],
  },
  "installations/bathrooms": {
    serviceType: "Bathroom Fitting & Installation",
    description:
      "Full bathroom design and installation — en-suites, wet rooms, walk-in showers, tiling, plumbing and underfloor heating.",
    areaServed: ["Watford", "Uxbridge", "Pinner", "Harefield", "Ruislip"],
  },
  "installations/electrical": {
    serviceType: "Electrical Services",
    description:
      "Domestic and commercial electricians — full and partial rewires, consumer-unit (fuse board) upgrades, EV charger installation, fault-finding, EICR testing and emergency call-outs across West London and the Home Counties.",
    areaServed: ["Watford", "Ealing", "Richmond", "Uxbridge", "Windsor", "Amersham", "Harefield"],
  },
  "installations/plumbing-heating": {
    serviceType: "Plumbing & Heating",
    description:
      "Boiler installation, central heating, bathroom and kitchen plumbing, leaks, repairs and underfloor heating.",
    areaServed: ["Uxbridge", "Ruislip", "Northwood", "Richmond", "Watford", "Harefield"],
  },
  "maintenance/property-maintenance": {
    serviceType: "Property Maintenance",
    description:
      "Planned and reactive property maintenance for homeowners, landlords and managing agents, including prime central London property care.",
    areaServed: ["Central London", "Mayfair", "Kensington", "Chelsea", "Richmond", "Watford", "Harefield"],
  },
  "maintenance/patios-driveways": {
    serviceType: "Driveways & Patios",
    description:
      "Block paving and resin-bound driveways, patios, paving and permeable (SuDS-compliant) surfaces.",
    areaServed: ["Watford", "Gerrards Cross", "Windsor", "Harefield", "Uxbridge"],
  },
  "maintenance/landscaping": {
    serviceType: "Landscaping & Garden Design",
    description:
      "Garden design and build, hard and soft landscaping, patios, lawns, garden rooms and planting.",
    areaServed: ["Windsor", "Ascot", "Beaconsfield", "Watford", "Richmond", "Bracknell", "Harefield"],
  },
};

function breadcrumb(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

function faqPage(faqs: FAQ[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function localBusinessNode() {
  const areaServed = [
    "Harefield",
    ...areasMeta.filter((a) => a.slug !== "harefield").map((a) => a.name),
  ];
  return {
    "@type": "GeneralContractor",
    "@id": BIZ_ID,
    name: site.name,
    url: `${ORIGIN}/`,
    image: `${ORIGIN}/logo/hangard-logo.png`,
    logo: `${ORIGIN}/logo/hangard-logo.png`,
    telephone: site.phoneIntl,
    email: site.email,
    priceRange: "£££",
    address: postalAddress(),
    areaServed,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };
}

const websiteNode = () => ({
  "@type": "WebSite",
  "@id": SITE_ID,
  url: `${ORIGIN}/`,
  name: site.name,
  publisher: ref(BIZ_ID),
});

// ---- per-page graphs ----

export const homeGraph = () => [
  localBusinessNode(),
  websiteNode(),
  breadcrumb([{ name: "Home", url: `${ORIGIN}/` }]),
];

export const aboutGraph = () => [
  {
    "@type": "AboutPage",
    "@id": `${ORIGIN}/about#webpage`,
    url: abs("/about"),
    name: `About ${site.name}`,
    isPartOf: ref(SITE_ID),
    about: ref(BIZ_ID),
  },
  breadcrumb([
    { name: "Home", url: `${ORIGIN}/` },
    { name: "About", url: abs("/about") },
  ]),
];

export const contactGraph = () => [
  {
    "@type": "ContactPage",
    "@id": `${ORIGIN}/contact#webpage`,
    url: abs("/contact"),
    name: `Contact ${site.name}`,
    isPartOf: ref(SITE_ID),
    about: ref(BIZ_ID),
  },
  {
    "@type": "Organization",
    "@id": BIZ_ID,
    name: site.name,
    telephone: site.phoneIntl,
    email: site.email,
    address: postalAddress(),
  },
  breadcrumb([
    { name: "Home", url: `${ORIGIN}/` },
    { name: "Contact", url: abs("/contact") },
  ]),
];

export function siloHubGraph(silo: Silo) {
  const hubUrl = abs(silos[silo].href);
  return [
    {
      "@type": "CollectionPage",
      "@id": `${hubUrl}#webpage`,
      url: hubUrl,
      name: silos[silo].label,
      isPartOf: ref(SITE_ID),
      about: ref(BIZ_ID),
      hasPart: servicesInSilo(silo).map((s) => ({
        "@type": "Service",
        name: s.navLabel,
        url: abs(`/${s.silo}/${s.slug}`),
      })),
    },
    breadcrumb([
      { name: "Home", url: `${ORIGIN}/` },
      { name: crumbLabel[silo], url: hubUrl },
    ]),
  ];
}

export const areasHubGraph = () => [
  {
    "@type": "CollectionPage",
    "@id": `${ORIGIN}/service-areas#webpage`,
    url: abs("/service-areas"),
    name: "Areas We Cover",
    isPartOf: ref(SITE_ID),
    about: ref(BIZ_ID),
    description:
      "The towns and boroughs Hangard Construction serves across West London, Buckinghamshire, Hertfordshire, Berkshire and prime central London.",
  },
  breadcrumb([
    { name: "Home", url: `${ORIGIN}/` },
    { name: "Service Areas", url: abs("/service-areas") },
  ]),
];

export function serviceGraph(service: Service) {
  const url = abs(`/${service.silo}/${service.slug}`);
  const meta = serviceSchema[serviceKey(service)];
  return [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      serviceType: meta.serviceType,
      name: service.h1,
      url,
      provider: ref(BIZ_ID),
      areaServed: meta.areaServed,
      description: meta.description,
    },
    breadcrumb([
      { name: "Home", url: `${ORIGIN}/` },
      { name: crumbLabel[service.silo], url: abs(silos[service.silo].href) },
      { name: service.navLabel, url },
    ]),
    faqPage(service.faqs),
  ];
}

export function areaGraph(area: Area) {
  const url = abs(`/service-areas/${area.slug}`);
  return [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      serviceType: "Construction & Renovation",
      name: area.h1,
      url,
      provider: ref(BIZ_ID),
      areaServed: { "@type": "Place", name: area.name },
      description: `House extensions, loft conversions, renovations, kitchens, bathrooms, roofing, driveways and landscaping for homeowners in ${area.name}.`,
    },
    breadcrumb([
      { name: "Home", url: `${ORIGIN}/` },
      { name: "Service Areas", url: abs("/service-areas") },
      { name: area.name, url },
    ]),
    faqPage(area.faqs),
  ];
}

// ---- Journal / blog ----

export function blogIndexGraph(
  items: { slug: string; title: string; datePublished: string }[],
) {
  return [
    {
      "@type": "Blog",
      "@id": `${ORIGIN}/blog#blog`,
      url: abs("/blog"),
      name: `Journal — ${site.name}`,
      description:
        "Expert advice on extensions, renovations, planning and premium home improvement across West London and the Home Counties.",
      isPartOf: ref(SITE_ID),
      publisher: ref(BIZ_ID),
      blogPost: items.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: abs(`/blog/${p.slug}`),
        datePublished: p.datePublished,
      })),
    },
    breadcrumb([
      { name: "Home", url: `${ORIGIN}/` },
      { name: "Journal", url: abs("/blog") },
    ]),
  ];
}

export function postGraph(p: {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  faqs?: FAQ[];
}) {
  const url = abs(`/blog/${p.slug}`);
  const graph: object[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#post`,
      headline: p.title,
      description: p.description,
      image: p.image,
      datePublished: p.datePublished,
      dateModified: p.dateModified,
      author: ref(BIZ_ID),
      publisher: ref(BIZ_ID),
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    breadcrumb([
      { name: "Home", url: `${ORIGIN}/` },
      { name: "Journal", url: abs("/blog") },
      { name: p.title, url },
    ]),
  ];
  if (p.faqs?.length) graph.push(faqPage(p.faqs));
  return graph;
}
