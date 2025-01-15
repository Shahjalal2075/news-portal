import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCC-WAVH3k58SIqRmOGlTtFsaIxmeAoknA",
  authDomain: "news-portal-eae4b.firebaseapp.com",
  projectId: "news-portal-eae4b",
  storageBucket: "news-portal-eae4b.appspot.com",
  messagingSenderId: "441558442396",
  appId: "1:441558442396:web:55e2a2597d3a94ea58a859"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
