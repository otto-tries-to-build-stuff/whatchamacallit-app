import type { Entry } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const meta: Entry = {
  id: 'accordion',
  name: 'Accordion',
  category: 'disclosure',
  commonality: 1,
  aliases: ['Disclosure', 'Collapsible Sections', 'Expander'],
  description:
    'A vertical stack of expandable rows where each row reveals hidden content when its header is clicked.',
  whenToUse: [
    'Breaking long content into scannable, on-demand sections (FAQs, settings)',
    'Saving vertical space when most sections stay collapsed',
  ],
  whenNotToUse: [
    'Switching between peer views at the same level — use tabs',
    'Content users almost always need open — just show it inline',
  ],
  relatedTo: ['disclosure-widget', 'tabs', 'tree-view'],
  source: 'shadcn',
  code: {
    language: 'tsx',
    filename: 'accordion-demo.tsx',
    content: `import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";

export function Demo() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a whatchamacallit?</AccordionTrigger>
        <AccordionContent>
          The thing you can picture but can't name — until now.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes — it follows the WAI-ARIA disclosure pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
  },
};

const ITEMS = [
  {
    value: 'item-1',
    q: 'What is a whatchamacallit?',
    a: "The thing you can picture but can't name — until now.",
  },
  {
    value: 'item-2',
    q: 'Is it accessible?',
    a: 'Yes — it follows the WAI-ARIA disclosure pattern out of the box.',
  },
  {
    value: 'item-3',
    q: 'Can I nest them?',
    a: 'You can, but keep hierarchies shallow so content stays findable.',
  },
];

export default function Demo() {
  return (
    <div className="w-full max-w-[300px] px-4">
      <Accordion type="single" collapsible defaultValue="item-1">
        {ITEMS.map(({ value, q, a }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-[12.5px]">{q}</AccordionTrigger>
            <AccordionContent className="text-[12px] leading-relaxed">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
