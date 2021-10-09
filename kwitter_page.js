//YOUR FIREBASE LINKS
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsnGjrMfpewRfEz8PHobdctKJl8i7_ShY",
  authDomain: "class-93-94.firebaseapp.com",
  databaseURL: "https://class-93-94-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "class-93-94",
  storageBucket: "class-93-94.appspot.com",
  messagingSenderId: "283833761615",
  appId: "1:283833761615:web:2ad3b0dc22158cdd764f3a",
  measurementId: "G-YK0EE41R2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logOut()
{
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name");

      window.location.replace("kwitter.html");
}