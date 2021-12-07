import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxRIKldBdy0mjOCHK3HBKXQCTEsZuwE_Y",
    authDomain: "slack-101ce.firebaseapp.com",
    projectId: "slack-101ce",
    storageBucket: "slack-101ce.appspot.com",
    messagingSenderId: "1014400539890",
    appId: "1:1014400539890:web:ba6697dc26ebb369cd846b",
    measurementId: "G-SN16MKKL6X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;