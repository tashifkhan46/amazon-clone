import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCl12l0cjUYV5LzJooaAUgY16qq4tGD5PU",
    authDomain: "project-b514f.firebaseapp.com",
    projectId: "project-b514f",
    storageBucket: "project-b514f.appspot.com",
    messagingSenderId: "755647951228",
    appId: "1:755647951228:web:126c624b4969e53a6df4f9"
  };
 
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 
 const db = firebaseApp. firestore();
 const auth = firebase.auth();

 export {db , auth};