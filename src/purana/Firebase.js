// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBTHxGmGr0GC6Tgw3cqS_hyKnA786NNSow",
  authDomain: "first-firebase-project-a0ce0.firebaseapp.com",
  projectId: "first-firebase-project-a0ce0",
  storageBucket: "first-firebase-project-a0ce0.appspot.com",
  messagingSenderId: "838524248780",
  appId: "1:838524248780:web:3775f7fe14420454079869",
  measurementId: "G-X23RS6K909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
