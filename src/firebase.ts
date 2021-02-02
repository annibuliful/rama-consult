import firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";
// import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdBqYo2FNvGJkV6otsTTUTvmdcwvGSlSM",
  authDomain: "rama-consult.firebaseapp.com",
  databaseURL: "https://rama-consult.firebaseio.com",
  projectId: "rama-consult",
  storageBucket: "rama-consult.appspot.com",
  messagingSenderId: "409806456851",
  appId: "1:409806456851:web:a338a421c3bfe9e96d57e6",
  measurementId: "G-XYSEWWE0MZ",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
