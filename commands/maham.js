const { sck, cmd } = require('../lib');

const quotes = [
"֎╎50 ⟦ فـعـالـيـة 🃏 الـجـوكـر ⟧",
"֎╎53 ⟦ فـعـالـيـة  ♥️ القلوب ⟧",
"֎╎56 ⟦ فـعـالـيـة  🤍 الـقـلـوب الـخـفـيـه ⟧",
"֎╎59 ⟦ فـعـالـيـة 💣 الـقـنـبـلـة ⟧",
"֎╎62 ⟦ فـعـالـيـة 👾 فـيـروسـات ⟧",
"֎╎65 ⟦ فـعـالـيـة ♻️ الــعـــكــــس ⟧",
"֎╎68 ⟦ فـعـالـيـة 🚧 الـغـرفـة الـمـغـلـقـة ⟧",
"֎╎71 ⟦ فـعـالـيـة 🚫 اللـيـلـة الـأخـيـرة ⟧",
"֎╎74 ⟦ فـعـالـيـة 🎰 الــرولـــيــت ⟧",
"֎╎77 ⟦ فـعـالـيـة ⚽ الـكـرات ⟧",
"֎╎80 ⟦ فـعـالـيـة 📓 الـديـث نـوت ⟧",
"֎╎83 ⟦ فـعـالـيـة 🏰 حـرب الـأبـراج ⟧",
"֎╎86 ⟦ فـعـالـيـة 🚩 الـأعـــلـام ⟧",
"֎╎89 ⟦ فـعـالـيـة 💉 تـلـقـيـح ⟧",
"֎╎92 ⟦ فـعـالـيـة 🛎️ الجــرس ⟧",
"֎╎95 ⟦ فـعـالـيـة 🪑 واقـف جـالـس ⟧",
"֎╎98 ⟦ فـعـالـيـة ⭐ الـنــجـــوم ⟧",
"֎╎101 ⟦ فـعـالـيـة مـصـ🧛🏻‍♂️ـاص الدمـاء ⟧",
"֎╎104 ⟦ فـعـالـيـة 🎈بـالـونـات ⟧",
"֎╎107 ⟦ فـعـالـيـة 💡الـمـصـابـيـح ⟧",
"֎╎110 ⟦ فـعـالـيـة ☠️ الايـدو تـيـنـسـي ⟧",
"֎╎113 ⟦ فـعـالـيـة 🏴‍☠️ سفينة القراصنه ⟧",
"֎╎149 ⟦ فـعـالـيـة 🌗 مــــون ⟧",
"֎╎152 ⟦ فـعـالـيـة الـاحـيـاء و🧟‍♂️ الـامـوات ⟧",
"֎╎155 ⟦ فـعـالـيـة ⚖️ الـمــحـكــمـة ⟧",
"֎╎158 ⟦ فـعـالـيـة 🏹 الــرمـــاة ⟧",
"֎╎161 ⟦ فـعـالـيـة 🏐 كـرة الـطـائـرة ⟧",
"֎╎164 ⟦ فـعـالـيـة الشرطه 🚔 والعصابات ⟧",
"֎╎167 ⟦ فـعـالـيـة 🧪 الـتـريـاق ⟧"

];

cmd({
pattern: 'مهمة1',
desc: "",
use: '',
category: "",
filename: __filename,
},
async (Void, citel) => {
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.istimara || "false";
    if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل الاستمارات فـالـمـجـمـوعـة");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    return await citel.reply(selectedQuote);
});





const quotess = [
"֎╎. ياتو8 ⟦ ســؤال 🪄 مــفــاجــئ عـام ⟧",
"֎╎200 ⟦ مــســ🎌ــابــقــه ⟧",
"֎╎203 ⟦ نــــقــ🔮ــاش ⟧"

];

cmd({
pattern: 'مهمة2',
desc: "",
use: '',
category: "",
filename: __filename,
},
async (Void, citel) => {
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.istimara || "false";
    if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل الاستمارات فـالـمـجـمـوعـة");
    const randomIndexx = Math.floor(Math.random() * quotess.length);
    const selectedQuotee = quotess[randomIndexx];
    return await citel.reply(selectedQuotee);
});