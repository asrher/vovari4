const { cmd } = require('../lib');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

cmd({
  pattern: 'memegen',
  category: 'image',
}, async (Void, message) => {
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

  // Convert the canvas to a buffer
  const buffer = canvas.toBuffer('image/jpeg');

  // Save the image buffer to a file
  fs.writeFileSync('meme.jpg', buffer);

  // Send a message with the generated meme
  await Void.sendMessage('Here is your meme:', {
    file: buffer,
    mimetype: 'image/jpeg',
    caption: 'Your meme caption',
  });
});
