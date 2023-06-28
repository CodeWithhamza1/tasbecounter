// Check if count value exists in localStorage
var count = localStorage.getItem('count') || 0;

// Update the HTML display with the initial count value
document.getElementById('tnum').innerHTML = count;

// Array of colors
var colors = ['green', 'blue', 'violet', 'purple', 'red', 'white', 'black', 'gray', 'orange', 'yellow', 'pink', 'brown', 'teal', 'magenta', 'cyan', 'lime', 'gold', 'silver', 'indigo', 'maroon'];

// Variable to store the index of the current color
var currentColorIndex = localStorage.getItem('colorIndex') || 0;

// Set the initial border color based on the stored index
document.getElementById('tnum').style.borderColor = colors[currentColorIndex];

// Add click event listener to the counting element
document.getElementById('tnum').addEventListener('click', incrementCount);

function incrementCount() {
  // Increment the count value
  count++;

  // Update the HTML display
  document.getElementById('tnum').innerHTML = count;

  // Store the updated count value in localStorage
  localStorage.setItem('count', count);

  // Change border color
  changeBorderColor();
}

function decre() {
  // Check if the count value is already at 0
  if (count > 0) {
    // Decrement the count value
    count--;

    // Update the HTML display
    document.getElementById('tnum').innerHTML = count;

    // Store the updated count value in localStorage
    localStorage.setItem('count', count);
  }
}

function reset() {
  // Reset the count value to 0
  count = 0;

  // Update the HTML display
  document.getElementById('tnum').innerHTML = count;

  // Clear the count value from localStorage
  localStorage.removeItem('count');
}

// Function to change border color
function changeBorderColor() {
  var tnumElement = document.getElementById('tnum');

  // Get the current color
  var currentColor = colors[currentColorIndex];

  // Update the border color
  tnumElement.style.borderColor = currentColor;

  // Increment the color index
  currentColorIndex = (currentColorIndex + 1) % colors.length;

  // Store the updated color index in localStorage
  localStorage.setItem('colorIndex', currentColorIndex);
}

// Restore the last selected color on page load
changeBorderColor();