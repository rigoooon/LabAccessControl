const firebaseConfig = {
    apiKey: "AIzaSyBlQDCXQdwh_si5FKqm04dJIl90SB4Y6Q4",
    authDomain: "lab-access-control-fd22a.firebaseapp.com",
    projectId: "lab-access-control-fd22a",
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

db.collection("users").where('STATE', '==', true).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        userName = doc.data().NAME;
        const item = document.createElement('li');
        item.textContent = userName;
        const ul = document.querySelector('.in');
        ul.appendChild(item)
    });
});

db.collection("users").where('STATE', '==', false).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        userName = doc.data().NAME;
        const item = document.createElement('li');
        item.textContent = userName;
        const ul = document.querySelector('.out');
        ul.appendChild(item)
    });
});
