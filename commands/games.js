const { cmd, getAdmin, tlang } = require("../lib/");
const eco = require('siraj-bank')




//=====================================================================

cmd(
 {
pattern: "de",
desc: "",
use: '',
category: "",
filename: __filename,
 },
 async (m,text,{Void}) => {
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
  
})

















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
