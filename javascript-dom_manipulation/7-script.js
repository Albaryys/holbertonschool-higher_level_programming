// Get the element with id "list_movies"
var listMovies = document.getElementById('list_movies');

// URL for fetching Star Wars movie data
var apiUrl = 'https://swapi-api.hbtn.io/api/films/';

// Function to fetch and display the list of Star Wars movies
function fetchStarWarsMovies() {
  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Loop through the fetched movie data and create list items
      data.results.forEach(function(movie) {
        var listItem = document.createElement('li');
        listItem.textContent = movie.title;
        listMovies.appendChild(listItem);
      });
    })
    .catch(function(error) {
      console.error('Error fetching Star Wars movie data:', error);
    });
}

// Call the fetchStarWarsMovies function to fetch and display the movies
fetchStarWarsMovies();
