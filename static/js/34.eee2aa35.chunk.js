"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[34],{7623:function(n,t,e){e.d(t,{Bt:function(){return f},Mc:function(){return u},pf:function(){return h},rA:function(){return s},y:function(){return l}});var r=e(5861),o=e(7757),i=e.n(o),a=e(1243);function s(n,t){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/trending//movie/week?page=".concat(t),e);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n,t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t),e);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),e);case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),e);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t,e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t,e,r){var o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&page=").concat(e),r);case 2:return o=n.sent,n.abrupt("return",o.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},2661:function(n,t,e){e.d(t,{C:function(){return s}});var r,o=e(168),i=e(5867).ZP.div(r||(r=(0,o.Z)(["\nmargin: 10px auto;\ncolor: red;\nfont-size: 22px;\nfont-weight: 700;\n"]))),a=e(184),s=function(){return(0,a.jsx)(i,{children:"Whoops! Error! Please reload this page!"})}},3300:function(n,t,e){e.d(t,{f:function(){return p}});var r,o,i=e(168),a=e(5867),s=a.ZP.div(r||(r=(0,i.Z)(["\ndisplay: block;\ntext-align: center;\nmargin-top: 20px;\nmargin-bottom: 20px;\n"]))),c=a.ZP.button(o||(o=(0,i.Z)(["\nborder: 0;\nborder: 1px solid black;\nborder-radius: 8px;\npadding: 8px 16px;\nborder-radius: 2px;\nbackground-color: white;\ntransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\ntext-align: center;\nfont-size: 18px;\nline-height: 24px;\nfont-style: normal;\nfont-weight: 500;\nmin-width: 180px;\n\n&:hover{\n    background-color: black;\n    color: white;\n}\n"]))),u=e(184),p=function(n){var t=n.onClick;return(0,u.jsx)(s,{children:(0,u.jsx)(c,{type:"button",onClick:t,children:"Load more"})})}},7918:function(n,t,e){e.d(t,{O:function(){return x}});var r,o,i,a,s,c=e(168),u=e(5867),p=u.ZP.li(r||(r=(0,c.Z)(["\nwidth: 200px;\nborder: 1px solid black;\nborder-radius: 8px;\nbackground-color: white;\n&:hover{\n    transform: translateY(-5px);\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n}\n"]))),l=u.ZP.ul(o||(o=(0,c.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\ngap: 20px;\nmargin-top: 30px;\n"]))),d=e(7689),f=e(1087),m=u.ZP.div(i||(i=(0,c.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\nalign-items: center;\n"]))),h=u.ZP.img(a||(a=(0,c.Z)(["\nwidth: 200px;\nheight: 300px;\nborder-top-left-radius: 8px;\nborder-top-right-radius: 8px;\n"]))),g=u.ZP.p(s||(s=(0,c.Z)(["\npadding-bottom: 10px;\ncolor: black;\nfont-weight: 700;\ntext-align: center;\n"]))),v=e(184),b=function(n){var t=n.movie,e=t.original_title,r=t.poster_path,o=t.id,i=(0,d.TH)(),a="";return a=r?"https://image.tmdb.org/t/p/w200/".concat(r):"https://ranobehub.org/img/ranobe/posters/default.jpg",(0,v.jsx)(f.rU,{to:"/movies/".concat(o),state:{from:i},children:(0,v.jsxs)(m,{children:[(0,v.jsx)(h,{src:a,alt:e}),(0,v.jsx)(g,{children:e})]})})},x=function(n){var t=n.movies;return(0,v.jsx)(l,{children:t.map((function(n){return(0,v.jsx)(p,{children:(0,v.jsx)(b,{movie:n})},n.id)}))})}},9034:function(n,t,e){e.r(t),e.d(t,{default:function(){return qn}});var r,o,i,a,s=e(3433),c=e(5861),u=e(9439),p=e(7757),l=e.n(p),d=e(1087),f=e(2791),m=e(7623),h=e(168),g=e(5867),v=g.ZP.div(r||(r=(0,h.Z)(["\ndisplay: flex;\njustify-content: center;\nmargin-top: 10px;\n"]))),b=g.ZP.form(o||(o=(0,h.Z)(["\ndisplay: flex;\nalign-items: center;\nwidth: 100%;\nmax-width: 600px;\nbackground-color: #fff;\nborder-radius: 3px;\noverflow: hidden;\n"]))),x=g.ZP.button(i||(i=(0,h.Z)(["\ndisplay: inline-block;\nwidth: 48px;\nheight: 48px;\nborder: 0;\nopacity: 0.6;\ntransition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\ncursor: pointer;\noutline: none;\n"]))),y=g.ZP.input(a||(a=(0,h.Z)(["\n display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder{\n    font: inherit;\n  font-size: 18px;\n  }\n"]))),w=e(8185),Z=e(184),j=function(n){var t=n.onSubmit;return(0,Z.jsx)(v,{children:(0,Z.jsxs)(b,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,r=e.elements.search.value;t(r),e.reset()},children:[(0,Z.jsx)(y,{name:"search",type:"text",placeholder:"Enter movie name"}),(0,Z.jsx)(x,{type:"submit",children:(0,Z.jsx)(w.dVI,{size:25})})]})})},k=e(7918),O=e(3300),E=e(2661),P=e(7658);function z(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function C(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function I(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?C(Object(e),!0).forEach((function(t){z(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):C(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var N={data:""},D=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||N},A=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,S=/\/\*[^]*?\*\/|  +/g,M=/\n+/g,T=function n(t,e){var r="",o="",i="",a=function(a){var c=t[a];"@"==a[0]?"i"==a[1]?r=a+" "+c+";":o+="f"==a[1]?n(c,a):a+"{"+n(c,"k"==a[1]?"":e)+"}":"object"==typeof c?o+=n(c,e?e.replace(/([^,])+/g,(function(n){return a.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):a):null!=c&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=n.p?n.p(a,c):a+":"+c+";"),s=a};for(var s in t)a(s);return r+(e&&i?e+"{"+i+"}":i)+o},J={},_=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},B=function(n,t,e,r,o){var i=_(n),a=J[i]||(J[i]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(i));if(!J[a]){var s=i!==n?n:function(n){for(var t,e,r=[{}];t=A.exec(n.replace(S,""));)t[4]?r.shift():t[3]?(e=t[3].replace(M," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(M," ").trim();return r[0]}(n);J[a]=T(o?z({},"@keyframes "+a,s):s,e?"":"."+a)}var c=e&&J.g?J.g:null;return e&&(J.g=J[a]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(J[a],t,r,c),a},W=function(n,t,e){return n.reduce((function(n,r,o){var i=t[o];if(i&&i.call){var a=i(e),s=a&&a.props&&a.props.className||/^go/.test(a)&&a;i=s?"."+s:a&&"object"==typeof a?a.props?"":T(a,""):!1===a?"":a}return n+r+(null==i?"":i)}),"")};function L(n){var t=this||{},e=n.call?n(t.p):n;return B(e.unshift?e.raw?W(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,D(t.target),t.g,t.o,t.k)}L.bind({g:1});var Y,H,F,R,U,V,q,G,Q,K,X,$,nn,tn,en,rn,on,an,sn,cn=L.bind({k:1});function un(n,t){var e=this||{};return function(){var r=arguments;function o(i,a){var s=Object.assign({},i),c=s.className||o.className;e.p=Object.assign({theme:H&&H()},s),e.o=/ *go\d+/.test(c),s.className=L.apply(e,r)+(c?" "+c:""),t&&(s.ref=a);var u=n;return n[0]&&(u=s.as||n,delete s.as),F&&u[0]&&F(s),Y(u,s)}return t?t(o):o}}var pn=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},ln=function(){var n=0;return function(){return(++n).toString()}}(),dn=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),fn=new Map,mn=function(n){if(!fn.has(n)){var t=setTimeout((function(){fn.delete(n),bn({type:4,toastId:n})}),1e3);fn.set(n,t)}},hn=function n(t,e){switch(e.type){case 0:return I(I({},t),{},{toasts:[e.toast].concat((0,s.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=fn.get(n);t&&clearTimeout(t)}(e.toast.id),I(I({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?I(I({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var o=e.toastId;return o?mn(o):t.toasts.forEach((function(n){mn(n.id)})),I(I({},t),{},{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?I(I({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?I(I({},t),{},{toasts:[]}):I(I({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return I(I({},t),{},{pausedAt:e.time});case 6:var i=e.time-(t.pausedAt||0);return I(I({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return I(I({},n),{},{pauseDuration:n.pauseDuration+i})}))})}},gn=[],vn={toasts:[],pausedAt:void 0},bn=function(n){vn=hn(vn,n),gn.forEach((function(n){n(vn)}))},xn={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},yn=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return I(I({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||ln()})}(t,n,e);return bn({type:2,toast:r}),r.id}},wn=function(n,t){return yn("blank")(n,t)};wn.error=yn("error"),wn.success=yn("success"),wn.loading=yn("loading"),wn.custom=yn("custom"),wn.dismiss=function(n){bn({type:3,toastId:n})},wn.remove=function(n){return bn({type:4,toastId:n})},wn.promise=function(n,t,e){var r=wn.loading(t.loading,I(I({},e),null==e?void 0:e.loading));return n.then((function(n){return wn.success(pn(t.success,n),I(I({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){wn.error(pn(t.error,n),I(I({id:r},e),null==e?void 0:e.error))})),n};var Zn=function(n,t){bn({type:1,toast:{id:n,height:t}})},jn=function(){bn({type:5,time:Date.now()})},kn=function(n){var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,f.useState)(vn),e=(0,u.Z)(t,2),r=e[0],o=e[1];(0,f.useEffect)((function(){return gn.push(o),function(){var n=gn.indexOf(o);n>-1&&gn.splice(n,1)}}),[r]);var i=r.toasts.map((function(t){var e,r;return I(I(I(I({},n),n[t.type]),t),{},{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==n?void 0:n.duration)||xn[t.type],style:I(I(I({},n.style),null==(r=n[t.type])?void 0:r.style),t.style)})}));return I(I({},r),{},{toasts:i})}(n),e=t.toasts,r=t.pausedAt;(0,f.useEffect)((function(){if(!r){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return wn.dismiss(t.id)}),e);t.visible&&wn.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,r]);var o=(0,f.useCallback)((function(){r&&bn({type:6,time:Date.now()})}),[r]),i=(0,f.useCallback)((function(n,t){var r,o=t||{},i=o.reverseOrder,a=void 0!==i&&i,c=o.gutter,u=void 0===c?8:c,p=o.defaultPosition,l=e.filter((function(t){return(t.position||p)===(n.position||p)&&t.height})),d=l.findIndex((function(t){return t.id===n.id})),f=l.filter((function(n,t){return t<d&&n.visible})).length;return(r=l.filter((function(n){return n.visible}))).slice.apply(r,(0,s.Z)(a?[f+1]:[0,f])).reduce((function(n,t){return n+(t.height||0)+u}),0)}),[e]);return{toasts:e,handlers:{updateHeight:Zn,startPause:jn,endPause:o,calculateOffset:i}}},On=cn(R||(R=(0,h.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),En=cn(U||(U=(0,h.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Pn=cn(V||(V=(0,h.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),zn=un("div")(q||(q=(0,h.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),On,En,(function(n){return n.secondary||"#fff"}),Pn),Cn=cn(G||(G=(0,h.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),In=un("div")(Q||(Q=(0,h.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),Cn),Nn=cn(K||(K=(0,h.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),Dn=cn(X||(X=(0,h.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),An=un("div")($||($=(0,h.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),Nn,Dn,(function(n){return n.secondary||"#fff"})),Sn=un("div")(nn||(nn=(0,h.Z)(["\n  position: absolute;\n"]))),Mn=un("div")(tn||(tn=(0,h.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),Tn=cn(en||(en=(0,h.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Jn=un("div")(rn||(rn=(0,h.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),Tn),_n=function(n){var t=n.toast,e=t.icon,r=t.type,o=t.iconTheme;return void 0!==e?"string"==typeof e?f.createElement(Jn,null,e):e:"blank"===r?null:f.createElement(Mn,null,f.createElement(In,I({},o)),"loading"!==r&&f.createElement(Sn,null,"error"===r?f.createElement(zn,I({},o)):f.createElement(An,I({},o))))},Bn=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},Wn=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},Ln=un("div")(on||(on=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Yn=un("div")(an||(an=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Hn=f.memo((function(n){var t=n.toast,e=n.position,r=n.style,o=n.children,i=t.height?function(n,t){var e=n.includes("top")?1:-1,r=dn()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Bn(e),Wn(e)],o=(0,u.Z)(r,2),i=o[0],a=o[1];return{animation:t?"".concat(cn(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(cn(a)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},a=f.createElement(_n,{toast:t}),s=f.createElement(Yn,I({},t.ariaProps),pn(t.message,t));return f.createElement(Ln,{className:t.className,style:I(I(I({},i),r),t.style)},"function"==typeof o?o({icon:a,message:s}):f.createElement(f.Fragment,null,a,s))}));!function(n,t,e,r){T.p=t,Y=n,H=e,F=r}(f.createElement);var Fn=function(n){var t=n.id,e=n.className,r=n.style,o=n.onHeightUpdate,i=n.children,a=f.useCallback((function(n){if(n){var e=function(){var e=n.getBoundingClientRect().height;o(t,e)};e(),new MutationObserver(e).observe(n,{subtree:!0,childList:!0,characterData:!0})}}),[t,o]);return f.createElement("div",{ref:a,className:e,style:r},i)},Rn=L(sn||(sn=(0,h.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Un=function(n){var t=n.reverseOrder,e=n.position,r=void 0===e?"top-center":e,o=n.toastOptions,i=n.gutter,a=n.children,s=n.containerStyle,c=n.containerClassName,u=kn(o),p=u.toasts,l=u.handlers;return f.createElement("div",{style:I({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:c,onMouseEnter:l.startPause,onMouseLeave:l.endPause},p.map((function(n){var e=n.position||r,o=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return I(I({left:0,right:0,display:"flex",position:"absolute",transition:dn()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(e?1:-1),"px)")},r),o)}(e,l.calculateOffset(n,{reverseOrder:t,gutter:i,defaultPosition:r}));return f.createElement(Fn,{id:n.id,key:n.id,onHeightUpdate:l.updateHeight,className:n.visible?Rn:"",style:o},"custom"===n.type?pn(n.message,n):a?a(n):f.createElement(Hn,{toast:n,position:e}))})))},Vn=wn;function qn(){var n,t=(0,d.lr)(),e=(0,u.Z)(t,2),r=e[0],o=e[1],i=null!==(n=r.get("name"))&&void 0!==n?n:"",a=(0,f.useState)([]),p=(0,u.Z)(a,2),h=p[0],g=p[1],v=(0,f.useState)(1),b=(0,u.Z)(v,2),x=b[0],y=b[1],w=(0,f.useState)(!1),z=(0,u.Z)(w,2),C=z[0],I=z[1],N=(0,f.useState)(!1),D=(0,u.Z)(N,2),A=D[0],S=D[1];return(0,f.useEffect)((function(){if(""!==i){var n=new AbortController,t={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjcxYWI2NDE1ZTQzMmI4NzliOWYyZGExZmVmNzMzNiIsInN1YiI6IjY0ZjczOTllZmZjOWRlMDBhYzRmMTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxoO5UBzcSO6Jwoana0Pbke2nBChrIK0Dhb7VVA5Bbw"},signal:n.signal};return function(){e.apply(this,arguments)}(),function(){n.abort()}}function e(){return(e=(0,c.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,I(!0),S(!1),n.next=5,(0,m.pf)(i,x,t);case 5:if((e=n.sent).length){n.next=11;break}return Vn.error("No movie was found for your request. Try again!"),n.abrupt("return");case 11:Vn.success("We found many movies according to your request!!!");case 12:g((function(n){return[].concat((0,s.Z)(n),(0,s.Z)(e))})),n.next=19;break;case 15:n.prev=15,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&S(!0);case 19:return n.prev=19,I(!1),n.finish(19);case 22:case"end":return n.stop()}}),n,null,[[0,15,19,22]])})))).apply(this,arguments)}}),[i,x]),(0,Z.jsxs)("main",{children:[(0,Z.jsx)(j,{onSubmit:function(n){o({name:n}),g([]),y(1)}}),C&&(0,Z.jsx)(P.s,{}),A&&(0,Z.jsx)(E.C,{}),(0,Z.jsx)(k.O,{movies:h}),h.length>0&&(0,Z.jsx)(O.f,{onClick:function(){y((function(n){return n+1}))}}),(0,Z.jsx)(Un,{position:"top-right"})]})}}}]);
//# sourceMappingURL=34.eee2aa35.chunk.js.map