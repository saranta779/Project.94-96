
user_name = localStorage.getItem("user_name");

document.getAnimations("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "Adding Room Name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = ("kwitter_page.html");
}

//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsnGjrMfpewRfEz8PHobdctKJl8i7_ShY",
  authDomain: "class-93-94.firebaseapp.com",
  projectId: "class-93-94",
  storageBucket: "class-93-94.appspot.com",
  messagingSenderId: "283833761615",
  appId: "1:283833761615:web:2ad3b0dc22158cdd764f3a",
  measurementId: "G-YK0EE41R2J"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_Name - " + Room_names);
      row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });
    });
  }
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}