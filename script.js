let playerMove = '';
let computerMove = '';

let gameStats = JSON.parse(localStorage.getItem('gameStatsLocalStorage'))

if (!gameStats) {
    gameStats = {
        winCount: 0, 
        tieCount: 0,
        lossCount: 0
    }
}

document.querySelector('.js-moves').innerHTML = 'You: - Computer:';

document.querySelector('.js-stats').innerHTML = `Wins: ${gameStats.winCount} - Losses: ${gameStats.lossCount} - Ties: ${gameStats.tieCount}`;

function generateComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber < 1/3) {
        computerMove = 'Rock';
    } else if (randomNumber < 2/3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }
}

function checkWinner(winMove, lossMove) {
    let result = '';

    document.querySelector('.js-moves').innerHTML = `You: ${playerMove} / Computer: loading...`;

    if (computerMove === winMove) {
        result = 'Win';
        gameStats.winCount++;
    } else if (computerMove === lossMove) {
        result = 'Loss';
        gameStats.lossCount++;
    } else {
        result = 'Tie';
        gameStats.tieCount++;
    }
    
    document.querySelector('.js-moves').innerHTML = `You: ${playerMove} / Computer: ${computerMove}`;
    document.querySelector('.js-stats').innerHTML = `Wins: ${gameStats.winCount} - Losses: ${gameStats.lossCount} - Ties: ${gameStats.tieCount}`;
    localStorage.setItem('gameStatsLocalStorage', JSON.stringify(gameStats));
}