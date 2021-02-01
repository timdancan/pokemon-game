import { useState } from "react";
import s from "./MenuNavBar.module.css";
import cn from 'classnames'

const MenuNavBar = () => {
  const [isActive, setActive] = useState(false);
  const hendleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <nav id={s.navbar}>
        <div className={s.navWrapper}>
          <p className={s.brand}>LOGO</p>
          <a href
            className={cn(s.menuButton, {[s.active] : isActive})}
            onClick={hendleClick}
          >
            <span />
          </a>
        </div>
      </nav> 
      <div className={cn(s.menuContainer, isActive? s.active : s.deactive)}>
        <div className={s.overlay} />
        <div className={s.menuItems}>
          <ul>
            <li>
              <a href={s.welcome}>HOME</a>
            </li>
            <li>
              <a href={s.game}>GAME</a>
            </li>
            <li>
              <a href={s.about}>ABOUT</a>
            </li>
            <li>
              <a href={s.contact}>CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuNavBar;
