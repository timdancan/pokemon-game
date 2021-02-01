import { useState } from 'react'
import GamePage from './routes/Game/Game.js'
import HomePage from './routes/Home/Home.js'

const App = () => {
  const [page, setPage] = useState('app')

  const handleChangePage = () => {
    console.log('####: <Main />');
    setPage('game')
  }

  const handleClick = () => {
    setPage('app')
  }

  switch (page) {
    case "app":
      return <HomePage onChangePage={ handleChangePage }/>
    case "game":
      return <GamePage onClickTo={ handleClick }/>
    default: 
      return <HomePage />
  }
}

export default App