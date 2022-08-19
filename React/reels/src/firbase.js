// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyADPN2J8FbGZGdYMN5XxwkKtnu512UozkE",
  authDomain: "reels-b5c42.firebaseapp.com",
  projectId: "reels-b5c42",
  storageBucket: "reels-b5c42.appspot.com",
  messagingSenderId: "597199262282",
  appId: "1:597199262282:web:fc3181360cb0a6c61c0cb3"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth =firebase.auth()