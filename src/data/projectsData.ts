export interface ProjectItem {
  id: string;
  title: string;
  category:
    | 'fabrication'
    | 'partitions'
    | 'ceiling'
    | 'panels'
    | 'carpentry'
    | 'acp'
    | 'epoxy'
    | 'waterproofing'
    | 'electrical'
    | 'complete';
  categoryLabel: string;
  location: string;
  clientType: 'Commercial' | 'Retail' | 'Office' | 'Residential' | 'Industrial';
  servicesProvided: string[];
  areaSqFt?: string;
  image: string;
  description: string;
}

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'fabrication', label: 'Fabrication' },
  { id: 'partitions', label: 'Partitions' },
  { id: 'ceiling', label: 'False Ceiling' },
  { id: 'panels', label: 'Wall Panels' },
  { id: 'carpentry', label: 'Carpentry' },
  { id: 'acp', label: 'ACP' },
  { id: 'epoxy', label: 'Epoxy Flooring' },
  { id: 'waterproofing', label: 'Waterproofing' },
  { id: 'electrical', label: 'Electrical' },
  { id: 'complete', label: 'Complete Projects' },
] as const;

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Corporate Headquarters Interior Fitout',
    category: 'complete',
    categoryLabel: 'Complete Projects',
    location: 'Bandra-Kurla Complex (BKC), Mumbai',
    clientType: 'Office',
    servicesProvided: ['Partitions', 'False Ceiling', 'Electrical & Wiring', 'Carpentry', 'Wall Panels'],
    areaSqFt: '4,800 sq.ft.',
    image: '/src/assets/images/commercial_office_fitout_1791029899454.jpg',
    description: 'Turnkey interior project execution with acoustic gypsum partitions, custom executive cabins, cove LED ceiling, and fluted panel wall claddings.',
  },
  {
    id: 'proj-2',
    title: 'Flagship Luxury Retail Showroom & Facade',
    category: 'acp',
    categoryLabel: 'ACP',
    location: 'Linking Road, Bandra, Mumbai',
    clientType: 'Retail',
    servicesProvided: ['ACP Cladding', 'Toughened Glass Work', 'Structural Fabrication', 'Track Lighting'],
    areaSqFt: '2,200 sq.ft.',
    image: '/src/assets/images/retail_shop_renovation_1791029911701.jpg',
    description: 'High-durability ACP facade cladding integrated with frameless 12mm glass shop entrance and precision structural metal support frame.',
  },
  {
    id: 'proj-3',
    title: 'Automotive Showroom High-Gloss Epoxy Floor',
    category: 'epoxy',
    categoryLabel: 'Epoxy Flooring',
    location: 'MIDC Andheri East, Mumbai',
    clientType: 'Commercial',
    servicesProvided: ['Epoxy Flooring', 'Floor Grinding', 'Surface Leveling', 'Anti-Slip Coating'],
    areaSqFt: '6,500 sq.ft.',
    image: '/src/assets/images/epoxy_flooring_industrial_1791029923384.jpg',
    description: 'High-build, chemical-resistant self-leveling 3mm epoxy flooring system engineered for heavy vehicle movement and pristine light reflection.',
  },
  {
    id: 'proj-4',
    title: 'Multi-Floor Architectural Steel Staircase & Railings',
    category: 'fabrication',
    categoryLabel: 'Fabrication',
    location: 'Powai, Mumbai',
    clientType: 'Commercial',
    servicesProvided: ['MS Fabrication', 'SS 304 Railings', 'Structural Welding', 'Epoxy Primer Coating'],
    areaSqFt: '3 Levels',
    image: '/src/assets/images/hero_architectural_site_1791029885839.jpg',
    description: 'Heavy structural steel framework with laser-cut decorative infill panels and seamless satin-finish stainless steel safety handrails.',
  },
  {
    id: 'proj-5',
    title: 'Acoustic Soundproof Office Partitions & Cabins',
    category: 'partitions',
    categoryLabel: 'Partitions',
    location: 'Goregaon East, Mumbai',
    clientType: 'Office',
    servicesProvided: ['Gypsum Partition', 'Glass Work', 'Sound Insulation Rockwool', 'Door Hardware'],
    areaSqFt: '3,200 sq.ft.',
    image: '/src/assets/images/commercial_office_fitout_1791029899454.jpg',
    description: 'Modular dual-layer gypsum board cabins with embedded 48kg/m³ rockwool soundproofing and integrated aluminium glass observation panels.',
  },
  {
    id: 'proj-6',
    title: 'Executive Boardroom Fluted Wall Panels & Ceiling',
    category: 'panels',
    categoryLabel: 'Wall Panels',
    location: 'Lower Parel, Mumbai',
    clientType: 'Office',
    servicesProvided: ['WPC Wall Panels', 'False Ceiling', 'Concealed LED Profiles', 'Custom Credenza'],
    areaSqFt: '1,400 sq.ft.',
    image: '/src/assets/images/retail_shop_renovation_1791029911701.jpg',
    description: 'Contemporary charcoal and natural teak WPC fluted louvers aligned with perimeter false ceiling cove lighting and audio-visual conduits.',
  },
  {
    id: 'proj-7',
    title: 'Commercial Terrace Waterproofing & PU Coating',
    category: 'waterproofing',
    categoryLabel: 'Waterproofing',
    location: 'Thane West',
    clientType: 'Commercial',
    servicesProvided: ['Terrace Waterproofing', 'Crack Injection Grouting', 'Elastomeric Membrane'],
    areaSqFt: '8,000 sq.ft.',
    image: '/src/assets/images/hero_architectural_site_1791029885839.jpg',
    description: 'High-build liquid applied polyurethane waterproofing system with non-woven geotextile reinforcement and UV-resistant protective topcoat.',
  },
  {
    id: 'proj-8',
    title: 'Commercial Kitchen & Dining Space Renovation',
    category: 'complete',
    categoryLabel: 'Complete Projects',
    location: 'Sakinaka, Mumbai',
    clientType: 'Retail',
    servicesProvided: ['Electrical & Wiring', 'Civil Finishing', 'Drywall Partition', 'Carpentry', 'Painting'],
    areaSqFt: '2,900 sq.ft.',
    image: '/src/assets/images/retail_shop_renovation_1791029911701.jpg',
    description: 'Rapid turnaround restaurant space fitout including grease-resistant wall finishes, heavy 3-phase commercial electrical lines, and customer booths.',
  },
  {
    id: 'proj-9',
    title: 'Logistics Warehouse Heavy Duty Flooring & Lights',
    category: 'electrical',
    categoryLabel: 'Electrical',
    location: 'Navi Mumbai',
    clientType: 'Industrial',
    servicesProvided: ['Electrical & Wiring', 'High-Bay Lighting', 'Distribution Boards', 'Cable Trays'],
    areaSqFt: '12,000 sq.ft.',
    image: '/src/assets/images/epoxy_flooring_industrial_1791029923384.jpg',
    description: 'Industrial high-bay LED installations, armored cabling, earthing pits, and master distribution boards for uninterrupted operations.',
  },
];
