const { cmd, sck1 } = require("../lib/");
const footbal = {
  "https://cdn.galleries.smcloud.net/t/galleries/gf-FKw2-EcYt-DnsC_cristiano-ronaldo-664x442.jpg": ["الدون", "كريستيانو", "كريستيانو رونالدو"],
  "https://images6.alphacoders.com/596/596848.jpg": ["كانيكي"],
  "https://images7.alphacoders.com/303/303042.png": ["bb", "vv"],
  "https://images7.alphacoders.com/611/611138.png": ["b", "v"],
  "https://images4.alphacoders.com/474/47438.png": ["bbb", "vvv"],
};

let ImageQuizGameData = {};

cmd({
  pattern: 'صورة',
  filename: __filename
}, async (message, match, group) => {
  const id = match.chat.split("@")[0];

  const gameData = await startImageQuiz(message, match);

  ImageQuizGameData[id] = gameData;
});

cmd({
  on: 'text'
}, async (message, match, group) => {
  const id = match.chat.split("@")[0];
  const gameData = ImageQuizGameData[id];

  if (!gameData) return;

  const correctAnswers = gameData.answers.map(ans => ans.toLowerCase());
  const userAnswer = match.text.trim();

  if (correctAnswers.includes(userAnswer.toLowerCase())) {
    addPointAndStartNextRound(message, match, gameData);
  }
});

async function startImageQuiz(message, match) {
  const footbalKeys = Object.keys(footbal);
  const randomImageURL = footbalKeys[Math.floor(Math.random() * footbalKeys.length)];
  const correctAnswers = footbal[randomImageURL];

  await message.sendMessage(match.chat, {
    image: { url: randomImageURL },
    caption: `*بدأت لعبة الصور*\n\nقم بتخمين الإجابة!`,
  });

  return {
    id: match.chat.split("@")[0],
    player: '',
    question: randomImageURL,
    answers: correctAnswers,
  };
}

async function addPointAndStartNextRound(message, match, gameData) {
  if (!gameData.player) {
    gameData.player = match.sender;
    gameData.attempts = 0;
  }

  gameData.attempts += 1;

  await message.sendMessage(match.chat, {
    text: `*إجابة صحيحة!*\n\nاللاعب: ${gameData.player.split('@')[0]}`,
  });

  const newGameData = await startImageQuiz(message, match);
  ImageQuizGameData[match.chat.split("@")[0]] = newGameData;
}

cmd({
  pattern: 'stop',
  filename: __filename
}, async (message, match, group) => {
  let results = 'نتائج اللاعبين:\n\n';

  for (const id in ImageQuizGameData) {
    const gameData = ImageQuizGameData[id];
    results += `اللاعب: ${gameData.player.split('@')[0]} - عدد النقاط: ${gameData.attempts}\n`;
  }

  await message.sendMessage(match.chat, results);
});
