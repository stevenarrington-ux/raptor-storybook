import{R as n}from"./index-ClcD9ViR.js";const o={default:{bg:"#404040",color:"#fff"},primary:{bg:"#F97316",color:"#fff"},success:{bg:"#16A34A",color:"#fff"},danger:{bg:"#DC2626",color:"#fff"},warning:{bg:"#D97706",color:"#fff"},info:{bg:"#2563EB",color:"#fff"},navy:{bg:"#312E81",color:"#fff"},magenta:{bg:"#C026D3",color:"#fff"},teal:{bg:"#0D9488",color:"#fff"}},s=({children:t,variant:r="default",size:e="sm"})=>{const a=o[r]||o.default;return n.createElement("span",{role:"status",style:{background:a.bg,color:a.color,display:"inline-flex",alignItems:"center",gap:"5px",padding:e==="sm"?"3px 10px":"5px 14px",borderRadius:"9999px",fontSize:e==="sm"?"0.75rem":"0.8125rem",fontWeight:600,fontFamily:"var(--font-body)",lineHeight:1.5,whiteSpace:"nowrap",letterSpacing:"0.01em"}},t)};s.__docgenInfo={description:`Badge — Bold status indicator following SmartPass design patterns.

Uses fully saturated backgrounds with white text.
All color combos meet WCAG AA for bold text at these sizes (≥ 3:1 contrast).

@param {Object} props
@param {'default'|'primary'|'success'|'danger'|'warning'|'info'|'navy'|'magenta'|'teal'} props.variant
@param {'sm'|'md'} props.size
@param {React.ReactNode} props.children`,methods:[],displayName:"Badge",props:{variant:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};export{s as B};
