import s from "./Menu.module.css";
import cn from "classnames";
import { Link } from 'react-router-dom'

const MENU = [
  {
    title: 'HOME',
    to: 'home'
  },
  {
    title: 'GAME',
    to: 'game'
  },
  {
    title: 'ABOUT',
    to: 'about'
  },
  {
    title: 'CONTACT',
    to: 'contact'
  },
]

const Menu = ({isActive, onMenuClickClose}) => {
  const onMenuClick = () => {
    onMenuClickClose()
  }
  return (
    <div className={cn(s.menuContainer,{ 
      [s.active] : isActive === true,
      [s.deactive]: isActive === false
      })}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {
            MENU.map(({title, to}, index) => (
              <li key={index}>
                <Link onClick={onMenuClick} to={`/${to}`}>{title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Menu
