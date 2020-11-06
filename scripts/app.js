
function readQuote(){
    db.collection("quotes").doc("01")
    .onSnapshot(function(snap){
        console.log(snap.data()); //print the document fields of "01"
        console.log(snap.data().message); //spelled EXACTLY as the firestore
        document.getElementById("abc").innerText = snap.data().message;
    })
}
readQuote();