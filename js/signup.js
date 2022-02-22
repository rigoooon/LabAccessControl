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
  description.style.display = 'none'
  popup.style.display = 'block'
  hidden.style.display = 'none'
  const sname = document.getElementById('name').value
  const sid = document.getElementById('sid').value
  db.collection('users').doc(sid).set({
    ID: sid,
    NAME: sname,
    STATE: false
  })
  setTimeout(function(){
    window.location.href = 'home.html';
  }, 5*1000);
});

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: './index.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.利用規約
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};
ui.start('#firebaseui-auth-container', uiConfig);
const user = firebase.auth().currentUser;
console.log(user);
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
//     signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         firebase.auth.GithubAuthProvider.PROVIDER_ID
//       ],
//       // Other config options...
//     });



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