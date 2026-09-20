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

// -- DOM Refrence --
const gameBoard = document.querySelector('#game-board');
const gameStatus = document.querySelector('#game-status');

const life = document.querySelector('.life');
const score = document.querySelector('.score');
const speed = document.querySelector('.speed');
const boost = document.querySelector('.boost');
const statusHomeBtn = document.querySelector('.status-home');
const statusRestartBtn = document.querySelector('.status-restart');

const panel = document.querySelector('#panel');
const panelTxt = document.querySelector('.panel-text');
const panelHomeBtn = document.querySelector('.panel-home');
const startButton = document.querySelector('.startButton');
const pauseButton = document.querySelector('.pauseButton');
const playButton = document.querySelector('.playButton');
const panelRestartBtn = document.querySelector('.panel-restart');
const infoButton = document.querySelector('.infoButton');

const cancelButton = document.querySelector('.cancel-button');
const confirmButton = document.querySelector('.confirm-button');

const gameControlBox = document.querySelector('#game-control-box');
const controlButtons = document.querySelectorAll('.control-button');
const boostButton = document.querySelector('.boost-button');


let gameScore = 0;
let snakeLife = 3;

const startingSpeed = 400;
let currentSpeed = startingSpeed;
const maxSpeed = 150;
const boostSpeed = 100;
const safeSpeed = 1000;
const speedDifferent = startingSpeed - maxSpeed;
let snakeSpeed = currentSpeed;
let isBoosting = false;
let isSlowing = false;
let timing = null;

let gameState = 'home';
let gameOver = false;
let isShield = false;
let confirmationType = null;


// - Game Board Creation Section --
let row = 15;
let column = 25;
const totalCells = row * column;

gameBoard.style.gridTemplateRows = `repeat(${row}, minmax(0, 1fr))`;
gameBoard.style.gridTemplateColumns = `repeat(${column},  minmax(0, 1fr))`;

function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    return cell;
}

const cells = [];

for (let i = 0; i < totalCells; i++) {
    const cell = createCell();
    
    const rowIndex = Math.floor(i / column);
    const columnIndex = i % column;

    cell.dataset.row = rowIndex;
    cell.dataset.column = columnIndex;

    cells.push(cell);
    gameBoard.append(cell);
}



// - Snake Creation Section --
let snake = [
    { row: 10, column: 10 },
    { row: 10, column: 9 },
    { row: 10, column: 8 }
];

function renderSnake() {
    cells.forEach(cell => {
        cell.classList.remove('snake', 'snake-head', 'snake-tail', 'flash');    
    });

    snake.forEach((segment, index) => {
        const snakeCell = cells.find(cell => 
            Number(cell.dataset.row) === segment.row && 
            Number(cell.dataset.column) === segment.column
        );
        snakeCell.classList.add('snake');

        if (index === 0) {
            snakeCell.classList.add('snake-head');
        }

        if (index === (snake.length-1)) {
            snakeCell.classList.add('snake-tail');
        }

        if (isShield) {
            snakeCell.classList.add('flash');
            setTimeout(() => {
                snakeCell.classList.remove('flash');
            }, 500);
        }
    })
}

renderSnake();


// - Occupied Cells --
function occupied(row, column) {
    return snake.some(segment =>
        segment.row === row &&
        segment.column === column
    );
}


// - Food Creation Section --
let food = {
    row: Math.floor(Math.random() * row),
    column: Math.floor(Math.random() * column)
};

function renderFood() {
    const foodCell = cells.find(cell => 
        Number(cell.dataset.row) === food.row &&
        Number(cell.dataset.column) === food.column
    );

    foodCell.classList.add('food');
}

renderFood();

function createNewFood () {
    let randomRow;
    let randomColumn;
    let isOccupied = true;

    while (isOccupied) {
        randomRow = Math.floor(Math.random() * row);
        randomColumn = Math.floor(Math.random() * column);

        isOccupied = occupied(randomRow, randomColumn);
    }
    
    food = {
        row: randomRow,
        column: randomColumn
    };

    cells.forEach(cell => {
        cell.classList.remove('food');
    });

    renderFood();
}


function updateLife () {
    if (snakeLife === 3) {
        life.textContent = "LIFE: ❤️❤️❤️";
    } else if (snakeLife === 2) {
        life.textContent = "LIFE: ❤️❤️";
    } else if (snakeLife === 1) {
        life.textContent = "LIFE: ❤️";
    } else if(snakeLife === 0) {
        life.textContent = "LIFE: 💔";
    }
}

function updateSpeed() {
    if (currentSpeed <= maxSpeed) { currentSpeed = maxSpeed; }

    if (isBoosting) {
        snakeSpeed = boostSpeed;
    } else if (isSlowing)  {
        snakeSpeed = safeSpeed;
    } else {
        snakeSpeed = currentSpeed;
    }

    const speedPercent = Math.round(((startingSpeed - currentSpeed) / speedDifferent) * 70 + 30);
    speed.textContent = 'SPEED: ' + speedPercent + '%';
}


// - Collision Section --
function checkWallCollision(head) {
    return (
        head.row < 0 ||
        head.row >= row ||
        head.column < 0 ||
        head.column >= column
    );
}

function checkSelfCollision(head) {
    const body = snake.slice(1);

    const collision = body.some(segment =>
        segment.row === head.row &&
        segment.column === head.column
    );

   return collision;
}

function checkFoodCollision(head) {
    const getFood = 
        head.row === food.row && 
        head.column === food.column
    ;

    return getFood;
}

function handleCollision() {
    isBoosting = false;
    boost.classList.remove('show');
    snakeLife--;
    updateLife();
    
    moveBack();
    slowDown();
    shieldOn();
        
    if (snakeLife === 0) {
        gameOver = true;
        gameState = 'gameOver';
        clearTimeout(timing);
        timing = null;
        setTimeout(() => {
            handleGameState();
        }, 1000);
        
        return;
    }
}

function handleGameScore() {
    gameScore++;
    currentSpeed -= 5;
    updateSpeed();

    score.textContent = "SCORE: " + gameScore;
    setTimeout(() => {
        createNewFood()
    }, 200);
}


// - Direction and Movement Section --
let direction = {
    row: 0,
    column: 1
};

let nextDirection = {
    row: 0,
    column: 1
};

function turnUp() {
    if (direction.row !== 1 && snake[0].row !== 0) {
        nextDirection = { row: -1, column: 0 };
    }
}

function turnDown() {
    if (direction.row !== -1 && snake[0].row !== (row - 1)) {
        nextDirection = { row: 1, column: 0 };
    }
}

function turnLeft() {
    if (direction.column !== 1 && snake[0].column !== 0) {
        nextDirection = { row: 0, column: -1 };
    }
}

function turnRight() {
    if (direction.column !== -1 && snake[0].column !== (column - 1)) {
        nextDirection = { row: 0, column: 1 };
    }
}

function autoTurn() {
    if (direction.column !== 0) {
        if (food.row < snake[0].row) {
            turnUp();
        }
        if (food.row > snake[0].row) {
            turnDown();
        }
    } else if (direction.row !== 0) {
        if (food.column < snake[0].column) {
            turnLeft();
        }
         if (food.column > snake[0].column) {
            turnRight();
        }
    }
}

function shieldOn() {
    isShield = true;
    autoTurn();
    
    setTimeout(() => {
        isShield = false;
    }, 10000);
}

const snakeSnapshots = [];

function recordPositions() {
    const position = [];

    for (let i = 0; i < snake.length; i++) {
        position.push({
            row: snake[i].row,
            column: snake[i].column
        });
    }

    snakeSnapshots.push(position);

    if (snakeSnapshots.length > 3) {
        snakeSnapshots.shift();
    }
}

function slowDown() {
    isSlowing = true;
    updateSpeed();
    setTimeout(() => {
        isSlowing = false;
        updateSpeed();
    }, 3000);
}

function moveBack() {
    if (snakeSnapshots.length === 0) {
        return;
    }

    const snapshot = snakeSnapshots[0];

    snake.length = 0;

    for (let i = 0; i < snapshot.length; i++) {
        snake.push({
            row: snapshot[i].row,
            column: snapshot[i].column
        });
    }
    
    renderSnake();
}


function moveSnake() {
    recordPositions();
    direction = nextDirection;
    
    const newHead = {
        row: snake[0].row + direction.row,
        column: snake[0].column + direction.column
    };

    const ateFood = checkFoodCollision(newHead);

    if (isShield) {
        if (checkWallCollision(newHead)) {
            autoTurn();
            return;
        }
    } else {
        if (checkWallCollision(newHead) || checkSelfCollision(newHead)) {
            handleCollision();  
            return;     
        }
    }

    snake.unshift(newHead);

    if (ateFood) {
        handleGameScore();
    } else {
        snake.pop();
    }

    renderSnake();
}


// - Gmae States -
function gameLoop() {
    moveSnake();

    if (!gameOver && gameState === 'play') {
        clearTimeout(timing);
        timing = setTimeout(gameLoop, snakeSpeed);
    } else {
        timing = null;
    }
}

function resetGame() {

    snake = [
        { row: 10, column: 10 },
        { row: 10, column: 9 },
        { row: 10, column: 8 }
    ];

    direction = {
        row: 0,
        column: 1
    };

    nextDirection = {
        row: 0,
        column: 1
    };

    snakeSnapshots.length = 0;
    renderSnake();
    createNewFood();

    isShield = false;
    gameOver = false;
    gameState = 'play';
    handleGameState();
    
    gameScore = 0;
    score.textContent = "SCORE: " + gameScore;

    snakeLife = 3;
    updateLife();

    isBoosting = false;
    isSlowing = false;
    clearTimeout(timing);
    timing = null;
    currentSpeed = startingSpeed;
    updateSpeed();
}

panelRestartBtn.addEventListener('click', () => {
    resetGame();
    gameLoop();
});


function handleGameState() {
    if (gameState === 'home') {
        resetGame();
        panelTxt.textContent = 'Touch the start button to play!!!';
        panel.classList.add('home');
        panel.classList.remove('pause', 'game-over');
        gameStatus.classList.remove('show', 'inactive');
        gameControlBox.classList.remove('show', 'inactive');
    } 
    else if (gameState === 'play') {
        panel.classList.remove('home', 'pause', 'game-over');
        gameStatus.classList.add('show');
        gameStatus.classList.remove('inactive');
        gameControlBox.classList.add('show');
        gameControlBox.classList.remove('inactive');
    } 
    else if (gameState === 'pause') {
        panel.classList.add('pause');
        panel.classList.remove('home', 'game-over');
        gameStatus.classList.add('inactive');
        gameControlBox.classList.add('inactive');
    } 
    else if (gameState === 'gameOver') {
        panelTxt.textContent = 'Game Over!!!';
        panel.classList.add('game-over');
        panel.classList.remove('home', 'pause');
        gameStatus.classList.add('inactive');
        gameControlBox.classList.add('inactive');
    }
}

handleGameState();


function handleClick(button, state) {
    button.addEventListener('click', () => {
        gameState = state;
        handleGameState();

        if (state === 'play' && !gameOver && timing === null) {
            gameLoop();
        }

        if (state !== 'play') {
            clearTimeout(timing);
            timing = null;
        }
    });
}

handleClick(panelHomeBtn, 'home');
handleClick(startButton, 'play');
handleClick(pauseButton, 'pause');
handleClick(playButton, 'play');


const confirmationConfig = {

    home: {
        message: 'Do you want to go home?',
        confirmText: 'Home',
        action: () => { 
            gameState = 'home'; 
            handleGameState(); 
        }
    },

    restart: {
        message: 'Do you want to restart the game?',
        confirmText: 'Restart',
        action: () => { 
            resetGame(); 
            gameLoop(); 
        }
    }
}

function showConfirmation(type) {
    const config = confirmationConfig[type];

    confirmationType = type;

    panelTxt.textContent = config.message;
    confirmButton.textContent = config.confirmText;

    panel.classList.add('confirmation');

    gameState = 'pause';
    handleGameState();

    clearTimeout(timing);
    timing = null;
}


statusHomeBtn.addEventListener('click', () => {
    showConfirmation('home');
});

statusRestartBtn.addEventListener('click', () => {
    showConfirmation('restart');
});

confirmButton.addEventListener('click', () => {
    panel.classList.remove('confirmation');
    const config = confirmationConfig[confirmationType];
    config.action();
});

cancelButton.addEventListener('click', () => {
    panel.classList.remove('confirmation');
    gameState = 'play';
    handleGameState();
    gameLoop();
});



// - Keyboard and buttons control section --
function handleDirection(key) {
    
    switch (key) {

        case 'w':
        case 'arrowup':
            turnUp();
            break;

        case 's':
        case 'arrowdown':
            turnDown();
            break;
 
        case 'a':
        case 'arrowleft':
            turnLeft();
            break;

        case 'd':
        case 'arrowright':
            turnRight();
            break;

        case 'b':
            isBoosting = true;
            updateSpeed();
            boost.classList.add('show');
    }
}

controlButtons.forEach(button => {
    button.addEventListener('click', () => {
        const key = button.dataset.key;
        handleDirection(key);
    });
});


boostButton.addEventListener('pointerdown', () => {
    isBoosting = true;
    updateSpeed();
    boost.classList.add('show');
});

boostButton.addEventListener('pointerup', () => {
    isBoosting = false;
    updateSpeed();
    boost.classList.remove('show');
});


document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (['w', 'a', 's', 'd', 'b', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'] .includes(key)) {
        event.preventDefault();
    }
    
    handleDirection(key);
});


document.addEventListener('keyup', (event) => {
    if (event.key.toLowerCase() === 'b') {
        isBoosting = false;
        updateSpeed();
        boost.classList.remove('show');
    }
});




/* 

function getTurnDirection() {
    if (direction.column !== 0) {
        if (food.row < snake[0].row) {
           return { row: -1, column: 0 }
        }
        if (food.row > snake[0].row) {
            return { row: 1, column: 0 }
        }
    } else if (direction.row !== 0) {
        if (food.column < snake[0].column) {
            return { column: -1, row: 0 }
        }
         if (food.column > snake[0].column) {
            return { column: 1, row: 0 }
        }
    }

    return direction;
}

function oppositeDirection() {

    if (direction.column !== 0) {
        if (food.row < snake[0].row) {
           return { row: 1, column: 0 }
        }
        if (food.row > snake[0].row) {
            return { row: -1, column: 0 }
        }
    } else if (direction.row !== 0) {
        if (food.column < snake[0].column) {
            return { column: 1, row: 0 }
        }
         if (food.column > snake[0].column) {
            return { column: -1, row: 0 }
        }
    }

    return direction;
}

function intelligentTurn() {
    const nextTurnDirection = getTurnDirection();
    const oppssiteTurn = oppositeDirection();

    const nextRow = snake[0].row + nextTurnDirection.row;
    const nextColumn = snake[0].column + nextTurnDirection.column;

    const busy = occupied(nextRow, nextColumn);
    
    if (!busy) {
        nextDirection = nextTurnDirection;
    } else {    
        nextDirection = oppssiteTurn;       
    } 
}


// - Gmae Modes Section --

function hardMode() {
    if (gameMode === 'shield') {
        if (checkWallCollision(newHead) || checkSelfCollision(newHead)) {
            intelligentTurn();
            return;
        }
    }
}

function superMode() {
    // comming soon --
    //newHead.column = (newHead.column + column) % column;
    // newHead.row = (newHead.row + row) % row;
}

*/