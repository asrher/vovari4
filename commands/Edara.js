const { cmd } = require('../lib');
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const axios = require('axios');
const Canvas = require('canvas');

// Make createMeme function async by defining it as an async function
const createMeme = async (image) => {
  try {
    const canvas = Canvas.createCanvas(347, 426);
    const ctx = canvas.getContext(`2d`);
    const image1 = await Canvas.loadImage(image);
    const background = await Canvas.loadImage(`Siraj/meme/burn.png`);

    ctx.drawImage(image1, 19, 31, 113, 154);
    ctx.drawImage(background, 0, 0, 347, 426);

    const buffer = canvas.toBuffer();
    fs.writeFileSync(`./siraj/meme.png`, buffer);

    return `./siraj/meme.png`;
  } catch (error) {
    throw error;
  }
};

// Rest of your code remains the same


cmd({
  pattern: 'ميم',
  desc: '',
  use: '<text>',
  category: 'maker',
  filename: __filename,
},
async (Void, citel, text) => {
  if (!citel.quoted) return await citel.reply(`رد على صورة`);
  if (citel.quoted.mtype != 'imageMessage') return await citel.reply("رد على صورة");

  try {
    const media = await Void.downloadAndSaveMediaMessage(citel.quoted);
    const memePath = await createMeme(media);
    await Void.sendMessage(citel.chat, { image: { url: `./${memePath}` } }, { quoted: citel });
    fs.unlinkSync(media);
    fs.unlinkSync(memePath);
  } catch (e) {
    return await citel.send(`خطأ`);
  }
});
