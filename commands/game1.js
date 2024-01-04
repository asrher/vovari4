const { cmd } = require("../lib");

let wordGame = {};

cmd({
  pattern: "startgame",
  category: "games",
}, async (Void, m) => {
  let id = m.chat.split("@")[0];

  if (wordGame[id]) {
    return m.reply('A word game is already in progress in this group.');
  } else {
    let words = ['ناروتو', 'تسونادي', 'لوفي', 'زورو', 'ناتسو', 'روميو', 'انديفار', 'كورابيكا'];
    let randomIndex = Math.floor(Math.random() * words.length);
    let chosenWord = words[randomIndex];

    wordGame[id] = {
      started: true,
      participants: {},
      word: null,
      chosenWord: chosenWord,
      points: {},
      stopped: false
    };
    return m.reply(`Word game has started! Send the word *${chosenWord}* to earn a point.`);
  }
});

cmd({
  pattern: "stopgame",
  category: "games",
}, async (Void, m) => {
  let id = m.chat.split("@")[0];

  if (!wordGame[id] || wordGame[id].stopped) {
    return m.reply('No active word game in this group.');
  } else {
    let pointsList = "Points:\n";
    for (const participant in wordGame[id].points) {
      pointsList += `${participant}: ${wordGame[id].points[participant]}\n`;
    }
    delete wordGame[id];
    return m.reply(pointsList);
  }
});

cmd({ on: "text" }, async (Void, m) => {
  if (m.isBot || !m.text || !m.isGroup) return;

  let id = m.chat.split("@")[0];
  let word = m.text.toLowerCase();

  if (wordGame[id] && wordGame[id].started && !wordGame[id].stopped && word === wordGame[id].chosenWord) {
    let sender = m.sender.split("@")[0];

    if (!wordGame[id].participants[sender]) {
      wordGame[id].participants[sender] = true;
      if (!wordGame[id].points[sender]) wordGame[id].points[sender] = 0;
      wordGame[id].points[sender]++;
      wordGame[id].stopped = false;

      let words = ['ناروتو', 'تسونادي', 'لوفي', 'زورو', 'ناتسو', 'روميو', 'انديفار', 'كورابيكا'];
      let randomIndex = Math.floor(Math.random() * words.length);
      let nextWord = words[randomIndex];
      wordGame[id].chosenWord = nextWord;

      return m.reply(`Congratulations, ${sender}! You got the word right and earned a point.\nNext word: *${nextWord}*`);
    }
  }
});
