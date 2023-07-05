// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHA9Q3He5ILxHtAXK0zKSE6uy780uaB9I",
  authDomain: "myapp-dd6e8.firebaseapp.com",
  projectId: "myapp-dd6e8",
  storageBucket: "myapp-dd6e8.appspot.com",
  messagingSenderId: "661888265282",
  appId: "1:661888265282:web:552c74892d0a31a414d1db",
  measurementId: "G-KYDWQPF6LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app }