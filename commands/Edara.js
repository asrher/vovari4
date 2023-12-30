const { cmd } = require('../lib');

const deathGame = {
  isGameActive: false,
  players: [],
  words: ['mama', 'baba', 'nana', 'gaga'],
  chosenWord: '',
  currentPlayerIndex: 0,
};

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * deathGame.words.length);
  return deathGame.words[randomIndex];
}

function startDeathGame(citel) {
  deathGame.isGameActive = true;
  deathGame.players = []; // Reset players
  deathGame.chosenWord = getRandomWord();
  citel.reply(`👾 Death game started! Send ".join" to participate.`);
}

function assignPlayerNumbers() {
  deathGame.players.forEach((player, index) => {
    player.number = index + 1;
  });
}

cmd({
  pattern: "death",
  category: "games",
}, async (Void, citel) => {
  if (!deathGame.isGameActive) {
    deathGame.players.push({ sender: citel.sender, number: 0 });
    citel.reply(`You've joined the Death game. Waiting for more players...`);

    if (deathGame.players.length >= 2) {
      startDeathGame(citel);
      assignPlayerNumbers();
      deathGame.players.forEach(player => {
        citel.reply(`You're Player ${player.number}.`);
      });
    }
  }
});

cmd({
  on: "text",
  fromMe: false,
}, async (Void, citel, message) => {
  if (!deathGame.isGameActive || message !== deathGame.chosenWord) return;

  const currentPlayer = deathGame.players[deathGame.currentPlayerIndex];
  if (currentPlayer && currentPlayer.sender === citel.sender) {
    citel.reply(`You've chosen the correct word! Choose a player number for elimination.`);
    citel.reply(`Enter the number of the player you want to eliminate (1 - ${deathGame.players.length}):`);

    cmd({
      on: "text",
      fromMe: false,
    }, async (Void, citel, replyMessage) => {
      const chosenNumber = parseInt(replyMessage);
      if (!isNaN(chosenNumber) && chosenNumber > 0 && chosenNumber <= deathGame.players.length) {
        const playerToRemoveIndex = deathGame.players.findIndex(player => player.number === chosenNumber);
        if (playerToRemoveIndex !== -1) {
          deathGame.players.splice(playerToRemoveIndex, 1);
          citel.reply(`Player ${chosenNumber} has been eliminated.`);
        } else {
          citel.reply(`Invalid player number. Enter a valid number (1 - ${deathGame.players.length}):`);
        }
      } else {
        citel.reply(`Invalid input. Enter a valid player number (1 - ${deathGame.players.length}):`);
      }
    });
  }

  deathGame.currentPlayerIndex++;
  if (deathGame.currentPlayerIndex >= deathGame.players.length) {
    deathGame.currentPlayerIndex = 0; // Reset back to the first player
  }
});
