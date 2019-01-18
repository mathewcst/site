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
    "revision": "07d1cdfd08e162de958e1d75aa8b10ce"
  },
  {
    "url": "assets/css/0.styles.e7314b4a.css",
    "revision": "a67fb1d020bf2c1e2c13dee193d42298"
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
    "url": "assets/js/3.71fa283f.js",
    "revision": "c55c648a1e6eb46c07d3f9d7750455fd"
  },
  {
    "url": "assets/js/4.bcd9f440.js",
    "revision": "7a612f178d5bc675bddf9e35e4027fb6"
  },
  {
    "url": "assets/js/5.376a5c13.js",
    "revision": "59c458c0525018c553b3b143a229c581"
  },
  {
    "url": "assets/js/app.7e72a78a.js",
    "revision": "67bba2e697d24de9c5f75de4c1af8d39"
  },
  {
    "url": "avatar-site.png",
    "revision": "6ba7c900dabc0c8e551bd70c7d7fa4ff"
  },
  {
    "url": "en/index.html",
    "revision": "b27ac2370e08a51c03cfb4933fc9d167"
  },
  {
    "url": "index.html",
    "revision": "caf7bd12779d74d4d122ac871bd68f5a"
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
