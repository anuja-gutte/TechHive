
let originalArray = [1, 2, 3, 4, 5];
let insertArray = [];
let deleteArray = [...originalArray];
let insertIndex = originalArray.length + 1; // Next number to insert

const originalArrayContainer = document.getElementById('originalArray');
const insertArrayContainer = document.getElementById('insertArray');
const deleteArrayContainer = document.getElementById('deleteArray');


function renderArray(container, array) {
    container.innerHTML = ''; 
    array.forEach(element => {
        let box = document.createElement('div');
        box.classList.add('box');
        box.innerText = element;
        container.appendChild(box);
    });
}


renderArray(originalArrayContainer, originalArray);
renderArray(insertArrayContainer, insertArray);
renderArray(deleteArrayContainer, deleteArray);

function insertElement() {
    insertArray.push(insertIndex);
    renderArray(insertArrayContainer, insertArray);

    
    originalArray.push(insertIndex);
    renderArray(originalArrayContainer, originalArray);
    insertIndex++; 
}


function deleteElement() {
    if (deleteArray.length > 0) {
        deleteArray.pop();
        renderArray(deleteArrayContainer, deleteArray);

        originalArray.pop();
        renderArray(originalArrayContainer, originalArray);
    }
}


document.getElementById('insertButton').addEventListener('click', insertElement);
document.getElementById('deleteButton').addEventListener('click', deleteElement);
