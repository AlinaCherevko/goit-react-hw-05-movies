"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[617],{617:function(e,r,n){n.r(r),n.d(r,{default:function(){return z}});var t=n(861),s=n(439),a=n(687),i=n.n(a),c=n(791),l=n(689),o=n(87),u=n(545),p={personImg:"Cast_personImg__po58H",personWrap:"Cast_personWrap__MpuWf",personName:"Cast_personName__y5ayY",personList:"Cast_personList__vgxa9",personItem:"Cast_personItem__xv-rk"},d=n(184),f=function(e){var r=e.id,n=(0,c.useState)([]),a=(0,s.Z)(n,2),l=a[0],o=a[1];return(0,c.useEffect)((function(){if(r){var e=function(){var e=(0,t.Z)(i().mark((function e(){var n,t,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.wi)(r);case 2:n=e.sent,t=n.data,s=t.cast,o(s);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[r]),(0,d.jsxs)("div",{children:[(0,d.jsx)("ul",{className:p.personList,children:Array.isArray(l)&&l.map((function(e){return(0,d.jsxs)("li",{className:p.personItem,children:[(0,d.jsx)("img",{className:p.personImg,src:e.profile_path?"https://image.tmdb.org/t/p/original"+e.profile_path:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e.name}),(0,d.jsxs)("div",{className:p.personWrap,children:[(0,d.jsx)("p",{className:p.personName,children:e.name}),(0,d.jsx)("p",{className:p.person,children:e.character})]})]},e.id)}))})," "]})},h="Reviews_reviewList__uMBar",m="Reviews_reviewTitle__-9Xsn",v="Reviews_review__sHbuN",x=function(e){var r=e.id,n=(0,c.useState)([]),a=(0,s.Z)(n,2),l=a[0],o=a[1];return(0,c.useEffect)((function(){if(r){var e=function(){var e=(0,t.Z)(i().mark((function e(){var n,t,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Jq)(r);case 2:n=e.sent,t=n.data,s=t.results,o(s);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[r]),(0,d.jsx)("div",{children:0!==l.length?(0,d.jsx)("ul",{className:h,children:Array.isArray(l)&&l.map((function(e){return(0,d.jsxs)("li",{children:[(0,d.jsx)("p",{className:m,children:e.author}),(0,d.jsx)("p",{className:v,children:e.content})]},e.id)}))}):(0,d.jsx)("p",{className:m,children:"We dont have any reviews for this movie"})})},_="FilmDetails_detailsWrapper__fEl3k",g="FilmDetails_detailsImage__-yyxN",j="FilmDetails_detailsWrapperText__RXE6b",N="FilmDetails_detailsTitle__DFmbO",w="FilmDetails_detailsDescription__ZzZ-R",y="FilmDetails_detailsAfterTitle__Il60z",k="Genres_genresList__uSAcY",Z="Genres_description__IIl+R",b=function(e){var r=e.genresArray;return console.log(r),(0,d.jsx)("ul",{className:k,children:Array.isArray(r)&&r.slice(0,2).map((function(e){return(0,d.jsx)("li",{className:Z,children:e.name},e.id)}))})},I=function(e){var r=e.results,n=Math.floor(10*r.vote_average);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)("img",{className:g,src:"https://image.tmdb.org/t/p/original"+r.poster_path,alt:r.title}),(0,d.jsxs)("div",{className:j,children:[(0,d.jsx)("h2",{className:N,children:r.title}),(0,d.jsxs)("p",{className:y,children:["Release Date"," ",(0,d.jsx)("span",{className:w,children:r.release_date})]}),(0,d.jsxs)("p",{className:y,children:["User rating:",(0,d.jsxs)("span",{className:w,children:[" ",n,"%"]})]}),(0,d.jsx)("p",{className:y,children:"Overview"}),(0,d.jsx)("span",{className:w,children:r.overview}),(0,d.jsx)("p",{className:y,children:"Genres"}),(0,d.jsx)(b,{genresArray:r.genres}),r.tagline&&(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:y,children:"Tagline"}),(0,d.jsx)("span",{className:w,children:r.tagline})]})]})]}),(0,d.jsx)("div",{})]})},M=n(854),D="MoviePageDetails_infoWrap__Ln64g",A="MoviePageDetails_infoTitle__hDee2",W="MoviePageDetails_infoWrapLinks__F9k40",U="MoviePageDetails_goBackLink__oVfH2",Y="MoviePageDetails_link__GyVO0",z=function(){var e,r,n=(0,l.UO)().movieId,a=(0,l.TH)();console.log(a);var p=(0,c.useRef)(null!==(e=null===(r=a.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),h=(0,c.useState)(""),m=(0,s.Z)(h,2),v=m[0],_=m[1];return(0,c.useEffect)((function(){if(!v){var e=function(){var e=(0,t.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.M4)(n);case 3:r=e.sent,t=r.data,_(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[n,v]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.rU,{className:U,to:p.current,children:"Go Back"}),(0,d.jsx)(I,{results:v}),(0,d.jsxs)("div",{className:D,children:[(0,d.jsx)("p",{className:A,children:"Additional information"}),(0,d.jsxs)("div",{className:W,children:[(0,d.jsx)(o.rU,{to:"cast",children:(0,d.jsx)("p",{className:Y,children:"Cast"})}),(0,d.jsx)(o.rU,{to:"reviews",children:(0,d.jsx)("p",{className:Y,children:"Reviews"})})]})]}),(0,d.jsx)(c.Suspense,{fallback:(0,d.jsx)(M.a,{}),children:(0,d.jsxs)(l.Z5,{children:[(0,d.jsx)(l.AW,{path:"cast",element:(0,d.jsx)(f,{id:v.id})}),(0,d.jsx)(l.AW,{path:"reviews",element:(0,d.jsx)(x,{id:v.id})})]})})]})}},545:function(e,r,n){n.d(r,{Jq:function(){return m},M4:function(){return p},Qh:function(){return o},Yu:function(){return c},wi:function(){return f}});var t=n(861),s=n(687),a=n.n(s),i=n(340);function c(){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(a().mark((function e(){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?language=en-US");case 2:return r=e.sent,n=r.data,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(r,"&language=en-US"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(r,"?language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(r,"/credits?language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(r,"/reviews?language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=(0,t.Z)(a().mark((function e(r){var n,t,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(r,"/videos"));case 2:if(n=e.sent,t=n.data,s=t.results,console.log(s),0!==s.length){e.next=8;break}return e.abrupt("return");case 8:if(c=s.filter((function(e){return"Trailer"===e.type&&"YouTube"===e.site})),console.log(c),0!==c.length){e.next=12;break}return e.abrupt("return");case 12:console.log(c[0]);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzNkMWNlMGNiNmEzYWMzYzFkYjM4ZDM3N2I4MjRlZiIsInN1YiI6IjY0ODYzMjhlMDI4ZjE0MDEzYjg2MmZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HoABGc9RClt9cVwg4PCMlGrDzSxlVjcxQL3XcwPvhY0",function(e){x.apply(this,arguments)}(496243)}}]);
//# sourceMappingURL=617.442d44f0.chunk.js.map