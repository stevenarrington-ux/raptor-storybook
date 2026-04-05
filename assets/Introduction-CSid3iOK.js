import{j as e,M as i}from"./index-D38wYfk5.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import"./iframe-CUb6WqiA.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dj79_JO2.js";import"./index-BrKcqHra.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"raptor-design-system",children:"Raptor Design System"}),`
`,e.jsx(n.p,{children:"A unified visual language for Raptor Technologies' K-12 school safety applications."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["This design system provides the ",e.jsx(n.strong,{children:"tokens, components, and patterns"})," needed to build consistent, accessible, and modern interfaces across Raptor's product suite — including VolunteerSafe, VisitorSafe, SmartPass, and future applications."]}),`
`,e.jsx(n.h3,{id:"design-principles",children:"Design Principles"}),`
`,e.jsxs(n.p,{children:[`| Principle | Description |
| --- | --- |
| `,e.jsx(n.strong,{children:"Bold & Confident"}),` | Saturated colors, strong type hierarchy — users need clarity under pressure |
| `,e.jsx(n.strong,{children:"Accessible First"}),` | WCAG AA minimum on all interactive elements, visible focus indicators |
| `,e.jsx(n.strong,{children:"Framework-Agnostic Tokens"}),` | CSS custom properties that map to Shadcn/ui, PrimeVue, or Radix |
| `,e.jsx(n.strong,{children:"Consistent States"})," | Every interactive element has default, hover, focus, error, and disabled states |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`src/
├── tokens/
│   ├── globals.css       ← CSS custom properties (single source of truth)
│   └── tokens.js         ← JS exports for programmatic use
├── components/
│   ├── Badge/            ← Bold status indicators (SmartPass-style)
│   ├── Button/           ← Action buttons with 6 variants × 3 sizes
│   ├── FormField/        ← Text inputs with validation + accessibility
│   ├── FormSelect/       ← Select dropdowns
│   └── StatCard/         ← Dashboard metric displays
└── docs/
    └── Introduction.mdx  ← This file
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"token-system",children:"Token System"}),`
`,e.jsxs(n.p,{children:["Design tokens are defined as CSS custom properties in ",e.jsx(n.code,{children:"globals.css"})," and exported as JavaScript objects in ",e.jsx(n.code,{children:"tokens.js"}),". This dual-format approach supports:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CSS-first:"})," Components reference ",e.jsx(n.code,{children:"var(--color-primary-500)"})," directly"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JS when needed:"})," Build scripts, theme switching, or programmatic access"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Framework mapping:"})," Tokens map to Shadcn/ui's CSS variable convention and PrimeVue's preset theme structure"]}),`
`]}),`
`,e.jsx(n.h3,{id:"color-palette",children:"Color Palette"}),`
`,e.jsxs(n.p,{children:["The palette centers on ",e.jsx(n.strong,{children:"Raptor Orange"})," as the primary action color, with semantic colors for workflow states and extended accent colors influenced by SmartPass's bold UI."]}),`
`,e.jsx(n.h3,{id:"badge-style",children:"Badge Style"}),`
`,e.jsxs(n.p,{children:["Following SmartPass patterns, badges use ",e.jsx(n.strong,{children:"fully saturated backgrounds with white text"})," rather than muted pastels. This creates strong visual hierarchy in data-dense views like approval queues and visit history tables."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility-wcag-aa",children:"Accessibility (WCAG AA)"}),`
`,e.jsx(n.p,{children:"Every component is built to meet WCAG 2.1 AA:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Color contrast:"})," All text/background combos ≥ 4.5:1 (normal text) or ≥ 3:1 (large/bold text)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus indicators:"})," 3px glow rings on all focusable elements, 2px outline on buttons"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ARIA attributes:"})," ",e.jsx(n.code,{children:"aria-invalid"}),", ",e.jsx(n.code,{children:"aria-describedby"}),", ",e.jsx(n.code,{children:'role="alert"'})," on form errors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Semantic HTML:"})," ",e.jsx(n.code,{children:"<fieldset>"}),", ",e.jsx(n.code,{children:"<legend>"}),", ",e.jsx(n.code,{children:"<nav>"}),", ",e.jsx(n.code,{children:'scope="col"'})," on table headers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard navigation:"})," All interactive elements reachable and operable via keyboard"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"framework-compatibility",children:"Framework Compatibility"}),`
`,e.jsxs(n.p,{children:[`| Component | Shadcn/ui | PrimeVue | Radix |
| --- | --- | --- | --- |
| Badge | `,e.jsx(n.code,{children:"<Badge>"})," | ",e.jsx(n.code,{children:"<Tag>"}),` | — |
| Button | `,e.jsx(n.code,{children:"<Button>"})," | ",e.jsx(n.code,{children:"<Button>"}),` | — |
| FormField | `,e.jsx(n.code,{children:"<Input>"})," + ",e.jsx(n.code,{children:"<Label>"})," | ",e.jsx(n.code,{children:"<InputText>"})," | ",e.jsx(n.code,{children:"<TextField>"}),` |
| StatCard | `,e.jsx(n.code,{children:"<Card>"})," | ",e.jsx(n.code,{children:"<Card>"})," | — |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install
npm run storybook
`})}),`
`,e.jsx(n.p,{children:"To build a static site for deployment:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run build-storybook
`})}),`
`,e.jsxs(n.p,{children:["Deploy the ",e.jsx(n.code,{children:"storybook-static/"})," folder to Chromatic, GitHub Pages, Netlify, or Vercel."]})]})}function u(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{u as default};
