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

// -- DOM Reference -- //
const score = document.querySelector('#score');
const tries = document.querySelector('#tries');
const gameBoard = document.querySelector('#gameBoard');
const gameResult = document.querySelector('#gameResult');


// -- Game Settings -- //
let numberScore = 0;
let numberTries = 0;
let gameOver = false;
let checkingPair = false;

let row = 6;
let column = 6;

const totalTiles = row * column;
const totalPairs = totalTiles / 2;

gameBoard.style.gridTemplateRows = `repeat(${row}, 1fr)`;
gameBoard.style.gridTemplateColumns = `repeat(${column}, 1fr)`;

// -- Images Source --
const images = [
    { value: 'dog',  textContent: '🐶' },
    { value: 'cow',  textContent: '🐮' },
    { value: 'crocodile',  textContent: '🐊' },
    { value: 'crow',  textContent: '🐦‍⬛' },
    { value: 'zebra',  textContent: '🦓' },
    { value: 'butterfly',  textContent: '🦋' },
    { value: 'ladybird',  textContent: '🐞' },
    { value: 'snail',  textContent: '🐌' },
    { value: 'lizard',  textContent: '🦎' },
    { value: 'octopus',  textContent: '🐙' },

    { value: 'seal',  textContent: '🦭' },
    { value: 'gorilla',  textContent: '🦍' },
    { value: 'giraffe',  textContent: '🦒' },
    { value: 'monkey',  textContent: '🐒' },
    { value: 'owl',  textContent: '🦉' },
    { value: 'spider',  textContent: '🕷️' },
    { value: 'dinosaur',  textContent: '🦕' },
    { value: 'squid',  textContent: '🦑' },
    { value: 'turtle',  textContent: '🐢' },
    { value: 'kangaroo',  textContent: '🦘' },

    { value: 'ram',  textContent: '🐏' },
    { value: 'goat',  textContent: '🐐' },
    { value: 'peacock',  textContent: '🦚' },
    { value: 'rooster',  textContent: '🐓' },
    { value: 'bison',  textContent: '🦬' },
    { value: 'rabbit',  textContent: '🐇' },
    { value: 'dragon',  textContent: '🐉' },
    { value: 'orangutan',  textContent: '🦧' },
    { value: 'dolphin',  textContent: '🐬' },
    { value: 'leopard',  textContent: '🐆' }
];

const tiles = [];

// -- Creating a Pair -- 
function setTilesPair() {
    tiles.length = 0;

    for (let i = 0; i < totalPairs; i++) {
        const imageValue = images[i % images.length].value;

        tiles.push(
            { imageValue },
            { imageValue }
        );
    }
}
setTilesPair()

// -- Fisher–Yates Shuffle -- 
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
shuffle(tiles);


// -- Add tile values --
function setTileValue(tile, imageValue) {
    const imageData = images.find(
        image => image.value === imageValue
    );

    tile.dataset.value = imageData.value;
    tile.textContent = imageData.textContent;
}

// -- Game Logic Section -- //
const selectedTiles = [];

function selectTile(tile) {
    if (gameOver || checkingPair) {
        return;
    }

    if (selectedTiles.includes(tile) || tile.classList.contains('matched')) {
        return;
    }

    selectedTiles.push(tile);

    if (selectedTiles.length < 2) {
        return;
    }
    checkingPair = true;

    numberTries++;
    tries.textContent = "Tries: " + numberTries;

    const firstTile = selectedTiles[0];
    const secondTile = selectedTiles[1];

    if (firstTile.dataset.value === secondTile.dataset.value) {
        firstTile.classList.add('matched');
        secondTile.classList.add('matched');

        numberScore++; 
        const scorePercent = Math.round((numberScore / totalPairs) * 100);
        score.textContent = `Score: ${scorePercent}%`;

        selectedTiles.length = 0;
        checkingPair = false;

        if (numberScore === totalPairs) {
            endGame();
        }

    } else {
        setTimeout(() => {
            firstTile.classList.remove('revealed');
            secondTile.classList.remove('revealed');
            selectedTiles.length = 0;
            checkingPair = false;
        }, 600);       
    }
}

function resetGame() {
    numberScore = 0;
    numberTries = 0;
    score.textContent = "Score: 0%";
    tries.textContent = "Tries: 0";
    gameResult.textContent = '';
    gameResult.classList.remove('show');

    selectedTiles.length = 0;
    gameOver = false;
    checkingPair = false;
    gameBoard.innerHTML = '';

    setTilesPair()
    shuffle(tiles);
    renderTiles();
}

function endGame() {
    gameOver = true;
    gameResult.classList.add('show');
    gameResult.textContent = `Yaay!!! All the tiles matched in ${numberTries} tries!`;
    
    setTimeout(() => {
        resetGame();
    }, 10000);
    
}


function createTile() {
    const tile = document.createElement('button');
    tile.classList.add('tile');  
    tile.addEventListener('click', () => {
        handleTileClick(tile);
    });
    return tile;
}

// -- Show tile value -- //
function revealTile(tile) {
    tile.classList.add('revealed');
}

function handleTileClick(tile) {
    if (gameOver || checkingPair) return;

    selectTile(tile);
    revealTile(tile);
}

function renderTiles() {
    tiles.forEach(tileData => {
        const tile = createTile();

        setTileValue(tile, tileData.imageValue);

        gameBoard.append(tile);
    });
};
renderTiles();




// -- for Version 2 -- //
const levels = [
    { row: 2, column: 2 },
    { row: 2, column: 3 },
    { row: 2, column: 4 },
    { row: 3, column: 4 },
    { row: 4, column: 4 },
    { row: 4, column: 5 },
    { row: 4, column: 6 },
    { row: 5, column: 6 },
    { row: 6, column: 6 }
];