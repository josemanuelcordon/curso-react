import { getCards }  from "../helpers/getCards"

const Card = () => {
    const card = getCards();
  return (
    <div>{card.id} -- {card.suit}</div>
  )
}

export default Card