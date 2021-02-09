import { useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import s from "./Start.module.css";
import cn from "classnames";
import PokemonCard from "../../../components/PokemonCard/PokemonCard.js";
import {FireBaseContext} from '../../../context/firebaseContext'
import { Link } from 'react-router-dom'
import { PokemonContext } from "../../../context/pokemonContext";

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
  const firebase = useContext(FireBaseContext)
  const history = useHistory();
  const SelectedContext = useContext(PokemonContext);

  const handleClick = () => {
    history.push("/");
  };

  const [pokemons, setPokemons] = useState({});


  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons)
    })
  }, []);

  const handleClickPokemon = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id && !pokemon.isSelected) {
          pokemon.active = true;
          pushToContext(item)
        }

        acc[item[0]] = pokemon;
        firebase.postPokemon(item[0], pokemon)
        return acc;
      }, {});
    });
  };

  const pushToContext = (val) => {
    SelectedContext.pokemon.push(val)
  }

  const addPokemon = () => {
    const data = pokemonich
    firebase.addPokemon(data)
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
              Add Pokemon
            </button>
            <Link to="game/board">
            <button className={s.button}>
              Start Game
            </button>
            </Link>
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
                      minimize={true}
                      className={s.card}
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
