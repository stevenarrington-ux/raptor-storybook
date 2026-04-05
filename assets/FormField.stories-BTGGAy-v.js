import{r as $,R as l}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const e=({label:a,required:f=!1,value:t,onChange:v,error:r,hint:i,type:_="text",placeholder:z,disabled:o=!1,readOnly:y=!1})=>{const[g,h]=$.useState(!1);return l.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"5px"}},a&&l.createElement("label",{style:{fontSize:"0.8125rem",fontWeight:600,color:"#404040",fontFamily:"var(--font-body)",display:"flex",alignItems:"center",gap:"4px"}},a,f&&l.createElement("span",{style:{color:"#DC2626",fontWeight:700},"aria-label":"required"},"*")),l.createElement("input",{type:_,value:t,onChange:v,placeholder:z,disabled:o,readOnly:y,onFocus:()=>h(!0),onBlur:()=>h(!1),"aria-invalid":!!r,"aria-describedby":r?`${a}-error`:i?`${a}-hint`:void 0,style:{width:"100%",padding:"10px 14px",borderRadius:"var(--radius-md)",border:`1.5px solid ${r?"#DC2626":g?"#F97316":"#D4D4D4"}`,fontSize:"0.9375rem",fontFamily:"var(--font-body)",color:o?"#A3A3A3":"#171717",background:o?"#FAFAFA":y?"#F5F5F5":"#fff",transition:"all 0.15s ease",boxShadow:g?r?"0 0 0 3px rgba(220,38,38,0.25)":"0 0 0 3px rgba(249,115,22,0.25)":"none",outline:"none",cursor:o?"not-allowed":y?"default":"text"}}),r&&l.createElement("span",{id:`${a}-error`,role:"alert",style:{fontSize:"0.75rem",color:"#DC2626",fontWeight:500,display:"flex",alignItems:"center",gap:"4px",fontFamily:"var(--font-body)"}},"⚠ ",r),i&&!r&&l.createElement("span",{id:`${a}-hint`,style:{fontSize:"0.75rem",color:"#737373",fontFamily:"var(--font-body)"}},i))};e.__docgenInfo={description:`FormField — Text input with label, validation, and accessible states.

States: default, focused (orange ring), error (red ring + message),
disabled (gray bg, not-allowed cursor), readOnly (light gray bg).

WCAG AA: Focus ring at 3px with 25% opacity orange provides ≥ 3:1 contrast.
Error messages use danger-500 (#DC2626) on white — 5.6:1 contrast ratio.
Labels at 600 weight ensure readability at 13px.`,methods:[],displayName:"FormField",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'text'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1}}};const B={title:"Components/FormField",component:e,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},argTypes:{label:{control:"text"},required:{control:"boolean"},value:{control:"text"},error:{control:"text"},hint:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"}}},d={args:{label:"Legal First Name",value:"Patricia",required:!0}},s={args:{label:"Email",value:"invalid-email",required:!0,error:"Enter a valid email address",type:"email"}},n={args:{label:"Phone Number",value:"",placeholder:"(555) 555-5555",hint:"Include area code"}},c={args:{label:"Record ID",value:"VOL-2026-0847",disabled:!0}},m={args:{label:"Last Name",value:"Kelley",readOnly:!0}},u={name:"All States",render:()=>React.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",maxWidth:800}},React.createElement("div",{style:{flex:1,minWidth:200}},React.createElement(e,{label:"Default",value:"Patricia",onChange:()=>{}})),React.createElement("div",{style:{flex:1,minWidth:200}},React.createElement(e,{label:"Required",required:!0,value:"",placeholder:"Enter name",onChange:()=>{}})),React.createElement("div",{style:{flex:1,minWidth:200}},React.createElement(e,{label:"Error",required:!0,value:"",error:"This field is required",onChange:()=>{}})),React.createElement("div",{style:{flex:1,minWidth:200}},React.createElement(e,{label:"Hint",value:"",placeholder:"(555) 555-5555",hint:"Include area code",onChange:()=>{}})),React.createElement("div",{style:{flex:1,minWidth:200}},React.createElement(e,{label:"Read Only",value:"Kelley",readOnly:!0})),React.createElement("div",{style:{flex:1,minWidth:200}},React.createElement(e,{label:"Disabled",value:"VOL-2026-0847",disabled:!0}))),parameters:{docs:{description:{story:"All six input states side by side. Click into the Default or Required fields to see the orange focus ring. The Error field shows a red focus ring when clicked."}}}},p={name:"Form Layout — Volunteer Record",render:()=>{const[a,f]=$.useState({firstName:"Patricia",middleName:"",lastName:"Kelley",dob:"11/14/1960",phone:"(555) 867-5309",email:"p.kelley@email.com"}),t=v=>r=>f(i=>({...i,[v]:r.target.value}));return React.createElement("div",{style:{maxWidth:700,display:"flex",flexDirection:"column",gap:"16px"}},React.createElement("div",{style:{display:"flex",gap:"16px"}},React.createElement("div",{style:{flex:1}},React.createElement(e,{label:"Legal First Name",required:!0,value:a.firstName,onChange:t("firstName")})),React.createElement("div",{style:{flex:1}},React.createElement(e,{label:"Middle Name",value:a.middleName,onChange:t("middleName")})),React.createElement("div",{style:{flex:1}},React.createElement(e,{label:"Legal Last Name",required:!0,value:a.lastName,onChange:t("lastName")}))),React.createElement("div",{style:{display:"flex",gap:"16px"}},React.createElement("div",{style:{flex:1}},React.createElement(e,{label:"Date of Birth",required:!0,value:a.dob,onChange:t("dob")})),React.createElement("div",{style:{flex:1}},React.createElement(e,{label:"Phone",required:!0,value:a.phone,onChange:t("phone")})),React.createElement("div",{style:{flex:1}},React.createElement(e,{label:"Email",required:!0,type:"email",value:a.email,onChange:t("email")}))))},parameters:{layout:"padded",docs:{description:{story:"Realistic form layout matching the Volunteer record edit view. All fields are interactive — click to see focus rings."}}}};var b,x,F;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Legal First Name',
    value: 'Patricia',
    required: true
  }
}`,...(F=(x=d.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var E,R,q;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    value: 'invalid-email',
    required: true,
    error: 'Enter a valid email address',
    type: 'email'
  }
}`,...(q=(R=s.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var N,C,W;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Phone Number',
    value: '',
    placeholder: '(555) 555-5555',
    hint: 'Include area code'
  }
}`,...(W=(C=n.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var D,w,L;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Record ID',
    value: 'VOL-2026-0847',
    disabled: true
  }
}`,...(L=(w=c.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var S,A,k;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Last Name',
    value: 'Kelley',
    readOnly: true
  }
}`,...(k=(A=m.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var O,V,I;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    maxWidth: 800
  }}>
      <div style={{
      flex: 1,
      minWidth: 200
    }}>
        <FormField label="Default" value="Patricia" onChange={() => {}} />
      </div>
      <div style={{
      flex: 1,
      minWidth: 200
    }}>
        <FormField label="Required" required value="" placeholder="Enter name" onChange={() => {}} />
      </div>
      <div style={{
      flex: 1,
      minWidth: 200
    }}>
        <FormField label="Error" required value="" error="This field is required" onChange={() => {}} />
      </div>
      <div style={{
      flex: 1,
      minWidth: 200
    }}>
        <FormField label="Hint" value="" placeholder="(555) 555-5555" hint="Include area code" onChange={() => {}} />
      </div>
      <div style={{
      flex: 1,
      minWidth: 200
    }}>
        <FormField label="Read Only" value="Kelley" readOnly />
      </div>
      <div style={{
      flex: 1,
      minWidth: 200
    }}>
        <FormField label="Disabled" value="VOL-2026-0847" disabled />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All six input states side by side. Click into the Default or Required fields to see the orange focus ring. The Error field shows a red focus ring when clicked.'
      }
    }
  }
}`,...(I=(V=u.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var P,T,K;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Form Layout — Volunteer Record',
  render: () => {
    const [form, setForm] = useState({
      firstName: 'Patricia',
      middleName: '',
      lastName: 'Kelley',
      dob: '11/14/1960',
      phone: '(555) 867-5309',
      email: 'p.kelley@email.com'
    });
    const upd = k => e => setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    return <div style={{
      maxWidth: 700,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div style={{
        display: 'flex',
        gap: '16px'
      }}>
          <div style={{
          flex: 1
        }}><FormField label="Legal First Name" required value={form.firstName} onChange={upd('firstName')} /></div>
          <div style={{
          flex: 1
        }}><FormField label="Middle Name" value={form.middleName} onChange={upd('middleName')} /></div>
          <div style={{
          flex: 1
        }}><FormField label="Legal Last Name" required value={form.lastName} onChange={upd('lastName')} /></div>
        </div>
        <div style={{
        display: 'flex',
        gap: '16px'
      }}>
          <div style={{
          flex: 1
        }}><FormField label="Date of Birth" required value={form.dob} onChange={upd('dob')} /></div>
          <div style={{
          flex: 1
        }}><FormField label="Phone" required value={form.phone} onChange={upd('phone')} /></div>
          <div style={{
          flex: 1
        }}><FormField label="Email" required type="email" value={form.email} onChange={upd('email')} /></div>
        </div>
      </div>;
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Realistic form layout matching the Volunteer record edit view. All fields are interactive — click to see focus rings.'
      }
    }
  }
}`,...(K=(T=p.parameters)==null?void 0:T.docs)==null?void 0:K.source}}};const G=["Default","WithError","WithHint","Disabled","ReadOnly","AllStates","FormLayout"];export{u as AllStates,d as Default,c as Disabled,p as FormLayout,m as ReadOnly,s as WithError,n as WithHint,G as __namedExportsOrder,B as default};
