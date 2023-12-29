const { cmd, sck1, sck , tlang, getAdmin } = require('../lib');

const mathQuizCaptions = {
  onStart: "*🧮 تـم بـدأ لـعبـة الـريـاضـيـات 🧮*\n\nاللاعب: @$player\nحساب: $num1 + $num2\n\nبدأت اللعبة معك 3 فرص و 30 ثانية",
  onTimeOut: "*🧮 لقد انتهى الوقت ⌛*\nاللاعب: @$player\nلم تجب في الوقت المحدد.\nالجواب الصحيح كان: $correctAnswer",
  onWrongAns: "*❌ الجواب خطأ ❌*\nاللاعب: @$player\nتبقى لك $remainingAttempts فرص، حاول مرة أخرى.",
  onWinGame: "*🧮 لقد فزت في اللعبة 🧮*\nاللاعب: @$player\nحساب: $num1 + $num2 = $correctAnswer\nعدد المحاولات قبل الفوز: $attempts\n+1 نقطة لك"
};

let MathQuizData = {};

// Function to award points to the user
async function awardPointsToUser(userId, points) {
  // Replace this with your actual code to save and update points in your database
  const user = await sck1.findOne({ id: userId });

  if (user) {
    user.points += points;
    await user.save();
  }
}

// Define timer duration
const timerDuration = 30; // seconds

// Function to handle quiz time-out
function mathQuizTimeout(message, match) {
  const mathData = MathQuizData[match.sender];

  if (mathData) {
    message.sendMessage(match.chat, {
      text: mathQuizCaptions.onTimeOut
        .replace('$player', match.sender.split('@')[0])
        .replace('$correctAnswer', mathData.correctAnswer),
      mentions: [match.sender]
    });

    delete MathQuizData[match.sender];
  }
}

cmd({
pattern: 'رياضيات',
desc: "لعبة الحسب",
use: '',
category: "game",
filename: __filename,
}, async (message, match) => {
  const num1 = Math.floor(Math.random() * 1000);
  const num2 = Math.floor(Math.random() * 1000);
  const correctAnswer = num1 + num2;

  MathQuizData[match.sender] = {
    player: match.sender,
    num1: num1,
    num2: num2,
    correctAnswer: correctAnswer,
    attempts: 0
  };

  const quizMessage = mathQuizCaptions.onStart
    .replace('$player', match.sender.split('@')[0])
    .replace('$num1', num1)
    .replace('$num2', num2);

  await message.sendMessage(match.chat, {
    text: quizMessage,
    mentions: [match.sender]
  });

  MathQuizData[match.sender].timer = setTimeout(() => {
    mathQuizTimeout(message, match);
  }, timerDuration * 1000);
});

cmd({
  on: 'text'
}, async (message, match) => {
  const mathData = MathQuizData[match.sender];

  if (!mathData) return;

  const userAnswer = parseInt(match.text);

  if (!isNaN(userAnswer)) {
    clearTimeout(mathData.timer);

    mathData.attempts++;

    if (userAnswer === mathData.correctAnswer) {
      const winMessage = mathQuizCaptions.onWinGame
        .replace('$player', match.sender.split('@')[0])
        .replace('$num1', mathData.num1)
        .replace('$num2', mathData.num2)
        .replace('$correctAnswer', mathData.correctAnswer)
        .replace('$attempts', mathData.attempts);

      await message.sendMessage(match.chat, {
        text: winMessage,
        mentions: [match.sender]
      });

      // Award 1 point to the user for winning
      awardPointsToUser(match.sender, 1);

      delete MathQuizData[match.sender];
    } else {
      if (mathData.attempts < 3) {
        const remainingAttempts = 3 - mathData.attempts;
        const tryAgainMessage = mathQuizCaptions.onWrongAns
          .replace('$player', match.sender.split('@')[0])
          .replace('$remainingAttempts', remainingAttempts);

        await message.sendMessage(match.chat, {
          text: tryAgainMessage,
          mentions: [match.sender]
        });

        mathData.timer = setTimeout(() => {
          mathQuizTimeout(message, match);
        }, timerDuration * 1000);
      } else {
        const loseMessage = `*❌ لقد خسرت في اللعبة ❌*\nالجواب الصحيح كان: ${mathData.correctAnswer}`;
        await message.sendMessage(match.chat, {
          text: loseMessage,
          mentions: [match.sender]
        });
        delete MathQuizData[match.sender];
      }
    }
  }
});
//=====================================================================--------------------

const countries = {
  "الجزائر": "الجزائر",
  "مصر": "القاهرة",
  "ليبيا": "طرابلس",
  "المغرب": "الرباط",
  "تونس": "تونس",
  "البحرين": "المنامة",
  "الكويت": "الكويت",
  "عمان": "مسقط",
  "قطر": "الدوحة",
  "المملكة العربية السعودية": "الرياض",
  "الإمارات العربية المتحدة": "ابوظبي",
  "الاردن": "عمان",
  "فلسطين": "القدس",
  "لبنان": "بيروت",
  "سوريا": "دمشق",
  "تركيا": "انقرة",
  "اليمن": "صنعاء",
  "المانيا": "برلين",
  "النمسا": "فيينا",
  "بلجيكا": "بروكسل",
  "بلغاريا": "صوفيا",
  "كرواتيا": "زغرب",
  "قبرص": "نيقوسيا",
  "جمهورية التشيك": "براغ",
  "الدنمارك": "كوبنهاغن",
  "استونيا": "تالين",
  "فنلندا": "هلسنكي",
  "فرنسا": "باريس",
  "اليونان": "اثينا",
  "هنغاريا": "بودابست",
  "آيسلندا": "ريكيافيك",
  "إيرلندا": "دبلن",
  "إيطاليا": "روما",
  "لاتفيا": "ريغا",
  "ليتوانيا": "فيلنيوس",
  "لوكسمبورغ": "لوكسمبورغ",
  "مالطا": "فاليتا",
  "هولندا": "امستردام",
  "نور سلطان": "نور سلطان",
  "بولندا": "وارسو",
  "البرتغال": "لشبونة",
  "رومانيا": "بوخارست",
  "سلوفاكيا": "براتيسلافا",
  "سلوفينيا": "ليوبليانا",
  "إسبانيا": "مدريد",
  "سويسرا": "بيرن",
  "المملكة المتحدة": "لندن",
  "استراليا": "كانبرا",
  "كندا": "اوتاوا",
  "نيوزيلندا": "ويلينغتون",
  "الولايات المتحدة": "واشنطن",
  "البرازيل": "برازيليا",
  "الصين": "بكين",
  "الهند": "نيودلهي",
  "اليابان": "طوكيو",
  "كوريا الجنوبية": "سيئول",
  "روسيا": "موسكو",
  "جنوب افريقيا": "بريتوريا",
};

const captions = {
  waitTime: 20,
  onStart: "*🌍 تـم بـدأ لـعبـة الـدول و الـعـواصـم 🌍*\n\nاللاعب: @$player\nالسؤال: - ما هي عاصمة *$country*.\n\nبدأت اللعبة معك 3 فرص و $waitTime ثانية",
  onTimeOut: "*🌍 لـقـد خـسـرت فـي الـلـعـبـة 🌍*\n\nاللاعب: @$player\nالسبب : إنتهاء الوقت ⌛.\n\nالجواب:\n عاصمة *$country* هي *$capital*",
  onLimitEnd: "*🌍 لـقـد خـسـرت فـي الـلـعـبـة 🌍*\n\nاللاعب: @$player\nالسبب: انتهت فرصك مع إجابات خاطئة.\n\nالجواب:\n عاصمة *$country* هي *$capital*",
  onWrongAns: "*❌ الـجـواب خـطـأ ❌*\n\nاللاعب: @$player\nتبقى لك *$attempt* فرص، ركز !!!\n\nالوقت المتاح للإجابة هو : *$waitTime.*",
  onWinGame: "*🌍 لـقـد فـزت فـي الـلـعـبـة 🌍*\nاللاعب: @$player\n\nعاصمة *$country* هي *$capital*\nعدد المحاولات قبل للفوز : *$attempt*\n +1 نقطة لك"
};

// Function to award points to the user
async function awardPointsToUser(userId, points) {
    // Replace this with your actual code to save and update points in your database
    const user = await sck1.findOne({ id: userId });
  
    if (user) {
      user.points += points;
      await user.save();
    }
  }

let Siraj_Capital = {
  id: '',
  player: '',
  country: '',
  capital: '',
  attempts: 0,
  waitTime: 20,
  preAns: 'previousAnswer',
  timer: ''
};

async function timerFunctions(msg, user, data) {
  await msg.sendMessage(user.chat, {
    text: captions.onTimeOut.replace('$player', data.player.split('@')[0]).replace('$country', data.country).replace('$capital', data.capital),
    mentions: [data.player]
  });
  delete Siraj_Capital[user.sender];
  return;
}

cmd({
pattern: 'عاصمة',
desc: "لعبة الدول وعاصمتها",
use: '',
category: "game",
filename: __filename,
}, async (message, match, group) => {
  const countriesKeys = Object.keys(countries);
  let randomCountry = countriesKeys[Math.floor(Math.random() * countriesKeys.length)];
  let randomCapital = countries[randomCountry];
  console.log('capital :', randomCapital);
  
  let gameData = Siraj_Capital[match.sender];
  if (!gameData) {
    Siraj_Capital[match.sender] = {
      id: match.chat,
      player: match.sender,
      country: randomCountry,
      capital: randomCapital,
      attempts: 0,
      waitTime: captions.waitTime,
      preAns: match.text,
      timer: ''
    };
  }

  let userGameData = Siraj_Capital[match.sender];
  await message.sendMessage(match.chat, {
    text: captions.onStart
      .replace('$player', userGameData.player.split('@')[0])
      .replace('$country', userGameData.country)
      .replace('$waitTime', userGameData.waitTime),
    mentions: [userGameData.player]
  });

  userGameData.timer = setTimeout(() => {
    timerFunctions(message, match, userGameData);
  }, userGameData.waitTime * 1000);
});

cmd({
  on: 'text'
}, async (message, match, group) => {
  const gameData = Siraj_Capital[match.sender];

  if (!gameData) return;

  if (gameData.id === match.chat && gameData.player === match.sender && gameData.preAns !== match.text && !match.isBaileys) {
    gameData.attempts += 1;
    clearTimeout(gameData.timer);
    gameData.preAns = match.text;

    if (match.text.toLowerCase() === gameData.capital.toLowerCase()) {
      await message.sendMessage(match.chat, {
        text: captions.onWinGame
          .replace('$player', gameData.player.split('@')[0])
          .replace('$country', gameData.country)
          .replace('$capital', gameData.capital)
          .replace('$attempt', gameData.attempts),
        mentions: [gameData.player]
      });
            // Award 1 point to the user for winning
            awardPointsToUser(match.sender, 1);
            
      delete Siraj_Capital[match.sender];
    } else {
      if (gameData.attempts < 3) {
        await message.sendMessage(match.chat, {
          text: captions.onWrongAns
            .replace('$player', gameData.player.split('@')[0])
            .replace('$attempt', `${3 - gameData.attempts}`)
            .replace('$waitTime', gameData.waitTime),
          mentions: [gameData.player]
        });
        gameData.timer = setTimeout(() => {
          timerFunctions(message, match, gameData);
        }, gameData.waitTime * 1000);
      } else {
        await message.sendMessage(match.chat, {
          text: captions.onLimitEnd
            .replace('$player', gameData.player.split('@')[0])
            .replace('$country', gameData.country)
            .replace('$capital', gameData.capital),
          mentions: [gameData.player]
        });
        delete Siraj_Capital[match.sender];
      }
    }
  }
});

//=====================================================================--------------------

/*const scrambel = {
  "كيراماا": "اراماكي",
  "يوناكاي": "اكاينو",
  "سونفلا": "الفونس",
  "كيرلا": "الريك",
  "لن": "الن",
  "ركلاو": "والكر",
  "بتويو": "اوبيتو",
  "هيتشواي": "اوتشيها",
  "راوشيمروتوا": "اوروتشيمارو",
  "بوسوا": "اوسوب",
  "جيكوا": "اوكيجي",
  "موا": "اوم",
  "دواردا": "ادوارد",
  "تيجوينو": "نيوجيت",
  "ردوا": "ادورد",
  "كيرلا": "الريك",
  "نيرا": "ارين",
  "ريجيي": "ييغر",
  "سوكيا": "اسوكي",
  "ودوهون": "هوندو",
  "سكا": "اكس",
  "كيردا": "دريك",
  "للا": "ال",
  "شياتاي": "ايتاتشي",
  "غيتشيا": "ايتشيغو",
  "ساكوريوك": "كوروساكي",
  "رامويشيتو": "ايتشيمارو",
  "نغي": "غين",
  "تانياه": "ايثان",
  "ودوهون": "هوندو",
  "كويزوا": "ايزوكو",
  "ريوديام": "ميدوريا",
  "شيانيويا": "اينوياشا",
  "لينيا": "اينيل",
  "رانوسكا": "اسكانور",
  "بروميلوتا": "بارتولوميو",
  "بيلوامورتوه": "بارثولوميو",
  "ماوك": "كوما",
  "كوربدا": "باردوك",
  "لباكسا": "باسكال",
  "سيلبا": "باسيل",
  "كوزينه": "هوكينز",
  "كورابا": "باكورا",
  "كورب": "بروك",
  "كورب": "بروك",
  "ليورب": "برولي",
  "نيراب": "بريان",
  "فوردايكر": "كرايفورد",
  "ماسب": "بسام",
  "توبورو": "بوروتو",
  "ميكازوو": "اوزوماكي",
  "يلوب": "بولي",
  "وايويكبا": "بياكويا",
  "كيكوشتي": "كوتشيكي",
  "جيتيبا": "بيجيتا",
  "سوريب": "بيروس",
  "كوسيب": "بيسكو",
  "كابي": "بيكا",
  "كوليبا": "بيكولا",
  "لامبيا": "بيلامي",
  "شاداتا": "تاداشي",
  "داماها": "هامادا",
  "كورايت": "تاكيرو",
  "شيكاتاي": "تاكيشي",
  "راجيتنو": "تانجيرو",
  "مداكوا": "كامادو",
  "شيتاي": "تايتشي",
  "ماجياي": "ياجامي",
  "جارتافلر": "ترافلجار",
  "ول": "لو",
  "كاسترن": "ترانكس",
  "متوتوسو": "تسوتومو",
  "ياكا": "اكاي",
  "بيتشوتس": "تشوبيتس",
  "رشيتوو": "توشيرو",
  "غاتشييتوا": "هيتسوغايا",
  "واكيتومو": "تومواكي",
  "دياراا": "ارايدي",
  "برتشو": "تشوبر",
  "جوراجا": "جاغوار",
  "ولاس": "ساول",
  "راثوجا": "جاوثر",
  "ديوك": "كيدو",
  "زوجو": "جوزو",
  "زوجو": "جوزو",
  "ريموجي": "ميغوري",
  "فيزور": "جوزيف",
  "ستورجا": "جوستار",
  "راموجاج": "جوغرام",
  "شاهفيلد": "هاشفيلد",
  "ناهوج": "جوهان",
  "ياراجي": "جيرايا",
  "نيريج": "جيرين",
  "سوجيس": "جيسوس",
  "سوجروب": "بورجس",
  "كوجي": "جيكو",
  "اريمو": "موريا",
  "زيمجا": "جيمز",
  "كابل": "بلاك",
  "نيجاي": "جيناي",
  "بينيجه": "جينبيه",
  "ماتوداس": "ماتسودا",
  "نوزب": "بونز",
  "نوماي": "ايمون",
  "فوملانغدو": "دوفلامنغو",
  "نادي": "ديان",
  "داريديدا": "ديدارا",
  "جينيد": "دينجي",
  "ودو": "ديو",
  "راندوب": "براندو",
  "ماران": "رانما",
  "توميوسا": "ساوتومي",
  "ورا": "راو",
  "نيرار": "راينر",
  "نوراب": "براون",
  "بور": "روب",
  "شيلوك": "لوتشي",
  "لي روك": "روك لي",
  "هوران": "روهان",
  "شيبيكي": "كيشيبي",
  "زورجين": "نيجزو",
  "جيران": "رينجي",
  "ريابا": "اباراي",
  "كوريو": "ريوك",
  "زاموسا": "زاماسو",
  "فينجزا": "زانجيف",
  "فيز": "زيف",
  "بوسا": "سابو",
  "جيناس": "سانجي",
  "ماياتاس": "سايتاما",
  "نامباس": "سباندام",
  "تيشتس": "ستيتش",
  "راسك": "سكار",
  "ركومس": "سموكر",
  "كوروا اويابس": "سوبارو اوكيا",
  "بوروس بو": "سوبر بو",
  "روسا": "سورا",
  "شينوكاتاي": "تاكينوتشي",
  "كوزاسو": "سوزاكو",
  "جيروكورو": "كوروروجي",
  "زيكي اسوسن": "سوسكي ايزن",
  "كوغو": "غوكو",
  "تيسا": "سيتا",
  "جيروسو": "سوجيرو",
  "تيسو": "سيتو",
  "بيكا": "كايبا",
  "شوريكيه": "سيرخيو",
  "تيساباتا": "باتيستا",
  "كوجنس": "سينجوكو",
  "دوكو شيسني": "سينشي كودو",
  "كاشنك": "شانكس",
  "تشيشيكو": "شوكيتشي",
  "اهانديا": "هانيدا",
  "شوشيتي": "شويتشي",
  "موراكيشو": "شيكامارو",
  "جينيش": "شينجي",
  "كيرايا": "ايكاري",
  "ريموشينو": "شينوموري",
  "شيوسا": "اوشي",
  "راجا": "غارا",
  "نويلداج": "غالدينو",
  "نوج": "غون",
  "سيكرف": "فريكس",
  "ديلج": "غيلد",
  "روسيت": "تيسورو",
  "تاينجا": "غينتا",
  "كاجويم": "كوجيما",
  "ونيجد": "غيندو",
  "كيريا": "ايكاري",
  "فونرا غا": "فان اوغر",
  "زريرف": "فريزر",
  "جيتافورو": "فوجيتورا",
  "سيكوفو": "فوكسي",
  "تانيف": "فيتان",
  "غوريف": "فيرغو",
  "تافيس": "فيستا",
  "لوراخ": "هارلوك",
  "بوريكا": "كاريبو",
  "شيفاندكا": "كافنديش",
  "شيكاكا": "كاكاشي",
  "كاهاتي": "هاتاكي",
  "كوكا": "كاكو",
  "ساوكنك": "كانسوكي",
  "ساناجي": "ناغيسا",
  "تيكويا كادي": "كايتو كيد",
  "ودياوك": "كايدو",
  "كاينيك": "كانيكي",
  "بيكو": "كوبي",
  "جوكي": "كوجي",
  "جوكي": "كوجي",
  "اهانديا": "هانيدا",
  "ريريكون": "كوريرين",
  "زيمويشو روشيكو": "كوشيرو ايزومي",
  "رومي جوروكو": "كوغورو موري",
  "نوناك": "كونان",
  "نوشاواد اياسنيو": "ادوغاوا اينوياشا",
  "روزاكي": "كيزارو",
  "غوكي": "كيغو",
  "نواسا": "اسانو",
  "ريلك": "كيلر",
  "شيبانكيت": "كينباتشي",
  "كيزارا": "زاراكي",
  "شيروكني": "كينشيرو",
  "نيق": "كينق",
  "مونكين": "كينمون",
  "شولول": "لولوش",
  "سيلو": "لويس",
  "فايل": "ليفاي",
  "جدام": "ماجد",
  "جالناما": "ماجيلان",
  "جونيما با": "ماجين بو",
  "داراما": "مادارا",
  "شيتيت": "تيتش",
  "كومار": "ماركو",
  "ريستم 2": "مستر 2",
  "رستم 5": "مستر 5",
  "ناستا": "ساتان",
  "تينوم": "موتين",
  "شيرو": "روشي",
  "نازوم": "موزان",
  "توكيسوجيب": "كيبوتسوجي",
  "غامو": "موغا",
  "ريويا": "ايوري",
  "نوجاموم": "مومونجا",
  "لانود": "نولاند",
  "نوجارد": "دراغون",
  "فيلو": "لوفي",
  "كيتوسمي": "ميتسوكي",
  "هيكوتسومي": "ميتسوهيكو",
  "ياسوراتسوب": "تسوبورايا",
  "نيرليم": "ميرلين",
  "لومي": "ميلو",
  "ليسيودام": "ميليوداس",
  "جيومين": "ميوجين",
  "كياهي": "ياهيكو"
};


const captionssca = {
  waitTime: 20,
  onStart: "*تـم بـدأ لـعبـة الـتـرتـيـب*\n\nاللاعب: @$player\nالسؤال: - رتب *$country*.\n\nبدأت اللعبة معك 3 فرص و $waitTime ثانية",
  onTimeOut: "*لـقـد خـسـرت فـي الـلـعـبـة*\n\nاللاعب: @$player\nالسبب : إنتهاء الوقت ⌛.\n\nالجواب:\n ترتيب  *$country* هو *$capital*",
  onLimitEnd: "*لـقـد خـسـرت فـي الـلـعـبـة*\n\nاللاعب: @$player\nالسبب: انتهت فرصك مع إجابات خاطئة.\n\nالجواب:\n ترتيب  *$country* هو *$capital*",
  onWrongAns: "*❌ الـجـواب خـطـأ ❌*\n\nاللاعب: @$player\nتبقى لك *$attempt* فرص، ركز !!!\n\nالوقت المتاح للإجابة هو : *$waitTime.*",
  onWinGame: "*لـقـد فـزت فـي الـلـعـبـة*\nاللاعب: @$player\n\nترتيب *$country* هو *$capital*\nعدد المحاولات قبل للفوز : *$attempt*"
};

let Siraj_Scra = {
  id: '',
  player: '',
  country: '',
  capital: '',
  attempts: 0,
  waitTime: 20,
  preAns: 'previousAnswer',
  timer: ''
};

async function timerFunctions(msg, user, data) {
  await msg.sendMessage(user.chat, {
    text: captionssca.onTimeOut.replace('$player', data.player.split('@')[0]).replace('$country', data.country).replace('$capital', data.capital),
    mentions: [data.player]
  });
  delete Siraj_Scra[user.sender];
  return;
}

cmd({
pattern: 'ترتيب',
desc: "",
use: '',
category: "",
filename: __filename,
  }, async (message, match, group) => {
  const scrambelKeys = Object.keys(scrambel);
  let randomCountry = scrambelKeys[Math.floor(Math.random() * scrambelKeys.length)];
  let randomCapital = scrambel[randomCountry];
  console.log('capital :', randomCapital);
  
  let gameData = Siraj_Scra[match.sender];
  if (!gameData) {
    Siraj_Scra[match.sender] = {
      id: match.chat,
      player: match.sender,
      country: randomCountry,
      capital: randomCapital,
      attempts: 0,
      waitTime: captionssca.waitTime,
      preAns: match.text,
      timer: ''
    };
  }

  let userGameData = Siraj_Scra[match.sender];
  await message.sendMessage(match.chat, {
    text: captionssca.onStart
      .replace('$player', userGameData.player.split('@')[0])
      .replace('$country', userGameData.country)
      .replace('$waitTime', userGameData.waitTime),
    mentions: [userGameData.player]
  });

  userGameData.timer = setTimeout(() => {
    timerFunctions(message, match, userGameData);
  }, userGameData.waitTime * 1000);
});

cmd({
  on: 'text'
}, async (message, match, group) => {
  const gameData = Siraj_Scra[match.sender];

  if (!gameData) return;

  if (gameData.id === match.chat && gameData.player === match.sender && gameData.preAns !== match.text && !match.isBaileys) {
    gameData.attempts += 1;
    clearTimeout(gameData.timer);
    gameData.preAns = match.text;

    if (match.text.toLowerCase() === gameData.capital.toLowerCase()) {
      await message.sendMessage(match.chat, {
        text: captionssca.onWinGame
          .replace('$player', gameData.player.split('@')[0])
          .replace('$country', gameData.country)
          .replace('$capital', gameData.capital)
          .replace('$attempt', gameData.attempts),
        mentions: [gameData.player]
      });
      delete Siraj_Scra[match.sender];
    } else {
      if (gameData.attempts < 3) {
        await message.sendMessage(match.chat, {
          text: captionssca.onWrongAns
            .replace('$player', gameData.player.split('@')[0])
            .replace('$attempt', `${3 - gameData.attempts}`)
            .replace('$waitTime', gameData.waitTime),
          mentions: [gameData.player]
        });
        gameData.timer = setTimeout(() => {
          timerFunctions(message, match, gameData);
        }, gameData.waitTime * 1000);
      } else {
        await message.sendMessage(match.chat, {
          text: captionssca.onLimitEnd
            .replace('$player', gameData.player.split('@')[0])
            .replace('$country', gameData.country)
            .replace('$capital', gameData.capital),
          mentions: [gameData.player]
        });
        delete Siraj_Scra[match.sender];
      }
    }
  }
})
*/
