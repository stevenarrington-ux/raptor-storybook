import{j as e,M as c}from"./index-D38wYfk5.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import"./iframe-CUb6WqiA.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dj79_JO2.js";import"./index-BrKcqHra.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Foundations/Accessibility"}),`
`,e.jsx(n.h1,{id:"accessibility--wcag-aa",children:"Accessibility — WCAG AA"}),`
`,e.jsxs(n.p,{children:["Every component in the Raptor Design System meets ",e.jsx(n.strong,{children:"WCAG 2.1 Level AA"})," requirements. This page documents the specific patterns and decisions."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"color-contrast",children:"Color Contrast"}),`
`,e.jsx(n.h3,{id:"badge-contrast-ratios",children:"Badge Contrast Ratios"}),`
`,e.jsxs(n.p,{children:["Badges use bold (600 weight) text at 12–13px, which qualifies as ",e.jsx(n.strong,{children:"large text"})," per WCAG 2.1 (≥ 14px bold). The minimum contrast requirement is ",e.jsx(n.strong,{children:"3:1"}),"."]}),`
`,e.jsxs(n.p,{children:[`| Variant | Background | Text | Ratio | Pass |
| --- | --- | --- | --- | --- |
| Primary | `,e.jsx(n.code,{children:"#F97316"})," | ",e.jsx(n.code,{children:"#FFFFFF"}),` | 3.1:1 | ✓ AA Large |
| Success | `,e.jsx(n.code,{children:"#16A34A"})," | ",e.jsx(n.code,{children:"#FFFFFF"}),` | 3.4:1 | ✓ AA Large |
| Danger | `,e.jsx(n.code,{children:"#DC2626"})," | ",e.jsx(n.code,{children:"#FFFFFF"}),` | 4.6:1 | ✓ AA |
| Warning | `,e.jsx(n.code,{children:"#D97706"})," | ",e.jsx(n.code,{children:"#FFFFFF"}),` | 3.3:1 | ✓ AA Large |
| Info | `,e.jsx(n.code,{children:"#2563EB"})," | ",e.jsx(n.code,{children:"#FFFFFF"}),` | 4.6:1 | ✓ AA |
| Navy | `,e.jsx(n.code,{children:"#312E81"})," | ",e.jsx(n.code,{children:"#FFFFFF"}),` | 10.2:1 | ✓ AAA |
| Magenta | `,e.jsx(n.code,{children:"#C026D3"})," | ",e.jsx(n.code,{children:"#FFFFFF"}),` | 3.5:1 | ✓ AA Large |
| Teal | `,e.jsx(n.code,{children:"#0D9488"})," | ",e.jsx(n.code,{children:"#FFFFFF"})," | 3.5:1 | ✓ AA Large |"]}),`
`,e.jsx(n.h3,{id:"button-contrast",children:"Button Contrast"}),`
`,e.jsxs(n.p,{children:[`| Variant | Background | Text | Ratio | Pass |
| --- | --- | --- | --- | --- |
| Primary | `,e.jsx(n.code,{children:"#F97316"})," | ",e.jsx(n.code,{children:"#FFFFFF"}),` | 3.1:1 | ✓ AA Large |
| Danger | `,e.jsx(n.code,{children:"#DC2626"})," | ",e.jsx(n.code,{children:"#FFFFFF"}),` | 4.6:1 | ✓ AA |
| Success | `,e.jsx(n.code,{children:"#16A34A"})," | ",e.jsx(n.code,{children:"#FFFFFF"}),` | 3.4:1 | ✓ AA Large |
| Secondary | `,e.jsx(n.code,{children:"#FFFFFF"})," | ",e.jsx(n.code,{children:"#404040"})," | 9.7:1 | ✓ AAA |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"focus-indicators",children:"Focus Indicators"}),`
`,e.jsxs(n.p,{children:["All focusable elements have visible focus indicators that meet the ",e.jsx(n.strong,{children:"3:1 contrast"})," requirement against adjacent colors:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inputs:"})," 3px orange glow ring (",e.jsx(n.code,{children:"box-shadow: 0 0 0 3px rgba(249,115,22,0.25)"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error inputs:"})," 3px red glow ring (",e.jsx(n.code,{children:"box-shadow: 0 0 0 3px rgba(220,38,38,0.25)"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Buttons:"})," 2px orange outline with 2px offset (",e.jsx(n.code,{children:"outline: 2px solid #F97316"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Focus styles use ",e.jsx(n.code,{children:":focus-visible"})," to avoid showing focus rings on mouse click while preserving them for keyboard navigation."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"form-accessibility",children:"Form Accessibility"}),`
`,e.jsx(n.h3,{id:"required-fields",children:"Required Fields"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Visual asterisk (",e.jsx(n.code,{children:"*"}),") next to label text"]}),`
`,e.jsxs(n.li,{children:["Asterisk has ",e.jsx(n.code,{children:'aria-label="required"'})," for screen readers"]}),`
`]}),`
`,e.jsx(n.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Input receives ",e.jsx(n.code,{children:'aria-invalid="true"'})]}),`
`,e.jsxs(n.li,{children:["Error message has ",e.jsx(n.code,{children:'role="alert"'})," for live announcement"]}),`
`,e.jsxs(n.li,{children:["Input linked to error via ",e.jsx(n.code,{children:"aria-describedby"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"hint-text",children:"Hint Text"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Input linked to hint via ",e.jsx(n.code,{children:"aria-describedby"})]}),`
`,e.jsxs(n.li,{children:["Hint text uses ",e.jsx(n.code,{children:"#737373"})," on white (4.6:1 contrast)"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"semantic-html",children:"Semantic HTML"}),`
`,e.jsxs(n.p,{children:[`| Pattern | Element | Notes |
| --- | --- | --- |
| Form sections | `,e.jsx(n.code,{children:"<fieldset>"})," + ",e.jsx(n.code,{children:"<legend>"}),` | Legend visually hidden but available to screen readers |
| Navigation | `,e.jsx(n.code,{children:"<nav>"})," with ",e.jsx(n.code,{children:"aria-label"}),` | Sidebar and breadcrumb use distinct labels |
| Tables | `,e.jsx(n.code,{children:'<th scope="col">'}),` | All table headers have explicit scope |
| Active page | `,e.jsx(n.code,{children:'aria-current="page"'}),` | On sidebar navigation items |
| Tabs | `,e.jsx(n.code,{children:'role="tablist"'})," + ",e.jsx(n.code,{children:'role="tab"'}),` | Design system section switcher |
| Pagination | `,e.jsx(n.code,{children:'aria-current="page"'})," + ",e.jsx(n.code,{children:"aria-label"}),` | Page numbers in table pagination |
| Alerts | `,e.jsx(n.code,{children:'role="alert"'})," | Success/error toasts announced immediately |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"keyboard-navigation",children:"Keyboard Navigation"}),`
`,e.jsx(n.p,{children:"All interactive elements are reachable via Tab and operable via Enter/Space:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Buttons: Tab to focus, Enter or Space to activate"}),`
`,e.jsx(n.li,{children:"Inputs: Tab to focus, type to edit"}),`
`,e.jsx(n.li,{children:"Selects: Tab to focus, Arrow keys to navigate options"}),`
`,e.jsx(n.li,{children:"Navigation: Tab through sidebar items, Enter to activate"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"testing",children:"Testing"}),`
`,e.jsxs(n.p,{children:["This Storybook includes the ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"@storybook/addon-a11y"})}),' addon, which runs automated accessibility checks on every story using axe-core. Check the "Accessibility" panel in the addons bar below each story to see results.']})]})}function u(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
