// Get the element with id "red_header"
var redHeader = document.getElementById('red_header');

// Function to add the "red" class to the header element
function addRedClass() {
  var header = document.querySelector('header');
  header.classList.add('red');
}

// Add a click event listener to the "red_header" element
redHeader.addEventListener('click', addRedClass);
