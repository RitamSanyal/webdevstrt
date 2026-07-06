const CACHE_NAME = 'ritam-portfolio-v1';
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
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Activate Event
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// Fetch Event
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            return cachedResponse || fetch(e.request);
        })
    );
});
