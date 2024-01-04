const { cmd, sck1 } = require("../lib/");
let wordGame = {};

cmd({
  pattern: "word",
  category: "games",
}, async (Void, citel) => {
  let id = citel.chat.split("@")[0];

  if (!wordGame || !wordGame[id]) {
    wordGame[id] = {
      isActive: false,
      participants: {},
      currentWord: '',
    };
  }

  if (wordGame[id].isActive) {
    return await citel.reply('The game is already in progress!');
  }

  wordGame[id].isActive = true;
  wordGame[id].participants = {};
  wordGame[id].currentWord = '';

  startGame(citel, id);
});

cmd({
  pattern: "stop",
  category: "games",
}, async (Void, citel) => {
  let id = citel.chat.split("@")[0];

  if (!wordGame[id].isActive) {
    return await citel.reply('No game in progress to stop!');
  }

  wordGame[id].isActive = false;

  return await citel.reply(getGameResults(id));
});

cmd({ on: "text" }, async (Void, citel) => {
  let id = citel.chat.split("@")[0];

  if (wordGame[id] && wordGame[id].isActive && citel.text.toLowerCase() === wordGame[id].currentWord) {
    let participantId = citel.sender;

    if (!wordGame[id].participants[participantId]) {
      wordGame[id].participants[participantId] = 0;
    }

    wordGame[id].participants[participantId]++;

    startGame(citel, id);
  }
});

function startGame(citel, id) {
  const randomWords = ['ناروتو', 'تسونادي', 'لوفي', 'زورو', 'ناتسو', 'روميو', 'انديفار', 'كورابيكا']; // List of random words
  const randomIndex = Math.floor(Math.random() * randomWords.length);
  wordGame[id].currentWord = randomWords[randomIndex];

  citel.send(`${wordGame[id].currentWord}`);
}

function getGameResults(id) {
  let results = 'Game stopped. Here are the results:\n';

  for (const participantId in wordGame[id].participants) {
    const points = wordGame[id].participants[participantId];
    results += `${participantId} got ${points} points.\n`;
  }

  return results;
}
