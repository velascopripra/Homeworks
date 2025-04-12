import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDukDm8jrNFaLV_6Szc2PaRnq_4OA0DeY0",
  authDomain: "estructuras-ch11.firebaseapp.com",
  projectId: "estructuras-ch11",
  storageBucket: "estructuras-ch11.firebasestorage.app",
  messagingSenderId: "93992256531",
  appId: "1:93992256531:web:8f9bc17a8534aa86402be6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider };