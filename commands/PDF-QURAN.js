const fs = require('fs');
const { cmd, tlang } = require('../lib');

    //------------------------------- سورة الكهف --------------------------------------------//


cmd({
pattern: "سورة_الكهف",
desc: "ارسال سورة الكهف PDF",
use: '',
category: "islam",
filename: __filename,
  },
async (Void, citel) => {
  if (!citel.isGroup) return citel.reply(tlang().group);

  try {
    const pdfBuffer = fs.readFileSync("Siraj/quran/سورة الكهـف .pdf");
    const title = "سورة الكهف 💙."; 
    
    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
filename: "BK9.pdf",
      caption: title // 
    });
  } catch (error) {
    console.error("خطأ.");
    citel.reply("كتبت الاسم خطأ او انه غير متوفر حاليا.");
  }
})

    //------------------------------- أذكار الصباح والمساء --------------------------------------------//


cmd({
pattern: "اذكار",
desc: "ارسال اذكار PDF",
use: '',
category: "islam",
filename: __filename,
      },
      async (Void, citel) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
      
        try {
          const pdfBuffer = fs.readFileSync("Siraj/quran/اذكار.pdf");
          const title = "أذكار الصباح والمساء  💙."; 
          
          await Void.sendMessage(citel.chat, {
            document: pdfBuffer,
            mimetype: "application/pdf",
filename: "BK9.pdf",
            caption: title // 
          });
        } catch (error) {
          console.error("خطأ.");
          citel.reply("كتبت الاسم خطأ او انه غير متوفر حاليا.");
        }
      })
      
//=====================================================================