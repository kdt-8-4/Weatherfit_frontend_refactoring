const cacheName = 'useServiceWorker'

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response
      }

      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then(response => {
        console.log('fetching...')

        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }

        const requestUrl = event.request.url
        const responseToCache = response.clone()

        if (
          !requestUrl.startsWith('chrome-extension') &&
          event.request.method !== 'POST'
        ) {
          caches.open(cacheName).then(cache => {
            cache.put(event.request, responseToCache)
          })
        }

        return response
      })
    }),
  )
})
