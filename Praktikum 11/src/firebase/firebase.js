import * as firebase from "firebase/app";
import * as auth from "firebase/auth";
import * as firestore from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArqbMDE4b-5L6GUULQ5UD4Dgl3xA_tAyY",
    authDomain: "fir-login-a6894.firebaseapp.com",
    projectId: "fir-login-a6894",
    storageBucket: "fir-login-a6894.appspot.com",
    messagingSenderId: "624293639109",
    appId: "1:624293639109:web:c03ffebc3231398b9291ac"
};

firebase.initializeApp(firebaseConfig);

export const myFirebase = auth;
const baseDb = firestore;
export const db = baseDb;