import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzFX_ER4mpJRPdmEk0ZrCFMNpLs9lkqKY",
    authDomain: "ecofinex-e7540.firebaseapp.com",
    projectId: "ecofinex-e7540",
    storageBucket: "ecofinex-e7540.firebasestorage.app",
    messagingSenderId: "541679033433",
    appId: "1:541679033433:web:595c7d8959538724726548"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
