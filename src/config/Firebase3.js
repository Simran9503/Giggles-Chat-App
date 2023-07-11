import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyBTHxGmGr0GC6Tgw3cqS_hyKnA786NNSow",
//   authDomain: "first-firebase-project-a0ce0.firebaseapp.com",
//   projectId: "first-firebase-project-a0ce0",
//   storageBucket: "first-firebase-project-a0ce0.appspot.com",
//   messagingSenderId: "838524248780",
//   appId: "1:838524248780:web:3775f7fe14420454079869",
//   measurementId: "G-X23RS6K909"
// };
const firebaseConfig = {
  apiKey:  "AIzaSyAWbWPELeuwptthHHmXD_L1QmUbPRGPhVs",
  authDomain: "giggles-5afdc.firebaseapp.com",
  projectId: "giggles-5afdc",
  storageBucket: "giggles-5afdc.appspot.com",
  messagingSenderId: "986008422728",
  appId: "1:986008422728:web:92b0a1f88c3a6562f9cb7d",
  measurementId: "G-WLF2JTYFPN"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()