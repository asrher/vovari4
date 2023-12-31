const { cmd, tlang, botpic} = require('../lib')
const fs = require('fs');

//=====================================================================   



cmd({
  pattern: 'bomb',
  desc: "Play Bomb Game",
  category: "GAMES 3D",
  filename: __filename,
}, async (Void, citel, text, isAdmins) => {
  const id = citel.sender;
  const timeout = 180000;

  Void.bomb = Void.bomb || {};

  if (id in Void.bomb) {
    return Void.sendMessage(citel.from, { text: '*This session is not yet finished!*' }, Void.bomb[id][0]);
  }

  const bom = ['💥', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'].sort(() => Math.random() - 0.5);
  const number = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
  const array = bom.map((v, i) => ({
    emot: v,
    number: number[i],
    position: i + 1,
    state: false
  }));

  let teks = `乂  *B O M B*\n\nSend numbers *1* - *9* to open *9* number boxes below:\n\n`;

  for (let i = 0; i < array.length; i += 3) {
    teks += array.slice(i, i + 3).map(v => (v.state ? v.emot : v.number)).join('') + '\n';
  }

  teks += `\nTimeout: [ *${(timeout / 1000) / 60} minutes* ]\nIf you encounter a box with a bomb, your points will be deducted. Type "givup" to give up.`;

  let msg = await Void.sendMessage(citel.from, {
    text: teks,
    contextInfo: {
      externalAdReply: {
        title: '',
        body: 'Bomb',
        thumbnailUrl: 'https://telegra.ph/file/b3138928493e78b55526f.jpg',
        sourceUrl: '',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: citel });

  const { key } = msg;
  let v;

  Void.bomb[id] = [
    msg,
    array,
    setTimeout(() => {
      v = array.find(v => v.emot === '💥');
      if (Void.bomb[id]) {
        Void.sendMessage(citel.from, { text: `*Time's up!*, Bomb is in box number ${v.number}.` }, Void.bomb[id][0].key);
      }
      delete Void.bomb[id];
    }, timeout),
    key
  ];

  cmd({
    on: 'text'
  }, async (message, match) => {
    if (message.sender === id && !isNaN(message.text)) {
      const chosenNumber = parseInt(message.text);
      const chosenBox = array.find(v => v.position === chosenNumber);

      if (chosenBox && !chosenBox.state) {
        chosenBox.state = true;

        Void.sendMessage(citel.from, { text: `You chose box number ${chosenNumber}. It's ${chosenBox.emot}` });

        if (chosenBox.emot === '💥') {
          // Handle when bomb is found
        } else {
          // Handle when non-bomb box is opened
        }
      } else {
        Void.sendMessage(citel.from, { text: `Box number ${chosenNumber} is already opened. Please choose another box.` });
      }
    }
  });
});




cmd({
  pattern: "bobizz",
  desc: "Send a message with a WhatsApp channel URL",
  category: "whatsapp",
  filename: __filename,
},
async (Void, citel, text) => {
  try {
    const profilePic = await Void.getProfilePicture(Void.user.jid);
    const buffer = await Void.downloadMediaMessage(profilePic);
    
    await Void.sendMessage(citel.chat, {
      text: "I'm a Whatsapp channel URL",
      contextInfo: {
        externalAdReply: {
          mediaType: 2,
          thumbnail: buffer,
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
  pattern: "bobiz",
  desc: "Send a message with a WhatsApp channel URL",
  category: "whatsapp",
  filename: __filename,
},
async (Void, citel, text) => {
  try {
    const profilePic = await Void.getProfilePicture(Void.user.jid);
    const buffer = await Void.downloadMediaMessage(profilePic);
    
    await Void.sendMessage(citel.chat, {
      text: "I'm a Whatsapp channel URL",
      contextInfo: {
        externalAdReply: {
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
async (Void, citel, text, isAdmins) => {
  const thumbnailBuffer = await botpic(); // Get the thumbnail buffer
  const message = "› رد على هذه الرسالة برقم اللائحة التي تريدها";
  const alivtxt = `› السـلام عـلـيـكـم،\n\n[ إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا. ]\n\n\`\`\`${message}\`\`\`\n\n┐| 1.1 - قـائـمـة_الـمـشـرفـيـن\n│| 1.2 - قـائـمـة_الأعـضـاء\n│| 1.3 - قـائـمـة_الألـعـاب\n│| 1.4 - قـائـمـة_الـمـرح\n│| 1.5 - قـائـمـة_الـصور\n│| 1.6 - قـائـمـة_الـمـيـمـز\n│| 1.7 - قـائـمـة_الـديـن\n│| 1.8 - قـائـمـة_الأدوات\n│| 1.9 - قـائـمـة_الـمـيـزات\n│| 2.1 - قـائـمـة_الـتـحـويـلات\n│| 2.2 - قـائـمـة_الـقـرائـة\n┘| 2.3 - الـقـائـمـة_الـزائـدة\n\n✠ - قناة البوت فيها يتم نشر التحديثات الجديدة وشرحها :\n\nhttps://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n\n\nッ اذا واجهت مشاكل فالبوت اكتب .مساعدة`;
  
  try {
    // Fetch the thumbnail image buffer using botpic()

const aliveMessage = {
  text: 'I am a Whatsapp channel URL',
  contextInfo: {
    externalAdReply: {
      title: 'Suhail-md',
      body: 'WhatsApp Bot',
      mediaType: 2,
      thumbnail: thumbnailBuffer, // Use the retrieved thumbnail buffer
      mediaUrl: '', // Your media URL
      sourceUrl: 'https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643'
    }
  }
};
    
    // Sending the message
    await Void.sendMessage(citel.chat, aliveMessage, {
      quoted: citel,
    });
  } catch (error) {
    console.error('Error sending message:', error);
    await citel.reply('Failed to send the message.');
  }
});


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
