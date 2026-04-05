import{r as E,R as e}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const v=({label:l,required:h=!1,value:F,onChange:x,options:S=[],disabled:o=!1})=>{const[s,i]=E.useState(!1);return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"5px"}},l&&e.createElement("label",{style:{fontSize:"0.8125rem",fontWeight:600,color:"#404040",fontFamily:"var(--font-body)",display:"flex",alignItems:"center",gap:"4px"}},l,h&&e.createElement("span",{style:{color:"#DC2626",fontWeight:700},"aria-label":"required"},"*")),e.createElement("div",{style:{position:"relative"}},e.createElement("select",{value:F,onChange:x,disabled:o,onFocus:()=>i(!0),onBlur:()=>i(!1),style:{width:"100%",padding:"10px 36px 10px 14px",borderRadius:"var(--radius-md)",border:`1.5px solid ${s?"#F97316":"#D4D4D4"}`,fontSize:"0.9375rem",fontFamily:"var(--font-body)",color:o?"#A3A3A3":"#171717",background:o?"#FAFAFA":"#fff",appearance:"none",cursor:o?"not-allowed":"pointer",transition:"all 0.15s ease",outline:"none",boxShadow:s?"0 0 0 3px rgba(249,115,22,0.25)":"none"}},S.map(n=>e.createElement("option",{key:n,value:n},n))),e.createElement("div",{style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",pointerEvents:"none",color:"#737373"}},e.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("polyline",{points:"6 9 12 15 18 9"})))))};v.__docgenInfo={description:"FormSelect — Dropdown select with label and accessible states.",methods:[],displayName:"FormSelect",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const q={title:"Components/FormSelect",component:v,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nDropdown select with custom chevron icon, focus ring, and disabled state.\n\n**Framework mapping:**\n- Shadcn/ui: `<Select>` + `<SelectTrigger>`\n- PrimeVue: `<Dropdown>`\n        "}}},argTypes:{label:{control:"text"},required:{control:"boolean"},disabled:{control:"boolean"},options:{control:"object"}}},r={args:{label:"Building",options:["All Buildings","Lincoln Elementary","Washington Middle","Jefferson High"],value:"Lincoln Elementary"}},a={args:{label:"Affiliation",required:!0,options:["Parent","Guardian","Community Member","Staff"],value:"Parent"}},t={args:{label:"Gender",disabled:!0,options:["Female","Male","Non-binary","Prefer not to say"],value:"Female"}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Building',
    options: ['All Buildings', 'Lincoln Elementary', 'Washington Middle', 'Jefferson High'],
    value: 'Lincoln Elementary'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,m,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Affiliation',
    required: true,
    options: ['Parent', 'Guardian', 'Community Member', 'Staff'],
    value: 'Parent'
  }
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,b,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Gender',
    disabled: true,
    options: ['Female', 'Male', 'Non-binary', 'Prefer not to say'],
    value: 'Female'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const A=["Default","Required","Disabled"];export{r as Default,t as Disabled,a as Required,A as __namedExportsOrder,q as default};
