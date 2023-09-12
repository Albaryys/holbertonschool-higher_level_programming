// Get the element with id "update_header"
var updateHeaderButton = document.getElementById('update_header');

// Get the header element
var header = document.querySelector('header');

// Function to update the text of the header element
function updateHeaderText() {
  header.textContent = 'New Header!!!';
}

// Add a click event listener to the "update_header" element
updateHeaderButton.addEventListener('click', updateHeaderText);
