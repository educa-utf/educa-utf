if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),l={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>l[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"eadd51293899dc01d82c51c5f4997083"},{url:"/_next/static/chunks/152-e78d6203f471a432.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/188-b53da52da3ae6897.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/2314-b3ba33725c97f4ed.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/251-667c86e2b77780d3.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/2558-6e88bfb3660d1d1c.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/3210-6eb71c80d75ad143.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/3222-c48de90346598738.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/3471-5bf3cf96c8c6a588.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/3528-2e69e4ef5e499fe4.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/3575-e8826578094c03f8.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/4100-4cc9de4761c26642.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/4398-06edbdea92cb03cb.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/5890-4c67830f80be42b7.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/596-13a4a29f9c4f753d.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/5974-8ce705024ce4d6a1.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/6172-f541afa9a6f467e0.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/6685-67e32e5eff66f2a0.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/682-3fbac2f4325899ab.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/7199-f737c7023ae3cf1b.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/7437-10e62e3738d5337c.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/7582-c18d2b75fb0d8ef5.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/8586-a22829757df69042.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/8751-fd602be3ee7b77b3.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/8785-eaed69217e2d1403.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/8862-dfebdc49fed40fd0.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/8874-6158a8ca4140ab27.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/967.76081379d72765f3.js",revision:"76081379d72765f3"},{url:"/_next/static/chunks/9694-524371fbd1ca4e14.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/article/%5B...slug%5D/page-25cfe17e23b1bf5c.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/browse/articles/page-1013e18c9556e1cc.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/browse/chapters/page-7cf28f35e169a58c.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/browse/layout-69bc4e995d5ebd8e.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/browse/page-4b0e48d2d78d5e42.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/%5BarticleId%5D/page-7264b0e56451cf5c.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/error-3b10850a3baca8bc.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/layout-5c75bd27f43a2424.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/page-3724eaca9a52434c.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/edit/%5BarticleId%5D/page-ae23fed2baeed622.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/layout-e5b0da08c44f25f1.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/new-article/loading-e0d291a5094828be.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/new-article/page-99cf4d5321a9bf6c.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/new-chapter/page-6b46af4aa7193b5f.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/page-217cd82272852a51.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/privacy/page-f9db2b6eae9c2dc7.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/profile/%5Busername%5D/error-8ee24acbe37e3a1d.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/profile/%5Busername%5D/page-7f646b3b3dddcc13.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/random/loading-eefc6c09747834ef.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/random/page-2989b21f0a9b0c57.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(app)/terms/page-908b45d59d10e464.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(authentication)/layout-4739e9b274d42791.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(authentication)/login/page-fff6bec1736b0332.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/(authentication)/register/page-94d60b3dc3e50110.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/error-4da86691d419f53d.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/app/layout-0e34560793c99eca.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/fd9d1056-6a1ce2e60a8005e2.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/main-971473ddccd7ba29.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/main-app-1586656564d869fd.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/pages/_app-8af45f6c5c3cbc8e.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/pages/_error-6aec2ce618e2a362.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8e0af6eaeb7b1629.js",revision:"jSCZlJQm3UXTDFLA4g8GM"},{url:"/_next/static/css/338fb1607f8402e7.css",revision:"338fb1607f8402e7"},{url:"/_next/static/css/5dca946160d93e6d.css",revision:"5dca946160d93e6d"},{url:"/_next/static/css/9780cb088bfa6cfc.css",revision:"9780cb088bfa6cfc"},{url:"/_next/static/css/d9e265c156cfbcbc.css",revision:"d9e265c156cfbcbc"},{url:"/_next/static/jSCZlJQm3UXTDFLA4g8GM/_buildManifest.js",revision:"f73e8c19daa8474d229371b8da40f744"},{url:"/_next/static/jSCZlJQm3UXTDFLA4g8GM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/contemplative-reptile.8e5e4017.jpg",revision:"34dfeed20d644ba572bd2d8d31bc8d77"},{url:"/_next/static/media/logo-utf-sm-inverted.6bf52b4e.png",revision:"60b867d86458501d93d6b42855f7a3a7"},{url:"/_next/static/media/logo-utf-sm.0704de23.png",revision:"bd8522d6cb548044d3445baffedced92"},{url:"/_next/static/media/utf-bg.c24164be.jpg",revision:"017a8a240f44866980b426df847d59ff"},{url:"/google9365f4fd3245c688.html",revision:"9b6da80ea580c24d1cf362a5eb8f8c70"},{url:"/icon-192x192.png",revision:"91e7778bd8569ebede555ca01b778dc9"},{url:"/icon-256x256.png",revision:"2241ea378612ecec7db96e436ef76db6"},{url:"/icon-384x384.png",revision:"96d8d48f7dc8bcd5509f321213dc5996"},{url:"/icon-512x512.png",revision:"22b14f5539d9330017957ef09cc01e12"},{url:"/loaderio-26a619f17d42d0c2cf8fdac721627b3d.txt",revision:"370521bd6baad68f246769efee25abe5"},{url:"/manifest.json",revision:"04b2a97a9d28c61889da8e736afbcdb2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
