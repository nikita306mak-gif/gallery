self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Здесь можно настроить кэширование, чтобы галерея работала оффлайн
});
