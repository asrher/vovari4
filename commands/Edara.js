const { cmd } = require('../lib');
const { createCanvas, loadImage } = require('canvas');

cmd({
  pattern: "meme",
  desc: "",
  use: '<text>',
  category: "image",
  filename: __filename,
},
async (Void, citel, text) => {
  if (!text) return await citel.reply('Please provide text for the meme.');

  try {
    const canvas = createCanvas(347, 426);
    const ctx = canvas.getContext('2d');

    // Load background image
    const background = await loadImage('./Siraj/meme/burn.png');
    ctx.drawImage(background, 0, 0, 347, 426);

    // Set font properties for the text
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';

    // Split the text into multiple lines to fit canvas width
    const lines = splitTextIntoLines(ctx, text, 300);

    // Draw text on the canvas
    const lineHeight = 25;
    const textY = canvas.height / 2 - ((lines.length / 2) * lineHeight);

    lines.forEach((line, index) => {
      ctx.fillText(line, canvas.width / 2, textY + index * lineHeight);
    });

    // Convert canvas to an image buffer
    const buffer = canvas.toBuffer('image/png');

    // Send the image as a reply
    await Void.sendMessage(citel.chat, { image: { data: buffer, mimetype: 'image/png' }, caption: "Meme created!" }, { quoted: citel });
  } catch (e) {
    console.error(e);
    return await citel.send('Error creating meme.');
  }
});

// Function to split text into multiple lines to fit the canvas width
function splitTextIntoLines(ctx, text, maxWidth) {
  let words = text.split(' ');
  let lines = [];
  let line = '';

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && i > 0) {
      lines.push(line);
      line = words[i] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line);
  return lines;
}
