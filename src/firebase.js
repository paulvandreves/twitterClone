// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Required for side-effects

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, 
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSend: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID, 
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

//export const auth = db.auth();
export default db;