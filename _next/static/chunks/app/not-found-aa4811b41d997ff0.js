(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{8098:(e,t,r)=>{Promise.resolve().then(r.bind(r,693)),Promise.resolve().then(r.bind(r,1095)),Promise.resolve().then(r.bind(r,1101))},693:(e,t,r)=>{"use strict";r.r(t),r.d(t,{containerClasses:()=>j,default:()=>N,getContainerUtilityClass:()=>O});var n=r(2967),i=r(8560),s=r(9541),o=r(8711),a=r(2146),l=r(8944),u=r(6992),d=r(5359),p=r(8940),m=r(1525),c=r(8238),f=r(7970),h=r(3675);let v=["ownerState"],x=["variants"],Z=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function y(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let b=(0,f.Z)(),g=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function k({defaultTheme:e,theme:t,themeId:r}){return 0===Object.keys(t).length?e:t[r]||t}function C(e,t){let{ownerState:r}=t,s=(0,n.Z)(t,v),o="function"==typeof e?e((0,i.Z)({ownerState:r},s)):e;if(Array.isArray(o))return o.flatMap(e=>C(e,(0,i.Z)({ownerState:r},s)));if(o&&"object"==typeof o&&Array.isArray(o.variants)){let{variants:e=[]}=o,t=(0,n.Z)(o,x);return e.forEach(e=>{let n=!0;"function"==typeof e.props?n=e.props((0,i.Z)({ownerState:r},s,r)):Object.keys(e.props).forEach(t=>{(null==r?void 0:r[t])!==e.props[t]&&s[t]!==e.props[t]&&(n=!1)}),n&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,i.Z)({ownerState:r},s,r)):e.style))}),t}return o}let W=function(e={}){let{themeId:t,defaultTheme:r=b,rootShouldForwardProp:s=y,slotShouldForwardProp:o=y}=e,a=e=>(0,h.Z)((0,i.Z)({},e,{theme:k((0,i.Z)({},e,{defaultTheme:r,themeId:t}))}));return a.__mui_systemSx=!0,(e,l={})=>{var u;let d;(0,m.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:p,slot:f,skipVariantsResolver:h,skipSx:v,overridesResolver:x=(u=g(f))?(e,t)=>t[u]:null}=l,b=(0,n.Z)(l,Z),W=void 0!==h?h:f&&"Root"!==f&&"root"!==f||!1,R=v||!1,S=y;"Root"===f||"root"===f?S=s:f?S=o:"string"==typeof e&&e.charCodeAt(0)>96&&(S=void 0);let _=(0,m.default)(e,(0,i.Z)({shouldForwardProp:S,label:d},b)),w=e=>"function"==typeof e&&e.__emotion_real!==e||(0,c.P)(e)?n=>C(e,(0,i.Z)({},n,{theme:k({theme:n.theme,defaultTheme:r,themeId:t})})):e,M=(n,...s)=>{let o=w(n),l=s?s.map(w):[];p&&x&&l.push(e=>{let n=k((0,i.Z)({},e,{defaultTheme:r,themeId:t}));if(!n.components||!n.components[p]||!n.components[p].styleOverrides)return null;let s=n.components[p].styleOverrides,o={};return Object.entries(s).forEach(([t,r])=>{o[t]=C(r,(0,i.Z)({},e,{theme:n}))}),x(e,o)}),p&&!W&&l.push(e=>{var n;let s=k((0,i.Z)({},e,{defaultTheme:r,themeId:t}));return C({variants:null==s||null==(n=s.components)||null==(n=n[p])?void 0:n.variants},(0,i.Z)({},e,{theme:s}))}),R||l.push(a);let u=l.length-s.length;if(Array.isArray(n)&&u>0){let e=Array(u).fill("");(o=[...n,...e]).raw=[...n.raw,...e]}let d=_(o,...l);return e.muiName&&(d.muiName=e.muiName),d};return _.withConfig&&(M.withConfig=_.withConfig),M}}();var R=r(2694);let S=["className","component","disableGutters","fixed","maxWidth","classes"],_=(0,f.Z)(),w=W("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,u.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),M=e=>(function(e){let{props:t,name:r,defaultTheme:n,themeId:i}=e,s=(0,p.Z)(n);return i&&(s=s[i]||s),function(e){let{theme:t,name:r,props:n}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,d.Z)(t.components[r].defaultProps,n):n}({theme:s,name:r,props:t})})({props:e,name:"MuiContainer",defaultTheme:_}),A=(e,t)=>{let{classes:r,fixed:n,disableGutters:i,maxWidth:s}=e,o={root:["root",s&&`maxWidth${(0,u.Z)(String(s))}`,n&&"fixed",i&&"disableGutters"]};return(0,l.Z)(o,e=>(0,a.ZP)(t,e),r)};var P=r(4257),G=r(1522),L=r(4504);let N=function(e={}){let{createStyledComponent:t=w,useThemeProps:r=M,componentName:a="MuiContainer"}=e,l=t(({theme:e,ownerState:t})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:`${n}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,i.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}));return s.forwardRef(function(e,t){let s=r(e),{className:u,component:d="div",disableGutters:p=!1,fixed:m=!1,maxWidth:c="lg"}=s,f=(0,n.Z)(s,S),h=(0,i.Z)({},s,{component:d,disableGutters:p,fixed:m,maxWidth:c}),v=A(h,a);return(0,R.jsx)(l,(0,i.Z)({as:d,ownerState:h,className:(0,o.Z)(v.root,u),ref:t},f))})}({createStyledComponent:(0,G.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t["maxWidth".concat((0,P.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,L.i)({props:e,name:"MuiContainer"})});function O(e){return(0,a.ZP)("MuiContainer",e)}let j=(0,r(2047).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"])},1095:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n.Z,getTypographyUtilityClass:()=>i.f,typographyClasses:()=>i.Z});var n=r(8369),i=r(754)},8755:(e,t,r)=>{"use strict";var n=r(685);r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useServerInsertedHTML")&&r.d(t,{useServerInsertedHTML:function(){return n.useServerInsertedHTML}})},1101:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var n=r(2694),i=r(1299),s=r(9321),o=r(8755);let a=()=>{let e,t;let r=(0,i.c)(4),a=(0,o.useRouter)();r[0]!==a?(e=()=>{a.replace("/")},r[0]=a,r[1]=e):e=r[1];let l=e;return r[2]!==l?(t=(0,n.jsx)(s.Z,{color:"primary",variant:"contained",onClick:l,children:"Regresar"}),r[2]=l,r[3]=t):t=r[3],t}}},e=>{var t=t=>e(e.s=t);e.O(0,[767,17,742,324,709,388,744],()=>t(8098)),_N_E=e.O()}]);