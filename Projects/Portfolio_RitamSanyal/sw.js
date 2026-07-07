const CACHE_NAME = 'ritam-portfolio-v3';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './assets/Ritam.jpg',
    './assets/RITAM-SANYAL-Resume.pdf',
    './assets/BlockStars_Experience_letter_Ritam.pdf',
    './assets/Coursera_AY9FSYNLZ2HT(SQL).pdf',
    './assets/Coursera_U2K3EQYKEGRJ.pdf',
    './assets/Coursera_YC4UKA4JTCAN.pdf',
    './assets/EISystems_Internship_Certificate.pdf',
    './assets/in.ac.makautwb-DGCER-5004210100632025211430100210070.pdf'
];

// Install Event
self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Activate Event
self.addEventListener('activate', (e) => {
    e.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then((keys) => {
                return Promise.all(
                    keys.map((key) => {
                        if (key !== CACHE_NAME) {
                            return caches.delete(key);
                        }
                    })
                );
            })
        ])
    );
});

// Fetch Event
self.addEventListener('fetch', (e) => {
    // Only intercept GET requests
    if (e.request.method !== 'GET') {
        return;
    }

    // Only intercept http/https requests to avoid TypeErrors with other protocols (e.g., chrome-extension)
    const url = new URL(e.request.url);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        return;
    }

    // 1. Stale-While-Revalidate for main document / HTML requests
    if (e.request.mode === 'navigate' || url.pathname.endsWith('index.html') || url.pathname === '/') {
        e.respondWith(
            caches.match(e.request).then((cachedResponse) => {
                const fetchPromise = fetch(e.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(e.request, responseClone);
                        });
                    }
                    return networkResponse;
                }).catch(() => {
                    // If network fails and cachedResponse wasn't found, try caching fallback
                    return caches.match(e.request).then((fallback) => {
                        return fallback || caches.match('./index.html') || caches.match('/');
                    });
                });

                return cachedResponse || fetchPromise;
            })
        );
        return;
    }

    // 2. Cache First Strategy for static assets
    const isStaticAsset = 
        ASSETS.some(asset => url.pathname.endsWith(asset.replace('./', ''))) ||
        url.pathname.includes('/assets/') ||
        url.hostname.includes('fonts.googleapis.com') ||
        url.hostname.includes('fonts.gstatic.com') ||
        url.hostname.includes('cdnjs.cloudflare.com') ||
        /\.(js|css|png|jpg|jpeg|gif|svg|ico|pdf|woff|woff2|ttf|eot)$/i.test(url.pathname);

    if (isStaticAsset) {
        e.respondWith(
            caches.match(e.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(e.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(e.request, responseClone);
                        });
                    }
                    return networkResponse;
                });
            })
        );
        return;
    }

    // 3. Default to Network First Strategy for APIs / other requests
    e.respondWith(
        fetch(e.request)
            .then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(e.request, responseClone);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                return caches.match(e.request);
            })
    );
});
