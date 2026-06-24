import type { ImageMetadata } from "astro";

/**
 * Eagerly map every project photo so data-driven pages can resolve an
 * optimisable `ImageMetadata` from a plain filename stored in content.
 */
const projectImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/projects/*.png",
  { eager: true },
);

export function projectImage(filename: string): ImageMetadata {
  const mod = projectImages[`../assets/projects/${filename}`];
  if (!mod) {
    throw new Error(
      `Project image "${filename}" not found in src/assets/projects/`,
    );
  }
  return mod.default;
}
