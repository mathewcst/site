/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cdab58bc2291251f70e2c4fbd5148039"
  },
  {
    "url": "assets/css/0.styles.8285d877.css",
    "revision": "a6676ebdb4b67cbdf10833429b45d9b4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.b1fe8205.js",
    "revision": "b328f011e78717833b9ae4d3d4c0c21d"
  },
  {
    "url": "assets/js/3.9325c144.js",
    "revision": "9ecf765e23d8fb5af189f666d3fb93eb"
  },
  {
    "url": "assets/js/4.125fe926.js",
    "revision": "068813dec5e0dd846301afff417bdf88"
  },
  {
    "url": "assets/js/5.376a5c13.js",
    "revision": "59c458c0525018c553b3b143a229c581"
  },
  {
    "url": "assets/js/app.2502841f.js",
    "revision": "8b0f2e4ba56ae6cff25491c6e5df1248"
  },
  {
    "url": "avatar-site.png",
    "revision": "6ba7c900dabc0c8e551bd70c7d7fa4ff"
  },
  {
    "url": "en/index.html",
    "revision": "06345994de197019fec15e020387b3cf"
  },
  {
    "url": "index.html",
    "revision": "8db5fbc7fbc5dc727ca15e11dcea1c3b"
  },
  {
    "url": "profile.jpg",
    "revision": "bdf43aa7ef70a9e262b6ab4d9c3d2d72"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
