import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCXHp5sHhxWBpdofMeYweZ5eI7INoOTPZI",
    authDomain: "fashoe-df759.firebaseapp.com",
    databaseURL: "https://fashoe-df759.firebaseio.com",
    projectId: "fashoe-df759",
    storageBucket: "fashoe-df759.appspot.com",
    messagingSenderId: "884199395808",
    appId: "1:884199395808:web:7ec7d623b9ab0c375a5b85",
    measurementId: "G-2RCWGQ1RJ3"
  };

  // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);

  export default fire;