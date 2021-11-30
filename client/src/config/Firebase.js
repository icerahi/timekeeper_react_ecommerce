import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDhDThQVQ-6XqkR3qvrIZGf6znGymVNTKM",
  authDomain: "timekeeper-785db.firebaseapp.com",
  projectId: "timekeeper-785db",
  storageBucket: "timekeeper-785db.appspot.com",
  messagingSenderId: "226049945699",
  appId: "1:226049945699:web:a017ee2e8c726fcff3c856"
};


// Initialize Firebase
export const InitalizeFirebaseAuth = () => initializeApp(firebaseConfig);
