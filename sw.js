self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

// حتى نقدر نعرض إشعار عن طريق postMessage من الصفحة
self.addEventListener("message", (event) => {
  const { title, body } = event.data || {};
  if (!title) return;

  self.registration.showNotification(title, {
    body: body || "",
    icon: "logo.png"
  });
});
