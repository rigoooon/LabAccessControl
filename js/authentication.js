'use strict';

const firebaseConfig = {
  apiKey: "AIzaSyBlQDCXQdwh_si5FKqm04dJIl90SB4Y6Q4",
  authDomain: "lab-access-control-fd22a.firebaseapp.com",
  projectId: "lab-access-control-fd22a",
};

firebase.initializeApp(firebaseConfig);

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log('ログイン成功')
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
  signInSuccessUrl: '../public/home.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.利用規約
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};
ui.start('#firebaseui-auth-container', uiConfig);
const user = firebase.auth().currentUser;
console.log('adjf')
console.log(user);

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