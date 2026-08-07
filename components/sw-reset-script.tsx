"use client";

import Script from "next/script";

const swResetScript = `
(async () => {
  try {
    if (!('serviceWorker' in navigator) || !('caches' in window)) return;

    const key = '__portfolio_sw_reset_done__';
    const alreadyReset = sessionStorage.getItem(key) === '1';
    const registrations = await navigator.serviceWorker.getRegistrations();

    if (!registrations.length) {
      await caches.keys().then((cacheNames) => Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName))));
      return;
    }

    await Promise.all(registrations.map((registration) => registration.unregister()));
    await caches.keys().then((cacheNames) => Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName))));

    if (!alreadyReset) {
      sessionStorage.setItem(key, '1');
      window.location.reload();
    }
  } catch {}
})();
`;

export function ServiceWorkerResetScript() {
  return (
    <Script
      id="sw-reset-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: swResetScript }}
    />
  );
}
