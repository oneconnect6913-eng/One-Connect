export interface BeforeAfterScenario {
  id: string;
  title: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  servicesInvolved: string[];
  beforeImage: string;
  afterImage: string;
  accentNote: string;
}

export const BEFORE_AFTER_SCENARIOS: BeforeAfterScenario[] = [
  {
    id: 'shop-renovation',
    title: 'Old Shop → Renovated Shop',
    beforeLabel: 'Original Old Retail Store',
    afterLabel: 'Transformed Commercial Retail Space',
    description: 'Outdated storefront with old rolling shutter and peeling paint converted into a high-end retail showroom with ACP elevation, toughened glass display, and ambient ceiling lights.',
    servicesInvolved: ['ACP Cladding', 'Toughened Glass', 'False Ceiling', 'Display Carpentry', 'Electrical'],
    beforeImage: '/src/assets/images/hero_architectural_site_1791029885839.jpg',
    afterImage: '/src/assets/images/retail_shop_renovation_1791029911701.jpg',
    accentNote: 'Executed with complete project coordination in 18 days',
  },
  {
    id: 'office-fitout',
    title: 'Empty Office → Finished Office',
    beforeLabel: 'Bare Bare-Shell Commercial Floor',
    afterLabel: 'Complete Turnkey Executive Office',
    description: 'Raw concrete slab and exposed rafters transformed into an acoustic-rated corporate workspace with cabins, cove lighting, and sleek custom reception counter.',
    servicesInvolved: ['Drywall Partition', 'Modular Ceiling', 'Commercial Electrical', 'Carpentry', 'Flooring'],
    beforeImage: '/src/assets/images/hero_architectural_site_1791029885839.jpg',
    afterImage: '/src/assets/images/commercial_office_fitout_1791029899454.jpg',
    accentNote: 'Single point of contact for all 5 trades',
  },
  {
    id: 'epoxy-flooring',
    title: 'Damaged Floor → Epoxy Flooring',
    beforeLabel: 'Cracked & Oil-Stained Concrete',
    afterLabel: 'High-Gloss Seamless Epoxy Finish',
    description: 'Dusty, pitted industrial concrete ground flat, crack-repaired with epoxy mortar, and finished with a 3-coat solvent-free self-leveling mirror epoxy layer.',
    servicesInvolved: ['Surface Grinding', 'Crack Infill', 'Epoxy Primer', '3mm Self-Leveling Epoxy'],
    beforeImage: '/src/assets/images/hero_architectural_site_1791029885839.jpg',
    afterImage: '/src/assets/images/epoxy_flooring_industrial_1791029923384.jpg',
    accentNote: 'High chemical resistance & anti-slip properties',
  },
  {
    id: 'wall-panels',
    title: 'Plain Wall → Decorative Wall Panel',
    beforeLabel: 'Plain Bare Plaster Wall',
    afterLabel: 'Architectural Fluted Feature Wall',
    description: 'Dull white wall upgraded with charcoal and oak WPC fluted louvers, integrated warm LED vertical profile strips, and concealed TV wire conduits.',
    servicesInvolved: ['WPC Wall Panels', 'Fluted Louvers', 'Concealed Wiring', 'LED Profiles'],
    beforeImage: '/src/assets/images/hero_architectural_site_1791029885839.jpg',
    afterImage: '/src/assets/images/commercial_office_fitout_1791029899454.jpg',
    accentNote: 'Termite-proof, water-resistant architectural upgrade',
  },
  {
    id: 'partitioned-office',
    title: 'Open Space → Partitioned Office',
    beforeLabel: 'Unusable Open Shell Space',
    afterLabel: 'Organized Soundproof Cabins & Meeting Rooms',
    description: 'Wide cavernous hall compartmentalized into manager cabins, conference rooms, and quiet zones using fire-rated gypsum drywall with glass vision panels.',
    servicesInvolved: ['Gypsum Drywall', 'Aluminium Glass Partitions', 'Acoustic Rockwool', 'Door Framing'],
    beforeImage: '/src/assets/images/hero_architectural_site_1791029885839.jpg',
    afterImage: '/src/assets/images/commercial_office_fitout_1791029899454.jpg',
    accentNote: 'Optimized workspace flow and sound privacy',
  },
];
