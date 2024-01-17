
export async function getCards() {
    const url = 'http://127.0.0.1:8000/game/getAllCards';
    const response = await fetch(url, { method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }});
    const cards = await response.json();
    return JSON.parse(cards);
}