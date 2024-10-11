// Function to clear input fields and refresh the page
function clearFields() {
    location.reload(); // This will refresh the page, clearing all fields
}

// Asynchronous function to fetch Pokémon data from the API
async function fetchData() {
    // Get references to DOM elements for displaying results and error messages
    const err = document.getElementById("errorMessage");
    const imgElement = document.getElementById("pokemonSprite");
    const weight = document.getElementById("weight");
    const type = document.getElementById("type"); //something

    try {
        // Retrieve the Pokémon name from the input field and convert it to lowercase
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        // Fetch data from the Pokémon API using the entered name
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        // Check if the response is not OK (e.g., Pokémon not found)
        if (!response.ok) {
            throw new Error("Pokemon not found."); // Throw an error if the Pokémon is not found
        }

        err.innerText = ""; // Clear any previous error messages
        const data = await response.json(); // Parse the JSON response

        // Extract the Pokémon sprite URL from the data
        const pokemonSprite = data.sprites.front_default;

        // Extract the Pokémon type from the data
        const pokemonType = data.types[0].type.name;
        type.innerText = pokemonType; // Display the Pokémon type

        // Extract the Pokémon weight from the data
        const pokemonWeight = data.weight;
        weight.innerText = pokemonWeight; // Display the Pokémon weight

        imgElement.src = pokemonSprite; // Set the image source to the Pokémon sprite
        imgElement.style.display = "block"; // Show the image when data is fetched successfully
        err.style.display = "none"; // Hide the error message
    } catch (error) {
        err.innerText = `${error}`; // Display the error message if an error occurs
        err.style.display = "block"; // Show the error message
        imgElement.style.display = "none"; // Hide the image when an error occurs
        type.innerText = ""; // Clear the Pokémon type display
        weight.innerText = ""; // Clear the Pokémon weight display
    }
}
