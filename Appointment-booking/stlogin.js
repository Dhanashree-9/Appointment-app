 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getDatabase } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";


 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAWr8-k8WJYwBwQmcX57D2BWv0mYc66Cyo",
  authDomain: "web1-66ac9.firebaseapp.com",
  databaseURL: "https://web1-66ac9-default-rtdb.firebaseio.com",
  projectId: "web1-66ac9",
  storageBucket: "web1-66ac9.firebasestorage.app",
  messagingSenderId: "560909826198",
  appId: "1:560909826198:web:a89950c7bd3fc65ce4aab7"
};


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database=getDatabase(app);
 const auth=getAuth();


//submit
const submit = document.getElementById('submit');
submit.addEventListener("click",
 function(event){
   event.preventDefault()

   //inputs
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

 signInWithEmailAndPassword(auth, email, password)
 .then((userCredential)=> {
   const user=userCredential.user;
   window.location.href="studentdashboard.html";
 })
 .catch((error) => {
   const errorCode =error.code;
   const errorMessage = error.message;
   alert(errorMessage)
 });
}

)