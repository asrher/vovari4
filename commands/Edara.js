const { sck, sck1,cmd } = require('../lib')


//=====================================================================

cmd({
pattern: "حسبة",
desc: "",
use: '',
category: "",
filename: __filename,
  }, async (Void, citel, text) => {

    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.istimara || "false";
    if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل الاستمارات فـالـمـجـمـوعـة");
    const args = text.trim();
  
    if (!/^\d+$/.test(args)) {
      return await citel.reply('مثال : .حسبة 100');
    }
  
    const questions = parseInt(args);
    const resultcal = questions * 400;
    const resultcal2 = questions * 400 - 5000;
    const resultcal3 = questions * 400 - 10000;
    const resultcal4 = questions * 400 + 10000;
    const resultcal5 = questions * 400 / 2;
  
    let response = `حسبة ${questions} سؤال هي  :\n`;
    response += `المقدم: ${resultcal4}\n`;
    response += `المركز 1: ${resultcal}\n`;
    response += `المركز 2: ${resultcal2}\n`;
    response += `المركز 3: ${resultcal3}\n`;
    response += `الباقي: ${resultcal5}`;
  
    return await citel.reply(response);
  });
  //=====================================================================