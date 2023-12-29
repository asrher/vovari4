const { cmd, sck1, sck, tlang, getAdmin, sleep  } = require('../lib');
const { SMSActivate } = require('sms-activate-org');

/*
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
*/




// Import necessary libraries
const SMSActivateAPI = require('smsactivate-api'); // Make sure to install this library using npm or yarn

// Initialize SMSActivate API with your API key
const apiKey = 'e4cf5Ab978b562809cb7882f0bA8c24f'; // Replace 'myapikey' with your actual API key

const sa = new SMSActivateAPI(apiKey);

// Function to get a phone number
cmd({
  pattern: "getnumber",
  desc: "Get a phone number",
  category: "sms",
  filename: __filename,
},
async (Void, citel) => {
  try {
    // Request a phone number for the 'vk' service, 'tele2' operator, country code 0, and for verification purposes
    const number = await sa.getNumber({ service: 'vk', operator: 'tele2', country: 0, verification: true });
    
    if (number.phone) {
      // If the phone number is retrieved successfully, send it in a message
      return citel.reply(`Phone number: ${number.phone}`);
    } else {
      // If there's an error, print the error message
      return citel.reply(`Error: ${number.message}`);
    }
  } catch (error) {
    console.error(error);
    return citel.reply('An error occurred while getting the phone number.');
  }
});

