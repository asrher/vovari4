const { cmd, sck1 } = require("../lib/");
const footbal = {
  "https://cdn.galleries.smcloud.net/t/galleries/gf-FKw2-EcYt-DnsC_cristiano-ronaldo-664x442.jpg": ["الدون", "كريستيانو", "كريستيانو رونالدو"],
  "https://images6.alphacoders.com/596/596848.jpg": ["كانيكي"],
  "https://images7.alphacoders.com/303/303042.png": ["bb", "vv"],
  "https://images7.alphacoders.com/611/611138.png": ["b", "v"],
  "https://images4.alphacoders.com/474/47438.png": ["bbb", "vvv"],
};

let imageGame = {};

cmd({
  pattern: "sora",
  category: "games",
}, async (Void, citel) => {
  let id = citel.chat.split("@")[0];

  if (!imageGame || !imageGame[id]) {
    imageGame[id] = {
      isActive: false,
      participants: {},
      currentimage: '',
    };
  }

  if (imageGame[id].isActive) {
    return await citel.reply('اللعبة بدأت بالفعل');
  }

  imageGame[id].isActive = true;
  imageGame[id].participants = {};
  imageGame[id].currentimage = '';

  startImageQuiz(citel, id);
});

cmd({
  pattern: "ssora",
  category: "games",
}, async (Void, citel) => {
  let id = citel.chat.split("@")[0];

  if (!imageGame[id].isActive) {
    return await citel.reply('مفيه لعبة');
  }

  let results = 'تم انهاء اللعبة هذه هي النتائج :\n';

  for (const participantId in imageGame[id].participants) {
    const points = imageGame[id].participants[participantId];
    const registeredUser = await sck1.findOne({ id: participantId });
    const playerName = registeredUser ? registeredUser.name : "دون لقب"; // 

    results += `${playerName}  برصيد ${points} إجابات\n`;
  }

  imageGame[id].isActive = false;

  return await citel.reply(results);
});

cmd({ on: "text" }, async (Void, citel) => {
  let id = citel.chat.split("@")[0];
  const gameData = imageGame[id];

  if (!gameData) return;

  const correctAnswers = gameData.answers.map(ans => ans.toLowerCase());
  const userAnswer = citel.text.trim();

  if (correctAnswers.includes(userAnswer.toLowerCase())) {
    let participantId = citel.sender;

    if (!imageGame[id].participants[participantId]) {
      imageGame[id].participants[participantId] = 0;
    }

    imageGame[id].participants[participantId]++;

    await sck1.sendMessage(citel.chat, {
      text: `🎉 ${citel.pushName} إجابة صحيحة!\n`,
    });

    startImageQuiz(citel, id);
  }
});

async function startImageQuiz(citel, match) {
  const footbalKeys = Object.keys(footbal);
  const randomImageURL = footbalKeys[Math.floor(Math.random() * footbalKeys.length)];
  const correctAnswers = footbal[randomImageURL];

  await sck1.sendMessage(citel.chat, {
    image: { url: randomImageURL },
    caption: `*بدأت لعبة الصور*\n\nقم بتخمين الإجابة!`,
  });

  return {
    id: citel.chat.split("@")[0],
    player: '',
    question: randomImageURL,
    answers: correctAnswers,
  };
}
