// import { useState } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import MenuNavBar from "./components/MenuNavBar/MenuNavBar.js";
import GamePage from "./routes/Game/Game.js";
import HomePage from "./routes/Home/Home.js";
import AboutPage from "./routes/About/About.js";
import ContactPage from "./routes/Contact/Contact.js";
import NotFound from "./routes/NotFound/NotFound.js";
import s from "./App.module.css"
import cn from 'classnames'
import {FireBaseContext} from './context/firebaseContext'
import Firebase from "./service/firebase.js";

const App = () => {
  const location = useLocation()
  const isPadding = location.pathname === '/' || location.pathname === '/game/board'
  return (
    <FireBaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <>
            <MenuNavBar bgActive={!isPadding.isExact}/>
            <div className={cn(s.wrap, {
              [s.isHomePage]: isPadding.isExact
            })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={() => (
                  <Redirect to="/404"/>
                )} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FireBaseContext.Provider>
  );
  // const [page, setPage] = useState('app')

  // const handleChangePage = (page) => {
  //   setPage(page)
  // }

  // switch (page) {
  //   case "app":
  //     return <HomePage onChangePage={ handleChangePage }/>
  //   case "game":
  //     return <GamePage onChangePage={ handleChangePage }/>
  //   default:
  //     return <HomePage />
  // }
};

export default App;
