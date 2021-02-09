import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import database from "../../../service/firebase.js";
import s from "./Start.module.css";
import cn from "classnames";
import PokemonCard from "../../../components/PokemonCard/PokemonCard.js";

const pokemonich = {
    "abilities" : [ "intimidate", "shed-skin", "unnerve" ],
    "base_experience" : 157,
    "height" : 35,
    "id" : 24,
    "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    "name" : "arbok",
    "stats" : {
      "attack" : 95,
      "defense" : 69,
      "hp" : 60,
      "special-attack" : 65,
      "special-defense" : 79,
      "speed" : 80
    },
    "type" : "poison",
    "values" : {
      "bottom" : "A",
      "left" : "A",
      "right" : 9,
      "top" : 5
    }
}

const GamePage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const [pokemons, setPokemons] = useState({});

  const getPokemons = () => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }

  useEffect(() => {
    getPokemons()
  }, []);

  const handleClickPokemon = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }

        acc[item[0]] = pokemon;

        database.ref('pokemons/' + item[0]).set(pokemon)
        return acc;
      }, {});
    });
  };

  const addPokemon = () => {
    const newKey = database.ref().child("pokemons").push().key;
    const updates = {};
    updates["/pokemons/" + newKey] = pokemonich;
    return database.ref().update(updates);
  };

  return (
    <>
      <section className={s.root} id="gamePage">
        <div className={s.wrapper}>
          <article>
            <div className={s.title}>
              <h3>Game</h3>
              <span className={s.separator}></span>
            </div>
            <button className={s.button} onClick={addPokemon}>
              Add new pokemon
            </button>
            <div className={cn(s.desc, s.full)}>
              <div className={s.flex}>
                {Object.entries(pokemons).map(
                  ([key, { name, img, id, type, values, active }]) => (
                    <PokemonCard
                      isActive={active}
                      onCardClick={handleClickPokemon}
                      key={key}
                      name={name}
                      img={img}
                      id={id}
                      type={type}
                      values={values}
                    />
                  )
                )}
              </div>
            </div>
          </article>
        </div>
      </section>
      <button onClick={handleClick}>Back to Main Page</button>
    </>
  );
};

export default GamePage;
