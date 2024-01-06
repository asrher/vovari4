const { cmd } = require('../lib');
const { Canvas,createCanvas, loadImage } = require('canvas');
const { TelegraPh } = require('../lib/scraper');
const util = require('util');
const fs = require('fs-extra');
const fontList = require('font-list');

async function createMeme(topText, bottomText) {
  try {
    let canvas = createCanvas(600, 600);
    const ctx = canvas.getContext('2d');

    const background = await loadImage('./Siraj/meme/drake.png');
    ctx.drawImage(background, 0, 0, 600, 600);

    // Set the font properties
    ctx.font = 'bold 30px Impact';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    
    // Draw top text
    ctx.fillText(topText, 300, 50);

    // Draw bottom text
    ctx.fillText(bottomText, 300, 550);

    return canvas.toBuffer().toString('base64');
  } catch (error) {
    console.error(error); // Log the error for debugging
    throw new Error('Error creating the meme');
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
  pattern: 'dra',
  desc: 'Create a Drake meme with two texts.',
  use: '.drake [top text];[bottom text]',
  category: 'maker',
  filename: __filename,
},
async (Void, citel, match) => {
  if (!citel.quoted) return await citel.reply(`Reply to an image`);

  try {
    const texts = match[1].split(';').map(txt => txt.trim());
    if (texts.length !== 2) return await citel.reply('Please provide two texts separated by a semicolon (;).');

    let imgg = await Create_Url(Void, citel);
    const memeBuffer = Buffer.from(await createMeme(texts[0], texts[1]), 'base64');
    return await Void.sendMessage(citel.chat, { image: memeBuffer });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return await citel.send('Error creating the meme');
  }
});


//===================================================


async function createMeme(imageUrl) {
  try {
    let canvas = createCanvas(347,426)
    const ctx = canvas.getContext('2d');

    const image1 = await loadImage(imageUrl);
    const background = await loadImage('./Siraj/meme/wanted.png');

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
