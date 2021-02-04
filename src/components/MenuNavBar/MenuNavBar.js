import { useState } from "react";
import Menu from '../Menu/Menu.js'
import NavBar from '../NavBar/NavBar.js'

const MenuNavBar = ({ bgActive }) => {

  const [isActive, setActive] = useState(null);
  const hendleClick = () => {
    setActive(prevState => !prevState);
  };

  return (
    <>
      <NavBar onChangeState={hendleClick} bgActive={bgActive} isActive={isActive}/>
      <Menu isActive={isActive} onMenuClickClose={hendleClick}/>
    </>
  );
};

export default MenuNavBar;
