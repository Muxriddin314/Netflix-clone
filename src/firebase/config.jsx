import firebase from "firebase/app"
import "firebase/auth";

const config = firebase.initializeApp({
    apiKey: "AIzaSyAn5NeJAh0ac8fD0lIqT-dDHuur-wW_WNc",
    authDomain: "netflix-sign-66888.firebaseapp.com",
    projectId: "netflix-sign-66888",
    storageBucket: "netflix-sign-66888.appspot.com",
    messagingSenderId: "76459451074",
    appId: "1:76459451074:web:77a1726875946d0fab115b",
    measurementId: "G-FZTBHTNPG4"
  });

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;