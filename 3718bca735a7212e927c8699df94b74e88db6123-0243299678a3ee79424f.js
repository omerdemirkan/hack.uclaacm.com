(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1waj":function(e,t,a){"use strict";a("R48M");var n=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=r},"8Gle":function(e,t,a){"use strict";a("R48M");var n=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=r},"9jPY":function(e,t,a){"use strict";var n=a("k1TG"),o=a("aXB2"),r=a("q1tI"),i=a.n(r),l=(a("17x9"),a("iuhU")),c=a("HR5l");var s,d,u=(s=r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),(d=function(e,t){return i.a.createElement(c.a,Object(n.a)({ref:t},e),s)}).muiName=c.a.muiName,i.a.memo(i.a.forwardRef(d))),m=a("H2TA"),p=a("ye/S"),b=a("bfFb"),f=a("NqtD"),g=a("VD++");function v(e){return"Backspace"===e.key||"Delete"===e.key}var h=r.forwardRef((function(e,t){var a=e.avatar,i=e.classes,c=e.className,s=e.clickable,d=e.color,m=void 0===d?"default":d,p=e.component,h=e.deleteIcon,y=e.disabled,x=void 0!==y&&y,j=e.icon,O=e.label,E=e.onClick,C=e.onDelete,k=e.onKeyDown,N=e.onKeyUp,R=e.size,w=void 0===R?"medium":R,I=e.variant,S=void 0===I?"default":I,T=Object(o.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),D=r.useRef(null),P=Object(b.a)(D,t),$=function(e){e.stopPropagation(),C&&C(e)},L=!(!1===s||!E)||s,M="small"===w,H=p||(L?g.a:"div"),A=H===g.a?{component:"div"}:{},V=null;if(C){var z=Object(l.a)("default"!==m&&("default"===S?i["deleteIconColor".concat(Object(f.a)(m))]:i["deleteIconOutlinedColor".concat(Object(f.a)(m))]),M&&i.deleteIconSmall);V=h&&r.isValidElement(h)?r.cloneElement(h,{className:Object(l.a)(h.props.className,i.deleteIcon,z),onClick:$}):r.createElement(u,{className:Object(l.a)(i.deleteIcon,z),onClick:$})}var B=null;a&&r.isValidElement(a)&&(B=r.cloneElement(a,{className:Object(l.a)(i.avatar,a.props.className,M&&i.avatarSmall,"default"!==m&&i["avatarColor".concat(Object(f.a)(m))])}));var q=null;return j&&r.isValidElement(j)&&(q=r.cloneElement(j,{className:Object(l.a)(i.icon,j.props.className,M&&i.iconSmall,"default"!==m&&i["iconColor".concat(Object(f.a)(m))])})),r.createElement(H,Object(n.a)({role:L||C?"button":void 0,className:Object(l.a)(i.root,c,"default"!==m&&[i["color".concat(Object(f.a)(m))],L&&i["clickableColor".concat(Object(f.a)(m))],C&&i["deletableColor".concat(Object(f.a)(m))]],"default"!==S&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[m]],x&&i.disabled,M&&i.sizeSmall,L&&i.clickable,C&&i.deletable),"aria-disabled":!!x||void 0,tabIndex:L||C?0:void 0,onClick:E,onKeyDown:function(e){e.currentTarget===e.target&&v(e)&&e.preventDefault(),k&&k(e)},onKeyUp:function(e){e.currentTarget===e.target&&(C&&v(e)?C(e):"Escape"===e.key&&D.current&&D.current.blur()),N&&N(e)},ref:P},A,T),B||q,r.createElement("span",{className:Object(l.a)(i.label,M&&i.labelSmall)},O),V)}));t.a=Object(m.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(p.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(p.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(p.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(p.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(p.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(p.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(p.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(p.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(p.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(p.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(p.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(p.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(h)},AjCI:function(e,t,a){"use strict";a("R48M");var n=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");t.default=r},MquD:function(e,t,a){"use strict";var n=a("q1tI"),o=n.createContext({});t.a=o},"eD//":function(e,t,a){"use strict";var n=a("k1TG"),o=a("aXB2"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),l=a("H2TA"),c=a("MquD"),s=r.forwardRef((function(e,t){var a=e.children,l=e.classes,s=e.className,d=e.component,u=void 0===d?"ul":d,m=e.dense,p=void 0!==m&&m,b=e.disablePadding,f=void 0!==b&&b,g=e.subheader,v=Object(o.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),h=r.useMemo((function(){return{dense:p}}),[p]);return r.createElement(c.a.Provider,{value:h},r.createElement(u,Object(n.a)({className:Object(i.a)(l.root,s,p&&l.dense,!f&&l.padding,g&&l.subheader),ref:t},v),g,a))}));t.a=Object(l.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(s)},eotV:function(e,t,a){"use strict";a("y7hu"),a("pJf4");var n=a("q1tI"),o=a.n(n),r=a("ofer"),i=a("hlie"),l=a("9jPY"),c=a("k1TG"),s=a("aXB2"),d=(a("17x9"),a("iuhU")),u=a("H2TA"),m=a("ye/S"),p=n.forwardRef((function(e,t){var a=e.absolute,o=void 0!==a&&a,r=e.classes,i=e.className,l=e.component,u=void 0===l?"hr":l,m=e.flexItem,p=void 0!==m&&m,b=e.light,f=void 0!==b&&b,g=e.orientation,v=void 0===g?"horizontal":g,h=e.role,y=void 0===h?"hr"!==u?"separator":void 0:h,x=e.variant,j=void 0===x?"fullWidth":x,O=Object(s.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(u,Object(c.a)({className:Object(d.a)(r.root,i,"fullWidth"!==j&&r[j],o&&r.absolute,p&&r.flexItem,f&&r.light,"vertical"===v&&r.vertical),role:y,ref:t},O))})),b=Object(u.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(m.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(p),f=a("eD//"),g=a("YjCJ"),v=a("+nib"),h=a("sXA6"),y=a("SCGU");var x=a("8j0Q"),j=(a("TOwV"),a("dRu9")),O=a("wpWl"),E=a("4Hym"),C=a("tr08"),k=a("bfFb"),N=n.forwardRef((function(e,t){var a=e.children,o=e.classes,r=e.className,i=e.collapsedHeight,l=void 0===i?"0px":i,u=e.component,m=void 0===u?"div":u,p=e.disableStrictModeCompat,b=void 0!==p&&p,f=e.in,g=e.onEnter,v=e.onEntered,h=e.onEntering,y=e.onExit,N=e.onExited,R=e.onExiting,w=e.style,I=e.timeout,S=void 0===I?O.b.standard:I,T=e.TransitionComponent,D=void 0===T?j.a:T,P=Object(s.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),$=Object(C.a)(),L=n.useRef(),M=n.useRef(null),H=n.useRef(),A="number"==typeof l?"".concat(l,"px"):l;n.useEffect((function(){return function(){clearTimeout(L.current)}}),[]);var V=$.unstable_strictMode&&!b,z=n.useRef(null),B=Object(k.a)(t,V?z:void 0),q=function(e){return function(t,a){if(e){var n=V?[z.current,t]:[t,a],o=Object(x.a)(n,2),r=o[0],i=o[1];void 0===i?e(r):e(r,i)}}},F=q((function(e,t){e.style.height=A,g&&g(e,t)})),G=q((function(e,t){var a=M.current?M.current.clientHeight:0,n=Object(E.a)({style:w,timeout:S},{mode:"enter"}).duration;if("auto"===S){var o=$.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(o,"ms"),H.current=o}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),h&&h(e,t)})),W=q((function(e,t){e.style.height="auto",v&&v(e,t)})),K=q((function(e){var t=M.current?M.current.clientHeight:0;e.style.height="".concat(t,"px"),y&&y(e)})),U=q(N),_=q((function(e){var t=M.current?M.current.clientHeight:0,a=Object(E.a)({style:w,timeout:S},{mode:"exit"}).duration;if("auto"===S){var n=$.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),H.current=n}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height=A,R&&R(e)}));return n.createElement(D,Object(c.a)({in:f,onEnter:F,onEntered:W,onEntering:G,onExit:K,onExited:U,onExiting:_,addEndListener:function(e,t){var a=V?e:t;"auto"===S&&(L.current=setTimeout(a,H.current||0))},nodeRef:V?z:void 0,timeout:"auto"===S?null:S},P),(function(e,t){return n.createElement(m,Object(c.a)({className:Object(d.a)(o.container,r,{entered:o.entered,exited:!f&&"0px"===A&&o.hidden}[e]),style:Object(c.a)({minHeight:A},w),ref:B},t),n.createElement("div",{className:o.wrapper,ref:M},n.createElement("div",{className:o.wrapperInner},a)))}))}));N.muiSupportAuto=!0;var R=Object(u.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(N),w=a("kKAo");var I=n.createContext({});var S=n.forwardRef((function(e,t){var a,o,r,i,l,u,m,p,b=e.children,f=e.classes,j=e.className,O=e.defaultExpanded,E=void 0!==O&&O,C=e.disabled,k=void 0!==C&&C,N=e.expanded,S=e.onChange,T=e.square,D=void 0!==T&&T,P=e.TransitionComponent,$=void 0===P?R:P,L=e.TransitionProps,M=Object(s.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),H=(o=(a={controlled:N,default:E,name:"Accordion",state:"expanded"}).controlled,r=a.default,a.name,a.state,i=n.useRef(void 0!==o).current,l=n.useState(r),u=l[0],m=l[1],[i?o:u,n.useCallback((function(e){i||m(e)}),[])]),A=Object(x.a)(H,2),V=A[0],z=A[1],B=n.useCallback((function(e){z(!V),S&&S(e,!V)}),[V,S,z]),q=n.Children.toArray(b),F=(p=q,Object(g.a)(p)||Object(v.a)(p)||Object(h.a)(p)||Object(y.a)()),G=F[0],W=F.slice(1),K=n.useMemo((function(){return{expanded:V,disabled:k,toggle:B}}),[V,k,B]);return n.createElement(w.a,Object(c.a)({className:Object(d.a)(f.root,j,V&&f.expanded,k&&f.disabled,!D&&f.rounded),ref:t,square:D},M),n.createElement(I.Provider,{value:K},G),n.createElement($,Object(c.a)({in:V,timeout:"auto"},L),n.createElement("div",{"aria-labelledby":G.props.id,id:G.props["aria-controls"],role:"region"},W)))})),T=Object(u.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(S),D=a("VD++"),P=a("PsDL"),$=n.forwardRef((function(e,t){var a=e.children,o=e.classes,r=e.className,i=e.expandIcon,l=e.IconButtonProps,u=e.onBlur,m=e.onClick,p=e.onFocusVisible,b=Object(s.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),f=n.useState(!1),g=f[0],v=f[1],h=n.useContext(I),y=h.disabled,x=void 0!==y&&y,j=h.expanded,O=h.toggle;return n.createElement(D.a,Object(c.a)({focusRipple:!1,disableRipple:!0,disabled:x,component:"div","aria-expanded":j,className:Object(d.a)(o.root,r,x&&o.disabled,j&&o.expanded,g&&o.focused),onFocusVisible:function(e){v(!0),p&&p(e)},onBlur:function(e){v(!1),u&&u(e)},onClick:function(e){O&&O(e),m&&m(e)},ref:t},b),n.createElement("div",{className:Object(d.a)(o.content,j&&o.expanded)},a),i&&n.createElement(P.a,Object(c.a)({className:Object(d.a)(o.expandIcon,j&&o.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},l),i))})),L=Object(u.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})($),M=(a("JHok"),n.createContext());var H=M;var A=a("NqtD"),V=n.forwardRef((function(e,t){e.checked;var a=e.classes,o=e.className,i=e.control,l=e.disabled,u=(e.inputRef,e.label),m=e.labelPlacement,p=void 0===m?"end":m,b=(e.name,e.onChange,e.value,Object(s.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),f=n.useContext(H),g=l;void 0===g&&void 0!==i.props.disabled&&(g=i.props.disabled),void 0===g&&f&&(g=f.disabled);var v={disabled:g};return["checked","name","onChange","value","inputRef"].forEach((function(t){void 0===i.props[t]&&void 0!==e[t]&&(v[t]=e[t])})),n.createElement("label",Object(c.a)({className:Object(d.a)(a.root,o,"end"!==p&&a["labelPlacement".concat(Object(A.a)(p))],g&&a.disabled),ref:t},b),n.cloneElement(i,v),n.createElement(r.a,{component:"span",className:Object(d.a)(a.label,g&&a.disabled)},u))})),z=Object(u.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(V),B=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=Object(s.a)(e,["classes","className"]);return n.createElement("div",Object(c.a)({className:Object(d.a)(a.root,o),ref:t},r))})),q=Object(u.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(B),F=a("1waj"),G=a.n(F),W=a("8Gle"),K=a.n(W),U=a("AjCI"),_=a.n(U),J=a("R/WZ"),X=(a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("tVbE"));var Y=Object(J.a)((function(e){return{listItem:{display:"flex",flexDirection:"column"},links:{display:"flex",flexDirection:"row",flexWrap:"wrap"},chips:{display:"flex",alignItems:"center",flexWrap:"wrap"},chip:{margin:e.spacing(.125,.25,.125,0)},tagColor:{color:"#FF477E"}}}));function Z(e){var t=e.link,a=e.text,n=e.divider,l=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["link","text","divider"]);return o.a.createElement(r.a,null,n?o.a.createElement("span",null,"· "):null,o.a.createElement(i.a,Object.assign({href:t},l),a),"  ")}var Q=function(e){var t=e.name,a=e.presenter,n=e.tags,i=e.repo,c=e.slides,s=e.youtube,d=e.tagHighlight,u=Y();return o.a.createElement(X.a,{key:t,alignItems:"flex-start",dense:!0,disableGutters:!0,className:u.listItem},o.a.createElement(r.a,{variant:"h6",component:"h3"},t),o.a.createElement("div",{className:u.chips},n.map((function(e){return o.a.createElement(l.a,{key:e,label:o.a.createElement(r.a,{variant:"caption"},o.a.createElement("span",{className:d&&d===e?u.tagColor:null},e)),size:"small",className:u.chip})}))),o.a.createElement("div",{className:u.links},i?o.a.createElement(Z,{link:i,text:"README"}):null,c?o.a.createElement(Z,{link:c,text:"Slides",divider:i}):null,s?o.a.createElement(Z,{link:s,text:"Recording",divider:i||c}):null,a?o.a.createElement(r.a,null,"Taught by ",a.join(", ")):null))},ee=Object(J.a)((function(e){return{eventItem:{width:"100%",display:"flex",justifyContent:"space-between",flexWrap:"wrap"},eventName:{display:"flex",alignItems:"center"},formControl:{margin:e.spacing(.25,1)},link:{padding:"0px"},paperRoot:{width:"100%"},name:{lineHeight:"1.0"},chips:{display:"flex",alignItems:"center",flexWrap:"wrap"},chip:{margin:e.spacing(.125,.25,.125,0)},tagColor:{color:"#FF477E"}}}));t.a=function(e){var t=e.name,a=e.mainLink,c=e.tags,s=e.director,d=e.workshops,u=e.tagHighlight,m=ee(),p=Object(n.useState)(!0),g=p[0],v=p[1];return o.a.createElement(T,{classes:{root:m.paperRoot},onChange:function(){return v((function(e){return!e}))}},o.a.createElement(L,{expandIcon:g?o.a.createElement(G.a,null):o.a.createElement(K.a,null)},o.a.createElement("div",{className:m.eventItem},o.a.createElement("div",{className:m.eventName},o.a.createElement(r.a,{variant:"h6",component:"h2",className:m.name},t,o.a.createElement(z,{"aria-label":"Launch",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},className:m.formControl,control:o.a.createElement(i.a,{href:a,className:m.link,"aria-label":t},o.a.createElement(_.a,{fontSize:"small",color:"primary"}))}))),o.a.createElement("div",{className:m.chips},c.map((function(e){return o.a.createElement(l.a,{key:e,label:o.a.createElement(r.a,{variant:"caption"},o.a.createElement("span",{className:u&&u===e?m.tagColor:null},e)),size:"small",className:m.chip})}))))),o.a.createElement(b,{variant:"middle"}),o.a.createElement(q,null,o.a.createElement("div",null,o.a.createElement(r.a,{color:"textSecondary"}),s?o.a.createElement(r.a,null,"Directed by ",s.join(", ")):null,d?o.a.createElement(f.a,null,d.map((function(e){return o.a.createElement(Q,{key:e.name,name:e.name,presenter:e.presenter,tags:e.tags,repo:e.repo,slides:e.slides,youtube:e.youtube,tagHighlight:u})}))):null)))}},nGjg:function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/");var n=a("q1tI"),o=a.n(n),r=a("ofer"),i=a("TSYQ"),l=a.n(i),c=a("R/WZ");var s=Object(c.a)((function(e){return{headline:{fontWeight:600,margin:e.spacing(6,0)}}}));t.a=function(e){var t=e.className,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["className"]),n=s();return o.a.createElement(r.a,Object.assign({variant:"h2",component:"h1",className:l()(n.headline,t)},a))}},tVbE:function(e,t,a){"use strict";var n=a("k1TG"),o=a("aXB2"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),l=a("H2TA"),c=a("VD++");a("sc67");var s=a("bfFb"),d=a("MquD"),u=a("i8i4"),m="undefined"==typeof window?r.useEffect:r.useLayoutEffect,p=r.forwardRef((function(e,t){var a=e.alignItems,l=void 0===a?"center":a,p=e.autoFocus,b=void 0!==p&&p,f=e.button,g=void 0!==f&&f,v=e.children,h=e.classes,y=e.className,x=e.component,j=e.ContainerComponent,O=void 0===j?"li":j,E=e.ContainerProps,C=(E=void 0===E?{}:E).className,k=Object(o.a)(E,["className"]),N=e.dense,R=void 0!==N&&N,w=e.disabled,I=void 0!==w&&w,S=e.disableGutters,T=void 0!==S&&S,D=e.divider,P=void 0!==D&&D,$=e.focusVisibleClassName,L=e.selected,M=void 0!==L&&L,H=Object(o.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),A=r.useContext(d.a),V={dense:R||A.dense||!1,alignItems:l},z=r.useRef(null);m((function(){b&&z.current&&z.current.focus()}),[b]);var B,q,F=r.Children.toArray(v),G=F.length&&(B=F[F.length-1],q=["ListItemSecondaryAction"],r.isValidElement(B)&&-1!==q.indexOf(B.type.muiName)),W=r.useCallback((function(e){z.current=u.findDOMNode(e)}),[]),K=Object(s.a)(W,t),U=Object(n.a)({className:Object(i.a)(h.root,y,V.dense&&h.dense,!T&&h.gutters,P&&h.divider,I&&h.disabled,g&&h.button,"center"!==l&&h.alignItemsFlexStart,G&&h.secondaryAction,M&&h.selected),disabled:I},H),_=x||"li";return g&&(U.component=x||"div",U.focusVisibleClassName=Object(i.a)(h.focusVisible,$),_=c.a),G?(_=U.component||x?_:"div","li"===O&&("li"===_?_="div":"li"===U.component&&(U.component="div")),r.createElement(d.a.Provider,{value:V},r.createElement(O,Object(n.a)({className:Object(i.a)(h.container,C),ref:K},k),r.createElement(_,U,F),F.pop()))):r.createElement(d.a.Provider,{value:V},r.createElement(_,Object(n.a)({ref:K},U),F))}));t.a=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(p)}}]);
//# sourceMappingURL=3718bca735a7212e927c8699df94b74e88db6123-0243299678a3ee79424f.js.map