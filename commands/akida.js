const { formatp , formatDate , tlang, botpic,cmd, prefix, runtime,Config , parsedJid ,sleep } = require('../lib')
const axios = require('axios')
const fetch = require('node-fetch');
const speed = require('performance-now')
const API_KEY = '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'


class MemoryGame {
  constructor() {
    this.gridSize = 4;
    this.player1 = "";
    this.player2 = "";
    this.currentPlayer = "";
    this.cards = [];
    this.board = [];
    this.matches = {};
    this.flippedCards = [];
    this.scores = {};
    this.gameStatus = false;
    this.gameEnd = false;
    this.attempts = {};
  }

  startGame(player1, player2) {
    this.player1 = player1;
    this.attempts[this.player1] = 0;
    this.attempts[this.player2] = 0;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.cards = this.createCards();
    this.board = this.createBoard();
    this.matches = {};
    this.flippedCards = [];
    this.scores = {
      [this.player1]: 0,
      [this.player2]: 0,
    };
    this.gameStatus = true;
    this.gameEnd = false;
  }

  createCards() {
    const emojis = ["🔯", "☯️", "♋", "♎", "♓", "☣️", "☢️", "✴️"];
    const cardPairs = emojis.concat(emojis);
    return this.shuffleArray(cardPairs);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  createBoard() {
    const board = [];
    for (let row = 0; row < this.gridSize; row++) {
      const rowArray = [];
      for (let column = 0; column < this.gridSize; column++) {
        rowArray.push("🈲");
      }
      board.push(rowArray);
    }
    return board;
  }

  makeMove(player, row, column) {
    if (!this.gameStatus) {
      return "No game in progress. Start a new game.";
    }
    if (player !== this.currentPlayer) {
      return "It's not your turn.";
    }

    this.attempts[this.currentPlayer]++;

    const card = this.cards[row][column];
    if (this.flippedCards.includes(`${row},${column}`)) {
      return "This card is already flipped. Choose another card.";
    }

    this.flippedCards.push(`${row},${column}`);
    this.board[row][column] = card;

    if (this.flippedCards.length === 2) {
      const [row1, col1] = this.flippedCards[0].split(",");
      const [row2, col2] = this.flippedCards[1].split(",");
      if (this.cards[row1][col1] === this.cards[row2][col2]) {
        this.matches[this.cards[row1][col1]] = true;
        this.flippedCards = [];
        this.scores[this.currentPlayer]++;
        if (this.checkGameResult()) {
          this.gameStatus = false;
          this.gameEnd = true;
          const winner = this.getWinner();
          const scores = this.scores[winner];
          return `Wow! @${winner.split("@")[0]} wins the game!\nTotal Scores: ${scores}`;
        }
        return `${this.displayBoard()}\n\nMatch found! Keep playing.`;
      } else {
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
        this.flippedCards.forEach((card) => {
          const [row, col] = card.split(",");
          this.board[row][col] = "🈲";
        });
        this.flippedCards = [];
        return `${this.displayBoard()}\n\nOops! Not a match. Next turn: @${this.currentPlayer.split("@")[0]}`;
      }
    }

    return this.displayBoard();
  }

  checkGameResult() {
    const totalPairs = Object.keys(this.matches).length;
    return totalPairs === this.gridSize;
  }

  getWinner() {
    let maxScores = 0;
    let winner = "";
    for (const player in this.scores) {
      if (this.scores[player] > maxScores) {
        maxScores = this.scores[player];
        winner = player;
      }
    }
    return winner;
  }

  displayBoard() {
    let boardString = "";
    for (let row = 0; row < this.gridSize; row++) {
      for (let column = 0; column < this.gridSize; column++) {
        boardString += this.board[row][column] + " ";
      }
      boardString += "\n";
    }
    return boardString;
  }
}

const games = {};

cmd(
  {
    pattern: "memory",
    desc: "Starts a Memory Game.",
    filename: __filename,
    category: "game",
  },
  async (Void, citel) => {
    const chatId = citel.chat;
    let game = games[chatId];
    if (game && game.gameStatus) {
      return await citel.reply("A game is already in progress in this chat.");
    }
    if (!game) {
      game = new MemoryGame();
      games[chatId] = game;
    }
    if (!game.player1 || citel.sender === game.player1) {
      game.player1 = citel.sender;
      return await citel.send(
        `*Memory Game Created...*\nPlayer 1: @${game.player1.split("@")[0]}\nWaiting for another player to start the game.`,
        { mentions: [game.player1] }
      );
    } else if (citel.sender !== game.player1) {
      game.player2 = citel.sender;
      game.startGame(game.player1, game.player2);
      return await citel.send(
        `*Memory Game Started!*\nCurrent Turn: @${game.currentPlayer.split("@")[0]}\n\n${game.displayBoard()}`
      );
    }
  }
);

cmd({ on: "text" }, async (Void, citel, text, { isCreator }) => {
  const chatId = citel.chat;
  const game = games[chatId];
  if (!game) return; // No game in progress in this chat

  if (game.gameStatus && game.currentPlayer === citel.sender && citel.text) {
    const move = citel.text;
    const [row, column] = move.split(",");
    if (!isNaN(row) && !isNaN(column)) {
      const result = game.makeMove(citel.sender, parseInt(row) - 1, parseInt(column) - 1);
      if (game.gameEnd) {
        delete games[chatId];
      }
      return await citel.send(result, { mentions: [game.player1, game.player2] });
    }
  }
});




//===============================================
      async function getDateTime() {
        const now = new Date();
        const date = now.toISOString().slice(0, 10);
        const time = now.toLocaleTimeString();
        return { date, time };
      }
///=============================================


/////-------------=========================================-------------------------------
cmd({
        pattern: "advt",
        alias : ["advertisement"],
        category: "Advertisements",
        desc: "Advertise of your Message, by sending it to provided nmbr range.",
        use: '9231844741xx,Your_text_here',
        filename: __filename,
  },
  async(Void, citel, text , { isCreator }) => {
    
    var _0x546b66=_0x6d99;(function(_0x4aedf6,_0x85645){var _0x5de56c=_0x6d99,_0x1fc0a5=_0x4aedf6();while(!![]){try{var _0x1887b5=-parseInt(_0x5de56c(0x126))/0x1*(parseInt(_0x5de56c(0x13b))/0x2)+parseInt(_0x5de56c(0x133))/0x3+-parseInt(_0x5de56c(0x12c))/0x4*(-parseInt(_0x5de56c(0x130))/0x5)+parseInt(_0x5de56c(0x13d))/0x6*(-parseInt(_0x5de56c(0x137))/0x7)+parseInt(_0x5de56c(0x127))/0x8*(-parseInt(_0x5de56c(0x141))/0x9)+-parseInt(_0x5de56c(0x12b))/0xa*(-parseInt(_0x5de56c(0x138))/0xb)+-parseInt(_0x5de56c(0x12e))/0xc*(-parseInt(_0x5de56c(0x136))/0xd);if(_0x1887b5===_0x85645)break;else _0x1fc0a5['push'](_0x1fc0a5['shift']());}catch(_0x23cb67){_0x1fc0a5['push'](_0x1fc0a5['shift']());}}}(_0x3269,0x80b58));function _0x3269(){var _0x1013d3=['7796aOCJuI','\x20chats_*\x0a\x09Last_User:\x20','54924iTqsnG','send','1395ZHSrEo','sendMessage','\x0a\x0a\x0a','93lnXNPN','split','*You\x20did\x20not\x20add\x20x\x20in\x20number.*\x0a*Ex:\x20','3263CzGzQA','2136309CczQyf','11njyZoM','reply','onWhatsApp','482186mkVxwm','*Only\x203(x)\x20are\x20Allowed\x20in\x20number*','18qbbJwg','*Advertise\x20of\x20your\x20Message*\x0a*by\x20sending\x20it\x20to\x20provided\x20nmbr\x20range.*\x0a','*Invalid\x20format.\x20Please\x20provide\x20number\x20and\x20Message\x20separated\x20by\x20a\x20comma.*','@s.whatsapp.net','2332305jbDqMa','caption','*_Advertisement\x20of\x20your\x20Message\x20is\x20Done,_*\x0a\x0a*_Message\x20Succesfully\x20sent\x20to\x20','length','\x20number\x20seached\x0a\x0a\x0a','trim','advt\x209231844741xx,Your_Message_here*\x20\x20\x0a\x20','*Sending\x20message\x20to\x20given\x20number\x20range.!*\x0a*It\x20may\x20take\x20some\x20time,\x20so\x20wait\x20please*\x0a\x0a','3fcvhXf','16iPuEMV','slice','advt\x209231844741xx,Your_text_here','owner','9916930xuFSft'];_0x3269=function(){return _0x1013d3;};return _0x3269();}if(!isCreator)return citel[_0x546b66(0x139)](tlang()[_0x546b66(0x12a)]);if(!text)return await citel[_0x546b66(0x139)](_0x546b66(0x13e)+prefix+_0x546b66(0x129));const commaIndex=text['indexOf'](',');if(commaIndex===-0x1)return await citel['send'](_0x546b66(0x13f));let inputnumber=''+text['slice'](0x0,commaIndex)[_0x546b66(0x123)](),msg=text[_0x546b66(0x128)](commaIndex+0x1)[_0x546b66(0x123)]()+_0x546b66(0x132)+Config['caption'];if(!inputnumber['includes']('x'))return citel[_0x546b66(0x12f)](_0x546b66(0x135)+prefix+_0x546b66(0x124)+Config['caption']);await citel[_0x546b66(0x12f)](_0x546b66(0x125)+Config[_0x546b66(0x142)]);function countInstances(_0x7c80f4,_0x1b4edc){var _0x3be017=_0x546b66;return _0x7c80f4[_0x3be017(0x134)](_0x1b4edc)[_0x3be017(0x144)]-0x1;}var number0=inputnumber['split']('x')[0x0],number1=inputnumber[_0x546b66(0x134)]('x')[countInstances(inputnumber,'x')]?inputnumber[_0x546b66(0x134)]('x')[countInstances(inputnumber,'x')]:'',random_length=countInstances(inputnumber,'x'),randomxx;if(random_length==0x1)randomxx=0xa;else{if(random_length==0x2)randomxx=0x64;else{if(random_length==0x3)randomxx=0x3e8;else{if(random_length>0x3)return await citel[_0x546b66(0x12f)](_0x546b66(0x13c));}}}let count=0x0,sents='';var last_user='';function _0x6d99(_0x3cfdc9,_0x4be972){var _0x3269f3=_0x3269();return _0x6d99=function(_0x6d9996,_0x2ee1a1){_0x6d9996=_0x6d9996-0x123;var _0x183fea=_0x3269f3[_0x6d9996];return _0x183fea;},_0x6d99(_0x3cfdc9,_0x4be972);}for(let i=0x0;i<randomxx;i++){var anu=await Void[_0x546b66(0x13a)](''+number0+i+number1+_0x546b66(0x140));if(anu[0x0]){last_user=anu[0x0]['jid'];if(sents['includes'](last_user))continue;await sleep(0x5dc),await Void[_0x546b66(0x131)](last_user,{'text':msg}),sents=sents+','+last_user,count+=0x1;}}return await citel[_0x546b66(0x12f)](_0x546b66(0x143)+count+_0x546b66(0x12d)+last_user[_0x546b66(0x134)]('@')[0x0]+'\x0a\x09Search_No:\x20'+randomxx+_0x546b66(0x145)+Config['caption']);
  
})




////=======================================================
const sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg = {}
let isAnnonyMsgAlive = '';
let cmdName = 'rcg';



const _0x2b42ca=_0x59a4;function _0x5b2c(){const _0x16b3fd=['info','2945100QotfTw','sᴜʜᴀɪʟ-ᴍᴅ\x20•\x20ᴀɴɴᴏɴʏᴍᴏᴜs\x20ᴍsɢ','length','replace','sender','senderMsg','includes','startsWith','31444MIFEel','1522605QPSiUe','floor','\x27\x20public\x20Whatsapp\x20bot_\x0a_User\x20not\x20wants\x20to\x20expose\x20itself\x20to\x20send\x20that\x20msg_\x0a\x20\x20\x0a\x20\x20\x0a*if\x20you\x20wanna\x20reply\x20to\x20that\x20user,*\x0a*Send\x20msg\x20by\x20replying\x20to\x20above\x20message*\x0a*Type\x20like:*\x20reply,\x20Type_your_Message_Here\x0a*Example:*\x20reply,\x20Can\x20you\x20text\x20me\x20from\x20your\x20number\x0a\x20\x20\x0a\x20\x20\x0a\x20\x20','*Basically,\x20Its\x20an\x20Annonymous\x20Message*\x0a\x0a_Msg_Id:\x20','*Anonymous\x20Chat\x20Recivers*\x0a_','_*\x0a*_Msg_Id:\x20','random','trim','reply','\x0a*you\x20can\x20reply\x201\x20more\x20time*','3SsxRgk','_\x0a_Sended\x20by\x20\x27','toLowerCase','msgStatus','_\x0a\x0a*Message:*\x20','Msg_Id','@s.whatsapp.net','9097794XOzmqH','tellinfo','*Theres\x20no\x20Anonymous\x20Chat\x20created\x20yet*','caption','*provide\x20number\x20with\x20msg\x20to\x20send\x20Anonymously.*\x20\x0a*Example\x20','slice','text','reciever','\x0a\x0a\x0a','2894712HIKBoT','15VWZtwe','_Provided\x20number\x20is\x20not\x20valid,\x20please\x20give\x20in\x20format_','sendMessage','*_Anonymous\x20message\x20sent\x20succesfully_*','<Hii,\x20Suhail\x20Tech\x20Info>','title','*Msg_Id:*\x20','anony-msg-','10FocMEF','quoted','split','indexOf','_\x0a*Time:*\x20_','howmanyreply','610532nghubX','3233304mRjUXi','error\x20:\x20','_*\x0a\x0a*Message:*\x20','anonychat'];_0x5b2c=function(){return _0x16b3fd;};return _0x5b2c();}function _0x59a4(_0x4caf13,_0x33d87c){const _0x5b2c29=_0x5b2c();return _0x59a4=function(_0x59a4b4,_0x548955){_0x59a4b4=_0x59a4b4-0x11e;let _0x3b9705=_0x5b2c29[_0x59a4b4];return _0x3b9705;},_0x59a4(_0x4caf13,_0x33d87c);}(function(_0x1c8d7b,_0x2ad074){const _0x65db7a=_0x59a4,_0x21012a=_0x1c8d7b();while(!![]){try{const _0x14d41a=parseInt(_0x65db7a(0x13b))/0x1*(parseInt(_0x65db7a(0x11f))/0x2)+-parseInt(_0x65db7a(0x12a))/0x3*(-parseInt(_0x65db7a(0x149))/0x4)+-parseInt(_0x65db7a(0x14f))/0x5+-parseInt(_0x65db7a(0x13a))/0x6+-parseInt(_0x65db7a(0x120))/0x7+parseInt(_0x65db7a(0x14a))/0x8+-parseInt(_0x65db7a(0x131))/0x9*(-parseInt(_0x65db7a(0x143))/0xa);if(_0x14d41a===_0x2ad074)break;else _0x21012a['push'](_0x21012a['shift']());}catch(_0xed0401){_0x21012a['push'](_0x21012a['shift']());}}}(_0x5b2c,0x7d9c9));class AnonymousMsg{constructor(){const _0x60dc7e=_0x59a4;this['id']='',this[_0x60dc7e(0x153)]='',this[_0x60dc7e(0x138)]='',this[_0x60dc7e(0x154)]='',this[_0x60dc7e(0x132)]=0x0,this[_0x60dc7e(0x148)]=0x0;}}cmd({'pattern':'anonymsg','alias':['recognition','anonymous',_0x2b42ca(0x14d)],'desc':'send message to a number through bot number anonimously','category':'AI','use':_0x2b42ca(0x13f),'filename':__filename},async(_0x3f3bd3,_0x53872c,_0x3a968f,{cmdName:_0x4f405,isCreator:_0x32056c})=>{const _0x1f8060=_0x2b42ca;if(!_0x3a968f)return await _0x53872c[_0x1f8060(0x128)](_0x1f8060(0x135)+(prefix+_0x4f405)+'\x20923184474176,your_Message*');if(_0x32056c&&_0x3a968f===_0x1f8060(0x14e))return await _0x53872c[_0x1f8060(0x128)](isAnnonyMsgAlive==''?_0x1f8060(0x133):_0x1f8060(0x124)+isAnnonyMsgAlive+'_');const _0x21b6ef=_0x3a968f[_0x1f8060(0x146)](',');if(_0x21b6ef===-0x1)return await _0x53872c[_0x1f8060(0x128)]('*Invalid\x20format.\x20Please\x20provide\x20both\x20number\x20and\x20Message\x20separated\x20by\x20a\x20comma.*');let _0x1ebb12=_0x3a968f[_0x1f8060(0x136)](0x0,_0x21b6ef)['trim']()+_0x1f8060(0x130),_0x41b958=_0x3a968f['slice'](_0x21b6ef+0x1)[_0x1f8060(0x127)](),_0x1b5497=await parsedJid(_0x1ebb12);if(_0x1b5497[0x0]){if(_0x1b5497[0x0]===_0x53872c[_0x1f8060(0x153)])return await _0x53872c[_0x1f8060(0x128)]('*Provide\x20another\x20number\x20instead\x20of\x20yours,\x20Idiot*');const {date:_0x2faccb,time:_0x4c9c08}=await getDateTime(),_0x3fc014=_0x1f8060(0x142)+Math[_0x1f8060(0x121)](0x186a0+Math[_0x1f8060(0x126)]()*0xdbba0);sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg[_0x3fc014]=new AnonymousMsg();let _0x4a7cbd=sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg[_0x3fc014];return _0x4a7cbd['id']=_0x3fc014,_0x4a7cbd[_0x1f8060(0x153)]=_0x53872c[_0x1f8060(0x153)],_0x4a7cbd['reciever']=_0x1b5497[0x0],_0x4a7cbd[_0x1f8060(0x12d)]=!![],_0x4a7cbd[_0x1f8060(0x154)]=_0x53872c,_0x41b958='*sᴜʜᴀɪʟ-ᴍᴅ\x20•\x20ᴀɴɴᴏɴʏᴍᴏᴜs\x20ᴍsɢ*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a*Msg_Id:*\x20'+_0x4a7cbd['id']+'\x0a*Date:*\x20_'+_0x2faccb+_0x1f8060(0x147)+_0x4c9c08+_0x1f8060(0x12e)+_0x41b958+_0x1f8060(0x139)+Config[_0x1f8060(0x134)],isAnnonyMsgAlive=isAnnonyMsgAlive+','+_0x4a7cbd[_0x1f8060(0x138)],await _0x3f3bd3['sendMessage'](_0x4a7cbd['reciever'],{'text':_0x41b958}),await _0x53872c[_0x1f8060(0x128)](_0x1f8060(0x13e));}else return await _0x53872c[_0x1f8060(0x128)](_0x1f8060(0x13c));}),cmd({'on':_0x2b42ca(0x137)},async(_0x26c792,_0x4e9817,_0x4c2c89)=>{const _0x483f8e=_0x2b42ca;if(_0x4e9817[_0x483f8e(0x144)]&&isAnnonyMsgAlive['includes'](_0x4e9817[_0x483f8e(0x153)])&&_0x4e9817[_0x483f8e(0x137)][_0x483f8e(0x151)]>0x2){const _0x2c63ae=_0x4e9817[_0x483f8e(0x144)]['text'][_0x483f8e(0x145)]('\x0a');if(_0x2c63ae[_0x483f8e(0x151)]<0x3)return;if(_0x4e9817[_0x483f8e(0x144)][_0x483f8e(0x137)][_0x483f8e(0x155)](_0x483f8e(0x150))&&_0x2c63ae[0x0][_0x483f8e(0x155)](_0x483f8e(0x150))&&_0x2c63ae[0x2][_0x483f8e(0x155)](_0x483f8e(0x12f))){let _0x4ec172=''+_0x2c63ae[0x2][_0x483f8e(0x152)](_0x483f8e(0x141),'')['trim'](),_0xf03dfb=sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg[_0x4ec172];if(!_0xf03dfb)return;try{if(_0xf03dfb){let _0x4d7eeb=_0x4e9817['text'][_0x483f8e(0x145)](',')[0x0][_0x483f8e(0x127)]();if(_0x4d7eeb[_0x483f8e(0x12c)]()[_0x483f8e(0x11e)](_0x483f8e(0x128))){_0xf03dfb[_0x483f8e(0x148)]+=0x1;const _0x13c455=_0x4e9817['text'][_0x483f8e(0x146)](',');let _0x76f73d='*sᴜʜᴀɪʟ-ᴍᴅ\x20•\x20ʏᴏᴜʀ\x20ᴀɴᴏɴʏ-ᴍsɢ\x20ʀᴇᴘʟʏ*\x0a\x0a*_From\x20@'+_0xf03dfb[_0x483f8e(0x138)][_0x483f8e(0x145)]('@')[0x0]+_0x483f8e(0x125)+_0xf03dfb['id']+_0x483f8e(0x14c)+_0x4e9817['text']['slice'](_0x13c455+0x1)['trim']()+'\x0a\x0a\x0a\x0a'+Config[_0x483f8e(0x134)];return _0xf03dfb[_0x483f8e(0x148)]>=0x2&&(isAnnonyMsgAlive=isAnnonyMsgAlive[_0x483f8e(0x152)](','+_0x4e9817[_0x483f8e(0x153)],'')),await _0x26c792['sendMessage'](_0xf03dfb[_0x483f8e(0x153)],{'text':_0x76f73d,'mentions':[_0xf03dfb['reciever']]},{'quoted':_0xf03dfb[_0x483f8e(0x154)]}),_0xf03dfb[_0x483f8e(0x148)]>=0x2&&(isAnnonyMsgAlive=isAnnonyMsgAlive['replace'](','+_0x4e9817[_0x483f8e(0x153)],''),delete sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg[_0x4ec172]),await _0x4e9817['reply']('*_Your\x20Message\x20succesfully\x20deliver\x20to\x20User_*\x20'+(_0xf03dfb[_0x483f8e(0x148)]==0x1?_0x483f8e(0x129):'')+'\x20');}else{if(_0xf03dfb[_0x483f8e(0x132)]===0x0){_0xf03dfb[_0x483f8e(0x132)]=0x1;let _0x4175f0=_0x483f8e(0x123)+_0xf03dfb['id']+_0x483f8e(0x12b)+tlang()[_0x483f8e(0x140)]+_0x483f8e(0x122)+Config[_0x483f8e(0x134)];return await _0x26c792[_0x483f8e(0x13d)](_0xf03dfb[_0x483f8e(0x138)],{'text':_0x4175f0},{'quoted':_0x4e9817});}else{if(_0xf03dfb[_0x483f8e(0x132)]===0x1)return _0xf03dfb[_0x483f8e(0x132)]=0x2,_0x4e9817[_0x483f8e(0x128)]('*Please\x20follow\x20the\x20format\x20if\x20reply\x20to\x20msg*\x0a*Type\x20like:\x20_reply,\x20Type_your_Message_Here_*');else return;}}}}catch(_0x1ecb74){console['log'](_0x483f8e(0x14b),_0x1ecb74);}}}});
//---------------------------------------------------------------------------
//                  AI  CHAT  COMMAND
//---------------------------------------------------------------------------
        const VOICES = [  '21m00Tcm4TlvDq8ikWAM','2EiwWnXFnvU5JabPnv8n','AZnzlk1XvdvUeBnXmlld','CYw3kZ02Hs0563khs1Fj','D38z5RcWu1voky8WS1ja','EXAVITQu4vr4xnSDxMaL','ErXwobaYiN019PkySvjV',
                          'GBv7mTt0atIp3Br8iCZE','IKne3meq5aSn9XLyUdCD','LcfcDJNUP1GQjkzn1xUU','MF3mGyEYCl7XYWbV9V6O','N2lVS1w4EtoT3dr4eOWO','ODq5zmih8GrVes37Dizd','SOYHLrjzK2X1ezoPC6cr',
                          'TX3LPaxmHKxFdv7VOQHJ','ThT5KcBeYPX3keUQqHPh','TxGEqnHWrfWFTfGW9XjX','VR6AewLTigWG4xSOukaG','XB0fDUnXU5powFXDhCwa','XrExE9yKIg1WjnnlVkGX','Yko7PKHZNXotIFUBG7I9', 
                          'ZQe5CZNOzWyzPSCn5a3c','Zlb1dXrM653N07WRdFW3','bVMeCyTHy58xNoL34h3p','flq6f7yk4E4fJM5XTYuZ','g5CIjZEefAph4nQFvHAz','jBpfuIE2acCO8z3wKNLl','jsCqWAovK2LkecY7zXl4',
                          'oWAxZDx7w5VEj9dCyTzz','onwK4e9ZLuTAKqWW03F9','pMsXgVXv3BLzUgSXRplE','pNInz6obpgDQGcFmaJgB','piTKgcLEGmPE4e6mEKli','t0jbNlBVZ17f02VDIeMI','wViXBPUzp2ZZixB1xQuM',
                          'yoZ06aMxZJJ28mfd3POQ','z9fAnlkpzviPz146aGWa','zcAOhNBS3c14rBihAFp1','zrHiDhphv9ZnVXBqCLjz'
                       ]
//---------------------------------------------------------------------------
const newApiKey = "020dd54b98178f3975c48e9102316db4";
cmd({
        pattern: "aitts",
        desc: "Text to Voice Using Eleven Lab Ai",
        category: "AI",
        use: '<Hii, Suhail Tech Info>',
        filename: __filename,
    },
    async(Void, citel,text , {isCreator}) =>{
      if (newApiKey > 8) return citel.reply('Dear, You Dont Have ELEVENLAB_API_KEY \nCreate ELEVENLAB API KEY from below Link \nhttps://elevenlabs.io/\n\nAnd Set it in ELEVENLAB_API_KEY Var\n\n'+Config.caption)

      const intValue = parseInt(Config.aitts_Voice_Id);
      if (!text && !isCreator) return citel.reply(`*Uhh Dear, Please Provide text..!*\n*Example: _${prefix}aitts i am ${citel.pushName}._*`)
      else if (!text && isCreator || text === 'setting' || text === 'info') return Void.sendMessage(citel.chat, {image : {url : await botpic()} , caption:  `*Hey ${citel.pushName}!.*
_Please provide text!_
*Example:* _${prefix}aitts i am ${citel.pushName}._

*You Currently ${!isNaN(intValue) && intValue > 0 && intValue <=39 ? `set Voice Id: ${intValue}*\nUpdate` : `not set any Specific Voice*\nAdd Specific`} Voice: _${prefix}addvar AITTS_VOICE_ID:35_


*Also use available voices*`+"```"+`

1: Rachel
2: Clyde
3: Domi
4: Dave
5: Fin
6: Bella
7: Antoni
8: Thomas
9: Charlie
10: Emily
11: Elli
12: Callum
13: Patrick
14: Harry
15: Liam
16: Dorothy
17: Josh
18: Arnold
19: Charlotte
20: Matilda
21: Matthew
22: James
23: Joseph
24: Jeremy
25: Michael
26: Ethan
27: Gigi
28: Freya
29: Grace
30: Daniel
31: Serena
32: Adam
33: Nicole
34: Jessie
35: Ryan
36: suhail
37: Glinda
38: Giovanni
39: Mimi
`+"```"+`

*Example:* _${prefix}aitts i am ${citel.pushName}_:36 
*OR:* _${prefix}aitts i am ${citel.pushName}_:suhail     
    

${Config.caption}`,} ,); 

      let textt = text ;
      var VOICE_ID = Math.floor(Math.random() * VOICES.length ) ;
      let isSet = false;

      if (!isNaN(intValue) && intValue > 0 && intValue <=39 ) { isSet = true; VOICE_ID = intValue;  }            
      if (!isSet && text && text.includes(":") ) {
        let parts = text.split(":");        
        let name = parts[parts.length - 1].trim() || "" ;
        textt = parts.slice(0, parts.length - 1).join(":")
        
        if (name.toLowerCase() === "richel"    || name === "1") { VOICE_ID = 0; }
        else if (name.toLowerCase() === "clyde"|| name === "2") { VOICE_ID = 1; }
        else if (name.toLowerCase() === "domi" || name === "3") { VOICE_ID = 2; }
        else if (name.toLowerCase() === "dave" || name === "4") { VOICE_ID = 3; }
        else if (name.toLowerCase() === "fin"  || name === "5") { VOICE_ID = 4; }
        else if (name.toLowerCase() === "bella"  || name === "6") { VOICE_ID = 5;  }
        else if (name.toLowerCase() === "antoni" || name === "7") { VOICE_ID = 6;  }
        else if (name.toLowerCase() === "thomas" || name === "8") { VOICE_ID = 7;  }
        else if (name.toLowerCase() === "charlie"|| name === "9") { VOICE_ID = 8;  }
        else if (name.toLowerCase() === "emily"  || name === "10") { VOICE_ID = 9; }
        else if (name.toLowerCase() === "elli"   || name === "11") { VOICE_ID = 10;  }
        else if (name.toLowerCase() === "callum" || name === "12") { VOICE_ID = 11;  }
        else if (name.toLowerCase() === "patrick"|| name === "13") { VOICE_ID = 12;  }
        else if (name.toLowerCase() === "harry"  || name === "14") { VOICE_ID = 13;  }
        else if (name.toLowerCase() === "liam"   || name === "15") { VOICE_ID = 14;  }
        else if (name.toLowerCase() === "dorothy"|| name === "16") { VOICE_ID = 15;  }
        else if (name.toLowerCase() === "josh"   || name === "17") { VOICE_ID = 16;  }
        else if (name.toLowerCase() === "arnold" || name === "18") { VOICE_ID = 17;  }
        else if (name.toLowerCase() === "charlotte"|| name === "19"){ VOICE_ID= 18;  }
        else if (name.toLowerCase() === "matilda"|| name === "20") { VOICE_ID = 19;  }
        else if (name.toLowerCase() === "matthew"|| name === "21") { VOICE_ID = 20;  }
        else if (name.toLowerCase() === "james"  || name === "22") { VOICE_ID = 21;  }
        else if (name.toLowerCase() === "joseph" || name === "23") { VOICE_ID = 22;  }
        else if (name.toLowerCase() === "jeremy" || name === "24") { VOICE_ID = 23;  }
        else if (name.toLowerCase() === "michael"|| name === "25") { VOICE_ID = 24;  }
        else if (name.toLowerCase() === "ethan" || name === "26") { VOICE_ID = 25;  }
        else if (name.toLowerCase() === "gigi"  || name === "27") { VOICE_ID = 26;  }
        else if (name.toLowerCase() === "freya" || name === "28") { VOICE_ID = 27;  }
        else if (name.toLowerCase() === "grace" || name === "29") { VOICE_ID = 28;  }
        else if (name.toLowerCase() === "daniel"|| name === "30") { VOICE_ID = 29;  }
        else if (name.toLowerCase() === "serena"|| name === "31") { VOICE_ID = 30;  }
        else if (name.toLowerCase() === "adam"  || name === "32") { VOICE_ID = 31;  }
        else if (name.toLowerCase() === "nicole"|| name === "33") { VOICE_ID = 32;  }
        else if (name.toLowerCase() === "jessie"|| name === "34") { VOICE_ID = 33;  }
        else if (name.toLowerCase() === "ryan"  || name === "35") { VOICE_ID = 34;  }
        else if (name.toLowerCase() === "suhail"|| name === "36") { VOICE_ID = 35;  }
        else if (name.toLowerCase() === "glinda"|| name === "37") { VOICE_ID = 36;  }
        else if (name.toLowerCase() === "giovanni"|| name === "38"){ VOICE_ID =37;  }
        else if (name.toLowerCase() === "mimi"|| name === "39") { VOICE_ID =38;  }
        else{ textt = text ;  VOICE_ID =  Math.floor(Math.random() * VOICES.length ) ; }
        
      }        
     console.log("textt : " , textt )
     await citel.send(`Voice_Id : ${VOICE_ID} ` ) 
    const data = {
      text: textt,
      model_id: "eleven_monolingual_v1", // Add or replace with your desired model_id
    };
    const options = {
      method: 'POST',
      url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICES[VOICE_ID]}`,
      headers: {
        accept: 'audio/mpeg',
        'content-type': 'application/json', 
        'xi-api-key': '020dd54b98178f3975c48e9102316db4', 
    },
    data: {     text: textt,  },  responseType: 'arraybuffer',  };  
    const speechDetails = await axios.request(options);

    await Void.sendMessage(citel.chat , { audio : speechDetails.data, mimetype: 'audio/mpeg', ptt: true },)
   // await citel.send(speechDetails.data, {caption : '' } , "audio")
//};

//let inputText = "hey im suhail here, is anything ok wth you";
//console.log("data ," , data )


    })
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//                  RREPOSITORY  COMMAND
//---------------------------------------------------------------------------
