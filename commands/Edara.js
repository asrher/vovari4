const { cmd } = require('../lib');
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const axios = require('axios');

cmd({
  pattern: 'meme',
  category: 'image',
}, async (Void, message) => {
  try {
    const text0 = 'Top Text';
    const text1 = 'Bottom Text';

    const response = await axios.post('https://api.imgflip.com/caption_image', {
      template_id: "121580608", // ID of the "One Does Not Simply" meme template
      text0: text0,
      text1: text1,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    const dataURL = response.data.data.url;

    await Void.sendMessage(message.chat, { image: { url: dataURL } }, { quoted: message });
  } catch (e) {
    await message.send(`خطأ`);
  }
});
