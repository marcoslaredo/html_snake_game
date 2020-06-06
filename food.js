import { onSnake, setSnakeGrowingRate } from './snake.js';
import { randomGameBoardPosition, GAME_BOARD, BOARD_SIZE } from './gameBoard.js';

let food = setFirstFoodPosition(); // css grid starts on 1, not on 0;
const EXPANSION_RATE = 5;

function setFirstFoodPosition() {
    let foodPosition = randomGameBoardPosition();
    while (foodPosition.x === foodPosition.y === Math.round(BOARD_SIZE/2)) {
        foodPosition = randomGameBoardPosition();
    }
    return foodPosition;
}

function repositionFood() {
    let nextFoodPosition = null;
    while ( nextFoodPosition === null || onSnake(nextFoodPosition)) {
        nextFoodPosition = randomGameBoardPosition();
    }
    return nextFoodPosition;
}

export function update() {
    if ( onSnake(food) ) {
        setSnakeGrowingRate(EXPANSION_RATE);
        food = repositionFood();
    }
};

export function draw() {
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    GAME_BOARD.appendChild(foodElement);
};