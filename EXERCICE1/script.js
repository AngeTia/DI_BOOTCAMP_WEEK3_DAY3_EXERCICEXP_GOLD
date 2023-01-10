const container = document.getElementById("container");

for (let i = 0; i < 26; i++) {
  // Create a square element
  const square = document.createElement("div");
  square.classList.add("square");
  
  // Add a letter to the square
  const letter = String.fromCharCode(65 + i);
  square.textContent = letter;
  
  // Make the square draggable
  square.setAttribute("draggable", "true");
  
  // Add event listeners for drag and drop
  square.addEventListener("dragstart", handleDragStart);
  square.addEventListener("dragend", handleDragEnd);
  square.addEventListener("dragover", handleDragOver);
  square.addEventListener("dragenter", handleDragEnter);
  square.addEventListener("dragleave", handleDragLeave);
  square.addEventListener("drop", handleDrop);
  
  // Add the square to the container
  container.appendChild(square);
}

function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.textContent);
  event.target.classList.add("dragging");
}

function handleDragEnd(event) {
  event.target.classList.remove("dragging");
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDragEnter(event) {
  event.target.classList.add("over");
}

function handleDragLeave(event) {
  event.target.classList.remove("over");
}

function handleDrop(event) {
  event.preventDefault();
  event.target.classList.remove("over");
  const letter = event.dataTransfer.getData("text/plain");
  event.target.textContent = letter;
}