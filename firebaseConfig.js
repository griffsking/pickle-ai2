import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyD3nHKnbi_ZC0ZqFaRH6PSBSTVjNKL-kuA",
    authDomain: "sample-firebase-ai-app-62fea.firebaseapp.com",
    projectId: "sample-firebase-ai-app-62fea",
    storageBucket: "sample-firebase-ai-app-62fea.firebasestorage.app",
    messagingSenderId: "645522859617",
    appId: "1:645522859617:web:d6b9ee3921165721dfac20",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const functions = getFunctions(firebaseApp);

module.exports = { db, functions };