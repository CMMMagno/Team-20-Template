//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------


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
// Henceforce, any reference to the database can be made with "firetstore"
const firestore = firebase.firestore();

// Name
const docRef = firestore.doc("Lobby/Name")
const outputHeader = document.querySelector("#LobbyName");
const inputTextField = document.querySelector("#latestNamestatus");
const saveButton = document.querySelector("#createButton");

const docRef = firestore.doc("Lobby/Game")
const 

saveButton.addEventListener("click", function() {
  const textToSave = inputTextField.value;
  console.log("I am goin to create" + textToSave + " to Firestore");
  docRef.set ({
    NameStatus: textToSave
  }).then(function(){
    console.log("Status saved!");
  }).catch(function(error) {
    console.log("Got an error: ", error);
  });
})

