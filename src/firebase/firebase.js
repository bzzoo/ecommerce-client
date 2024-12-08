// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASPrCXHyXb9kQACWx4z03oEToa28xuDoA",
  authDomain: "ecommerce-temp-102c3.firebaseapp.com",
  projectId: "ecommerce-temp-102c3",
  storageBucket: "ecommerce-temp-102c3.firebasestorage.app",
  messagingSenderId: "886984993124",
  appId: "1:886984993124:web:e0557d26b7589260503271",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
