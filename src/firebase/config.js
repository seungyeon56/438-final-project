import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
        apiKey: "AIzaSyBRIyYSyj_DDhQhHEERrjhtPq91GILjmvU",
        authDomain: "final-project-85cf8.firebaseapp.com",
        projectId: "final-project-85cf8",
        storageBucket: "final-project-85cf8.firebasestorage.app",
        messagingSenderId: "44478234374",
        appId: "1:44478234374:web:c34530669b9ec5291c2887"
    };

const app = initializeApp(firebaseConfig); // Initialize Firebase app with the config
export const auth = getAuth(app); // Create and export the Auth instance for sign-in/out
export const db = getFirestore(app);  // Create and export the Firestore instance for DB operations