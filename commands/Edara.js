const { cmd } = require('../lib');
 const { Canvas, loadImage } = require('canvas');

async function createMeme(imageUrl) {
  try {
    const canvas = Canvas.createCanvas(347, 426);
    const ctx = canvas.getContext('2d');

    const image1 = await loadImage(imageUrl);
    const background = await loadImage('./Siraj/meme/burn.png');

    ctx.drawImage(image1, 19, 31, 113, 154);
    ctx.drawImage(background, 0, 0, 347, 426);

    return canvas.toBuffer();
  } catch (error) {
    throw new Error('Invalid Image Type or Error processing the image');
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
  if (!citel.quoted) return await citel.reply('Please reply to a message');

  let imageUrl;
  if (citel.quoted.image && citel.quoted.image.url) {
    imageUrl = citel.quoted.image.url;
  } else if (citel.quoted.message && citel.quoted.message.image && citel.quoted.message.image.url) {
    imageUrl = citel.quoted.message.image.url;
  } else {
    return await citel.reply('Please reply to an image');
  }

  try {
    const memeBuffer = await createMeme(imageUrl);
    return await Void.sendMessage(citel.chat, { image: { buffer: memeBuffer } });
  } catch (error) {
    return await citel.send('Error processing the image');
  }
});
