import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBG1QZaRGV6Sm3MkGOUWp6E3qaFK9TF7nc",
    authDomain: "react-firebase-reactt.firebaseapp.com",
    projectId: "react-firebase-reactt",
    storageBucket: "react-firebase-reactt.appspot.com",
    messagingSenderId: "807944714502",
    appId: "1:807944714502:web:f6bef28994b6aa74338687",
    measurementId: "G-049FVQCZGJ"
  });

const auth = getAuth();

export {
    auth , createUserWithEmailAndPassword , signInWithEmailAndPassword
}