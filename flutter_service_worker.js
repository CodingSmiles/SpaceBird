'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d5ca7719ca11f2a4790be7c06ad5d73d",
".git/config": "b4f5727ad72d7a9c9927a2510287fa29",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5e23573c0889471366e4a0c13c4c4b17",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a540d9317573cf3d50204aebc8f89eca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e3c9fcb525beb5433c80d4c01a9da27e",
".git/logs/refs/heads/main": "7ab64b42518afb1510bd776714d37662",
".git/logs/refs/remotes/origin/main": "240243db6432be31fd717aeb8e3db50b",
".git/objects/06/f4cce3b6ba45a1262f506b2e01ef52e2fcf087": "0495210c45812c8b6dc4257e87be7beb",
".git/objects/0c/c392bf53d8d0a42fcecfc43492740c699392fb": "da5b5b77581413e9da8fd018bc22c0bd",
".git/objects/10/cda9b50ceda1d1017d8aa854100c638d45a1a2": "c2ae6559cb7cb0b5f23b2efea0737191",
".git/objects/15/a138dd6e97dc3b015a9652573b290dea687dfe": "a4a0d73c879793fb1a960a0c42c17833",
".git/objects/15/fad5af94f894c74873fc821a547125b002b2bf": "d49c21697cbbec0a05dff6f86560ff41",
".git/objects/17/33f58bab53a109c79c5607a75d45b99d410b80": "6c4ec795f8a76369f29b47f9487fd8b5",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/c58d941ba8b34b811d807cab72ec48edc513e5": "8d2fbb649459bb88f36c92b4de798ad0",
".git/objects/1f/4259ea7499e486ffe6a7d4a2ab11e19582fc19": "e9ed0bc23328286857ab81199d6620bb",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/24/50478154059be6a884308f7024faf951ef16b9": "5a818a51d5681b1ae3f8a6ab060ec4ef",
".git/objects/25/27a287a6bd07e19f0c691ac6df77078df2e676": "c59f241c6bb14edb5df1f4e26cded123",
".git/objects/2e/9e680aad7889b4f3f2806854c971731f422a88": "3d61518e3a66bdc636061cb58b160d7d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/ab12c1331fb6e7f6f2768f0d7a49bc89438293": "32e1294efd908c03fd04ed99a8240a27",
".git/objects/40/8d0d5a0f1030a40984a986ddcc17a97fef3d95": "53c92455da04a27a7f502b715f902c7d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/e3826172ea6185b92a2913755a797709e581c0": "1ef06842d86e55884babae2dab897857",
".git/objects/4b/c1f784160076cdd251ec511b208b8f5b75a503": "b89db4ded717f9e1fb8d785c85352ba8",
".git/objects/4d/47860b5bdab03db70183f7455d123966c7f622": "153bdba68849a6e821a44af276991b3e",
".git/objects/52/31925d0bcc8e02b133d156efaec0cd5360118a": "e26e6efe3ae161cd5ff717cb5b6bd396",
".git/objects/55/ab857b4a644360365c5e33645a4c1b29a5d987": "0513ac785cdf0ef7142b1f4fe0d5a1df",
".git/objects/56/20a335abd44b3925fc9fcd77aaedce77abf47d": "831212ac4d1c9135944ac149ed13184a",
".git/objects/5b/6909ae2266e3d15bb7ed804a8b5bf89c7c0a96": "b4a32047d5c516b64c811784780d2e7a",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/61598ac748e2163f5a7773c19349f57fbce0f9": "32877eda5cb022e75327be153017b96f",
".git/objects/79/4b10b013b361c4cb4a144b50e84ebbdb576fff": "c1ee2bebdc5fd0df87693007177a97cc",
".git/objects/79/eaec9643bb0283eaa0aa154bbd857637c5c802": "3b8856891120d44a11068678d95cdcb8",
".git/objects/7a/9b10905c3500940d8f281b38d567f68f6a6ee6": "59a6158f5440379d5fa8a04e04ee04de",
".git/objects/82/48e417114007ced642c6d024fd9d3818368f56": "b89c34f3e2ef3d1f747c92d81f581144",
".git/objects/84/93920f32f39025a863fac2ee7a750cc4f15377": "106b3867788a7af26574f706a7725965",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/10ff2cf21d257ed12237165cbeff7200b4f27f": "85c4b1d31f5f2a3e494dbe5f06334f9c",
".git/objects/8c/bf9f983e22a41d8f41a519426a44eaa6ba6e2c": "a5b28370aeb04cb6d550e0e6fe21b37a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/901eedb32d18d678f0bfc77bf01a7b53e7a9d5": "e5436d058466d118196c44b838415328",
".git/objects/94/0322e48c01bc970ad502d7775fa5dee2a1c446": "9a805fffc4b5321504565ff8cb5060d3",
".git/objects/9a/f61a821cf9c13bd84f4c1ffa6d83f848bcb227": "a321ea6a828713563c6f7c7137fd15d5",
".git/objects/9c/fed5d646914779a8a82cfc23c006768837b99e": "bc5b5246d6f5bb136c61f89951640473",
".git/objects/ab/ea3838a80fb971d69def74deb24447a5954887": "d8d12da7c42d03e63071389d803ff2b1",
".git/objects/ac/13d6afff0621d5fb32b382ee28cd190113949d": "de4c3502ec3831edfb48e080ce2ae608",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/8575e68087e7e34f9f570d19bd4565235313cb": "dba4cf41f7ad720356f053c161cea63e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/444e5dfd18914b0616d77d48bf1d720a43ae75": "54e94ba0131033ef651eccb9b037b9e6",
".git/objects/c2/d834be28507165c134ead0c40ad823cd31b6af": "a8a2a844b7c3087187437e90ddbfc96f",
".git/objects/c7/99d21d00323af3269801e9650c2d02330f1c4a": "64a0ab27f3ece2fa328ca89f52e4e3d6",
".git/objects/ce/611577e680b5879d5ac3382a03fc0f982afacd": "75d005a0fdbd93cd4e42183e1281c35e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/d37e8b317c20d91717cfce690e8c905a089593": "3e45b1fb42e17869acce7064589d1f48",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/1e847cb8fb8571e465f0ef4b4bd6bdc31f3ede": "e4bde4a9d0bf69050cbc940d06ceb23d",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/f37b18295806d4151bcb79d3ce406c32e14641": "087342c536d4c88483301c59f0e3bbbc",
".git/objects/f9/1d346e76ab58e985b3c1baabaeb6123acbe057": "c2ae6586d1f9cd1728643769fed8b326",
".git/objects/fc/441c3652ed451167bdd2b3fc4b67575609af92": "062c822f99f05c945f2b98df7419ceb1",
".git/objects/ff/5a491411b6fd4a88e26d6052bb364b7586c105": "5e1f1519a1c37f208fc81fa5960c0f22",
".git/refs/heads/main": "c522aba712181a16e544091fc409bcbf",
".git/refs/remotes/origin/main": "c522aba712181a16e544091fc409bcbf",
"assets/AssetManifest.bin": "541a17a3d38e57fc9a8235d5743f7cbb",
"assets/AssetManifest.json": "9def287c59a1a550e954f0cfae42b780",
"assets/FontManifest.json": "557a0bee7f09adc17b90eab95baceadd",
"assets/fonts/MaterialIcons-Regular.otf": "bcfdd6848d22342178d248a9fa0091e4",
"assets/fonts/PTSans.ttf": "44f2fe8947d8d33f2dd571a00085e9b9",
"assets/images/agm1_slant.png": "d3d77d886fdc3192b3b33fccf3b8bfb1",
"assets/images/spr_logo2.png": "f7c50d5b7c99959beef3aa9c6c8fd3b3",
"assets/NOTICES": "bdd87585deefb6e04728f796091ef299",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "73df95dcc5f14b78d234283bf1dd2fa7",
"canvaskit/canvaskit.wasm": "5c1fa57e671c1dc05dbd77d98f5288ca",
"canvaskit/chromium/canvaskit.js": "cc1b69a365ddc1241a9cad98f28dd9b6",
"canvaskit/chromium/canvaskit.wasm": "1f51cdc288fb044843ed1e2f546dd48c",
"canvaskit/skwasm.js": "0a7b8df979a5afd6cb883e61ced72383",
"canvaskit/skwasm.wasm": "46c65aa5380c5b672d85944ec3de8074",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c672f4c59705b0089e92a99d9a042471",
"/": "c672f4c59705b0089e92a99d9a042471",
"main.dart.js": "d402cffd066db2dcbab19ed4f40723d7",
"manifest.json": "34d7a93a24a9edfdcbc76b9763f73a11",
"README.md": "25d4caf18cfbc6ad3417da605080ab30",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
