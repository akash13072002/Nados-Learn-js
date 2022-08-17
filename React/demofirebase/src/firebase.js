// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz3iysHlnpSThefnUn_L2HUToA83YcUQM",
  authDomain: "fjp-8-firebase.firebaseapp.com",
  projectId: "fjp-8-firebase",
  storageBucket: "fjp-8-firebase.appspot.com",
  messagingSenderId: "275704725403",
  appId: "1:275704725403:web:7ff0b106fe21e933742b3e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth =firebase.auth()