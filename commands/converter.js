
const { tlang, cmd } = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')

//=====================================================================
cmd({
pattern: "لصورة",
desc: "",
use: '',
category: "sticker",
filename: __filename,
  },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!citel.quoted) return citel.reply(tlang().photo);
        let mime = citel.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
            let buffer = fs.readFileSync(media)
            Void.sendMessage(citel.chat, { image: buffer }, { quoted: citel })
          
         fs.unlink(media, (err) => {
         if (err) { return console.error('لم يتم حذف الملف');  }
         else return console.log('تم حذف الملف بنجاح');
         });
         
        })
        
} else return citel.reply(tlang().photo);
    }
)

//=====================================================================

cmd({
pattern: "لصوتية",
desc: "تحويل فيد لصوتية",
use: '',
category: "sticker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return citel.reply(`رد على فيديو`);
    let mime = citel.quoted.mtype
if (mime =="audioMessage" || mime =="videoMessage")
{
    let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
     const { toAudio } = require('../lib');
     let buffer = fs.readFileSync(media);
    let audio = await toAudio(buffer);
    Void.sendMessage(citel.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: citel });
 

fs.unlink(media, (err) => {
if (err) { return console.error('خطأ');  }
else return console.log('خطأ');
});

}
else return citel.reply ("رد على فيديو")
}
)
//=====================================================================
cmd({
pattern: "لفيديو",
desc: "تحويل ملصق متحرك لفيديو",
use: '',
category: "sticker",
filename: __filename,
},
async(Void, citel, text) => {
const { webp2mp4File } = require ("../lib")
if (!citel.quoted) return citel.reply('رد على ملصق متحرك')
let mime = citel.quoted.mtype
let mimetype = citel.quoted.mimetype
if( mime !="videoMessage" && !/webp/.test(mimetype)) return await citel.send("رد على ملصق متحرك")
let media = await Void.downloadAndSaveMediaMessage(citel.quoted)
try {
    if (/webp/.test(mimetype)) {  let webpToMp4 = await webp2mp4File(media);  media =  webpToMp4.result; }
    await Void.sendMessage(citel.chat, { video: { url: media ,}, caption: "تمم"  },)
    try{ return await fs.unlink(media);}catch(e){ return console.log("خطأ")}
}catch(e){ return console.log("خطأ")}
}
)
//=====================================================================