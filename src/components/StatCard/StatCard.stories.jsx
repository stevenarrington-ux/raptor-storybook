import { StatCard } from './StatCard';

export default {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Dashboard metric card with icon accent, large value display, and optional trend badge.

**Design decisions:**
- Icon container uses full-saturation accent color (not a tinted background) for visual weight — matching the bold badge pattern
- Value uses Plus Jakarta Sans at 800 weight for maximum impact
- Trend badges reuse the Badge component for consistency

**Framework mapping:**
- Shadcn/ui: \`<Card>\` with custom content layout
- PrimeVue: \`<Card>\` component
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    change: { control: 'number' },
    accent: { control: 'color' },
  },
};

const UserIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>;
const ClockIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const ChartIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
const ClipIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>;

export const Default = {
  args: {
    label: 'Currently Signed In',
    value: '26',
    change: 12,
    accent: '#F97316',
    icon: <UserIcon />,
  },
};

export const DashboardRow = {
  name: 'Dashboard Row',
  render: () => (
    <div style={{ display: 'flex', gap: '14px', maxWidth: 900 }}>
      <StatCard label="Currently Signed In" value="26" change={12} icon={<UserIcon />} accent="#F97316" />
      <StatCard label="Hours This Week" value="143" icon={<ClockIcon />} accent="#2563EB" />
      <StatCard label="Hours This Month" value="853" change={8} icon={<ChartIcon />} accent="#16A34A" />
      <StatCard label="Pending Approval" value="15" icon={<ClipIcon />} accent="#DC2626" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Four stat cards in a row, as they appear on the Volunteer Dashboard. Each uses a different accent color from the semantic palette.',
      },
    },
  },
};
