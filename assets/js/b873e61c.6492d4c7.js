"use strict";(self.webpackChunkcode_logg=self.webpackChunkcode_logg||[]).push([[5050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>s});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),g=n,s=m["".concat(c,".").concat(g)]||m[g]||d[g]||l;return a?r.createElement(s,o(o({ref:t},p),{},{components:a})):r.createElement(s,o({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={slug:"architecture",title:"Architecture",author:"MinJeong",author_title:"Software Developer",author_url:"ttps://github.com/SMJminjeong",author_image_url:"https://i.ibb.co/hX6xc0V/MJMW0830.jpg",tags:["software","architecture","Hexagonal"]},o=void 0,i={permalink:"/codeLogg/blog/architecture",source:"@site/blog/architecture.md",title:"Architecture",description:"\u2705 \uc544\ud0a4\ud14d\ucc98\ub780? = Architecture",date:"2023-12-19T10:10:53.091Z",formattedDate:"December 19, 2023",tags:[{label:"software",permalink:"/codeLogg/blog/tags/software"},{label:"architecture",permalink:"/codeLogg/blog/tags/architecture"},{label:"Hexagonal",permalink:"/codeLogg/blog/tags/hexagonal"}],readingTime:2.68,truncated:!1,authors:[{name:"MinJeong",title:"Software Developer",url:"ttps://github.com/SMJminjeong",imageURL:"https://i.ibb.co/hX6xc0V/MJMW0830.jpg"}],prevItem:{title:"Java - calculate",permalink:"/codeLogg/blog/javaCalculate"}},c={authorsImageUrls:[void 0]},u=[{value:"\u2705 \uc544\ud0a4\ud14d\ucc98\ub780? = Architecture",id:"-\uc544\ud0a4\ud14d\ucc98\ub780--architecture",children:[]},{value:"\ud83d\udc49 Hexagonal Architecture?",id:"-hexagonal-architecture",children:[]},{value:"\ud83d\udc49 Advantage",id:"-advantage",children:[]},{value:"\ud83d\udc49 \uad6c\uc131",id:"-\uad6c\uc131",children:[]},{value:"\ud83d\udca5 \ud575\uc2ec \ud83d\udca5",id:"-\ud575\uc2ec-",children:[]}],p={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"-\uc544\ud0a4\ud14d\ucc98\ub780--architecture"},"\u2705 \uc544\ud0a4\ud14d\ucc98\ub780? = Architecture"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ube44\uc988\ub2c8\uc2a4 \uc694\uad6c\uc0ac\ud56d\uc744 \ub9cc\uc871\ud558\ub294\uc2dc\uc2a4\ud15c\uc744 \uad6c\ucd95\ud558\uae30 \uc704\ud574 \uc815\uc758\ud55c \uac83\uc774\uba70 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc124\uacc4\ud558\uae30 \uc704\ud55c \ubaa8\ub378 \ub610\ub294 \ud328\ud134")),(0,n.kt)("h3",{id:"-hexagonal-architecture"},"\ud83d\udc49 Hexagonal Architecture?"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\uc721\uac01\ud615 \uac74\ucd95\ubb3c")," \uc744 \uc758\ubbf8\ud55c\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub808\uc774\uc5b4 \uac04\uc758 \uc6d0\ud558\uc9c0 \uc54a\ub294 \uc885\uc18d\uc131\uc774\ub098 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc73c\ub85c \uc778\ud55c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \ucf54\ub4dc\uc758 \uc624\uc5fc\uacfc \uac19\uc740 \uac1d\uccb4\uc9c0\ud5a5 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc124\uacc4\uc758 \uc54c\ub824\uc9c4 \uad6c\uc870\uc801 \ud568\uc815\uc744 \ud53c\ud558\uae30 \uc704\ud574 \ubc1c\uba85\ub41c \uc544\ud0a4\ud14d\ucc98"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"\ud3ec\ud2b8 \ubc0f \uc5b4\ub311\ud130 \uc544\ud0a4\ud14d\ucc98")," \ub77c\uace0\ub3c4 \ubd88\ub9b0\ub2e4.")),(0,n.kt)("h3",{id:"-advantage"},"\ud83d\udc49 Advantage"),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol"},"\uc544\ud0a4\ud14d\ucc98 \ud655\uc7a5\uc774 \uc6a9\uc774"),(0,n.kt)("li",{parentName:"ol"},"SOLID \uc6d0\uce59\uc744 \uc27d\uac8c \uc801\uc6a9 \uac00\ub2a5"),(0,n.kt)("li",{parentName:"ol"},"\ubaa8\ub4c8 \uc77c\ubd80 \ubc30\ud3ec \uc6a9\uc774"),(0,n.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 \ubaa8\ub4c8\uc744 \uac00\uc9dc\ub85c \ubc14\uafc0 \uc218 \uc788\uc73c\ubbc0\ub85c \ud14c\uc2a4\ud2b8\uac00 \ub354 \uc548\uc815\uc801\uc774\uace0 \uc26c\uc6c0"),(0,n.kt)("li",{parentName:"ol"},"\ub354 \ud070 \ube44\uc988\ub2c8\uc2a4\uc801 \uac00\uce58\ub97c \uac16\uace0 \ub354 \uc624\ub798 \uc9c0\uc18d\ub418\ub294 \ub3c4\uba54\uc778 \ubaa8\ub378\uc5d0 \ud070 \uad00\uc2ec")))),(0,n.kt)("h3",{id:"-\uad6c\uc131"},"\ud83d\udc49 \uad6c\uc131"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub0b4\ubd80 (\ub3c4\uba54\uc778) & \uc678\ubd80 (\uc778\ud504\ub77c) \ub85c \uad6c\ubd84",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\ub0b4\ubd80 \uc601\uc5ed :"),(0,n.kt)("li",{parentName:"ul"},"\uc21c\uc218\ud55c \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1 "),(0,n.kt)("li",{parentName:"ul"},"\ucea1\uc290\ud654 \uc601\uc5ed"),(0,n.kt)("li",{parentName:"ul"},"\uae30\ub2a5\uc801 \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub530\ub77c \uba3c\uc800 \uc124\uacc4"),(0,n.kt)("li",{parentName:"ul"},"\uc678\ubd80 \uc601\uc5ed :"),(0,n.kt)("li",{parentName:"ul"},"\ub0b4\ubd80 \uc601\uc5ed\uc5d0\uc11c \uae30\uc220\uc744 \ubd84\ub9ac\ud558\uc5ec \uad6c\uc131\ud55c \uc601\uc5ed"),(0,n.kt)("li",{parentName:"ul"},"\ub0b4\ubd80 \uc601\uc5ed \uc124\uacc4 \uc774\ud6c4 \uc124\uacc4"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub0b4\ubd80 \ube44\uc988\ub2c8\uc2a4 \uc601\uc5ed\uc744 \uc678\ubd80 \uc601\uc5ed\uc5d0 \ub178\ucd9c\ud55c API = \ud3ec\ud2b8",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\uc778\ubc14\uc6b4\ub4dc \ud3ec\ud2b8 : \ub0b4\ubd80 \uc601\uc5ed\uc744 \uc704\ud574 \ub178\ucd9c\ub41c API"),(0,n.kt)("li",{parentName:"ul"},"\uc544\uc6c3\ubc14\uc6b4\ub4dc \ud3ec\ud2b8 : \ub0b4\ubd80 \uc601\uc5ed\uc774 \uc678\ubd80 \uc601\uc5ed\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c API"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc678\ubd80 \uc138\uacc4\uc640 \ud3ec\ud2b8 \uac04 \uad50\ud658\uc744 \uc870\uc815\ud558\ub294 \uc5b4\ub311\ud130",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\uc778\ubc14\uc6b4\ub4dc \uc5b4\ub311\ud130 : \uc678\ubd80 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158/\uc11c\ube44\uc2a4\uc640 \ub0b4\ubd80 \ube44\uc988\ub2c8\uc2a4 \uc601\uc5ed(\uc778\ubc14\uc6b4\ub4dc \ud3ec\ud2b8) \uac04 \ub370\uc774\ud130 \uad50\ud658\uc744 \uc870\uc815"),(0,n.kt)("li",{parentName:"ul"},"\uc544\uc6c3\ubc14\uc6b4\ub4dc \uc5b4\ub311\ud130 : \ub0b4\ubd80 \ube44\uc988\ub2c8\uc2a4 \uc601\uc5ed(\uc544\uc6c3\ubc14\uc6b4\ub4dc \ud3ec\ud2b8) \uacfc \uc678\ubd80 \uc560\ud50c\ub9ac\ucf00\uc774\uc158/\uc11c\ube44\uc2a4 \uac04 \ub370\uc774\ud130 \uad50\ud658\uc744 \uc870\uc815"))))),(0,n.kt)("h3",{id:"-\ud575\uc2ec-"},"\ud83d\udca5 \ud575\uc2ec \ud83d\udca5"),(0,n.kt)("p",null,": \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc774 \ud45c\ud604 \ub85c\uc9c1\uc774\ub098 \ub370\uc774\ud130 \uc811\uadfc \ub85c\uc9c1\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\ub294 \uac83"))}d.isMDXComponent=!0}}]);