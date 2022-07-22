"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[562],{8562:function(e,n,o){o.r(n),o.d(n,{default:function(){return u}});var r=o(4554),t=o(6151),i=o(533),a=o(8248),c=o(4289),s=o(9434),l=o(184);function u(){var e=(0,s.v9)(c.v9),n=(0,s.v9)(c.vW);return(0,l.jsx)(r.Z,{sx:{p:2,display:"flex",justifyContent:"center"},children:(0,l.jsxs)("div",{className:a.Z.container,children:[(0,l.jsx)("h1",{className:a.Z.title,children:"Your personal App for saving contacts"}),(0,l.jsx)("div",{children:e?(0,l.jsxs)("div",{children:[" ",(0,l.jsxs)("h2",{className:a.Z.description,children:["Hello, ",n]}),(0,l.jsx)(i.Z,{className:a.Z.link,href:"contacts",sx:{marginBottom:"20px",display:"flex",justifyContent:"center"},children:"You can add your contacts here"})]}):(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:a.Z.description,children:"Enter account or register"}),(0,l.jsxs)("div",{className:a.Z.buttonBox,children:[(0,l.jsx)(t.Z,{sx:{color:"white",bgcolor:"tomato",marginRight:"10px"},color:"warning",type:"submit",variant:"contained",href:"/goit-react-hw-08-phonebook/login",children:"Sign in"}),(0,l.jsx)(t.Z,{sx:{color:"white",bgcolor:"tomato"},color:"warning",type:"submit",variant:"contained",href:"/goit-react-hw-08-phonebook/register",children:"Sign up"})]})]})})]})})}},4554:function(e,n,o){o.d(n,{Z:function(){return h}});var r=o(7462),t=o(3366),i=o(2791),a=o(8182),c=o(594),s=o(104),l=o(8519),u=o(886),d=o(184),p=["className","component"];var m=o(5902),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultTheme,o=e.defaultClassName,m=void 0===o?"MuiBox-root":o,f=e.generateClassName,h=e.styleFunctionSx,v=void 0===h?s.Z:h,Z=(0,c.ZP)("div")(v),x=i.forwardRef((function(e,o){var i=(0,u.Z)(n),c=(0,l.Z)(e),s=c.className,h=c.component,v=void 0===h?"div":h,x=(0,t.Z)(c,p);return(0,d.jsx)(Z,(0,r.Z)({as:v,ref:o,className:(0,a.Z)(s,f?f(m):m),theme:i},x))}));return x}({defaultTheme:(0,o(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:m.Z.generate}),h=f},533:function(e,n,o){o.d(n,{Z:function(){return C}});var r=o(2982),t=o(885),i=o(4942),a=o(3366),c=o(7462),s=o(2791),l=o(8182),u=o(4419),d=o(4036),p=o(7630),m=o(1046),f=o(3031),h=o(2071),v=o(890),Z=o(1217);function x(e){return(0,Z.Z)("MuiLink",e)}var g=(0,o(5878).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),b=o(8529),_=o(2065),y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=function(e){var n=e.theme,o=e.ownerState,r=function(e){return y[e]||e}(o.color),t=(0,b.D)(n,"palette.".concat(r),!1)||o.color,i=(0,b.D)(n,"palette.".concat(r,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,_.Fq)(t,.4)},k=o(184),N=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],j=(0,p.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(o.underline))],"button"===o.component&&n.button]}})((function(e){var n=e.theme,o=e.ownerState;return(0,c.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:w({theme:n,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),C=s.forwardRef((function(e,n){var o=(0,m.Z)({props:e,name:"MuiLink"}),i=o.className,p=o.color,v=void 0===p?"primary":p,Z=o.component,g=void 0===Z?"a":Z,b=o.onBlur,_=o.onFocus,w=o.TypographyClasses,C=o.underline,S=void 0===C?"always":C,B=o.variant,P=void 0===B?"inherit":B,D=o.sx,A=(0,a.Z)(o,N),F=(0,f.Z)(),M=F.isFocusVisibleRef,R=F.onBlur,V=F.onFocus,T=F.ref,z=s.useState(!1),L=(0,t.Z)(z,2),H=L[0],O=L[1],W=(0,h.Z)(n,T),E=(0,c.Z)({},o,{color:v,component:g,focusVisible:H,underline:S,variant:P}),Y=function(e){var n=e.classes,o=e.component,r=e.focusVisible,t=e.underline,i={root:["root","underline".concat((0,d.Z)(t)),"button"===o&&"button",r&&"focusVisible"]};return(0,u.Z)(i,x,n)}(E);return(0,k.jsx)(j,(0,c.Z)({color:v,className:(0,l.Z)(Y.root,i),classes:w,component:g,onBlur:function(e){R(e),!1===M.current&&O(!1),b&&b(e)},onFocus:function(e){V(e),!0===M.current&&O(!0),_&&_(e)},ref:W,ownerState:E,variant:P,sx:[].concat((0,r.Z)(Object.keys(y).includes(v)?[]:[{color:v}]),(0,r.Z)(Array.isArray(D)?D:[D]))},A))}))},8248:function(e,n){n.Z={container:"Pages_container__Ocl30",title:"Pages_title__OXte9",form:"Pages_form__NgtEx",description:"Pages_description__I15C7",buttonBox:"Pages_buttonBox__vAzd4",link:"Pages_link__5-pz9",btn:"Pages_btn__lZsDd"}}}]);
//# sourceMappingURL=562.6991114d.chunk.js.map