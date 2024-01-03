const { cmd, sck1, getAdmin, tlang, sleep } = require("../lib/");
//const eco = require('siraj-bank')

//=====================================================================
let deathGame = {};

cmd({
  pattern: "حذف_ديث",
  category: "games",
}, async (Void, m, text) => {
  let id = m.chat.split("@")[0];

  if (deathGame && deathGame[id]) {
    delete deathGame[id];
    m.reply('تم حذف لعبة ديث نوت الحالية في هذه المجموعة.');
  } else {
    m.reply('لا يوجد لعبة ديث نوت قائمة في هذه المجموعة.');
  }
});


cmd({
  pattern: "ديث",
  category: "games",
}, async(Void, citel, text,{ isCreator }) => { // Use async (Void , m,text) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  const groupAdmins = await getAdmin(Void, citel)
  const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
  const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

  if (!(isAdmins || isAllowedUser || isCreator)) {
      return citel.reply(tlang().admin);
  } 
let id = citel.chat.split("@")[0]


if(!deathGame || !deathGame[id]){
  deathGame[id] = {    
  join :true,
  start: false,
  joined: [],
  available :[],
  players: {},
  eliminatedPlayers: [],
  killer:"player",
  word :null,
  chosenWord: "",
  words: ['ناروتو', 'تسونادي', 'لوفي', 'زورو',"ناتسو","روميو","انديفار","كورابيكا"], 
  }
}
//let durationInSeconds = 60; // Set the initial duration
if (!deathGame[id].start) {
  deathGame[id].join = true;
  citel.reply(`لعبة ديث نوت بدأت اكتب "بشارك" للمشاركة`);
  startTimer(citel, id, 20);
} else {
  citel.reply('هناك لعبة قائمة بالفعل!');
}




  /*
  if (!deathGame.isGameActive) {
    startDeathGame(citel);
  } else {

    if (!deathGame.players.includes(citel.sender)) {




      deathGame.players.push(citel.sender);
      const playerNumber = deathGame.players.length;
      citel.reply(`You've joined the Death game as Player ${playerNumber}.`);
      
      if (deathGame.players.length === 2) {
        chooseWordAndStart(citel);
      }
    } else if (!awaitingPlayerNumber) {
      citel.reply(`You've chosen the correct word! Choose a player number for elimination.`);
      awaitingPlayerNumber = true; 
    }
  }
  */
});



cmd({ on: "text" } , async (Void , citel) => {  // Use  async (Void , citel,text) => {




    if(citel.isBot) return

  let id = citel.chat.split("@")[0] 
  let senderNum = citel.sender.split("@")[0];
// ============== / Joinening people in game

const registeredUser = await sck1.findOne({ id: citel.sender });
let registeredName = registeredUser ? registeredUser.name : "دون لقب";

if(citel.text.toLowerCase() === "بشارك" && deathGame[id] && deathGame[id].join &&  !deathGame[id].available.includes(citel.sender)){
  deathGame[id].joined.push(citel.sender)
  deathGame[id].available.push(citel.sender)
  deathGame[id].players[deathGame[id].joined.length] = citel.sender;
  return await citel.reply(`اللاعب ${registeredName} دخل!\nرقمك هو *"${deathGame[id].joined.length}"*`,{mentions:[citel.sender]})
} 

if(!deathGame[id] || !deathGame[id].available.includes(citel.sender))return  
// ============== / first one wjho collect word 
if(deathGame[id] && deathGame[id].start && deathGame[id].word && deathGame[id].word === citel.text.toLowerCase()){
  deathGame[id].killer = citel.sender;
  deathGame[id].word= null


  let str = `⊹⊱≼━━━⌬〔الــديـــث 📓 نــــــوت〕⌬━━━≽⊰⊹\n\nشسمه ${registeredName} انت الحين قاتل!\n*اكتب رقم اللاعب الذي تريد طرده*\n\n֎╎الـمــشـــاركــيـن 🤺\n\n`, mentions = [];
  for (let index in deathGame[id].players) {
    if (deathGame[id].players[index] !== citel.sender) {
      const playerName = deathGame[id].players[index];
      const registeredUser = await sck1.findOne({ id: playerName });
      const playerNameToMention = registeredUser ? registeredUser.name : "دون لقب";
  
      mentions.push(playerName);
      str += `${index} - ⊑ ${playerNameToMention} ⊒ \n`;
    }
  }
  
  await citel.reply(`${str.trim()}\n\n⊹⊱≼━━━⌬〔🌗〕⌬━━━≽⊰`.trim(), { mentions: [citel.sender, ...mentions] }); 
}
// ============== / action for killer 
else if(deathGame[id] && deathGame[id].start && deathGame[id].killer === citel.sender){
 
    var text = citel.text
    let num = parseInt(text) || false
  if(num && !isNaN(num) && deathGame[id].players[num] && deathGame[id].players[num]!==citel.sender  ){
        const targetUser = deathGame[id].players[num];
    const registeredUser1 = await sck1.findOne({ id: targetUser });
    const registeredName1 = registeredUser ? registeredUser1.name : "دون لقب";
    await citel.reply(` ${registeredName1} مطرود من  ${registeredName} !`,
    {mentions:[citel.sender,deathGame[id].players[num]]})
  

    let playerIdToRemove = deathGame[id].players[num];
    if (deathGame[id].available.includes(playerIdToRemove)) {
      deathGame[id].available = deathGame[id].available.filter(playerId => playerId !== playerIdToRemove);
    }


    deathGame[id].eliminatedPlayers.push(deathGame[id].players[num])
    delete deathGame[id].players[num]

    sleep(5000)
 if(deathGame[id].available.length <=1 ){
  let ppp = [...deathGame[id].joined]
  delete deathGame[id]
  citel.reply(` ${registeredName} لقد فزت`,
  {mentions:[citel.sender,...ppp]})

}else {
  let randome = Math.floor(Math.random() * deathGame[id].words.length);
let word = deathGame[id].words[randome];
deathGame[id].word = word;
  citel.send(`تست كتابة :  *${word}* `,{mentions:[...deathGame[id].available]})


}

  }else {
    let str = `⊹⊱≼━━━⌬〔الــديـــث 📓 نــــــوت〕⌬━━━≽⊰⊹\n\nشسمه ${registeredName} انت الحين قاتل!\n*اكتب رقم اللاعب الذي تريد طرده*\n\n֎╎الـمــشـــاركــيـن 🤺\n\n`, mentions = [];
    for (let index in deathGame[id].players) {
      if (deathGame[id].players[index] !== citel.sender) {
        const playerName = deathGame[id].players[index];
        const registeredUser = await sck1.findOne({ id: playerName });
        const playerNameToMention = registeredUser ? registeredUser.name : "دون لقب";
  
        mentions.push(playerName);
        str += `${index} - ⊑ ${playerNameToMention} ⊒\n`;
      }
    }
  
    await citel.reply(`${str}\n\n⊹⊱≼━━━⌬〔🌗〕⌬━━━≽⊰`, { mentions: [citel.sender, ...mentions] });
  }
  
 



}

})



















async function startTimer(m,id="ناروتو", durationInSeconds=3 , type = "بشارك",pplyers = "1,2") {
  let timer = durationInSeconds || 30;
  let intervalId;
if(type == "بشارك"){
  async function updateTimer() {
    if (timer > 0) {
      timer--;

  // Your existing code
  if (deathGame[id] && deathGame[id].join && (timer == 50  || timer == 15 || timer ==30 || timer == 5)) {
    m.reply(`لقد دخل ${deathGame[id].joined.length} فاللعبة\nباقي ${timer} ثواني حتى يدخلو اكثر\nاكتب "بشارك" للمشاركة`);
  }


      //console.log(`Timer: ${timer}s`);
    } else {
      clearInterval(intervalId);
      if( deathGame[id].joined.length <= 0){
        delete deathGame[id];
        return await m.send(`*ديث نوت تكنسلت لان مافي لاعبين*`)
      }else if(deathGame[id].joined.length <= 1) {
        let pplayer = deathGame[id].joined[0]
        delete deathGame[id];
        return await m.send(`*انتهت لعبة! شسمه ${pplayer.split("@")[0]}, مفي لاعبين*`,{mentions:[pplayer]})
      }




      deathGame[id].join=false
      deathGame[id].start= true

      let str = "", mentios = [];

      for (let index in deathGame[id].players) {
        const playerName = deathGame[id].players[index];
        const registeredUser = await sck1.findOne({ id: playerName });
        const playerNameToMention = registeredUser ? registeredUser.name : "دون لقب";
        
        mentios.push(playerName);
        str += `${index} - ⊑ ${playerNameToMention.split("@")[0]} ⊒\n`;
    //}
      }
   await m.send(`*֎╎الـمــشـــاركــيـن 🤺*
  
${str} 
  
- ديث توت معروفة، اول من يكتب الكلمة الي يرسلها البوت يقدر يقتل احد المشاركين.
  
*الفائز ؟:*
الي يبقى للأخير بيفوز !
  `,{mentions:[...mentios]})

  let randome = Math.floor(Math.random() * deathGame[id].words.length);

await sleep(5000)

let word = deathGame[id].words[randome];
deathGame[id].word = word;
  m.send(`كتابة :  *${word}* `,{mentions:[...mentios]})




    }

   



  }
  intervalId = setInterval(updateTimer, 1000);
}else if (type == "killer"){ /// ignore this code or remove it, coz its unnecesory
  function setkiller() {
    if (timer > 0) {
      timer--;

  // Your existing code
  if (deathGame[id] && deathGame[id].join && (timer == 50  || timer == 15 || timer ==30 || timer == 5)) {
    m.reply(`لقد دخل ${deathGame[id].joined.length} فاللعبة\nباقي  ${timer}ثواني حتى يدخلو اكثر\nاكتب "بشارك" للمشاركة`);
  }



    } else {
      clearInterval(intervalId);
      deathGame[id].join=false
      deathGame[id].start= true
      m.reply("انتهى الوقت");
    }
  }
  intervalId = setInterval(setkiller, 1000);

  
}



}
