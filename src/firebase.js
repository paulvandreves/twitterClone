// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Required for side-effects

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaQ2CoIzLi8g1pH7H9-h9-r_dT_Kgfzt0",
  authDomain: "twitterclone-c0270.firebaseapp.com",
  projectId: "twitterclone-c0270",
  storageBucket: "twitterclone-c0270.appspot.com",
  messagingSenderId: "782638469138",
  appId: "1:782638469138:web:7e8811441c0598a7d088cb"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export default db;