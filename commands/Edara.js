const { cmd } = require('../lib');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const axios = require('axios');

cmd({
  pattern: 'meme',
  category: 'image',
}, async (Void, message) => {
  try {
    const canvas = createCanvas(500, 500);
    const ctx = canvas.getContext('2d');

    // Load the base image
    const baseImage = await loadImage('Siraj/meme/zoro.jpg');
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

    // Set the text properties
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';

    // Add text to the image
    const text = 'Your text here';
    ctx.fillText(text, canvas.width / 2, canvas.height - 20);

    // Convert the canvas to a data URL
    const dataURL = canvas.toDataURL('image/jpeg');

    // Send the meme as an image URL
    await Void.sendMessage(message.chat, { image: { url: dataURL } }, { quoted: message });
  } catch (e) {
    await message.send(`خطأ`);
  }
});
