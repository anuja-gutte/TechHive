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

  
  queue.push(input);
  
  
  document.getElementById("queue-input").value = "";

 
  renderQueue();
}

function dequeue() {
  if (queue.length === 0) {
    alert("Queue is empty.");
    return;
  }

 
  const firstItem = queue.shift(); 

 
  renderQueue();
}

function renderQueue() {
  
  queueContainer.innerHTML = "";

  
  queue.forEach((item, index) => {
    const queueItem = document.createElement("div");
    queueItem.classList.add("queue-item");
    queueItem.textContent = item;

    
    if (index === 0) {
      queueItem.classList.add("front");
    }
    if (index === queue.length - 1) {
      queueItem.classList.add("rear");
    }

    queueContainer.appendChild(queueItem);
  });

  
  if (queue.length > 0) {
    frontElementDisplay.textContent = `Front: ${queue[0]}`;
    rearElementDisplay.textContent = `Rear: ${queue[queue.length - 1]}`;
  } else {
    frontElementDisplay.textContent = "Front: None";
    rearElementDisplay.textContent = "Rear: None";
  }
}

renderQueue();

