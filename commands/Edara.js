const { cmd } = require('../lib');
const { Canvas,createCanvas, loadImage } = require('canvas');
const { TelegraPh } = require('../lib/scraper');
const util = require('util');
const fs = require('fs-extra');



async function createDrakeMeme(textTop, textBottom) {
  try {
    const canvas = createCanvas(600, 600);
    const ctx = canvas.getContext('2d');

    // Load the background image (replace 'drake.jpg' with your image path)
    const background = await loadImage('./Siraj/meme/drake.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Text properties
    ctx.font = '30px Impact';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    // Draw top text
    ctx.fillText(textTop, canvas.width / 2, 50);

    // Draw bottom text
    ctx.fillText(textBottom, canvas.width / 2, canvas.height - 30);

    return canvas.toBuffer('image/jpeg'); // Return the buffer of the image
  } catch (error) {
    console.error(error); // Log the error for debugging
    throw new Error('Error creating the meme');
  }
}

cmd({
  pattern: 'drake',
  desc: 'Create a Drake meme',
  use: '<textTop>;<textBottom>',
  category: 'maker',
  filename: __filename,
},
async (Void, citel, text) => {
  const [textTop, textBottom] = text.split(';');
  if (!textTop || !textBottom) return await citel.reply('Please provide both top and bottom texts separated by a semicolon.');

  try {
    const memeBuffer = await createDrakeMeme(textTop, textBottom);
    return await Void.sendMessage(citel.chat, { image: memeBuffer });
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
