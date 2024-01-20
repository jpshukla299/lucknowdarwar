// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp(  {  
  apiKey: "AIzaSyCFqBiK4pABvP0JmJaSXsaE98C6aEtcmyA",
  authDomain: "restro-a24e0.firebaseapp.com",
  projectId: "restro-a24e0",
  storageBucket: "restro-a24e0.appspot.com",
  messagingSenderId: "311705306661",
  appId: "1:311705306661:web:c65e8aa35c20aa46b6a1cc"
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export var db = firebaseApp.firestore()
