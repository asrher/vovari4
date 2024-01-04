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
  let gameData = ImageQuizGameData[match.chat.split('@')[0]];
  if (!gameData || !gameData.isActive) {
    gameData = await startImageQuiz(message, match.chat.split('@')[0]);
    ImageQuizGameData[match.chat.split('@')[0]] = gameData;
  }
});

cmd({
  pattern: 'stop',
  filename: __filename
}, async (message, match, group) => {
  const id = match.chat.split('@')[0];
  const gameData = ImageQuizGameData[id];

  if (gameData && gameData.isActive) {
    gameData.isActive = false;

    let results = 'Game stopped. Here are the results:\n';
    for (const participantId in gameData.participants) {
      const points = gameData.participants[participantId];
      const registeredUser = await sck1.findOne({ id: participantId });
      const playerName = registeredUser ? registeredUser.name : "Unknown"; // Default name if user not found

      results += `${playerName} (${participantId}) got ${points} points.\n`;
    }

    return await message.sendMessage(match.chat, results);
  }
});

cmd({
  on: 'text'
}, async (message, match, group) => {
  const id = match.chat.split('@')[0];
  const gameData = ImageQuizGameData[id];

  if (!gameData || !gameData.isActive) return;

  const correctAnswers = gameData.answers.map(ans => ans.toLowerCase());
  const userAnswer = match.text.trim();

  if (correctAnswers.includes(userAnswer.toLowerCase())) {
    if (!gameData.participants[match.sender]) {
      gameData.participants[match.sender] = 0;
    }

    gameData.participants[match.sender]++;
    addPointAndStartNextRound(message, id);
  }
});

async function startImageQuiz(message, id) {
  const footbalKeys = Object.keys(footbal);
  const randomImageURL = footbalKeys[Math.floor(Math.random() * footbalKeys.length)];
  const correctAnswers = footbal[randomImageURL];

  await message.sendMessage(id, {
    image: { url: randomImageURL },
    caption: `*بدأت لعبة الصور*\n\nبدأت اللعبة، يمكن للجميع الإجابة!`,
  });

  return {
    isActive: true,
    participants: {},
    currentimage: randomImageURL,
    answers: correctAnswers,
  };
}

async function addPointAndStartNextRound(message, id) {
  const gameData = ImageQuizGameData[id];

  await message.sendMessage(id, {
    text: `*إجابة صحيحة!* لقد تم إضافة نقطة لك.`,
  });

  const newGameData = await startImageQuiz(message, id);
  ImageQuizGameData[id] = newGameData;
}
