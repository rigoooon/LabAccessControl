'use strict';

const firebaseConfig = {
  apiKey: "AIzaSyBlQDCXQdwh_si5FKqm04dJIl90SB4Y6Q4",
  authDomain: "lab-access-control-fd22a.firebaseapp.com",
  projectId: "lab-access-control-fd22a",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log('testtttttttttttttttttt')
document.getElementById('button').addEventListener('click', () => {
  const sname = document.getElementById('name').value;
  const sid = document.getElementById('sid').value;
  db.collection('users').doc(sid).set({
    ID: sid,
    NAME: sname,
    STATE: false
  })
});

