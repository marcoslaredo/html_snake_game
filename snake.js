import { getActualDirection } from "./controlers.js";
import { BOARD_SIZE, GAME_BOARD } from './gameBoard.js';

export const SNAKE_SPEED = 5;
let snakeBody = [{x: 0, y: 0}]; // css grid starts on 1, not on 0;
let growingRate = 0;

function setSnakeOnCenter() {
    if (snakeBody[0].x === 0) {
        snakeBody[0].x = Math.round(BOARD_SIZE/2);
        snakeBody[0].y = Math.round(BOARD_SIZE/2);
    }
};
function moveSnake() {
    const inpuDirection = getActualDirection();

    for (let i = snakeBody.length -2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i]};
    }

    snakeBody[0].x += inpuDirection.x;
    snakeBody[0].y += inpuDirection.y;
};
function expandSnake() {
    for (let i = 0; i < growingRate; i++) {
        snakeBody.push( { ...snakeBody[snakeBody.length -1] } );
    }
    setSnakeGrowingRate(0);
};
function comparePositions( pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
};

export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
};

export function getSnakeHead() {
    return snakeBody[0];
}

export function setSnakeGrowingRate(ratio) {
    growingRate = ratio;
}

export function onSnake( position, {ignoreHead = false} = {} ) {
    return snakeBody.some( (segment, index) => {
        if (ignoreHead && index === 0) return false;
        return comparePositions( segment, position );
    });
}

export function update() {
    setSnakeOnCenter();
    expandSnake();
    moveSnake();
    snakeIntersection();
};

export function draw() {
    snakeBody.forEach( segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        GAME_BOARD.appendChild(snakeElement);
    });
};