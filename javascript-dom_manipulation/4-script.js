// Get the element with id "add_item"
var addItemButton = document.getElementById('add_item');

// Function to add a new <li> element to the list
function addItemToList() {
  // Create a new <li> element
  var newItem = document.createElement('li');
  newItem.textContent = 'Item'; // Set the text content of the new element

  // Get the <ul> element with class "my_list"
  var myList = document.querySelector('.my_list');

  // Add the new <li> element to the list
  myList.appendChild(newItem);
}

// Add a click event listener to the "add_item" element
addItemButton.addEventListener('click', addItemToList);
