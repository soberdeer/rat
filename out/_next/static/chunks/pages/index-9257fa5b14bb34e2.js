(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9094:function(a,b,c){"use strict";c.d(b,{M:function(){return q}});var d=c(7294),e=c(6466),f=c(7818),g=c(8427),h=c(4459),i=Object.defineProperty,j=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(a,b,c)=>b in a?i(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,n=(a,b)=>{for(var c in b||(b={}))k.call(b,c)&&m(a,c,b[c]);if(j)for(var c of j(b))l.call(b,c)&&m(a,c,b[c]);return a},o=(a,b)=>{var c={};for(var d in a)k.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&j)for(var d of j(a))0>b.indexOf(d)&&l.call(a,d)&&(c[d]=a[d]);return c};let p=(0,d.forwardRef)((a,b)=>{let c=(0,e.N4)("Center",{},a),{inline:g,sx:i}=c,j=o(c,["inline","sx"]);return d.createElement(h.x,n({ref:b,sx:[{display:g?"inline-flex":"flex",alignItems:"center",justifyContent:"center"},...(0,f.R)(i)]},j))});p.displayName="@mantine/core/Center";let q=(0,g.F)(p)},1003:function(a,b,c){"use strict";c.d(b,{U:function(){return F}});var d=c(7294),e=c(3678),f=c(6466),g=c(9983),h=c(3935),i=c(7048),j=c(4731),k=Object.defineProperty,l=Object.defineProperties,m=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,q=(a,b,c)=>b in a?k(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,r=(a,b)=>{for(var c in b||(b={}))o.call(b,c)&&q(a,c,b[c]);if(n)for(var c of n(b))p.call(b,c)&&q(a,c,b[c]);return a},s=(a,b)=>l(a,m(b)),t=(a,b)=>{var c={};for(var d in a)o.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&n)for(var d of n(a))0>b.indexOf(d)&&p.call(a,d)&&(c[d]=a[d]);return c};function u(a){return(null==a?void 0:a.current)?a.current.scrollHeight:"auto"}let v="undefined"!=typeof window&&window.requestAnimationFrame;var w=c(4459),x=Object.defineProperty,y=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,B=(a,b,c)=>b in a?x(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,C=(a,b)=>{for(var c in b||(b={}))z.call(b,c)&&B(a,c,b[c]);if(y)for(var c of y(b))A.call(b,c)&&B(a,c,b[c]);return a},D=(a,b)=>{var c={};for(var d in a)z.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&y)for(var d of y(a))0>b.indexOf(d)&&A.call(a,d)&&(c[d]=a[d]);return c};let E={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},F=(0,d.forwardRef)((a,b)=>{let c=(0,f.N4)("Collapse",E,a),{children:k,in:l,transitionDuration:m,transitionTimingFunction:n,style:o,onTransitionEnd:p,animateOpacity:q}=c,x=D(c,["children","in","transitionDuration","transitionTimingFunction","style","onTransitionEnd","animateOpacity"]),y=(0,f.rZ)(),z=(0,e.J)(),A=!!y.respectReducedMotion&&z,B=A?0:m,{systemStyles:F,rest:G}=(0,g.x)(x),H=function({transitionDuration:a,transitionTimingFunction:b="ease",onTransitionEnd:c=()=>{},opened:e}){let f=(0,d.useRef)(null),g={display:"none",height:"0px",overflow:"hidden"},[k,l]=(0,d.useState)(e?{}:g),m=a=>{(0,h.flushSync)(()=>l(a))},n=a=>{m(b=>r(r({},b),a))};function o(c){let d=a||function(a){if(!a||"string"==typeof a)return 0;let b=a/36;return Math.round((4+15*b**.25+b/5)*10)}(c);return{transition:`height ${d}ms ${b}`}}(0,i.l)(()=>{e?v(()=>{n({willChange:"height",display:"block",overflow:"hidden"}),v(()=>{let a=u(f);n(s(r({},o(a)),{height:a}))})}):v(()=>{let a=u(f);n(s(r({},o(a)),{willChange:"height",height:a})),v(()=>n({height:"0px",overflow:"hidden"}))})},[e]);let p=a=>{if(a.target===f.current&&"height"===a.propertyName){if(e){let b=u(f);b===k.height?m({}):n({height:b}),c()}else"0px"===k.height&&(m(g),c())}};return function(a={}){var b=a,{style:c={},refKey:d="ref"}=b,g=t(b,["style","refKey"]);let h=g[d];return s(r({"aria-hidden":!e},g),{[d]:(0,j.Y)(f,h),onTransitionEnd:p,style:r(r({boxSizing:"border-box"},c),k)})}}({opened:l,transitionDuration:B,transitionTimingFunction:n,onTransitionEnd:p});return 0===B?l?d.createElement(w.x,C({},G),k):null:d.createElement(w.x,C({},H(C(C({style:o,ref:b},G),F))),d.createElement("div",{style:{opacity:l||!q?1:0,transition:q?`opacity ${B}ms ${n}`:"none"}},k))});F.displayName="@mantine/core/Collapse"},7564:function(a,b,c){"use strict";c.d(b,{K:function(){return p}});var d=c(7294),e=c(6466),f=(0,c(8067).k)((a,{spacing:b,align:c,justify:d})=>({root:{display:"flex",flexDirection:"column",alignItems:c,justifyContent:d,gap:a.fn.size({size:b,sizes:a.spacing})}})),g=c(4459),h=Object.defineProperty,i=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,l=(a,b,c)=>b in a?h(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,m=(a,b)=>{for(var c in b||(b={}))j.call(b,c)&&l(a,c,b[c]);if(i)for(var c of i(b))k.call(b,c)&&l(a,c,b[c]);return a},n=(a,b)=>{var c={};for(var d in a)j.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&i)for(var d of i(a))0>b.indexOf(d)&&k.call(a,d)&&(c[d]=a[d]);return c};let o={spacing:"md",align:"stretch",justify:"top"},p=(0,d.forwardRef)((a,b)=>{let c=(0,e.N4)("Stack",o,a),{spacing:h,className:i,align:j,justify:k,unstyled:l}=c,p=n(c,["spacing","className","align","justify","unstyled"]),{classes:q,cx:r}=f({spacing:h,align:j,justify:k},{name:"Stack",unstyled:l});return d.createElement(g.x,m({className:r(q.root,i),ref:b},p))});p.displayName="@mantine/core/Stack"},2185:function(a,b,c){"use strict";c.d(b,{h:function(){return g}});var d=c(7294);let e={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},f="undefined"!=typeof window;function g(){let[a,{width:b,height:c}]=function(){let a=(0,d.useRef)(0),b=(0,d.useRef)(null),[c,g]=(0,d.useState)(e),h=(0,d.useMemo)(()=>f?new ResizeObserver(c=>{let d=c[0];d&&(cancelAnimationFrame(a.current),a.current=requestAnimationFrame(()=>{b.current&&g(d.contentRect)}))}):null,[]);return(0,d.useEffect)(()=>(b.current&&h.observe(b.current),()=>{h.disconnect(),a.current&&cancelAnimationFrame(a.current)}),[b.current]),[b,c]}();return{ref:a,width:b,height:c}}},7818:function(a,b,c){"use strict";function d(a){return Array.isArray(a)?a:[a]}c.d(b,{R:function(){return d}})},8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(5769)}])},967:function(a,b,c){"use strict";c.d(b,{z:function(){return t}});var d=c(6042),e=c(9396),f=c(9534),g=c(5893),h=c(7294),i=c(6972),j=c(2445),k=c(9094),l=c(7841),m=c(1003),n=c(7564),o=c(5117),p=c(2185),q=c(1392),r=(0,c(8067).k)(function(a){return{root:{width:"100%"},grid:{display:"flex",flexWrap:"wrap",borderTop:"1px solid ".concat("dark"===a.colorScheme?a.colors.dark[4]:a.colors.gray[3]),borderLeft:"1px solid ".concat("dark"===a.colorScheme?a.colors.dark[4]:a.colors.gray[3])},boxWrapper:{borderRight:"1px solid ".concat("dark"===a.colorScheme?a.colors.dark[4]:a.colors.gray[3])},box:{width:80,height:40,minWidth:80,padding:5,paddingLeft:10,borderRight:"1px solid ".concat("dark"===a.colorScheme?a.colors.dark[4]:a.colors.gray[3]),borderBottom:"1px solid ".concat("dark"===a.colorScheme?a.colors.dark[4]:a.colors.gray[3]),display:"flex",justifyContent:"flex-start",alignItems:"center",backgroundColor:"dark"===a.colorScheme?a.colors.dark[5]:a.colors.orange[0],"& + &":{backgroundColor:"dark"===a.colorScheme?a.colors.dark[6]:a.white,width:40,paddingLeft:5,minWidth:40,justifyContent:"center"}},char:{fontSize:24}}}),s=c(9613);function t(a){var b=a.className,c=a.label,t=(0,f.Z)(a,["className","label"]),u=(0,h.useContext)(s.Z).locale,v=(0,h.useMemo)(function(){return"ru"===u?"cyrillic":"latin"},[u]),w=(0,h.useMemo)(function(){return"ru"===u?"option":"latin_option"},[u]),x=r(),y=x.classes,z=x.cx,A=(0,i.X)().colorScheme,B=(0,p.h)(),C=B.ref,D=B.width,E=(0,h.useState)(!1),F=E[0],G=E[1],H=(0,h.useMemo)(function(){return function(a,b){for(var c=q.Z.filter(function(a){return 1===a.armenian.length}).sort(function(a,b){return a.cyrillic>b.cyrillic?1:-1}),d=[],e=0;e<c.length;e+=a)d.push(c.slice(e,e+a));return d}(D<700?D<520?19:15:10)||[]},[D]);return(0,g.jsxs)(j.W,(0,e.Z)((0,d.Z)({className:z(y.root,b)},t),{ref:C,children:[(0,g.jsx)(k.M,{children:(0,g.jsx)(l.z,{color:"dark"===A?"gray":"orange",variant:"dark"===A?"filled":"light",onClick:function(){return G(function(a){return!a})},children:c})}),(0,g.jsx)(m.U,{in:F,py:40,children:(0,g.jsx)(k.M,{children:(0,g.jsx)("div",{className:y.grid,children:H.map(function(a,b){return(0,g.jsx)(n.K,{spacing:0,children:a.map(function(a,b){return(0,g.jsx)("div",{children:(0,g.jsxs)(k.M,{className:y.boxWrapper,children:[(0,g.jsx)("div",{className:y.box,children:(0,g.jsx)(o.x,{className:y.char,style:{textTransform:a[w]?"none":"capitalize"},children:"".concat(a[w]||a[v])})}),(0,g.jsx)("div",{className:y.box,children:(0,g.jsx)(o.x,{className:y.char,children:a.armenian.toUpperCase()})}),(0,g.jsx)("div",{className:y.box,children:(0,g.jsx)(o.x,{className:y.char,children:a.armenian})})]})},b)})},b)})})})})]}))}},3509:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(6042),e=c(9396),f=c(9534),g=c(5893),h=c(4459);function i(a){var b=a.children,c=a.clickable,i=(0,f.Z)(a,["children","clickable"]);return(0,g.jsx)(h.x,(0,e.Z)((0,d.Z)({py:40,sx:function(a){return(0,d.Z)({backgroundColor:"dark"===a.colorScheme?a.colors.dark[6]:a.colors.gray[0],textAlign:"center",padding:a.spacing.xl,borderRadius:a.radius.md,cursor:c?"pointer":"default"},c?{"&:hover":{backgroundColor:"dark"===a.colorScheme?a.colors.dark[5]:a.colors.gray[1]}}:{})}},i),{children:b}))}},5769:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return P}});var d=c(6042),e=c(5893),f=c(9396),g=c(9534),h=c(7294),i=c(2445),j=c(5117),k=c(6466),l=c(8067),m=Object.defineProperty,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,q=(a,b,c)=>b in a?m(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,r=(a,b)=>{for(var c in b||(b={}))o.call(b,c)&&q(a,c,b[c]);if(n)for(var c of n(b))p.call(b,c)&&q(a,c,b[c]);return a},s=(0,l.k)((a,{spacing:b,breakpoints:c,cols:d})=>{let e=(function(a,b){if(0===b.length)return b;let c="maxWidth"in b[0]?"maxWidth":"minWidth",d=[...b].sort((b,d)=>a.fn.size({size:d[c],sizes:a.breakpoints})-a.fn.size({size:b[c],sizes:a.breakpoints}));return"minWidth"===c?d.reverse():d})(a,c).reduce((c,d)=>{let e="maxWidth"in d?"max-width":"min-width",f=a.fn.size({size:"max-width"===e?d.maxWidth:d.minWidth,sizes:a.breakpoints});return c[`@media (${e}: ${f+("max-width"===e?0:1)}px)`]={gridTemplateColumns:`repeat(${d.cols}, minmax(0, 1fr))`,gap:a.fn.size({size:d.spacing||b,sizes:a.spacing})},c},{});return{root:r({boxSizing:"border-box",display:"grid",gridTemplateColumns:`repeat(${d}, minmax(0, 1fr))`,gap:a.fn.size({size:b,sizes:a.spacing})},e)}}),t=c(4459),u=Object.defineProperty,v=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,y=(a,b,c)=>b in a?u(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,z=(a,b)=>{for(var c in b||(b={}))w.call(b,c)&&y(a,c,b[c]);if(v)for(var c of v(b))x.call(b,c)&&y(a,c,b[c]);return a},A=(a,b)=>{var c={};for(var d in a)w.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&v)for(var d of v(a))0>b.indexOf(d)&&x.call(a,d)&&(c[d]=a[d]);return c};let B={breakpoints:[],cols:1,spacing:"md"},C=(0,h.forwardRef)((a,b)=>{let c=(0,k.N4)("SimpleGrid",B,a),{className:d,breakpoints:e,cols:f,spacing:g,children:i,unstyled:j}=c,l=A(c,["className","breakpoints","cols","spacing","children","unstyled"]),{classes:m,cx:n}=s({breakpoints:e,cols:f,spacing:g},{unstyled:j,name:"SimpleGrid"});return h.createElement(t.x,z({className:n(m.root,d),ref:b},l),i)});C.displayName="@mantine/core/SimpleGrid";var D=c(4736),E=c(7564),F=c(9236),G=c(3509),H={cards:function(a){var b=a.size;return(0,e.jsxs)("svg",{viewBox:"0 0 512 466.17",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",height:void 0===b?40:b,children:[(0,e.jsx)("path",{d:"M140.39 10.2h222.88v222.89H140.39z",fill:"#6fb0b6"}),(0,e.jsx)("path",{d:"M10.2 233.09h222.88v222.88H10.2z",fill:"#ff877f"}),(0,e.jsx)("path",{d:"M278.92 233.09H501.8v222.88H278.92z",fill:"#a0bf7c"}),(0,e.jsx)("path",{d:"M501.8 222.89H373.48V10.2A10.2 10.2 0 00363.28 0H140.39a10.2 10.2 0 00-10.2 10.2v212.69H10.2A10.2 10.2 0 000 233.09v222.89a10.2 10.2 0 0010.2 10.2h222.89a10.2 10.2 0 0010.2-10.2V243.29h25.42v212.69a10.2 10.2 0 0010.2 10.2H501.8a10.2 10.2 0 0010.2-10.2V233.09a10.2 10.2 0 00-10.2-10.2zm-351.21 0V20.4h202.49v202.49zm72.3 20.4v202.49H20.4V243.29zm268.71 0v202.49H289.11V243.29z",fill:"#000"}),(0,e.jsx)("path",{d:"M271.37 151.57l5.8 20.27c.76 2.9 3.35 4 6.71 4 5.33 0 12.5-3.51 12.5-8.24a6.4 6.4 0 00-.31-1.52l-29.42-95.9c-1.38-4.58-7-6.71-12.81-6.71s-11.28 2.13-12.66 6.71l-29.42 95.91a8.26 8.26 0 00-.31 1.52c0 4.88 7.17 8.24 12.5 8.24 3.36 0 6-1.07 6.71-4l5.8-20.27zm-17.53-62.36l13.27 46.8h-26.53zM97.68 289.32c-4.42 0-8.69 2.14-8.69 6.25v99.11c0 3.2 3.35 6.1 8.69 6.1H130c17.23 0 30.5-8.54 30.5-32.33v-3.2c0-15.24-6.41-21.19-15.71-24.85 8.08-3.51 13-11.74 13-24.24 0-21.65-14.79-26.84-30.64-26.84zm43 77.46c0 11.58-5.49 16.62-14.79 16.62h-17.23v-35.22h17.23c9.3 0 14.79 4.27 14.79 16.16v2.44zm-2.75-47.27c0 7.78-4 13.11-12.2 13.11h-17.07V306.7h16.92c7.78.01 12.35 4.88 12.35 12.81zm214.41 4.73v42.54c0 25.46 15.86 34.91 35.07 34.91 21.35 0 36.44-11.74 36.44-30.19 0-7.77-3.2-9.76-10.06-9.76-5.18 0-9.45 1.53-9.76 6.26-.46 6.4-1.68 16.31-15.55 16.31-10.52 0-16.31-5.64-16.31-17.53v-42.54c0-11.89 5.79-17.53 16-17.53 14.49 0 15.56 10.36 15.86 15.09.15 4.57 4.27 6.25 9.91 6.25 6.71 0 9.91-1.83 9.91-9.76 0-17.68-15.09-29-36.28-29-19.22 0-35.23 9.46-35.23 34.92z",fill:"#000"})]})},reading:function(a){var b=a.size,c=void 0===b?40:b;return(0,e.jsx)("svg",{viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",width:c,height:c,children:(0,e.jsxs)("g",{fill:"none",strokeWidth:"1",transform:"matrix(2.81 0 0 2.81 1.407 1.407)",children:[(0,e.jsx)("path",{d:"M89 67.44L49.92 85.3V31.17L89 13.32z",fill:"#c03a2b"}),(0,e.jsx)("path",{d:"M1 67.44L40.08 85.3V31.17L1 13.32z",fill:"#e64c3c"}),(0,e.jsx)("path",{d:"M75.62 46.9l-13.39 6.12V34.46l13.39-6.12zM14.38 46.9l13.39 6.12V34.46l-13.39-6.12z",fill:"#e4c54c"}),(0,e.jsx)("path",{d:"M62.227 54.021a1.002 1.002 0 01-1-1V34.464c0-.392.229-.747.584-.91l13.397-6.122a1 1 0 011.416.909v18.556a1 1 0 01-.584.909L62.643 53.93c-.133.06-.275.091-.416.091zm1-18.914v16.357l11.397-5.208V29.899l-11.397 5.208zm12.397 11.791h.01-.01z",fill:"#000"}),(0,e.jsx)("path",{d:"M45 29.558c0-14.278-5.541-20.45-18.583-24.855v8.617L45 29.558z",fill:"#cdbf87"}),(0,e.jsx)("path",{d:"M45 30.558a.997.997 0 01-.658-.247L25.759 14.073a1 1 0 01-.342-.753V4.703a1 1 0 011.32-.948C40.779 8.499 46 15.492 46 29.558a1.002 1.002 0 01-1 1zM27.417 12.866l16.534 14.448c-.51-11.246-5.063-17.034-16.534-21.201v6.753z",fill:"#000"}),(0,e.jsx)("path",{d:"M45 31.174v-1.616c0-3.658-1.816-7.109-4.896-9.084C31.146 14.727 20.799 11.142 9.588 8.9L1 13.32l39.078 17.855H45zM45 31.174v-1.616c0-3.658 1.816-7.109 4.896-9.084 8.959-5.747 19.306-9.332 30.517-11.574l8.588 4.42-39.079 17.854H45z",fill:"#cdbf87"}),(0,e.jsx)("path",{d:"M62.228 61.162a1 1 0 01-.417-1.909l13.397-6.121a1 1 0 11.832 1.818l-13.397 6.121a.994.994 0 01-.415.091zM62.228 68.305a1 1 0 01-.417-1.909l13.397-6.122a1 1 0 01.832 1.818l-13.397 6.122a1.01 1.01 0 01-.415.091zM27.773 54.021a.994.994 0 01-.416-.091L13.96 47.808a.999.999 0 01-.584-.909V28.343a1 1 0 011.415-.909l13.398 6.122a1 1 0 01.584.91v18.556c0 .341-.173.657-.459.842a1.019 1.019 0 01-.541.157zm-12.398-7.765l11.398 5.208V35.107l-11.398-5.208v16.357zM27.773 61.162a.99.99 0 01-.415-.091L13.96 54.95a1 1 0 11.831-1.818l13.398 6.121a1 1 0 01-.416 1.909zM27.773 68.305a.99.99 0 01-.415-.091L13.96 62.092a1 1 0 11.831-1.818l13.398 6.122a1 1 0 01-.416 1.909z",fill:"#000"}),(0,e.jsx)("path",{d:"M49.922 86.298a.999.999 0 01-1-1V31.174c0-.392.229-.747.584-.91L88.584 12.41a1 1 0 011.416.91v54.123a1 1 0 01-.584.909L50.338 86.207a.997.997 0 01-.416.091zm1-54.481v51.924L88 66.8V14.876L50.922 31.817zM89 67.442h.01H89zM40.078 86.298a.997.997 0 01-.416-.091L.584 68.352a1.002 1.002 0 01-.584-.91V13.32a1 1 0 011.415-.909l39.078 17.854a1 1 0 01.584.91v54.124a.999.999 0 01-.999.999zM2 66.8l37.078 16.941V31.817L2 14.876V66.8z",fill:"#000"}),(0,e.jsx)("path",{d:"M49.922 86.298h-9.844a1 1 0 01-1-1V31.174a1 1 0 011-1h9.844a1 1 0 011 1v54.124a1 1 0 01-1 1zm-8.844-2h7.844V32.174h-7.844v52.124z",fill:"#000"}),(0,e.jsx)("path",{d:"M45 32.174h-4.922a1.01 1.01 0 01-.416-.09L.584 14.229a1 1 0 01-.042-1.799L9.13 8.01a.989.989 0 01.654-.091c12.32 2.463 22.415 6.295 30.86 11.713C43.998 21.784 46 25.494 46 29.558v1.616a1 1 0 01-1 1zm-4.704-2H44v-.616c0-3.379-1.658-6.461-4.436-8.242-8.153-5.231-17.914-8.951-29.83-11.367l-6.445 3.317 37.007 16.908z",fill:"#000"}),(0,e.jsx)("path",{d:"M49.922 32.174H45a1 1 0 01-1-1v-1.616c0-4.064 2.002-7.774 5.355-9.926 8.446-5.418 18.541-9.25 30.86-11.713a.999.999 0 01.654.091l8.588 4.42a1.001 1.001 0 01-.042 1.799L50.338 32.084a.998.998 0 01-.416.09zm-3.922-2h3.704l37.007-16.908-6.445-3.317c-11.914 2.416-21.675 6.135-29.83 11.367C47.658 23.097 46 26.179 46 29.558v.616z",fill:"#000"}),(0,e.jsx)("rect",{height:"54.12",width:"9.84",fill:"#c03a2b",rx:"0",ry:"0",x:"40.08",y:"31.17"})]})})},test:function(a){var b=a.size,c=void 0===b?40:b;return(0,e.jsxs)("svg",{viewBox:"0 0 502 502",xmlns:"http://www.w3.org/2000/svg",width:c,height:c,children:[(0,e.jsx)("path",{d:"M71 10h360v482H71z",fill:"#f0efe4"}),(0,e.jsx)("path",{d:"M126 68h87v87h-87zm0 281h87v87h-87z",fill:"#f77e65"}),(0,e.jsx)("path",{d:"M431 0H71c-5.522 0-10 4.477-10 10v482c0 5.523 4.478 10 10 10h360c5.522 0 10-4.477 10-10V10c0-5.523-4.478-10-10-10zm-10 482H81V20h340v462z"}),(0,e.jsx)("path",{d:"M126 165h87c5.522 0 10-4.477 10-10V68c0-5.523-4.478-10-10-10h-87c-5.522 0-10 4.477-10 10v87c0 5.523 4.478 10 10 10zm10-87h67v67h-67V78zm-10 228h87c5.522 0 10-4.477 10-10v-19c0-5.523-4.478-10-10-10s-10 4.477-10 10v9h-67v-67h62c5.522 0 10-4.477 10-10s-4.478-10-10-10h-72c-5.522 0-10 4.477-10 10v87c0 5.523 4.478 10 10 10zm0 140h87c5.522 0 10-4.477 10-10v-87c0-5.523-4.478-10-10-10h-87c-5.522 0-10 4.477-10 10v87c0 5.523 4.478 10 10 10zm10-87h67v67h-67v-67zM327 99h50c5.522 0 10-4.477 10-10s-4.478-10-10-10h-50c-5.522 0-10 4.477-10 10s4.478 10 10 10zm-59 0h17c5.522 0 10-4.477 10-10s-4.478-10-10-10h-17c-5.522 0-10 4.477-10 10s4.478 10 10 10zm0 41h109c5.522 0 10-4.477 10-10s-4.478-10-10-10H268c-5.522 0-10 4.477-10 10s4.478 10 10 10zm109 81h-50c-5.522 0-10 4.477-10 10s4.478 10 10 10h50c5.522 0 10-4.477 10-10s-4.478-10-10-10zm-109 20h17c5.522 0 10-4.477 10-10s-4.478-10-10-10h-17c-5.522 0-10 4.477-10 10s4.478 10 10 10zm0 41h109c5.522 0 10-4.477 10-10s-4.478-10-10-10H268c-5.522 0-10 4.477-10 10s4.478 10 10 10zm109 78h-50c-5.522 0-10 4.477-10 10s4.478 10 10 10h50c5.522 0 10-4.477 10-10s-4.478-10-10-10zm-109 20h17c5.522 0 10-4.477 10-10s-4.478-10-10-10h-17c-5.522 0-10 4.477-10 10s4.478 10 10 10zm0 41h109c5.522 0 10-4.477 10-10s-4.478-10-10-10H268c-5.522 0-10 4.477-10 10s4.478 10 10 10z"}),(0,e.jsx)("path",{d:"M173.429 275.071c1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929l59.5-59.5c3.905-3.905 3.905-10.237 0-14.143-3.906-3.905-10.236-3.905-14.143 0l-52.52 52.52-18.501-17.678c-3.991-3.815-10.323-3.672-14.138.321-3.816 3.993-3.672 10.323.321 14.139l25.339 24.341z"})]})}},I=c(1664),J=c.n(I),K=c(4065);function L(a){var b=a.image,c=a.title,h=a.link,i=(0,g.Z)(a,["image","title","link"]),j=H[b],k=(0,K.a)("(max-width: 900px)");return(0,e.jsx)(J(),{href:h,passHref:!0,children:(0,e.jsx)(D.k,(0,f.Z)((0,d.Z)({component:"a"},i),{children:(0,e.jsx)(G.Z,{clickable:!0,children:(0,e.jsxs)(E.K,{align:"center",children:[j&&(0,e.jsx)(j,{size:k?80:200}),(0,e.jsx)(F.D,{children:c})]})})}))})}var M=c(967);function N(a){var b=a.hero,c=a.cards,k=a.alphabet,l=(0,g.Z)(a,["hero","cards","alphabet"]);return(0,e.jsxs)(i.W,(0,f.Z)((0,d.Z)({},l),{children:[(0,e.jsx)(j.x,{align:"center",py:40,children:b}),(0,e.jsx)(M.z,{pb:40,label:k}),(0,e.jsx)(C,{cols:2,children:c.map(function(a,b){return(0,h.createElement)(L,(0,f.Z)((0,d.Z)({},a),{key:b}))})})]}))}var O=c(9745),P=function(a){var b=a.locale;return(0,e.jsx)(N,(0,d.Z)({},O.Z[b||"ru"].main))}},1392:function(a,b,c){"use strict";c.d(b,{Y:function(){return d}});var d=[{cyrillic:"тш",armenian:"ճ"},{cyrillic:"дж",armenian:"շ"},{cyrillic:"пх",armenian:"փ"},{cyrillic:"кх",armenian:"ք"},{cyrillic:"ев",armenian:"և"},{cyrillic:"сc",latin:"th",armenian:"թ"},{cyrillic:"тс",armenian:"ծ"},{cyrillic:"дз",latin:"th",armenian:"ձ"},{cyrillic:" во",latin:"wo",armenian:" ո"},];b.Z=[{cyrillic:"а",armenian:"ա",latin:"a"},{cyrillic:"б",armenian:"բ",latin:"b"},{cyrillic:"в",armenian:"վ",latin:"v"},{cyrillic:"г",armenian:"գ",latin:"g"},{cyrillic:"д",armenian:"դ",latin:"d"},{cyrillic:"е",armenian:"ե",latin:"e"},{cyrillic:"ж",armenian:"ժ",latin:"zh"},{cyrillic:"з",armenian:"զ",latin:"z"},{cyrillic:"и",armenian:"ի",latin:"i"},{cyrillic:"й",armenian:"յ",latin:"y"},{cyrillic:"к",armenian:"կ",latin:"k"},{cyrillic:"л",armenian:"լ",latin:"l"},{cyrillic:"м",armenian:"մ",latin:"m"},{cyrillic:"н",armenian:"ն",latin:"n"},{cyrillic:"о",armenian:"օ",latin:"o"},{cyrillic:"п",armenian:"պ",latin:"p"},{cyrillic:"р",armenian:"ր",latin:"r"},{cyrillic:"с",armenian:"ս",latin:"s"},{cyrillic:"т",armenian:"տ",latin:"t"},{cyrillic:"у",armenian:"ւ",latin:"w"},{cyrillic:"ф",armenian:"ֆ",latin:"f"},{cyrillic:"х",armenian:"խ",latin:"kh"},{cyrillic:"х",armenian:"հ",latin:"h",option:"Х(h)"},{cyrillic:"ц",armenian:"ց",latin:"ts"},{cyrillic:"ч",armenian:"չ",latin:"ch"},{cyrillic:"ш",armenian:"շ",latin:"sh"},{cyrillic:"щ",armenian:"շչ",latin:"sch"},{cyrillic:"ы",armenian:"ը",latin:"ə"},{cyrillic:"э",armenian:"ե",latin:"e",latin_option:"E(ɛ)"},{cyrillic:"ю",armenian:"յւ",latin:"yu"},{cyrillic:"я",armenian:"յա",latin:"ya"},{cyrillic:"сc",armenian:"թ",latin:"th"},{cyrillic:"тс",armenian:"ծ",latin:"tch"},{cyrillic:"дз",armenian:"ձ",latin:"dz"},{cyrillic:"х",armenian:"ղ",latin:"r",latin_option:"ġ",option:"Х(г)"},{cyrillic:"тш",armenian:"ճ",latin:"tsh"},{cyrillic:"дж",armenian:"շ",latin:"j"},{cyrillic:"пх",armenian:"փ",latin:"ph"},{cyrillic:"кх",armenian:"ք",latin:"kh"},{cyrillic:"ев",armenian:"և",latin:"ev"},{cyrillic:"о",latin:"wo",armenian:"ո",option:"(В)о"},]},9534:function(a,b,c){"use strict";function d(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}c.d(b,{Z:function(){return d}})}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])