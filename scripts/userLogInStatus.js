var firebase = fb;
var uid = null;
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    uid = user.uid;
  } else {
    // Redirect to login page
    uid = null;
    window.location.replace("index.html");
  }
});

// Logout out 
function logOut() {
  firebase.auth().signOut();
};