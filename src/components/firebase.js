import firebase from "firebase";
import "firebase/auth";


export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDm_bpo3mG9dYNmiUyl00Zphf_k_VcWuZ8",
    authDomain: "unlichat-cbdd0.firebaseapp.com",
    projectId: "unlichat-cbdd0",
    storageBucket: "unlichat-cbdd0.appspot.com",
    messagingSenderId: "400129574101",
    appId: "1:400129574101:web:3dac3c8cd367653fc70e5c"
  }).auth();