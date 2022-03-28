// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAfPXuEnoblw8-dwvCiJ2jRTVjEBM9dRfs",
  authDomain: "kwitterbetterthantwitter.firebaseapp.com",
  databaseURL: "https://kwitterbetterthantwitter-default-rtdb.firebaseio.com",
  projectId: "kwitterbetterthantwitter",
  storageBucket: "kwitterbetterthantwitter.appspot.com",
  messagingSenderId: "699764188849",
  appId: "1:699764188849:web:e06cfef9a5d3118bc6e490"
};

// Initialize Firebase
var initializeApp=(firebaseConfig);



function done(){
   var email= document.getElementById("el_mail").value;
   localStorage.setItem("e-mail",email);
   var passcode = document.getElementById("passcode_1").value;
   localStorage.setItem("passcode", passcode);
   var username = document.getElementById("user_your_name").value;
   localStorage.setItem("yourname",username) ;
   window.location="kwitter_room.html";

   firebase.database().ref("/").child(username).update({
      purpose : "Username"
    });

    firebase.database().ref("/").child(passcode).update({
      purpose : "passcode"
    });

    firebase.database().ref("/").child(email).update({
      purpose : "email"
    });
}  