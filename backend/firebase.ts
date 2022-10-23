// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiv_OiPEWv_Enhn8RITffuKo2NqG7UtUU",
  authDomain: "social-media-b87e1.firebaseapp.com",
  projectId: "social-media-b87e1",
  storageBucket: "social-media-b87e1.appspot.com",
  messagingSenderId: "346386963673",
  appId: "1:346386963673:web:637b10ad47b7d1f24872c8",
  measurementId: "G-DC3Q33QQRE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Create a root reference
export const storage = getStorage(app);

export const db = getFirestore(app);
// Create a reference to 'mountains.jpg'
