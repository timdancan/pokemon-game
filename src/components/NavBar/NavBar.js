import s from "./NavBar.module.css";
import cn from "classnames";

const NavBar = ({onChangeState, isActive}) => {
  const hendleClick = () => {
    onChangeState()
  }
  return(
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
  )
}

export default NavBar