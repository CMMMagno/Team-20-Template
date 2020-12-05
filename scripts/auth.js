var firebase = fb;
var uid = null;

// Checks if user is logged in, if not he/she is redirected back to the landing page
firebase.auth().onAuthStateChanged(function (user) {
  console.log(user);
  if (user) {
    // User is signed in.
    uid = user.uid;
  } else {
    // Redirect to login page
    uid = null;
    window.location.replace("../index.html");
  }
});

// Logout out function
function logOut() {
  firebase.auth().signOut();
};