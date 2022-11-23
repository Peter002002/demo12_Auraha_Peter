//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCHQpATTQYQ7utrrqy7RGgb9XoZkf3NcuU",
    authDomain: "comp1800-202223demos.firebaseapp.com",
    projectId: "comp1800-202223demos",
    storageBucket: "comp1800-202223demos.appspot.com",
    messagingSenderId: "949350223234",
    appId: "1:949350223234:web:3fe191322eba9b595ad39b",
    measurementId: "G-FWEW2JZVT0"

};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();