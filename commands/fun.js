
const { dare, truth, kt, hal } = require('../lib/truth-dare.js')
const axios = require('axios')
const { cmd, sck } = require('../lib')

//=====================================================================

cmd({
pattern: "ت",
desc: "معروفة ميحتاج شرح",
use: '',
category: "fun",
filename: __filename,
  },
async(Void, citel, text) => {
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.ktt || "false";
    if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل كـت فـالـمـجـمـوعـة\n\nادخل قروب البوت كلشي متوفر فيه اكتب .مساعدة");
    return await citel.reply(`${kt()}`);
        }
    )

//=====================================================================

cmd({
pattern: "هل",
desc: "قدم اسئلة للبوت",
use: '',
category: "fun",
filename: __filename,
  },
async(Void, citel, text) => {
   return await citel.reply(`${hal()}`);
}
)

//=====================================================================

cmd({
pattern: "س",
desc: "البوت يرسل اسئلة أنمي",
use: '',
category: "fun",
filename: __filename,
  },
        async(Void, citel, text) => {
            return await citel.reply(`${truth()}`);
        }
    )

//=====================================================================

cmd({
pattern: "ح",
desc: "البوت يرسل اسئلة عامة",
use: '',
category: "fun",
filename: __filename,
  },
        async(Void, citel, text) => {
            return await citel.reply(`${dare()}`);
        }
    )
//=====================================================================
/*
cmd({
pattern: "معلومة",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text) => {
   const { data } = await axios.get(`https://nekos.life/api/v2/fact`);
   let translatedFact = await translateText(data.fact, 'en', 'ar');
   return citel.reply(`*معلومة:* ${translatedFact}`);
});
async function translateText(text, fromLanguage, toLanguage) {
   const translatte = require("translatte");
   let whole = await translatte(text, {
       from: fromLanguage,
       to: toLanguage,
   });
   return whole.text;
}
*/
//=====================================================================

cmd({
pattern: "عكس",
desc: "عكس اي كلمة",
use: '',
category: "fun",
filename: __filename,
  },
async(Void, citel, text) => {
    if (!text) return citel.reply(`مثال : .عكس جيرايا`)
    flipe = text.split('').reverse().join('')
    citel.reply(`\`\`\`「  عكس الكلمات  」\`\`\`\n*الكلمة الاصليه :*\n${text}\n*العكس حقها :*\n${flipe}`)

}
)

//=====================================================================

cmd({
pattern: "عمري",
desc: "معرفة عمرك بالضبط",
use: '',
category: "fun",
filename: __filename,
  },
async (client, citel, text) => {
    if (!text) {
        return citel.reply("اكتب تاريخ ميلادك مثلا 06-07-2003");
    }

    const birthdate = new Date(text);
    if (isNaN(birthdate.getTime())) {
        return citel.reply("كتبت تاريخ ميلادك بالصيغة الخطأ. مثال : 06-07-2003");
    }

    const currentDate = new Date();
    const ageMilliseconds = currentDate - birthdate;

    const ageInSeconds = Math.floor(ageMilliseconds / 1000);
    const years = Math.floor(ageInSeconds / (60 * 60 * 24 * 365));
    const months = Math.floor((ageInSeconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
    const days = Math.floor((ageInSeconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
    const hours = Math.floor((ageInSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((ageInSeconds % (60 * 60)) / 60);
    const seconds = ageInSeconds % 60;

    const ageText = `${years} سنة, ${months} أشهر, ${days} أيام, ${hours} ساعة, ${minutes} دقيقة, ${seconds} ثانية`;

    citel.reply(`عمرك بالضبط هو : ${ageText}.`);
});

//=====================================================================

  const randomWords = [
    "لو خيروك أن تضرب صديقك كف واحد أو أن تضرب نفسك ثلاثة كفوف.",
    "لو خيروك أن يموت صديقك أو أن تخسر منزلك.",
    "لو خيروك أن تنام على سرير مصنوع من خشب أو أن تنام على سرير مصنوع من ذهب.",
    "لو خيروك أن تقول الحق وتتعرض للمشاكل أو أن تكذب وتحصل على المال.",
    "لو خيروك أن تكون فقير جدًا ولكن صحتك سلمية وجسمك قوي أو أن تكون غني جدًا ولكنك هزيل ومريض.",
    "لو خيروك أن تفقد أسنانك الأمامية أو أن تفقد ابن عمك.",
    "لو خيروك أن لا يحضر أحد عند زواجك، أو أن لا يحضر أحد عند موتك.",
    "لو خيروك أن تعيش في غرفة صغيرة في منزل صغير وبسيط أو أن تعيش بغرفة في قصر كبير جدًا.",
    "لو خيروك أن ترزق بسبعة بنات أو أن لا تُرزق أبدًا بأولاد.",
    "لو خيروك أن تفقد الذاكرة ولكن تعيش مع حبيبك أو أن تبقى ذاكرتك وأن تعيش وحيدًا.",
    "لو خيروك أن تملك القدرة على سماع أفكار حبيبك أو أن تعود بالزمن للخلف.",
    "لو خيروك أن تربح عشر آلاف دولار أو أن تترك حبيبك وتقطع علاقتك به.",
    "لو خيروك أن تصبح مشهورًا ولكن بشرط عدم الزواج من حبيبتك أو أن تتزوج حبيبتك حتى لو بقيت فقيرًا.",
    "لو خيروك أن تموت بمفردك أو أن تموت أنت وحبيبك.",
    "لو خيروك بين زواج زوجك أو وفاته، فماذا تختارين؟",
    "لو خيروكِ بين تمزيق ملابسكِ أو أن تستعيرها فتاة غيرك.",
    "لو خيروكِ بين إنقاذ زوجك أو إنقاذ ابنك.",
    "لو خيروكِ بين الخروج بدون مكياج أو عدم تمشيط شعركِ.",
    "لو خيروكِ بين الجلوس في البيت لمدة سنة كاملة وعدم الخروج منه، أو حرمانك من الجوال لمدة شهر.",
    "لو خيروكِ بين الطبخ أو عزيمتك على المطعم ولكن بشرط تنظيف جدران البيت.",
    "لو خيروكِ أن تتخلي عن طعامك المفضل لمدة شهر كامل أو أن لا تتصلي أو تلتقي بحبيبك لمدة شهر كامل.",
    "لو خيروك بين أن تطبخ أو أن تنظف البيت.",
    "لو خيروك بين السرقة أو الكذب.",
    "لو خيروك بين السفر أو الحب.",
    "لو خيروك بين تعرضك للسرقة أو تعرضك للنصب.",
    "لو خيروك أن تأكل لحم خنزير أو أن تضرب أمك.",
    "لو خيروك بين أمك وأبيك.",
    "لو خيروك بين أن تعترف لأول فتاة تراها في طريقك بأنك تحبها أو أن تمثل أنك مجنون في اجتماع في العمل.",
    "لو خيروك بين نفسك وزوجتك.",
    "لو خيروك بأن تبقى مع حبيبتك مدى الحياة أو أن تبقى مع أختك.",
    "لو خيروك بأن تسافر إلى المالديف رحلة سياحية ولكن تستطيع فقط أن تأخذ معك شخص واحد، فمن تختار؟",
    "لو خيروك أن تشتري هدية باهظة الثمن لأحد أفراد عائلتك فلمن تعطيها؟",
    "لو خيروك بين الحب والمال ماذا تختار؟",
    "لو خيروك بين أن تتزوج شخص تحبه أو أن تتزوج الشخص الذي سيحقق لك أحلامك.",
    "لو خيروك بين أن تأخذ مليون دولار، أو أن تفشي سر أحد أصدقائك.",
    "لو خيروك أن ترقص مع فتاة أمام زوجتك أو حبيبتك أو أن تلبس ملابس فتاة.",
    "لو خيروك أن تكسر صحن أو كأس في زيارة رسمية لأحد الأصدقاء أو أن تشرب كأس ممتلئ من زيت الزيتون.",
    "لو خيروك أن تستغني عن التلفاز أو عن جهازك المحمول.",
    "لو خيروك أن تقرأ والدتك رسائل الواتس آب جميعها أو أن ترمي جوالك من الطابق الثالث.",
    "لو خيروك بين الشخص الذي تحبه أو الشخص الذي يحبك.",
    "لو خيروك أن تكون بلا حواجب أو أن تكون بلا أسنان.",
    "لو خيروك بين النوم على ظهر سفينة في بحر هائج وبين النوم في واحدة من الغابات الكبيرة المظلمة.",
    "لو خيروك بين الحصول على أفضل وأعلى الدرجات في المواد التي تخوض امتحاناتها وبين السفر إلى البلد التي تحلم بالعيش بها.",
    "لو خيروك بين العيش في الطبيعة الجبيلة والأشجار أو العيش في منطقة من المناطق الساحلية على البحر.",
    "لو خيروك بين تحقيق ثلاثة أمنيات في الحياة والتي لا تتعلق باشخاص او أنك تعيش مع ثلاثة أشخاص تفضلهم طوال الحياة.",
    "لو خيروك بأن تمتلك سرعة الفهد في العدو أو ذكاء الثعلب.",
    "لو خيروك في الحصول على أفضل وأعلى الدرجات في المواد التي تخوض امتحاناتها وبين السفر إلى البلد التي تحلم بالعيش بها.",
    "لو خيروك بين العيش في الطبيعة الجبيلة والأشجار أو العيش في منطقة من المناطق الساحلية على البحر.",
    "لو خيروك بين تحقيق ثلاثة أمنيات في الحياة والتي لا تتعلق باشخاص او أنك تعيش مع ثلاثة أشخاص تفضلهم طوال الحياة.",
    "لو خيروك بأن تمتلك سرعة الفهد في العدو أو ذكاء الثعلب.",
    "لو خيروك في الحصول على أفضل وأعلى الدرجات في المواد التي تخوض امتحاناتها وبين السفر إلى البلد التي تحلم بالعيش بها.",
    "لو خيروك بين العيش في الطبيعة الجبيلة والأشجار أو العيش في منطقة من المناطق الساحلية على البحر.",
    "لو خيروك بين تحقيق ثلاثة أمنيات في الحياة والتي لا تتعلق باشخاص او أنك تعيش مع ثلاثة أشخاص تفضلهم طوال الحياة.",
    "لو خيروك بين القدرة على الطيران بدون أدوات أو القدرة على التخفي بين الناس.",
    "لو خيروك بين العيش في الماضي أو العيش في المستقبل ورؤية ما سيحدث في تلك الفترة.",
    "لو خيروك بين الحصول على 10 ملايين دولار أو بين 10 ملايين لحظة صادقة وحقيقية من السعادة مع من حولك.",
    "لو خيروك بين تناول الخضروات والفاكهة فقط طوال الحياة أو أن تتناول اللحوم بكافة أنواعها طوال الحياة.",
    "لو خيروك بين رؤية الأشباح والعيش معهم أو سماع صوتهم من حولك والعيش معهم.",
    "لو خيروك بين العودة بالزمن إلى الماضي والتعرف على البعض من جديد أو بين سماع أفكار الناس من حولك.",
    "أو لو خيروك بين العيش بدون ذاكرة مع الأهل والأصدقاء أو أن تعيش بذاكرتك وحيدًا وبعيدًا عن كل ما تحب في الحياة.",
    "لو خيروك بين العيش في جزيرة بعيدة عن الأهل والأصدقاء على أن يكون لديك كافة وسائل الراحة والرفاهية، أو أن تعيش في مكان قديم بدون وسائل الراحة ولكن مع الأهل والأصدقاء."
  ];
  
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    return randomWords[randomIndex];
  }
  
cmd({
pattern: "لو",
desc: "البوت يرسل اسئلة لو خيروك",
use: '',
category: "fun",
filename: __filename,
  }, async (Void, citel, text) => {
    const randomWord = getRandomWord();
    citel.reply(`الاسئلة مأخوذة من موقع : \n ❀ - ${randomWord}`);
  });
  
  //=====================================================================