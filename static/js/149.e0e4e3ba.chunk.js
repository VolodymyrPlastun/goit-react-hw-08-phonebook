"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[149],{7149:function(e,t,a){a.r(t),a.d(t,{default:function(){return ye}});var n=a(885),o=a(2791),r=a(6065),i=a(9434),s=a(826),c=function(e){return e.contacts.items},d=a(4554),l=a(8096),u=a(4925),p=a(3383),m=a(6151),v=a(184);function g(){var e=(0,o.useState)(""),t=(0,n.Z)(e,2),a=t[0],g=t[1],h=(0,o.useState)(""),b=(0,n.Z)(h,2),f=b[0],Z=b[1],y=(0,i.I0)(),x=(0,i.v9)(c),C=function(){g(""),Z("")};return(0,v.jsx)(d.Z,{sx:{p:2,display:"flex",justifyContent:"center"},children:(0,v.jsx)("div",{className:r.Z.container,children:(0,v.jsxs)("form",{className:r.Z.form,onSubmit:function(e){if(e.preventDefault(),x.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," is already in contacts"));y((0,s.uK)({name:a,number:f})),C()},children:[(0,v.jsxs)(l.Z,{sx:{m:1,width:"25ch"},variant:"outlined",children:[(0,v.jsx)(u.Z,{color:"secondary",htmlFor:"outlined-adornment-name",children:"Name"}),(0,v.jsx)(p.Z,{color:"secondary",id:"outlined-adornment-name",type:"text",value:a,onChange:function(e){g(e.target.value)},label:"Name"})]}),(0,v.jsxs)(l.Z,{sx:{m:1,width:"25ch"},variant:"outlined",children:[(0,v.jsx)(u.Z,{color:"secondary",htmlFor:"outlined-adornment-number",children:"Number"}),(0,v.jsx)(p.Z,{color:"secondary",id:"outlined-adornment-number",type:"number",value:f,onChange:function(e){Z(e.target.value)},label:"Number"})]}),(0,v.jsx)("div",{className:r.Z.btn,children:(0,v.jsx)(m.Z,{color:"secondary",type:"submit",variant:"outlined",children:"Add contact"})})]})})})}var h=a(3366),b=a(7462),f=a(8182),Z=a(4419),y=a(7630),x=a(1046);var C=o.createContext({}),S=a(1217),j=a(5878);function w(e){return(0,S.Z)("MuiList",e)}(0,j.Z)("MuiList",["root","padding","dense","subheader"]);var I=["children","className","component","dense","disablePadding","subheader"],R=(0,y.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,!a.disablePadding&&t.padding,a.dense&&t.dense,a.subheader&&t.subheader]}})((function(e){var t=e.ownerState;return(0,b.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})})),M=o.forwardRef((function(e,t){var a=(0,x.Z)({props:e,name:"MuiList"}),n=a.children,r=a.className,i=a.component,s=void 0===i?"ul":i,c=a.dense,d=void 0!==c&&c,l=a.disablePadding,u=void 0!==l&&l,p=a.subheader,m=(0,h.Z)(a,I),g=o.useMemo((function(){return{dense:d}}),[d]),y=(0,b.Z)({},a,{component:s,dense:d,disablePadding:u}),S=function(e){var t=e.classes,a={root:["root",!e.disablePadding&&"padding",e.dense&&"dense",e.subheader&&"subheader"]};return(0,Z.Z)(a,w,t)}(y);return(0,v.jsx)(C.Provider,{value:g,children:(0,v.jsxs)(R,(0,b.Z)({as:s,className:(0,f.Z)(S.root,r),ref:t,ownerState:y},m,{children:[p,n]}))})})),N=a(4942),L=a(627),F=a(2065),z=a(1707),P=a(9103),_=a(162),A=a(2071);function k(e){return(0,S.Z)("MuiListItem",e)}var B=(0,j.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var O=(0,j.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function G(e){return(0,S.Z)("MuiListItemSecondaryAction",e)}(0,j.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var T=["className"],W=(0,y.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,b.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),V=o.forwardRef((function(e,t){var a=(0,x.Z)({props:e,name:"MuiListItemSecondaryAction"}),n=a.className,r=(0,h.Z)(a,T),i=o.useContext(C),s=(0,b.Z)({},a,{disableGutters:i.disableGutters}),c=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,Z.Z)(n,G,a)}(s);return(0,v.jsx)(W,(0,b.Z)({className:(0,f.Z)(c.root,n),ownerState:s,ref:t},r))}));V.muiName="ListItemSecondaryAction";var q=V,H=["className"],D=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],E=(0,y.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,b.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&(0,b.Z)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&(0,N.Z)({},"& > .".concat(O.root),{paddingRight:48}),(t={},(0,N.Z)(t,"&.".concat(B.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,N.Z)(t,"&.".concat(B.selected),(0,N.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,F.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(B.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,F.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,N.Z)(t,"&.".concat(B.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},n.button&&(0,N.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(B.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,F.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,F.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})})),K=(0,y.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),Y=o.forwardRef((function(e,t){var a=(0,x.Z)({props:e,name:"MuiListItem"}),n=a.alignItems,r=void 0===n?"center":n,i=a.autoFocus,s=void 0!==i&&i,c=a.button,d=void 0!==c&&c,l=a.children,u=a.className,p=a.component,m=a.components,g=void 0===m?{}:m,y=a.componentsProps,S=void 0===y?{}:y,j=a.ContainerComponent,w=void 0===j?"li":j,I=a.ContainerProps,R=(I=void 0===I?{}:I).className,M=a.dense,N=void 0!==M&&M,F=a.disabled,O=void 0!==F&&F,G=a.disableGutters,T=void 0!==G&&G,W=a.disablePadding,V=void 0!==W&&W,Y=a.divider,J=void 0!==Y&&Y,Q=a.focusVisibleClassName,U=a.secondaryAction,X=a.selected,$=void 0!==X&&X,ee=(0,h.Z)(a.ContainerProps,H),te=(0,h.Z)(a,D),ae=o.useContext(C),ne={dense:N||ae.dense||!1,alignItems:r,disableGutters:T},oe=o.useRef(null);(0,_.Z)((function(){s&&oe.current&&oe.current.focus()}),[s]);var re=o.Children.toArray(l),ie=re.length&&(0,P.Z)(re[re.length-1],["ListItemSecondaryAction"]),se=(0,b.Z)({},a,{alignItems:r,autoFocus:s,button:d,dense:ne.dense,disabled:O,disableGutters:T,disablePadding:V,divider:J,hasSecondaryAction:ie,selected:$}),ce=function(e){var t=e.alignItems,a=e.button,n=e.classes,o=e.dense,r=e.disabled,i={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",r&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,Z.Z)(i,k,n)}(se),de=(0,A.Z)(oe,t),le=g.Root||E,ue=S.root||{},pe=(0,b.Z)({className:(0,f.Z)(ce.root,ue.className,u),disabled:O},te),me=p||"li";return d&&(pe.component=p||"div",pe.focusVisibleClassName=(0,f.Z)(B.focusVisible,Q),me=z.Z),ie?(me=pe.component||p?me:"div","li"===w&&("li"===me?me="div":"li"===pe.component&&(pe.component="div")),(0,v.jsx)(C.Provider,{value:ne,children:(0,v.jsxs)(K,(0,b.Z)({as:w,className:(0,f.Z)(ce.container,R),ref:de,ownerState:se},ee,{children:[(0,v.jsx)(le,(0,b.Z)({},ue,!(0,L.Z)(le)&&{as:me,ownerState:(0,b.Z)({},se,ue.ownerState)},pe,{children:re})),re.pop()]}))})):(0,v.jsx)(C.Provider,{value:ne,children:(0,v.jsxs)(le,(0,b.Z)({},ue,{as:me,ref:de,ownerState:se},!(0,L.Z)(le)&&{ownerState:(0,b.Z)({},se,ue.ownerState)},pe,{children:[re,U&&(0,v.jsx)(q,{children:U})]}))})})),J=a(4036);function Q(e){return(0,S.Z)("MuiIconButton",e)}var U=(0,j.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),X=["edge","children","className","color","disabled","disableFocusRipple","size"],$=(0,y.ZP)(z.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,"default"!==a.color&&t["color".concat((0,J.Z)(a.color))],a.edge&&t["edge".concat((0,J.Z)(a.edge))],t["size".concat((0,J.Z)(a.size))]]}})((function(e){var t=e.theme,a=e.ownerState;return(0,b.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.active," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,F.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===a.edge&&{marginLeft:"small"===a.size?-3:-12},"end"===a.edge&&{marginRight:"small"===a.size?-3:-12})}),(function(e){var t=e.theme,a=e.ownerState;return(0,b.Z)({},"inherit"===a.color&&{color:"inherit"},"inherit"!==a.color&&"default"!==a.color&&(0,b.Z)({color:(t.vars||t).palette[a.color].main},!a.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,F.Fq)(t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===a.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===a.size&&{padding:12,fontSize:t.typography.pxToRem(28)},(0,N.Z)({},"&.".concat(U.disabled),{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}))})),ee=o.forwardRef((function(e,t){var a=(0,x.Z)({props:e,name:"MuiIconButton"}),n=a.edge,o=void 0!==n&&n,r=a.children,i=a.className,s=a.color,c=void 0===s?"default":s,d=a.disabled,l=void 0!==d&&d,u=a.disableFocusRipple,p=void 0!==u&&u,m=a.size,g=void 0===m?"medium":m,y=(0,h.Z)(a,X),C=(0,b.Z)({},a,{edge:o,color:c,disabled:l,disableFocusRipple:p,size:g}),S=function(e){var t=e.classes,a=e.disabled,n=e.color,o=e.edge,r=e.size,i={root:["root",a&&"disabled","default"!==n&&"color".concat((0,J.Z)(n)),o&&"edge".concat((0,J.Z)(o)),"size".concat((0,J.Z)(r))]};return(0,Z.Z)(i,Q,t)}(C);return(0,v.jsx)($,(0,b.Z)({className:(0,f.Z)(S.root,i),centerRipple:!0,focusRipple:!p,disabled:l,ref:t,ownerState:C},y,{children:r}))}));function te(e){return(0,S.Z)("MuiListItemAvatar",e)}(0,j.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var ae=["className"],ne=(0,y.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,b.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),oe=o.forwardRef((function(e,t){var a=(0,x.Z)({props:e,name:"MuiListItemAvatar"}),n=a.className,r=(0,h.Z)(a,ae),i=o.useContext(C),s=(0,b.Z)({},a,{alignItems:i.alignItems}),c=function(e){var t=e.alignItems,a=e.classes,n={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,Z.Z)(n,te,a)}(s);return(0,v.jsx)(ne,(0,b.Z)({className:(0,f.Z)(c.root,n),ownerState:s,ref:t},r))})),re=a(3044),ie=a(8519);function se(e){return(0,S.Z)("MuiTypography",e)}(0,j.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var ce=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],de=(0,y.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t["align".concat((0,J.Z)(a.align))],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((function(e){var t=e.theme,a=e.ownerState;return(0,b.Z)({margin:0},a.variant&&t.typography[a.variant],"inherit"!==a.align&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})})),le={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ue={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},pe=o.forwardRef((function(e,t){var a=(0,x.Z)({props:e,name:"MuiTypography"}),n=function(e){return ue[e]||e}(a.color),o=(0,ie.Z)((0,b.Z)({},a,{color:n})),r=o.align,i=void 0===r?"inherit":r,s=o.className,c=o.component,d=o.gutterBottom,l=void 0!==d&&d,u=o.noWrap,p=void 0!==u&&u,m=o.paragraph,g=void 0!==m&&m,y=o.variant,C=void 0===y?"body1":y,S=o.variantMapping,j=void 0===S?le:S,w=(0,h.Z)(o,ce),I=(0,b.Z)({},o,{align:i,color:n,className:s,component:c,gutterBottom:l,noWrap:p,paragraph:g,variant:C,variantMapping:j}),R=c||(g?"p":j[C]||le[C])||"span",M=function(e){var t=e.align,a=e.gutterBottom,n=e.noWrap,o=e.paragraph,r=e.variant,i=e.classes,s={root:["root",r,"inherit"!==e.align&&"align".concat((0,J.Z)(t)),a&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,Z.Z)(s,se,i)}(I);return(0,v.jsx)(de,(0,b.Z)({as:R,ref:t,ownerState:I,className:(0,f.Z)(M.root,s)},w))})),me=a(9201),ve=(0,me.Z)((0,v.jsx)("path",{d:"M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zm13-8h6v2h-6z"}),"PersonRemoveOutlined"),ge=(0,me.Z)((0,v.jsx)("path",{d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zm0 16H2V5h20v14zm-2.99-1.01L21 16l-1.51-2h-1.64c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2h1.64L21 8l-1.99-1.99c-1.31.98-2.28 2.37-2.73 3.99-.18.64-.28 1.31-.28 2s.1 1.36.28 2c.45 1.61 1.42 3.01 2.73 3.99zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.41zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z"}),"ContactPhoneOutlined");function he(){var e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.contacts.items})),a=(0,i.v9)((function(e){return e.contacts.filter})).toLocaleLowerCase(),n=t.filter((function(e){return e.name.toLocaleLowerCase().includes(a)}));return(0,v.jsx)(d.Z,{sx:{p:2,display:"flex",justifyContent:"center"},children:0!==n.length&&(0,v.jsx)(M,{sx:{width:"50ch"},children:n.map((function(t){var a=t.id,n=t.name,o=t.number;return(0,v.jsxs)(Y,{secondaryAction:(0,v.jsx)(ee,{sx:{bgcolor:"tomato",color:"secondary"},edge:"end","aria-label":"delete",children:(0,v.jsx)(ve,{onClick:function(){return e((0,s.zY)(a))}})}),children:[(0,v.jsx)(oe,{children:(0,v.jsx)(re.Z,{sx:{bgcolor:"tomato"},children:(0,v.jsx)(ge,{})})}),(0,v.jsxs)(pe,{sx:{color:"darkviolet"},children:[n,": ",o]})]},a)}))})})}var be="Filter_title__fT93c",fe=a(1850);function Ze(){var e=(0,i.v9)((function(e){return e.contacts.filter})),t=(0,i.I0)();return(0,v.jsxs)(d.Z,{sx:{p:2,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[(0,v.jsx)("h1",{className:be,children:"Filter your contacts"}),(0,v.jsxs)(l.Z,{sx:{m:1,width:"40ch"},variant:"outlined",children:[(0,v.jsx)(u.Z,{color:"secondary",htmlFor:"outlined-adornment-name",children:"Find contacts"}),(0,v.jsx)(p.Z,{color:"secondary",id:"outlined-adornment-name",type:"text",value:e,onChange:function(e){t((0,fe.g)(e.currentTarget.value))}})]})]})}var ye=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{}),(0,v.jsx)(Ze,{}),(0,v.jsx)(he,{})]})}},6065:function(e,t){t.Z={container:"ContactForm_container__be1Wd",form:"ContactForm_form__j25rM",label:"ContactForm_label__BH2B-",input:"ContactForm_input__27FK9",btn:"ContactForm_btn__HaL6u",title:"ContactForm_title__1fcWE"}}}]);
//# sourceMappingURL=149.e0e4e3ba.chunk.js.map