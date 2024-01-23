// Array of items for the dropdown menu
const dropdownItems = ['Turkey', 'Lettuce', 'Croissant', 'Börger'];

// Function to populate the dropdown with items
function populateDropdown() {
    const dropdown = document.getElementById('dropdown');

    // Loop through the array and create an option element for each item
    for (let i = 0; i < dropdownItems.length; i++) {
        const option = document.createElement('option');
        option.value = `option${i + 1}`;
        option.textContent = dropdownItems[i];
        dropdown.appendChild(option);
    }
}

// Call the function to populate the dropdown when the page loads
document.addEventListener('DOMContentLoaded', populateDropdown);
