
const { cmd, tlang} = require('../lib')

//=====================================================================


cmd({
pattern: "مساعدة",
desc: "إرسال رابط قروب البوت",
use: '',
category: "member",
filename: __filename,
  },
async(Void, citel, text) => {
    citel.reply(`֎╎شـوف خـاصـك ${tlang().greet}`);
    await Void.sendMessage(`${citel.sender}`, {
        image: log0,
        caption: `֎╎الـرابـط : https://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n`,
    });

}
)

//=====================================================================

cmd(
        {
pattern: "احسب",
desc: "آلة حاسبة",
use: '',
category: "tools",
filename: __filename,
  },
        async (Void, citel, text) => {
            if (!text) {
                return citel.reply("اكتب عملية حسابية");
            }
            text = text.replace(/\s+/g, '');
            if (!/^(\d+([-+*/]\d+)+)$/.test(text)) {
                return citel.reply("اكتب عملية حسابية صحيحة");
            }
            const evaluate = (exp) => {
                return new Function('return ' + exp)();
            };
            try {
                const result = evaluate(text);
                if (text.includes('/') && text.split('/').some((num) => num === '0')) {
                    return citel.reply("لا يمكن قسمة على الصفر");
                  }
                if (text.split(/[-+*/]/).length <= 2) {
                    const [num1, operator, num2] = text.match(/\d+|[-+*/]/g);
                    return citel.reply(`${num1} ${operator} ${num2} = ${result}`);
                } else {
                    return citel.reply(`الجواب: ${result}`);
                }
            } catch (error) {
                return citel.reply("خطأ");
            }
        }
    )

//=====================================================================
