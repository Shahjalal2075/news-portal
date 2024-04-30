import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC-WAVH3k58SIqRmOGlTtFsaIxmeAoknA",
  authDomain: "news-portal-eae4b.firebaseapp.com",
  projectId: "news-portal-eae4b",
  storageBucket: "news-portal-eae4b.appspot.com",
  messagingSenderId: "441558442396",
  appId: "1:441558442396:web:55e2a2597d3a94ea58a859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;