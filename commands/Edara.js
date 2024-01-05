const { cmd } = require('../lib');
const { Canvas,createCanvas, loadImage } = require('canvas');
const { TelegraPh } = require('../lib/scraper');
const util = require('util');
const fs = require('fs-extra');



cmd({
  pattern: 'dra',
  desc: 'Create a Drake meme',
  use: '<text1>;<text2>',
  category: 'maker',
  filename: __filename,
},
async (Void, citel, text) => {
  const [text1, text2] = text.split(';');
  if (!text1 || !text2) return await citel.reply('Please provide both text1 and text2 separated by a semicolon.');

  try {
    const canvas = new Canvas(670, 435);
    const ctx = canvas.getContext('2d');

    const img = await loadImage('./Siraj/meme/drake.png');
    ctx.drawImage(img, 0, 0, 670, 435);

    ctx.font = '30px Noto';
    ctx.fillStyle = '#000000';
    ctx.fillText(text1, 252, 36);
    ctx.fillText(text2, 252, 258);

    const buffer = canvas.toBuffer();
    return await Void.sendMessage(citel.chat, { image: { buffer } });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return await citel.send('Error creating the Drake meme');
  }
});


//===================================================


async function createMeme(imageUrl) {
  try {
    let canvas = createCanvas(347,426)
    const ctx = canvas.getContext('2d');

    const image1 = await loadImage(imageUrl);
    const background = await loadImage('./Siraj/meme/burn.png');

    ctx.drawImage(image1, 19, 31, 113, 154);
    ctx.drawImage(background, 0, 0, 347, 426);

    return canvas.toBuffer().toString('base64');
  } catch (error) {
    console.error(error); // Log the error for debugging
    throw new Error('Invalid Image Type or Error processing the image');
  }
}

async function Create_Url(Void, citel) {
  try {
    let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
    let anu = await TelegraPh(media);
    await fs.unlink(media);

    return util.format(anu);
  } catch (error) {
    console.error(error); // Log the error for debugging
    throw new Error('Error fetching the image URL');
  }
}

cmd({
  pattern: 'meme',
  desc: '',
  use: '',
  category: 'maker',
  filename: __filename,
},
async (Void, citel) => {
  if (!citel.quoted) return await citel.reply(`reply to an image`);
  if (citel.quoted.mtype !== 'imageMessage') return await citel.reply("reply to an image");

  try {
    let imgg = await Create_Url(Void, citel);
    const memeBuffer = Buffer.from(await createMeme(imgg), 'base64');
return await Void.sendMessage(citel.chat, { image : memeBuffer });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return await citel.send('Error processing the image');
  }
});
