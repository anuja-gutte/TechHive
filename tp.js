let linkedListContainer = document.getElementById('linkedList');

function addNode() {
    let value = document.getElementById('nodeValue').value;
    if (value === '') return;

    // Create node element
    let nodeDiv = document.createElement('div');
    nodeDiv.classList.add('node');

    // Create the value part of the node
    let nodeValue = document.createElement('div');
    nodeValue.classList.add('node-value');
    nodeValue.textContent = value;

    // Create the pointer part of the node
    let nodePointer = document.createElement('div');
    nodePointer.classList.add('pointer');
    nodePointer.textContent = 'next';

    // Append value and pointer to the node div
    nodeDiv.appendChild(nodeValue);
    nodeDiv.appendChild(nodePointer);

    // Append node to the linked list container
    linkedListContainer.appendChild(nodeDiv);

    // Clear input field after adding the node
    document.getElementById('nodeValue').value = '';
}
