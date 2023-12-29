const { cmd } = require('../lib')
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

cmd({pattern: "عمره",  
desc: "معرفة عمر من في الصورة",
use: '',
category: "member",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if(citel.quoted.mtype != 'imageMessage') return await citel.reply("رد على صورة");

    try {
        let Siraj_md = await Create_Url(Void, citel);
        const response = await fetch(`https://api.lolhuman.xyz/api/agedetect?apikey=GataDios&img=${Siraj_md}`);
        
        if (!response.ok) {
            return await citel.send(`خطأ`);
        }

        const result = await response.json();
        const age = result.result;

        // Send only the age without the image
        await citel.reply(`عمره: ${age}`);
    } catch(e) {
        return await citel.send(`خطأ`);
    }
});


//=============================================================================
/*
cmd({pattern: "انمي", 
desc: "",
use: '',
category: "",
filename: __filename,
  },
  async (Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if (citel.quoted.mtype !== 'imageMessage') return await citel.reply("رد على صورة");
    try {
      let Siraj_md = await Create_Url(Void, citel);
      const response = await fetch(`https://api.lolhuman.xyz/api/wait?apikey=GataDios&img=${Siraj_md}`);
      if (!response.ok) {
        return await citel.send(`خطأ`);
      }
      const result = await response.json();
      const titleEnglish = result.result.title_english;
      const video = result.result.video;

      // Send the extracted fields
      return await Void.sendMessage(
        citel.chat,
        {
          text: `Title: ${titleEnglish}\nVideo: ${video}`,
        },
        { quoted: citel }
      );
    } catch (e) {
      return await citel.send(`خطأ`);
    }
  }
);
//=============================================================================

cmd({pattern: "مانغا", 
desc: "",
use: '',
category: "",
filename: __filename,
  },
  async (Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`رد على صورة`);
    if (citel.quoted.mtype !== 'imageMessage') return await citel.reply("رد على صورة");

    try {
      let Siraj_md = await Create_Url(Void, citel);

      const response = await fetch(`https://api.lolhuman.xyz/api/wmit?apikey=GataDios&img=${Siraj_md}`);
      
      if (!response.ok) {
        return await citel.send(`خطأ`);
      }

      const result = await response.json();
      const animeData = result.result;

      // Iterate through each entry in the result array
      for (const entry of animeData) {
        const title = entry.title;
        const part = entry.part;

        // Send the extracted fields
        await Void.sendMessage(
          citel.chat,
          {
            text: `Title: ${title}\nPart: ${part}`,
          },
          { quoted: citel }
        );
      }
    } catch (e) {
      return await citel.send(`خطأ`);
    }
  }
);

//=====================================================================
*/