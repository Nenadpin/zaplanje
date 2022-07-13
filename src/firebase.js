import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: "pcelinjak-90f95.firebaseapp.com",
  projectId: "pcelinjak-90f95",
  storageBucket: "pcelinjak-90f95.appspot.com",
  messagingSenderId: "19785307605",
  appId: "1:19785307605:web:f1bab60b6a5028a4acd95c",
  measurementId: "G-1P7GKS7QNV",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
