import type { Area, FAQ } from "../lib/types";
import { areasMeta, type AreaMeta } from "./areas-meta";
import { regions } from "../lib/site";
import narrativesJson from "./area-narratives.json";

interface Narrative {
  intro: string[];
  localKnowledge: { heading: string; points: string[] }[];
  whyUs: { title: string; body: string }[];
}
const narratives = narrativesJson as Record<string, Narrative>;

function buildFaqs(m: AreaMeta): FAQ[] {
  const isHQ = m.slug === "harefield";
  return [
    {
      q: `Do you cover ${m.name}?`,
      a: `Yes. ${m.name} is within our core coverage across West London and the Home Counties, and we take on extension, conversion, renovation and maintenance projects there regularly.`,
    },
    {
      q: `Are you local to ${m.name} and where are you based?`,
      a: isHQ
        ? `Yes — Harefield is our home town and where our office is. We cover Harefield and the surrounding area as standard.`
        : `We're based in Harefield, within easy reach of ${m.name}. We cover ${m.name} and the surrounding area as standard.`,
    },
    {
      q: `Do you handle planning applications with ${m.council}?`,
      a: `Yes — we prepare and manage planning and building-regulations applications with ${m.council} on your behalf, as part of our design-and-build service.`,
    },
    {
      q: `Can you share references from recent ${m.name} projects?`,
      a: `Yes. Once we've discussed your project we're happy to share references and examples of comparable work in and around ${m.name}.`,
    },
  ];
}

function toArea(m: AreaMeta): Area {
  const n = narratives[m.slug] ?? { intro: [], localKnowledge: [], whyUs: [] };
  const isHQ = m.slug === "harefield";
  return {
    slug: m.slug,
    name: m.name,
    region: m.region,
    council: m.council,
    metaTitle: `Builders in ${m.name} | Hangard Construction`,
    metaDescription: `Builders in ${m.name} — extensions, loft & basement conversions, renovations, kitchens & bathrooms, managed end to end from Harefield. Free quotes.`,
    h1: isHQ
      ? `Builders & Renovation in Harefield (Our Home Town)`
      : `Builders & Renovation in ${m.name}`,
    lead: `Premium construction and renovation in ${m.name} — extensions, loft and basement conversions, kitchens, bathrooms and full refurbishments, managed end to end from our Harefield base.`,
    heroImage: m.heroImage,
    overviewImage: { src: m.overviewImage, alt: `Recent project in ${m.name}` },
    intro: n.intro,
    leadServices: m.leadServices,
    localKnowledge: n.localKnowledge,
    whyUs: n.whyUs,
    faqs: buildFaqs(m),
    nearby: m.nearby,
    galleryImages: m.galleryImages,
    guides: m.guides,
  };
}

export const areas: Area[] = areasMeta.map(toArea);

const bySlug = new Map(areas.map((a) => [a.slug, a]));
export const getArea = (slug: string): Area | undefined => bySlug.get(slug);

/** Areas grouped by the canonical region order, for the hub page. */
export const areasByRegion = regions.map((r) => ({
  name: r.name,
  areas: r.slugs.map((s) => bySlug.get(s)!).filter(Boolean),
}));
