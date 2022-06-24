import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBQF9zfrtiBPZher_VI8J0XLB9NHsTVUH8",
  authDomain: "crud-react-ac179.firebaseapp.com",
  projectId: "crud-react-ac179",
  storageBucket: "crud-react-ac179.appspot.com",
  messagingSenderId: "1054592180601",
  appId: "1:1054592180601:web:f2c532c98827983bf34fa8"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, db, googleAuthProvider}