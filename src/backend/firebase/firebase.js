// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIWIhASTh0mS5OeyKeMLabDsOMuj9CBEE",
  authDomain: "transporte-9ac59.firebaseapp.com",
  projectId: "transporte-9ac59",
  storageBucket: "transporte-9ac59.appspot.com",
  messagingSenderId: "812495828379",
  appId: "1:812495828379:web:dfeb0675ae9ebb92bddd3e",
  measurementId: "G-GLYCJFPSNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);