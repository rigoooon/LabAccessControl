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
