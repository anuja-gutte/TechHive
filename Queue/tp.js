let queue = [];
const queueContainer = document.getElementById("queue-container");
const frontElementDisplay = document.getElementById("front-element");
const rearElementDisplay = document.getElementById("rear-element");

function enqueue() {
  const input = document.getElementById("queue-input").value;

  if (input === "") {
    alert("Please enter a value to enqueue.");
    return;
  }

  // Add to the queue
  queue.push(input);
  
  // Clear the input field after enqueuing
  document.getElementById("queue-input").value = "";

  // Re-render the queue
  renderQueue();
}

function dequeue() {
  if (queue.length === 0) {
    alert("Queue is empty.");
    return;
  }

  // Remove from the queue (first element)
  const firstItem = queue.shift(); // Use shift() to dequeue

  // Re-render the queue
  renderQueue();
}

function renderQueue() {
  // Clear the current queue visualization
  queueContainer.innerHTML = "";

  // Create and display the queue as individual items
  queue.forEach((item, index) => {
    const queueItem = document.createElement("div");
    queueItem.classList.add("queue-item");
    queueItem.textContent = item;

    // Add front and rear classes to highlight the queue's front and rear
    if (index === 0) {
      queueItem.classList.add("front");
    }
    if (index === queue.length - 1) {
      queueItem.classList.add("rear");
    }

    queueContainer.appendChild(queueItem);
  });

  // Update front and rear elements display
  if (queue.length > 0) {
    frontElementDisplay.textContent = `Front: ${queue[0]}`;
    rearElementDisplay.textContent = `Rear: ${queue[queue.length - 1]}`;
  } else {
    frontElementDisplay.textContent = "Front: None";
    rearElementDisplay.textContent = "Rear: None";
  }
}

// Initial render (empty queue)
renderQueue();

