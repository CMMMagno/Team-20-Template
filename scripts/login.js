//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
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
firebase.analytics();
// Create the Firestore database object
// Henceforce, any reference to the database can be made with "firetstore"
const firestore = firebase.firestore();

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            //------------------------------------------------------------------------------------------
            // The code below is modified from default snippet provided by the FB documentation.
            //
            // If the user is a "brand new" user, then create a new "user" in your own database.
            // Assign this user with the name and email provided.
            // Before this works, you must enable "Firestore" from the firebase console.
            // The Firestore rules must allow the user to write. 
            //------------------------------------------------------------------------------------------
            var user = authResult.user;
            if (authResult.additionalUserInfo.isNewUser) {
                db.collection("Users").doc(User.uid).set({
                        name: User.displayName,
                        email: User.email
                    }).then(function () {
                        console.log("New user added to firestore");
                        window.location.assign("../homepage.html");
                    })
                    .catch(function (error) {
                        console.log("Error adding new user: " + error);
                    });
            } else {
                return true;
            }
            return false;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '../homepage.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'main.html',
    // Privacy policy url.
    privacyPolicyUrl: 'main.html',
    accountChooserEnabled: false
};
// The start method will wait until the DOM is loaded.
// Inject the login interface into the HTML
ui.start('#firebaseui-auth-container', uiConfig);