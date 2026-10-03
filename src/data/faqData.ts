export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Can ONE CONNECT handle multiple types of work?',
    answer:
      'Yes, that is the core purpose of ONE CONNECT. Rather than coordinating separate teams for fabrication, false ceilings, partitions, electrical, carpentry, flooring, and painting, you have one professional point of contact. We coordinate and execute the complete scope under a synchronized plan and schedule.',
  },
  {
    id: 'faq-2',
    question: 'Do you provide site visits?',
    answer:
      'Yes. Understanding your actual site conditions, measurements, access constraints, and existing infrastructure is an essential step before finalizing work scope. We arrange a site assessment to review dimensions and project requirements directly with you.',
  },
  {
    id: 'faq-3',
    question: 'How is the quotation prepared?',
    answer:
      'After discussing your requirements and conducting the site assessment, we prepare a detailed, itemized quotation. It specifies the scope of work, technical specifications, material grades, area measurements, and clear pricing so there are no unexpected surprises.',
  },
  {
    id: 'faq-4',
    question: 'Can you handle complete shop renovation?',
    answer:
      'Yes. We handle end-to-end commercial shop and retail showroom renovations. This includes ACP exterior facades, toughened glass shopfronts, internal partitions, false ceilings, electrical wiring, display counters, and painting.',
  },
  {
    id: 'faq-5',
    question: 'Do you work on offices?',
    answer:
      'Yes. We regularly work on corporate and commercial office spaces—from bare-shell fitouts to cabin additions, acoustic partitions, modular grid ceilings, server room electricals, reception desks, and flooring.',
  },
  {
    id: 'faq-6',
    question: 'Do you work on residential projects?',
    answer:
      'Yes. We execute residential renovations, interior carpentry, false ceilings, decorative wall panels, sliding aluminium windows, terrace/bathroom waterproofing, and complete home remodeling.',
  },
  {
    id: 'faq-7',
    question: 'Can I send photos through WhatsApp?',
    answer:
      'Yes, absolutely. You can easily share current site photographs, architectural drawings, or short walkthrough videos directly to our official WhatsApp. This helps our team understand your requirements and prepare for the initial consultation.',
  },
  {
    id: 'faq-8',
    question: 'Can I request only one service?',
    answer:
      'Yes. While our strength is end-to-end multi-trade project coordination, we also execute standalone requirements—such as an epoxy flooring project, structural metal fabrication, an acoustic partition wall, or a false ceiling setup.',
  },
  {
    id: 'faq-9',
    question: 'Do you provide materials?',
    answer:
      'Yes. We provide complete contracting solutions including quality materials, hardware, and equipment specified in your agreed quotation. If you have already procured specific designer finishes or fixtures, we can also coordinate execution around your specifications.',
  },
  {
    id: 'faq-10',
    question: 'How long does a project take?',
    answer:
      'Project duration depends on the total square footage, required trades, and site accessibility. During the quotation phase, we provide a realistic timeline with scheduled phases so you know exactly when each stage will be completed.',
  },
];
