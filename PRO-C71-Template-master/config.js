import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-UCfP9-5cq6YKyqGAVnVHQrpkghuBzv8",
  authDomain: "e-ride-96af9.firebaseapp.com",
  databaseURL: "https://e-ride-96af9-default-rtdb.firebaseio.com",
  projectId: "e-ride-96af9",
  storageBucket: "e-ride-96af9.appspot.com",
  messagingSenderId: "1056904105105",
  appId: "1:1056904105105:web:c7636719612e9dc6d38330"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
