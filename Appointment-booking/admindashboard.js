// Import the functions you need from the SDKs you need
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



const addbtn = document.getElementById("add-teacher-btn");

addbtn.addEventListener("click", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let idno = document.getElementById("id-no").value;
  let dept = document.getElementById("depertment").value;
  let sub = document.getElementById("subject").value;

  set(ref(db, "TeacherList/" + idno), {
    Id_No: idno,
    Name: name,
    Depertment: dept,
    Subject: sub,
  })
    .then(() => {
      alert("Teacher Added Successfully");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});

const updatebtn = document.getElementById("update-teacher-btn");

updatebtn.addEventListener("click", function (event) {
  event.preventDefault();

  let name = document.getElementById("name1").value;
  let idno = document.getElementById("id-no1").value;
  let dept = document.getElementById("depertment1").value;
  let sub = document.getElementById("subject1").value;

  update(ref(db, "TeacherList/" + idno), {
    Name: name,
    Depertment: dept,
    Subject: sub,
  })
    .then(() => {
      alert("Teacher Updated Successfully");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});

const deletebtn = document.getElementById("delete-teacher-btn");

deletebtn.addEventListener("click", function (event) {
  event.preventDefault();

  let idno = document.getElementById("id-no2").value;

  remove(ref(db, "TeacherList/" + idno))
    .then(() => {
      alert("Teacher Deleted Successfully");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});
