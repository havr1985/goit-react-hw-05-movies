"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[400],{7623:function(t,n,r){r.d(n,{Bt:function(){return d},Mc:function(){return u},pf:function(){return x},rA:function(){return o},y:function(){return h}});var e=r(5861),a=r(7757),i=r.n(a),c=r(1243);function o(t,n){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(i().mark((function t(n,r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending//movie/week?page=".concat(n),r);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t,n){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(i().mark((function t(n,r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n),r);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(i().mark((function t(n,r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"),r);case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(i().mark((function t(n,r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),r);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,n,r){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(i().mark((function t(n,r,e){var a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&page=").concat(r),e);case 2:return a=t.sent,t.abrupt("return",a.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},7400:function(t,n,r){r.r(n),r.d(n,{default:function(){return I}});var e,a,i,c,o,s=r(5861),u=r(9439),p=r(7757),h=r.n(p),f=r(7689),d=r(2791),l=r(7623),x=r(168),m=r(5867),v=m.ZP.ul(e||(e=(0,x.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\ngap: 10px;\nmargin-top: 20px;\npadding-bottom: 20px;\n"]))),g=m.ZP.li(a||(a=(0,x.Z)(["\nwidth: 200px;\nborder: 1px solid black;\nborder-radius: 8px;\n"]))),Z=m.ZP.img(i||(i=(0,x.Z)(["\nheight: 300px;\nborder-top-left-radius: 8px;\nborder-top-right-radius: 8px;\n"]))),b=m.ZP.div(c||(c=(0,x.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\nalign-items: start;\npadding: 5px;\n"]))),w=m.ZP.span(o||(o=(0,x.Z)(["\nfont-weight: 700;\n"]))),y=r(184),j=function(t){var n=t.cast;return(0,y.jsx)(v,{children:n.map((function(t){var n=t.original_name,r=t.character,e=t.profile_path,a=t.cast_id,i="";return i=e?"https://image.tmdb.org/t/p/w200/".concat(e):"https://ranobehub.org/img/ranobe/posters/default.jpg",(0,y.jsxs)(g,{children:[(0,y.jsx)(Z,{src:i,alt:n}),(0,y.jsxs)(b,{children:[(0,y.jsxs)("p",{children:["NAME: ",(0,y.jsx)(w,{children:n})," "]}),(0,y.jsxs)("p",{children:["CHARACTER: ",(0,y.jsx)(w,{children:r})]})]})]},a)}))})},k=r(2661);function I(){var t=(0,f.UO)(),n=(0,d.useState)(),r=(0,u.Z)(n,2),e=r[0],a=r[1],i=(0,d.useState)(!1),c=(0,u.Z)(i,2),o=c[0],p=c[1];return(0,d.useEffect)((function(){var n=new AbortController,r={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjcxYWI2NDE1ZTQzMmI4NzliOWYyZGExZmVmNzMzNiIsInN1YiI6IjY0ZjczOTllZmZjOWRlMDBhYzRmMTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxoO5UBzcSO6Jwoana0Pbke2nBChrIK0Dhb7VVA5Bbw"},signal:n.signal};function e(){return(e=(0,s.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!1),n.next=4,(0,l.y)(t.movieId,r);case 4:e=n.sent,a(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&p(!0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){n.abort()}}),[t.movieId]),(0,y.jsxs)("div",{children:[o&&(0,y.jsx)(k.C,{}),e&&(0,y.jsx)(j,{cast:e})]})}},2661:function(t,n,r){r.d(n,{C:function(){return o}});var e,a=r(168),i=r(5867).ZP.div(e||(e=(0,a.Z)(["\nmargin: 10px auto;\ncolor: red;\nfont-size: 22px;\nfont-weight: 700;\n"]))),c=r(184),o=function(){return(0,c.jsx)(i,{children:"Whoops! Error! Please reload this page!"})}}}]);
//# sourceMappingURL=400.cfd2632b.chunk.js.map