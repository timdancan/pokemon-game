import { useState } from "react";
import s from './PlayerBoard.module.css'
import PokemonCard from '../../../../../../components/PokemonCard/PokemonCard'
import cn from 'classnames'

export default function PlayerBoard({ player, cards, onClickCard }) {
  const [isSelected, setSelected] = useState(null)

  return (
    <>
      {cards.map((item) => (
        <div className={cn(s.cardBoard, {
          [s.selected]: isSelected === item.id
        })}
        onClick={()=> {
          setSelected(item.id)
          onClickCard && onClickCard({
            player,
            ...item
          })
        }}
        >  
          <PokemonCard
            className={s.card}
            key={item.id}
            name={item.name}
            img={item.img}
            id={item.id}
            type={item.type}
            values={item.values}
            minimize={true}
            isSelected={item.selected}
          />
        </div>
      ))}
    </>
  );
}
