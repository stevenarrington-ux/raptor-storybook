import{B as e}from"./Badge-DXKKiUp7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const w={title:"Components/Badge",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
Bold status badges following SmartPass design patterns — fully saturated backgrounds with white text.

**WCAG AA Compliance:** All variant/text combos meet ≥ 3:1 contrast ratio for bold text at 12-13px / 600 weight, which qualifies as large text per WCAG 2.1.

**Usage:** Status indicators for volunteer approval states, visit function tags, location labels, and duration displays.

**Framework mapping:**
- Shadcn/ui: \`<Badge variant="..." />\`
- PrimeVue: \`<Tag severity="..." />\`
        `}}},argTypes:{variant:{control:"select",options:["default","primary","success","danger","warning","info","navy","magenta","teal"],description:"Visual style variant"},size:{control:"select",options:["sm","md"],description:"Badge size"},children:{control:"text",description:"Badge content"}}},a={args:{variant:"primary",size:"sm",children:"Pending Review"}},t={name:"All Variants",render:()=>React.createElement("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap",alignItems:"center"}},React.createElement(e,{variant:"success"},"✓ Approved"),React.createElement(e,{variant:"primary"},"⏳ Pending"),React.createElement(e,{variant:"danger"},"✕ Denied"),React.createElement(e,{variant:"warning"},"⚠ Expiring"),React.createElement(e,{variant:"info"},"🛡 Background Check"),React.createElement(e,{variant:"navy"},"Main Office"),React.createElement(e,{variant:"magenta"},"Nurse"),React.createElement(e,{variant:"teal"},"Library"),React.createElement(e,{variant:"default"},"Default")),parameters:{docs:{description:{story:"All nine badge variants. Semantic variants (success, danger, warning, info) map to volunteer workflow states. Extended variants (navy, magenta, teal) are used for location/function tags in tables."}}}},n={name:"Sizes",render:()=>React.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},React.createElement(e,{variant:"success",size:"sm"},"Small (sm)"),React.createElement(e,{variant:"success",size:"md"},"Medium (md)"))},r={name:"Volunteer Workflow States",render:()=>React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},React.createElement("span",{style:{width:140,fontSize:"0.8125rem",color:"#525252",fontFamily:"var(--font-body)"}},"New application:"),React.createElement(e,{variant:"primary"},"⏳ Pending")),React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},React.createElement("span",{style:{width:140,fontSize:"0.8125rem",color:"#525252",fontFamily:"var(--font-body)"}},"Check running:"),React.createElement(e,{variant:"info"},"🛡 Background Check")),React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},React.createElement("span",{style:{width:140,fontSize:"0.8125rem",color:"#525252",fontFamily:"var(--font-body)"}},"Cleared:"),React.createElement(e,{variant:"success"},"✓ Approved")),React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},React.createElement("span",{style:{width:140,fontSize:"0.8125rem",color:"#525252",fontFamily:"var(--font-body)"}},"Issue found:"),React.createElement(e,{variant:"danger"},"✕ Denied")),React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},React.createElement("span",{style:{width:140,fontSize:"0.8125rem",color:"#525252",fontFamily:"var(--font-body)"}},"Renewal due:"),React.createElement(e,{variant:"warning"},"⚠ Expiring"))),parameters:{docs:{description:{story:"Badge variants mapped to the VolunteerSafe approval workflow. Each state has a distinct, high-contrast color to ensure quick visual scanning in tables and approval queues."}}}};var i,s,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Pending Review'
  }
}`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge variant="success">✓ Approved</Badge>
      <Badge variant="primary">⏳ Pending</Badge>
      <Badge variant="danger">✕ Denied</Badge>
      <Badge variant="warning">⚠ Expiring</Badge>
      <Badge variant="info">🛡 Background Check</Badge>
      <Badge variant="navy">Main Office</Badge>
      <Badge variant="magenta">Nurse</Badge>
      <Badge variant="teal">Library</Badge>
      <Badge variant="default">Default</Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All nine badge variants. Semantic variants (success, danger, warning, info) map to volunteer workflow states. Extended variants (navy, magenta, teal) are used for location/function tags in tables.'
      }
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Badge variant="success" size="sm">Small (sm)</Badge>
      <Badge variant="success" size="md">Medium (md)</Badge>
    </div>
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,f,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Volunteer Workflow States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <span style={{
        width: 140,
        fontSize: '0.8125rem',
        color: '#525252',
        fontFamily: 'var(--font-body)'
      }}>New application:</span>
        <Badge variant="primary">⏳ Pending</Badge>
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <span style={{
        width: 140,
        fontSize: '0.8125rem',
        color: '#525252',
        fontFamily: 'var(--font-body)'
      }}>Check running:</span>
        <Badge variant="info">🛡 Background Check</Badge>
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <span style={{
        width: 140,
        fontSize: '0.8125rem',
        color: '#525252',
        fontFamily: 'var(--font-body)'
      }}>Cleared:</span>
        <Badge variant="success">✓ Approved</Badge>
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <span style={{
        width: 140,
        fontSize: '0.8125rem',
        color: '#525252',
        fontFamily: 'var(--font-body)'
      }}>Issue found:</span>
        <Badge variant="danger">✕ Denied</Badge>
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <span style={{
        width: 140,
        fontSize: '0.8125rem',
        color: '#525252',
        fontFamily: 'var(--font-body)'
      }}>Renewal due:</span>
        <Badge variant="warning">⚠ Expiring</Badge>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Badge variants mapped to the VolunteerSafe approval workflow. Each state has a distinct, high-contrast color to ensure quick visual scanning in tables and approval queues.'
      }
    }
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const E=["Default","AllVariants","Sizes","VolunteerWorkflow"];export{t as AllVariants,a as Default,n as Sizes,r as VolunteerWorkflow,E as __namedExportsOrder,w as default};
