// URL of the PokeAPI endpoint for the list of Pokémon
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

// Function to fetch and display the list of Pokémon
async function fetchPokemonList(type = "all") {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract the list of Pokémon
        const pokemonList = data.results;

        // Create and display the list of Pokémon in a grid
        const pokemonListElement = document.getElementById("pokemon-list");
        pokemonListElement.innerHTML = ""; // Clear the list

        for (const pokemon of pokemonList) {
            const pokemonData = await fetchPokemonData(pokemon.url);
            const types = pokemonData.types.map(type => type.type.name);

            // Check if the Pokémon has the selected type or if "All" types are selected
            if (type === "all" || types.includes(type)) {
                const pokemonCard = document.createElement("div");
                pokemonCard.className = "pokemon-card";
                const imageUrl = pokemonData.sprites.front_default;

                pokemonCard.innerHTML = `
                    <img src="${imageUrl}" alt="${pokemon.name}" width="96">
                    <h3>${pokemon.name}</h3>
                `;
                pokemonListElement.appendChild(pokemonCard);
            }
        }
    } catch (error) {
        console.error("Error fetching Pokémon list:", error);
    }
}

// Function to fetch detailed data for a Pokémon
async function fetchPokemonData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
}

// Add an event listener to handle type filtering
const typeFilter = document.getElementById("type-filter");
typeFilter.addEventListener("change", () => {
    const selectedType = typeFilter.value;
    fetchPokemonList(selectedType);
});

// Call the function to fetch and display the initial list of Pokémon
fetchPokemonList();



// Year
document.getElementById("year").innerHTML = new Date().getFullYear();