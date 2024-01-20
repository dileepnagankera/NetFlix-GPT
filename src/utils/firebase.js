// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXpwB4vDjVe8jZH4ArGK2aQe47DtPuvFQ",
  authDomain: "netflix-gpt-ad16b.firebaseapp.com",
  projectId: "netflix-gpt-ad16b",
  storageBucket: "netflix-gpt-ad16b.appspot.com",
  messagingSenderId: "1080717705882",
  appId: "1:1080717705882:web:a5f04eab5ad59735249523",
  measurementId: "G-P374XW3CPL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
