// Global Vs
  let score = 0; 


// Initialize Firebase ============================================
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
      // Change text after login
      $('#loginMessage').text('Welcome to the Game!'); 
      $('#userName').text(email); 

    } else {
      console.log('Not logged in'); 
      btnLogout.classList.add('disabled'); 
      $('#loginMessage').text('Sign in'); 
      $('#userName').text('Sign in to play'); 

    }
  });

  // const auth = firebase.auth(); 

  // auth.signInWithEmailAndPassword(email, pass); 

  // auth.createUserWithEmailAndPassword(email, pass); 

  // auth.onAuthStateChanged(firebaseUser => {}); 

// ================================================================

// Sign In ========================================================
  $('.signIn').on('click', function() {
    $('.ui.modal').modal('show');
  }); 
// ================================================================

// Add BuzzWords ==================================================
  $('#addWordBtn').on('click', function() {
    const buttonCount = $('.buttons > button').length +1; 
    console.log(buttonCount); 
    if (buttonCount <= 3) {
      const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink']; 
      const rand = Math.floor(Math.random() * colors.length); 
      console.log(colors[rand]); 
      let newWord = $('#addWordInput').val(); 
      let newBtn = $(`<button class="ui button massive fluid" id="wordBtn"> ${newWord} </button>`); 
      newBtn.addClass(colors[rand]); 
      $('.buttons').append(newBtn); 
    }
  })
// ================================================================

// User Score======================================================
  $('.buttons').on('click', '#wordBtn', event => {
    score += 10; 
    console.log(score); 
    $('#currentScore').text(score); 
  })


// ================================================================
