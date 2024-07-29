function getPokemonNumberFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const numberParam = urlParams.get('number');
    return numberParam ? parseInt(numberParam) : null;
}

async function searchPokemon(pokemonNumber) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Pokémon não encontrado');
        }
        const pokemon = await response.json();
        displayPokemonDetails(pokemon);
    } catch (error) {
        console.error(error);
        displayPokemonDetails(null);
    }
}