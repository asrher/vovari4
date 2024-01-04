const { cmd, sck1 } = require("../lib/");
const footbal = {
  "https://cdn.galleries.smcloud.net/t/galleries/gf-FKw2-EcYt-DnsC_cristiano-ronaldo-664x442.jpg": ["الدون", "كريستيانو", "كريستيانو رونالدو"],
  "https://images6.alphacoders.com/596/596848.jpg": ["كانيكي"],
  "https://images7.alphacoders.com/303/303042.png": ["bb", "vv"],
  "https://images7.alphacoders.com/611/611138.png": ["b", "v"],
  "https://images4.alphacoders.com/474/47438.png": ["bbb", "vvv"],
};

let ImageQuizGameData = {};
let remainingImages = Object.keys(footbal);

cmd({
  pattern: 'صورة',
  filename: __filename
}, async (message, match, group) => {
  let gameData = ImageQuizGameData[match.chat];
  if (!gameData) {
    gameData = await startImageQuiz(message, match);
    ImageQuizGameData[match.chat] = gameData;
  }
});

cmd({
  on: 'text'
}, async (message, match, group) => {
  const gameData = ImageQuizGameData[match.chat];

  if (!gameData) return;

  if (gameData.id === match.chat && gameData.preAns !== match.text && !match.isBaileys) {
    gameData.preAns = match.text;

    const correctAnswers = footbal[gameData.question];
    const userAnswer = match.text.trim();

    if (correctAnswers.some(ans => ans.toLowerCase() === userAnswer.toLowerCase())) {
      addPointToParticipant(message, match, gameData, match.sender);
      await startNextRound(message, match, gameData);
    }
  }
});

async function startImageQuiz(message, match) {
  if (remainingImages.length === 0) {
    remainingImages = Object.keys(footbal);
  }

  const randomImageIndex = Math.floor(Math.random() * remainingImages.length);
  const randomImageURL = remainingImages[randomImageIndex];
  const correctAnswers = footbal[randomImageURL];

  await message.sendMessage(match.chat, {
    image: { url: randomImageURL },
    caption: `*بدأت لعبة الصور*`,
  });

  remainingImages.splice(randomImageIndex, 1); // Remove the used image from remainingImages

  return {
    id: match.chat,
    question: randomImageURL,
    answers: correctAnswers,
    participants: {}, // Store participants' points
    preAns: '',
  };
}

async function addPointToParticipant(message, match, gameData, participantId) {
  if (!gameData.participants[participantId]) {
    gameData.participants[participantId] = 0;
  }

  gameData.participants[participantId] += 1;

  await message.sendMessage(match.chat, {
    text: `*إجابة صحيحة!*\n\n@${participantId.split('@')[0]} حصلت على نقطة جديدة`,
    mentions: [participantId],
  });
}

async function startNextRound(message, match, gameData) {
  if (remainingImages.length === 0) {
    await message.sendMessage(match.chat, {
      text: `*لقد انتهت جميع الصور*\n\nتم انهاء اللعبة`,
    });
    delete ImageQuizGameData[match.chat];
    return;
  }

  const newGameData = await startImageQuiz(message, match);
  ImageQuizGameData[match.chat] = newGameData;
}
