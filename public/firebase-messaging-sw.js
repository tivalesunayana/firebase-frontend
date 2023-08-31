importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyBsUhTAi90kYnQbivws6SxRMRQq9GLAdbs",
  authDomain: "mern-52470.firebaseapp.com",
  projectId: "mern-52470",
  storageBucket: "mern-52470.appspot.com",
  messagingSenderId: "823002809192",
  appId: "1:823002809192:web:deb16232e2afa6a5d14cdd",
  measurementId: "G-HCMVWGZD5L"   
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    click_action: payload.notification.click_action,
  };

  return self.registration.showNotification(
    payload.notification.title,
    notificationOptions
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  const clickAction = event.notification.data.click_action || '/';
  event.waitUntil(clients.openWindow(clickAction));
});