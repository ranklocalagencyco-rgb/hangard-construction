import type { Silo } from "./types";

export const site = {
  name: "Hangard Construction",
  shortName: "Hangard",
  tagline: "Built around you. Finished to perfection.",
  description:
    "Premium construction and renovation across West London, the Chilterns and prime central London. Built around you. Finished to perfection.",
  // Canonical/base URL — drives canonical tags, OG/Twitter image, schema, sitemap, robots, llms.
  // Switch to "https://hg-construction.co.uk" once that domain is connected in Vercel.
  url: "https://hangard-construction.vercel.app",
  phoneDisplay: "07734 903439",
  phoneHref: "+447734903439",
  phoneIntl: "+44 7734 903439",
  phoneNote: "",
  email: "hello@hg-construction.co.uk",
  addressLines: ["Hangard Construction", "3 Anderson Close, Harefield", "Uxbridge, UB9 6HF"],
  /** structured NAP — keep byte-identical to the Google Business Profile */
  address: {
    street: "3 Anderson Close",
    locality: "Harefield",
    postTown: "Uxbridge",
    region: "Greater London",
    postcode: "UB9 6HF",
    country: "GB",
  },
  hours: "Mon–Sat, 8am–6pm",
  base: "Harefield",
  regionBlurb:
    "From our Harefield base we serve homeowners across West London, the Chilterns, Hertfordshire, Berkshire and prime central London.",
  social: [
    { label: "Instagram", href: "#", icon: "instagram" as const },
    { label: "LinkedIn", href: "#", icon: "linkedin" as const },
  ],
} as const;

/** The three service silos and their hub pages. */
export const silos: Record<Silo, { label: string; href: string; eyebrow: string }> = {
  services: {
    label: "Construction Services",
    href: "/services",
    eyebrow: "Construction",
  },
  installations: {
    label: "Installations",
    href: "/installations",
    eyebrow: "Installations",
  },
  maintenance: {
    label: "Property Maintenance & Outdoor",
    href: "/maintenance",
    eyebrow: "Maintenance & outdoor",
  },
};

export const siloOrder: Silo[] = ["services", "installations", "maintenance"];

/** Region groupings for the service-areas hub (order matters). */
export const regions: { name: string; slugs: string[] }[] = [
  {
    name: "Buckinghamshire & the Chilterns",
    slugs: [
      "amersham",
      "beaconsfield",
      "burnham",
      "chalfont",
      "chesham",
      "denham",
      "farnham-common",
      "gerrards-cross",
      "iver",
      "stoke-poges",
    ],
  },
  {
    name: "Prime central & west London",
    slugs: [
      "kensington",
      "chelsea",
      "fulham",
      "holland-park",
      "mayfair",
      "knightsbridge",
      "central-london",
      "putney",
    ],
  },
  {
    name: "Hillingdon & Harrow",
    slugs: [
      "harefield",
      "ickenham",
      "uxbridge",
      "ruislip",
      "eastcote",
      "northwood",
      "pinner",
      "hatch-end",
      "stanmore",
    ],
  },
  { name: "West London", slugs: ["ealing", "chiswick", "richmond"] },
  { name: "Hertfordshire", slugs: ["watford", "rickmansworth", "chorleywood"] },
  { name: "Berkshire", slugs: ["ascot", "bracknell", "windsor"] },
];

export const serviceHref = (silo: Silo, slug: string) => `/${silo}/${slug}`;
export const areaHref = (slug: string) => `/service-areas/${slug}`;
