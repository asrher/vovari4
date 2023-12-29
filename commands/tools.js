const { tlang, tiny, fancytext, cmd } = require('../lib/')
let { dBinary, eBinary } = require("../lib/binary");
const { TelegraPh } = require('../lib/scraper');
const fs = require('fs-extra');
const util = require('util');
const axios = require('axios');
const translatte = require("translatte");

//=====================================================================

cmd({
pattern: "كتابة",
desc: "زخرفة الكتابة (فقط انجليزي)",
use: '',
category: "tools",
filename: __filename,
  },
    async(Void, citel, text) => {
        if (isNaN(text.split(" ")[0]) || !text) {
            let text = tiny(
                "֎╎اكـتـب  رقـم  مـن  1 ل 52 و بـعـدهـا نـصـك\n\n- مـثـال : .كتابة 32 jeje"
            );
            return await citel.reply(text);
        }

        let fancytextt = await fancytext(`${text.slice(2)}`, text.split(" ")[0])
        citel.reply(fancytextt)

    }
)

//=====================================================================

cmd({
pattern: "اختصار",
desc: "اختصار رابط طويل لقصير",
use: '',
category: "tools",
filename: __filename,
  },
    async(Void, citel, text) => {
        if (!text) return citel.reply(tlang().link);
        try {
            link = text.split(" ")[0];
            anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
            citel.reply(`֎╎تـم  اخـتـصـار  رابـطـك :\n\n${anu.data}`);
        } catch (e) {
            console.log(e);
        }
    }
)

//=====================================================================

cmd({
pattern: "كود",
desc: "تحويل نصل للغة الحاسوب",
use: '',
category: "tools",
filename: __filename,
  },
async(Void, citel, text,{ isCreator }) => {
    try {
        if (!text) return citel.reply(``);

        let textt = text || citel.quoted.text
        let eb = await eBinary(textt);
        citel.reply(eb);
    } catch (e) {
        console.log(e)
    }
}
)

//=====================================================================

cmd({
pattern: "ديكود",
desc: "عكس .كود",
use: '',
category: "tools",
filename: __filename,
  },
async(Void, citel, text,{ isCreator }) => {
    try {
        if (!text) return citel.reply(``);
        let eb = await dBinary(text);
        citel.reply(eb);
    } catch (e) {
        console.log(e)
    }
}
)

//=====================================================================
/*
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("c-uupLT0jnTXKSGhoSFF8BItpkvIwnVP");
cmd({
pattern: "صفحة",
desc: "انشاء صفة ويب",
use: '',
category: "tools",
filename: __filename,
  },
async(Void, citel) => {
    if(!citel.quoted) return citel.reply('رد على رسالة، يعني ارسل نصك ورد عليها بالامر')
    let data = await pastebin.createPaste(citel.quoted.text, "jeje <3")
    let pasteKey = data.split('/').slice(-1)[0] // extract paste key from the returned data
    let rawLink = `https://pastebin.com/raw/${pasteKey}` // generate raw link
    citel.reply('تم ادخل الرابط\n'+rawLink)
}
);
*/
//=====================================================================

//=====================================================================

cmd({
pattern: "ترجم",
desc: "ترجمة اي لغة للعربي",
use: '',
category: "tool",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return citel.reply("رد على نص");
    if (!citel.quoted) return citel.reply(`رد على نص`);
    let textt = citel.quoted.text;
    whole = await translatte(textt, {
        from: text[1] || "auto",
        to: text.split(" ")[0] || "ar",
    });
    if ("text" in whole) {
        return await citel.reply("" + whole.text + "");
    }

}
)

//=====================================================================

cmd({
pattern: "لرابط",
desc: "تحويل صورة او فيد لرابط",
use: '',
category: "tools",
filename: __filename,
  },
async (Void, citel, text) => {
    if (!citel.quoted) {
        return await citel.reply("رد على فيديو او صورة");
    }

    const mime = citel.quoted.mtype;
    if (mime !== 'videoMessage' && mime !== 'imageMessage') {
        return await citel.reply("رد على فيديو او صورة");
    }

    const media = await Void.downloadAndSaveMediaMessage(citel.quoted);
    const anu = await TelegraPh(media);
    await citel.reply('الرابط :\n' + anu);
    await fs.unlink(media, (err) => {
        if (err) { return console.error('لم يتم حذف الملف');  }
        else return console.log('تم حذف الملف بنجاح');
        });
})

//=====================================================================
let transtex = {};

cmd({
  pattern: "ترجمم",
  desc: "البوت يترجم كلامك لعدة لغات + لا تسوي سبام بالامر عشان ما يتبند البوت.",
  use: '',
  category: "fun",
  filename: __filename,
},
async (Void, citel, text) => {
      if (!text) return citel.reply('شتبي اقول');

  // Save the received text temporarily
  transtex[citel.sender] = text;

  const message = "› رد على هذه الرسالة\n برقم الترجمة التي تريدها";
  return citel.reply(`› جـرجـيـر الـمـتـرجـم،\n\n\`\`\`${message}\`\`\`\n\n┐| 1.1 - الإنـجـلـيـزي\n│| 1.2 - الـفـرنـسـي\n│| 1.3 - الـيـابـانـي\n│| 1.4 - الإسـبـانـي\n│| 1.5 - الـكـتـلانـي\n┘| 1.6 - الـروسـي\n\nلا تسوي سبام بالأمر عشان ميتبند ッ\n\nッ اذا واجهت مشاكل فالبوت اكتب .مساعدة\n`);
});

    async function transen(Void, citel, text) {
        try {
                const text = transtex[citel.sender];
                if (!text) return citel.reply('شتبي اقول');

          let whole = await translatte(text, {
            from: 'ar',
            to: 'en',
          });
          if ("text" in whole) {
            return await citel.reply("" + whole.text + "");
        }
      
        } catch (error) {
          console.error(error);
          return citel.reply('حدث خطأ أثناء ترجمة النص.');
        }
      }

      async function transfr(Void, citel, text) {
        try {
            const text = transtex[citel.sender];
            if (!text) return citel.reply('شتبي اقول');
          let whole = await translatte(text, {
            from: 'ar',
            to: 'fr',
          });
          if ("text" in whole) {
            return await citel.reply("" + whole.text + "");
        }
      
        } catch (error) {
          console.error(error);
          return citel.reply('حدث خطأ أثناء ترجمة النص.');
        }
      }

      async function transja(Void, citel, text) {
        try {
            const text = transtex[citel.sender];
            if (!text) return citel.reply('شتبي اقول');
          let whole = await translatte(text, {
            from: 'ar',
            to: 'ja',
          });
          if ("text" in whole) {
            return await citel.reply("" + whole.text + "");
        }
      
        } catch (error) {
          console.error(error);
          return citel.reply('حدث خطأ أثناء ترجمة النص.');
        }
      }

      async function transes(Void, citel, text) {
        try {
            const text = transtex[citel.sender];
            if (!text) return citel.reply('شتبي اقول');
          let whole = await translatte(text, {
            from: 'ar',
            to: 'es',
          });
          if ("text" in whole) {
            return await citel.reply("" + whole.text + "");
        }
      
        } catch (error) {
          console.error(error);
          return citel.reply('حدث خطأ أثناء ترجمة النص.');
        }
      }

      async function transca(Void, citel, text) {
        try {
            const text = transtex[citel.sender];
            if (!text) return citel.reply('شتبي اقول');
          let whole = await translatte(text, {
            from: 'ar',
            to: 'ca',
          });
          if ("text" in whole) {
            return await citel.reply("" + whole.text + "");
        }
      
        } catch (error) {
          console.error(error);
          return citel.reply('حدث خطأ أثناء ترجمة النص.');
        }
      }

      async function transru(Void, citel, text) {
        try {
            const text = transtex[citel.sender];
            if (!text) return citel.reply('شتبي اقول');
          let whole = await translatte(text, {
            from: 'ar',
            to: 'ru',
          });
          if ("text" in whole) {
            return await citel.reply("" + whole.text + "");
        }
      
        } catch (error) {
          console.error(error);
          return citel.reply('حدث خطأ أثناء ترجمة النص.');
        }
      }

          //======================================//

cmd({ on: "text" }, async (Void, citel) => {
    if (citel.text && citel.quoted && !citel.key.fromMe && citel.isGroup) {
      const message = citel.text.toLowerCase();
      const quotedMessage = citel.quoted.text.toLowerCase();
      const akida = '› جـرجـيـر الـمـتـرجـم،';
  
      if (quotedMessage.includes(akida) || message.includes(akida)) {
        if (message.startsWith('1')) {
          switch (message) {
            case '1.1':
              await transen(Void, citel);
              break;
            case '1.2':
              await transfr(Void, citel);
              break;
            case '1.3':
              await transja(Void, citel);
              break;
            case '1.4':
              await transes(Void, citel);
              break;
            case '1.5':
              await transca(Void, citel);
              break;
            case '1.6':
             await transru(Void, citel);
              break;
            default:
              citel.reply('اختر رقم موجود فاللائحة، مثلا لو تبي الترجمة باليباني رد على الرسالة (الرسالة الي رسلها البوت حق القائمة)  بالرقم 1.3');
              break;
              return;
            }
          }
        }
      }
    });







//=====================================================================