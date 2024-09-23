const board = document.getElementById('board');
const gameStatus = document.getElementById('game-status');
const playerScoreElement = document.getElementById('player-score-value');
const computerScoreElement = document.getElementById('computer-score-value');
const highScore = document.getElementById('high-score');
const vsComputerBtn = document.getElementById('vs-computer');
const vsPlayerBtn = document.getElementById('vs-player');
const resetBtn = document.getElementById('reset');
const moveSound = document.getElementById('moveSound');
const winSound = document.getElementById('winSound');
const themeSwitch = document.getElementById('theme-switch');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = false;
let vsComputer = false;
let playerScore = 0;
let computerScore = 0;

const PLAYER_X = '✕';
const PLAYER_O = '○';

function createBoard() {
  board.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-index', i);
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
  }
  updateScore();
  updateHighScore();
}

function handleCellClick(e) {
  const index = e.target.getAttribute('data-index');
  if (gameBoard[index] === '' && gameActive && currentPlayer === 'X') {
    makeMove(index);
    if (gameActive && vsComputer) {
      setTimeout(computerMove, 500);
    }
  }
}

function makeMove(index) {
  gameBoard[index] = currentPlayer;
  const cell = document.querySelector(`[data-index="${index}"]`);
  cell.textContent = currentPlayer === 'X' ? PLAYER_X : PLAYER_O;
  cell.classList.add('pop-in', currentPlayer.toLowerCase());
  playSound(moveSound);
  if (checkWin()) {
    gameStatus.textContent = `Player ${currentPlayer} wins!`;
    gameStatus.style.backgroundColor = '#2ecc71';
    gameActive = false;
    playSound(winSound);
    animateWin();
    if (currentPlayer === 'X') {
      playerScore++;
      updateScore();
      updateHighScore();
    } else if (vsComputer) {
      computerScore++;
      updateScore();
    }
  } else if (gameBoard.every(cell => cell !== '')) {
    gameStatus.textContent = "It's a draw!";
    gameStatus.style.backgroundColor = '#f39c12';
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.textContent = `Player ${currentPlayer}'s turn`;
    gameStatus.style.backgroundColor = currentPlayer === 'X' ? '#e74c3c' : '#3498db';
  }
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      highlightWinningCells(pattern);
      return true;
    }
    return false;
  });
}

function highlightWinningCells(pattern) {
  pattern.forEach(index => {
    const cell = document.querySelector(`[data-index="${index}"]`);
    cell.classList.add('win-animation');
  });
}

function animateWin() {
  board.classList.add('win-animation');
  setTimeout(() => {
    board.classList.remove('win-animation');
  }, 1500);
}

function computerMove() {
  if (gameActive && currentPlayer === 'O') {
    const bestMove = findBestMove();
    makeMove(bestMove);
  }
}

function findBestMove() {
  // Check for winning move
  for (let i = 0; i < 9; i++) {
    if (gameBoard[i] === '') {
      gameBoard[i] = 'O';
      if (checkWin()) {
        gameBoard[i] = '';
        return i;
      }
      gameBoard[i] = '';
    }
  }

  // Check for blocking player's winning move
  for (let i = 0; i < 9; i++) {
    if (gameBoard[i] === '') {
      gameBoard[i] = 'X';
      if (checkWin()) {
        gameBoard[i] = '';
        return i;
      }
      gameBoard[i] = '';
    }
  }

  // Choose center if available
  if (gameBoard[4] === '') return 4;

  // Choose a random corner
  const corners = [0, 2, 6, 8].filter(i => gameBoard[i] === '');
  if (corners.length > 0) {
    return corners[Math.floor(Math.random() * corners.length)];
  }

  // Choose a random side
  const sides = [1, 3, 5, 7].filter(i => gameBoard[i] === '');
  if (sides.length > 0) {
    return sides[Math.floor(Math.random() * sides.length)];
  }

  // If all else fails, choose the first available spot
  return gameBoard.findIndex(cell => cell === '');
}

function updateScore() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function updateHighScore() {
  let highScoreValue = localStorage.getItem('highScore') || 0;
  if (playerScore > highScoreValue) {
    highScoreValue = playerScore;
    localStorage.setItem('highScore', highScoreValue);
  }
  highScore.textContent = `High Score: ${highScoreValue}`;
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function startGame(vsCpu) {
  vsComputer = vsCpu;
  gameActive = true;
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  createBoard();
  gameStatus.textContent = "Player X's turn";
  gameStatus.style.backgroundColor = '#e74c3c';
}

function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

vsComputerBtn.addEventListener('click', () => startGame(true));
vsPlayerBtn.addEventListener('click', () => startGame(false));
resetBtn.addEventListener('click', () => startGame(vsComputer));
themeSwitch.addEventListener('change', toggleTheme);

createBoard();