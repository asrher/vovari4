const { sck, sck1, cmd } = require('../lib');

const deathGame = {
  isGameActive: false,
  players: [],
  eliminatedPlayers: [],
  words: ['mama', 'baba', 'nana', 'gaga'],
  chosenWord: '',
};

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * deathGame.words.length);
  return deathGame.words[randomIndex];
}

function startDeathGame(citel) {
  deathGame.isGameActive = true;
  deathGame.players = [];
  deathGame.eliminatedPlayers = [];

  citel.reply(`👾 Death game started! Send ".join" to participate.`);
}

function chooseWordAndStart(citel) {
  deathGame.chosenWord = getRandomWord();
  citel.reply(`The chosen word is: *${deathGame.chosenWord.toUpperCase()}*.\nSend this word to eliminate a player.`);
}

function eliminatePlayerByNumber(citel, playerNumber) {
  const playerIndex = playerNumber - 1;
  if (playerIndex >= 0 && playerIndex < deathGame.players.length) {
    const eliminatedPlayer = deathGame.players[playerIndex];
    deathGame.eliminatedPlayers.push(eliminatedPlayer);
    deathGame.players.splice(playerIndex, 1);

    citel.reply(`Player ${playerNumber} (@${eliminatedPlayer}) has been eliminated.`);
  }
}

cmd({
  pattern: "death",
  category: "games",
}, async (Void, citel) => {
  if (!deathGame.isGameActive) {
    startDeathGame(citel);
  } else {
    if (!deathGame.players.includes(citel.sender)) {
      deathGame.players.push(citel.sender);
      const playerNumber = deathGame.players.length;
      citel.reply(`You've joined the Death game as Player ${playerNumber}.`);
      
      if (deathGame.players.length === 2) {
        chooseWordAndStart(citel);
      }
    }
  }
});

cmd({
  pattern: "startdeath",
  category: "games",
}, async (Void, citel) => {
  if (!deathGame.isGameActive) {
    citel.reply('The game has not started yet. Send ".death" to start.');
  } else if (deathGame.players.length < 2) {
    citel.reply('Need at least 2 players to start the game.');
  } else {
    chooseWordAndStart(citel);
  }
});


cmd({
  on: "text",
  fromMe: false,
}, async (Void, citel, message) => {
  if (!deathGame.isGameActive) return;

  const submittedWord = typeof message === 'string' ? message.trim().toLowerCase() : '';
  if (submittedWord === deathGame.chosenWord) {
    citel.reply(`You've chosen the correct word! Choose a player number for elimination.`);
    
    // Listen for incoming messages to get the player number
    const listener = Void.addMessageListener((receivedMessage) => {
      if (receivedMessage.body && receivedMessage.from === citel.chatId) {
        const chosenNumber = parseInt(receivedMessage.body);
        if (!isNaN(chosenNumber) && chosenNumber > 0 && chosenNumber <= deathGame.players.length) {
          eliminatePlayerByNumber(citel, chosenNumber);
          Void.removeMessageListener(listener); // Remove the listener after processing the input
        } else {
          citel.reply(`Invalid input. Enter a valid player number (1 - ${deathGame.players.length}):`);
        }
      }
    });
  }
});

