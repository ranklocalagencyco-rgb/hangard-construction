import type { Service, Silo } from "../lib/types";

export const services: Service[] = [
  // ───────────────────────── CONSTRUCTION ─────────────────────────
  {
    slug: "extensions",
    silo: "services",
    navLabel: "House Extensions",
    metaTitle:
      "House Extensions in Harefield & West London | Single, Double-Storey & Wrap-Around | Hangard",
    metaDescription:
      "Single, double-storey, wrap-around and side-return house extensions across West London & the Home Counties. Design-and-build, planning handled. Free quotes.",
    h1: "House Extensions in Harefield & West London",
    lead: "Single, double-storey and wrap-around extensions that add the space — and the light — your home has been missing.",
    cardBlurb:
      "Single, double-storey and wrap-around extensions, project-managed end to end.",
    cardImage: "p08.png",
    heroImage: "p13.png",
    overviewHeading: "Extensions, designed and built as one.",
    overviewBody:
      "An extension is the most reliable way to add genuine living space to a home you already love. We design the right footprint for your plot and your street, engineer it properly, and finish it so the new space feels original — not bolted on.",
    overviewBullets: [
      "Single, double-storey, wrap-around and side-return",
      "Kitchen and open-plan living extensions with steel structure",
      "Planning, permitted development and building regs handled",
      "One project-managed team from groundworks to snagging",
    ],
    overviewImage: {
      src: "p03.png",
      alt: "Bright open-plan kitchen extension with full-height steel glazing onto a garden",
    },
    subservices: [
      { title: "Single-storey extensions", body: "Rear and side extensions that open up the ground floor." },
      { title: "Double-storey extensions", body: "Adding bedrooms and bathrooms above new living space." },
      { title: "Wrap-around & side-return", body: "Reclaiming the side return on period terraces for full-width rooms." },
      { title: "Kitchen & open-plan", body: "Knock-throughs and glazed extensions built around how you live." },
      { title: "Design & build", body: "Drawings, structural engineering and build under one contract." },
      { title: "Planning & permitted development", body: "We advise on consent and prepare the applications for you." },
    ],
    gallery: [
      { src: "p08.png", alt: "Completed rear extension with bi-fold doors to a landscaped garden" },
      { src: "p03.png", alt: "Open-plan kitchen-diner with a vaulted glass roof and stone island" },
      { src: "p13.png", alt: "Double-storey side extension on a period West London home" },
    ],
    faqs: [
      { q: "How much does a house extension cost in West London?", a: "It depends on size, structure and finish — a single-storey rear extension typically starts well into five figures, with double-storey and wrap-around projects costing more. We give a clear, written quote after a survey." },
      { q: "Do I need planning permission for an extension?", a: "Many extensions fall under permitted development, but size, height and conservation status all matter. We advise early and prepare any planning or building-regs applications for you." },
      { q: "How long does a single-storey extension take?", a: "Most single-storey extensions take around 10–16 weeks on site, depending on groundworks, structure and finish. We give you a programme before we start." },
      { q: "Will an extension add value to my home?", a: "A well-designed extension that improves how the whole house works usually adds value — particularly kitchen and open-plan projects. We design for liveability first, which is what buyers pay for." },
      { q: "Do you offer design and build?", a: "Yes. We can take a project from first sketch through structural engineering, planning and construction under one accountable team, so there are no gaps between designer and builder." },
    ],
    featuredAreas: ["ealing", "richmond", "chiswick"],
    relatedServices: ["services/loft-conversions", "services/basement-conversions"],
    guides: ["house-extension-cost-west-london", "loft-conversion-vs-extension"],
  },
  {
    slug: "renovations",
    silo: "services",
    navLabel: "Home Renovations",
    metaTitle:
      "Home Renovations & Refurbishments in Harefield & West London | Period & Full-House | Hangard",
    metaDescription:
      "Full-house renovations, period restoration and structural alterations across West London & the Home Counties, finished to an exacting standard by one team.",
    h1: "Home Renovations & Refurbishments in Harefield & West London",
    lead: "Whole-house refurbishments and period restoration — managed end to end, finished to the standard the house deserves.",
    cardBlurb:
      "Full-house refurbishments, period restoration and structural alterations.",
    cardImage: "p19.png",
    heroImage: "p07.png",
    overviewHeading: "Renovations that respect the house and how you live.",
    overviewBody:
      "A full renovation is a hundred decisions that have to agree with one another. We bring design, structure and finishing together under one team so the layout works, the services are right, and the finish is the part you remember.",
    overviewBullets: [
      "Full-house refurbishment and reconfiguration",
      "Period property restoration and sympathetic repair",
      "Structural alterations, knock-throughs and steels",
      "Interior finishes, joinery and decoration to a high standard",
    ],
    overviewImage: {
      src: "renovation-bespoke-joinery.png",
      alt: "Bespoke fitted joinery in oak around a restored period fireplace",
    },
    subservices: [
      { title: "Full-house renovations", body: "Top-to-bottom refurbishment with a single point of contact." },
      { title: "Period property restoration", body: "Sympathetic repair of original features alongside modern services." },
      { title: "Structural alterations", body: "Knock-throughs, steels and openings, engineered and signed off." },
      { title: "Interior refurbishment", body: "Plastering, joinery, flooring and finishes to an exacting standard." },
      { title: "Project management", body: "Programme, budget and trades coordinated end to end." },
      { title: "Listed & conservation work", body: "Careful work where consent and original fabric demand it." },
    ],
    gallery: [
      { src: "renovation-media-wall-living-room.png", alt: "Renovated living room with a bespoke media wall and concealed lighting" },
      { src: "renovation-bespoke-joinery.png", alt: "Hand-built joinery and shelving in a renovated period home" },
      { src: "p19.png", alt: "Fully renovated period interior with restored cornicing" },
    ],
    faqs: [
      { q: "How much does a full house renovation cost?", a: "It varies widely with scope, the age of the property and the level of finish. After a survey we set out a clear, itemised quote so you can see exactly where the budget goes." },
      { q: "Where do I start with renovating a period home?", a: "Start with the structure, damp and services — the unglamorous parts that protect everything else. We survey first and sequence the work so money is spent in the right order." },
      { q: "Do I need planning permission to renovate?", a: "Internal renovation usually doesn't, but extensions, external changes and listed or conservation-area homes often do. We advise and handle any applications." },
      { q: "How long does a whole-house renovation take?", a: "Most full renovations run from a few months to the best part of a year depending on size and complexity. You'll have a programme and regular updates throughout." },
      { q: "Can you renovate a listed building or conservation-area home?", a: "Yes. We work sympathetically with original fabric and manage the consents these homes require, so the work is both beautiful and compliant." },
    ],
    featuredAreas: ["beaconsfield", "gerrards-cross", "amersham"],
    relatedServices: ["services/extensions", "services/loft-conversions"],
    guides: ["renovating-conservation-area-guide"],
  },
  {
    slug: "basement-conversions",
    silo: "services",
    navLabel: "Basement Conversions",
    metaTitle:
      "Basement Conversions in Harefield, Kensington & Prime London | Excavation & Underpinning | Hangard",
    metaDescription:
      "High-value basement excavation, underpinning and conversions across prime central and West London. Waterproofing, party wall and structural engineering handled.",
    h1: "Basement Conversions in Harefield, Kensington & Prime London",
    lead: "New living space below the footprint of your home — excavated, waterproofed and finished to a luxury standard.",
    cardBlurb: "Excavation, underpinning and luxury basement conversions.",
    cardImage: "p23.png",
    heroImage: "basement-living-room.png",
    overviewHeading: "Basements, engineered before they're finished.",
    overviewBody:
      "A basement is the most technically demanding way to add space — and the most rewarding when it's done properly. We lead with structural engineering, waterproofing and party-wall discipline, then finish the space as a genuine part of the home.",
    overviewBullets: [
      "Basement excavation and underpinning",
      "Sub-house and garden basements with lightwells",
      "Waterproofing, tanking and drainage to BS 8102",
      "Party-wall agreements and structural engineering handled",
    ],
    overviewImage: {
      src: "basement-home-cinema.png",
      alt: "Luxury basement home cinema with tiered seating and warm concealed lighting",
    },
    subservices: [
      { title: "Excavation & underpinning", body: "Lowering and underpinning to create full-height space safely." },
      { title: "Sub-house & garden basements", body: "New basements beneath the house or garden, with lightwells." },
      { title: "Waterproofing & tanking", body: "Multi-layer waterproofing designed for long-term dry space." },
      { title: "Gyms, cinemas & wine rooms", body: "High-spec leisure spaces built into the new floor." },
      { title: "Party wall & structural", body: "Engineering, surveys and neighbour agreements managed for you." },
      { title: "Prime-borough planning", body: "Experience with RBKC and prime-central consent requirements." },
    ],
    gallery: [
      { src: "basement-living-room.png", alt: "Bright basement living room with a lightwell and feature staircase" },
      { src: "basement-home-cinema.png", alt: "Basement home cinema with acoustic panelling and low lighting" },
      { src: "basement-gym-studio.png", alt: "Basement gym and studio with mirrored wall and rubber flooring" },
    ],
    faqs: [
      { q: "How much does a basement conversion cost in London?", a: "Basements are the highest-ticket work we do — cost depends on depth, ground conditions and finish. We quote in writing after structural and ground assessment, with no surprises." },
      { q: "Do I need planning permission for a basement?", a: "Often yes, particularly in prime boroughs and conservation areas, alongside building regs and a party-wall process. We manage all of it as part of the project." },
      { q: "How long does a basement conversion take?", a: "Most basement projects run several months to a year given the excavation, structural and waterproofing stages. We programme each phase and keep you informed." },
      { q: "Is my house suitable for a basement?", a: "Most homes can take a basement, but ground conditions, the water table and neighbouring structures all matter. A ground and structural survey tells us for certain." },
      { q: "What is underpinning and do I need it?", a: "Underpinning extends and strengthens existing foundations so the house sits safely above the new space. Whether it's needed depends on depth and existing footings — the engineer specifies it." },
    ],
    featuredAreas: ["kensington", "chelsea", "fulham"],
    relatedServices: ["services/extensions", "maintenance/property-maintenance"],
    guides: ["basement-planning-permission-rbkc"],
  },
  {
    slug: "loft-conversions",
    silo: "services",
    navLabel: "Loft Conversions",
    metaTitle:
      "Loft Conversions in West London | Dormer, Hip-to-Gable, L-Shaped & Mansard | Hangard",
    metaDescription:
      "Dormer, hip-to-gable, L-shaped & mansard loft conversions in West London, Watford, Ealing & Richmond. Planning & party wall handled. Free quotes.",
    h1: "Loft Conversions in Harefield & West London",
    lead: "Dormer, hip-to-gable, L-shaped and mansard conversions that add a bright, properly-finished new floor to your home.",
    cardBlurb:
      "Dormer, mansard and hip-to-gable conversions, with bright en-suite bedrooms.",
    cardImage: "p28.png",
    heroImage: "p30.png",
    overviewHeading: "Loft Conversions, done properly.",
    overviewBody:
      "A loft is often the most cost-effective room you'll ever add. We design the right conversion for your roof and your street, handle the structure and building regs, and finish it as a genuine bedroom suite — not an afterthought.",
    overviewBullets: [
      "Dormer, hip-to-gable, L-shaped and mansard",
      "Staircase design that works with your landing",
      "En-suite plumbing and bespoke storage",
      "Party-wall, planning and building regs handled",
    ],
    overviewImage: {
      src: "loft-staircase.png",
      alt: "Loft staircase with oak treads and a brass-framed glass balustrade beneath a skylight",
    },
    subservices: [
      { title: "Dormer conversions", body: "Added headroom and floor area with well-proportioned dormers." },
      { title: "Hip-to-gable & L-shaped", body: "Maximising space on semi-detached and period terraces." },
      { title: "Mansard conversions", body: "A full new storey behind a mansard roof, ideal for conservation areas." },
      { title: "Velux / rooflight conversions", body: "The simplest, most cost-effective option where headroom allows." },
      { title: "Loft bedrooms with en-suite", body: "Bedroom suites with bespoke storage and en-suite bathrooms." },
      { title: "Planning, party wall & building regs", body: "We handle the consents, neighbours and inspections." },
    ],
    gallery: [
      { src: "loft-bedroom.png", alt: "Loft bedroom with vaulted ceiling, skylights and fitted oak wardrobes" },
      { src: "loft-walk-in-wardrobe.png", alt: "Loft walk-in wardrobe in dark walnut with mirrored sliding doors" },
      { src: "loft-home-office.png", alt: "Loft home office with built-in oak desk and arched gable window" },
    ],
    faqs: [
      { q: "How much does a loft conversion cost?", a: "It depends on the conversion type and finish. A velux conversion is the most economical; mansards the most involved. We quote in writing after a survey." },
      { q: "Do I need planning permission for a loft conversion?", a: "Many lofts are permitted development; dormers and mansards in conservation areas often need consent. We advise and apply." },
      { q: "Which loft conversion adds the most value?", a: "A dormer or mansard that creates a true double bedroom with en-suite usually adds the most." },
      { q: "How long does a loft conversion take?", a: "Most take around 6–10 weeks on site depending on type and finish." },
      { q: "Can my loft be converted?", a: "Most can, subject to head height (ideally 2.2m+ at the ridge), roof structure and stairs. We assess this at survey." },
    ],
    featuredAreas: ["watford", "ealing", "richmond"],
    relatedServices: ["services/extensions", "installations/bathrooms"],
    guides: ["loft-conversion-vs-extension", "house-extension-cost-west-london"],
  },
  {
    slug: "roofing",
    silo: "services",
    navLabel: "Roofing Services",
    metaTitle:
      "Roofing Services in Harefield & West London | New Roofs, Flat Roofs & Repairs | Hangard",
    metaDescription:
      "New roofs, re-roofing, flat roofs and repairs across West London & the Home Counties. Heritage slate and tile, chimneys, fascias and guttering. Free quotes.",
    h1: "Roofing Services in Harefield & West London",
    lead: "New roofs, re-roofing, flat roofs and repairs — including heritage slate and tile on period and prime properties.",
    cardBlurb: "New roofs, re-roofing, flat roofs and repairs.",
    cardImage: "p22.png",
    heroImage: "p22.png",
    overviewHeading: "A roof is the one thing you can't get wrong.",
    overviewBody:
      "Everything else in a home depends on the roof above it. We re-roof, repair and detail roofs properly — the right materials, correct flashing and clean lines — on everything from terraces to heritage and prime-central properties.",
    overviewBullets: [
      "New roofs and full re-roofing",
      "Flat roofs in GRP, EPDM and felt",
      "Roof repairs, leaks and storm damage",
      "Chimneys, fascias, soffits and guttering",
    ],
    overviewImage: {
      src: "p14.png",
      alt: "New slate roof with lead flashing on a period property against a soft sky",
    },
    subservices: [
      { title: "New roofs & re-roofing", body: "Full roof replacement in tile or slate, built to last." },
      { title: "Flat roofs", body: "GRP, EPDM and felt flat roofs with proper falls and detailing." },
      { title: "Roof repairs & leaks", body: "Fast, lasting repairs to slipped tiles, flashing and leaks." },
      { title: "Chimneys, fascias & guttering", body: "Repointing, fascias, soffits and seamless guttering." },
      { title: "Heritage slate & tile", body: "Sympathetic roofing for period and listed properties." },
      { title: "Roof inspections", body: "Honest condition reports before you buy or re-roof." },
    ],
    gallery: [
      { src: "p22.png", alt: "Re-roofed property with new tiles and crisp ridge detailing" },
      { src: "p14.png", alt: "Heritage slate roofing with lead valleys on a period home" },
      { src: "p10.png", alt: "Roofline with new fascias, soffits and guttering" },
    ],
    faqs: [
      { q: "How much does a new roof cost in the UK?", a: "Cost depends on roof size, pitch, material and access. We survey, set out the options in writing and include scaffolding and waste in the quote." },
      { q: "When should I re-roof and how long does a roof last?", a: "A good tiled or slate roof lasts decades; re-roof when repairs become frequent or the underlay and battens fail. An inspection tells you whether repair or replacement is the better spend." },
      { q: "Do you do emergency roof repairs?", a: "Yes — we respond quickly to leaks and storm damage to make the roof safe and watertight before arranging a permanent repair." },
      { q: "What are the signs my roof needs replacing?", a: "Slipped or missing tiles, recurring leaks, sagging lines, daylight in the loft and failing flashing are all signs. We'll give you a straight answer at inspection." },
      { q: "Do you provide scaffolding?", a: "Yes. Safe access is part of the job — scaffolding is arranged and included in our quote where the work needs it." },
    ],
    featuredAreas: ["watford", "uxbridge", "ruislip"],
    relatedServices: ["maintenance/property-maintenance", "maintenance/patios-driveways"],
    guides: ["signs-your-roof-needs-replacing"],
  },

  // ───────────────────────── INSTALLATIONS ─────────────────────────
  {
    slug: "kitchens",
    silo: "installations",
    navLabel: "Kitchen Fitters",
    metaTitle:
      "Kitchen Fitters in Harefield & West London | Design, Supply & Installation | Hangard",
    metaDescription:
      "Full kitchen design, supply and installation across West London & the Home Counties. Bespoke and fitted kitchens, worktops, plumbing, electrics and tiling.",
    h1: "Kitchen Fitters in Harefield & West London",
    lead: "Full kitchen design, supply and installation — units, worktops, plumbing, electrics and tiling by one team.",
    cardBlurb: "Full kitchen design, supply and installation by one team.",
    cardImage: "p02.png",
    heroImage: "kitchen-orangery-island.png",
    overviewHeading: "One team for the whole kitchen.",
    overviewBody:
      "A kitchen pulls together joinery, plumbing, electrics, tiling and finishing — which is exactly why it goes wrong when it's split across separate trades. We design, supply and fit the whole thing, so it lands on time and lines up perfectly.",
    overviewBullets: [
      "Full design, supply and installation",
      "Bespoke and fitted kitchens to any layout",
      "Worktops, units and appliance integration",
      "Plumbing, electrics and tiling included",
    ],
    overviewImage: {
      src: "kitchen-orangery-island.png",
      alt: "Bespoke kitchen with a stone island and brushed-brass handles in a bright orangery",
    },
    subservices: [
      { title: "Kitchen design & installation", body: "From layout and lighting to the final handle." },
      { title: "Bespoke & fitted kitchens", body: "Hand-built or premium fitted ranges, installed precisely." },
      { title: "Kitchen extensions & open-plan", body: "Pairing the kitchen with the extension that frames it." },
      { title: "Worktops & units", body: "Stone, quartz and timber worktops with seamless joints." },
      { title: "Plumbing, electrics & tiling", body: "All the trades behind the cabinetry, handled in-house." },
      { title: "Appliance integration", body: "Cleanly integrated appliances, sockets and lighting." },
    ],
    gallery: [
      { src: "kitchen-orangery-island.png", alt: "Open-plan kitchen island beneath a glazed orangery roof" },
      { src: "elec-kitchen-island-sockets.png", alt: "Kitchen island with discreet pop-up sockets and pendant lighting" },
      { src: "p02.png", alt: "Fitted kitchen with stone worktops and integrated appliances" },
    ],
    faqs: [
      { q: "How much does a fitted kitchen cost?", a: "It depends on the units, worktops and appliances you choose and the work behind them. We give an itemised quote so you can see the cabinetry, trades and finishes separately." },
      { q: "How long does it take to fit a kitchen?", a: "A straightforward kitchen swap takes 1–2 weeks; a new layout with moved services and tiling takes longer. We give you a clear schedule before we start." },
      { q: "Do you supply-and-fit or fit-only?", a: "Both. We can design and supply the whole kitchen or fit a kitchen you've bought — either way the trades behind it are ours." },
      { q: "Can you move plumbing and gas for a new layout?", a: "Yes. Moving sinks, appliances, gas and electrics is part of a full kitchen project, carried out by qualified, registered tradespeople." },
    ],
    featuredAreas: ["watford", "uxbridge", "amersham"],
    relatedServices: ["installations/bathrooms", "services/renovations"],
  },
  {
    slug: "bathrooms",
    silo: "installations",
    navLabel: "Bathroom Fitters",
    metaTitle:
      "Bathroom Fitters in Harefield & West London | Bathrooms, En-Suites & Wet Rooms | Hangard",
    metaDescription:
      "Full bathroom design and installation across West London & the Home Counties. En-suites, wet rooms, walk-in showers, tiling, plumbing and underfloor heating.",
    h1: "Bathroom Fitters in Harefield & West London",
    lead: "Bathrooms, en-suites and wet rooms — fully fitted, including tiling, plumbing and underfloor heating.",
    cardBlurb: "Bathrooms, en-suites and wet rooms, fully fitted.",
    cardImage: "p24.png",
    heroImage: "bathroom-copper-bath-marble.png",
    overviewHeading: "Bathrooms that feel calm — and stay watertight.",
    overviewBody:
      "A good bathroom is equal parts plumbing discipline and finishing craft. We waterproof and plumb it correctly, then tile and finish it to a serene, hotel-grade standard — all by one team that owns the result.",
    overviewBullets: [
      "Full bathroom design and installation",
      "En-suites, cloakrooms and family bathrooms",
      "Wet rooms and walk-in showers",
      "Tiling, plumbing and underfloor heating",
    ],
    overviewImage: {
      src: "bathroom-led-mirror-vanity.png",
      alt: "Bathroom vanity with stone top, LED mirror and brushed-brass tapware",
    },
    subservices: [
      { title: "Full bathroom installation", body: "Design, supply and fit to a calm, considered finish." },
      { title: "En-suites & cloakrooms", body: "Compact spaces planned to feel generous." },
      { title: "Wet rooms & walk-in showers", body: "Fully tanked wet rooms with level-access showers." },
      { title: "Tiling & underfloor heating", body: "Large-format tiling and warm floors underfoot." },
      { title: "Luxury & accessible bathrooms", body: "From spa-grade suites to thoughtful accessible design." },
      { title: "Plumbing & first fix", body: "Pipework, drainage and ventilation done right, first time." },
    ],
    gallery: [
      { src: "bathroom-copper-bath-marble.png", alt: "Freestanding copper bath against large-format marble tiling" },
      { src: "bathroom-copper-shower.png", alt: "Walk-in shower with copper fittings and stone tiling" },
      { src: "bathroom-led-mirror-vanity.png", alt: "Vanity unit with LED mirror and warm diffused daylight" },
    ],
    faqs: [
      { q: "How much does a new bathroom cost?", a: "It depends on the suite, tiling and any layout changes. We quote in writing with the sanitaryware, tiling and trades set out clearly." },
      { q: "How long does a bathroom installation take?", a: "A typical bathroom takes around 1–2 weeks; wet rooms and full re-plumbs take a little longer. You'll have a schedule before work begins." },
      { q: "Can you fit a wet room in a small space?", a: "Yes — wet rooms often suit small or awkward spaces well. We tank the floor and walls properly so it stays dry for the long term." },
      { q: "Do you handle the plumbing and tiling too?", a: "Yes. Plumbing, tiling, electrics and finishing are all part of the job and carried out by our own team, so nothing falls between trades." },
    ],
    featuredAreas: ["watford", "uxbridge", "pinner"],
    relatedServices: ["installations/kitchens", "installations/plumbing-heating"],
  },
  {
    slug: "electrical",
    silo: "installations",
    navLabel: "Electricians",
    metaTitle:
      "Electricians in Harefield & West London | Rewires, Consumer Units & EV Chargers | Hangard",
    metaDescription:
      "NICEIC and Part P electricians across West London & the Home Counties. Rewires, consumer unit upgrades, EV chargers, EICR testing and emergency call-outs.",
    h1: "Electricians in Harefield & West London",
    lead: "Rewires, consumer units, EV chargers, EICR testing and emergency call-outs — safe, certified and tidy.",
    cardBlurb: "Rewires, consumer units, fault-finding and emergency call-outs.",
    cardImage: "p19.png",
    heroImage: "elec-consumer-unit-install.png",
    overviewHeading: "Electrics you never have to think about again.",
    overviewBody:
      "Good electrical work is invisible: it just works, safely, for years. We rewire, upgrade and test to current regs, certify the work, and leave the cabling and finishing as neat as the rooms it serves.",
    overviewBullets: [
      "Full installations and house rewires",
      "Consumer unit (fuse board) upgrades",
      "EV charger installation",
      "EICR testing, certification and Part P sign-off",
    ],
    overviewImage: {
      src: "elec-feature-staircase-lighting.png",
      alt: "Feature staircase with discreet recessed lighting and clean cabling",
    },
    subservices: [
      { title: "Rewires & installations", body: "Full and partial rewires with minimal disruption." },
      { title: "Consumer unit upgrades", body: "Modern fuse boards with RCD protection and certification." },
      { title: "EV charger installation", body: "Home charge points fitted and registered correctly." },
      { title: "Fault-finding & call-outs", body: "Fast diagnosis and repair of electrical faults." },
      { title: "EICR testing & certification", body: "Condition reports for owners, landlords and sales." },
      { title: "Lighting & smart wiring", body: "Lighting design, sockets and smart-home wiring." },
    ],
    gallery: [
      { src: "elec-consumer-unit-install.png", alt: "Newly installed consumer unit with neat, labelled cabling" },
      { src: "elec-kitchen-pendant-lighting.png", alt: "Kitchen pendant lighting installation over an island" },
      { src: "elec-exterior-garden-lighting.png", alt: "Exterior garden lighting picking out planting and paths at dusk" },
    ],
    faqs: [
      { q: "How much does it cost to rewire a house?", a: "It depends on the size of the property and how much is being replaced. We survey first and quote in writing, including making good and certification." },
      { q: "How much does an electrician charge per hour or day?", a: "Smaller jobs are priced by the hour or half-day; larger work is quoted as a fixed price so you know the cost up front. We're happy to set this out before starting." },
      { q: "Do you install home EV chargers?", a: "Yes — we install and register home EV charge points, checking your supply and consumer unit can support the load." },
      { q: "Are your electricians NICEIC and Part P registered?", a: "Our electrical work is carried out to current regulations and certified under the relevant competent-person scheme, with paperwork provided on completion." },
      { q: "Do you offer emergency electrician call-outs?", a: "Yes. We respond quickly to make faults safe and restore power, then arrange any follow-up work needed." },
    ],
    featuredAreas: ["watford", "ealing", "richmond"],
    relatedServices: ["installations/plumbing-heating", "maintenance/property-maintenance"],
  },

  // ───────────────────── MAINTENANCE & OUTDOOR ─────────────────────
  {
    slug: "plumbing-heating",
    silo: "installations",
    navLabel: "Plumbing & Heating",
    metaTitle:
      "Plumbing & Heating in Harefield & West London | Boilers, Central Heating & Repairs | Hangard",
    metaDescription:
      "Gas Safe plumbing and heating across West London & the Home Counties. Boiler installation, central heating, underfloor heating, leaks and emergency repairs.",
    h1: "Plumbing & Heating in Harefield & West London",
    lead: "Boilers, central heating, underfloor heating and emergency repairs — Gas Safe and reliable.",
    cardBlurb: "Boilers, central heating, plumbing and emergency repairs.",
    cardImage: "plumbing-radiator-thermostatic-valve.png",
    heroImage: "plumbing-copper-pipe-repair.png",
    overviewHeading: "Warm, dry and working — and quick when it isn't.",
    overviewBody:
      "Heating and plumbing only get noticed when they fail, usually at the worst moment. We install and maintain boilers, heating and plumbing properly, and respond fast when something needs putting right.",
    overviewBullets: [
      "Boiler installation and replacement",
      "Central heating and radiators",
      "Kitchen and bathroom plumbing",
      "Underfloor heating and emergency repairs",
    ],
    overviewImage: {
      src: "plumbing-brass-kitchen-tap.png",
      alt: "Brushed-brass kitchen mixer tap over a stone sink, neatly plumbed",
    },
    subservices: [
      { title: "Boiler installation & replacement", body: "Efficient new boilers, correctly sized and commissioned." },
      { title: "Central heating & radiators", body: "New systems, upgrades, radiators and controls." },
      { title: "Kitchen & bathroom plumbing", body: "First and second fix for new kitchens and bathrooms." },
      { title: "Leaks, repairs & emergencies", body: "Fast diagnosis and repair of leaks and breakdowns." },
      { title: "Underfloor heating", body: "Warm-water underfloor systems, designed and installed." },
      { title: "Gas Safe servicing", body: "Servicing and safety checks by Gas Safe engineers." },
    ],
    gallery: [
      { src: "plumbing-brass-kitchen-tap.png", alt: "Brass kitchen tap installation over a stone worktop" },
      { src: "plumbing-copper-pipe-repair.png", alt: "Neat copper pipework repair behind a panel" },
      { src: "plumbing-radiator-thermostatic-valve.png", alt: "Radiator with a new thermostatic valve fitted" },
    ],
    faqs: [
      { q: "How much does a new boiler cost?", a: "It depends on the boiler type, size and any system upgrades. We assess your home, recommend the right unit and quote a fixed installed price." },
      { q: "Are you Gas Safe registered?", a: "Yes — all gas work is carried out by Gas Safe registered engineers, with certification on completion." },
      { q: "Do you offer emergency plumbing?", a: "Yes. We respond quickly to leaks, breakdowns and no-heat situations to make things safe and get you working again." },
      { q: "Can you install underfloor heating?", a: "Yes — we design and install warm-water underfloor heating, ideal for extensions, kitchens and bathrooms with stone or tiled floors." },
    ],
    featuredAreas: ["uxbridge", "ruislip", "northwood"],
    relatedServices: ["installations/bathrooms", "maintenance/property-maintenance"],
  },
  {
    slug: "property-maintenance",
    silo: "maintenance",
    navLabel: "Property Maintenance",
    metaTitle:
      "Property Maintenance in Harefield, Central & West London | Landlords & Prime Property | Hangard",
    metaDescription:
      "Planned and reactive property maintenance across West London, the Home Counties and prime central London. Landlord, managing-agent and HNW property care.",
    h1: "Property Maintenance in Harefield, Central London & West London",
    lead: "Planned and reactive maintenance for homes, landlords, managing agents and prime property.",
    cardBlurb: "Planned and reactive maintenance for homes and managed property.",
    cardImage: "p31.png",
    heroImage: "p31.png",
    overviewHeading: "One trusted firm for everything a property needs.",
    overviewBody:
      "Good maintenance is the quiet work that keeps a property right and protects its value. We handle planned and reactive maintenance across the building fabric and services — discreetly, reliably, and to the standard prime and managed property demands.",
    overviewBullets: [
      "Planned and reactive maintenance",
      "Landlord and managing-agent services",
      "Prime and high-net-worth property care",
      "Repairs, decorating and handyman work",
    ],
    overviewImage: {
      src: "p17.png",
      alt: "Well-maintained period property exterior in good repair",
    },
    subservices: [
      { title: "Planned & reactive maintenance", body: "Scheduled upkeep and quick response when things go wrong." },
      { title: "Landlord & managing-agent", body: "Reliable cover for portfolios and managed buildings." },
      { title: "Prime / HNW property care", body: "Discreet, careful work in high-value homes." },
      { title: "Repairs & decorating", body: "Carpentry, decorating and the long handyman list." },
      { title: "Building fabric & compliance", body: "Keeping the structure, services and compliance in order." },
      { title: "Maintenance contracts", body: "Ongoing agreements with a single point of contact." },
    ],
    gallery: [
      { src: "p31.png", alt: "Property maintenance work on a residential exterior" },
      { src: "p17.png", alt: "Maintained period home with restored brickwork" },
      { src: "p06.png", alt: "Interior decorating and repair in a managed property" },
    ],
    faqs: [
      { q: "Do you offer maintenance contracts?", a: "Yes. We set up planned-maintenance agreements with a single point of contact, tailored to the property and how often it needs attention." },
      { q: "Do you work with landlords and managing agents?", a: "Yes — we provide reliable reactive and planned maintenance for landlords and managing agents, with clear reporting and quick turnaround." },
      { q: "Do you cover prime central London properties?", a: "Yes. We're experienced in discreet, high-standard maintenance for prime and high-net-worth homes across central London." },
      { q: "Can you handle emergency repairs?", a: "Yes. We respond quickly to leaks, failures and damage to make a property safe before completing a permanent repair." },
    ],
    featuredAreas: ["central-london", "mayfair", "kensington"],
    relatedServices: ["services/roofing", "installations/plumbing-heating"],
  },
  {
    slug: "patios-driveways",
    silo: "maintenance",
    navLabel: "Driveways & Patios",
    metaTitle:
      "Driveways & Patios in Harefield & West London | Block Paving & Resin | Hangard",
    metaDescription:
      "Block paving, resin-bound & gravel driveways, patios and paving across West London. Permeable, SuDS-compliant & properly drained. Free quotes.",
    h1: "Driveways & Patios in Harefield & West London",
    lead: "Block paving, resin-bound and gravel driveways, patios and paving — properly drained and built to last.",
    cardBlurb: "Block paving, resin and gravel driveways, patios and paving.",
    cardImage: "p21.png",
    heroImage: "p21.png",
    overviewHeading: "The first thing people see, built to last.",
    overviewBody:
      "A driveway and patio take constant load and weather, so the base matters as much as the surface. We excavate and drain correctly, then lay block, resin or stone to crisp, permanent lines.",
    overviewBullets: [
      "Block paving driveways",
      "Resin-bound driveways",
      "Gravel and permeable driveways",
      "Patios, paving, drainage and edging",
    ],
    overviewImage: {
      src: "landscaping-garden-dusk-lighting.png",
      alt: "Porcelain patio with planting and integrated lighting at dusk",
    },
    subservices: [
      { title: "Block paving driveways", body: "Durable, classic block paving in a range of styles." },
      { title: "Resin-bound driveways", body: "Smooth, permeable resin surfaces in many finishes." },
      { title: "Gravel & permeable", body: "SuDS-friendly gravel and permeable driveways." },
      { title: "Patios & paving", body: "Porcelain and stone patios laid level and true." },
      { title: "Drainage & edging", body: "Proper falls, drainage, kerbs and crisp edging." },
      { title: "Base & groundworks", body: "The excavation and sub-base that make it last." },
    ],
    gallery: [
      { src: "p21.png", alt: "Block paving driveway laid to a herringbone pattern with kerb edging" },
      { src: "landscaping-garden-dusk-lighting.png", alt: "Porcelain patio with lighting and raised planters" },
      { src: "p20.png", alt: "Landscaped front garden with new paving and planting" },
    ],
    faqs: [
      { q: "How much does a new driveway cost?", a: "It depends on size, the surface you choose and the groundworks needed. We survey, recommend the right build-up and quote a fixed price including drainage." },
      { q: "Resin vs block paving — which is better?", a: "Block paving is hard-wearing and easy to repair; resin is smooth, permeable and low-maintenance. We'll talk you through which suits your home, use and budget." },
      { q: "Do I need planning permission for a driveway?", a: "Permeable surfaces usually don't need permission; non-permeable driveways over a certain size that drain to the road may. We advise and design for compliance." },
      { q: "How long does a driveway take to install?", a: "Most driveways take around one to two weeks depending on size, drainage and surface. We give you a programme before starting." },
      { q: "Are your driveways permeable / SuDS-compliant?", a: "We can build permeable, SuDS-compliant driveways in resin, gravel and permeable block to manage surface water correctly." },
    ],
    featuredAreas: ["watford", "gerrards-cross", "windsor"],
    relatedServices: ["maintenance/landscaping", "maintenance/property-maintenance"],
  },
  {
    slug: "landscaping",
    silo: "maintenance",
    navLabel: "Landscaping",
    metaTitle:
      "Landscaping & Garden Design in Harefield & West London | Design & Build | Hangard",
    metaDescription:
      "Garden design and build across West London & the Home Counties. Hard and soft landscaping, patios, planting, lawns, garden rooms, lighting and irrigation.",
    h1: "Landscaping & Garden Design in Harefield & West London",
    lead: "Garden design and build — hard and soft landscaping, garden rooms, lighting and planting.",
    cardBlurb: "Garden design and build, hard and soft landscaping.",
    cardImage: "p20.png",
    heroImage: "landscaping-garden-dusk-lighting.png",
    overviewHeading: "A garden that works as another room.",
    overviewBody:
      "A good garden is designed, not just planted. We bring structure, levels and planting together — patios, walls, lawns, lighting and garden rooms — to make an outdoor space you actually use, in every season.",
    overviewBullets: [
      "Garden design and build",
      "Hard landscaping — patios, walls, steps",
      "Soft landscaping, planting and lawns",
      "Garden rooms, decking, pergolas and lighting",
    ],
    overviewImage: {
      src: "p20.png",
      alt: "Landscaped garden with porcelain patio, raised planters and pleached trees",
    },
    subservices: [
      { title: "Garden design & build", body: "A considered design, built by the same team." },
      { title: "Hard landscaping", body: "Patios, retaining walls, steps and structure." },
      { title: "Soft landscaping & planting", body: "Planting schemes and beds that mature beautifully." },
      { title: "Lawns & turfing", body: "New lawns, turfing and quality artificial grass." },
      { title: "Garden rooms & decking", body: "Garden rooms, decking and pergolas for year-round use." },
      { title: "Lighting & irrigation", body: "Discreet lighting and irrigation to finish the scheme." },
    ],
    gallery: [
      { src: "landscaping-garden-dusk-lighting.png", alt: "Garden at dusk with integrated lighting across patio and planting" },
      { src: "p20.png", alt: "Landscaped garden with porcelain patio and raised beds" },
      { src: "elec-exterior-garden-lighting.png", alt: "Exterior garden lighting along a path and within planting" },
    ],
    faqs: [
      { q: "How much does landscaping a garden cost?", a: "It depends on the size, the amount of hard landscaping and the planting and extras you want. We design first, then quote each element clearly." },
      { q: "How long does a garden project take?", a: "From a couple of weeks for a patio to several weeks for a full design-and-build garden. We give you a programme once the design is agreed." },
      { q: "Do you offer design and build?", a: "Yes — we design the garden and build it with the same team, so the finished space matches the drawings." },
      { q: "What's the best time of year to landscape?", a: "Hard landscaping can be built year-round; planting is happiest in spring and autumn. We plan the programme around the work and the planting windows." },
    ],
    featuredAreas: ["windsor", "ascot", "beaconsfield"],
    relatedServices: ["maintenance/patios-driveways", "services/extensions"],
  },
];

const serviceByKey = new Map(services.map((s) => [`${s.silo}/${s.slug}`, s]));

export const serviceKey = (s: Service) => `${s.silo}/${s.slug}`;
export const getService = (key: string): Service | undefined =>
  serviceByKey.get(key);
export const servicesInSilo = (silo: Silo): Service[] =>
  services.filter((s) => s.silo === silo);
