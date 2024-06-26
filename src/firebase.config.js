// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6S9AwUX5wgC3T4pRvVhYmRz0RXaevKDw",
  authDomain: "art-auth-e082f.firebaseapp.com",
  projectId: "art-auth-e082f",
  storageBucket: "art-auth-e082f.appspot.com",
  messagingSenderId: "671366741238",
  appId: "1:671366741238:web:749429e2c1a989249e00d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app