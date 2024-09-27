import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDR5WHNCblaGnWCkpPeyQKGtz6x_3U8tpM",
  authDomain: "wukong-blogging.firebaseapp.com",
  projectId: "wukong-blogging",
  storageBucket: "wukong-blogging.appspot.com",
  messagingSenderId: "512000139850",
  appId: "1:512000139850:web:ddcfe25a84ddf1ecef3cb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
