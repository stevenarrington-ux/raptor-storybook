import{j as e,M as c}from"./index-D38wYfk5.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import"./iframe-CUb6WqiA.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dj79_JO2.js";import"./index-BrKcqHra.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Foundations/Design Tokens"}),`
`,e.jsx(n.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"Design tokens are the atomic values that define Raptor's visual language. They live in two places:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"globals.css"})})," — CSS custom properties for direct use in components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"tokens.js"})})," — JavaScript exports for programmatic access"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"colors",children:"Colors"}),`
`,e.jsx(n.h3,{id:"primary--raptor-orange",children:"Primary — Raptor Orange"}),`
`,e.jsx(n.p,{children:"The primary palette drives all action states (buttons, links, focus rings, active navigation)."}),`
`,e.jsxs(n.p,{children:[`| Token | Hex | Usage |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"--color-primary-50"})," | ",e.jsx(n.code,{children:"#FFF7ED"}),` | Hover backgrounds, subtle fills |
| `,e.jsx(n.code,{children:"--color-primary-100"})," | ",e.jsx(n.code,{children:"#FFEDD5"}),` | Selected row backgrounds |
| `,e.jsx(n.code,{children:"--color-primary-200"})," | ",e.jsx(n.code,{children:"#FED7AA"}),` | Text selection highlight |
| `,e.jsx(n.code,{children:"--color-primary-300"})," | ",e.jsx(n.code,{children:"#FDBA74"}),` | — |
| `,e.jsx(n.code,{children:"--color-primary-400"})," | ",e.jsx(n.code,{children:"#FB923C"}),` | Active nav text, outline button border |
| `,e.jsx(n.code,{children:"--color-primary-500"})," | ",e.jsx(n.code,{children:"#F97316"})," | ",e.jsx(n.strong,{children:"Primary buttons, badge fills, focus rings"}),` |
| `,e.jsx(n.code,{children:"--color-primary-600"})," | ",e.jsx(n.code,{children:"#EA580C"}),` | Button hover state |
| `,e.jsx(n.code,{children:"--color-primary-700"})," | ",e.jsx(n.code,{children:"#C2410C"}),` | Button active/pressed state |
| `,e.jsx(n.code,{children:"--color-primary-800"})," | ",e.jsx(n.code,{children:"#9A3412"})," | High-contrast text on primary-50 |"]}),`
`,e.jsx(n.h3,{id:"semantic",children:"Semantic"}),`
`,e.jsxs(n.p,{children:[`| Token | Hex | Usage |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"--color-success-500"})," | ",e.jsx(n.code,{children:"#16A34A"}),` | Approved status, save confirmation |
| `,e.jsx(n.code,{children:"--color-danger-500"})," | ",e.jsx(n.code,{children:"#DC2626"}),` | Denied status, errors, delete actions |
| `,e.jsx(n.code,{children:"--color-warning-500"})," | ",e.jsx(n.code,{children:"#D97706"}),` | Expiring status, renewal reminders |
| `,e.jsx(n.code,{children:"--color-info-500"})," | ",e.jsx(n.code,{children:"#2563EB"})," | Background check, informational states |"]}),`
`,e.jsx(n.h3,{id:"extended--smartpass-accents",children:"Extended — SmartPass Accents"}),`
`,e.jsxs(n.p,{children:[`| Token | Hex | Usage |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"--color-navy-500"})," | ",e.jsx(n.code,{children:"#312E81"}),` | Duration badges, office locations |
| `,e.jsx(n.code,{children:"--color-magenta-500"})," | ",e.jsx(n.code,{children:"#C026D3"}),` | Nurse/health room tags |
| `,e.jsx(n.code,{children:"--color-teal-500"})," | ",e.jsx(n.code,{children:"#0D9488"})," | Library/activity tags |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"typography",children:"Typography"}),`
`,e.jsx(n.p,{children:`| Scale | Size | Weight | Family | Usage |
| --- | --- | --- | --- | --- |
| Display | 2.25rem | 800 | Plus Jakarta Sans | Page titles, hero numbers |
| Heading | 1.5rem | 700 | Plus Jakarta Sans | Section headers |
| Subheading | 1.125rem | 600 | Plus Jakarta Sans | Card headers |
| Body | 0.9375rem | 400 | DM Sans | Form inputs, paragraphs |
| Label | 0.8125rem | 600 | DM Sans | Form labels, nav items |
| Caption | 0.75rem | 400 | DM Sans | Hints, metadata |
| Small | 0.625rem | 500 | DM Sans | Swatch labels, footnotes |`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.p,{children:["Based on a ",e.jsx(n.strong,{children:"4px grid"})," (0.25rem):"]}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Pixels |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"--space-1"}),` | 0.25rem | 4px |
| `,e.jsx(n.code,{children:"--space-2"}),` | 0.5rem | 8px |
| `,e.jsx(n.code,{children:"--space-3"}),` | 0.75rem | 12px |
| `,e.jsx(n.code,{children:"--space-4"}),` | 1rem | 16px |
| `,e.jsx(n.code,{children:"--space-6"}),` | 1.5rem | 24px |
| `,e.jsx(n.code,{children:"--space-8"})," | 2rem | 32px |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"border-radius",children:"Border Radius"}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Usage |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"--radius-sm"}),` | 0.375rem | Small badges, mini buttons |
| `,e.jsx(n.code,{children:"--radius-md"}),` | 0.625rem | Inputs, selects |
| `,e.jsx(n.code,{children:"--radius-lg"}),` | 0.875rem | Buttons, nav items |
| `,e.jsx(n.code,{children:"--radius-xl"}),` | 1.125rem | Cards, panels |
| `,e.jsx(n.code,{children:"--radius-2xl"}),` | 1.5rem | Large cards, modals |
| `,e.jsx(n.code,{children:"--radius-full"})," | 9999px | Badges, avatars |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"shadows",children:"Shadows"}),`
`,e.jsxs(n.p,{children:[`| Token | Usage |
| --- | --- |
| `,e.jsx(n.code,{children:"--shadow-sm"}),` | Subtle lift on cards at rest |
| `,e.jsx(n.code,{children:"--shadow-md"}),` | Elevated cards, dropdowns |
| `,e.jsx(n.code,{children:"--shadow-lg"}),` | Modals, toasts |
| `,e.jsx(n.code,{children:"--shadow-focus"}),` | Orange focus ring (inputs, buttons) |
| `,e.jsx(n.code,{children:"--shadow-focus-danger"})," | Red focus ring (error state inputs) |"]})]})}function m(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{m as default};
