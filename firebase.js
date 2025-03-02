// firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Добавлено для Firestore, если вы его используете

const firebaseConfig = {
    apiKey: "AIzaSyAy28-cNp8BDBZm4pGqVQ7-ssZUhr2E61U",
    authDomain: "mpit-fb019.firebaseapp.com",
    projectId: "mpit-fb019",
    storageBucket: "mpit-fb019.firebasestorage.app",
    messagingSenderId: "742514036013",
    appId: "1:742514036013:web:7bd07a4f15879ed31c17a4",
    measurementId: "G-6L1K4QLWNE",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Добавлено, если вы используете Firestore
const analytics = getAnalytics(app);

export { auth, db }; // Экспортируйте auth и db (Firestore), если требуется