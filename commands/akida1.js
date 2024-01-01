const { cmd } = require("../lib/");

class HiddenCardGame {
  constructor() {
    this.column = 4;
    this.row = 4;
    this.player1 = "";
    this.player2 = "";
    this.currentPlayer = "";
    this.board = [];
    this.hiddenCardIndex = 7;
    this.gameStatus = false;
    this.gameEnd = false;
    this.attempts = {}
  }

  startGame(player1, player2) {
    this.player1 = player1;
    this.attempts[this.player1] =  0; 
    this.attempts[this.player2] =  0;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.board = this.createBoard();
    this.gameStatus = true;
  }

  createBoard() {
    const board = [];
    for (let row = 0; row < this.row; row++) 
    {
      const rowArray = [];
      for (let column = 0; column < this.column ; column++) {  rowArray.push("🈲"); }
      board.push(rowArray);
    }
    return board;
  }

  makeMove(player, number) {
    if (!this.gameStatus) {  return "No game in progress. Start a new game.";  }
    if (player !== this.currentPlayer) {  return "It's not your turn.";  }

    this.attempts[this.currentPlayer] ++ ;
    const index = number - 1;
    if (this.isValidMove(index)) {
      if (index === this.hiddenCardIndex) {
         this.board[Math.floor(index / this.row)][index % this.column] = "🃏";
        let board = this.displayBoard();
        this.gameStatus = false;
         return `${board} \n\n_*Congratulations! @${player.split("@")[0]} win!*_ \n_Player found the Hidden Queen Card in ${this.attempts[this.currentPlayer]} Attempts._`;
      } else {
        this.board[Math.floor(index / this.row)][index % this.column] = "🟦";
        const result = this.checkGameResult();
        if (result === "continue") {
          this.currentPlayer = player === this.player1 ? this.player2 : this.player1;
          return `${this.displayBoard()}\n\n_Current Turn: @${this.currentPlayer.split("@")[0]}\n_Next @${(this.currentPlayer === this.player1 ? this.player2 : this.player1).split("@")[0]}\n`
        } else {
          this.gameStatus = false;
          return "The hidden card was not found. Game over.";
        }
      }
    } else { return "Invalid move. Try again.";  }
  }

  isValidMove(index) {  return index >= 0 && index < 16 && this.board[Math.floor(index / this.row)][index % this.column] === "🈲"; }

  checkGameResult() {  return this.board.some((rowArray) => rowArray.includes("🈲")) ? "continue" : "end"; }

  displayBoard() {
    let boardString = "";
    for (let row = 0; row < this.row; row++) {
      for (let column = 0; column < this.column; column++) {    boardString += this.board[row][column] + " "; }
      boardString += "\n";
    }
    return boardString;
  }
}

const games = {};

cmd(
  {
    pattern: "hcg",
    desc: "Starts a Hidden Card Game.",
    filename: __filename,
    category: "game",
  },
  async (Void, citel, text) => {
    const chatId = citel.chat;
    let game = games[chatId];
    if (text.startsWith("end") && game) {
      delete games[chatId];
      return await citel.reply("Game ended. Goodbye!");
    }
    if (game && game.gameStatus) {   return await citel.reply( "A game is already in progress in this chat."  ); }
    if (!game) {
      game = new HiddenCardGame();
      games[chatId] = game;
    }
    if (!game.player1 || citel.sender === game.player1) {
      game.player1 = citel.sender;
      return await citel.send(`_*Hidden Card Game Created...*_\n_Player 1: @${game.player1.split("@")[0]} Joined_\n_Waiting For Another Player To Start Game..._\n\n*Type _.Hcg_ to Join This Game.*|`,
       { mentions: [game.player1]} );
    } else if (citel.sender !== game.player1) {
      game.player2 = citel.sender;
      game.startGame(game.player1, game.player2);
    }
    let row = 4 
    let colume = 4
    if(text)
    {
      row =  parseInt(text.split(",")[0] ) || 4 ;
      colume  =  parseInt(text.split(",")[1] ) || 4 ;
      
    }
    if (game.gameStatus) {
      game.row = parseInt(row) || 4;
      game.column = parseInt(colume) ||  4 ;
      game.hiddenCardIndex = Math.floor(Math.random() *  ( game.row * game.column ));
       return await citel.send(`Game started Now...\n_Turn: @${game.currentPlayer.split("@")[0]}\n_Next Turn : @${(game.currentPlayer === game.player1 ? game.player2 : game.player1).split("@")[0]}\n\n_Board Size : *${game.row}x${game.column}*_\n_Theres a Hidden Queen Card "🃏" in Board_\n_Enter a number to find the Queen Card_\n\n${game.displayBoard()} `,
                               { mentions: [game.player1, game.player2, game.currentPlayer]});
    }
  }
);

cmd({ on: "text" }, async (Void, citel, text, { isCreator }) => {
  const chatId = citel.chat;
  const game = games[chatId];
  if (!game) return; // No game in progress in this chat

  if (game.gameStatus && game.currentPlayer === citel.sender && citel.text) {
    const number = parseInt(citel.text);
    if (!isNaN(number)) {
      const result = game.makeMove(citel.sender, number);
      if(!game.gameStatus) {  delete games[chatId];  }
      return await citel.send(result, { mentions: [game.player1, game.player2]} );
      
    }
  }
});
