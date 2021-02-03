import { useState } from "react";
import Menu from '../Menu/Menu.js'
import NavBar from '../NavBar/NavBar.js'

const MenuNavBar = () => {

  
  const [isActive, setActive] = useState(false);
  const hendleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <NavBar onChangeState={hendleClick} isActive={isActive}/>
      <Menu isActive={isActive}/>
    </>
  );
};

export default MenuNavBar;
