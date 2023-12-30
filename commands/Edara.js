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
  deathGame.players = [];
  deathGame.chosenWord = getRandomWord();

  // Announce the chosen word to all players
  citel.reply(`👾 Death game started! Send ".join" to participate.`);
  setTimeout(() => {
    citel.reply(`The chosen word is: *${deathGame.chosenWord.toUpperCase()}*.\nSend this word to eliminate a player.`);
  }, 1000); // Delay added for better message sequence
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
}, async (Void, citel, message) => {
  if (!deathGame.isGameActive) return;

  const submittedWord = typeof message === 'string' ? message.trim().toLowerCase() : '';
  const sender = citel.sender;
  
  if (submittedWord === deathGame.chosenWord) {
    if (!deathGame.players.includes(sender)) {
      citel.reply(`You're not part of the game. Send ".join" to participate.`);
      return;
    }

    if (deathGame.eliminatedPlayers.includes(sender)) {
      citel.reply(`You've already been eliminated.`);
      return;
    }

    const playerNumber = deathGame.players.indexOf(sender) + 1;
    citel.reply(`You've chosen the correct word! Choose a player number for elimination.`);
    citel.reply(`Enter the number of the player you want to eliminate (1 - ${deathGame.players.length}):`);

    citel.onReplyMessage(citel.chatId, async (reply) => {
      const chosenNumber = parseInt(reply.body);
      if (!isNaN(chosenNumber) && chosenNumber > 0 && chosenNumber <= deathGame.players.length) {
        const eliminatedPlayerIndex = chosenNumber - 1;
        const eliminatedPlayer = deathGame.players[eliminatedPlayerIndex];

        deathGame.eliminatedPlayers.push(eliminatedPlayer);
        deathGame.players.splice(eliminatedPlayerIndex, 1);

        citel.reply(`Player ${chosenNumber} (@${eliminatedPlayer}) has been eliminated.`);
      } else {
        citel.reply(`Invalid input. Enter a valid player number (1 - ${deathGame.players.length}):`);
      }
    });
  }
});
