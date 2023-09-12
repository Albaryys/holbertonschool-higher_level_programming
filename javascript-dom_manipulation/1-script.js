// Get the element with id "red_header"
var redHeader = document.getElementById('red_header');

// Function to change the text color to red
function changeHeaderColor() {
  var header = document.querySelector('header');
  header.style.color = '#FF0000';
}

// Add a click event listener to the "red_header" element
redHeader.addEventListener('click', changeHeaderColor);
