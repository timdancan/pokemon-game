const GamePage = ({ onClickTo }) => {
  
  const handleClick = () => {
    onClickTo ()
  }

  return(
    <div>
      This is a Game Page!!!
      <button onClick={ handleClick }>
        Back to Main Page 
      </button>
    </div>
  )
}

export default GamePage