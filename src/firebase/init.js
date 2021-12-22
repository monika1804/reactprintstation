import { initializeApp } from 'firebase/app'
import { getAuth } from "@firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDbc6CUuqsf5tAkLoADPar0uZadMaqV7b4",
  authDomain: "test-4cb15.firebaseapp.com",
  projectId: "test-4cb15",
  storageBucket: "test-4cb15.appspot.com",
  messagingSenderId: "534813855215",
  appId: "1:534813855215:web:56f485919c5e389f64fa1a"
};

const fireBaseApp = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(fireBaseApp)