import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHPjXv_NJ0ZJ7IwmaXl9-D3r3_6kA3uWQ",
  authDomain: "netflixgpt-ba022.firebaseapp.com",
  projectId: "netflixgpt-ba022",
  storageBucket: "netflixgpt-ba022.appspot.com", // ✅ Fixed
  messagingSenderId: "570446724055",
  appId: "1:570446724055:web:7da3fd1222b867a158e992",
  measurementId: "G-M1H6ZX44XN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); // ✅ Fixed
