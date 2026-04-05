import React from 'react';
import { FormSelect } from './FormSelect';

export default {
  title: 'Components/FormSelect',
  component: FormSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Dropdown select with custom chevron icon, focus ring, and disabled state.

**Framework mapping:**
- Shadcn/ui: \`<Select>\` + \`<SelectTrigger>\`
- PrimeVue: \`<Dropdown>\`
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    options: { control: 'object' },
  },
};

export const Default = {
  args: {
    label: 'Building',
    options: ['All Buildings', 'Lincoln Elementary', 'Washington Middle', 'Jefferson High'],
    value: 'Lincoln Elementary',
  },
};

export const Required = {
  args: {
    label: 'Affiliation',
    required: true,
    options: ['Parent', 'Guardian', 'Community Member', 'Staff'],
    value: 'Parent',
  },
};

export const Disabled = {
  args: {
    label: 'Gender',
    disabled: true,
    options: ['Female', 'Male', 'Non-binary', 'Prefer not to say'],
    value: 'Female',
  },
};
