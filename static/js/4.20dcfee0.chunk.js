(this["webpackJsonpmovie-list"]=this["webpackJsonpmovie-list"]||[]).push([[4],{63:function(e,t,n){"use strict";n.r(t);var a=n(39),c=n.n(a),s=n(41),r=n(61),i=n(42),o=n.n(i),l=n(0),u=n.n(l),b=n(11),f=b.c,j=n(6),d=n(10),p=n(1),v=function(e){var t=e.length,n=e.index,a=e.finalMovieElementRef,c=e.movieData;return Object(p.jsxs)("div",{ref:t===n+3?a:null,children:[Object(p.jsx)("img",{alt:c.name,src:"/assets/Slices/".concat(c.img),onError:function(e){return function(e){e.target.src="/assets/Slices/placeholder_for_missing_posters.png"}(e)}}),Object(p.jsx)("span",{className:"font-thin text-base",children:c.name})]},n)},m=u.a.memo(v);t.default=function(){var e=f((function(e){return e.movieList.movies})),t=Object(b.b)(),n=Object(l.useState)(1),a=Object(r.a)(n,2),i=a[0],u=a[1],v=Object(l.useState)(0),h=Object(r.a)(v,2),g=h[0],O=h[1],x=Object(l.useState)(0),w=Object(r.a)(x,2),N=w[0],S=w[1],y=Object(l.useState)(!1),E=Object(r.a)(y,2),k=E[0],I=E[1],T=Object(l.useRef)(),A=Object(l.useState)(""),C=Object(r.a)(A,2),P=C[0],G=C[1],M=Object(l.useState)(!0),_=Object(r.a)(M,2),L=_[0],R=_[1],D=Object(l.useState)(!1),J=Object(r.a)(D,2),q=J[0],z=J[1],B=Object(l.useState)(""),F=Object(r.a)(B,2),U=F[0],H=F[1],K=Object(l.useCallback)((function(e){var t;L||(T.current&&T.current.disconnect(),T.current=new IntersectionObserver((function(e){e[0].isIntersecting&&q&&u((function(e){return e+1}))})),e&&(null===(t=T.current)||void 0===t||t.observe(e)))}),[L,q]);Object(l.useEffect)((function(){if(!L){var e=setTimeout((function(){W()}),1e3);return function(){return clearTimeout(e)}}}),[P]),Object(l.useEffect)((function(){Q()}),[i]),Object(l.useEffect)((function(){P||(R(!1),z(e.length<g))}),[e]);var Q=function(){R(!0),o.a.get("/assets/API/CONTENTLISTINGPAGE-PAGE".concat(i,".json")).then((function(e){var n,a;H(e.data.page.title),O(e.data.page["total-content-items"]),S(e.data.page["page-size-requested"]),t(j.a.update((null===e||void 0===e||null===(n=e.data)||void 0===n||null===(a=n.page["content-items"])||void 0===a?void 0:a.content)?e.data.page["content-items"].content:[]))})).catch((function(e){R(!1),z(!1)}))};function V(){for(var e=1,t=[];e*N-g<N;)t.push(e),e++;return t}var W=function(){var e=Object(s.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),t(j.a.reset()),n=V(),e.next=5,Promise.all(n.map(function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/assets/API/CONTENTLISTINGPAGE-PAGE".concat(n,".json")).then((function(e){var n,a;t(j.a.update((null===e||void 0===e||null===(n=e.data)||void 0===n||null===(a=n.page["content-items"])||void 0===a?void 0:a.content)?e.data.page["content-items"].content:[]))})).catch((function(e){R(!1),z(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:t(j.a.searchUpdate(P)),R(!1),z(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(k||e)&&(R(!0),G(""),e&&I(!1),t(j.a.reset()),1==i?Q():u(1))};return Object(p.jsxs)("div",{className:" h-screen w-screen relative text-white font-body",style:{backgroundColor:"#171717"},children:[Object(p.jsxs)("div",{style:{backgroundImage:"url(/assets/Slices/nav_bar.png)"},className:"absolute inset-x-0 top-0 flex justify-between p-4 bg-no-repeat bg-contain bg-top w-full h-16",children:[Object(p.jsxs)("div",{className:"flex items-center w-3/5",children:[Object(p.jsx)("button",{className:"w-5",onClick:function(){return X(!0)},children:Object(p.jsx)("img",{className:"object-contain h-5 w-5",src:"/assets/Slices/Back.png"})}),Object(p.jsx)("span",{className:"ml-1 text-xl font-light whitespace-nowrap",children:U})]}),Object(p.jsxs)("div",{className:"flex items-center w-3/5 ml-1  text-gray-300 relative rounded-full p-2 border-2 ".concat(k?"bg-black border-white":"border-transparent"),children:[Object(p.jsx)("input",{type:"text",placeholder:"Search...",value:P,className:"ml-2 w-full bg-transparent outline-none  transition ease-linear ".concat(k?"opacity-1":"opacity-0"),onChange:function(e){return G(e.target.value)}}),Object(p.jsx)("button",{className:"absolute right-0 mr-3 outline-none",onClick:function(){X(),I(!k)},children:Object(p.jsx)("img",{className:"object-contain h-5 w-5",src:"/assets/Slices/search.png"})})]})]}),0==e.length?P?Object(p.jsx)("div",{className:"flex align-middle px-4 h-screen w-auto justify-center pt-20",children:"No Movies Found"}):L?Object(p.jsx)(d.a,{}):Object(p.jsx)("div",{className:"flex align-middle px-4 h-screen w-auto justify-center pt-20",children:"No Movies Available"}):Object(p.jsx)("div",{className:"grid grid-cols-3 gap-4 px-4 h-screen w-auto overflow-y-auto overflow-x-hidden pt-14",children:e.map((function(t,n){return Object(p.jsx)(m,{length:e.length,index:n,finalMovieElementRef:K,movieData:t})}))})]})}}}]);
//# sourceMappingURL=4.20dcfee0.chunk.js.map