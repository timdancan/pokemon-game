import { useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import s from "./Start.module.css";
import cn from "classnames";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";


const StartPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const firebase = useContext(FireBaseContext);
  const pokemonContext = useContext(PokemonContext)
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });

    return () => firebase.offPokemonSoket();
  }, []);

  const handleClickPokemon = (key) => {
    const pokemon = {...pokemons[key]}
    pokemonContext.onSelectedPokemons(key, pokemon)
    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected
      }
    }))
  };

  const handleStatrGameClick = () => {
    history.push('/game/board')
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
            <button className={s.button} onClick={handleStatrGameClick}
            disabled={Object.keys(pokemonContext.pokemon).length < 5}
            >
              Start game
            </button>
            <div className={cn(s.desc, s.full)}>
              <div className={s.flex}>
                {Object.entries(pokemons).map(
                  ([key, { name, img, id, type, values, selected }]) => (
                    <PokemonCard
                      className={s.card}
                      isActive={true}
                      onCardClick={() => {
                        if (Object.keys(pokemonContext.pokemon).length < 5 || selected) {
                          handleClickPokemon(key)
                        }
                      }}
                      key={key}
                      name={name}
                      img={img}
                      id={id}
                      type={type}
                      values={values}
                      isSelected={selected}
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

export default StartPage;
