// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxt4mrrTPuuO1d663NOKJyOi5jZ66nwro",
  authDomain: "netflixgpt-783c0.firebaseapp.com",
  projectId: "netflixgpt-783c0",
  storageBucket: "netflixgpt-783c0.firebasestorage.app",
  messagingSenderId: "715382390643",
  appId: "1:715382390643:web:9493fe5d011fbfa0aa4f06",
  measurementId: "G-B44FV2C3CE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
