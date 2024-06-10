'use client'

import { useEffect } from 'react'

export default function RegisterServiceWorker() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const registerInit = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js')
          if (registration.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' })
          }
        } catch (error) {}
      }
      registerInit()

      // 그냥 naviaator.serviceWorker.register('/sw.js') 사용하는 경우
      //   navigator.serviceWorker
      //     .register('/sw.js')
      //     .then(registration => {
      //       console.log('Service Worker registered: ', registration)
      //     })
      //     .catch(registrationError => {
      //       console.log('SW registration failed: ', registrationError)
      //     })
    }
  }, [])

  return null
}
