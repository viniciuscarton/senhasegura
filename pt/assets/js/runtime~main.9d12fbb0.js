(()=>{"use strict";var e,a,d,t,r,c={},f={};function b(e){var a=f[e];if(void 0!==a)return a.exports;var d=f[e]={id:e,loaded:!1,exports:{}};return c[e].call(d.exports,d,d.exports,b),d.loaded=!0,d.exports}b.m=c,b.c=f,e=[],b.O=(a,d,t,r)=>{if(!d){var c=1/0;for(i=0;i<e.length;i++){d=e[i][0],t=e[i][1],r=e[i][2];for(var f=!0,o=0;o<d.length;o++)(!1&r||c>=r)&&Object.keys(b.O).every((e=>b.O[e](d[o])))?d.splice(o--,1):(f=!1,r<c&&(c=r));if(f){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[d,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var c={};a=a||[null,d({}),d([]),d(d)];for(var f=2&t&&e;"object"==typeof f&&!~a.indexOf(f);f=d(f))Object.getOwnPropertyNames(f).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(r,c),r},b.d=(e,a)=>{for(var d in a)b.o(a,d)&&!b.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,d)=>(b.f[d](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"914988af",533:"5873fa00",867:"33fc5bb8",972:"b614ae6d",1235:"a7456010",1487:"d46cedc3",1903:"acecf23e",1969:"9bed3cb8",1972:"73664a40",1998:"46ec6e80",2003:"66f56d70",2634:"c4f5d8e4",2711:"9e4087bc",2820:"8c76143e",2857:"cdddf728",3018:"b6dc2989",3249:"ccc49370",3637:"f4f34a3a",3694:"8717b14a",3794:"9b5d731f",4212:"621db11d",4218:"611a3038",4564:"d9d8034e",4794:"c363aa2b",4813:"6875c492",4906:"82a30775",4916:"b7baa61c",5111:"e8abb211",5144:"6ddc7388",5314:"011b6a9e",5557:"d9f32620",5742:"aba21aa0",6750:"93d891ed",6969:"14eb3368",7098:"a7bd4aaa",7290:"aa148ada",7472:"814f3328",7643:"a6aa9e1f",7694:"b8bd52dd",8076:"dfa342e4",8209:"01a85c17",8401:"17896441",8609:"925b3f96",8737:"7661071f",8822:"d99e96e0",8947:"8859e3b8",9048:"a94703ab",9325:"59362658",9328:"e273c56f",9647:"5e95c892",9858:"36994c47",9923:"f18f486c"}[e]||e)+"."+{53:"f0c17163",533:"2adc4d2a",867:"8b0fbb83",972:"7ebfe594",1235:"a5e16c7b",1487:"a0a910ad",1903:"ee0ed057",1969:"2bb166c5",1972:"5de88d12",1998:"0f50b329",2003:"a4e098c5",2237:"2c6be542",2634:"08502d19",2711:"2443a162",2820:"92c7737e",2857:"97f34104",3018:"2aa8b53e",3249:"089ab5b3",3599:"69b40225",3637:"29aa4e61",3694:"a58aef96",3794:"ec35dbcb",4212:"ea05dbeb",4218:"c7d57750",4564:"f60181db",4794:"10c66ddd",4813:"0a55c502",4906:"d9663492",4916:"e6ece129",5089:"1af9b701",5111:"898ba049",5144:"eda4e74f",5314:"1a11c1df",5557:"fd5ee502",5742:"ffb08c23",6750:"a8ac75a1",6969:"a19527aa",7098:"671dea57",7290:"80d819e1",7472:"d8615f79",7643:"18f4defc",7694:"20a0b9ab",8076:"0154067e",8209:"3a3af54e",8401:"0dde2128",8609:"27d4376a",8737:"a0d10502",8822:"daad1945",8947:"c6ed6c97",9048:"baef23d3",9325:"c0abcc59",9328:"f8675fb1",9647:"aaa82fc2",9858:"7428d019",9923:"98a1abcf"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="senhasegura:",b.l=(e,a,d,c)=>{if(t[e])t[e].push(a);else{var f,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+d){f=u;break}}f||(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,b.nc&&f.setAttribute("nonce",b.nc),f.setAttribute("data-webpack",r+d),f.src=e),t[e]=[a];var l=(a,d)=>{f.onerror=f.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],f.parentNode&&f.parentNode.removeChild(f),r&&r.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),o&&document.head.appendChild(f)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/senhasegura/pt/",b.gca=function(e){return e={17896441:"8401",59362658:"9325","914988af":"53","5873fa00":"533","33fc5bb8":"867",b614ae6d:"972",a7456010:"1235",d46cedc3:"1487",acecf23e:"1903","9bed3cb8":"1969","73664a40":"1972","46ec6e80":"1998","66f56d70":"2003",c4f5d8e4:"2634","9e4087bc":"2711","8c76143e":"2820",cdddf728:"2857",b6dc2989:"3018",ccc49370:"3249",f4f34a3a:"3637","8717b14a":"3694","9b5d731f":"3794","621db11d":"4212","611a3038":"4218",d9d8034e:"4564",c363aa2b:"4794","6875c492":"4813","82a30775":"4906",b7baa61c:"4916",e8abb211:"5111","6ddc7388":"5144","011b6a9e":"5314",d9f32620:"5557",aba21aa0:"5742","93d891ed":"6750","14eb3368":"6969",a7bd4aaa:"7098",aa148ada:"7290","814f3328":"7472",a6aa9e1f:"7643",b8bd52dd:"7694",dfa342e4:"8076","01a85c17":"8209","925b3f96":"8609","7661071f":"8737",d99e96e0:"8822","8859e3b8":"8947",a94703ab:"9048",e273c56f:"9328","5e95c892":"9647","36994c47":"9858",f18f486c:"9923"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,d)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)d.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((d,r)=>t=e[a]=[d,r]));d.push(t[2]=r);var c=b.p+b.u(a),f=new Error;b.l(c,(d=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=d&&("load"===d.type?"missing":d.type),c=d&&d.target&&d.target.src;f.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,t[1](f)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,d)=>{var t,r,c=d[0],f=d[1],o=d[2],n=0;if(c.some((a=>0!==e[a]))){for(t in f)b.o(f,t)&&(b.m[t]=f[t]);if(o)var i=o(b)}for(a&&a(d);n<c.length;n++)r=c[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},d=self.webpackChunksenhasegura=self.webpackChunksenhasegura||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();