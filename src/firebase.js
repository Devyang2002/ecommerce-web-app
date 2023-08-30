// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzUmlFpTBzwYLeoaW5V2ThjIzhNwoT6sk",
  authDomain: "onestopshop-9394c.firebaseapp.com",
  projectId: "onestopshop-9394c",
  storageBucket: "onestopshop-9394c.appspot.com",
  messagingSenderId: "539428684179",
  appId: "1:539428684179:web:818381318d2f17ff47e866",
  measurementId: "G-NTKMT0HT0T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};