class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal() {
        let result = [];
        this.inOrderHelper(this.root, result);
        return result;
    }

    inOrderHelper(node, result) {
        if (node) {
            this.inOrderHelper(node.left, result);
            result.push(node.value);
            this.inOrderHelper(node.right, result);
        }
    }

    visualizeTree() {
        const treeContainer = document.getElementById('tree-container');
        treeContainer.innerHTML = ''; // Clear previous visualization
        if (this.root) {
            this.visualizeNode(this.root, treeContainer);
        }
    }

    visualizeNode(node, container) {
        if (node) {
            const nodeElement = document.createElement('div');
            nodeElement.classList.add('node');
            nodeElement.innerText = node.value;
            container.appendChild(nodeElement);

            const childrenContainer = document.createElement('div');
            childrenContainer.classList.add('children-container');
            container.appendChild(childrenContainer);

            // Create left and right containers for the children
            const leftContainer = document.createElement('div');
            const rightContainer = document.createElement('div');
            childrenContainer.appendChild(leftContainer);
            childrenContainer.appendChild(rightContainer);

            if (node.left || node.right) {
                const connectorContainer = document.createElement('div');
                connectorContainer.classList.add('connector-container');
                childrenContainer.appendChild(connectorContainer);

                if (node.left) {
                    const connector = document.createElement('div');
                    connector.classList.add('node-connector');
                    connectorContainer.appendChild(connector);
                    this.visualizeNode(node.left, leftContainer);
                }

                if (node.right) {
                    const connector = document.createElement('div');
                    connector.classList.add('node-connector');
                    connectorContainer.appendChild(connector);
                    this.visualizeNode(node.right, rightContainer);
                }
            }
        }
    }
}

const bst = new BinarySearchTree();

function insertNode() {
    const valueInput = document.getElementById('value-input').value;
    if (valueInput !== '') {
        bst.insert(parseInt(valueInput));
        bst.visualizeTree();
        document.getElementById('value-input').value = ''; // Clear input after insertion
    }
}

function inOrderTraversal() {
    const result = bst.inOrderTraversal();
    document.getElementById('output-container').innerText = 'In-Order Traversal: ' + result.join(', ');
}
