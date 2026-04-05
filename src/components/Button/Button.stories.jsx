import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Primary action component with six variants and three sizes.

**Interactive states:** Hover darkens the fill by one shade step. Focus shows a 2px orange outline via \`:focus-visible\`. Disabled uses gray fill at 60% opacity.

**WCAG AA:** All colored variants provide ≥ 4.5:1 contrast for button text. Focus indicator meets 3:1 contrast against adjacent colors.

**Framework mapping:**
- Shadcn/ui: \`<Button variant="..." size="..." />\`
- PrimeVue: \`<Button severity="..." size="..." />\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost', 'outline', 'success'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const Primary = {
  args: { variant: 'primary', children: 'Save Changes' },
};

export const Secondary = {
  args: { variant: 'secondary', children: 'Cancel' },
};

export const Danger = {
  args: { variant: 'danger', children: 'Deny Application' },
};

export const Success = {
  args: { variant: 'success', children: 'Approve' },
};

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="success">Approve</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="danger">Deny</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
};

export const AllSizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons = {
  name: 'With Icons',
  render: () => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}>
        Add Volunteer
      </Button>
      <Button variant="secondary" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>}>
        Email
      </Button>
      <Button variant="danger" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}>
        Emergency
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with leading icons. Icons should be 16px for sm/md and 18px for lg buttons.',
      },
    },
  },
};
