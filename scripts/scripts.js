const container = document.getElementById('container');
let isDrawing = false; // Define this at the top
let size = 16; // Default grid size

const sizeButton = document.getElementById('size');
const rainbowButton = document.getElementById('rainbow');
const colorButton = document.getElementById('color');
const colorPicker = document.getElementById('colorPicker');
const eraserButton = document.getElementById('eraser');
const modal = document.getElementById("popUp");
const howTo = document.getElementById("howTo");
const span = document.getElementsByClassName("close")[0];
let userChoice = 'black'; // Default drawing color

// Instructional How-to popup
howTo.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onClick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// Rainbow button: Sets user choice to a special value to indicate rainbow mode
rainbowButton.addEventListener('click', () => {
    userChoice = 'rainbow'; // Set to a special value to indicate rainbow mode
});

// Color button: Triggers the hidden color picker input
colorButton.addEventListener('click', () => {
    try {
        colorPicker.click(); // Trigger the hidden color input
    } catch (error) {
        console.error('Error triggering color picker:', error);
    }
});

// Listen for color changes from the color picker
colorPicker.addEventListener('input', (e) => {
    userChoice = e.target.value; // Update user choice to the selected color
    colorButton.style.backgroundColor = userChoice; // Update button color to reflect choice
});

// Eraser button: Sets user choice to white to effectively erase
eraserButton.addEventListener('click', () => {
    userChoice = 'white'; // Set to white to act as an eraser
});

// Resize button: Prompts user for new grid size and recreates the grid
sizeButton.addEventListener('click', () => {
    const newSize = prompt('Enter new grid size (e.g., 16 for 16x16):');
    if (newSize && !isNaN(newSize) && newSize >= 2 && newSize <= 100) {
        size = parseInt(newSize);
        container.textContent = ''; // Clear existing grid
        createGrid(size); // Create new grid with updated size
    } else {
        alert('Please enter a valid positive number. Minimum is 2 and maximum is 100.');
    }
});

// Reset button: Clears the grid and resets to default settings
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    container.textContent = ''; // Clear existing grid  
    createGrid(16); // Recreate the grid to reset it
    userChoice = 'black'; // Reset to default color
    colorButton.style.backgroundColor = ''; // Reset button color to default
});


function createGrid(inputSize) {
    // Safety check: stop if container wasn't found
    if (!container) return; 

    totalSize = inputSize * inputSize; // Calculate total squares needed   
    const itemsPerRow = Math.ceil(Math.sqrt(totalSize)); // Calculate how many items per row
    const boxSize = (100 / itemsPerRow) + '%'; // Calculate the percentage size for each box


    for (let i = 0; i < totalSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = boxSize; // Set width based on grid size
        square.style.height = boxSize; // Set height based on grid size

        square.addEventListener('mousedown', (e) => {
            e.preventDefault(); 
            isDrawing = true;
            square.style.backgroundColor = userChoice === 'rainbow' ? getRandomColor() : userChoice; // Set color based on mode
        });

        square.addEventListener('mouseenter', () => {
            if (isDrawing) {
                square.style.backgroundColor = userChoice === 'rainbow' ? getRandomColor() : userChoice; // Set color based on mode
            }
        });
        
        container.appendChild(square);
    }
}

// Get a random color in RGB format
const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};



// Global listeners: This ensures drawing stops even if you release 
// the mouse outside of a specific square.
window.addEventListener('mouseup', () => {
    isDrawing = false;
});

createGrid(size);


