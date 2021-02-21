import StartPage from "./routes/Start/Start";
import BoardPage from "./routes/Board/Board";
import FinishPage from './routes/Finish/Finish'
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { PokemonContext } from '../../context/pokemonContext'
import { useState } from 'react'

const GamePage = () => {
  const [selectedPokemon, setSelectedPokemon] = useState({})
  const match = useRouteMatch();
  const hendleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemon(prevState => {
      if (prevState[key]) {
        const copyState = {...prevState}
        delete copyState[key]
        return copyState
      }
      return {
        ...prevState,
        [key]: pokemon
      }
    })
  }
  return (
    <PokemonContext.Provider value={{ 
      pokemon: selectedPokemon, 
      onSelectedPokemons: hendleSelectedPokemons,
      pokemon2: {}
    }}>
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
