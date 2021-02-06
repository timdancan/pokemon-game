import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBoMDHxZXPFuW506tt_mtSDLmpiKhLjF3k",
  authDomain: "pokemon-card-game-98cfc.firebaseapp.com",
  databaseURL:
    "https://pokemon-card-game-98cfc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokemon-card-game-98cfc",
  storageBucket: "pokemon-card-game-98cfc.appspot.com",
  messagingSenderId: "1078581639103",
  appId: "1:1078581639103:web:5287317b3c21eba5fb530a",
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;
