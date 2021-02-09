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

class Firebase {
  consrtuctor() {
    this.fire = firebase;
    this.database = this.fire.database(); 
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot)=> {
        cb(snapshot.val())
    })
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(spanshot => spanshot.val())
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon)
  }

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key
    this.database.ref('pokemons/' + newKey).set(data).then(()=> cb())
  }
}



export default Firebase;
