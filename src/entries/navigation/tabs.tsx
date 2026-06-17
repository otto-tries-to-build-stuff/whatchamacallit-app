import type { Entry } from '@/lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const meta: Entry = {
  id: 'tabs',
  name: 'Tabs',
  category: 'navigation',
  commonality: 1,
  aliases: ['Tab Bar', 'Tabbed Interface', 'Segmented Nav'],
  description:
    'A horizontal strip of labels that switches between mutually exclusive sibling views, only one visible at a time.',
  whenToUse: [
    'You have 2–7 sibling views and only one is relevant at once',
    'The views are peers, not sequential steps',
  ],
  whenNotToUse: [
    'More than ~7 options — use a sidebar or select instead',
    'Steps that must happen in order — use a stepper / wizard',
  ],
  relatedTo: ['segmented-control', 'stepper', 'accordion'],
  source: 'shadcn',
  code: {
    language: 'tsx',
    filename: 'tabs-demo.tsx',
    content: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Demo() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Your project at a glance.</TabsContent>
      <TabsContent value="activity">Recent events and changes.</TabsContent>
      <TabsContent value="settings">Preferences for this project.</TabsContent>
    </Tabs>
  );
}`,
  },
};

const PANELS = {
  overview: 'Your project at a glance.',
  activity: 'Recent events and changes.',
  settings: 'Preferences for this project.',
} as const;

export default function Demo() {
  return (
    <div className="w-full max-w-[300px] px-4">
      <Tabs defaultValue="overview">
        <TabsList className="w-full">
          <TabsTrigger value="overview" className="flex-1 text-[12px]">
            Overview
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex-1 text-[12px]">
            Activity
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex-1 text-[12px]">
            Settings
          </TabsTrigger>
        </TabsList>
        {(Object.keys(PANELS) as (keyof typeof PANELS)[]).map((key) => (
          <TabsContent
            key={key}
            value={key}
            className="rounded-lg border border-line bg-surface3 p-3 text-[12px] leading-relaxed text-muted"
          >
            {PANELS[key]}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
