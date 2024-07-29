function displayPokemonDetails(pokemon) {
    const detailsContainer = document.getElementById('pokemon-details');
    if (pokemon) {
        const typesPokemon = pokemon.types.map(typeInfo => typeInfo.type.name);
        const abilitiesPokemon = pokemon.abilities.map(abilityInfo => abilityInfo.ability.name);
        detailsContainer.innerHTML = `
            <h1>${pokemon.name}</h1>
            <p>Número: #${pokemon.id}</p>
            <p>Tipo: ${typesPokemon.join(', ')}</p>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <img src="${pokemon.sprites.front_shiny}" alt="${pokemon.name} Shiny">
            <div class="info">
                <div class="info-item">Altura: ${pokemon.height / 10} m</div>
                <div class="info-item">Peso: ${pokemon.weight / 10} kg</div>
                <div class="info-item">Habilidades: ${abilitiesPokemon.join(', ')}</div>
            </div>
            <div class="types">
                ${typesPokemon.map(type => `<span class="type">${type}</span>`).join('')}
            </div>
        `;
        document.title = `${pokemon.name} - Detalhes do Pokémon`;
    } else {
        detailsContainer.innerHTML = '<p>Pokémon não encontrado.</p>';
        document.title = 'Pokémon não encontrado';
    }
}

function init() {
    const pokemonNumber = getPokemonNumberFromUrl();
    if (pokemonNumber) {
        searchPokemon(pokemonNumber);
    } else {
        displayPokemonDetails(null);
    }
}

document.addEventListener('DOMContentLoaded', init);
