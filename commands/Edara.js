const { cmd } = require('../lib');
const { Canvas, loadImage } = require('canvas');
const {TelegraPh} = require('../lib/scraper')
const util = require('util');
const fs = require('fs-extra');

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


async function Create_Url(Void, citel)
{
    let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
    let anu = await TelegraPh(media);
    await  fs.unlink(media, (err) => {
      if (err) { return console.error('لم يتم حذف الملف');  }
      else return console.log('تم حذف الملف بنجاح');
      });
    return util.format(anu)
} 

cmd({
  pattern: 'meme',
  desc: '',
  use: '',
  category: 'maker',
  filename: __filename,
},
async (Void, citel) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");


    try {
      let Siraj_md = await Create_Url(Void, citel);

      const memeBuffer = await createMeme(Siraj_md);
      return await Void.sendMessage(citel.chat, { image: { buffer: memeBuffer } });
    } catch (error) {
      return await citel.send('Error processing the image');
    }
  }
);
