import * as firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyAryvF8k0c6zSMrywb6-SwfZV_twsd0rsk",
    authDomain: "bandr-2d2e7.firebaseapp.com",
    databaseURL: "https://bandr-2d2e7.firebaseio.com",
    projectId: "bandr-2d2e7",
    storageBucket: "bandr-2d2e7.appspot.com",
    messagingSenderId: "663526554775",
    appId: "1:663526554775:web:6938a004df0fecf212bdd2",
    measurementId: "G-GZZ7KHZ2WJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const database = firebase.database().ref('/songs');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
