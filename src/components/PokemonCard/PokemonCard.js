
import s from "./PokemonCard.module.css";
import cardBackSide from "../../assets/card-back-side.jpg";
import cn from 'classnames'

const PokemonCard = ({ name, img, id, type, values, isActive, onCardClick }) => {
  const handleClick = () => {
    onCardClick(id)
  };
  return (
    <div 
      className={cn(s.root, {[s.active] : isActive})}
      onClick={handleClick}
    >
      <div className={s.pokemonСard}>
        <div className={s.cardFront}>
          <div className={cn(s.wrap, s.front)}>
            <div className={cn(s.pokemon, s[type])}>
              <div className={s.values}>
                <div className={cn(s.count, s.top)}>{values.top}</div>
                <div className={cn(s.count, s.right)}>{values.right}</div>
                <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                <div className={cn(s.count, s.left)}>{values.left}</div>
              </div>
              <div className={s.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={s.info}>
                <span className={s.number}>#{id}</span>
                <h3 className={s.name}>{name}</h3>
                <small className={s.type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={s.cardBack}>
          <div className={`${s.wrap} ${s.back}`}>
            <img src={cardBackSide} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
