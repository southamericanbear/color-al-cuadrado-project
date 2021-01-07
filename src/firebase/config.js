import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
require("dotenv").config();
// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "color-portfolio-60289.firebaseapp.com",
  projectId: "color-portfolio-60289",
  storageBucket: "color-portfolio-60289.appspot.com",
  messagingSenderId: "12630500015",
  appId: "1:12630500015:web:3a81495c6ba1ec253d2a5a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const portfolioStorage = firebase.storage();

const portfolioFirestore = firebase.firestore();

export { portfolioStorage, portfolioFirestore };
