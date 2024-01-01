const { sck, cmd } = require('../lib')
const Config = require('../config')
const fetch = require('node-fetch');

//=====================================================================

cmd({
pattern: "لوفي",
desc: "سولف مع الذكاء الاصطناعي",
use: '',
category: "spi",
filename: __filename,
  },
async(Void, citel,text) => 
{
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.chatt || "false";
    if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل الـذكـاء الاصـطـنـاعـي فـالـمـجـمـوعـة\n\nادخل قروب البوت كلشي متوفر فيه اكتب .مساعدة");
if (!Config.OPENAI_API_KEY || Config.OPENAI_API_KEY=='' ||  !Config.OPENAI_API_KEY.startsWith('sk') ) return citel.reply('انتهى api')
if (!text) return citel.reply(`السلام عليكم ${citel.pushName}كيف اساعدك؟ ( كل ما تكتب شي اكتب قبله .جرجير عشان ارد عليك) `); 

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Config.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "انت شخص سعودي مرح يقول ذبات ويتكلم فقط باللهجة السعودية" },
        { role: "user", content: text },
      ],
    }),
  });

  const data = await response.json();

  if (!data.choices || data.choices.length === 0) {
    citel.reply("No response received from the AI.");
    return;
  }

  // Extract the message content from the response and send it to the chat
  const messageContent = data.choices[0].message.content;
  if (messageContent) {
    await citel.reply(messageContent);
  } else {
    citel.reply("No valid response received from the AI.");
  }
});

//=====================================================================

cmd({
pattern: "جرجير",
desc: "سولف مع الذكاء الاصطناعي",
use: '',
category: "spi",
filename: __filename,
  },
async (Void, citel, text) => {
  let zerogroup = (await sck.findOne({
    id: citel.chat,
})) || (await new sck({
        id: citel.chat,
    })
    .save());
let mongoschemas = zerogroup.chatt || "false";
if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل الـذكـاء الاصـطـنـاعـي فـالـمـجـمـوعـة\n\nادخل قروب البوت كلشي متوفر فيه اكتب .مساعدة");

  if (!text) return await citel.reply(`السلام عليكم ${citel.pushName}كيف اساعدك؟ ( كل ما تكتب شي اكتب قبله .جرجير عشان ارد عليك) `);
  const apiUrl = `https://vihangayt.me/tools/chatgpt4?q=${encodeURIComponent(text)}`;
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    if (result.status && result.data) {
      await citel.reply(`${result.data}`);
    } else {
      await citel.reply("مافي جواب.");
    }
  } catch (error) {
    console.error("حصل خطأ");
    await citel.reply("حصل خطأ");
  }
});

//=====================================================================

cmd({
pattern: "سوي",
desc: "انشاء صور بالذكاء الإصطناعي",
use: '',
category: "spi",
filename: __filename,
  },
  async (Void, citel, text) => {
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.chatt || "false";
    if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل الـذكـاء الاصـطـنـاعـي فـالـمـجـمـوعـة\n\nادخل قروب البوت كلشي متوفر فيه اكتب .مساعدة");
    const customText = text.split(" ").join(" ").trim(); // Join words with spaces
    if (!customText) {
      return await citel.reply("مثال : .سوي كريستيانو رونالدو يأكل جرجير");
    }
    try {
      const apiUrl = `https://vihangayt.me/tools/photoleap?q=${encodeURIComponent(customText)}`;
      
      // Make a request to the API
      const response = await fetch(apiUrl);
      const result = await response.json();
      
      // Check if the API request was successful
      if (result.status) {
        const imageUrl = result.data;
        return await Void.sendMessage(citel.chat, { image: { url: imageUrl }, caption: "تمم" }, { quoted: citel });
      } else {
        return await citel.reply("حدث خطأ أثناء جلب الصورة");
      }
    } catch (e) {
      console.error(e);
      return await citel.reply("حدث خطأ");
    }
  });
  //=====================================================================
