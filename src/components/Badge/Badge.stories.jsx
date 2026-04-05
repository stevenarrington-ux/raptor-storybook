import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Bold status badges following SmartPass design patterns — fully saturated backgrounds with white text.

**WCAG AA Compliance:** All variant/text combos meet ≥ 3:1 contrast ratio for bold text at 12-13px / 600 weight, which qualifies as large text per WCAG 2.1.

**Usage:** Status indicators for volunteer approval states, visit function tags, location labels, and duration displays.

**Framework mapping:**
- Shadcn/ui: \`<Badge variant="..." />\`
- PrimeVue: \`<Tag severity="..." />\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'danger', 'warning', 'info', 'navy', 'magenta', 'teal'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Badge size',
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
};

// ─── Primary story ───────────────────────────────────────────────
export const Default = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Pending Review',
  },
};

// ─── All Variants ────────────────────────────────────────────────
export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="success">✓ Approved</Badge>
      <Badge variant="primary">⏳ Pending</Badge>
      <Badge variant="danger">✕ Denied</Badge>
      <Badge variant="warning">⚠ Expiring</Badge>
      <Badge variant="info">🛡 Background Check</Badge>
      <Badge variant="navy">Main Office</Badge>
      <Badge variant="magenta">Nurse</Badge>
      <Badge variant="teal">Library</Badge>
      <Badge variant="default">Default</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All nine badge variants. Semantic variants (success, danger, warning, info) map to volunteer workflow states. Extended variants (navy, magenta, teal) are used for location/function tags in tables.',
      },
    },
  },
};

// ─── Sizes ───────────────────────────────────────────────────────
export const Sizes = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge variant="success" size="sm">Small (sm)</Badge>
      <Badge variant="success" size="md">Medium (md)</Badge>
    </div>
  ),
};

// ─── Volunteer Workflow ──────────────────────────────────────────
export const VolunteerWorkflow = {
  name: 'Volunteer Workflow States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{ width: 140, fontSize: '0.8125rem', color: '#525252', fontFamily: 'var(--font-body)' }}>New application:</span>
        <Badge variant="primary">⏳ Pending</Badge>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{ width: 140, fontSize: '0.8125rem', color: '#525252', fontFamily: 'var(--font-body)' }}>Check running:</span>
        <Badge variant="info">🛡 Background Check</Badge>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{ width: 140, fontSize: '0.8125rem', color: '#525252', fontFamily: 'var(--font-body)' }}>Cleared:</span>
        <Badge variant="success">✓ Approved</Badge>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{ width: 140, fontSize: '0.8125rem', color: '#525252', fontFamily: 'var(--font-body)' }}>Issue found:</span>
        <Badge variant="danger">✕ Denied</Badge>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{ width: 140, fontSize: '0.8125rem', color: '#525252', fontFamily: 'var(--font-body)' }}>Renewal due:</span>
        <Badge variant="warning">⚠ Expiring</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge variants mapped to the VolunteerSafe approval workflow. Each state has a distinct, high-contrast color to ensure quick visual scanning in tables and approval queues.',
      },
    },
  },
};
