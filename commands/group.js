const { cmd, sck, tlang } = require('../lib')
const googleTTS = require("google-tts-api");
const translatte = require("translatte");

//=====================================================================

cmd({
pattern: "توب",
desc: "اكتب .توب مع صفة معينة",
use: '',
category: "fun",
filename: __filename,
  },
    async (Void, citel, match) => {
        if (!match) return citel.reply("اختر صفة معينة");
        const numMentions = parseInt(match);
        if (isNaN(numMentions) || numMentions <= 0 || numMentions > 5) {
            return citel.reply("  اختر رقم من 1 ل 5");
        }
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        let member = participants.map((u) => u.id);
        let me = citel.sender;
        member = member.sort(() => Math.random() - 0.5);
        const mentions = member.slice(0, Math.min(numMentions, 5));
        const mentionText = mentions.map((mention) => `*@${mention.split("@")[0]}*`).join("\n");
        const text = numMentions === 1 ? `اكثر  ${match} في القروب هم : \n\n ${mentionText}` : `اكثر  ${match} في القروب هم : \n\n ${mentionText}`;
        Void.sendMessage(citel.chat, {
            text: text,
            mentions: mentions,
        }, {
            quoted: citel,
        });
    })

//=====================================================================

cmd({
pattern: "شخص",
desc: "اكتب .شخص مع صفة معينة",
use: '',
category: "fun",
filename: __filename,
  },
async(Void, citel, match) => {
    if (!match) return citel.reply("*اختر صفة معينة?*");
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
        .catch((e) => {}) : "";
    const participants = citel.isGroup ? await groupMetadata.participants : "";
    let member = participants.map((u) => u.id);
    let me = citel.sender;
    let pick = member[Math.floor(Math.random() * member.length)];
    Void.sendMessage(citel.chat, {
        text: `اكثر شخص ${match} في هذا القروب هو *@${pick.split("@")[0]}*`,
        mentions: [pick],
    }, {
        quoted: citel,
    });
}
)

//=====================================================================

cmd({
pattern: "افتاره",
desc: "جلب افتار اي شخص",
use: '',
category: "member",
filename: __filename,
  },
async (Void, citel, text) => {
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
    if (!users) return citel.reply("֎╎مـنـشـن احـد او رد عـلـى رسـالـتـه");
    let pfp;
    try {
        pfp = await Void.profilePictureUrl(users, "image");
    } catch (e) {
        return citel.reply("ما عنده او مخصص الافتار.");
    }
  
    let message = {
        quoted: citel.quoted,
        image: { url: pfp },
        footer: tlang().footer,
        headerType: 4,
    };

    return await Void.sendMessage(citel.chat, message, { quoted: citel });
});

//=====================================================================

cmd({
pattern: "انشئ_تسجيل",
desc: "إنشاء تسجيل لرقم خويك",
use: '',
category: "fun",
filename: __filename,
  },
    async(Void, citel, text) => {

if (!citel.quoted) return citel.reply (`رد عرسالة شخص`);
if ( !text ) return citel.reply( `مثال : رد عرسالة شخص واكتب اسم له `)
var words = text.split(" ");
if (words.length >3) {   text= words.slice(0, 3).join(' ')  }
// citel.reply(text);

const vcard = 'BEGIN:VCARD\n' +
       'VERSION:3.0\n' +
       'FN:' + text + '\n' +
       'ORG:;\n' +
       'TEL;type=CELL;type=VOICE;waid=' + citel.quoted.sender.split('@')[0] + ':+' + owner[0] + '\n' +
       'END:VCARD'
   let buttonMessaged = {
       contacts: { displayName: text, contacts: [{ vcard }] },
       
   };
   return await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });

})

//=====================================================================

cmd({ 
pattern: "شبيهي",
desc: "معرفة شبيهك بالقروب",
use: '',
category: "fun",
filename: __filename,
  },
 async(Void, citel, text) => {
    const { tlang } = require('../lib')
   if (!citel.isGroup) return citel.reply(tlang().group);
   const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
     const participants = citel.isGroup ? await groupMetadata.participants : "";
   let members = participants.map(u => u.id)
   const percentage = Math.floor(Math.random() * 100)
    async function couple(percent) {
         var text;
        if (percent < 25) {
            text = `\t\t\t\t\t*نسبة التشابه : ${percentage}%* \n\t\tابعد عنه ما يشبهك 🦦.`
        } else if (percent < 50) {
            text = `\t\t\t\t\t*نسبة التشابه : ${percentage}%* \n\t\t امم شرايكم تصيرو اصدقاء 🦦؟`
        } else if (percent < 75) {
            text = `\t\t\t\t\t*نسبة التشابه : ${percentage}%* \n\t\t\t ولل يزينكم 🦦. `
        } else if (percent < 90) {
            text = `\t\t\t\t\t*نسبة التشابه : ${percentage}%* \n\t  اممم ثنائي حلو 🦦.`
        } else {
            text = `\t\t\t\t\t*نسبة التشابه : ${percentage}%* \n\tالله ، خُلقتم لبعض 😔💙.`
        }
        return text
        }
       var user = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
       var shiper;
       if (user) {
       shiper = user
       } else {
       shiper = members[Math.floor(Math.random() * members.length)]
       }
       let caption = `@${citel.sender.split('@')[0]}  x  @${shiper.split('@')[0]}\n \n`
        caption += await couple(percentage)
        if(citel.sender.split('@')[0]===shiper.split('@')[0]) return citel.reply('```'+'تستغبي يفنطل ؟'+'```')
        await Void.sendMessage(citel.chat,{text: caption,mentions: [citel.sender,shiper]},{quoted:citel})
   }
 )

//=====================================================================

cmd({
pattern: "طلب",
desc: "إبلاغ المطور عن خطأ",
use: '',
category: "member",
filename: __filename,
  }, 
async(Void, citel, text) => {
    if (!text) return citel.reply(`.طلب ممكن تضيف امر يسوي ملصقات؟`);
    textt = `*| لديك طلب |*`;
    teks1 = `\n\n*المُطالب* : @${
citel.sender.split("@")[0]
}\n*الطلب* : ${text}`;
    teks2 = `\n\n*السلام عليكم  @${citel.sender.split("@")[0]},تم ارسال الطلب للمطور*.\n\n*انتظر الرد .....*`;
    for (let i of owner) {
        Void.sendMessage(i + "@s.whatsapp.net", {
            text:textt + teks1,
            mentions: [citel.sender],
        }, {
            quoted: citel,
        });
    }
    Void.sendMessage(citel.chat, {
        text: teks2 ,
        mentions: [citel.sender],
    }, {
        quoted: citel,
    });

}
)

//=====================================================================

cmd({
pattern: "الوقت",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async(Void, citel, text) => {
    let now = new Date().toLocaleTimeString("en-US", { hour12: false, timeZone: "Asia/Riyadh" });
    citel.reply(` ${now}`);
}
)

//=====================================================================
let tempText = {};

cmd({
  pattern: "قل",
  desc: "البوت يسجل كلامك فويس بعدة لغات + لا تسوي سبام بالامر عشان ما يتبند البوت.",
  use: '',
  category: "fun",
  filename: __filename,
},
async (Void, citel, text) => {
  if (!text) return citel.reply('شتبي اقول');
    
  // Save the received text temporarily
  tempText[citel.sender] = text;

  const message = "› رد على هذه الرسالة\n برقم الصوت الذي تريده";
  return citel.reply(`› تـسـجـيـلات جـرجـيـر،\n\n\`\`\`${message}\`\`\`\n\n┐| 1.1 - الـعـربـي\n│| 1.2 - الـيـابـانـي\n│| 1.3 - الإنـجـلـيـزي\n│| 1.4 - الـفـرنـسـي\n│| 1.5 - الـكـتـلانـي\n│| 1.6 - الإسـبـانـي\n┘| 1.7 - الـروسـي\n\nلا تسوي سبام بالأمر عشان ميتبند ッ\n\nッ اذا واجهت مشاكل فالبوت اكتب .مساعدة\n`);
});


    //======================================//

async function audioar(Void, citel) {
  try {
    const text = tempText[citel.sender];
    if (!text) return citel.reply('شتبي اقول');

    const translatedText = await translateText(text, 'ar', 'ar');

    const ttsurl = googleTTS.getAudioUrl(translatedText.text, {
      lang: "ar",
      slow: false,
      host: "https://translate.google.com",
    });

    await Void.sendMessage(citel.chat, {
      audio: {
        url: ttsurl,
      },
      mimetype: "audio/mpeg",
      filename: `ttsCitelVoid_ar.m4a`,
    }, {
      quoted: citel,
    });

  } catch (error) {
    console.error(error);
    return citel.reply('حدث خطأ أثناء تحويل النص إلى صوت.');
  }
}

    //======================================//

async function audioja(Void, citel) {
  try {
    const text = tempText[citel.sender];
    if (!text) return citel.reply('شتبي اقول');

    const translatedText = await translateText(text, 'ar', 'ja');

    const ttsurl = googleTTS.getAudioUrl(translatedText.text, {
      lang: "ja",
      slow: false,
      host: "https://translate.google.com",
    });

    await Void.sendMessage(citel.chat, {
      audio: {
        url: ttsurl,
      },
      mimetype: "audio/mpeg",
      filename: `ttsCitelVoid_ja.m4a`,
    }, {
      quoted: citel,
    });

  } catch (error) {
    console.error(error);
    return citel.reply('حدث خطأ أثناء تحويل النص إلى صوت.');
  }
}

    //======================================//

async function audioen(Void, citel) {
  try {
    const text = tempText[citel.sender];
    if (!text) return citel.reply('شتبي اقول');

    const translatedText = await translateText(text, 'ar', 'en');

    const ttsurl = googleTTS.getAudioUrl(translatedText.text, {
      lang: "en",
      slow: false,
      host: "https://translate.google.com",
    });

    await Void.sendMessage(citel.chat, {
      audio: {
        url: ttsurl,
      },
      mimetype: "audio/mpeg",
      filename: `ttsCitelVoid_en.m4a`,
    }, {
      quoted: citel,
    });

  } catch (error) {
    console.error(error);
    return citel.reply('حدث خطأ أثناء تحويل النص إلى صوت.');
  }
}

    //======================================//

async function audiofr(Void, citel) {
  try {
    const text = tempText[citel.sender];
    if (!text) return citel.reply('شتبي اقول');

    const translatedText = await translateText(text, 'ar', 'fr');

    const ttsurl = googleTTS.getAudioUrl(translatedText.text, {
      lang: "fr",
      slow: false,
      host: "https://translate.google.com",
    });

    await Void.sendMessage(citel.chat, {
      audio: {
        url: ttsurl,
      },
      mimetype: "audio/mpeg",
      filename: `ttsCitelVoid_fr.m4a`,
    }, {
      quoted: citel,
    });

  } catch (error) {
    console.error(error);
    return citel.reply('حدث خطأ أثناء تحويل النص إلى صوت.');
  }
}

    //======================================//

async function audioca(Void, citel) {
  try {
    const text = tempText[citel.sender];
    if (!text) return citel.reply('شتبي اقول');

    const translatedText = await translateText(text, 'ar', 'ca');

    const ttsurl = googleTTS.getAudioUrl(translatedText.text, {
      lang: "ca",
      slow: false,
      host: "https://translate.google.com",
    });

    await Void.sendMessage(citel.chat, {
      audio: {
        url: ttsurl,
      },
      mimetype: "audio/mpeg",
      filename: `ttsCitelVoid_ca.m4a`,
    }, {
      quoted: citel,
    });

  } catch (error) {
    console.error(error);
    return citel.reply('حدث خطأ أثناء تحويل النص إلى صوت.');
  }
}

    //======================================//

async function audioes(Void, citel) {
  try {
    const text = tempText[citel.sender];
    if (!text) return citel.reply('شتبي اقول');

    const translatedText = await translateText(text, 'ar', 'es');

    const ttsurl = googleTTS.getAudioUrl(translatedText.text, {
      lang: "es",
      slow: false,
      host: "https://translate.google.com",
    });

    await Void.sendMessage(citel.chat, {
      audio: {
        url: ttsurl,
      },
      mimetype: "audio/mpeg",
      filename: `ttsCitelVoid_es.m4a`,
    }, {
      quoted: citel,
    });

  } catch (error) {
    console.error(error);
    return citel.reply('حدث خطأ أثناء تحويل النص إلى صوت.');
  }
}

    //======================================//

async function audioru(Void, citel) {
  try {
    const text = tempText[citel.sender];
    if (!text) return citel.reply('شتبي اقول');

    const translatedText = await translateText(text, 'ar', 'ru');

    const ttsurl = googleTTS.getAudioUrl(translatedText.text, {
      lang: "ru",
      slow: false,
      host: "https://translate.google.com",
    });

    await Void.sendMessage(citel.chat, {
      audio: {
        url: ttsurl,
      },
      mimetype: "audio/mpeg",
      filename: `ttsCitelVoid_ru.m4a`,
    }, {
      quoted: citel,
    });

  } catch (error) {
    console.error(error);
    return citel.reply('حدث خطأ أثناء تحويل النص إلى صوت.');
  }
}

    //======================================//

cmd({ on: "text" }, async (Void, citel) => {
  if (citel.text && citel.quoted && !citel.key.fromMe && citel.isGroup) {
    const message = citel.text.toLowerCase();
    const quotedMessage = citel.quoted.text.toLowerCase();
    const akida = '› تـسـجـيـلات جـرجـيـر،';

    if (quotedMessage.includes(akida) || message.includes(akida)) {
      if (message.startsWith('1')) {
        switch (message) {
          case '1.1':
            await audioar(Void, citel);
            break;
          case '1.2':
            await audioja(Void, citel);
            break;
          case '1.3':
            await audioen(Void, citel);
            break;
          case '1.4':
            await audiofr(Void, citel);
            break;
          case '1.5':
            await audioca(Void, citel);
            break;
          case '1.6':
            await audioes(Void, citel);
            break;
          case '1.7':
            await audioru(Void, citel);
            break;
          default:
            citel.reply('اختر رقم موجود فاللائحة، مثلا لو تبي الفويس باليباني رد على الرسالة (الرسالة الي رسلها البوت حق القائمة)  بالرقم 1.2');
            break;
        }
      }
    }
  }
});

    //======================================//

async function translateText(text, fromLanguage, toLanguage) {
  try {
    let whole = await translatte(text, {
      from: fromLanguage,
      to: toLanguage,
    });
    return whole;
  } catch (error) {
    console.error(error);
    throw new Error('حدث خطأ أثناء الترجمة.');
  }
}
//=====================================================================
