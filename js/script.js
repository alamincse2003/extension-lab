// Get the search icon and input container elements
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');

// Add click event to the search icon
searchIcon.addEventListener('click', function () {
    // Toggle the visibility of the search input field
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'block';  // Show the input field
    } else {
        searchInput.style.display = 'none';   // Hide the input field
    }
});