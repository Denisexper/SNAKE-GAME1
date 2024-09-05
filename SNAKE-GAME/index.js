//html elements
const board = document.getElementById('board')
const scoreBoard = document.getElementById('scoreBoard')
const startButtom = document.getElementById('start')
const gomeOverSing = document.getElementById('gameOver')

//gamr setting
const boardSize = 10;
const gameSpeed = 100;
const squareType = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};

const directions = {
    ArrowUp:-10,
    ArrowDown:-10,
    ArrowRight: 1,
    ArrowLeft:-1,

};

//game variables
let snake;
let score;
let direcction;
let boardSquare;
let emptySquare;
let moveInterval;

const createBoard = () => {
    boardSquare.forEch ((row, rowIndex) => {
     row.forEch((column, columnndex) => {
        const squareValue = `${rowIndex}${columnndex}`;
        const squareElement = document.createElement('div');
        squareElement.setAttribute('class','square emptySquare');
        squareElement.setAttribute('id', squareValue);
        board.appendChild(squareElement);
        emptySquares.push(squareValue);
    
     })   
    })
}

const setGame = () => {
    snake = ['00','01','02','03']
    score = snake.length;
    direcction = 'ArrowRight';
    boardSquare = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
    console.log(boardSquare)
    board.innerHTML = '';
    emptySquares = [];
    createboard();
}

const startGame = () => {
    setGame();   
}

startButtom.addEventListener('Click', startGame);


