import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkdXFEk7Z3MJsYb9t0EpY1GJq_29w_CMw",
  authDomain: "emailpasswordlogin-cb5e3.firebaseapp.com",
  projectId: "emailpasswordlogin-cb5e3",
  storageBucket: "emailpasswordlogin-cb5e3.appspot.com",
  messagingSenderId: "1048922505722",
  appId: "1:1048922505722:web:9fe0fa8e00b6f88ea96443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig)

export const dataRef = firebase.database();
export default firebase;

export const database = getAuth(app);