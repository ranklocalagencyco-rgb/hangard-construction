import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site, silos, siloOrder, serviceHref } from "../lib/site";
import { servicesInSilo } from "../data/services";

// Generates /llms.txt from live site data (llmstxt.org format) so it stays
// in sync with services, hubs and Journal posts automatically.
export const GET: APIRoute = async () => {
  const origin = site.url;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  const lines: string[] = [];
  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push(
    `${site.name} is a premium main contractor based in ${site.base}, serving homeowners, landlords and managing agents across West London, the Chilterns, Hertfordshire, Berkshire and prime central London. Contact: ${site.email} · ${site.phoneDisplay} · ${site.addressLines.slice(1).join(", ")}. Hours: ${site.hours}.`,
  );
  lines.push("");

  lines.push("## Main pages");
  lines.push("");
  lines.push(`- [Home](${origin}/): Premium builders in Harefield & West London.`);
  lines.push(`- [About](${origin}/about): The firm, how we work, and what we value.`);
  lines.push(`- [Contact](${origin}/contact): Request a free quote and site survey.`);
  lines.push("");

  for (const silo of siloOrder) {
    lines.push(`## ${silos[silo].label}`);
    lines.push("");
    lines.push(`- [${silos[silo].label}](${origin}${silos[silo].href}): Service hub.`);
    for (const s of servicesInSilo(silo)) {
      lines.push(`- [${s.navLabel}](${origin}${serviceHref(s.silo, s.slug)}): ${s.cardBlurb}`);
    }
    lines.push("");
  }

  lines.push("## Service areas");
  lines.push("");
  lines.push(
    `- [Areas we cover](${origin}/service-areas): 36 towns and boroughs across West London, the Chilterns, Hertfordshire, Berkshire and prime central London.`,
  );
  lines.push("");

  lines.push("## Journal (guides)");
  lines.push("");
  for (const p of posts) {
    lines.push(`- [${p.data.seoTitle ?? p.data.title}](${origin}/blog/${p.id}): ${p.data.description}`);
  }
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
