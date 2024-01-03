const { cmd, prefix } = require('../lib');

class ConnectFour {
  constructor() {
    this.rows = 6;
    this.cols = 7;
    this.board = Array.from({ length: this.rows }, () => Array(this.cols).fill('◯'));
    this.currentPlayer = 'Player 1';
    this.winner = null;
    this.moves = 0;
  }

  displayBoard() {
    let boardString = '';
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        boardString += this.board[row][col] + ' ';
      }
      boardString += '\n';
    }
    return boardString;
  }

  dropPiece(col) {
    if (this.winner) {
      return 'The game is over. Please start a new game.';
    }

    col = parseInt(col);
    if (isNaN(col) || col < 1 || col > this.cols) {
      return 'Invalid column number. Please enter a number between 1 and 7.';
    }

    col--; // Adjust for 0-based index
    for (let row = this.rows - 1; row >= 0; row--) {
      if (this.board[row][col] === '◯') {
        this.board[row][col] = this.currentPlayer === 'Player 1' ? '🔴' : '🟡';
        this.moves++;
        if (this.checkWin(row, col)) {
          this.winner = this.currentPlayer;
          return `${this.displayBoard()}\n${this.winner} wins! Game Over.`;
        }
        if (this.moves === this.rows * this.cols) {
          return `${this.displayBoard()}\nThe game ended in a tie! Game Over.`;
        }
        this.currentPlayer = this.currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
        return this.displayBoard();
      }
    }
    return 'Column is full. Choose another column.';
  }

  checkWin(row, col) {
    const directions = [
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
    ];

    const playerPiece = this.board[row][col];
    for (const [dx, dy] of directions) {
      let count = 1;
      for (let i = 1; i < 4; i++) {
        const newRow = row + dx * i;
        const newCol = col + dy * i;
        if (
          newRow >= 0 &&
          newRow < this.rows &&
          newCol >= 0 &&
          newCol < this.cols &&
          this.board[newRow][newCol] === playerPiece
        ) {
          count++;
        } else {
          break;
        }
      }
      for (let i = 1; i < 4; i++) {
        const newRow = row - dx * i;
        const newCol = col - dy * i;
        if (
          newRow >= 0 &&
          newRow < this.rows &&
          newCol >= 0 &&
          newCol < this.cols &&
          this.board[newRow][newCol] === playerPiece
        ) {
          count++;
        } else {
          break;
        }
      }
      if (count >= 4) {
        return true;
      }
    }
    return false;
  }

  resetGame() {
    this.board = Array.from({ length: this.rows }, () => Array(this.cols).fill('◯'));
    this.currentPlayer = 'Player 1';
    this.winner = null;
    this.moves = 0;
  }
}

const games = {};

cmd({
  pattern: `rec`,
  desc: 'Starts a game of Connect Four.',
  category: 'game',
  filename: __filename,
}, async (match, citel) => {
  const chatId = citel.chat;
  if (games[chatId]) {
    return await citel.reply('A game of Connect Four is already in progress in this chat.');
  }
  const game = new ConnectFour();
  games[chatId] = game;
  return await citel.reply(`A new game of Connect Four has started!\n${game.displayBoard()}\n${game.currentPlayer}'s turn.`);
});

cmd({
  pattern: `renum`,
  desc: 'Drop a piece into a column (e.g., .drop 3).',
  category: 'game',
  filename: __filename,
}, async (match, citel, col) => {
  const chatId = citel.chat;
  const game = games[chatId];
  if (!game) {
    return await citel.reply('No game in progress. Start a new game.');
  }
  const result = game.dropPiece(col);
  if (game.winner || game.moves === game.rows * game.cols) {
    delete games[chatId];
  }
  return await citel.reply(result);
});

cmd({
  pattern: `recon`,
  desc: 'Reset the ongoing Connect Four game.',
  category: 'game',
  filename: __filename,
}, async (match, citel) => {
  const chatId = citel.chat;
  if (!games[chatId]) {
    return await citel.reply('No game in progress. Start a new game.');
  }
  games[chatId].resetGame();
  return await citel.reply('Connect Four game reset. Start a new game.');
});
