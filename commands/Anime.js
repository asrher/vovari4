const axios = require('axios')
const { sck1, tiny, fancytext, listall,cmd,getRandomInt,ffmpeg } = require('../lib/')
const fs = require('fs-extra');
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const { exec } = require("child_process");
const { fromBuffer } = require('file-type');
const { updateProfilePicture, forwardMessage } = require("../lib");
const Config = require('../config')

global.AFK = {
	isAfk: false,
	reason: false,
	lastseen: 0,
};

var _0x378902=_0x287a;(function(_0x4680ec,_0x4d5d0a){var _0x246608=_0x287a,_0x5649b9=_0x4680ec();while(!![]){try{var _0x518f28=-parseInt(_0x246608(0x184))/0x1*(parseInt(_0x246608(0x178))/0x2)+-parseInt(_0x246608(0x175))/0x3*(parseInt(_0x246608(0x18f))/0x4)+parseInt(_0x246608(0x17b))/0x5*(-parseInt(_0x246608(0x183))/0x6)+parseInt(_0x246608(0x182))/0x7*(-parseInt(_0x246608(0x181))/0x8)+-parseInt(_0x246608(0x179))/0x9*(-parseInt(_0x246608(0x170))/0xa)+-parseInt(_0x246608(0x172))/0xb+parseInt(_0x246608(0x187))/0xc*(parseInt(_0x246608(0x17a))/0xd);if(_0x518f28===_0x4d5d0a)break;else _0x5649b9['push'](_0x5649b9['shift']());}catch(_0x54172c){_0x5649b9['push'](_0x5649b9['shift']());}}}(_0x82f6,0x95d36),cmd({'pattern':_0x378902(0x176),'fromMe':!![],'desc':_0x378902(0x186),'category':_0x378902(0x173)},async(_0x55d0ce,_0x288e9e,_0x39c6d0)=>{var _0x3b30d6=_0x378902;if(!global['AFK'])global[_0x3b30d6(0x188)]={};if(!global[_0x3b30d6(0x188)]['isAfk']&&!_0x39c6d0)return await _0x288e9e[_0x3b30d6(0x177)](_0x3b30d6(0x16f));if(!global[_0x3b30d6(0x188)]['isAfk']){if(_0x39c6d0)global['AFK'][_0x3b30d6(0x18c)]=_0x39c6d0;return global[_0x3b30d6(0x188)][_0x3b30d6(0x17e)]=!![],global[_0x3b30d6(0x188)][_0x3b30d6(0x18e)]=Math[_0x3b30d6(0x16d)](new Date()[_0x3b30d6(0x18a)]()/0x3e8),await _0x288e9e[_0x3b30d6(0x177)](_0x39c6d0['replace'](_0x3b30d6(0x180),Math[_0x3b30d6(0x16d)](new Date()['getTime']()/0x3e8)-global[_0x3b30d6(0x188)]['lastseen']));}}),cmd({'pattern':_0x378902(0x17f),'fromMe':!![],'desc':_0x378902(0x185),'category':_0x378902(0x173)},async(_0x155ecc,_0x4fce3e)=>{var _0x286c6e=_0x378902;if(!global[_0x286c6e(0x188)]||!global[_0x286c6e(0x188)][_0x286c6e(0x17e)])return await _0x4fce3e[_0x286c6e(0x177)](_0x286c6e(0x17c));return global[_0x286c6e(0x188)][_0x286c6e(0x17e)]=![],global['AFK'][_0x286c6e(0x18c)]=![],global[_0x286c6e(0x188)][_0x286c6e(0x18e)]=0x0,await _0x4fce3e[_0x286c6e(0x177)](_0x286c6e(0x189));}),cmd({'on':_0x378902(0x16e),'fromMe':![]},async(_0x23f24e,_0x481618,_0x47b467)=>{var _0x34f4c4=_0x378902;if(global[_0x34f4c4(0x188)]&&global['AFK'][_0x34f4c4(0x17e)]){if(_0x481618[_0x34f4c4(0x18d)]&&_0x47b467[_0x34f4c4(0x17d)]('@'+_0x481618[_0x34f4c4(0x171)]()[_0x34f4c4(0x174)]))await _0x481618[_0x34f4c4(0x177)](_0x34f4c4(0x18b)+global[_0x34f4c4(0x188)][_0x34f4c4(0x18c)]);else!_0x481618['isGroup']&&await _0x481618[_0x34f4c4(0x177)](_0x34f4c4(0x18b)+global[_0x34f4c4(0x188)][_0x34f4c4(0x18c)]);}}));function _0x287a(_0x449d12,_0x3f07fd){var _0x82f6d2=_0x82f6();return _0x287a=function(_0x287aef,_0x4e8f46){_0x287aef=_0x287aef-0x16d;var _0x3a43d3=_0x82f6d2[_0x287aef];return _0x3a43d3;},_0x287a(_0x449d12,_0x3f07fd);}function _0x82f6(){var _0xce0be2=['Example:\x20My\x20owner\x20is\x20AFK\x0aLast\x20seen\x20before\x20#lastseen\x0aTo\x20turn\x20off\x20AFK,\x20send\x20a\x20message\x20again.','10UBuREx','getBotInfo','10505341himWUw','watsusi','username','3PIyfun','afk','reply','10964fmvqbW','547389hncKQD','111189zxeKIm','2544935cPaKrC','I\x20am\x20not\x20AFK.','includes','isAfk','delafk','#lastseen','2920552PkKwdt','21wEgrja','6yraRtH','127aQUhkr','turn\x20off\x20away\x20from\x20keyboard','away\x20from\x20keyboard','6156rauQkk','AFK','I\x20am\x20back!','getTime','I\x27m\x20currently\x20AFK.\x20Reason:\x20','reason','isGroup','lastseen','2317540Hrxsnf','round','text'];_0x82f6=function(){return _0xce0be2;};return _0x82f6();}

const antideleteOwners = new Set();

cmd({
  pattern: 'antidelete',
  fromMe: true,
  desc: 'Configure Anti-Delete preferences',
  category: 'admin',
}, async (Void, citel, text) => {
  const args = text.split(' | ');

  if (args.length === 1 && args[0].toLowerCase() === 'off') {
    antideleteOwners.delete(citel.sender.jid);
    return await citel.reply('Anti-Delete turned off.');
  }

  if (args.length === 1 && args[0].toLowerCase() === 'on') {
    antideleteOwners.add(citel.sender.jid);
    return await citel.reply('Anti-Delete turned on. Deleted messages will be sent to you.');
  } else {
    return await citel.reply('Invalid format. Example: antidelete on');
  }
});

cmd({
  on: 'message',
  fromMe: false,
}, async (Void, citel, message) => {
  if (antideleteOwners.size > 0 && citel.key.fromMe === false) {
    antideleteOwners.forEach(async ownerJID => {
      const deletedBy = citel.key.fromMe ? 'you' : citel.key.participant;
      const sentBy = citel.key.fromMe ? 'you' : citel.key.remoteJid;

      const messageText = message.hasOwnProperty('text') ? message.text : 'Non-text message';

      const deletedMessageID = citel.message.id;
      const deletedMessageContent = await Void.getMessageById(deletedMessageID);

      const report = ` *Someone deleted a message!!*\n\n * Deleted by:* _${deletedBy}_\n *✉️ Sent by:* _${sentBy}_\n * *Message text:* \`\`\`${messageText}\`\`\``;

      if (message.hasOwnProperty('image') || message.hasOwnProperty('video') || message.hasOwnProperty('audio')) {
        report += `\n\n*Message media:*\n`;
        for (const media of Object.values(message)) {
          if (media.hasOwnProperty('mimetype')) {
            report += `- ${media.mimetype}\n`;
          }
        }
      }

      await Void.sendMessage(ownerJID, report, citel.message);
    });
  }
});





const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["A. London", "B. Berlin", "C. Paris"],
        correctAnswer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A. Earth", "B. Mars", "C. Venus"],
        correctAnswer: "B"
    },
    {
        question: "The first iPhone was made in what year?",
        options: ["A. 2004", "B. 2007", "C. 2012"],
        correctAnswer: "B"
    },

    {
        question: "WHO IS THE OWNER OF IZUKU?",
        options: ["A. EO", "B. SP", "C. SL"],
        correctAnswer: "A"
    },

    {
        question: "IZUKU IS MADE FROM WHAT LANGUAGE ?",
        options: ["A. NODE", "B. JAVA", "C. REACT"],
        correctAnswer: "A"
    },
    
    {
        question: "martin luther king jnr was who?",
        options: ["A. BLACK LIVES ACTIVIST", "B. CLEANER", "C. PORN ACTOR🤡"],
        correctAnswer: "A"
    },

    {
        question: "how old is excel😕?",
        options: ["A. 21", "B. 15", "C. 17"],
        correctAnswer: "C"
    },

    {
        question: "ANOTHER NAME FOR IZUKU IS?",
        options: ["A. London", "B. Berlin", "C. Paris"],
        correctAnswer: "C"
    },
    
    ];
let currentQuestionIndex = 0;
let userScore = 0;
let quizActive = false; // Add a flag to track if the quiz is active
let incorrectAnswers = []; // Store incorrect answers
const _0x26f3fe=_0x392b;(function(_0x26fdc5,_0x14a606){const _0x35ac69=_0x392b,_0x4aa2dd=_0x26fdc5();while(!![]){try{const _0x524eda=-parseInt(_0x35ac69(0x151))/0x1+parseInt(_0x35ac69(0x165))/0x2*(parseInt(_0x35ac69(0x153))/0x3)+-parseInt(_0x35ac69(0x15e))/0x4+parseInt(_0x35ac69(0x15b))/0x5*(-parseInt(_0x35ac69(0x15f))/0x6)+parseInt(_0x35ac69(0x161))/0x7+-parseInt(_0x35ac69(0x15d))/0x8*(parseInt(_0x35ac69(0x15a))/0x9)+parseInt(_0x35ac69(0x160))/0xa*(parseInt(_0x35ac69(0x168))/0xb);if(_0x524eda===_0x14a606)break;else _0x4aa2dd['push'](_0x4aa2dd['shift']());}catch(_0x1d615f){_0x4aa2dd['push'](_0x4aa2dd['shift']());}}}(_0x5357,0xcbf62),cmd({'pattern':_0x26f3fe(0x158),'info':'Start\x20a\x20quiz\x20game.','category':_0x26f3fe(0x164),'filepath':__filename},async(_0x31f696,_0x2578f0)=>{const _0x256cb6=_0x26f3fe;!quizActive?(userScore=0x0,currentQuestionIndex=0x0,quizActive=!![],incorrectAnswers=[],sendQuestion(_0x2578f0)):_0x2578f0[_0x256cb6(0x154)](_0x256cb6(0x159)+prefix+_0x256cb6(0x163));}));function sendQuestion(_0x39bbe7){const _0x2f29c0=_0x26f3fe;if(currentQuestionIndex<quizQuestions['length']){const _0x3e058d=quizQuestions[currentQuestionIndex],_0x5dfe87=_0x3e058d[_0x2f29c0(0x16a)]+'\x0a'+_0x3e058d['options']['join']('\x0a');_0x39bbe7[_0x2f29c0(0x154)](_0x5dfe87);}else quizActive=![],incorrectAnswers[_0x2f29c0(0x152)]>0x0?_0x39bbe7[_0x2f29c0(0x154)](_0x2f29c0(0x156)+userScore+'/'+quizQuestions[_0x2f29c0(0x152)]+_0x2f29c0(0x157)+incorrectAnswers['join']('\x0a')):_0x39bbe7[_0x2f29c0(0x154)]('[Quiz]\x20completed!\x20Your\x20score:\x20'+userScore+'/'+quizQuestions[_0x2f29c0(0x152)]),currentQuestionIndex=0x0;}function _0x392b(_0x1e059e,_0x5e6790){const _0x53572b=_0x5357();return _0x392b=function(_0x392b90,_0x10fd44){_0x392b90=_0x392b90-0x151;let _0x58eec9=_0x53572b[_0x392b90];return _0x58eec9;},_0x392b(_0x1e059e,_0x5e6790);}function _0x5357(){const _0x837104=['5216744vNWUpS','5131684Ydalnv','1164HdRngM','25804210ogfFdR','9863973bjfvET','resetquiz','delquiz\x20To\x20Abort\x20It_*','games','2082118IJZwuI','Reset\x20and\x20delete\x20the\x20quiz\x20game.','correctAnswer','11saSGDN','push','question','No\x20quiz\x20is\x20currently\x20running.','1661689FSgMxB','length','3aUaRyi','reply','trim','[Quiz]\x20completed!\x20Your\x20score:\x20','\x0aIncorrect\x20Answers:\x0a','startquiz','*_The\x20Quiz\x20Game\x20IS\x20Already\x20Running_*\x0a*_Use\x20','9FEKIyV','15425UoiHAg','toUpperCase'];_0x5357=function(){return _0x837104;};return _0x5357();}cmd({'on':'text'},async(_0x3554fa,_0x5e9ff4)=>{const _0x449905=_0x26f3fe,_0x18b8a1=quizQuestions[currentQuestionIndex];if(_0x18b8a1&&quizActive){const _0x767d21=_0x5e9ff4['text']||'',_0x4fe3ef=_0x767d21[_0x449905(0x155)]()[_0x449905(0x15c)]();(_0x4fe3ef==='A'||_0x4fe3ef==='B'||_0x4fe3ef==='C')&&(_0x4fe3ef===_0x18b8a1[_0x449905(0x167)]?userScore++:incorrectAnswers[_0x449905(0x169)](_0x18b8a1[_0x449905(0x16a)]+'\x20(Your\x20Answer:\x20'+_0x4fe3ef+',\x20Correct\x20Answer:\x20'+_0x18b8a1['correctAnswer']+')'),currentQuestionIndex++,sendQuestion(_0x5e9ff4));}}),cmd({'pattern':_0x26f3fe(0x162),'info':_0x26f3fe(0x166),'category':_0x26f3fe(0x164),'filepath':__filename},async(_0x48d739,_0x3a43a7)=>{const _0x132b33=_0x26f3fe;quizActive?(quizActive=![],currentQuestionIndex=0x0,userScore=0x0,incorrectAnswers=[],_0x3a43a7[_0x132b33(0x154)]('[Quiz]\x20game\x20reset.\x20You\x20can\x20start\x20a\x20new\x20game\x20by\x20using\x20the\x20!quiz\x20command.')):_0x3a43a7[_0x132b33(0x154)](_0x132b33(0x16b));});
 //====================================================================================================
 const flagPairs = [
   { flag: "🇺🇸", country: "United States" },
   { flag: "🇬🇧", country: "United Kingdom" },
   { flag: "🇫🇷", country: "France" },
   { flag: "🇩🇪", country: "Germany" },
   { flag: "🇨🇦", country: "Canada" },
   { flag: "🇦🇺", country: "Australia" },
   { flag: "🇯🇵", country: "Japan" },
   { flag: "🇮🇳", country: "India" },
   { flag: "🇮🇹", country: "Italy" },
   { flag: "🇪🇸", country: "Spain" },
   { flag: "🇷🇺", country: "Russia" },
   { flag: "🇧🇷", country: "Brazil" },
   { flag: "🇨🇳", country: "China" },
   { flag: "🇲🇽", country: "Mexico" },
   { flag: "🇿🇦", country: "South Africa" },
   { flag: "🇰🇷", country: "South Korea" },
   { flag: "🇸🇦", country: "Saudi Arabia" },
   { flag: "🇸🇬", country: "Singapore" },
   { flag: "🇸🇪", country: "Sweden" },
   { flag: "🇨🇭", country: "Switzerland" },
   { flag: "🇦🇷", country: "Argentina" },
   { flag: "🇦🇹", country: "Austria" },
   { flag: "🇧🇪", country: "Belgium" },
   { flag: "🇨🇱", country: "Chile" },
   { flag: "🇨🇴", country: "Colombia" },
   { flag: "🇨🇿", country: "Czech Republic" },
   { flag: "🇩🇰", country: "Denmark" },
   { flag: "🇪🇬", country: "Egypt" },
   { flag: "🇫🇮", country: "Finland" },
   { flag: "🇬🇷", country: "Greece" },
   { flag: "🇭🇺", country: "Hungary" },
   { flag: "🇮🇩", country: "Indonesia" },
   { flag: "🇮🇪", country: "Ireland" },
   { flag: "🇮🇱", country: "Israel" },
   { flag: "🇯🇴", country: "Jordan" },
   { flag: "🇰🇿", country: "Kazakhstan" },
   { flag: "🇱🇧", country: "Lebanon" },
   { flag: "🇲🇾", country: "Malaysia" },
   { flag: "🇲🇻", country: "Maldives" },
   { flag: "🇳🇱", country: "Netherlands" },
   { flag: "🇳🇿", country: "New Zealand" },
   { flag: "🇳🇴", country: "Norway" },
   { flag: "🇵🇰", country: "Pakistan" },
   { flag: "🇵🇱", country: "Poland" },
   { flag: "🇵🇹", country: "Portugal" },
   { flag: "🇶🇦", country: "Qatar" },
   { flag: "🇷🇴", country: "Romania" },
   { flag: "🇷🇸", country: "Serbia" },
 ];

 let currentFlagIndex = 0;
 let score = 0;

 function _0x3c2f(_0x2727bf,_0x1297b5){const _0x44e449=_0x44e4();return _0x3c2f=function(_0x3c2fd5,_0x37b2df){_0x3c2fd5=_0x3c2fd5-0xef;let _0x27d4a1=_0x44e449[_0x3c2fd5];return _0x27d4a1;},_0x3c2f(_0x2727bf,_0x1297b5);}function _0x44e4(){const _0x278dab=['6810WsUPwl','1886892VPsPwv','No\x20flag\x20guessing\x20game\x20is\x20currently\x20running.','length','Moving\x20on\x20to\x20the\x20next\x20flag...','266HBfaJq','7146aeHCBq','country','trim','toLowerCase','\x22\x20is\x20correct!\x20🎉','reply','5796612JYlXiV','1804554JtgCjx','10oihhqF','Guess\x20the\x20country\x20of\x20this\x20flag:\x20','285008zuBuhj','flaganswer','flag','3750244TZWvRa','game','Game\x20over!\x20Your\x20final\x20score\x20is\x20','3127236jJMLBY','Check\x20your\x20answer\x20for\x20the\x20flag\x20guessing\x20game.','Sorry,\x20your\x20answer\x20\x22'];_0x44e4=function(){return _0x278dab;};return _0x44e4();}const _0x2dd397=_0x3c2f;(function(_0x5cd8ab,_0xaf2d41){const _0x70e664=_0x3c2f,_0x2c338d=_0x5cd8ab();while(!![]){try{const _0x42d933=parseInt(_0x70e664(0xfe))/0x1+-parseInt(_0x70e664(0xfa))/0x2+parseInt(_0x70e664(0xf1))/0x3+parseInt(_0x70e664(0xf7))/0x4+parseInt(_0x70e664(0xfd))/0x5*(-parseInt(_0x70e664(0x103))/0x6)+-parseInt(_0x70e664(0x102))/0x7*(-parseInt(_0x70e664(0xf4))/0x8)+parseInt(_0x70e664(0xf0))/0x9*(-parseInt(_0x70e664(0xf2))/0xa);if(_0x42d933===_0xaf2d41)break;else _0x2c338d['push'](_0x2c338d['shift']());}catch(_0x1f8a50){_0x2c338d['push'](_0x2c338d['shift']());}}}(_0x44e4,0xe7eab),cmd({'pattern':_0x2dd397(0xf6),'desc':'Display\x20the\x20next\x20flag.','category':_0x2dd397(0xf8)},(_0x169d28,_0x122723)=>{const _0x3e1deb=_0x2dd397;currentFlagIndex>=flagPairs[_0x3e1deb(0x100)]&&(currentFlagIndex=0x0);const _0x6987d0=flagPairs[currentFlagIndex],_0x375686=addFancyBorder(_0x6987d0['flag']);_0x122723['reply'](_0x3e1deb(0xf3)+_0x375686),currentFlagIndex++;}),cmd({'pattern':_0x2dd397(0xf5),'desc':_0x2dd397(0xfb),'category':_0x2dd397(0xf8)},(_0x3ea272,_0x1625c4,_0x35c5ba)=>{const _0xf2e941=_0x2dd397;if(currentFlagIndex===0x0)return _0x1625c4['reply'](_0xf2e941(0xff));const _0x53d3d7=_0x35c5ba[_0xf2e941(0x105)]()[_0xf2e941(0x106)](),_0x48a12a=flagPairs[currentFlagIndex-0x1],_0xec5831=_0x48a12a[_0xf2e941(0x104)][_0xf2e941(0x106)]();_0x53d3d7===_0xec5831?(_0x1625c4['reply']('Congratulations!\x20Your\x20answer\x20\x22'+_0x35c5ba+_0xf2e941(0x107)),score++):_0x1625c4[_0xf2e941(0xef)](_0xf2e941(0xfc)+_0x35c5ba+'\x22\x20is\x20incorrect.\x20Try\x20again!');_0x1625c4['reply'](_0xf2e941(0x101));if(currentFlagIndex>=flagPairs[_0xf2e941(0x100)]){currentFlagIndex=0x0,_0x1625c4[_0xf2e941(0xef)](_0xf2e941(0xf9)+score+'/'+flagPairs[_0xf2e941(0x100)]+'.'),score=0x0;return;}const _0x490aff=flagPairs[currentFlagIndex],_0x109b6a=addFancyBorder(_0x490aff[_0xf2e941(0xf6)]);_0x1625c4['reply']('Guess\x20the\x20country\x20of\x20this\x20flag:\x20'+_0x109b6a),currentFlagIndex++;}));function addFancyBorder(_0x4384fa){const _0x25e236='•';return''+_0x25e236+_0x4384fa+_0x25e236;}

const teams = {
  team1: { players: [] },
  team2: { players: [] },
};

const gameData = {
  round: 1,
  team1Choice: null,
  team2Choice: null,
};


cmd({
  on: 'text',
  fromMe: false,
}, async (Void, citel, text) => {
  const senderId = citel.sender.split('@')[0];

  if (/(\bjoin\b|\bstart\b|\bplay\b)/i.test(text)) {
    const team1Full = teams.team1.players.length >= 3;
    const team2Full = teams.team2.players.length >= 3;

    if (!team1Full || !team2Full) {
      const targetTeam = team1Full ? 'team2' : 'team1';
      teams[targetTeam].players.push(senderId);
      return citel.reply(`You joined ${targetTeam === 'team1' ? 'Team 1' : 'Team 2'}.`);
    } else {
      return citel.reply('Both teams are full.');
    }
  }
});

cmd({
  pattern: 'rps',
  desc: 'Starts a Rock Paper Scissors game with teams.',
  catergory:'games',
}, async (Void, citel) => {
  if (teams.team1.players.length < 3 || teams.team2.players.length < 3) {
    return citel.reply('Both teams must have at least 3 players to start the game.');
  }

  await citel.reply('Rock Paper Scissors game started with teams!');

  for (let i = 1; i <= 3; i++) {
    await citel.reply(`Round ${i}: Teams, make your choices!`);

    gameData.team1Choice = Math.floor(Math.random() * 3); 
    gameData.team2Choice = Math.floor(Math.random() * 3);

    await citel.reply(`Team 1 chose ${getChoiceName(gameData.team1Choice)}.`);
    await citel.reply(`Team 2 chose ${getChoiceName(gameData.team2Choice)}.`);

    const roundWinner = determineWinner(gameData.team1Choice, gameData.team2Choice);
    if (roundWinner === 'team1') {
      await citel.reply('Team 1 wins this round!');
    } else if (roundWinner === 'team2') {
      await citel.reply('Team 2 wins this round!');
    } else {
      await citel.reply('It\'s a tie!');
    }
  }

  await citel.reply('Rock Paper Scissors game ended.');
});

function getChoiceName(choice) {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[choice];
}

function determineWinner(choice1, choice2) {
  if (choice1 === choice2) {
    return 'tie';
  } else if ((choice1 === 0 && choice2 === 2) || (choice1 === 1 && choice2 === 0) || (choice1 === 2 && choice2 === 1)) {
    return 'team1';
  } else {
    return 'team2';
  }
}



cmd({
    pattern: 'doc',
    desc: "convert media to document",
    react: "🔂",
    category: 'converter'
}, async (Void, citel, match) => {
    match = (match || "converted-media").replace(/[^A-Za-z0-9]/g, '-');
    
    if (!citel.reply_message.image && !citel.reply_message.audio && !citel.reply_message.video) {
        return citel.reply("_*Reply to a video/audio/image message!*");
    }
    
    const media = await citel.reply_message.download();
    const { ext, mime } = await fromBuffer(media);
    
    const document = {
        document: media,
        mimetype: mime,
        fileName: match + "." + ext
    };
    
    return await Void.sendMessage(citel.chat, document, { quoted: citel });
});














const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getRandomStartingLetter() {
  const randomIndex = Math.floor(Math.random() * allLetters.length);
  return allLetters[randomIndex];
}


const wcgData = {
  isGameActive: false,
  countdownSeconds: 44,
  players: [],
  currentTurn: null,
  currentCriteria: { startingLetter: getRandomStartingLetter(), minLetters: 3 },
  totalWords: 0,
};

cmd({
  pattern: 'startwcg',
  desc: 'Starts a Word Chain Game.',
  category: 'games',
}, async (Void, citel) => {
  if (wcgData.isGameActive) {
    return citel.reply('A Word Chain Game is already in progress.');
  }

  wcgData.isGameActive = true;
  wcgData.players = [];
  wcgData.currentTurn = null;
  wcgData.totalWords = 0;

  setTimeout(() => {
    wcgData.currentTurn = getRandomPlayer();
    citel.reply(`👾 wcg starts in ${wcgData.countdownSeconds} seconds ⏳\nType *enter* to play 🙋‍♂️🙋‍♀️\n🧩 🗿\n\n👥 ${wcgData.players.length} players joined.`);
    startNextTurn(citel);
  }, wcgData.countdownSeconds * 1000);
});

function getRandomPlayer() {
  const randomIndex = Math.floor(Math.random() * wcgData.players.length);
  return wcgData.players[randomIndex];
}

function getRandomStartingLetter() {
  const randomIndex = Math.floor(Math.random() * allLetters.length);
  return allLetters[randomIndex];
}

function startNextTurn(citel) {
  wcgData.currentTurn = getRandomPlayer();
  wcgData.currentCriteria = { startingLetter: getRandomStartingLetter(), minLetters: 3 };
  wcgData.totalWords = 0;

  citel.reply(`🌀Turn : ${wcgData.currentTurn}\n⏭Next : @⁨${wcgData.currentTurn}⁩\n🈴Your word must start with *${wcgData.currentCriteria.startingLetter}* and include at least *${wcgData.currentCriteria.minLetters}* letters\n🤾Players remaining : ${wcgData.players.length}/${wcgData.players.length}\n⏳You have *40s* to answer\n📝Total words : ${wcgData.totalWords}`);
}


cmd({
  on: 'text',
  pattern: 'enter',
}, async (Void, citel, text, { from }) => {
  if (!wcgData.isGameActive) {
    return;
  }

  if (wcgData.players.includes(from)) {
    return;
  }

  wcgData.players.push(from);
  citel.reply(`@⁨${from}⁩ Joined 👏`);
});

cmd({
  on: 'text',
  pattern: '',
}, async (Void, citel, text, { from }) => {
  if (!wcgData.isGameActive || from !== wcgData.currentTurn) {
    return;
  }

  const submittedWord = text.trim();

  if (!isValidWord(submittedWord)) {
    return;
  }

  wcgData.totalWords++;
  citel.reply('✅');
  startNextTurn();
});

function isValidWord(word) {
  const { startingLetter, minLetters } = wcgData.currentCriteria;
  return word.startsWith(startingLetter) && word.length >= minLetters;
}
