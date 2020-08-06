import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZy7D9SiCkPoQorYtMiKJOjTE1pYHGTIQ",
  authDomain: "reactnative-firebase-c2df2.firebaseapp.com",
  databaseURL: "https://reactnative-firebase-c2df2.firebaseio.com",
  projectId: "reactnative-firebase-c2df2",
  storageBucket: "reactnative-firebase-c2df2.appspot.com",
  messagingSenderId: "1087093431691",
  appId: "1:1087093431691:web:f01f4dc748e39bd331e38e",
  measurementId: "G-EFTRLDYFPN",
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
