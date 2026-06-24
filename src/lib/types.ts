export type Silo = "services" | "installations" | "maintenance";

export interface FAQ {
  q: string;
  a: string;
}

export interface ImageRef {
  /** filename within src/assets/projects/ */
  src: string;
  alt: string;
}

export interface SubService {
  title: string;
  body: string;
}

export interface Service {
  /** final URL segment, e.g. "loft-conversions" → /services/loft-conversions */
  slug: string;
  silo: Silo;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** hero supporting line */
  lead: string;
  /** short line used in service-card grids */
  cardBlurb: string;
  cardImage: string;
  heroImage: string;
  overviewHeading: string;
  overviewBody: string;
  overviewBullets: string[];
  overviewImage: ImageRef;
  subservices: SubService[];
  gallery: ImageRef[];
  faqs: FAQ[];
  /** area slugs to feature in the "across the region" strip */
  featuredAreas: string[];
  /** related service keys, "silo/slug" */
  relatedServices: string[];
  /** related Journal post slugs (reverse links to the blog) */
  guides?: string[];
}

export interface Area {
  /** URL segment, e.g. "watford" → /service-areas/watford */
  slug: string;
  name: string;
  region: string;
  council: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  heroImage: string;
  overviewImage: ImageRef;
  /** opening "local builder in {area}" paragraphs */
  intro: string[];
  /** service keys ("silo/slug") to feature as most-in-demand here */
  leadServices: string[];
  /** two local-knowledge cards */
  localKnowledge: { heading: string; points: string[] }[];
  /** area-true differentiators */
  whyUs: { title: string; body: string }[];
  faqs: FAQ[];
  /** nearby area slugs */
  nearby: string[];
  /** filenames for the "recent projects near {area}" strip */
  galleryImages: string[];
  /** related Journal post slugs (reverse links to the blog) */
  guides: string[];
}

/* ----------------------------- Journal / blog ----------------------------- */

export type PostBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  /** paragraph; html may contain <a>, <strong>, <em> for inline internal links */
  | { type: "p"; html: string }
  | { type: "quote"; html: string; cite?: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  /** "Key takeaways" box */
  | { type: "takeaways"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  /** inline image; ref = filename in src/assets/projects/ */
  | { type: "image"; ref: string; alt: string; caption?: string }
  /** full-bleed mid-article CTA band */
  | { type: "cta" };

export interface PostMeta {
  slug: string;
  title: string;
  /** display category, e.g. "Extensions" */
  category: string;
  excerpt: string;
  metaDescription: string;
  /** YYYY-MM-DD */
  datePublished: string;
  dateModified: string;
  readMinutes: number;
  /** project image filename for hero + card */
  heroImage: string;
  featured?: boolean;
  /** related post slugs */
  related: string[];
}

export interface Post extends PostMeta {
  blocks: PostBlock[];
  faqs: FAQ[];
}
