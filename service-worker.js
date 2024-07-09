// install event
self.addEventListener('install', function (e) {
	console.log('[Service Worker] Install');
});

// activate event
self.addEventListener('activate', (e) => {
	// console.log('[Service Worker] actived', e);
});

// fetch event
self.addEventListener('fetch', (e) => {
	// console.log('[Service Worker] fetched resource ' + e.request.url);
});
