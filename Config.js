import * as firebase from 'firebase';
require("@firebase/firestore")  

var firebaseConfig = {
    apiKey: "AIzaSyCwsvUAyNt7tSYE3ufUkXVnwjJ0KW6M-Sg",
    authDomain: "book-santa-8b40c.firebaseapp.com",
    projectId: "book-santa-8b40c",
    storageBucket: "book-santa-8b40c.appspot.com",
    messagingSenderId: "672890185584",
    appId: "1:672890185584:web:429d225cb258e176a351b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();