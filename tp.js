const addNodeButton = document.getElementById('addNode');
const resetListButton = document.getElementById('resetList');
const nodeValueInput = document.getElementById('nodeValue');
const listContainer = document.getElementById('list');
const headTailDisplay = document.getElementById('headTail');

let nodes = []; // Array to store node values

addNodeButton.addEventListener('click', () => {
    const nodeValue = nodeValueInput.value.trim();
    if (nodeValue) {
        nodes.push(nodeValue); // Add value to nodes array
        createNode(nodeValue);
        updateHeadTailDisplay();
        nodeValueInput.value = ''; // Clear input field
    }
});

resetListButton.addEventListener('click', resetList);

function createNode(value) {
    const node = document.createElement('div');
    node.className = 'node';

    // Create node content container
    const nodeContent = document.createElement('div');
    nodeContent.className = 'node-content';

    // Create value section
    const valueDiv = document.createElement('div');
    valueDiv.className = 'value';
    valueDiv.textContent = value;

    // Append value section to node content
    nodeContent.appendChild(valueDiv);

    // Append content to the node
    node.appendChild(nodeContent);
    listContainer.appendChild(node);

    // Create pointer section if there are previous nodes
    if (nodes.length > 0) {
        const pointer = document.createElement('div');
        pointer.className = 'pointer';
        node.appendChild(pointer);
        // const nullIndicator = document.createElement('div');
        // nullIndicator.className = 'null-indicator';
        // nullIndicator.textContent = 'null';
        // node.appendChild(nullIndicator);
    }
}

function updateHeadTailDisplay() {
    const head = nodes[0];
    const tail = nodes[nodes.length - 1];
    headTailDisplay.textContent = `Head: ${head} | Tail: ${tail}`;
}

function resetList() {
    nodes = []; // Clear the nodes array
    listContainer.innerHTML = ''; // Clear the displayed list
    headTailDisplay.textContent = ''; // Clear head and tail display
    nodeValueInput.value = ''; // Clear input field
}
