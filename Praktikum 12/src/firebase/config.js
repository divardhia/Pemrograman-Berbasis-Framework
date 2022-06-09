import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAaVYOkg3W2skEmibXahcpGsIB8JajdTGg",
  authDomain: "reactjs-firebase-3dadb.firebaseapp.com",
  projectId: "reactjs-firebase-3dadb",
  storageBucket: "reactjs-firebase-3dadb.appspot.com",
  messagingSenderId: "695746533641",
  appId: "1:695746533641:web:17d678f1954a7b73c75bd8"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);