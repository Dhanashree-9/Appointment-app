import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
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



const bookbtn = document.getElementById("book-appointment");

bookbtn.addEventListener("click", 
    function (event) {
     event.preventDefault();

  let idno = document.getElementById("idno11").value;
  let date = document.getElementById("date11").value;
  let time = document.getElementById("time11").value;

  set(ref(db, "AppointmentList/" + idno), {
    Id_No: idno,
    Date: date,
    Time: time,
  })
    .then(() => {
      alert("Appointment Booked");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});

const cancelbtn = document.getElementById("cancel-appointment");

cancelbtn.addEventListener("click", 
    function (event) {
  event.preventDefault();

  let idno12 = document.getElementById("booking-id").value;

  remove(ref(db, "AppointmentList/" + idno12))
    .then(() => {
      alert("Appointment Cancelled");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});


//student profile update

const updatebtn = document.getElementById("update-profile");

updatebtn.addEventListener("click", 
  function (event) {
  event.preventDefault();

  let name = document.getElementById("name21").value;
  let roll = document.getElementById('roll21').value;
  let email = document.getElementById("email21").value;
  let pass = document.getElementById("password21").value;

  update(ref(db, "students/" + roll), {
    Name: name,
    Roll: roll,
    Email: email,
    Password: pass,
  })
    .then(() => {
      alert("Profile Updated Successfully");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});

//send messages
const sendbtn = document.getElementById("send-message");

sendbtn.addEventListener("click", 
    function (event) {
     event.preventDefault();

  let name200 = document.getElementById("name200").value;
  let roll200 = document.getElementById("roll200").value;
  let mess200 = document.getElementById("mess200").value;

  set(ref(db, "Messages/" + roll200), {
    Name: name200,
    Roll: roll200,
    Message: mess200,
  })
    .then(() => {
      alert("Message Sent");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});