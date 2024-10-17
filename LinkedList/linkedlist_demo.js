// Initialize arrays
let originalArray = [1, 2, 3, 4, 5];
let insertArray = [];
let deleteArray = [...originalArray];
let insertIndex = originalArray.length + 1; // Next number to insert

// Select containers
const originalArrayContainer = document.getElementById('originalArray');
const insertArrayContainer = document.getElementById('insertArray');
const deleteArrayContainer = document.getElementById('deleteArray');

// Function to render array in the DOM
function renderArray(container, array) {
    container.innerHTML = ''; // Clear current array display
    array.forEach(element => {
        let box = document.createElement('div');
        box.classList.add('box');
        box.innerText = element;
        container.appendChild(box);
    });
}

// Initial rendering of arrays
renderArray(originalArrayContainer, originalArray);
renderArray(insertArrayContainer, insertArray);
renderArray(deleteArrayContainer, deleteArray);

// Function to insert an element into the insertArray
function insertElement() {
    insertArray.push(insertIndex);
    renderArray(insertArrayContainer, insertArray);

    // Optionally, update the original array
    originalArray.push(insertIndex);
    renderArray(originalArrayContainer, originalArray);
    insertIndex++; // Increment for the next insertion
}

// Function to delete the last element from the deleteArray
function deleteElement() {
    if (deleteArray.length > 0) {
        deleteArray.pop();
        renderArray(deleteArrayContainer, deleteArray);

        // Optionally, update the original array
        originalArray.pop();
        renderArray(originalArrayContainer, originalArray);
    }
}

// Add event listeners to buttons
document.getElementById('insertButton').addEventListener('click', insertElement);
document.getElementById('deleteButton').addEventListener('click', deleteElement);
