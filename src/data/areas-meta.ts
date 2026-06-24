import type { Service } from "../lib/types";
import { getService } from "./services";

export interface AreaMeta {
  slug: string;
  name: string;
  region: string;
  council: string;
  /** service keys ("silo/slug") to feature as most-in-demand here */
  leadServices: string[];
  /** nearby area slugs */
  nearby: string[];
  heroImage: string;
  overviewImage: string;
  galleryImages: string[];
  /** related Journal post slugs (reverse links to the blog) */
  guides: string[];
  /** content steer for the narrative generator */
  note: string;
}

// Reverse links from area pages to the matching Journal posts.
const guidesBySlug: Record<string, string[]> = {
  ealing: ["house-extension-cost-west-london", "loft-conversion-vs-extension"],
  richmond: ["house-extension-cost-west-london", "signs-your-roof-needs-replacing"],
  chiswick: ["house-extension-cost-west-london"],
  watford: ["loft-conversion-vs-extension", "signs-your-roof-needs-replacing"],
  kensington: ["basement-planning-permission-rbkc"],
  chelsea: ["basement-planning-permission-rbkc"],
  fulham: ["basement-planning-permission-rbkc"],
  beaconsfield: ["renovating-conservation-area-guide"],
  "gerrards-cross": ["renovating-conservation-area-guide"],
  amersham: ["renovating-conservation-area-guide"],
};

// Deterministic image pool so every area gets valid, varied photography.
const POOL = [
  "p01.png", "p04.png", "p05.png", "p06.png", "p07.png", "p09.png",
  "p10.png", "p11.png", "p12.png", "p13.png", "p15.png", "p16.png",
  "p17.png", "p18.png", "p25.png", "p26.png", "p29.png", "p32.png",
  "p33.png", "p34.png", "p35.png", "p36.png", "p37.png", "p38.png",
];
const pick = (i: number, o: number) => POOL[(i * 5 + o) % POOL.length];

interface Seed {
  slug: string;
  name: string;
  region: string;
  council: string;
  leadServices: string[];
  nearby: string[];
  note: string;
}

const seeds: Seed[] = [
  { slug: "amersham", name: "Amersham", region: "Buckinghamshire & the Chilterns", council: "Buckinghamshire Council", leadServices: ["maintenance/landscaping", "services/renovations", "services/extensions"], nearby: ["chesham", "chalfont", "beaconsfield"], note: "Affluent detached homes, Chilterns AONB, larger plots." },
  { slug: "ascot", name: "Ascot", region: "Berkshire", council: "Bracknell Forest Council", leadServices: ["maintenance/landscaping", "services/loft-conversions", "services/extensions"], nearby: ["windsor", "bracknell"], note: "Affluent Berkshire; high-end gardens and landscaping angle." },
  { slug: "beaconsfield", name: "Beaconsfield", region: "Buckinghamshire & the Chilterns", council: "Buckinghamshire Council", leadServices: ["services/renovations", "maintenance/landscaping", "services/extensions"], nearby: ["gerrards-cross", "amersham", "farnham-common"], note: "Prestige Bucks market — large renovations and high-spec builds." },
  { slug: "bracknell", name: "Bracknell", region: "Berkshire", council: "Bracknell Forest Council", leadServices: ["maintenance/landscaping", "services/loft-conversions", "services/extensions"], nearby: ["ascot", "windsor"], note: "Newer-build estates; garden transformations and loft conversions." },
  { slug: "burnham", name: "Burnham", region: "Buckinghamshire & the Chilterns", council: "Buckinghamshire Council", leadServices: ["services/loft-conversions", "services/extensions", "installations/kitchens"], nearby: ["farnham-common", "stoke-poges", "iver"], note: "Lower search volume — keep light; broad village service mix." },
  { slug: "central-london", name: "Central London", region: "Prime central & west London", council: "Westminster / RBKC", leadServices: ["maintenance/property-maintenance", "services/basement-conversions", "services/extensions"], nearby: ["mayfair", "knightsbridge", "kensington"], note: "Prime/commercial property maintenance and basements." },
  { slug: "chalfont", name: "Chalfont", region: "Buckinghamshire & the Chilterns", council: "Buckinghamshire Council", leadServices: ["services/renovations", "services/extensions", "maintenance/landscaping"], nearby: ["gerrards-cross", "amersham", "chorleywood"], note: "Affluent Chilterns villages, low volume — renovations and extensions." },
  { slug: "chelsea", name: "Chelsea", region: "Prime central & west London", council: "the Royal Borough of Kensington and Chelsea", leadServices: ["services/roofing", "services/extensions", "services/loft-conversions"], nearby: ["kensington", "fulham", "knightsbridge"], note: "Prime terraces, basements, party-wall, heritage roofing." },
  { slug: "chesham", name: "Chesham", region: "Buckinghamshire & the Chilterns", council: "Buckinghamshire Council", leadServices: ["services/renovations", "services/extensions", "maintenance/landscaping"], nearby: ["amersham", "chalfont", "chorleywood"], note: "Chilterns market; renovations and extensions." },
  { slug: "chiswick", name: "Chiswick", region: "West London", council: "the London Borough of Hounslow", leadServices: ["services/loft-conversions", "services/extensions", "maintenance/landscaping"], nearby: ["ealing", "richmond", "fulham"], note: "Conservation areas, period family homes." },
  { slug: "chorleywood", name: "Chorleywood", region: "Hertfordshire", council: "Three Rivers District Council", leadServices: ["services/renovations", "services/extensions", "maintenance/landscaping"], nearby: ["rickmansworth", "chalfont", "chesham"], note: "Affluent, low volume — renovations and extensions." },
  { slug: "denham", name: "Denham", region: "Buckinghamshire & the Chilterns", council: "Buckinghamshire Council", leadServices: ["services/extensions", "services/renovations", "maintenance/landscaping"], nearby: ["gerrards-cross", "iver", "uxbridge"], note: "Close to the Harefield HQ — emphasise local proximity." },
  { slug: "ealing", name: "Ealing", region: "West London", council: "the London Borough of Ealing", leadServices: ["services/loft-conversions", "services/extensions", "maintenance/landscaping"], nearby: ["chiswick", "richmond"], note: "Victorian/Edwardian terraces; side-return extensions and lofts." },
  { slug: "eastcote", name: "Eastcote", region: "Hillingdon & Harrow", council: "the London Borough of Hillingdon", leadServices: ["installations/kitchens", "installations/bathrooms", "services/loft-conversions"], nearby: ["ruislip", "pinner", "ickenham"], note: "Suburban semis near HQ — kitchens, bathrooms and lofts." },
  { slug: "farnham-common", name: "Farnham Common", region: "Buckinghamshire & the Chilterns", council: "Buckinghamshire Council", leadServices: ["services/renovations", "services/extensions", "maintenance/landscaping"], nearby: ["stoke-poges", "burnham", "beaconsfield"], note: "Low volume — light page; renovations and gardens." },
  { slug: "fulham", name: "Fulham", region: "Prime central & west London", council: "the London Borough of Hammersmith & Fulham", leadServices: ["services/extensions", "services/loft-conversions", "services/basement-conversions"], nearby: ["chelsea", "putney", "kensington"], note: "Terraced 'loft + side-return' combo projects." },
  { slug: "gerrards-cross", name: "Gerrards Cross", region: "Buckinghamshire & the Chilterns", council: "Buckinghamshire Council", leadServices: ["services/renovations", "services/extensions", "maintenance/patios-driveways"], nearby: ["beaconsfield", "denham", "chalfont"], note: "Prestige Bucks; large renovations and premium driveways." },
  { slug: "harefield", name: "Harefield", region: "Hillingdon & Harrow", council: "the London Borough of Hillingdon", leadServices: ["services/loft-conversions", "services/extensions", "installations/kitchens"], nearby: ["ickenham", "uxbridge", "ruislip"], note: "Our home town and HQ. Lead with the local head-office angle and our strongest project gallery." },
  { slug: "hatch-end", name: "Hatch End", region: "Hillingdon & Harrow", council: "the London Borough of Harrow", leadServices: ["services/loft-conversions", "services/extensions", "installations/kitchens"], nearby: ["pinner", "northwood", "stanmore"], note: "Low volume — light page; lofts and extensions." },
  { slug: "holland-park", name: "Holland Park", region: "Prime central & west London", council: "the Royal Borough of Kensington and Chelsea", leadServices: ["services/basement-conversions", "maintenance/property-maintenance", "services/loft-conversions"], nearby: ["kensington", "chelsea", "mayfair"], note: "Ultra-prime; basements and HNW maintenance, not volume." },
  { slug: "ickenham", name: "Ickenham", region: "Hillingdon & Harrow", council: "the London Borough of Hillingdon", leadServices: ["installations/kitchens", "installations/bathrooms", "services/extensions"], nearby: ["ruislip", "uxbridge", "eastcote"], note: "Adjacent to Harefield HQ — stress local proximity." },
  { slug: "iver", name: "Iver", region: "Buckinghamshire & the Chilterns", council: "Buckinghamshire Council", leadServices: ["services/extensions", "services/renovations", "maintenance/landscaping"], nearby: ["denham", "burnham", "stoke-poges"], note: "Close to HQ; low volume — light page." },
  { slug: "kensington", name: "Kensington", region: "Prime central & west London", council: "the Royal Borough of Kensington and Chelsea", leadServices: ["services/basement-conversions", "services/loft-conversions", "services/roofing"], nearby: ["chelsea", "holland-park", "knightsbridge"], note: "Prime property: basements, stucco facades, heritage." },
  { slug: "knightsbridge", name: "Knightsbridge", region: "Prime central & west London", council: "RBKC / Westminster", leadServices: ["maintenance/property-maintenance", "services/basement-conversions", "services/loft-conversions"], nearby: ["chelsea", "kensington", "mayfair"], note: "Ultra-prime; HNW maintenance and basements." },
  { slug: "mayfair", name: "Mayfair", region: "Prime central & west London", council: "Westminster City Council", leadServices: ["maintenance/property-maintenance", "services/basement-conversions", "services/roofing"], nearby: ["knightsbridge", "central-london", "kensington"], note: "Prime/HNW property maintenance and basements." },
  { slug: "northwood", name: "Northwood", region: "Hillingdon & Harrow", council: "the London Borough of Hillingdon", leadServices: ["installations/plumbing-heating", "services/loft-conversions", "maintenance/property-maintenance"], nearby: ["pinner", "ruislip", "rickmansworth"], note: "Affluent; close to HQ." },
  { slug: "pinner", name: "Pinner", region: "Hillingdon & Harrow", council: "the London Borough of Harrow", leadServices: ["installations/bathrooms", "services/loft-conversions", "services/extensions"], nearby: ["hatch-end", "northwood", "eastcote"], note: "Suburban semis; bathrooms and lofts." },
  { slug: "putney", name: "Putney", region: "Prime central & west London", council: "the London Borough of Wandsworth", leadServices: ["services/loft-conversions", "maintenance/landscaping", "maintenance/property-maintenance"], nearby: ["fulham", "richmond", "chiswick"], note: "Victorian terraces; lofts and extensions." },
  { slug: "richmond", name: "Richmond", region: "West London", council: "the London Borough of Richmond upon Thames", leadServices: ["services/loft-conversions", "maintenance/landscaping", "services/extensions"], nearby: ["chiswick", "putney", "ealing"], note: "Conservation areas, Thames-side period homes, strict planning." },
  { slug: "rickmansworth", name: "Rickmansworth", region: "Hertfordshire", council: "Three Rivers District Council", leadServices: ["maintenance/landscaping", "services/loft-conversions", "services/renovations"], nearby: ["chorleywood", "watford", "northwood"], note: "Affluent Herts; close to HQ." },
  { slug: "ruislip", name: "Ruislip", region: "Hillingdon & Harrow", council: "the London Borough of Hillingdon", leadServices: ["installations/kitchens", "installations/bathrooms", "installations/plumbing-heating"], nearby: ["ickenham", "eastcote", "northwood"], note: "Adjacent to HQ — strong local angle." },
  { slug: "stanmore", name: "Stanmore", region: "Hillingdon & Harrow", council: "the London Borough of Harrow", leadServices: ["services/loft-conversions", "services/extensions", "installations/kitchens"], nearby: ["hatch-end", "pinner"], note: "Low volume — light page; lofts and extensions." },
  { slug: "stoke-poges", name: "Stoke Poges", region: "Buckinghamshire & the Chilterns", council: "Buckinghamshire Council", leadServices: ["services/renovations", "services/extensions", "maintenance/landscaping"], nearby: ["farnham-common", "burnham", "iver"], note: "Affluent village, low volume — light page." },
  { slug: "uxbridge", name: "Uxbridge", region: "Hillingdon & Harrow", council: "the London Borough of Hillingdon", leadServices: ["installations/kitchens", "services/loft-conversions", "services/roofing"], nearby: ["ickenham", "ruislip", "denham"], note: "Major local town next to HQ — broad service mix." },
  { slug: "watford", name: "Watford", region: "Hertfordshire", council: "Watford Borough Council", leadServices: ["services/loft-conversions", "maintenance/landscaping", "maintenance/property-maintenance"], nearby: ["rickmansworth", "chorleywood"], note: "Highest-opportunity area — make this the deepest area page. Victorian/Edwardian terraces, Cassiobury 1930s Mock Tudor, side-return extensions, very hard water, strong loft demand." },
  { slug: "windsor", name: "Windsor", region: "Berkshire", council: "the Royal Borough of Windsor & Maidenhead", leadServices: ["services/loft-conversions", "maintenance/landscaping", "services/extensions"], nearby: ["ascot", "bracknell"], note: "Period and listed properties, conservation consent." },
];

export const areasMeta: AreaMeta[] = seeds.map((s, i) => ({
  slug: s.slug,
  name: s.name,
  region: s.region,
  council: s.council,
  leadServices: s.leadServices,
  nearby: s.nearby,
  note: s.note,
  heroImage: pick(i, 0),
  overviewImage: pick(i, 11),
  galleryImages: [pick(i, 2), pick(i, 6), pick(i, 14)],
  guides: guidesBySlug[s.slug] ?? [],
}));

const bySlug = new Map(areasMeta.map((a) => [a.slug, a]));
export const getAreaMeta = (slug: string) => bySlug.get(slug);
export const leadServiceObjects = (a: AreaMeta): Service[] =>
  a.leadServices.map((k) => getService(k)!).filter(Boolean);
