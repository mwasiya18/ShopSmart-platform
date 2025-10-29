// client/src/push.js

export async function subscribeUser() {
  if (!('serviceWorker' in navigator)) {
    console.error('Service workers are not supported.');
    return;
  }

  const registration = await navigator.serviceWorker.ready;

  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array('BJqdwcvAHUZMG6VjbRxZmiPaiYT1CIAMKZiNizEKvNR-7dGajmV2zUhKXAQd8LQwjAV76q1Wiah2LRgbA0UMzBg')
  });

  await fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: { 'Content-Type': 'application/json' }
  });

  console.log('User subscribed to push notifications.');
}

// Helper to convert VAPID key
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}