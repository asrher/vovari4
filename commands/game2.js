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
  let gameData = ImageQuizGameData[match.sender];
  if (!gameData) {
    gameData = await startImageQuiz(message, match);
    ImageQuizGameData[match.sender] = gameData;
  }

  clearTimeout(gameData.timer);
  gameData.timer = setTimeout(() => {
    timeoutFunction(message, match, gameData);
  }, gameData.waitTime * 1000);
});

cmd({
  on: 'text'
}, async (message, match, group) => {
  const gameData = ImageQuizGameData[match.sender];

  if (!gameData) return;

  if (gameData.id === match.chat && gameData.player === match.sender && gameData.preAns !== match.text && !match.isBaileys) {
    clearTimeout(gameData.timer);
    gameData.preAns = match.text;

    const correctAnswers = footbal[gameData.question];
    const userAnswer = match.text.trim();

    if (correctAnswers.some(ans => ans.toLowerCase() === userAnswer.toLowerCase())) {
      addPointAndStartNextRound(message, match, gameData);
    } else {
      handleWrongAnswer(message, match, gameData, correctAnswers);
    }
  }
});

async function startImageQuiz(message, match) {
  const footbalKeys = Object.keys(footbal);
  const randomImageURL = footbalKeys[Math.floor(Math.random() * footbalKeys.length)];
  const correctAnswers = footbal[randomImageURL];

  await message.sendMessage(match.chat, {
    image: { url: randomImageURL },
    caption: `*بدأت لعبة الصور*\n\nاللاعب: @${match.sender.split('@')[0]}\n\nبدأت اللعبة معك 3 فرص و 20 ثانية`,
    mentions: [match.sender]
  });

  return {
    id: match.chat,
    player: match.sender,
    question: randomImageURL,
    answers: correctAnswers,
    attempts: 0,
    waitTime: 20,
    preAns: '',
    timer: ''
  };
}

async function addPointAndStartNextRound(message, match, gameData) {
  gameData.attempts += 1;

  await message.sendMessage(match.chat, {
    text: `*إجابة صحيحة!*\n\nاللاعب: @${gameData.player.split('@')[0]}\nعدد المحاولات: ${gameData.attempts}`,
    mentions: [gameData.player]
  });

  const newGameData = await startImageQuiz(message, match);
  ImageQuizGameData[match.sender] = newGameData;
}

async function handleWrongAnswer(message, match, gameData, correctAnswers) {
  gameData.attempts += 1;

  if (gameData.attempts < 3) {
    await message.sendMessage(match.chat, {
      text: `*الجواب خطأ!*\n\nاللاعب: @${gameData.player.split('@')[0]}\nتبقى لك ${3 - gameData.attempts} فرص`,
      mentions: [gameData.player]
    });

    gameData.timer = setTimeout(() => {
      timeoutFunction(message, match, gameData);
    }, gameData.waitTime * 1000);
  } else {
    await message.sendMessage(match.chat, {
      text: `*لقد خسرت!*\n\nاللاعب: @${gameData.player.split('@')[0]}\nالإجابة الصحيحة: ${correctAnswers.join(', ')}`,
      mentions: [gameData.player]
    });

    delete ImageQuizGameData[match.sender];
  }
}

async function timeoutFunction(message, match, gameData) {
  await message.sendMessage(match.chat, {
    text: `*لقد انتهى الوقت!*\n\nاللاعب: @${gameData.player.split('@')[0]}\nالإجابة الصحيحة: ${gameData.answers.join(', ')}`,
    mentions: [gameData.player]
  });

  delete ImageQuizGameData[match.sender];
}
