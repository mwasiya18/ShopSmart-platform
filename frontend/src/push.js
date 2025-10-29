export function subscribeToPush() {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.ready.then(registration => {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array('BGvXL4hdyBcgehAhHXQqsPfpDJixflxaN7FTAC1WmI-xCrQLwG28_Py1yNapHo0EbXDGnRQ5CeGolqwE_mBvdj0')
          }).then(subscription => {
            // Send subscription to backend
            fetch('http://localhost:5000/api/push/subscribe', {
              method: 'POST',
              body: JSON.stringify(subscription),
              headers: {
                'Content-Type': 'application/json'
              }
            });
          });
        }
      });
    });
  }
}

// Helper to convert VAPID key
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}