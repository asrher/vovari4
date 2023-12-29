const { getBuffer, Config,cmd } = require('../lib/')
const { Sticker, StickerTypes } = require("wa-sticker-formatter");
const fetch = require('node-fetch');

//=====================================================================

cmd({
pattern: "ملصق",
desc: "تحويل صورة لملصق",
use: '',
category: "sticker",
filename: __filename,
  },
    async(Void, citel, text) => {
        if (!citel.quoted) return citel.reply(`֎╎رد  عـلـى صـورة او فيديو`);
        let mime = citel.quoted.mtype
        pack = Config.packname
        author = Config.author
        if (citel.quoted) {
            let media = await citel.quoted.download();
            let sticker = new Sticker(media, {
                pack: citel.pushName, // The pack name
                author: "𝙼𝙾𝙾𝙽 ᪘", // The author name
                type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ["🤩", "🎉"], // The sticker category
                id: "12345", // The sticker id
                quality: 75, // The quality of the output file
                background: "transparent", // The sticker background color (only for full stickers)
            });
            const buffer = await sticker.toBuffer();
            return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
        } else if (/video/.test(mime)) {
            if ((quoted.msg || citel.quoted)
                .seconds > 20) return citel.reply("الحد الاقصى للفيد 20 ثانية");
            let media = await quoted.download();
            let sticker = new Sticker(media, {
                pack: citel.pushName, // The pack name
                author: "𝙼𝙾𝙾𝙽 ᪘", // The author name
                type: StickerTypes.FULL, // The sticker type
                categories: ["🤩", "🎉"], // The sticker category
                id: "12345", // The sticker id
                quality: 20, // The quality of the output file
                background: "transparent", // The sticker background color (only for full stickers)
            });
            const stikk = await sticker.toBuffer();
            return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });
        } else {
            citel.reply("֎╎رد  عـلـى صـورة او فيديو");
        }
    }
)

//=====================================================================

cmd({
pattern: "ستيكر",
desc: "تحويل لملصق بدون حقوق",
use: '',
category: "sticker",
filename: __filename,
  },
    async(Void, citel, text) => {
        if (!citel.quoted) return citel.reply(`֎╎رد  عـلـى صـورة او فيديو`);
        let mime = citel.quoted.mtype
        pack = Config.packname
        author = Config.author
        if (citel.quoted) {
            let media = await citel.quoted.download();
            let sticker = new Sticker(media, {
                pack: "", // The pack name
                author: "", // The author name
                type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ["🤩", "🎉"], // The sticker category
                id: "12345", // The sticker id
                quality: 75, // The quality of the output file
                background: "transparent", // The sticker background color (only for full stickers)
            });
            const buffer = await sticker.toBuffer();
            return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
        } else if (/video/.test(mime)) {
            if ((quoted.msg || citel.quoted)
                .seconds > 20) return citel.reply("الحد الاقصى للفيد 20 ثانية");
            let media = await quoted.download();
            let sticker = new Sticker(media, {
                pack: "", // The pack name
                author: "", // The author name
                type: StickerTypes.FULL, // The sticker type
                categories: ["🤩", "🎉"], // The sticker category
                id: "12345", // The sticker id
                quality: 20, // The quality of the output file
                background: "transparent", // The sticker background color (only for full stickers)
            });
            const stikk = await sticker.toBuffer();
            return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });
        } else {
            citel.reply("֎╎رد  عـلـى صـورة او فيديو");
        }
    }
)
//=====================================================================

cmd({
pattern: "ملصق1",
desc: "كل رقم يسوي ملصق غير",
use: '',
category: "sticker",
filename: __filename,
           },
         async(Void, citel, text) => {
             if (!citel.quoted) return citel.reply(`֎╎رد عـلـى صـورة`);
//console.log("Quoted Data here : ",citel.quoted);
             let mime = citel.quoted.mtype
             pack = Config.packname
             author = Config.author
            if (mime =="imageMessage" || mime =="stickerMessage") {
                 let media = await citel.quoted.download();
  //citel.reply("*Processing Your request*");
                 let sticker = new Sticker(media, {
                     pack: pack, // The pack name
                     author: author, // The author name
                     type: StickerTypes.CIRCLE ,
                     categories: ["🤩", "🎉"], // The sticker category
                     id: "12345", // The sticker id
                     quality: 75, // The quality of the output file
                 });
                 const buffer = await sticker.toBuffer();
                 return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
             }else return citel.reply("֎╎رد عـلـى صـورة");
 
         }
     )
//=====================================================================
cmd({
pattern: "ملصق2",
desc: "كل رقم يسوي ملصق غير",
use: '',
category: "sticker",
filename: __filename,
           },
         async(Void, citel, text) => {
             if (!citel.quoted) return citel.reply(`֎╎رد عـلـى صـورة`);
//console.log("Quoted Data here : ",citel.quoted);
             let mime = citel.quoted.mtype
             pack = Config.packname
             author = Config.author
             if (mime =="imageMessage"  || mime =="stickerMessage") {
                 let media = await citel.quoted.download();
  //citel.reply("*Processing Your request*");
                 let sticker = new Sticker(media, {
                     pack: pack, // The pack name
                     author: author, // The author name
                     type: StickerTypes.CROPPED,
                     categories: ["🤩", "🎉"], // The sticker category
                     id: "12345", // The sticker id
                     quality: 75, // The quality of the output file
                 });
                 const buffer = await sticker.toBuffer();
                 return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
             }else return citel.reply("֎╎رد عـلـى صـورة");
 
         }
     )
//=====================================================================
cmd({
pattern: "ملصق3",
desc: "كل رقم يسوي ملصق غير",
use: '',
category: "sticker",
filename: __filename,
           },
         async(Void, citel, text) => {
             if (!citel.quoted) return citel.reply(`֎╎رد عـلـى صـورة`);
//console.log("Quoted Data here : ",citel.quoted);
             let mime = citel.quoted.mtype
             pack = Config.packname
             author = Config.author
            if (mime =="imageMessage" || mime =="stickerMessage") {
                 let media = await citel.quoted.download();
  //citel.reply("*Processing Your request*");
                 let sticker = new Sticker(media, {
                     pack: pack, // The pack name
                     author: author, // The author name
                     type: StickerTypes.ROUNDED ,
                     categories: ["🤩", "🎉"], // The sticker category
                     id: "12345", // The sticker id
                     quality: 75, // The quality of the output file
                 });
                 const buffer = await sticker.toBuffer();
                 return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
             }else return citel.reply("֎╎رد عـلـى صـورة");
 
         }
     )

//=====================================================================

cmd({
pattern: "ملصقي",
desc: "زرف حقوق ملصق",
use: '',
category: "sticker",
filename: __filename,
  },
    async(Void, citel, text) => {
        if (!citel.quoted) return citel.reply(`֎╎رد  عـلـى صـورة`);
        let mime = citel.quoted.mtype
        var pack;
        var author;
        if (text) {
            anu = text.split("|");
            pack = anu[0] !== "" ? anu[0] : citel.pushName + 'bot';
            author = anu[1] !== "" ? anu[1] : Config.author;
        } else {
            pack = citel.pushName;
            author = "𝙼𝙾𝙾𝙽 ᪘";
        }
            let media = await citel.quoted.download();
           let sticker = new Sticker(media, {
               pack: pack, // The pack name
               author: author, // The author name
               type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
               categories: ["🤩", "🎉"], // The sticker category
               id: "12345", // The sticker id
               quality: 75, // The quality of the output file
               background: "transparent", // The sticker background color (only for full stickers)
           });
           const buffer = await sticker.toBuffer();
           return Void.sendMessage(citel.chat, {sticker: buffer }, {quoted: citel });
    }
)

//=====================================================================

cmd({
pattern: "دمج",
desc: "دمج ثنين ايموجي",
use: '',
category: "sticker",
filename: __filename,
  },
async(Void, citel, text,{ isCreator }) => {
    if (!text) return citel.reply(`مثال : .دمج 😔+😡`);
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
    let emoji1 = text.split("+")[0] ;
    let emoji2 = text.split("+")[1];

const response = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${emoji1}_${emoji2}`);
const data = await response.json();
if(data.locale=="") return citel.reply(`مقدرت ادمجهم 😔.`)
else {
let media =await getBuffer(data.results[0].url)

let sticker = new Sticker(media, {
           pack: citel.pushName,
           author: "𝙼𝙾𝙾𝙽 ᪘",
           type: StickerTypes.FULL ,
           categories: ["🤩", "🎉"], 
           id: "12345", 
           quality: 100,
       });
const buffer = await sticker.toBuffer();
return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
}


}
)

//=====================================================================

    const gifLinks = [
        'https://api.waifu.pics/sfw/cringe',
        'https://api.waifu.pics/sfw/bite',
        'https://api.waifu.pics/sfw/glomp',
        'https://api.waifu.pics/sfw/slap',
        'https://api.waifu.pics/sfw/happy',
        'https://api.waifu.pics/sfw/kick',
        'https://api.waifu.pics/sfw/kill',
        'https://api.waifu.pics/sfw/wink',
        'https://api.waifu.pics/sfw/poke',
        'https://api.waifu.pics/sfw/dance',
        'https://api.waifu.pics/sfw/highfive',
        'https://api.waifu.pics/sfw/nom',
        'https://api.waifu.pics/sfw/bully',
        'https://api.waifu.pics/sfw/cuddle',
        'https://api.waifu.pics/sfw/cry',
        'https://api.waifu.pics/sfw/hug',
        'https://api.waifu.pics/sfw/pat',
        'https://api.waifu.pics/sfw/smug',
        'https://api.waifu.pics/sfw/bonk',
        'https://api.waifu.pics/sfw/yeet',
        'https://api.waifu.pics/sfw/blush',
        'https://api.waifu.pics/sfw/smile',
        'https://api.waifu.pics/sfw/wave'
      ];
      
  
cmd({
pattern: "ملصقات",
desc: "ارسال ملصقات انمي",
use: '',
category: "sticker",
filename: __filename,
  },
async (Void, citel) => {
  // Select a random link from the list
  const randomLink = gifLinks[Math.floor(Math.random() * gifLinks.length)];

  try {
    // Fetch the GIF URL from the random link
    const response = await fetch(randomLink);
    if (!response.ok) {
      throw new Error(`خطا`);
    }

    // Parse the JSON response to get the URL
    const data = await response.json();
    const gifUrl = data.url;

    // Fetch the GIF from the obtained URL
    const gifResponse = await fetch(gifUrl);
    if (!gifResponse.ok) {
      throw new Error(`خطا`);
    }

    // Convert the GIF to a buffer
    const buffer = await gifResponse.buffer();

    // Create a sticker from the buffer
const packname = citel.pushName;
const author = "𝙼𝙾𝙾𝙽 ᪘";
const stickerCategories = ["🤩", "🎉"];
const stickerId = "12345";
const quality = 60;
const background = "transparent";

const stickerWidth = 512; // Width and height should be the same for a square sticker
const stickerHeight = 512;

const stickerMess = new Sticker(gifUrl, {
  pack: packname,
  author,
  type: StickerTypes.FULL,
  categories: stickerCategories,
  id: stickerId,
  quality,
  background,
  width: stickerWidth,
  height: stickerHeight,
});


    const stickerBuffer = await stickerMess.toBuffer();

    // Send the sticker
    await Void.sendMessage(citel.chat, { sticker: stickerBuffer }, { quoted: citel });
  } catch (error) {
    console.error("خطا");
    reply("خطا");
  }
});

//=====================================================================
cmd({
pattern: "اكتب",
desc: "تحويل كتابة لملصق متحرك",
use: '',
category: "sticker",
filename: __filename,
  },
async(Void, citel, text) => {
const customText = text.split(" ").join(" ").trim(); // Join words with spaces
let a = await getBuffer(`https://vihangayt.me/maker/text2gif?q=${encodeURIComponent(customText)}`)
return citel.reply(a,{pack: citel.pushName, author:'𝙼𝙾𝙾𝙽 ᪘'},"sticker", {quoted: citel}) 
}
)
//=====================================================================
cmd({
pattern: "اكتبب",
desc: "تحويل كتابة لملصق",
use: '',
category: "sticker",
filename: __filename,
  },
async(Void, citel, text) => {
const customTextt = text.split(" ").join(" ").trim(); // Join words with spaces
let a = await getBuffer(`https://vihangayt.me/maker/text2img?q=${encodeURIComponent(customTextt)}`)
return citel.reply(a,{pack: citel.pushName, author:'𝙼𝙾𝙾𝙽 ᪘'},"sticker", {quoted: citel}) 
}
)
//=====================================================================