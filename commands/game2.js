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
  let gameData = ImageQuizGameData[id];

  if (!gameData) {
    const imageKeys = Object.keys(footbal);
    const randomImageUrl = imageKeys[Math.floor(Math.random() * imageKeys.length)];
    const correctAnswers = footbal[randomImageUrl];

    await message.sendMessage(match.chat, {
      image: { url: randomImageUrl },
      caption: `*بدأت لعبة الصور*\n\nاللاعب: @${match.sender.split('@')[0]}\n\nقم بتخمين الإجابة!`,
      mentions: [match.sender]
    });

    gameData = {
      id: id,
      player: match.sender,
      question: randomImageUrl,
      answers: correctAnswers,
    };
    ImageQuizGameData[id] = gameData;
  }
});

cmd({
  pattern: 'stop',
  filename: __filename
}, async (message, match, group) => {
  let results = 'نتائج اللعبة:\n';

  for (const playerId in ImageQuizGameData) {
    const gameData = ImageQuizGameData[playerId];
    const registeredUser = await sck1.findOne({ id: gameData.player });
    const playerName = registeredUser ? registeredUser.name : "Unknown"; // Default name if user not found

    results += `${playerName} (@${gameData.player.split('@')[0]}): ${gameData.points} points\n`;
  }

  await message.sendMessage(match.chat, results);
});

cmd({
  on: 'text'
}, async (message, match, group) => {
  const id = match.chat.split("@")[0];
  const gameData = ImageQuizGameData[id];

  if (!gameData || gameData.question !== match.text) return;

  const answer = match.text.trim().toLowerCase();
  const correctAnswers = gameData.answers.map(ans => ans.toLowerCase());

  if (correctAnswers.includes(answer)) {
    gameData.points = (gameData.points || 0) + 1;

    const registeredUser = await sck1.findOne({ id: match.sender });
    const playerName = registeredUser ? registeredUser.name : "Unknown"; // Default name if user not found

    await message.sendMessage(match.chat, `🎉 الإجابة الصحيحة! ${playerName} تم إضافة نقطة إليك.`);

    const imageKeys = Object.keys(footbal);
    const randomImageUrl = imageKeys[Math.floor(Math.random() * imageKeys.length)];
    const newCorrectAnswers = footbal[randomImageUrl];

    await message.sendMessage(match.chat, {
      image: { url: randomImageUrl },
      caption: `*لعبة الصور بدأت*\n\nاللاعب: @${match.sender.split('@')[0]}\n\nقم بتخمين الإجابة!`,
      mentions: [match.sender]
    });

    ImageQuizGameData[id] = {
      id: id,
      player: match.sender,
      question: randomImageUrl,
      answers: newCorrectAnswers,
      points: gameData.points,
    };
  }
});
