import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import {
getAuth,
signOut 
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCbs5pnrGePbxNd9pkhXKkb6eTnyzqGnTo",
    authDomain: "phejoe-65cfc.firebaseapp.com",
    projectId: "phejoe-65cfc",
    storageBucket: "phejoe-65cfc.appspot.com",
    messagingSenderId: "1075754059473",
    appId: "1:1075754059473:web:57dc9aa6b77d9355c927f0",
    measurementId: "G-KSD482LRZE"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
        
const signOutButton = document.getElementById("logout-link");

// Sign-Out
const signOutNow = () => {
signOut(auth).then(() => {
// Sign-out successful.
window.location = "index.html";
}).catch((error) => {
// An error happened.
});
}
signOutButton.addEventListener('click', signOutNow);