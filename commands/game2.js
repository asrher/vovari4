const { cmd, sck1, getAdmin, tlang, sleep } = require("../lib/");
//const eco = require('siraj-bank')

//=====================================================================
const footbal = {
    "https://cdn.galleries.smcloud.net/t/galleries/gf-FKw2-EcYt-DnsC_cristiano-ronaldo-664x442.jpg": ["الدون", "كريستيانو", "كريستيانو رونالدو"],
    "https://images6.alphacoders.com/596/596848.jpg": ["كانيكي"],
    "https://images7.alphacoders.com/303/303042.png": ["bb", "vv"],
    "https://images7.alphacoders.com/611/611138.png": ["b", "v"],
    "https://images4.alphacoders.com/474/47438.png": ["bbb", "vvv"],
  };
  
//=====================================================================
let wordGame = {};

cmd({
  pattern: "fafa",
  category: "games",
}, async (Void, citel) => {
  let id = citel.chat.split("@")[0];

  if (!wordGame || !wordGame[id]) {
    wordGame[id] = {
      isActive: false,
      participants: {},
      currentWord: '',
    };
  }

  if (wordGame[id].isActive) {
    return await citel.reply('اللعبة بدأت بالفعل');
  }

  wordGame[id].isActive = true;
  wordGame[id].participants = {};
  wordGame[id].currentWord = '';

  startGame(citel, id);
});

cmd({
  pattern: "fafas",
  category: "games",
}, async (Void, citel) => {
  let id = citel.chat.split("@")[0];

  if (!wordGame[id].isActive) {
    return await citel.reply('مفيه لعبة');
  }

  let results = 'تم انهاء اللعبة هذه هي النتائج :\n';

  for (const participantId in wordGame[id].participants) {
    const points = wordGame[id].participants[participantId];
    const registeredUser = await sck1.findOne({ id: participantId });
    const playerName = registeredUser ? registeredUser.name : "دون لقب"; // 

    results += `${playerName}  برصيد ${points} إجابات\n`;
  }

  wordGame[id].isActive = false;

  return await citel.reply(results);
});

cmd({ on: "text" }, async (Void, citel) => {
  let id = citel.chat.split("@")[0];
  let gameData = wordGame[id];
  if (!gameData) return;

  let correctAnswers = gameData.answers.map(ans => ans.toLowerCase());
  let userAnswer = match.text.trim();


  if (correctAnswers.includes(userAnswer.toLowerCase())) {
  let participantId = citel.sender;

    if (!wordGame[id].participants[participantId]) {
      wordGame[id].participants[participantId] = 0;
    }

    wordGame[id].participants[participantId]++;

    startGame(citel, id);
  }
});



async function startGame(message, match) {
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
