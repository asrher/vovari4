const { cmd, sck1 } = require("../lib/");

let imageGame = {};

cmd({
  pattern: "صورة",
  category: "games",
}, async (Void, citel) => {
  let id = citel.chat.split("@")[0];

  if (!imageGame || !imageGame[id]) {
    imageGame[id] = {
      isActive: false,
      participants: {},
      currentImage: '',
    };
  }

  if (imageGame[id].isActive) {
    return await citel.reply('اللعبة بدأت بالفعل');
  }

  imageGame[id].isActive = true;
  imageGame[id].participants = {};
  imageGame[id].currentImage = '';

  startGame(citel, id);
});

cmd({
  pattern: "حذف_صورة",
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

  if (imageGame[id] && imageGame[id].isActive) {
    let participantId = citel.sender;

    if (!imageGame[id].participants[participantId]) {
      imageGame[id].participants[participantId] = 0;
    }

    // Increment points if the participant sends the correct image
    imageGame[id].participants[participantId]++;

    startGame(citel, id);
  }
});

function startGame(citel, id) {
  const images = {
  "https://cdn.galleries.smcloud.net/t/galleries/gf-FKw2-EcYt-DnsC_cristiano-ronaldo-664x442.jpg": ["الدون", "كريستيانو", "كريستيانو رونالدو"],
  "https://images6.alphacoders.com/596/596848.jpg": ["كانيكي"],
  "https://images7.alphacoders.com/303/303042.png": ["bb", "vv"],
  "https://images7.alphacoders.com/611/611138.png": ["b", "v"],
  "https://images4.alphacoders.com/474/47438.png": ["bbb", "vvv"],
};

  const imageUrls = Object.keys(images);
  const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  const correctAnswers = images[randomImageUrl];

  // Set the current image for the game
  imageGame[id].currentImage = randomImageUrl;

  // Send the image to the chat
  citel.sendMessage(id, {
    text: `تخمين الصورة!`,
    media: {
      url: randomImageUrl,
    },
  });
}
