'use strict';

// import { FormControlUnstyledContext } from "@mui/base";
// import { formControlClasses } from "@mui/material";

const firebaseConfig = {
  apiKey: "AIzaSyBlQDCXQdwh_si5FKqm04dJIl90SB4Y6Q4",
  authDomain: "lab-access-control-fd22a.firebaseapp.com",
  projectId: "lab-access-control-fd22a",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const btn = document.getElementById('btn')
const hidden = document.getElementById('hidden')
const description = document.getElementById('description')
const popup = document.getElementById('popup')

btn.addEventListener('click', () => {
  const sname = document.getElementById('name').value
  const sid = document.getElementById('sid').value
  if(sid.length === 8){
    description.style.display = 'none'
    popup.style.display = 'block'
    hidden.style.display = 'none'
    db.collection('users').doc(sid).set({
      ID: sid,
      NAME: sname,
      STATE: false
    })
    setTimeout(function(){
      window.location.href = 'home.html';
    }, 5*1000);
  } else {
    window.alert('学生番号は8桁で入力してください。')
  }
});



// const idName = "NRDhwLonv9yDufvNuE08";

// var docRef = db.collection("users").doc(idName);

// docRef.get().then((doc) => {
  //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
      //         // doc.data() will be undefined in this case
      //         console.log("No such document!");
      //     }
      // })