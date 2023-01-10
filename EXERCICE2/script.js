const p = document.createElement("p");
p.innerHTML = "This is a paragraph.";

// Make the paragraph draggable
p.setAttribute("draggable", true);

// Add event listeners for the drag and drop events
p.addEventListener("mousedown", startDrag);
p.addEventListener("mousemove", drag);
p.addEventListener("mouseup", endDrag);

// Variables for the drag and drop functionality
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

// Function to start dragging the paragraph
function startDrag(event) {
    initialX = event.clientX - xOffset;
    initialY = event.clientY - yOffset;

    if (event.target === p) {
        isDragging = true;
    }
}


// Function to drag the paragraph
function drag(event) {
    if (isDragging) {
        event.preventDefault();
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
    
        xOffset = currentX;
        yOffset = currentY;
    
        // Change the font size of the paragraph according to the screen coordinates
        p.style.fontSize = (event.clientX / window.innerWidth * 1000) + "px";
    
        setTranslate(currentX, currentY, p);
    }
  
} 

// Function to end dragging the paragraph
function endDrag(e) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;
}

// Function to set the translate transformation on the paragraph
function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

document.body.appendChild(p);