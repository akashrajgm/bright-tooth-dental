// SW Killswitch: immediately unregisters this and all other service workers,
// then clears every cache so the stale SvelteKit SW assets are wiped.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', async () => {
  // Unregister ALL service workers for this origin
  const registrations = await self.registration.unregister();

  // Delete every cache entry
  const cacheNames = await caches.keys();
  await Promise.all(cacheNames.map((name) => caches.delete(name)));

  // Take control of all open clients immediately
  await self.clients.claim();

  // Tell every open tab to hard-reload so they pick up the clean state
  const clients = await self.clients.matchAll({ type: 'window' });
  clients.forEach((client) => client.navigate(client.url));
});
