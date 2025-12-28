
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA5_zyK4tgh7N_uuGGZBYvWuQKzaPKIzfM",
    authDomain: "login-signup-6d598.firebaseapp.com",
    projectId: "login-signup-6d598",
    storageBucket: "login-signup-6d598.firebasestorage.app",
    messagingSenderId: "870835315501",
    appId: "1:870835315501:web:90de39b677b894666829a4",
    measurementId: "G-M7NVXJWTNF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  
  const signup=document.getElementById('signup');
  signup.addEventListener("click",function(event){

    const email=document.getElementById('email').value;
  const password=document.getElementById('password').value;

    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account..");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
  }  )
 
  let login=document.getElementById('login');
  login.addEventListener("click",function(event){

    const loginemail=document.getElementById('loginemail');
    const loginpassword=document.getElementById('loginpassword');

    const auth = getAuth();
signInWithEmailAndPassword(auth, loginemail.value, loginpassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("logging in...");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  })
