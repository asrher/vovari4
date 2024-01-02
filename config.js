const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '34612538080',
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://bot-edara:akidaedara@cluster0.fmuntig.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = ''
global.github = ''
global.location = ''
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '34612538080'
global.devs = '34612538080';
global.website = 'https://jiraya-3.netlify.app/' 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.ibb.co/Gk549QC/jeje.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'B K 9 💙' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '<3 جيرايا' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'Secktor;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVB0VFU5VEs5Q25ZTVZ0eWloQ0o2MFlrVHJwdVRkRFN3MXFLT2wvNmxFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXFCbTF1MWxTSmI5bnhyd1dyc2pOL0o5T0taOEwydXprWXdZNGMva0tGVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SkpPb0c2WDY3M3orazRWSEtJOCtzUTZRb01CaHp4Vm5RNWdZUW5HTTI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRcU5Qb1Rjc2ZNT1h0ZUNOMG9pdTBMeHBHc2prRzBiVUdoTjlDM0UvUkhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOTW1mTFJWL0xKRjNyaFYwT0ZOVWQybnE2Q0haTG9XVmh0Sk9SbDcvMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRLbUcrZ29ZNFF6OXlHdUtYTlo0RnpIV2tMUlNmWW5HcVhtb1ZuQTdveGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0dBZ2NmOHl6OEFpemVjVXhUc0JzdEkyOHozOUtoNXROR3J1Z0pETGZWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2dBcFRBTkxHRy84UzVReEhCMlFmYlJwM2JlNHNoRzNBUkJiOTlsMmFIND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBjejA0MGVlUzUydWhrNTQ0UWQyaElWdW1OQ2MxYnNKbDBHZU1qeCtWb21WR2FteWcxT2htR2IyOWE2VGZFM2FNZS9VeFluWmNBR1Y3enpIRk9xa2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6Imk4SVphYkZRRG82czRuSmhiNVlWNFluNDNkWHBWcXdJQlhCVElBNGpzejA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ii01dWN2T3VfUlZlRFg5a3plazNVSnciLCJwaG9uZUlkIjoiZGNjOGQ3N2ItNDA0Ny00NGEzLTkzZmQtNTlkYmQzNWM0Nzc0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpabHlkKzNjbzRsS1hmTElQbnFVRnBnSnB4Yz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJKdEY4NVBrSmJndFQxaXJOaWwweUppdERzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHJJbkk0RUVJdXN4NnNHR0FFPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzRit3Nlc3bUcvc0ZnR0xvd1UzdHZ3aXFzVERUajhnUXBPbm1yN2pla0FVPSIsImFjY291bnRTaWduYXR1cmUiOiJiY1pRNll5WndvM1JNMTcvWkhkODNGUFVUOG4yOTE1RjVwd20vNitjN3BDVzNHUXZFcnMzRkJhTzBEQ1M1RmxmeWZXcTJhaWdtRFExUnVrUENKR25BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRmg1Uy9PNG5wZEh3NGN2bnRxdFdPZVpGZlphZGFsL2NqcjBXNzdRZ2hGeXdkYVFLVEJlNEpzWWtmNk8wWTBELzBNWHRIUFBNZFBrOFVXQ1pwaVJ0Z2c9PSJ9LCJtZSI6eyJpZCI6IjEzMTI1MDk2OTMzOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQnQtU3IifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTMxMjUwOTY5MzM6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkeGZzT2x1NWh2N0JZQmk2TUZON2I4SXFyRXcwNC9JRUtUcDVxKzQzcEFGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxOTU5MTgxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBpNiJ9' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO || 'akida',
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO || 'hh',
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'https://,chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'JEJE',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
