(()=>{"use strict";var e,a,t,f,r,c={},o={};function d(e){var a=o[e];if(void 0!==a)return a.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=c,d.c=o,e=[],d.O=(a,t,f,r)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var o=!0,b=0;b<t.length;b++)(!1&r||c>=r)&&Object.keys(d.O).every((e=>d.O[e](t[b])))?t.splice(b--,1):(o=!1,r<c&&(c=r));if(o){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var c={};a=a||[null,t({}),t([]),t(t)];for(var o=2&f&&e;"object"==typeof o&&!~a.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,d.d(r,c),r},d.d=(e,a)=>{for(var t in a)d.o(a,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,t)=>(d.f[t](e,a),a)),[])),d.u=e=>"assets/js/"+({2:"95ebd2d7",53:"935f2afb",632:"3104e086",948:"8717b14a",1914:"d9f32620",2267:"59362658",2279:"0ce3f5e6",2362:"e273c56f",2535:"814f3328",2757:"c380e566",2859:"18c41134",3035:"f6b0ff0e",3085:"1f391b9e",3089:"a6aa9e1f",3252:"404597d0",3368:"41bc7060",3514:"73664a40",3608:"9e4087bc",3792:"dff1c289",3922:"d2ad8351",4013:"01a85c17",4193:"f55d3e7a",4195:"c4f5d8e4",4607:"533a09ca",4955:"36766170",4968:"02c4d548",5589:"5c868d36",5866:"b0857451",6103:"ccc49370",6504:"822bd8ab",6755:"e44a2883",7322:"016183f1",7414:"393be207",7609:"17f68ac9",7918:"17896441",8296:"1730a243",8610:"6875c492",8636:"f4f34a3a",8807:"ca4859c1",8818:"1e4232ab",8894:"f3c089b4",9003:"925b3f96",9071:"30ec302d",9514:"1be78505",9642:"7661071f",9671:"0e384e19",9817:"14eb3368"}[e]||e)+"."+{2:"1470ee3b",53:"26713994",210:"2cf852c6",632:"d805b206",948:"0c085eda",1914:"83a5531b",2267:"41721bf2",2279:"16bf3390",2362:"268e4534",2529:"dd8478e9",2535:"62dffa1a",2757:"c61c3778",2859:"2914071b",3035:"a2744f29",3085:"4677896f",3089:"3897fd19",3252:"65921632",3368:"35deace6",3514:"1aeeea3c",3608:"d478bdda",3792:"7c551fa0",3922:"78fb1673",4013:"6cade6a3",4193:"19a571d3",4195:"65d71c3f",4607:"4bd09d04",4955:"f5259f29",4968:"95b79de7",4972:"1e57ca5b",5589:"78aef68c",5866:"92aa3ad2",6103:"eb28e810",6504:"a6571833",6755:"75399124",7322:"5475f79c",7414:"08ff7a01",7609:"83cedd47",7918:"a5283c2e",8296:"b9f47836",8610:"ce5a0611",8636:"07b7529a",8807:"cf85e833",8818:"e5217394",8894:"0e9e0ea6",9003:"0f7fbdec",9071:"dec7b41b",9514:"5e57b115",9642:"4996915d",9671:"63daa13d",9817:"20c91c50"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="cocobasics:",d.l=(e,a,t,c)=>{if(f[e])f[e].push(a);else{var o,b;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){o=u;break}}o||(b=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,d.nc&&o.setAttribute("nonce",d.nc),o.setAttribute("data-webpack",r+t),o.src=e),f[e]=[a];var l=(a,t)=>{o.onerror=o.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),b&&document.head.appendChild(o)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/cocobasics/",d.gca=function(e){return e={17896441:"7918",36766170:"4955",59362658:"2267","95ebd2d7":"2","935f2afb":"53","3104e086":"632","8717b14a":"948",d9f32620:"1914","0ce3f5e6":"2279",e273c56f:"2362","814f3328":"2535",c380e566:"2757","18c41134":"2859",f6b0ff0e:"3035","1f391b9e":"3085",a6aa9e1f:"3089","404597d0":"3252","41bc7060":"3368","73664a40":"3514","9e4087bc":"3608",dff1c289:"3792",d2ad8351:"3922","01a85c17":"4013",f55d3e7a:"4193",c4f5d8e4:"4195","533a09ca":"4607","02c4d548":"4968","5c868d36":"5589",b0857451:"5866",ccc49370:"6103","822bd8ab":"6504",e44a2883:"6755","016183f1":"7322","393be207":"7414","17f68ac9":"7609","1730a243":"8296","6875c492":"8610",f4f34a3a:"8636",ca4859c1:"8807","1e4232ab":"8818",f3c089b4:"8894","925b3f96":"9003","30ec302d":"9071","1be78505":"9514","7661071f":"9642","0e384e19":"9671","14eb3368":"9817"}[e]||e,d.p+d.u(e)},(()=>{var e={1303:0,532:0};d.f.j=(a,t)=>{var f=d.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var c=d.p+d.u(a),o=new Error;d.l(c,(t=>{if(d.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;o.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",o.name="ChunkLoadError",o.type=r,o.request=c,f[1](o)}}),"chunk-"+a,a)}},d.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,c=t[0],o=t[1],b=t[2],n=0;if(c.some((a=>0!==e[a]))){for(f in o)d.o(o,f)&&(d.m[f]=o[f]);if(b)var i=b(d)}for(a&&a(t);n<c.length;n++)r=c[n],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return d.O(i)},t=self.webpackChunkcocobasics=self.webpackChunkcocobasics||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();