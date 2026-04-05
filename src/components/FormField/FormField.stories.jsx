import { useState } from 'react';
import { FormField } from './FormField';

export default {
  title: 'Components/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Text input with integrated label, validation states, and accessible markup.

**Interactive states (try them):**
- **Default:** 1.5px neutral border
- **Focused:** Orange glow ring (3px, 25% opacity)
- **Error:** Red glow ring + inline error message with alert icon
- **Disabled:** Gray background, not-allowed cursor
- **Read-only:** Light gray background, default cursor

**WCAG AA features:**
- \`aria-invalid\` set on error state
- \`aria-describedby\` links input to error/hint text
- Error messages use \`role="alert"\` for screen readers
- Required fields marked with visible asterisk + \`aria-label="required"\`

**Framework mapping:**
- Shadcn/ui: \`<Input />\` + \`<Label />\` + \`<FormMessage />\`
- PrimeVue: \`<InputText />\` + \`<Message severity="error" />\`
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' },
    value: { control: 'text' },
    error: { control: 'text' },
    hint: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
};

export const Default = {
  args: { label: 'Legal First Name', value: 'Patricia', required: true },
};

export const WithError = {
  args: { label: 'Email', value: 'invalid-email', required: true, error: 'Enter a valid email address', type: 'email' },
};

export const WithHint = {
  args: { label: 'Phone Number', value: '', placeholder: '(555) 555-5555', hint: 'Include area code' },
};

export const Disabled = {
  args: { label: 'Record ID', value: 'VOL-2026-0847', disabled: true },
};

export const ReadOnly = {
  args: { label: 'Last Name', value: 'Kelley', readOnly: true },
};

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', maxWidth: 800 }}>
      <div style={{ flex: 1, minWidth: 200 }}>
        <FormField label="Default" value="Patricia" onChange={() => {}} />
      </div>
      <div style={{ flex: 1, minWidth: 200 }}>
        <FormField label="Required" required value="" placeholder="Enter name" onChange={() => {}} />
      </div>
      <div style={{ flex: 1, minWidth: 200 }}>
        <FormField label="Error" required value="" error="This field is required" onChange={() => {}} />
      </div>
      <div style={{ flex: 1, minWidth: 200 }}>
        <FormField label="Hint" value="" placeholder="(555) 555-5555" hint="Include area code" onChange={() => {}} />
      </div>
      <div style={{ flex: 1, minWidth: 200 }}>
        <FormField label="Read Only" value="Kelley" readOnly />
      </div>
      <div style={{ flex: 1, minWidth: 200 }}>
        <FormField label="Disabled" value="VOL-2026-0847" disabled />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All six input states side by side. Click into the Default or Required fields to see the orange focus ring. The Error field shows a red focus ring when clicked.',
      },
    },
  },
};

export const FormLayout = {
  name: 'Form Layout — Volunteer Record',
  render: () => {
    const [form, setForm] = useState({
      firstName: 'Patricia', middleName: '', lastName: 'Kelley',
      dob: '11/14/1960', phone: '(555) 867-5309', email: 'p.kelley@email.com',
    });
    const upd = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

    return (
      <div style={{ maxWidth: 700, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}><FormField label="Legal First Name" required value={form.firstName} onChange={upd('firstName')} /></div>
          <div style={{ flex: 1 }}><FormField label="Middle Name" value={form.middleName} onChange={upd('middleName')} /></div>
          <div style={{ flex: 1 }}><FormField label="Legal Last Name" required value={form.lastName} onChange={upd('lastName')} /></div>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}><FormField label="Date of Birth" required value={form.dob} onChange={upd('dob')} /></div>
          <div style={{ flex: 1 }}><FormField label="Phone" required value={form.phone} onChange={upd('phone')} /></div>
          <div style={{ flex: 1 }}><FormField label="Email" required type="email" value={form.email} onChange={upd('email')} /></div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Realistic form layout matching the Volunteer record edit view. All fields are interactive — click to see focus rings.',
      },
    },
  },
};
