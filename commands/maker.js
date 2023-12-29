const { cmd,Config  } = require('../lib')
const {TelegraPh} = require('../lib/scraper')
const util = require('util');
const fs = require('fs-extra');

//=====================================================================
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
//=============================================================================

cmd({pattern: "مجميل",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.lolhuman.xyz/api/creator1/beautiful?apikey=GataDios&img=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "لكرتون",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
    return await Void.sendMessage(citel.chat , { image : { url :`https://api.lolhuman.xyz/api/editor/cartoon?apikey=GataDios&img=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "تحسين",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.lolhuman.xyz/api/upscale?apikey=GataDios&img=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "متحسين",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://vihangayt.me/tools/enhance?url=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "تلوين",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://vihangayt.me/tools/colorize?url=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "مفلتر",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://vihangayt.me/tools/dehaze?url=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "لانمي",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.lolhuman.xyz/api/imagetoanime?apikey=GataDios&img=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "مماسك",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.lolhuman.xyz/api/editor/skullmask?apikey=GataDios&img=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "مجوال",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://some-random-api.com/canvas/tonikawa?avatar=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "متغبيش",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.lolhuman.xyz/api/editor/skullmask?apikey=GataDios&img=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "مرصاص",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.lolhuman.xyz/api/editor/pencil?apikey=GataDios&img=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "مزبالة",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.lolhuman.xyz/api/creator1/trash?apikey=GataDios&img=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "مرمي",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.caliph.biz.id/api/delete?url=${Siraj_md}&apikey=caliphkey`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "مزومبي",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.lolhuman.xyz/api/zombie-effect?apikey=GataDios&img=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "ملوحة",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
    return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/ad?image=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "مسجن",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/jail?image=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "مجدار",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/uncover?image=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return  await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "ممهرج",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/clown?image=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "ممطلوب",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/wanted?image=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "مرمادي",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/greyscale?image=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({pattern: "ممسدس",  
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("رد على صورة");
    try{ let Siraj_md = await Create_Url(Void, citel);
        return await Void.sendMessage(citel.chat , { image : { url :`https://api.popcat.xyz/gun?image=${Siraj_md}`,},caption: "تمم" }, { quoted: citel });} catch(e) { return await citel.send(`خطأ`);}
})
//=============================================================================
cmd({
pattern: "ميمز",
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async (Void, citel, text) => {
  const customText = text.split(" ").join(" ").trim(); // Join words with spaces
  if (!customText) {
    return await citel.reply("اكتب شي حتى اضيفه للصورة");
  }
  try {
    const url = `https://some-random-api.com/canvas/nobitches?no=${encodeURIComponent(customText)}`;  
    return await Void.sendMessage(citel.chat, { image: { url }, caption: "تمم" }, { quoted: citel });
  } catch (e) {
    return await citel.send(`خطأ`);
  }
});

//=============================================================================
cmd({
pattern: "مبيكا",
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async (Void, citel, text) => {
  const customText = text.split(" ").join(" ").trim(); // Join words with spaces
  if (!customText) {
    return await citel.reply("اكتب شي حتى اضيفه للصورة");
  }
  try {
    const url = `https://api.popcat.xyz/pikachu?text=${encodeURIComponent(customText)}`;  
    return await Void.sendMessage(citel.chat, { image: { url }, caption: "تمم" }, { quoted: citel });
  } catch (e) {
    return await citel.send(`خطأ`);
  }
});
//=============================================================================
cmd({
pattern: "مسينسي",
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async (Void, citel, text) => {
  const customText = text.split(" ").join(" ").trim(); // Join words with spaces
  if (!customText) {
    return await citel.reply("اكتب شي حتى اضيفه للصورة");
  }
  try {
    const url = `https://some-random-api.com/canvas/oogway2?quote=${encodeURIComponent(customText)}`;  
    return await Void.sendMessage(citel.chat, { image: { url }, caption: "تمم" }, { quoted: citel });
  } catch (e) {
    return await citel.send(`خطأ`);
  }
});
//=====================================================================
cmd({
pattern: "مسينسي2",
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async (Void, citel, text) => {
  const customText = text.split(" ").join(" ").trim(); // Join words with spaces
  if (!customText) {
    return await citel.reply("اكتب شي حتى اضيفه للصورة");
  }
  try {
    const url = `https://some-random-api.com/canvas/oogway?quote=${encodeURIComponent(customText)}`;  
    return await Void.sendMessage(citel.chat, { image: { url }, caption: "تمم" }, { quoted: citel });
  } catch (e) {
    return await citel.send(`خطأ`);
  }
});
//=====================================================================
cmd({
pattern: "مقط",
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async (Void, citel, text) => {
  const customText = text.split(" ").join(" ").trim(); // Join words with spaces
  if (!customText) {
    return await citel.reply("اكتب شي حتى اضيفه للصورة");
  }
  try {
    const url = `https://api.popcat.xyz/sadcat?text=${encodeURIComponent(customText)}`;  
    return await Void.sendMessage(citel.chat, { image: { url }, caption: "تمم" }, { quoted: citel });
  } catch (e) {
    return await citel.send(`خطأ`);
  }
});
//=====================================================================
cmd({
pattern: "مفاكت",
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async (Void, citel, text) => {
  const customText = text.split(" ").join(" ").trim(); // Join words with spaces
  if (!customText) {
    return await citel.reply("اكتب شي حتى اضيفه للصورة");
  }
  try {
    const url = `https://api.popcat.xyz/facts?text=${encodeURIComponent(customText)}`;  
    return await Void.sendMessage(citel.chat, { image: { url }, caption: "تمم" }, { quoted: citel });
  } catch (e) {
    return await citel.send(`خطأ`);
  }
});
//=====================================================================
cmd({
pattern: "مبووه",
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async (Void, citel, text) => {
  if (!text) {
    return citel.reply('مثال : .بووه ميسي + رونالدو');}
  const textParts = text.split("+");
  if (textParts.length !== 2) {
    return await citel.reply("مثال : .بووه اكتب شي هنا + اكتب شي هنا");}
  const text1 = textParts[0].trim();
  const text2 = textParts[1].trim();
  try {
    const url = `https://api.popcat.xyz/pooh?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
    return await Void.sendMessage(citel.chat, { image: { url }, caption: "تمم" }, { quoted: citel });
  } catch (e) {
    return await citel.send(`خطأ`);
  }
});
//=====================================================================
cmd({
pattern: "مدريك",
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async (Void, citel, text) => {
  if (!text) {
    return citel.reply('مثال : .دريك ميسي + رونالدو');
  }
  const textParts = text.split("+");
  if (textParts.length !== 2) {
    return await citel.reply("مثال : .دريك اكتب شي هنا + اكتب شي هنا");
  }
  const text1 = textParts[0].trim();
  const text2 = textParts[1].trim();
  try {
    const url = `https://api.popcat.xyz/drake?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;   
    return await Void.sendMessage(citel.chat, { image: { url }, caption: "تمم" }, { quoted: citel });
  } catch (e) {
    return await citel.send(`خطأ`);
  }
});
//=====================================================================
cmd({
pattern: "مرسالة",
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async (Void, citel, text) => {
  if (!text) {
    return citel.reply('مثال: .مرسالة اسم + الرسالة + الرقم');
  }

  const textParts = text.split("+");
  if (textParts.length !== 3) {
    return await citel.reply("مثال: .مرسالة اسم + الرسالة + الرقم");
  }

  const name = textParts[0].trim();
  const message = textParts[1].trim();
  const number = textParts[2].trim();

  try {
    const url = `https://api.caliph.biz.id/api/fakechat/wa?name=${encodeURIComponent(name)}&text=${encodeURIComponent(message)}&num=${encodeURIComponent(number)}&apikey=caliphkey`;
    return await Void.sendMessage(citel.chat, { image: { url }, caption: "تم" }, { quoted: citel });
  } catch (e) {
    return await citel.send(`خطأ`);
  }
});
//=====================================================================
cmd({
pattern: "مكود",
desc: "",
use: '',
category: "maker",
filename: __filename,
  },
async (Void, citel, text) => {
  if (!text) {    
    return citel.reply('مثال : .مكود print("Siraj <3")+ python ');
  }

  const textParts = text.split("+");
  if (textParts.length !== 2) {
    return await citel.reply('مثال : .مكود print("Siraj <3")+ python ');
  }
  const text1 = textParts[0].trim();
  const text2 = textParts[1].trim();
  try {
    const url = `https://api.lolhuman.xyz/api/carbon?apikey=GataDios&code=${encodeURIComponent(text1)}&language=${encodeURIComponent(text2)}`;
    return await Void.sendMessage(citel.chat, { image: { url }, caption: "تمم" }, { quoted: citel });
  } catch (e) {
    return await citel.send(`خطأ`);
  }
});
//=====================================================================
