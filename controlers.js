let newDirection = { x: 0, y: 0 };
let lastDirection = { x: 0, y: 0 };

const GO_UP    = { x:  0, y: -1 };
const GO_DOWN  = { x:  0, y:  1 };
const GO_LEFT  = { x: -1, y:  0 };
const GO_RIGHT = { x:  1, y:  0 };

function isGoingUpOrDown() {
    return lastDirection.x === 0 && lastDirection.y !== 0;
}

function isGoingLeftOrRight() {
    return lastDirection.x !== 0 && lastDirection.y === 0;
}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if ( isGoingUpOrDown() ) break;
            newDirection = GO_UP; break;
        case 'ArrowDown':
            if ( isGoingUpOrDown() ) break;
            newDirection = GO_DOWN; break;
        case 'ArrowLeft':
            if ( isGoingLeftOrRight() ) break;
            newDirection = GO_LEFT; break;
        case 'ArrowRight':
            if ( isGoingLeftOrRight() ) break;
            newDirection = GO_RIGHT; break;
    }
})

export function getActualDirection() {
    lastDirection = newDirection;
    return newDirection;
}