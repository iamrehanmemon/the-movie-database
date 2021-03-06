import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAcwVDrkzmPpYo9eJ3e_LAOUtIw2iSI5ik",
  authDomain: "flex-n-chill.firebaseapp.com",
  databaseURL: "https://flex-n-chill.firebaseio.com",
  projectId: "flex-n-chill",
  storageBucket: "flex-n-chill.appspot.com",
  messagingSenderId: "264552526387",
  appId: "1:264552526387:web:22d7d22d0a9db99650e946"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
