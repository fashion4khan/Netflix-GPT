import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2cFoCSXq4XVecuVa0-lsoQXXN7j_q7ho",
  authDomain: "netflixgpt-b42e0.firebaseapp.com",
  projectId: "netflixgpt-b42e0",
  storageBucket: "netflixgpt-b42e0.firebasestorage.app",
  messagingSenderId: "920743902923",
  appId: "1:920743902923:web:be5be90df228d520dca54e",
  measurementId: "G-310N5Q5YNV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

