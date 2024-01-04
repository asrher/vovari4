const { cmd, sck1, sleep } = require("../lib");

let wordGame = {};

cmd({
  pattern: "word",
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
      word: chosenWord,
      points: {},
      stopped: false,
      wordSent: false
    };
    
    return m.reply(`Word game has started. Send the word: *${chosenWord}*`);
  }
});

cmd({
  pattern: "stop",
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

  if (wordGame[id] && wordGame[id].started && !wordGame[id].stopped) {
    let sender = m.sender.split("@")[0];

    if (word === wordGame[id].word && !wordGame[id].participants[sender]) {
      wordGame[id].participants[sender] = true;
      if (!wordGame[id].points[sender]) wordGame[id].points[sender] = 0;
      wordGame[id].points[sender]++;

      let words = ['ناروتو', 'تسونادي', 'لوفي', 'زورو', 'ناتسو', 'روميو', 'انديفار', 'كورابيكا'];
      let randomIndex = Math.floor(Math.random() * words.length);
      let nextWord = words[randomIndex];

      wordGame[id].word = nextWord;
      wordGame[id].wordSent = false;

      return m.send(`Correct word! You got a point. Next word: *${nextWord}*`);
    }
  }
});
