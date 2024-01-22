const obtainFecthUrl = async (limit, offset) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

const fetchPokemons = async (limit, offset) => {
    const pokemons = await obtainFecthUrl(limit, offset);
    const promises = [];

    const fetchPokemon = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
             .then(response => response.json())
             .then(data => resolve(data))
             .catch(error => reject(error))
        })
    };

    pokemons.forEach((pokemon) => {
        promises.push(fetchPokemon(pokemon.url));
    })

    const pokemon = await Promise.all(promises);
    
    return pokemon;
}

export default fetchPokemons;