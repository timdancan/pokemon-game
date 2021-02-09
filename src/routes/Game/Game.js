import StartPage from "./Start/Start";
import BoardPage from "./Board/Board";
import FinishPage from './Finish/Finish'
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { PokemonContext } from '../../context/pokemonContext'

const GamePage = () => {
  const match = useRouteMatch();
  return (
    <PokemonContext.Provider>
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage