// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(process.env);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAh3pVjq2oRf-dDcmNsGuhRSnDZhJ17TQg',
  authDomain: 'phone-book-app-163c1.firebaseapp.com',
  projectId: 'phone-book-app-163c1',
  storageBucket: 'phone-book-app-163c1.appspot.com',
  messagingSenderId: '186312880654',
  appId: '1:186312880654:web:96a45d89e9b9d38fa0025f',
  measurementId: 'G-Z8NK11XBD5',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(FIREBASE_APP);
