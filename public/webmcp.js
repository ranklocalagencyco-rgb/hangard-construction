/**
 * WebMCP — exposes Hangard Construction's key actions to AI agents.
 *
 * This MUST stay an external .js file: the Chrome origin-trial token below is a
 * third-party token, and Chrome only honours those when they are injected from
 * an external script — not from a meta tag, an inline script, or an HTTP header.
 *
 * Origin trial: WebMCP, Chrome 149–156, expires 17 Nov 2026.
 * API: document.modelContext.registerTool() (navigator.modelContext is deprecated
 * from Chrome 150; we fall back to it for 149).
 */
(() => {
  "use strict";

  const ORIGIN_TRIAL_TOKEN =
    "A9+Gy+w+ImxH0sj5Lg9P3e3CxVDbEhnmU1ytMSZSaImfXi4YnUCgDGKqp3KxNaKk99ORBfZ/IEDOc8jgE5ApjQMAAAB8eyJvcmlnaW4iOiJodHRwczovL2hnLWNvbnN0cnVjdGlvbi5jby51azo0NDMiLCJmZWF0dXJlIjoiV2ViTUNQIiwiZXhwaXJ5IjoxNzk0ODczNjAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==";

  // 1. Enable the origin trial for this document.
  const otMeta = document.createElement("meta");
  otMeta.httpEquiv = "origin-trial";
  otMeta.content = ORIGIN_TRIAL_TOKEN;
  document.head.appendChild(otMeta);

  const SITE = "https://hg-construction.co.uk";

  const COMPANY = {
    name: "Hangard Construction",
    summary:
      "Premium construction and renovation main contractor. Extensions, loft and basement conversions, renovations, roofing, kitchens, bathrooms, electrical, plumbing, maintenance and landscaping — managed end to end by one accountable team.",
    phone: "07734 903439",
    email: "hello@hg-construction.co.uk",
    address: "3 Anderson Close, Harefield, Uxbridge, UB9 6HF",
    based: "Harefield, West London",
    hours: "Mon–Sat, 8am–6pm",
    covers:
      "West London, Hillingdon & Harrow, Hertfordshire, Buckinghamshire & the Chilterns, Berkshire, and prime central London",
    freeQuotes: true,
    website: SITE,
  };

  const SERVICES = [
    ["House Extensions", "construction", "/services/extensions", "Single, double-storey and wrap-around extensions, project-managed end to end."],
    ["Home Renovations", "construction", "/services/renovations", "Full-house refurbishments, period restoration and structural alterations."],
    ["Basement Conversions", "construction", "/services/basement-conversions", "Excavation, underpinning and luxury basement conversions."],
    ["Loft Conversions", "construction", "/services/loft-conversions", "Dormer, mansard and hip-to-gable conversions, with bright en-suite bedrooms."],
    ["Roofing Services", "construction", "/services/roofing", "New roofs, re-roofing, flat roofs and repairs."],
    ["Kitchen Fitters", "installations", "/installations/kitchens", "Full kitchen design, supply and installation by one team."],
    ["Bathroom Fitters", "installations", "/installations/bathrooms", "Bathrooms, en-suites and wet rooms, fully fitted."],
    ["Electricians", "installations", "/installations/electrical", "Rewires, consumer units, fault-finding and emergency call-outs."],
    ["Plumbing & Heating", "installations", "/installations/plumbing-heating", "Boilers, central heating, plumbing and emergency repairs."],
    ["Property Maintenance", "maintenance", "/maintenance/property-maintenance", "Planned and reactive maintenance for homes and managed property."],
    ["Driveways & Patios", "maintenance", "/maintenance/patios-driveways", "Block paving, resin and gravel driveways, patios and paving."],
    ["Landscaping", "maintenance", "/maintenance/landscaping", "Garden design and build, hard and soft landscaping."],
  ].map(([name, category, path, description]) => ({ name, category, description, url: SITE + path }));

  const AREAS = [
    ["amersham", "Amersham", "Buckinghamshire & the Chilterns"],
    ["ascot", "Ascot", "Berkshire"],
    ["beaconsfield", "Beaconsfield", "Buckinghamshire & the Chilterns"],
    ["bracknell", "Bracknell", "Berkshire"],
    ["burnham", "Burnham", "Buckinghamshire & the Chilterns"],
    ["central-london", "Central London", "Prime central & west London"],
    ["chalfont", "Chalfont", "Buckinghamshire & the Chilterns"],
    ["chelsea", "Chelsea", "Prime central & west London"],
    ["chesham", "Chesham", "Buckinghamshire & the Chilterns"],
    ["chiswick", "Chiswick", "West London"],
    ["chorleywood", "Chorleywood", "Hertfordshire"],
    ["denham", "Denham", "Buckinghamshire & the Chilterns"],
    ["ealing", "Ealing", "West London"],
    ["eastcote", "Eastcote", "Hillingdon & Harrow"],
    ["farnham-common", "Farnham Common", "Buckinghamshire & the Chilterns"],
    ["fulham", "Fulham", "Prime central & west London"],
    ["gerrards-cross", "Gerrards Cross", "Buckinghamshire & the Chilterns"],
    ["harefield", "Harefield", "Hillingdon & Harrow"],
    ["hatch-end", "Hatch End", "Hillingdon & Harrow"],
    ["holland-park", "Holland Park", "Prime central & west London"],
    ["ickenham", "Ickenham", "Hillingdon & Harrow"],
    ["iver", "Iver", "Buckinghamshire & the Chilterns"],
    ["kensington", "Kensington", "Prime central & west London"],
    ["knightsbridge", "Knightsbridge", "Prime central & west London"],
    ["mayfair", "Mayfair", "Prime central & west London"],
    ["northwood", "Northwood", "Hillingdon & Harrow"],
    ["pinner", "Pinner", "Hillingdon & Harrow"],
    ["putney", "Putney", "Prime central & west London"],
    ["richmond", "Richmond", "West London"],
    ["rickmansworth", "Rickmansworth", "Hertfordshire"],
    ["ruislip", "Ruislip", "Hillingdon & Harrow"],
    ["stanmore", "Stanmore", "Hillingdon & Harrow"],
    ["stoke-poges", "Stoke Poges", "Buckinghamshire & the Chilterns"],
    ["uxbridge", "Uxbridge", "Hillingdon & Harrow"],
    ["watford", "Watford", "Hertfordshire"],
    ["windsor", "Windsor", "Berkshire"],
  ].map(([slug, name, region]) => ({ slug, name, region, url: `${SITE}/service-areas/${slug}` }));

  const GUIDES = [
    ["House Extension Cost in West London (2026 Guide)", "/blog/house-extension-cost-west-london"],
    ["Loft Conversion vs Rear Extension: Which Adds Value?", "/blog/loft-conversion-vs-extension"],
    ["Renovating in a Conservation Area: A Guide", "/blog/renovating-conservation-area-guide"],
    ["Basement Planning Permission: Kensington & Chelsea", "/blog/basement-planning-permission-rbkc"],
    ["10 Signs Your Period Roof Needs Replacing", "/blog/signs-your-roof-needs-replacing"],
  ].map(([title, path]) => ({ title, url: SITE + path }));

  const PREFILL_KEY = "hg:quote-prefill";
  const FIELDS = {
    name: "f-name",
    email: "f-email",
    phone: "f-phone",
    area: "f-area",
    projectType: "f-type",
    message: "f-msg",
  };
  const PROJECT_TYPES = [
    "House Extension",
    "Loft Conversion",
    "Home Renovation",
    "Basement Conversion",
    "Kitchen",
    "Bathroom",
    "Roofing",
    "Electrical",
    "Driveway / Patio",
    "Landscaping",
    "Property Maintenance",
    "Plumbing & Heating",
    "Other / not sure",
  ];
  const onContactPage = () => location.pathname.replace(/\/+$/, "") === "/contact";

  function fillContactForm(data) {
    let filled = 0;
    for (const key of Object.keys(FIELDS)) {
      const el = document.getElementById(FIELDS[key]);
      if (el && data[key]) {
        el.value = data[key];
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
        filled++;
      }
    }
    document.getElementById(FIELDS.name)?.form?.scrollIntoView({ behavior: "smooth", block: "center" });
    return filled;
  }

  // Apply a prefill that was queued before navigating to /contact.
  try {
    const pending = sessionStorage.getItem(PREFILL_KEY);
    if (pending && onContactPage()) {
      sessionStorage.removeItem(PREFILL_KEY);
      fillContactForm(JSON.parse(pending));
    }
  } catch (_) {}

  const TOOLS = [
    {
      name: "get_company_info",
      description:
        "Get Hangard Construction's contact details, opening hours, head office location and the regions they cover.",
      inputSchema: { type: "object", properties: {} },
      annotations: { readOnlyHint: true },
      execute: async () => JSON.stringify(COMPANY),
    },
    {
      name: "list_services",
      description:
        "List the building, installation and maintenance services Hangard Construction offers, each with a short description and its page URL.",
      inputSchema: {
        type: "object",
        properties: {
          category: {
            type: "string",
            enum: ["construction", "installations", "maintenance"],
            description: "Optional. Return only services in this category.",
          },
        },
      },
      annotations: { readOnlyHint: true },
      execute: async (input) => {
        const category = input && input.category;
        const list = category ? SERVICES.filter((s) => s.category === category) : SERVICES;
        return JSON.stringify(list);
      },
    },
    {
      name: "check_service_area",
      description:
        "Check whether Hangard Construction covers a given town, borough or area, and return that area's page URL. Use this before recommending them to someone in a specific location.",
      inputSchema: {
        type: "object",
        properties: {
          area: { type: "string", description: "A town, borough or area name, e.g. 'Watford' or 'Kensington'." },
        },
        required: ["area"],
      },
      annotations: { readOnlyHint: true },
      execute: async ({ area }) => {
        const q = String(area || "").trim().toLowerCase();
        const slugged = q.replace(/\s+/g, "-");
        const hit = AREAS.find((a) => a.name.toLowerCase() === q || a.slug === slugged);
        if (hit) {
          return JSON.stringify({ covered: true, area: hit.name, region: hit.region, url: hit.url });
        }
        const near = AREAS.filter((a) => a.name.toLowerCase().includes(q) || (q && q.includes(a.name.toLowerCase())));
        return JSON.stringify({
          covered: false,
          query: area,
          suggestions: near.slice(0, 5),
          allAreasUrl: `${SITE}/service-areas`,
          note: "Not listed as a named area. Hangard Construction still works across West London, Hertfordshire, Buckinghamshire, Berkshire and prime central London — contact them to confirm.",
        });
      },
    },
    {
      name: "list_guides",
      description:
        "List Hangard Construction's expert guides on extension costs, loft conversions, roofing, basements and planning permission.",
      inputSchema: { type: "object", properties: {} },
      annotations: { readOnlyHint: true },
      execute: async () => JSON.stringify(GUIDES),
    },
    {
      name: "start_quote_request",
      description:
        "Start a free, no-obligation quote request. Opens Hangard Construction's contact form and fills in the customer's details. This does NOT send anything — the person must review the form and submit it themselves.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string", description: "The customer's full name." },
          email: { type: "string", description: "The customer's email address." },
          phone: { type: "string", description: "The customer's phone number. Optional." },
          area: {
            type: "string",
            description: "Postcode or area where the work will take place, e.g. 'Watford, WD17'. Optional.",
          },
          projectType: {
            type: "string",
            enum: PROJECT_TYPES,
            description: "The kind of project. Optional.",
          },
          message: {
            type: "string",
            description: "A few lines on the project, rough timescale and budget. Optional.",
          },
        },
        required: ["name", "email"],
      },
      annotations: { readOnlyHint: false },
      execute: async (input) => {
        const data = {
          name: input.name || "",
          email: input.email || "",
          phone: input.phone || "",
          area: input.area || "",
          projectType: PROJECT_TYPES.includes(input.projectType) ? input.projectType : "",
          message: input.message || "",
        };
        if (onContactPage()) {
          const n = fillContactForm(data);
          return `Filled ${n} field(s) on the contact form. Nothing has been sent — review the details and press "Send enquiry" to submit.`;
        }
        try {
          sessionStorage.setItem(PREFILL_KEY, JSON.stringify(data));
        } catch (_) {}
        location.assign("/contact");
        return 'Opening the contact form with the details filled in. Nothing has been sent — review them and press "Send enquiry" to submit.';
      },
    },
  ];

  const getModelContext = () =>
    (typeof document !== "undefined" && document.modelContext) ||
    (typeof navigator !== "undefined" && navigator.modelContext) ||
    null;

  (async () => {
    // The origin trial is applied when the meta above is inserted; give the
    // binding a tick to appear before deciding the feature is unavailable.
    let mc = getModelContext();
    if (!mc) {
      await new Promise((r) => setTimeout(r, 0));
      mc = getModelContext();
    }
    if (!mc || typeof mc.registerTool !== "function") return; // Not supported — no-op.

    for (const tool of TOOLS) {
      try {
        await mc.registerTool(tool);
      } catch (err) {
        console.warn(`[webmcp] could not register "${tool.name}"`, err);
      }
    }
  })();
})();
