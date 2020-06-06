import { SNAKE_SPEED, 
    update as updateSnake, 
    draw as drawSnake, 
    getSnakeHead, 
    snakeIntersection, 
} from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { clearGameBoard, outsideBoard } from './gameBoard.js';

let lastRenderTime = 0;
let gameOver = false;

function update() {
    updateSnake();
    updateFood();
    checkDeath();
};

function draw() {
    clearGameBoard()
    drawSnake();
    drawFood();
};

function checkDeath() {
    gameOver = outsideBoard(getSnakeHead()) || snakeIntersection();
}

function main(currentTime) {
    if (gameOver) {
        if ( confirm('You lost. Press ok to restart.') ) {
            window.location = '/';
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED ) return;
    lastRenderTime = currentTime;
    update();
    draw();
}

// for the first run
window.requestAnimationFrame(main);