import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC4HldZMvCmLvfH4nOtkdiP83CHzYDzhK8",
  authDomain: "react-todolist-crud.firebaseapp.com",
  projectId: "react-todolist-crud",
  storageBucket: "react-todolist-crud.appspot.com",
  messagingSenderId: "215111995676",
  appId: "1:215111995676:web:8c774eb73b0ea6eb0fead9",
  measurementId: "G-JML780QNYG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
