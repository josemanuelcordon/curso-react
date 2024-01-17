import { useEffect, useState } from "react";
import { getCards } from "../helpers/getCards";

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCards();
        setCards(data);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{padding: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      {cards.map((card) => (
        <div style={{padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} key={card.id}>
          <img style={{"width": '80px'}} src={`img/${card.img}`} alt={card.suit} />
          <p>{card.number}</p>
          <p>{card.suit}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;