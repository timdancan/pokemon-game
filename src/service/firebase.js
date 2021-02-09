import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAjd0XGNEvuc1nZTtqlZGW2OVYHZHVbOn4",
  authDomain: "pokemon-game-bc15c.firebaseapp.com",
  databaseURL: "https://pokemon-game-bc15c-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-bc15c",
  storageBucket: "pokemon-game-bc15c.appspot.com",
  messagingSenderId: "922925832715",
  appId: "1:922925832715:web:4d8796e99f27628e92c50e",
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;
