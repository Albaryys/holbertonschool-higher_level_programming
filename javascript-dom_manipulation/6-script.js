// Get the element with id "character"
var characterElement = document.getElementById('character');

// URL for fetching character data
var apiUrl = 'https://swapi-api.hbtn.io/api/people/5/?format=json';

// Function to fetch and display the character name
function fetchCharacterName() {
  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Extract the character name from the fetched data
      var characterName = data.name;

      // Display the character name in the "character" element
      characterElement.textContent = characterName;
    })
    .catch(function(error) {
      console.error('Error fetching character data:', error);
    });
}

// Call the fetchCharacterName function to fetch and display the character name
fetchCharacterName();
