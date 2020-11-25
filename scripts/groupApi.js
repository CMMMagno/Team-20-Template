//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------
var fb = {};
var firebaseConfig = {

  // Your API stuff goes here;  get it from firebase console
  apiKey: "AIzaSyAX9CCcCUrLL2NhSkknMZPnoj7WteFCyC0",
  authDomain: "group-20-68f71.firebaseapp.com",
  databaseURL: "https://group-20-68f71.firebaseio.com",
  projectId: "group-20-68f71",
  storageBucket: "group-20-68f71.appspot.com",
  messagingSenderId: "946471654834",
  appId: "1:946471654834:web:c1c9dbbd720692b56480ab",
  measurementId: "G-TBS0PL8RWD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Create the Firestore database object
// Henceforce, any reference to the database can be made with "db"
fb = firebase;
const db = firebase.firestore();