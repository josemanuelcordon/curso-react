
export async function getCards() {
    const url = 'http://127.0.0.1:8000/game/getAllCards';
    const response = await fetch(url);
    const cards = await response.json();
    return cards;
}