"use strict";(self.webpackChunkcocobasics=self.webpackChunkcocobasics||[]).push([[2967],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>d});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),f=u(r),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,a(a({ref:e},l),{},{components:r})):n.createElement(m,a({ref:e},l))}));function d(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5386:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:5},a="git status",c={unversionedId:"GitStuff/GitStatus",id:"GitStuff/GitStatus",title:"git status",description:"... gibt dir den aktuellen Status wieder.",source:"@site/docs/GitStuff/GitStatus.md",sourceDirName:"GitStuff",slug:"/GitStuff/GitStatus",permalink:"/cocobasics/docs/GitStuff/GitStatus",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/GitStuff/GitStatus.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to - git add, commit & push",permalink:"/cocobasics/docs/GitStuff/HowToGitAddCommitPush"},next:{title:"Tutorial - Basics",permalink:"/cocobasics/docs/category/tutorial---basics"}},s={},u=[],l={toc:u};function p(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-status"},"git status"),(0,i.kt)("p",null,"... gibt dir den aktuellen Status wieder."),(0,i.kt)("p",null,"Dabei wird mit der ",(0,i.kt)("strong",{parentName:"p"},"lokalen")," Vorg\xe4ngerversion verglichen, nicht mit dem Repository auf Gitlab, was sich ggf. in der zwischenzeit schon ge\xe4ndert hat, weil deine Kommiliton_innen oder Dozent_innen derweil etwas gepusht haben."))}p.isMDXComponent=!0}}]);