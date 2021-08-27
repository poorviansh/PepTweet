import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ_IRckN-D5zI2XVPPAql2fGKRjTcqT_U",
  authDomain: "peptweet-1228f.firebaseapp.com",
  databaseURL: "https://peptweet-1228f-default-rtdb.firebaseio.com",
  projectId: "peptweet-1228f",
  storageBucket: "peptweet-1228f.appspot.com",
  messagingSenderId: "888630387534",
  appId: "1:888630387534:web:b4f04a96e5dbab8ea9741f",
  measurementId: "G-B5PR57W3GM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;