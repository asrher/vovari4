const { cmd, tlang, botpic} = require('../lib')
const fs = require('fs');

//=====================================================================   


cmd({
  pattern: "bobiz",
  desc: "Send a message with a WhatsApp channel URL",
  category: "whatsapp",
  filename: __filename,
},
async (Void, citel, text) => {
  const log0 = Buffer.from("YOUR_THUMBNAIL_IMAGE_DATA", "base64"); // Replace 'YOUR_THUMBNAIL_IMAGE_DATA' with the actual image data in base64 format

  try {
    await conn.sendMessage(citel.chat, {
      text: "I'm a Whatsapp channel URL",
      contextInfo: {
        externalAdReply: {
          title: 'Suhail-md',
          body: 'WhatsApp Bot',
          mediaType: 2,
          thumbnail: log0,
          mediaUrl: '',
          sourceUrl: 'https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643'
        }
      }
    });
  } catch (error) {
    console.error('Error sending message:', error);
    await citel.reply('Failed to send message.');
  }
});


cmd({
pattern: "اوامر",
filename: __filename,
      },
      async(Void, citel, text, isAdmins) => {
        const message = "› رد على هذه الرسالة برقم اللائحة التي تريدها";
  const alivtxt = `› السـلام عـلـيـكـم،\n\n[ إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا. ]\n\n\`\`\`${message}\`\`\`\n\n┐| 1.1 - قـائـمـة_الـمـشـرفـيـن\n│| 1.2 - قـائـمـة_الأعـضـاء\n│| 1.3 - قـائـمـة_الألـعـاب\n│| 1.4 - قـائـمـة_الـمـرح\n│| 1.5 - قـائـمـة_الـصور\n│| 1.6 - قـائـمـة_الـمـيـمـز\n│| 1.7 - قـائـمـة_الـديـن\n│| 1.8 - قـائـمـة_الأدوات\n│| 1.9 - قـائـمـة_الـمـيـزات\n│| 2.1 - قـائـمـة_الـتـحـويـلات\n│| 2.2 - قـائـمـة_الـقـرائـة\n┘| 2.3 - الـقـائـمـة_الـزائـدة\n\n✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n\nッ اذا واجهت مشاكل فالبوت اكتب .مساعدة`;
  let aliveMessage = {
    image: {
  url: await botpic(),
    },
    caption: alivtxt,
    footer: tlang().footer,
    headerType: 4,
        mediaUrl: '', 
sourceUrl: 'https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643' 
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
    const akida = '› السـلام عـلـيـكـم،';

    if (quotedMessage.includes(akida) || message.includes(akida)) {

        if (message.startsWith('1') || message.startsWith('2')) {
        switch (message) {
          case '1.1':
            await cmdadmine(Void,citel);
            break;
          case '1.2':
            await cmdmember(Void,citel);
            break;
          case '1.3':
            await cmdgame(Void,citel);
            break;
          case '1.4':
            await cmdfun(Void,citel);
            break;
          case '1.5':
            await cmdpic(Void,citel);
            break;
          case '1.6':
            await cmdmaker(Void,citel);
            break;
          case '1.7':
            await cmdislam(Void,citel);
            break;
          case '1.8':
            await cmdtools(Void,citel);
            break;
          case '1.9':
            await cmdspi(Void,citel);
            break;
          case '2.1':
            await cmdsticker(Void,citel);
            break;
          case '2.2':
            await cmdPdf(Void,citel);
            break;
          case '2.3':
           await cmdzayed(Void,citel);
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

async function cmdadmine(Void,citel) {
  const { commands, botpic } = require('../lib');
  let response = "⊱━━━⌬〔 قـائـمـة 🛡️ الـمـشـرفـيـن 〕⌬━━━⊰\n\n";

  commands.forEach((command) => {
    if (command.category && command.category.toLowerCase() === "admine") {
      response += `*◉ - الأمر*: .${command.pattern}\n`;
      if (command.desc) response += `*◉ - الشرح*: ${command.desc}\n`;
      if (command.use) response += `*◉ - مثال*:  ${command.use}\n`;
      response += '\n';
    }
  });

  response += '✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n';

 const aliveMessage = {
    image: {
      url: await botpic(),
    },
    caption: response,
  };

  await Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
}

               //======================================//

async function cmdmember(Void,citel) {
  const { commands } = require('../lib');
  let response = "⊱━━━⌬〔 قـائـمـة 🔰 الأعـضـاء 〕⌬━━━⊰\n\n";
      
  commands.forEach((command) => {
    if (command.category && command.category.toLowerCase() === "member") {
      response += `*◉ - الأمر*: .${command.pattern}\n`;
      if (command.desc) response += `*◉ - الشرح*: ${command.desc}\n`;
      if (command.use) response += `*◉ - مثال*:  ${command.use}\n`;
      response += '\n';
    }
  });

  response += '✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n';

 const aliveMessage = {
    image: {
      url: await botpic(),
    },
    caption: response,
  };

  await Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
}
               //======================================//

async function cmdgame(Void,citel) {
    const { commands } = require('../lib');
    let response = "⊱━━━⌬〔 قـائـمـة 🎮 الألـعـاب 〕⌬━━━⊰\n\n";
  
    commands.forEach((command) => {
      if (command.category && command.category.toLowerCase() === "game") {
        response += `*◉ - الأمر*: .${command.pattern}\n`;
        if (command.desc) response += `*◉ - الشرح*: ${command.desc}\n`;
        if (command.use) response += `*◉ - مثال*:  ${command.use}\n`;
      response += '\n';
    }
  });

  response += '✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n';

 const aliveMessage = {
    image: {
      url: await botpic(),
    },
    caption: response,
  };

  await Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
}
               //======================================//

  async function cmdfun(Void,citel) {
    const { commands } = require('../lib');
    let response = "⊱━━━⌬〔 قـائـمـة ☃️ الـمـرح 〕⌬━━━⊰\n\n";
  
    commands.forEach((command) => {
      if (command.category && command.category.toLowerCase() === "fun") {
        response += `*◉ - الأمر*: .${command.pattern}\n`;
        if (command.desc) response += `*◉ - الشرح*: ${command.desc}\n`;
        if (command.use) response += `*◉ - مثال*:  ${command.use}\n`;
      response += '\n';
    }
  });

  response += '✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n';

 const aliveMessage = {
    image: {
      url: await botpic(),
    },
    caption: response,
  };

  await Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
}         //======================================//

  async function cmdpic(Void,citel) {
    const { commands } = require('../lib');
    let response = "⊱━━━⌬〔 قـائـمـة 🏞️ الـصـور 〕⌬━━━⊰\n\n";
  
    commands.forEach((command) => {
      if (command.category && command.category.toLowerCase() === "pic") {
        response += `*◉ - الأمر*: .${command.pattern}\n`;
        if (command.desc) response += `*◉ - الشرح*: ${command.desc}\n`;
        if (command.use) response += `*◉ - مثال*:  ${command.use}\n`;
      response += '\n';
    }
  });

  response += '✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n';

 const aliveMessage = {
    image: {
      url: await botpic(),
    },
    caption: response,
  };

  await Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
}
               //======================================//

async function cmdmaker(Void,citel) {
  const { commands } = require('../lib');
  let response = "⊱━━━⌬〔 قـائـمـة 🦧 الـمـيـمـز 〕⌬━━━⊰\n\n";

  commands.forEach((command) => {
    if (command.category && command.category.toLowerCase() === "maker") {
      response += `*◉ - الأمر*: .${command.pattern}\n`;
      if (command.desc) response += `*◉ - الشرح*: ${command.desc}\n`;
      if (command.use) response += `*◉ - مثال*:  ${command.use}\n`;
      response += '\n';
    }
  });

  response += '✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n';

 const aliveMessage = {
    image: {
      url: await botpic(),
    },
    caption: response,
  };

  await Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
}
               //======================================//

async function cmdislam(Void,citel) {
  const { commands } = require('../lib');
  let response = "⊱━━━⌬〔 قـائـمـة 🌙 الـديـن 〕⌬━━━⊰\n\n";

  commands.forEach((command) => {
    if (command.category && command.category.toLowerCase() === "islam") {
      response += `*◉ - الأمر*: .${command.pattern}\n`;
      if (command.desc) response += `*◉ - الشرح*: ${command.desc}\n`;
      if (command.use) response += `*◉ - مثال*:  ${command.use}\n`;
      response += '\n';
    }
  });

  response += '✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n';

 const aliveMessage = {
    image: {
      url: await botpic(),
    },
    caption: response,
  };

  await Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
}
               //======================================//

async function cmdtools(Void,citel) {
    const { commands } = require('../lib');
    let response = "⊱━━━⌬〔 قـائـمـة 🤖 الأدوات 〕⌬━━━⊰\n\n";
  
    commands.forEach((command) => {
      if (command.category && command.category.toLowerCase() === "tools") {
        response += `*◉ - الأمر*: .${command.pattern}\n`;
        if (command.desc) response += `*◉ - الشرح*: ${command.desc}\n`;
        if (command.use) response += `*◉ - مثال*:  ${command.use}\n`;
      response += '\n';
    }
  });

  response += '✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n';

 const aliveMessage = {
    image: {
      url: await botpic(),
    },
    caption: response,
  };

  await Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
}
               //======================================//

  async function cmdspi(Void,citel) {
    const { commands } = require('../lib');
    let response = "⊱━━━⌬〔 قـائـمـة 🎗️ الـمـيـزات 〕⌬━━━⊰\n\n";
  
    commands.forEach((command) => {
      if (command.category && command.category.toLowerCase() === "spi") {
        response += `*◉ - الأمر*: .${command.pattern}\n`;
        if (command.desc) response += `*◉ - الشرح*: ${command.desc}\n`;
        if (command.use) response += `*◉ - مثال*:  ${command.use}\n`;
      response += '\n';
    }
  });

  response += '✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n';

 const aliveMessage = {
    image: {
      url: await botpic(),
    },
    caption: response,
  };

  await Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
}
               //======================================//

  async function cmdsticker(Void,citel) {
    const { commands } = require('../lib');
    let response = "⊱━━━⌬〔 قـائـمـة 〽️ الـتـحـويـلات 〕⌬━━━⊰\n\n";
  
    commands.forEach((command) => {
      if (command.category && command.category.toLowerCase() === "sticker") {
        response += `*◉ - الأمر*: .${command.pattern}\n`;
        if (command.desc) response += `*◉ - الشرح*: ${command.desc}\n`;
        if (command.use) response += `*◉ - مثال*:  ${command.use}\n`;
      response += '\n';
    }
  });

  response += '✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n';

 const aliveMessage = {
    image: {
      url: await botpic(),
    },
    caption: response,
  };

  await Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
}
               //======================================//

  async function cmdzayed(Void,citel) {
    let response = `\n✠ - بعض الأوامر
    ◉ - .حذف.اكس لحذف لعبة اكس_او
    ◉ - .حذف_كرات لحذف لعبة الكرات
    ◉ - .حذف_تخمين لحذف لعبة التخمين
    ◉ - .تعليمات لتوضيح بعض الأشياء
    ◉ - .مميزات لمعرفة مميزات البوت
    ◉ - .تقييم لتقييم البوت
    ◉ - .مساعدة لدخول قناة البوت

✠ - ملاحظات :
    ◉ - اوامر مثل زواج ومدري وش وحق الاحتكاك، انا عمدا مبغى ابرمجها ونفس الشي من تحميل الاغاني والخ لان كل ذا ذنوب.

    ◉ - بالنسبة للمواقع عندي عدة  ومنهم ثنين اشوف انه ينفع احطهم هنا :

- موقع القرآن : 
https://quran-siraj.netlify.app/

- موقع للتدريب على المسابقات والبطولات (كت) :

https://jiraya-4.netlify.app/\n`;
 const aliveMessage = {
    image: {
      url: await botpic(),
    },
    caption: response,
  };

  await Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
}
               //======================================//
  async function cmdPdf(Void,citel) {

    const message = "› رد على هذه الرسالة برقم اللائحة التي تريدها";
    let response = `\n› قـراءة مـمـتـعـة ☕ 📖 ،

    [ إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا. ]
    
    \`\`\`${message}\`\`\`\\
    
    ┐| 1.1 - بـسـاتـيـن عـرباسـتـان ج-1
    │| 1.2 - بـسـاتـيـن عـرباسـتـان ج-2
    │| 1.3 - بـسـاتـيـن عـرباسـتـان ج-3
    │| 1.4 - بـسـاتـيـن عـرباسـتـان ج-4
    │| 1.5 - بـسـاتـيـن عـرباسـتـان ج-5
    │| 1.6 - أرض زيـكـولا ج-1
    │| 1.7 - أرض زيـكـولا ج-2
    │| 1.8 - خـوف ج-1
    │| 1.9 - خـوف ج-2
    │| 2.1 - خـوف ج-3
    │| 2.2 - بـحـيـرة الـعـشـق
    │| 2.3 - ابـابـيـل ج-1
    │| 2.4 - جـسـاسـة ج-2 (تكملة ابابيل)
    ┘| 2.5 - جـومـانـة ج-3 (تكملة ابابيل)
    
    ✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :
    
    https://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n
    
    ッ اذا واجهت مشاكل فالبوت اكتب .مساعدة\n`;
 const aliveMessage = {
    image: {
      url: await botpic(),
    },
    caption: response,
  };

  await Void.sendMessage(citel.chat, aliveMessage, {
    quoted: citel,
  });
}
//=====================================================================

cmd({
pattern: "تعليمات",
desc: "",
use: '',
category: "",
filename: __filename,
},
      async(Void, citel, text, isAdmins) => {
  const alivtxt = `
  ـ 乂 توضيحات الـبوت

  ◦ المستويات + البنك + جرجير اذا لم يشتغلو معك فهذا  يعني ان الاشتراك غير مقتصر بهم. اما الأوامر الأخرى اذا فيها خطأ اكتب ".طلب مع المشكلة" ورح يجيني اشعار  لرسالتك.
  ◦ الامر ملصق 1/2/3 ذا يعني انك تقدر تستخدم .ملصق1 او .ملصق2 او .ملصق3 وهذا يشمل كل الاوامر الي مكتوبة بنفس الشكل.
  ◦ لعبة الكرات او التخمين اذا صار فيها مشكل اطلب من المشرف/ة يكتب ".حذف_كرات" او ".تخمين_انهاء".
  `;
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

//=====================================================================   

cmd({
pattern: "مميزات",
desc: "",
use: '',
category: "",
filename: __filename,
  },
        async(Void, citel, text, isAdmins) => {
    const alivtxt = `
    ـ 乂 مـميـزات الـبوت
  
    ◦ جميع البيانات تُخزن في رابط خاص بمعنى اخر، المستويات و البنك وعدد الرسائل والخ بيضلو محفوظين حتى لو تبند رقم البوت والخ.
    ◦ في حالة هناك  عضو يستخدم البوت قصد الازعاج كلمني ".المطور" وسيتم منعه من استخدام البوت.
    ◦ يمكن تغيير رسالة الدخول والخروج فقط كلم ".المطور".
    ◦ اصلاح الأخطاء واضافة اوامر جديدة .
    ◦ شغال 24/24 بدون نت وسريع.
    ◦ يمكنك إضافة المستوى او تخيفه والخ فقط كلم .المطور
    ◦ بيع ارقام عربية، كلم ".المطور"
    `;
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
  
//=====================================================================   
