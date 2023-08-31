// export const register = async () => {
//     if ('serviceWorker' in navigator) {
//       try {
//         const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', { scope: '/firebase-cloud-messaging-push-scope' });
//         console.log('Service Worker registered with scope:', registration.scope);
//       } catch (error) {
//         console.error('Service Worker registration failed:', error);
//       }
//     }
//   };
  
//   export const unregister = async () => {
//     if ('serviceWorker' in navigator) {
//       try {
//         const registration = await navigator.serviceWorker.ready;
//         await registration.unregister();
//       } catch (error) {
//         console.error('Service Worker unregistration failed:', error);
//       }
//     }
//   };
  