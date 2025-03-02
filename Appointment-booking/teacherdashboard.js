import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
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
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//update appointment

const updatebtn = document.getElementById("update-appointment");

updatebtn.addEventListener("click", function (event) {
  event.preventDefault();

  let idno = document.getElementById("idno11").value;
  let date11 = document.getElementById("date11").value;
  let time11 = document.getElementById("time11").value;

  update(ref(db, "AppointmentList/" + idno), {
    Date: date11,
    Time: time11,
  })
    .then(() => {
      alert("Appointment Updated Successfully");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});


//delete appointment

const cancelbtn = document.getElementById("cancel-appointment");

cancelbtn.addEventListener("click", 
    function (event) {
  event.preventDefault();

  let idno12 = document.getElementById("booking-id1").value;

  remove(ref(db, "AppointmentList/" + idno12))
    .then(() => {
      alert("Appointment Cancelled");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});


//update profile

const ubtn = document.getElementById("update-profile");

ubtn.addEventListener("click", 
  function (event) {
  event.preventDefault();

  let id21 = document.getElementById('idno100').value;
  let email21 = document.getElementById("email21").value;
  let pass21 = document.getElementById("password21").value;

  update(ref(db, "teachers/" + id21), {
    Email: email21,
    Password: pass21,
  })
    .then(() => {
      alert("Profile Updated Successfully");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});


//delete messages

const delbtn = document.getElementById("delete-message");

delbtn.addEventListener("click", 
    function (event) {
  event.preventDefault();

  let roll121 = document.getElementById("roll121").value;

  remove(ref(db, "Messages/" + roll121))
    .then(() => {
      alert("Message Deleted");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});
