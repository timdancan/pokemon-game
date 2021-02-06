import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import database from '../../service/firebase.js'
import s from "./Game.module.css";
import cn from "classnames";
import PokemonCard from "../../components/PokemonCard/PokemonCard.js";

const GamePage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val())
    })
  }, [])

  const handleClickPokemon = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
          const pokemon = {...item[1]};
          if (pokemon.id === id) {
              pokemon.active = !pokemon.active;
              database.ref('pokemons/'+ item[0]).set({...item[1], isActive:true})
          };
  
          acc[item[0]] = pokemon;
          return acc;
      }, {});
    });
  };

  const addPokemon = () => {
    const newKey = database.ref().child('pokemons').push().key
    const updates = {}
    updates['/pokemons/' + newKey] = 'postData'
    return database.ref().update(updates)
  }

  return (
    <>
      <section className={s.root} id="gamePage">
        <div className={s.wrapper}>
          <article>
            <div className={s.title}>
              <h3>Game</h3>
              <span className={s.separator}></span>
            </div>
            <button className={s.button} onClick={addPokemon}>Add new pokemon</button>
            <div className={cn(s.desc, s.full)}>
              <div className={s.flex}>
                {
                  Object.entries(pokemons).map(([key ,{name, img, id, type, values, active}]) => (
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
                ))}
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
