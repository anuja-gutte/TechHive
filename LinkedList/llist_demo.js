const addNodeButton = document.getElementById('addNode');
const resetListButton = document.getElementById('resetList');
const nodeValueInput = document.getElementById('nodeValue');
const listContainer = document.getElementById('list');
const headTailDisplay = document.getElementById('headTail');

let nodes = []; 

addNodeButton.addEventListener('click', () => {
    const nodeValue = nodeValueInput.value.trim();
    if (nodeValue) {
        nodes.push(nodeValue); 
        createNode(nodeValue);
        updateHeadTailDisplay();
        nodeValueInput.value = ''; 
    }
});

resetListButton.addEventListener('click', resetList);

function createNode(value) {
    const node = document.createElement('div');
    node.className = 'node';

   
    const nodeContent = document.createElement('div');
    nodeContent.className = 'node-content';

    
    const valueDiv = document.createElement('div');
    valueDiv.className = 'value';
    valueDiv.textContent = value;

    
    nodeContent.appendChild(valueDiv);

    
    node.appendChild(nodeContent);
    listContainer.appendChild(node);

    
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
    nodes = []; 
    listContainer.innerHTML = ''; 
    headTailDisplay.textContent = ''; 
    nodeValueInput.value = ''; 
}
