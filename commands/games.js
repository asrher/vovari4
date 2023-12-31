const { cmd, getAdmin, tlang } = require("../lib/");
const eco = require('siraj-bank')

//=====================================================================

cmd({
    pattern: "de",
    category: "games",
  }, async (Void , m,text) => { // Use async (Void , m,text) => {
  let id = m.chat.split("@")[0]
  
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
    words: ['mama', 'baba', 'nana', 'gaga',"suhail","siraj","md","cute"], 
    }
  }
  //let durationInSeconds = 60; // Set the initial duration
  deathGame[id].join = true
  m.reply("game started, type 'Join' to enter in game")
  startTimer(m,id, 60);
  
  
  
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
  
  
  
  cmd({ on: "text" } , async (Void , m,text) => {  // Use  async (Void , citel,text) => {
  if(citel.isBot) return
  
    let id = citel.chat.split("@")[0] 
  // ============== / Joinening people in game
  if(text.toLowerCase() === "join" && deathGame[id] && deathGame[id].join &&  !deathGame[id].available.includes(citel.sender)){
    deathGame[id].joined.push(citel.sender)
    deathGame[id].available.push(citel.sender)
    deathGame[id].players[deathGame[id].joined.length] = citel.sender;
    return await citel.reply(`Player @${citel.senderNum} Joined!\nYou'r number is *"${deathGame[id].joined.length}"*`,{mentions:[citel.sender]})
  } 
  
  if(!deathGame[id] || !deathGame[id].available.includes(citel.sender))return  
  // ============== / first one wjho collect word 
  if(deathGame[id] && deathGame[id].start && deathGame[id].word && deathGame[id].word === text.toLowerCase()){
    deathGame[id].killer = citel.sender;
    deathGame[id].word= null
  
    let str = "ID:  PLAYER\n",mentios = [];
    for(let index in deathGame[id].players){
  if(deathGame[id].players[index] !== citel.sender){
      mentios.push(deathGame[id].players[index])
    str +=` ${index} : @${deathGame[id].players[index].split("@")[0]}\n`
  }
    }
   await citel.reply(`Hey @${citel.senderNum} you're now Killer!
  
  ${str.trim()} 
  
  Enter ID of player to eleminate from game!
   `.trim(),{mentions:[citel.sender,...mentios]})
  }
  
  // ============== / action for killer 
  else if(deathGame[id] && deathGame[id].start && deathGame[id].killer === citel.sender){
    let num = parseInt(text) || false
    if(num && !isNaN(num) && deathGame[id].players[num] && deathGame[id].players[num]!==citel.sender  ){
      await citel.reply(`Hey @${deathGame[id].players[num].split("@")[0]} you're Killed by @${citel.senderNum}!`,
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
    citel.reply(`Hurray @${citel.sender.split("@")[0]} you're the winner of Game!`,
    {mentions:[citel.sender,...ppp]})
  
  }else {
    let randome = Math.floor(Math.random() * deathGame[id].words.length);
  let word = deathGame[id].words[randome];
  deathGame[id].word = word;
    citel.send(`Here's the another word :  ${word} `,{mentions:[...deathGame[id].available]})
  
  
  }
  
    }else {
      let str = "",mentios = [];
      for(let index in deathGame[id].players){
    if(deathGame[id].players[index] !== citel.sender){
        mentios.push(deathGame[id].players[index])
      str += `${index} : @${deathGame[id].players[index].split("@")[0]}\n`
    }
      }
  
     citel.reply(`Hey @${citel.senderNum}, please enter id of any following player to eleminate from game!
    
    ${str} `,{mentions:[citel.sender,...mentios]})
    }
   
  
  
  
  }
  
  })
  
  
  
  
  
  
  async function startTimer(m,id="suhail", durationInSeconds=3 , type = "join",pplyers = "1,2") {
    let timer = durationInSeconds || 30;
    let intervalId;
  if(type == "join"){
    async function updateTimer() {
      if (timer > 0) {
        timer--;
  
    // Your existing code
    if (deathGame[id] && deathGame[id].join && (timer == 50  || timer == 15 || timer ==30 || timer == 5)) {
      m.reply(`There are ${deathGame[id].joined.length} joined\nStill have ${timer}s to join in the game!\nType _Join to enter the game_`);
    }
  
  
        //console.log(Timer: ${timer}s);
      } else {
        clearInterval(intervalId);
        if( deathGame[id].joined.length <= 0){
          delete deathGame[id];
          return await m.send(`*Death Game Terminated! There's no player joined in game!*`)
        }else if(deathGame[id].joined.length <= 1) {
          let pplayer = deathGame[id].joined[0]
          delete deathGame[id];
          return await m.send(`*Death Game Terminated! Hey @${pplayer.split("@")[0]}, player requirement not be fullfilled!*,{mentions:[pplayer]}`)
        }
  
  
  
  
        deathGame[id].join=false
        deathGame[id].start= true
  
        let str = "",mentios = [];
  
        for(let index in deathGame[id].players){
          mentios.push(deathGame[id].players[index])
        str += `${index} : @${deathGame[id].players[index].split("@")[0]}\n` 
      //}
        }
     await m.send(`LIST OF PLAYERS WHO JOINED GAME!
    
  ${str} 
    
  TASK?:
    Bot sends a randome word in chat!
    and player needs to copy and sent the word in chat at first!
    then he/she is a killer and able to eleminate a player from game!
    
  WINNER?:
    player who stays till end of game is a winner!
    `,{mentions:[...mentios]})
  
    let randome = Math.floor(Math.random() * deathGame[id].words.length);
  
  await sleep(5000)
  
  let word = deathGame[id].words[randome];
  deathGame[id].word = word;
    m.send(`Here's the word :  ${word} `,{mentions:[...mentios]})
  
  
  
  
      }
  
     
  
  
  
    }
    intervalId = setInterval(updateTimer, 1000);
  }else if (type == "killer"){ /// ignore this code or remove it, coz its unnecesory
    function setkiller() {
      if (timer > 0) {
        timer--;
  
    // Your existing code
    if (deathGame[id] && deathGame[id].join && (timer == 50  || timer == 15 || timer ==30 || timer == 5)) {
      m.reply(`There are ${deathGame[id].joined.length} joined\nStill have ${timer}s to join in the game!\nType _Join to enter the game_`);
    }
  
  
  
      } else {
        clearInterval(intervalId);
        deathGame[id].join=false
        deathGame[id].start= true
        m.reply("Timer reached 0. Do something here.");
      }
    }
    intervalId = setInterval(setkiller, 1000);
  
    
  }
  
  
  
  }
















//=====================================================================

cmd(
 {
pattern: "حذف_اكس",
desc: "",
use: '',
category: "",
filename: __filename,
 },
 async (Void,citel,text,{isCreator}) => {
       if (!citel.isGroup) return citel.reply(tlang().group);
       const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
       const participants = citel.isGroup ? await groupMetadata.participants : "";
       const groupAdmins = await getAdmin(Void, citel)
       const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
       if(!isAdmins && !isCreator) return citel.reply('هذا الامر خاص بالمشرفين او المطور')
        this.game = this.game ? this.game : false
        if (
       Object.values(this.game).find(
         (room) =>
           room.id.startsWith("اكس او")
       )
     ) {
       delete this.game
       return citel.reply(`تم حذف الجولة`);
       } else {
             return citel.reply(`ما في جولة اصلا`)
                   
       }
 })
 
 //=====================================================================

cmd(
 {
pattern: "اكس_او",
desc: "لعب اكس او مع خويك",
use: '',
category: "game",
filename: __filename,
 },
 async (Void,citel,text) => {
   if (!citel.isGroup) return citel.reply(tlang().group);
   let {prefix} = require('../lib')
   {
     let TicTacToe = require("../lib/ttt");
     this.game = this.game ? this.game : {};
     if (
       Object.values(this.game).find(
         (room) =>
           room.id.startsWith("اكس او") &&
           [room.game.playerX, room.game.playerO].includes(citel.sender)
       )
     )
       return citel.reply("اللعبة جارية بالفعل");
     let room = Object.values(this.game).find(
       (room) =>
         room.state === "WAITING" && (text ? room.name === text : true)
     );
     if (room) {
       room.o = citel.chat;
       room.game.playerO = citel.sender || citel.mentionedJid[0] 
       room.state = "PLAYING";
       let arr = room.game.render().map((v) => {
         return {
           X: "❌",
           O: "⭕",
           1: "1️⃣",
           2: "2️⃣",
           3: "3️⃣",
           4: "4️⃣",
           5: "5️⃣",
           6: "6️⃣",
           7: "7️⃣",
           8: "8️⃣",
           9: "9️⃣", 
         }[v];
       });
       let str = `
${room.id}

${arr.slice(0, 3).join("  ")}
${arr.slice(3, 6).join("  ")}
${arr.slice(6).join("  ")}

دورك @${room.game.currentTurn.split("@")[0]}
`;

       return await Void.sendMessage(citel.chat, {
         text: str,
         mentions: [room.game.currentTurn],
       });
     } else {
       room = {
         id: "اكس او- " + +new Date(),
         x: citel.chat,
         o: "",
         game: new TicTacToe(citel.sender, "o"),
         state: "WAITING",
       };
       if (text) room.name = text;
       citel.reply("ننتظر يجي لاعب اخر، اكتب .اكس_او للمشاركة ");
       this.game[room.id] = room;
     }
   }
 }
);

cmd(
 {
   on: "text"
 },
 async (Void,citel,text) => {
   if(!citel.isGroup) return
   let {prefix} = require('../lib')
   this.game = this.game ? this.game : {};
   let room = Object.values(this.game).find(
     (room) =>
       room.id &&
       room.game &&
       room.state &&
       room.id.startsWith("اكس او") &&
       [room.game.playerX, room.game.playerO].includes(citel.sender) &&
       room.state == "PLAYING"
   );

   if (room) {
     let ok;
     let isWin = !1;
     let isTie = !1;
     let isSurrender = !1;
     if (!/^([1-9]|(me)?استسلم)$/i.test(citel.text)) return;
     isSurrender = !/^[1-9]$/.test(citel.text);
     if (citel.sender !== room.game.currentTurn) {
       if (!isSurrender) return !0;
     }
     if (
       !isSurrender &&
       1 >
         (ok = room.game.turn(
           citel.sender === room.game.playerO,
           parseInt(citel.text) - 1
         ))
     ) {
       citel.reply(
         {
           "-3": "انتهت اللعبة.",
           "-2": "غير صالح",
           "-1": "موقف غير صحيح",
           0: "موقف غير صحيح",
         }[ok]
       );
       return !0;
     }
     if (citel.sender === room.game.winner) isWin = true;
     else if (room.game.board === 511) isTie = true;
     let arr = room.game.render().map((v) => {
       return {
         X: "❌",
         O: "⭕",
         1: "1️⃣",
         2: "2️⃣",
         3: "3️⃣",
         4: "4️⃣",
         5: "5️⃣",
         6: "6️⃣",
         7: "7️⃣",
         8: "8️⃣",
         9: "9️⃣",
       }[v];
     });
     if (isSurrender) {
       room.game._currentTurn = citel.sender === room.game.playerX;
       isWin = true;
     }
     let winner = isSurrender ? room.game.currentTurn : room.game.winner;
     let str = ` ${room.id}
     
${arr.slice(0, 3).join("  ")}
${arr.slice(3, 6).join("  ")}
${arr.slice(6).join("  ")}
${
 isWin
   ? `@${winner.split("@")[0]} فاز/ت 🎖️`
   : isTie
   ? `تعادل ، كفو لثنين 👏`
   : `دورك ${["❌", "⭕"][1 * room.game._currentTurn]} @${
       room.game.currentTurn.split("@")[0]
     }`
}
⭕:- @${room.game.playerO.split("@")[0]}
❌:- @${room.game.playerX.split("@")[0]}`;

     if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== citel.chat)
       room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = citel.chat;
       if(isWin){
//await eco.give(citel.sender, "JEJE", 2000);
       }
       if (isWin || isTie) {
        await Void.sendMessage(citel.chat, {
          text: str,
          mentions: [room.game.playerO,room.game.playerX],
        });
      } else {
        await Void.sendMessage(citel.chat, {
          text: str,
          mentions: [room.game.playerO,room.game.playerX],
        });
      }
      if (isTie || isWin) {
        delete this.game[room.id];
      }
    }
  }
);

//=====================================================================
