const firebaseConfig = {
    apiKey: "AIzaSyBlQDCXQdwh_si5FKqm04dJIl90SB4Y6Q4",
    authDomain: "lab-access-control-fd22a.firebaseapp.com",
    projectId: "lab-access-control-fd22a",
    storageBucket: "lab-access-control-fd22a.appspot.com",
    messagingSenderId: "953764799616",
    appId: "1:953764799616:web:ac540113f7c30b6f1ff265",
    measurementId: "G-H3CBVJDVSX"
  };
  
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
var ui = new firebaseui.auth.AuthUI(firebase.auth());
const user = firebase.auth().currentUser;
console.log('adjf')
console.log(user);
 

db.collection("users").where('STATE', '==', true).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        userName = doc.data().NAME;
        const item = document.createElement('p');
        item.textContent = userName;
        const inList = document.querySelector('.in');
        inList.appendChild(item)
    });
});

db.collection("users").where('STATE', '==', false).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        userName = doc.data().NAME;
        const item = document.createElement('p');
        item.textContent = userName;
        const outList = document.querySelector('.out');
        outList.appendChild(item)
    });
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });