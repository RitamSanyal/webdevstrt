const CACHE_NAME = 'ritam-portfolio-v2';
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

// Fetch Event - Network First Strategy
self.addEventListener('fetch', (e) => {
    // Only intercept GET requests
    if (e.request.method !== 'GET') {
        return;
    }

    e.respondWith(
        fetch(e.request)
            .then((networkResponse) => {
                // Update the cache with the new response clone
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(e.request, responseClone);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                // Fallback to cache if network fails (offline)
                return caches.match(e.request);
            })
    );
});
