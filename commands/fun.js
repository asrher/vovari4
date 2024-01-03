const fetch = require('node-fetch');
const { cmd } = require('../lib');
const { Sticker, StickerTypes } = require('wa-sticker-formatter');

cmd({
  pattern: "مق",
  desc: "Send a random sticker",
  category: "sticker",
}, async (Void, citel, text) => {
  if (!text) return await citel.reply(`السلام عليكم ${citel.pushName}كيف اساعدك؟ ( كل ما تكتب شي اكتب قبله .جرجير عشان ارد عليك) `);

  const apiUrl = `https://api.lolhuman.xyz/api/stickerwa?apikey=gatadios&query=${encodeURIComponent(text)}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 200 && data.result && data.result.length > 0) {
      const result = data.result[Math.floor(Math.random() * data.result.length)];
      const stickers = result.stickers;

      if (stickers && stickers.length > 0) {
        const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];

        const stickerMess = new Sticker(randomSticker, {
          pack: "Random Stickers",
          author: "Your Name",
          type: StickerTypes.FULL,
          categories: ["🎉", "😊"],
          id: "12345",
          quality: 60,
          background: "transparent",
          width: 512,
          height: 512,
        });

        const stickerBuffer = await stickerMess.toBuffer();

        // Send the sticker
        await Void.sendMessage(citel.chat, { sticker: stickerBuffer }, { quoted: citel });
      } else {
        citel.reply("No stickers found.");
      }
    } else {
      citel.reply("Unable to fetch stickers at the moment.");
    }
  } catch (error) {
    console.error("Error:", error);
    citel.reply("An error occurred while fetching stickers.");
  }
});
