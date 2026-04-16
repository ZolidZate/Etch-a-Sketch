const container = document.getElementById('container');
let isDrawing = false; // Define this at the top
let size = 16; // Default grid size

const sizeButton = document.getElementById('size');

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

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    container.textContent = ''; // Clear existing grid  
    createGrid(16); // Recreate the grid to reset it
});


function createGrid(inputSize) {
    // Safety check: stop if container wasn't found
    if (!container) return; 

    totalSize = inputSize * inputSize; // Calculate total squares needed   
    const itemsPerRow = Math.ceil(Math.sqrt(totalSize)); // Calculate how many items per row
    const boxSize = 100 / itemsPerRow; // Calculate the percentage size for each box


    for (let i = 0; i < totalSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = '${boxSize}%'; // Set width based on grid size
        square.style.height = '${boxSize}%'; // Set height based on grid size

        square.addEventListener('mousedown', (e) => {
            e.preventDefault(); 
            isDrawing = true;
            square.style.backgroundColor = 'black';
        });

        square.addEventListener('mouseenter', () => {
            if (isDrawing) {
                square.style.backgroundColor = 'black';
            }
        });
        
        container.appendChild(square);
    }
}

// Global listeners: This ensures drawing stops even if you release 
// the mouse outside of a specific square.
window.addEventListener('mouseup', () => {
    isDrawing = false;
});

createGrid(size);


