const { cmd, sck1 } = require("../lib/");
const footbal = {
  "https://i.ibb.co/56SsqH9/IMG-20230705-WA0184.jpg": ["غوجو"],
  "https://i.ibb.co/R66nbYV/IMG-20230706-WA0526.jpg": ["يور"],
  "https://i.ibb.co/wwDQvdQ/IMG-20230707-WA0138.jpg": ["هيت"],
  "https://i.ibb.co/nQTZTQG/IMG-20230707-WA0466.jpg": ["بروك"],
  "https://i.ibb.co/CWZhLxs/IMG-20230707-WA0467.jpg": ["ياماتو"],
  "https://i.ibb.co/rpcBFXZ/IMG-20230707-WA0468.jpg": ["نيوغيت", "ادوارد"],
  "https://i.ibb.co/SvYkhHP/IMG-20230707-WA0469.jpg": ["سابو"],
  "https://i.ibb.co/X3QqHCN/IMG-20230707-WA0476.jpg": ["زينيتسو"],
  "https://i.ibb.co/xqx9gBJ/IMG-20230707-WA0478.jpg": ["تانجيرو"],
  "https://i.ibb.co/Kz6VKH9/IMG-20230707-WA0480.jpg": ["ايتشيغو"],
  "https://i.ibb.co/5Gxp7XY/IMG-20230707-WA0481.jpg": ["نيزوكو"],
  "https://i.ibb.co/VWyf3Qk/IMG-20230707-WA0483.jpg": ["ميسا"],
  "https://i.ibb.co/zJfKhrp/IMG-20230707-WA0485.jpg": ["يوميكو"],
  "https://i.ibb.co/kQmCnDB/IMG-20230707-WA0495.jpg": ["اكازا"],
  "https://i.ibb.co/b354773/IMG-20230707-WA0496.jpg": ["تشوبر"],
  "https://i.ibb.co/CWNrmBK/IMG-20230707-WA0498.jpg": ["غارب"],
  "https://i.ibb.co/HDGttCs/IMG-20230707-WA0522.jpg": ["شانكس"],
  "https://i.ibb.co/YLcqgLJ/IMG-20230707-WA0563.jpg": ["غوجو"],
};

let ImageQuizGameData = {};

cmd({
  pattern: 'صورة',
  filename: __filename
}, async (message, match, group) => {
  if (ImageQuizGameData[match.chat]) {
    return await message.sendMessage(match.chat, {
      text: `*هناك لعبة جارية بالفعل!*`,
    });
  }

  let gameData = await startImageQuiz(message, match);
  ImageQuizGameData[match.chat] = gameData;
});

cmd({
  on: 'text'
}, async (message, match, group) => {
  const gameData = ImageQuizGameData[match.chat];

  if (!gameData) return;

  if (gameData.id === match.chat && gameData.preAns !== match.text && !match.isBaileys) {
    gameData.preAns = match.text;

    const correctAnswers = footbal[gameData.question];

    const userAnswer = match.text.trim().toLowerCase();
    
    // Check if any correct answer is included in the user's input as a standalone word
    const isAnswerIncluded = correctAnswers.some(ans =>
      new RegExp(`\\b${ans.toLowerCase()}\\b`).test(userAnswer)
    );

    if (isAnswerIncluded) {
      addPointToParticipant(message, match, gameData, match.sender);
      await sendNewImage(message, match, gameData);
    }
  }
});



cmd({
  pattern: 'stop',
  filename: __filename
}, async (message, citel, group) => {
  const id = citel.chat.split("@")[0];
  const gameData = ImageQuizGameData[citel.chat];

  if (!gameData || !gameData.participants) {
    return await message.sendMessage(citel.chat, {
      text: `*لا يوجد لعبة جارية حاليا!*`,
    });
  }

  let results = 'نتائج اللعبة :\n\n';

  for (const participantId in gameData.participants) {
    const points = gameData.participants[participantId];
    const registeredUser = await sck1.findOne({ id: participantId });
    const playerName = registeredUser ? registeredUser.name : "دون لقب";

    results += `${playerName}  برصيد ${points} إجابات\n`;
  }

  await message.sendMessage(citel.chat, {
    text: results,
  });

  delete ImageQuizGameData[citel.chat];
});

async function startImageQuiz(message, match) {
  const footbalKeys = Object.keys(footbal);
  const randomImageURL = footbalKeys[Math.floor(Math.random() * footbalKeys.length)];
  const correctAnswers = footbal[randomImageURL];

  await message.sendMessage(match.chat, {
    image: { url: randomImageURL },
    caption: `*بدأت لعبة الصور*`,
  });

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

async function sendNewImage(message, match, gameData) {
  const footbalKeys = Object.keys(footbal).filter(url => url !== gameData.question);
  const randomImageURL = footbalKeys[Math.floor(Math.random() * footbalKeys.length)];
  const correctAnswers = footbal[randomImageURL];

  await message.sendMessage(match.chat, {
    image: { url: randomImageURL },
    caption: `*هنا صورة جديدة!*`,
  });

  gameData.question = randomImageURL;
  gameData.answers = correctAnswers;
  gameData.preAns = '';
}



