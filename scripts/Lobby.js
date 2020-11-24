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

