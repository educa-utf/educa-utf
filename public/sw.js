if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"d9896564d38f16e80f45a8de3f089f86"},{url:"/_next/static/6w0lkzkvO0N0zPeBnEoNR/_buildManifest.js",revision:"a27b2b7607326fa26b144e657011ec52"},{url:"/_next/static/6w0lkzkvO0N0zPeBnEoNR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/103-931652a1763d881d.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/1101.2f67826046cd338e.js",revision:"2f67826046cd338e"},{url:"/_next/static/chunks/1178-dada0cfd4fd50bd7.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/1372-c74751a98bb47422.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/14-55182cdd2c7a11bd.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/1749-0441ae3864b9bb91.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/2579-03f686a96b2de260.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/2698-fe20a419e4e5f7c1.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/2707-9fecd4f3d997bbb0.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/2909.49802ce973540930.js",revision:"49802ce973540930"},{url:"/_next/static/chunks/2980.48a73049c855e3a2.js",revision:"48a73049c855e3a2"},{url:"/_next/static/chunks/3062-7d6caf94f2b2e23c.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/3203.3c9409ed4efc7adc.js",revision:"3c9409ed4efc7adc"},{url:"/_next/static/chunks/3421-7adababb4cf4856d.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/3741-9388037bd1265b5a.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/375-8ce6744db99ef0e3.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/3764-7598750b6ce4482a.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/3902-05cf5f5e9c301ccc.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/4131-095a3c3fa8c8a6ab.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/4150-6b10b07bb39383e4.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/4304.f6f7151e218a7600.js",revision:"f6f7151e218a7600"},{url:"/_next/static/chunks/4389-be7233063c6487fd.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/4551-2279a7b8e79246bf.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/4938-1f1f48ea24789bef.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/5470-a75b6d82ee489840.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/5545.8ca43965d2bca2e2.js",revision:"8ca43965d2bca2e2"},{url:"/_next/static/chunks/5672-2846ccf76a2e3642.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/5803-e389dd2ef2960e51.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/5826-0eb4342238b0309b.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/6009.ea4003430b319a97.js",revision:"ea4003430b319a97"},{url:"/_next/static/chunks/602dbae6-e237f536062dfbfb.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/6172-7f94f4913c2654ed.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/6191-51d2f69ca42f2b9b.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/6205.fb0a51c5f29ea5b7.js",revision:"fb0a51c5f29ea5b7"},{url:"/_next/static/chunks/6447-624f91280b34c089.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/654-b7c13f8f81cff8b4.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/6737-02dbf0ae60549d47.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/6761-63366634a089af88.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/6931-2b4d9f15bbd191ac.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/716-127b202b7582e284.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/7242-4a3f630303caf443.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/7489-13c9a80110550bc3.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/7650.fe89287b54a2eb66.js",revision:"fe89287b54a2eb66"},{url:"/_next/static/chunks/7666-354733b980cf1530.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/7827-5c0953048afcb667.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/8132-9d35bbc375bdd272.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/8594-58a08892ae9fc053.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/8687-2558e8892a957c70.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/8770-d189187a5a4d269c.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/8939-7a9a65d85fbaa17c.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/8969.174a337e1cb6f5b6.js",revision:"174a337e1cb6f5b6"},{url:"/_next/static/chunks/8b30ef62-53aed13ca228fba5.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/9029-cde38641f7718b37.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/9163-e3206f2d33e17c62.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/9194-12f7d98fadd49bf3.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/9493-ae33eed4e9b43880.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/9497-f335d9998efb60f3.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/9969-4a012032befa2465.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/article/%5B...slug%5D/page-3127ea6efd4db283.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/attributions/page-aa6e1b7ea62b1174.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/browse/articles/loading-eb6aae39d2fac68b.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/browse/articles/page-02284aeeca172189.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/browse/chapters/loading-65defc41cfa7ca24.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/browse/chapters/page-e47324f7e6248c11.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/browse/layout-99e43f9cf6cc2979.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/browse/loading-2fa805bc2102830a.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/browse/page-9e8a2133dced103b.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/%5BarticleId%5D/page-e1e502073aefb1b5.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/edit/page-ac4cb3b9eebc0e02.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/error-adf2caedeacb93b0.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/layout-6fa151b60b2f6d2f.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/page-ee9371bca27d0d2a.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/edit-article/%5BarticleId%5D/page-23134c37cc1a6555.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/layout-d211ead36b0fd6cd.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/loading-480aa683c2fb2927.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/login-required/page-2fac70af00d1e54e.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/new/loading-e01e7505418f9fa4.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/new/page-d64be55404a54e34.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/page-b5ddcf26b01c33d3.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/privacy/page-3a4a82bb2a8be2a3.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/profile/%5Busername%5D/error-75d45caf10827eb5.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/profile/%5Busername%5D/loading-f9dbd91f2f7e28ea.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/profile/%5Busername%5D/page-ada574b533f986dd.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/random/loading-461e2ceb0dd86252.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/random/page-1246291d2dd00daa.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/report/loading-025f79b1e2644b6b.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/report/page-6531d98fb442219f.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(app)/terms/page-886d7a765d4b1baa.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(authentication)/layout-563b4590f29e0993.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(authentication)/login/page-dd7451a8adc32f49.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/(authentication)/register/page-f9b3972bda2f44b3.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/_not-found-67b6f5c8cad04d52.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/error-6b8cbc30c7cf6e95.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/app/layout-52d3f750fc071e2b.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/e6b75fd3-3a1a894d3ada9fa2.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/fd9d1056-31838fff4373994f.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/main-app-5d0a1ad64798bfd5.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/main-c726a8f2128c0ca9.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/pages/_app-31397adcb4d2b835.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/pages/_error-b225d4412fb76f89.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f7be03ff269a2fb0.js",revision:"6w0lkzkvO0N0zPeBnEoNR"},{url:"/_next/static/css/1332aa92f4de6f96.css",revision:"1332aa92f4de6f96"},{url:"/_next/static/css/5dca946160d93e6d.css",revision:"5dca946160d93e6d"},{url:"/_next/static/css/a7b64347fa16b5d0.css",revision:"a7b64347fa16b5d0"},{url:"/_next/static/css/bc636276b55e8a69.css",revision:"bc636276b55e8a69"},{url:"/_next/static/media/logo-utf-sm-inverted.6bf52b4e.png",revision:"60b867d86458501d93d6b42855f7a3a7"},{url:"/_next/static/media/logo-utf-sm.0704de23.png",revision:"bd8522d6cb548044d3445baffedced92"},{url:"/_next/static/media/utf-bg.c24164be.jpg",revision:"017a8a240f44866980b426df847d59ff"},{url:"/_next/static/media/vecteezy_new-file-empty-state-single-isolated-icon-with-flat-style_11537831.f2550479.svg",revision:"8f7568b02228a6cc3fc04ce2176f0764"},{url:"/google9365f4fd3245c688.html",revision:"9b6da80ea580c24d1cf362a5eb8f8c70"},{url:"/icon-192x192.png",revision:"91e7778bd8569ebede555ca01b778dc9"},{url:"/icon-256x256.png",revision:"2241ea378612ecec7db96e436ef76db6"},{url:"/icon-384x384.png",revision:"96d8d48f7dc8bcd5509f321213dc5996"},{url:"/icon-512x512.png",revision:"22b14f5539d9330017957ef09cc01e12"},{url:"/loaderio-26a619f17d42d0c2cf8fdac721627b3d.txt",revision:"370521bd6baad68f246769efee25abe5"},{url:"/manifest.json",revision:"5f81c03126a92133d09cc4ba08c658d1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
