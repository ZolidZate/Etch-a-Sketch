const container = document.getElementById('container');
let isDrawing = false; // Define this at the top

function createGrid() {
    // Safety check: stop if container wasn't found
    if (!container) return; 

    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

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

createGrid();









// const container = document.getElementById('container');

// function createGrid() {
//     for (let i = 0; i < 256; i++) {
//         // const square = document.createElement('div');

//         // Inside your loop where you create the divs:
//         const square = document.createElement('div');
//         square.classList.add('square');

//         square.addEventListener('mousedown', (e) => {
//             e.preventDefault(); // CRITICAL: Stops the browser from "dragging" the div
//             isDrawing = true;
//             square.style.backgroundColor = 'black';
//         });

//         square.addEventListener('mouseenter', () => {
//             if (isDrawing) {
//                 square.style.backgroundColor = 'black';
//             }
//         });
        
//         container.appendChild(square);
//     }
// }

// createGrid();

// const grid = document.querySelector('.square');

// let isDrawing = false;

// // When the user clicks anywhere in the grid
// grid.addEventListener('mousedown', () => {
//     isDrawing = true;
// });

// // When the user lets go of the mouse button
// grid.addEventListener('mouseup', () => {
//     isDrawing = false;
// });

