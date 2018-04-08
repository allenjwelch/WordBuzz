// Global Vs

// NEW Initialize Firebase ============================================
  const config = {
    apiKey: "AIzaSyBck7AChLcdFaZc3duy3Em8MkuNxvXOxQQ",
    authDomain: "wordbuzz-b4032.firebaseapp.com",
    databaseURL: "https://wordbuzz-b4032.firebaseio.com",
    projectId: "wordbuzz-b4032",
    storageBucket: "wordbuzz-b4032.appspot.com",
    messagingSenderId: "651623045441"
  };
  firebase.initializeApp(config);

  // Get elements
  const userEmail = document.getElementById('userEmail'); 
  const userPassword = document.getElementById('userPassword'); 
  const btnLogin = document.getElementById('btnLogin'); 
  const btnLogout = document.getElementById('btnLogout'); 
  const btnSignUp = document.getElementById('btnSignUp'); 

  // Add login event
  btnLogin.addEventListener('click', event => {
    // Get email and pass
    const email = userEmail.value; 
    const pass = userPassword.value; 
    const auth = firebase.auth(); 
    const promise = auth.signInWithEmailAndPassword(email, pass);
    console.log('Signed in!');  
    promise.catch(error => console.log(error.message));
  })

  // Add Sign Up event
  btnSignUp.addEventListener('click', event => {
    // Get email and pass
    const email = userEmail.value; 
    const pass = userPassword.value; 
    const auth = firebase.auth(); 
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    console.log('Signed up!'); 
    promise.catch(error => console.log(error.message));
  })

  btnLogout.addEventListener('click', event => {
    firebase.auth().signOut(); 
  })

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser); 
      btnLogout.classList.remove('disabled'); 
    } else {
      console.log('Not logged in'); 
      btnLogout.classList.add('disabled'); 
    }
  });

  // const auth = firebase.auth(); 

  // auth.signInWithEmailAndPassword(email, pass); 

  // auth.createUserWithEmailAndPassword(email, pass); 

  // auth.onAuthStateChanged(firebaseUser => {}); 












// ================================================================

// Initialize Firebase ============================================
  // const config = {
  //   apiKey: "AIzaSyBck7AChLcdFaZc3duy3Em8MkuNxvXOxQQ",
  //   authDomain: "wordbuzz-b4032.firebaseapp.com",
  //   databaseURL: "https://wordbuzz-b4032.firebaseio.com",
  //   projectId: "wordbuzz-b4032",
  //   storageBucket: "wordbuzz-b4032.appspot.com",
  //   messagingSenderId: "651623045441"
  // };
  // firebase.initializeApp(config);

  // function toggleSignIn() {
  //   if (firebase.auth().currentUser) {
  //     // [START signout]
  //     firebase.auth().signOut();
  //     // [END signout]
  //   } else {
  //     var email = document.getElementById('email').value;
  //     var password = document.getElementById('password').value;
  //     if (email.length < 4) {
  //       alert('Please enter an email address.');
  //       return;
  //     }
  //     if (password.length < 4) {
  //       alert('Please enter a password.');
  //       return;
  //     }
      
  //     // Sign in with email and pass.
  //     // [START authwithemail]
  //     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // [START_EXCLUDE]
  //       if (errorCode === 'auth/wrong-password') {
  //         alert('Wrong password.');
  //       } else {
  //         alert(errorMessage);
  //       }
  //       console.log(error);
  //       document.getElementById('quickstart-sign-in').disabled = false;
  //       // [END_EXCLUDE]
  //     });
  //     // [END authwithemail]
  //   }
  //   document.getElementById('quickstart-sign-in').disabled = true;
  // }

  // /**
  //  * Handles the sign up button press.
  //  */
  // function handleSignUp() {
  //   var email = document.getElementById('email').value;
  //   var password = document.getElementById('password').value;
  //   if (email.length < 4) {
  //     alert('Please enter an email address.');
  //     return;
  //   }
  //   if (password.length < 4) {
  //     alert('Please enter a password.');
  //     return;
  //   }
  //   // Sign in with email and pass.
  //   // [START createwithemail]
  //   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // [START_EXCLUDE]
  //     if (errorCode == 'auth/weak-password') {
  //       alert('The password is too weak.');
  //     } else {
  //       alert(errorMessage);
  //     }
  //     console.log(error);
  //     // [END_EXCLUDE]
  //   });
  //   // [END createwithemail]
  // }

  // /**
  //      * initApp handles setting up UI event listeners and registering Firebase auth listeners:
  //      *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
  //      *    out, and that is where we update the UI.
  //      */
  //     function initApp() {
  //       // Listening for auth state changes.
  //       // [START authstatelistener]
  //       firebase.auth().onAuthStateChanged(function(user) {
  //         // [START_EXCLUDE silent]
  //         // [END_EXCLUDE]
  //         if (user) {
  //           // User is signed in.
  //           var displayName = user.displayName;
  //           var email = user.email;
  //           var emailVerified = user.emailVerified;
  //           var photoURL = user.photoURL;
  //           var isAnonymous = user.isAnonymous;
  //           var uid = user.uid;
  //           var providerData = user.providerData;
  //           // [START_EXCLUDE]
  //           document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
  //           document.getElementById('quickstart-sign-in').textContent = 'Sign out';
  //           document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
  //           if (!emailVerified) {
  //             // document.getElementById('quickstart-verify-email').disabled = false;
  //           }
  //           // [END_EXCLUDE]
  //         } else {
  //           // User is signed out.
  //           // [START_EXCLUDE]
  //           document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
  //           document.getElementById('quickstart-sign-in').textContent = 'Sign in';
  //           document.getElementById('quickstart-account-details').textContent = 'null';
  //           // [END_EXCLUDE]
  //         }
  //         // [START_EXCLUDE silent]
  //         document.getElementById('quickstart-sign-in').disabled = false;
  //         // [END_EXCLUDE]
  //       });
  //       // [END authstatelistener]
  //       document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
  //       document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
  //     }
  //     window.onload = function() {
  //       initApp();
  //     };
// ================================================================

// Sign In ========================================================
  $('.signIn').on('click', function() {
    $('.ui.modal').modal('show');
  }); 
// ================================================================

// ===================================

  $('#addWordBtn').on('click', function() {
    const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink']; 
    const rand = Math.floor(Math.random() * colors.length); 
    console.log(colors[rand]); 
    let newWord = $('#addWordInput').val(); 
    let newBtn = $(`<button class="ui button massive"> ${newWord} </button>`); 
    newBtn.addClass(colors[rand]); 
    $('.buttons').append(newBtn); 
  })
// ===================================
