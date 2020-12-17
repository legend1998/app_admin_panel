// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8mgTQZgS7jUsrmHFVkoqKDsPaPGemfqM",
  authDomain: "fashion-app-7be49.firebaseapp.com",
  databaseURL: "https://fashion-app-7be49.firebaseio.com",
  projectId: "fashion-app-7be49",
  storageBucket: "fashion-app-7be49.appspot.com",
  messagingSenderId: "385222420473",
  appId: "1:385222420473:web:ebb6069ee7422b3bed7f28",
  measurementId: "G-JBTDEP8NB0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebaseApp.storage();

export { storage };
