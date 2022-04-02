import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyDxE0uYJyNcLwSFPH2vnNTeR55wpRU9jSU",
    authDomain: "appcar-306903.firebaseapp.com",
    databaseURL: "https://appcar-306903-default-rtdb.firebaseio.com",
    projectId: "appcar-306903",
    storageBucket: "appcar-306903.appspot.com",
    messagingSenderId: "854083035159",
    appId: "1:854083035159:web:5f93d36b6da3f1a69dfc52",
    measurementId: "G-8QSVQQPJRK"
  };
  
 
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);  
  }

  export default firebase;
  


  
