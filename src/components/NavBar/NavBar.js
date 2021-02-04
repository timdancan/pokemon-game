import s from "./NavBar.module.css";
import cn from "classnames";

const NavBar = ({onChangeState, isActive, bgActive = false}) => {
  return(
    <nav id={s.navbar} className={cn({[s.bgActive]: bgActive})}>
        <div className={s.navWrapper}>
          <p className={s.brand}>LOGO</p>
          <div
            className={cn(s.menuButton, {[s.active] : isActive})}
            onClick={onChangeState}
          >
            <span />
          </div>
        </div>
      </nav> 
  )
}

export default NavBar