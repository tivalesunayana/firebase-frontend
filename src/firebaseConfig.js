
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBsUhTAi90kYnQbivws6SxRMRQq9GLAdbs",
          authDomain: "mern-52470.firebaseapp.com",
          projectId: "mern-52470",
          storageBucket: "mern-52470.appspot.com",
          messagingSenderId: "823002809192",
          appId: "1:823002809192:web:deb16232e2afa6a5d14cdd",
          measurementId: "G-HCMVWGZD5L"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const messaging = getMessaging(app);
export { app, auth ,messaging};

