const { sck, cmd } = require('../lib')
const Config = require('../config')
const fetch = require('node-fetch');

//=====================================================================

/*cmd({
pattern: "جرجير",
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
  model: "gpt-3.5-turbo", // Specify the desired model here
  messages: [{ role: "system", content: "You" }, { role: "user", content: text }],
}),
});

const data = await response.json();
console.log("GPT REPONCE : ",data); 
if (!data.choices || data.choices.length === 0) {citel.reply("انتهى api"); }
return await  citel.reply(data.choices[0].message.content)




/*
const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration
            ({
                       apiKey:Config.OPENAI_API_KEY ,
            });

    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: text,
        temperature: 0.5,
        max_tokens: 200,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ['"""'],
    });
    citel.reply(completion.data.choices[0].text);
/////her *
}
)
*/
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
      return await citel.reply(".سوي كريستيانو رونالدو يأكل جرجير");
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



const translatte = require("translatte");

// Function to translate text from one language to another
async function translateText(text, fromLanguage, toLanguage) {
  try {
    const translatedText = await translatte(text, {
      from: fromLanguage,
      to: toLanguage,
    });
    return translatedText.text;
  } catch (error) {
    console.error("Translation error:", error);
    throw new Error("Translation failed");
  }
}

// Command to interact with the AI API
cmd({
  pattern: "لوفيي",
  desc: "Talk to an AI with Luffy character",
  category: "AI",
  filename: __filename,
}, async (Void, citel, text) => {
  if (!text) return await citel.reply(`Please provide a message to ask Luffy.`);

  try {
    // Translate the user's message from Arabic to English
    const translatedText = await translateText(text, "ar", "en");
    
    const apiUrl = `https://api.caliph.biz.id/api/ai/c-ai?q=${encodeURIComponent(translatedText)}&char=luffy&apikey=caliphkey`;
    
    const response = await fetch(apiUrl);
    const result = await response.json();

    if (result.status === 200 && result.result && result.result.response) {
      // Translate the response from English to Arabic
      const translatedResponse = await translateText(result.result.response, "en", "ar");
      await citel.reply(`${translatedResponse}`);
    } else {
      await citel.reply("No response from Luffy at the moment.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    await citel.reply("There was an error while communicating with Luffy. Please try again later.");
  }
});






const translateToEnglish = async (text) => {
  const translateToEnUrl = `https://vihangayt.me/tools/chatgpt4?q=translate%20${encodeURIComponent(text)}%20to%20en`;
  try {
    const response = await fetch(translateToEnUrl);
    const result = await response.json();
    return result.status && result.data ? result.data : null;
  } catch (error) {
    console.error("Error occurred during translation to English:", error);
    return null;
  }
};

const translateToArabic = async (text) => {
  const translateToArUrl = `https://vihangayt.me/tools/chatgpt4?q=translate%20${encodeURIComponent(text)}%20to%20ar`;
  try {
    const response = await fetch(translateToArUrl);
    const result = await response.json();
    return result.status && result.data ? result.data : null;
  } catch (error) {
    console.error("Error occurred during translation to Arabic:", error);
    return null;
  }
};

cmd({
  pattern: "لوفي",
  desc: "Talk to an AI with Luffy character",
  category: "AI",
  filename: __filename,
}, async (Void, citel, text) => {
  if (!text) return await citel.reply(`Please provide a message to ask Luffy.`);

  const translatedToEn = await translateToEnglish(text);
  if (!translatedToEn) return await citel.reply("Unable to translate the message to English.");

  const apiUrl = `https://api.caliph.biz.id/api/ai/c-ai?q=${encodeURIComponent(translatedToEn)}&char=luffy&apikey=caliphkey`;

  try {
    const response = await fetch(apiUrl);
    const result = await response.json();

    if (result.status === 200 && result.result && result.result.response) {
      const translatedToAr = await translateToArabic(result.result.response);
      if (!translatedToAr) return await citel.reply("Unable to translate the response to Arabic.");

      await citel.reply(`${translatedToAr}`);
    } else {
      await citel.reply("No valid response from Luffy at the moment.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    await citel.reply("There was an error while communicating with Luffy. Please try again later.");
  }
});

