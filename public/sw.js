if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),u={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>u[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1f040d25af31fd8a9b077b5e45457c24"},{url:"/_next/static/chunks/1101.1fdcb44cc6a344aa.js",revision:"1fdcb44cc6a344aa"},{url:"/_next/static/chunks/1749-0441ae3864b9bb91.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/2584-1a1172c96dca68c3.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/2645-a136cd30b68f3e2c.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/2800-694503c94e5e6918.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/292-c400c5d80d54474e.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/2936-04b8c2cdb7908a64.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/2980.d4f0414784a12ccf.js",revision:"d4f0414784a12ccf"},{url:"/_next/static/chunks/3051-3c1d5ca8726acb60.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/3127-6c3888aab680a729.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/3194-31cba61647a60690.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/3340-83145a491f2f54ed.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/3417-553d06f037749690.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/3657-b1040f3e5a25a1a6.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/3741-9388037bd1265b5a.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/3764-7598750b6ce4482a.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/3902-6208cf92be596954.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/392-d83a5a963c30ce57.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/4389-f89cb0c3f7c14ca8.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/4906-227cb955e45e6eb9.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/4938-1f1f48ea24789bef.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/5195-17580b7cab0000bc.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/5443-4a4b278d39cf01e6.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/5545.1f36e365e6ff6c73.js",revision:"1f36e365e6ff6c73"},{url:"/_next/static/chunks/602dbae6-db9d653c1a62913b.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/606-8f79d84f2b4992a4.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/6130-53596bbb12590ec6.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/6262-2d9345fff214cd27.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/6312-b61c15b3508ec958.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/6448-95de8f4007bdd476.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/654-06be3157e70a8d61.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/6893-9ceb8357c29ee714.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/7045-fec8013e5766a745.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/7489-17e255f01c672404.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/7550-e320863b53d00297.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/7650.c222f2cc9467e234.js",revision:"c222f2cc9467e234"},{url:"/_next/static/chunks/7666-23d2f4af525b50ba.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/8128-479893d720a5422b.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/8147-bdf8002eb7d81b46.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/8253-6b06becf6f20e0c1.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/8599-8f9920264bcc47b9.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/8939-7a9a65d85fbaa17c.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/8b30ef62-53aed13ca228fba5.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/9163-e3206f2d33e17c62.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/9751-8e3ed37a17dd21ab.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/9969-3d6969880d216083.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/article/%5B...slug%5D/page-ab1a0289097c2e25.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/attributions/page-55ef494778b3234a.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/browse/articles/loading-77f4201246856b81.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/browse/articles/page-0ef2bc999690eaf1.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/browse/chapters/loading-0ee7845f41c21aed.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/browse/chapters/page-8a8db6ed291c99ec.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/browse/layout-f319956cfd21df67.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/browse/page-ea26dba7d3d226ee.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/%5BarticleId%5D/page-5b57458503dc09dd.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/edit/page-d2361d895b7ec507.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/error-c1923bd54df5a92f.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/layout-84ae21a53b2feec5.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/page-d4879bdd0800ffa8.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/edit-article/%5BarticleId%5D/page-14f76cf6daebaaac.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/layout-5b946ee7d5a5dc57.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/new/loading-90fc6ba5aa895d3c.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/new/page-bd5b51da5ec22f4b.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/page-5d7fc7d3164b6f50.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/privacy/page-0e6ca0213583d308.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/profile/%5Busername%5D/error-5a44c68fee28e8ff.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/profile/%5Busername%5D/page-2659ce9069971973.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/profile/%5Busername%5D/private/page-87d6996e3fe9c7fb.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/random/loading-cb7b492c3cda9ef5.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/random/page-88052c71602f6ce1.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(app)/terms/page-1592c15b3dc09639.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(authentication)/layout-f7d037db4a081f58.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(authentication)/login/page-7b45583fb901c9c1.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/(authentication)/register/page-43aafc40a7cc0bcb.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/_not-found-67b6f5c8cad04d52.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/error-858096474653dc94.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/app/layout-2b84f19f0e7865bf.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/e6b75fd3-3a1a894d3ada9fa2.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/fd9d1056-31838fff4373994f.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/main-39fe1f4fed21b348.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/main-app-1cc3242a32fd4b34.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/pages/_app-31397adcb4d2b835.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/pages/_error-b225d4412fb76f89.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4c93fb93d64da41c.js",revision:"u2OK7ggryPqmvAzHVJOqb"},{url:"/_next/static/css/338fb1607f8402e7.css",revision:"338fb1607f8402e7"},{url:"/_next/static/css/5dca946160d93e6d.css",revision:"5dca946160d93e6d"},{url:"/_next/static/css/bc636276b55e8a69.css",revision:"bc636276b55e8a69"},{url:"/_next/static/css/d88babb6cc1fe3bd.css",revision:"d88babb6cc1fe3bd"},{url:"/_next/static/media/logo-utf-sm-inverted.6bf52b4e.png",revision:"60b867d86458501d93d6b42855f7a3a7"},{url:"/_next/static/media/logo-utf-sm.0704de23.png",revision:"bd8522d6cb548044d3445baffedced92"},{url:"/_next/static/media/utf-bg.c24164be.jpg",revision:"017a8a240f44866980b426df847d59ff"},{url:"/_next/static/media/vecteezy_new-file-empty-state-single-isolated-icon-with-flat-style_11537831.8a2418e3.svg",revision:"1f1712707fbfaba734f44fa315debe2f"},{url:"/_next/static/u2OK7ggryPqmvAzHVJOqb/_buildManifest.js",revision:"a27b2b7607326fa26b144e657011ec52"},{url:"/_next/static/u2OK7ggryPqmvAzHVJOqb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/google9365f4fd3245c688.html",revision:"9b6da80ea580c24d1cf362a5eb8f8c70"},{url:"/icon-192x192.png",revision:"91e7778bd8569ebede555ca01b778dc9"},{url:"/icon-256x256.png",revision:"2241ea378612ecec7db96e436ef76db6"},{url:"/icon-384x384.png",revision:"96d8d48f7dc8bcd5509f321213dc5996"},{url:"/icon-512x512.png",revision:"22b14f5539d9330017957ef09cc01e12"},{url:"/loaderio-26a619f17d42d0c2cf8fdac721627b3d.txt",revision:"370521bd6baad68f246769efee25abe5"},{url:"/manifest.json",revision:"04b2a97a9d28c61889da8e736afbcdb2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
