export const BOARD_SIZE = 21; // if make changes, must update --gameGridSize at styles.css
export const IS_BORDERLESS = false; // no colision at the board walls
export const GAME_BOARD = document.getElementById('game-board');

export function randomGameBoardPosition() {
    return {
        x: Math.floor( Math.random() * BOARD_SIZE) + 1,
        y: Math.floor( Math.random() * BOARD_SIZE) + 1
    }
}

export function clearGameBoard() {
    GAME_BOARD.innerHTML = '';
}

export function outsideBoard( position ) {
    return (position.y === 0 || position.x === 0 || position.y > BOARD_SIZE || position.x > BOARD_SIZE );
}