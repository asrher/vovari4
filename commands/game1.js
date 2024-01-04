const { cmd, sck1 } = require("../lib");

let wordGame = {};

function sendWord(chatId) {
  let words = ['ناروتو', 'تسونادي', 'لوفي', 'زورو', 'ناتسو', 'روميو', 'انديفار', 'كورابيكا'];
  let randomIndex = Math.floor(Math.random() * words.length);
  let chosenWord = words[randomIndex];

  wordGame[chatId] = {
    word: chosenWord,
    participants: {}
  };

  return chosenWord;
}

cmd({
  pattern: "word",
  category: "games",
}, async (Void, m) => {
  let chatId = m.chat.split("@")[0];

  if (!wordGame[chatId]) {
    let word = sendWord(chatId);
    return m.reply(`Word game started! Send the word *${word}* to earn points. Send '.stop' to end the game.`);
  } else {
    return m.reply('A word game is already in progress in this group.');
  }
});

cmd({
  pattern: "stop",
  category: "games",
}, async (Void, m) => {
  let chatId = m.chat.split("@")[0];

  if (wordGame[chatId]) {
    let pointsList = "Points:\n";
    for (const participant in wordGame[chatId].participants) {
      pointsList += `${participant}: ${wordGame[chatId].participants[participant]}\n`;
    }
    delete wordGame[chatId];
    return m.reply(pointsList);
  } else {
    return m.reply('No active word game in this group.');
  }
});

cmd({ on: "text" }, async (Void, m) => {
  if (m.isBot || !m.text || !m.isGroup) return;

  let chatId = m.chat.split("@")[0];
  let word = m.text.toLowerCase();
  let sender = m.sender.split("@")[0];

  if (wordGame[chatId] && wordGame[chatId].word === word) {
    if (!wordGame[chatId].participants[sender]) {
      wordGame[chatId].participants[sender] = 0;
    }
    wordGame[chatId].participants[sender]++;

    let newWord = sendWord(chatId);
    return m.send(`Next word: *${newWord}*`);
  }
});
