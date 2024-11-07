const addNodeButton = document.getElementById('addNode');
const resetListButton = document.getElementById('resetList');
const nodeValueInput = document.getElementById('nodeValue');
const positionInput = document.getElementById('position');
const listContainer = document.getElementById('list');
const headTailDisplay = document.getElementById('headTail');

let nodes = [];

addNodeButton.addEventListener('click', () => {
    const nodeValue = nodeValueInput.value.trim();
    const position = parseInt(positionInput.value);

    if (nodeValue) {
        if (!isNaN(position) && position > 0 && position <= nodes.length + 1) {
            nodes.splice(position - 1, 0, nodeValue);
            renderList();
        } else {
            nodes.push(nodeValue);
            createNode(nodeValue);
        }
        updateHeadTailDisplay();
        nodeValueInput.value = '';
        positionInput.value = '';
    }
});

resetListButton.addEventListener('click', resetList);

function createNode(value, position = nodes.length) {
    const node = document.createElement('div');
    node.className = 'node';

    const nodeContent = document.createElement('div');
    nodeContent.className = 'node-content';

    const valueDiv = document.createElement('div');
    valueDiv.className = 'value';
    valueDiv.textContent = value;

    nodeContent.appendChild(valueDiv);
    node.appendChild(nodeContent);

    if (position > 0 && position < listContainer.children.length) {
        listContainer.insertBefore(node, listContainer.children[position]);
    } else {
        listContainer.appendChild(node);
    }

    if (nodes.length > 1) {
        const pointer = document.createElement('div');
        pointer.className = 'pointer';
        node.appendChild(pointer);
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
    positionInput.value = '';
}

function renderList() {
    listContainer.innerHTML = '';
    nodes.forEach((value, index) => createNode(value, index));
}
