// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuSHWKXURMNO2NwU198whuUV21wcJ2OvE",
  authDomain: "kumaoni-music.firebaseapp.com",
  projectId: "kumaoni-music",
  storageBucket: "kumaoni-music.appspot.com",
  messagingSenderId: "642577039389",
  appId: "1:642577039389:web:74078d116ae7e49db0c6f4",
  measurementId: "G-CJSJMECSFD"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase