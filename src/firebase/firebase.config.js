// // /firebase/firebase.config.js
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// const app = initializeApp(firebaseConfig);
// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFRpe8TOLfGGLdzSAWs8wbpZOprH4tjA4",
  authDomain: "next-app-c89f3.firebaseapp.com",
  projectId: "next-app-c89f3",
  storageBucket: "next-app-c89f3.firebasestorage.app",
  messagingSenderId: "390999764643",
  appId: "1:390999764643:web:46e2b7fb3a176eb6bed916",
  measurementId: "G-G7E95E706J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export default app;