const { cmd, tlang, botpic} = require('../lib')
const fs = require('fs');

//=====================================================================   

cmd({
pattern: "روايات",
filename: __filename,
      },
      async(Void, citel, text, isAdmins) => {
        const message = "› رد على هذه الرسالة برقم الرواية التي تريدها";
        const alivtxt = `› قـراءة مـمـتـعـة ☕ 📖 ،\n\n[ إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا. ]\n\n\`\`\`${message}\`\`\`\n\n┐| 1.1 - بـسـاتـيـن عـرباسـتـان ج-1\n│| 1.2 - بـسـاتـيـن عـرباسـتـان ج-2\n│| 1.3 - بـسـاتـيـن عـرباسـتـان ج-3\n│| 1.4 - بـسـاتـيـن عـرباسـتـان ج-4\n│| 1.5 - بـسـاتـيـن عـرباسـتـان ج-5\n│| 1.6 - أرض زيـكـولا ج-1\n│| 1.7 - أرض زيـكـولا ج-2\n│| 1.8 - خـوف ج-1\n│| 1.9 - خـوف ج-2\n│| 2.1 - خـوف ج-3\n│| 2.2 - بـحـيـرة الـعـشـق\n│| 2.3 - ابـابـيـل ج-1\n│| 2.4 - جـسـاسـة ج-2 (تكملة ابابيل)\n┘| 2.5 - جـومـانـة ج-3 (تكملة ابابيل)\n\n✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n\nッ اذا واجهت مشاكل فالبوت اكتب .مساعدة`;
  let aliveMessage = {
    image: {
  url: await botpic(),
    },
    caption: alivtxt,
    footer: tlang().footer,
    headerType: 4,
  };
   return Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
  
      }
    )

cmd({ on: "text" }, async (Void, citel) => {
  if (citel.text && citel.quoted && !citel.key.fromMe && citel.isGroup) {
    const message = citel.text.toLowerCase();
    const quotedMessage = citel.quoted.text.toLowerCase();
    const akida = '› قـراءة مـمـتـعـة ☕ 📖 ،';

    if (quotedMessage.includes(akida) || message.includes(akida)) {

        if (message.startsWith('1') || message.startsWith('2')) {
        switch (message) {
          case '1.1':
            await pdfbasatin1(Void,citel);
            break;
          case '1.2':
            await pdfbasatin2(Void,citel);
            break;
          case '1.3':
            await pdfbasatin3(Void,citel);
            break;
          case '1.4':
            await pdfbasatin4(Void,citel);
            break;
          case '1.5':
            await pdfbasatin5(Void,citel);
            break;
          case '1.6':
            await pdfzikola1(Void,citel);
            break;
          case '1.7':
            await pdfzikola2(Void,citel);
            break;
          case '1.8':
            await pdfkhof1(Void,citel);
            break;
          case '1.9':
            await pdfkhof2(Void,citel);
            break;
          case '2.1':
            await pdfkhof3(Void,citel);
            break;
          case '2.2':
            await pdfbaher1(Void,citel);
            break;
          case '2.3':
           await pdfababil1(Void,citel);
            break;
          case '2.4':
           await pdfababil2(Void,citel);
            break;
          case '2.5':
           await pdfababil3(Void,citel);
            break;
          default:
            citel.reply('اختر رقم موجود فاللائحة، مثلا لو تبي قائمة الألعاب رد على الرسالة (الرسالة الي رسلها البوت حق القائمة)  بالرقم 1.3');
            break;
        }
      }
    }
  }
});

    //======================================//



async function pdfbasatin1(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/بساتين عربستان.pdf");
    const title = "رواية بساتين عربستان الجزء الأول.";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//

async function pdfbasatin2(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/بساتين عربستان 2.pdf");
    const title = "رواية بساتين عربستان الجزء الثاني.";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//
    
async function pdfbasatin3(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/بساتين عربستان 3.pdf");
    const title = "رواية بساتين عربستان الجزء الثالث.";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//
    
async function pdfbasatin4(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/بساتين عربستان 4.pdf");
    const title = "رواية بساتين عربستان الجزء الرابع.";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//

async function pdfbasatin5(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/بساتين عربستان 5.pdf");
    const title = "رواية بساتين عربستان الجزء الخامس.";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//
    
async function pdfzikola1(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/أرض زيكولا.pdf");
    const title = "رواية أرض زيكولا الجزء الأول.";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//
    
async function pdfzikola2(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/أرض زيكولا 2.pdf");
    const title = "رواية أرض زيكولا الجزء الثاني.";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//
    
async function pdfkhof1(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/رواية خوف.pdf");
    const title = "رواية خوف الجزء الأول.";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//
    
async function pdfkhof2(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/رواية خوف 2.pdf");
    const title = "رواية خوف الجزء الثاني.";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//
    
async function pdfkhof3(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/رواية خوف 3.pdf");
    const title = "رواية خوف الجزء الثالث.";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//
    
async function pdfbaher1(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/بحيرة العشق.pdf");
    const title = "رواية بحيرة العشق.";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//
    
async function pdfababil1(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/أبابيل.pdf");
    const title = "رواية أبابيل الجزء 1.";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//
    
async function pdfababil2(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/الجساسة.pdf");
    const title = "رواية الجساسة الجزء 2 (تكملة أبابيل) .";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//
    
async function pdfababil3(Void,citel) {
try {
    const pdfBuffer = fs.readFileSync("Siraj/PDF/جومانا .pdf");
    const title = "رواية جومانا الجزء 3 (تكملة أبابيل) .";

    await Void.sendMessage(citel.chat, {
      document: pdfBuffer,
      mimetype: "application/pdf",
      filename: "BK9.pdf",
      caption: title
    }, { quoted: citel });
  } catch (e) {
                console.log(e)
    citel.reply("إسم الرواية خطأ او غير متوفرة في البوت. اكتب .روايات لترى ماهو متوفر.");
  }
}

    //======================================//
//=====================================================================
