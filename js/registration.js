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
const modalOpen = document.getElementById('button')
const modal = document.getElementById('modal')

modalOpen.addEventListener('click', () => {
  modal.style.display = 'block'
  const sname = document.getElementById('name').value
  const sid = document.getElementById('sid').value
  db.collection('users').doc(sid).set({
    ID: sid,
    NAME: sname,
    STATE: false
  })
});






// db.collection("users").doc("test").set({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });


// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });
// });


// *******************  Firebase Login  *******************
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start('#firebaseui-auth-container', {
  //   signInOptions: [
    //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //     firebase.auth.GithubAuthProvider.PROVIDER_ID
    //   ],
    //   // Other config options...
    // });



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