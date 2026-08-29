const readHideBtn = document.querySelectorAll('.readHideBtn');
const readMore = document.querySelector('#readMore');

const expandBtn = document.querySelector('#expandBtn');
const icon = expandBtn.querySelector('i');
const main = document.querySelector('main');


/* ----------------------- */
/* ----- Read & Hide ----- */

readHideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        readMore.classList.toggle('show');
    });
});


// -- Page Expand Section -- //

expandBtn.addEventListener('click', () => {
    main.classList.toggle('expand');
    if (main.classList.contains('expand')) {
        icon.className = "fa-solid fa-down-left-and-up-right-to-center";
    } else {
        icon.className = "fa-solid fa-up-right-and-down-left-from-center";
    }
})


// -------------------------- //
// -- Demostration Section -- //
const gameBoard = document.querySelector('#gameBoard');
const cells = document.querySelectorAll('.cell');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const gameResult = document.querySelector('.gameResult');

let currentPlayer = 'O';
let gameOver = false;

function updateUI () {
    if (currentPlayer === 'X') {
        player1.classList.remove('current');
        player2.classList.add('current');
        gameBoard.classList.remove('o');
        gameBoard.classList.add('x');
    } else {
        player1.classList.add('current');
        player2.classList.remove('current');
        gameBoard.classList.remove('x');
        gameBoard.classList.add('o');
    }
}
updateUI();


const winningPatterns = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // diagonal
    [0, 4, 8],
    [2, 4, 6]
];


function checkWinner() {

    for (const pattern of winningPatterns) {

        const [a, b, c] = pattern;

        if (
            cells[a].textContent !== '' &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            return cells[a].textContent;
        }
    }

    return null;
}


function checkDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}


function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('o', 'x');
    });
    currentPlayer = 'O';
    gameOver = false;
    gameResult.textContent = '';
    gameResult.classList.remove('o', 'x');
    updateUI();
}


cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (gameOver) return;
        if (cell.textContent !== '') return;
        cell.textContent = currentPlayer;
        
        if (currentPlayer === 'O') {
            currentPlayer = 'X';
            cell.classList.add('o');
        } else {
            currentPlayer = 'O';
            cell.classList.add('x');
        }
        updateUI();

        const winner = checkWinner();
        if (winner) {
            gameResult.textContent = `🎉 ${winner} WINS! 🎊`;
            
            if (winner === 'O') {
                gameResult.classList.add('o');
            } else {
                gameResult.classList.add('x');
            }

            gameOver = true;
            setTimeout(() => {
                resetGame();
            }, 5000);
            return;
        }

        if (checkDraw()) {
            gameResult.textContent ='DRAW!';   
            gameOver = true;      
            setTimeout(() => {
                resetGame();
            }, 5000);
            return;
        }
    });
});