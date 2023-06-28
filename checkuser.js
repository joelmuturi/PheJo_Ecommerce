import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import {
getAuth,
onAuthStateChanged 
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
        
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        document.getElementById("dashboard-link").innerHTML = '<li><a href="dashboard.html">Dashboard</a></li>';
        document.getElementById("logout-link").innerHTML = '<li><button class="normal" id="signOutBtn">Logout</button></li>';
    } else {
        // User is not logged in
        document.getElementById("login-link").innerHTML = '<li><button class="normal" onclick="window.location.href=\'login.html\';" id="signInBtn">Login</button></li>';
    }
});