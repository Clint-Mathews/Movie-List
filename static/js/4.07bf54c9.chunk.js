(this["webpackJsonpmovie-list"]=this["webpackJsonpmovie-list"]||[]).push([[4],{63:function(e,t,n){"use strict";n.r(t);var c=n(39),a=n.n(c),s=n(41),r=n(61),i=n(42),o=n.n(i),l=n(0),u=n.n(l),b=n(11),f=b.c,d=n(6),j=n(10),p=n(1),v=function(e){var t=e.length,n=e.index,c=e.finalMovieElementRef,a=e.movieData,s=e.url;return Object(p.jsxs)("div",{ref:t===n+3?c:null,children:[Object(p.jsx)("img",{alt:a.name,src:"".concat(s,"/assets/Slices/").concat(a.img),onError:function(e){return function(e){e.target.src="".concat(s,"/assets/Slices/placeholder_for_missing_posters.png")}(e)}}),Object(p.jsx)("span",{className:"font-thin text-base",children:a.name})]},n)},m=u.a.memo(v);t.default=function(){var e=window.location.href,t=f((function(e){return e.movieList.movies})),n=Object(b.b)(),c=Object(l.useState)(1),i=Object(r.a)(c,2),u=i[0],v=i[1],h=Object(l.useState)(0),g=Object(r.a)(h,2),O=g[0],x=g[1],w=Object(l.useState)(0),N=Object(r.a)(w,2),S=N[0],y=N[1],E=Object(l.useState)(!1),k=Object(r.a)(E,2),I=k[0],T=k[1],A=Object(l.useRef)(),C=Object(l.useState)(""),P=Object(r.a)(C,2),G=P[0],M=P[1],_=Object(l.useState)(!0),L=Object(r.a)(_,2),R=L[0],D=L[1],J=Object(l.useState)(!1),q=Object(r.a)(J,2),z=q[0],B=q[1],F=Object(l.useState)(""),U=Object(r.a)(F,2),H=U[0],K=U[1],Q=Object(l.useCallback)((function(e){var t;R||(A.current&&A.current.disconnect(),A.current=new IntersectionObserver((function(e){e[0].isIntersecting&&z&&v((function(e){return e+1}))})),e&&(null===(t=A.current)||void 0===t||t.observe(e)))}),[R,z]);Object(l.useEffect)((function(){if(!R){var e=setTimeout((function(){X()}),1e3);return function(){return clearTimeout(e)}}}),[G]),Object(l.useEffect)((function(){V()}),[u]),Object(l.useEffect)((function(){G||(D(!1),B(t.length<O))}),[t]);var V=function(){D(!0),o.a.get("".concat(e,"/assets/API/CONTENTLISTINGPAGE-PAGE").concat(u,".json")).then((function(e){var t,c;K(e.data.page.title),x(e.data.page["total-content-items"]),y(e.data.page["page-size-requested"]),n(d.a.update((null===e||void 0===e||null===(t=e.data)||void 0===t||null===(c=t.page["content-items"])||void 0===c?void 0:c.content)?e.data.page["content-items"].content:[]))})).catch((function(e){D(!1),B(!1)}))};function W(){for(var e=1,t=[];e*S-O<S;)t.push(e),e++;return t}var X=function(){var t=Object(s.a)(a.a.mark((function t(){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D(!0),n(d.a.reset()),c=W(),t.next=5,Promise.all(c.map(function(){var t=Object(s.a)(a.a.mark((function t(c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(e,"/assets/API/CONTENTLISTINGPAGE-PAGE").concat(c,".json")).then((function(e){var t,c;n(d.a.update((null===e||void 0===e||null===(t=e.data)||void 0===t||null===(c=t.page["content-items"])||void 0===c?void 0:c.content)?e.data.page["content-items"].content:[]))})).catch((function(e){D(!1),B(!1)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 5:n(d.a.searchUpdate(G)),D(!1),B(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(I||e)&&(D(!0),M(""),e&&T(!1),n(d.a.reset()),1==u?V():v(1))};return Object(p.jsxs)("div",{className:" h-screen w-screen relative text-white font-body",style:{backgroundColor:"#171717"},children:[Object(p.jsxs)("div",{style:{backgroundImage:"url(".concat(e,"/assets/Slices/nav_bar.png)")},className:"absolute inset-x-0 top-0 flex justify-between p-4 bg-no-repeat bg-contain bg-top w-full h-16",children:[Object(p.jsxs)("div",{className:"flex items-center w-3/5",children:[Object(p.jsx)("button",{className:"w-5",onClick:function(){return Y(!0)},children:Object(p.jsx)("img",{className:"object-contain h-5 w-5",src:"".concat(e,"/assets/Slices/Back.png")})}),Object(p.jsx)("span",{className:"ml-1 text-xl font-light whitespace-nowrap",children:H})]}),Object(p.jsxs)("div",{className:"flex items-center w-3/5 ml-1  text-gray-300 relative rounded-full p-2 border-2 ".concat(I?"bg-black border-white":"border-transparent"),children:[Object(p.jsx)("input",{type:"text",placeholder:"Search...",value:G,className:"ml-2 w-full bg-transparent outline-none  transition ease-linear ".concat(I?"opacity-1":"opacity-0"),onChange:function(e){return M(e.target.value)}}),Object(p.jsx)("button",{className:"absolute right-0 mr-3 outline-none",onClick:function(){Y(),T(!I)},children:Object(p.jsx)("img",{className:"object-contain h-5 w-5",src:"".concat(e,"/assets/Slices/search.png")})})]})]}),0==t.length?G?Object(p.jsx)("div",{className:"flex align-middle px-4 h-screen w-auto justify-center pt-20",children:"No Movies Found"}):R?Object(p.jsx)(j.a,{}):Object(p.jsx)("div",{className:"flex align-middle px-4 h-screen w-auto justify-center pt-20",children:"No Movies Available"}):Object(p.jsx)("div",{className:"grid grid-cols-3 gap-4 px-4 h-screen w-auto overflow-y-auto overflow-x-hidden pt-14",children:t.map((function(n,c){return Object(p.jsx)(m,{url:e,length:t.length,index:c,finalMovieElementRef:Q,movieData:n})}))})]})}}}]);
//# sourceMappingURL=4.07bf54c9.chunk.js.map