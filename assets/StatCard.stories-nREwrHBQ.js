import{R as e}from"./index-ClcD9ViR.js";import{B as f}from"./Badge-DXKKiUp7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t=({label:u,value:p,change:a,icon:h,accent:g="#F97316"})=>e.createElement("div",{style:{background:"#fff",borderRadius:"var(--radius-xl)",padding:"20px",border:"1px solid #E5E5E5",display:"flex",flexDirection:"column",gap:"10px",flex:1,minWidth:0,transition:"box-shadow 0.15s ease"}},e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}},e.createElement("span",{style:{fontSize:"0.8125rem",color:"#737373",fontWeight:500,fontFamily:"var(--font-body)"}},u),e.createElement("div",{style:{width:34,height:34,borderRadius:"var(--radius-lg)",background:g,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff"}},h)),e.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:"8px"}},e.createElement("span",{style:{fontSize:"1.75rem",fontWeight:800,fontFamily:"var(--font-display)",color:"#171717",letterSpacing:"-0.03em",lineHeight:1}},p),a!=null&&e.createElement(f,{variant:a>0?"success":"danger",size:"sm"},a>0?"+":"",a,"%")));t.__docgenInfo={description:`StatCard — Dashboard metric display with icon accent and optional trend badge.

Icon container uses the accent color at full saturation with white icon (WCAG AA ≥ 3:1).
Trend badges use the bold Badge component for consistency.`,methods:[],displayName:"StatCard",props:{accent:{defaultValue:{value:"'#F97316'",computed:!1},required:!1}}};const R={title:"Components/StatCard",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Dashboard metric card with icon accent, large value display, and optional trend badge.

**Design decisions:**
- Icon container uses full-saturation accent color (not a tinted background) for visual weight — matching the bold badge pattern
- Value uses Plus Jakarta Sans at 800 weight for maximum impact
- Trend badges reuse the Badge component for consistency

**Framework mapping:**
- Shadcn/ui: \`<Card>\` with custom content layout
- PrimeVue: \`<Card>\` component
        `}}},argTypes:{label:{control:"text"},value:{control:"text"},change:{control:"number"},accent:{control:"color"}}},m=()=>React.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},React.createElement("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),React.createElement("circle",{cx:"9",cy:"7",r:"4"})),y=()=>React.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},React.createElement("circle",{cx:"12",cy:"12",r:"10"}),React.createElement("polyline",{points:"12 6 12 12 16 14"})),v=()=>React.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},React.createElement("line",{x1:"12",y1:"20",x2:"12",y2:"10"}),React.createElement("line",{x1:"18",y1:"20",x2:"18",y2:"4"}),React.createElement("line",{x1:"6",y1:"20",x2:"6",y2:"16"})),x=()=>React.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},React.createElement("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}),React.createElement("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"})),n={args:{label:"Currently Signed In",value:"26",change:12,accent:"#F97316",icon:React.createElement(m,null)}},r={name:"Dashboard Row",render:()=>React.createElement("div",{style:{display:"flex",gap:"14px",maxWidth:900}},React.createElement(t,{label:"Currently Signed In",value:"26",change:12,icon:React.createElement(m,null),accent:"#F97316"}),React.createElement(t,{label:"Hours This Week",value:"143",icon:React.createElement(y,null),accent:"#2563EB"}),React.createElement(t,{label:"Hours This Month",value:"853",change:8,icon:React.createElement(v,null),accent:"#16A34A"}),React.createElement(t,{label:"Pending Approval",value:"15",icon:React.createElement(x,null),accent:"#DC2626"})),parameters:{docs:{description:{story:"Four stat cards in a row, as they appear on the Volunteer Dashboard. Each uses a different accent color from the semantic palette."}}}};var c,o,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Currently Signed In',
    value: '26',
    change: 12,
    accent: '#F97316',
    icon: <UserIcon />
  }
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var s,i,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Dashboard Row',
  render: () => <div style={{
    display: 'flex',
    gap: '14px',
    maxWidth: 900
  }}>
      <StatCard label="Currently Signed In" value="26" change={12} icon={<UserIcon />} accent="#F97316" />
      <StatCard label="Hours This Week" value="143" icon={<ClockIcon />} accent="#2563EB" />
      <StatCard label="Hours This Month" value="853" change={8} icon={<ChartIcon />} accent="#16A34A" />
      <StatCard label="Pending Approval" value="15" icon={<ClipIcon />} accent="#DC2626" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Four stat cards in a row, as they appear on the Volunteer Dashboard. Each uses a different accent color from the semantic palette.'
      }
    }
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const w=["Default","DashboardRow"];export{r as DashboardRow,n as Default,w as __namedExportsOrder,R as default};
