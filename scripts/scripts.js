const container = document.getElementById('container');

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        container.appendChild(square);
    }
}

createGrid();

const grid = document.querySelector('.grid-square');

