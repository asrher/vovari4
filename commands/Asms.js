const { cmd, sck1, sck, tlang, getAdmin, sleep  } = require('../lib');
const { SMSActivate } = require('sms-activate-org');


const apiKey = 'e4cf5Ab978b562809cb7882f0bA8c24f'; // Replace 'myapikey' with your actual API key
const api = new SMSActivate(apiKey);


cmd({
  pattern: "nemra",
}, async (Void, citel) => {
  try {
    const number = await api.getNumber({ service: 'Whatsapp', country: 'Philippines' });
    await number.ready();

    const phoneNumber = number.phoneNumber;
    await citel.reply(`الرقم: ${phoneNumber}`);

    const code = await number.getCode(180);
    await citel.reply(`الكود: ${code}`);

    await number.success();
  } catch (error) {
    console.error('خطا', error.message);
    await citel.reply("خطا");
  }
});
