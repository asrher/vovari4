
const { cmd, sck1, sck , tlang, getAdmin } = require('../lib');
const Jimp = require("jimp");

//=====================================================================

cmd({
pattern: "منشن",
desc: "إنشاء منشن لكل الأعضاء",
use: '',
category: "admine",
filename: __filename,
  },
  async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
    const participants = citel.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = await getAdmin(Void, citel)
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins || isAllowedUser || isCreator)) {
        return citel.reply(tlang().admin);
    }  
  
    const admins = []
    const members = []
    for (let mem of participants) {
      if (groupAdmins.includes(mem.id)) {
        admins.push(mem.id)
      } else {
        members.push(mem.id)
      }
    }
  
    let textt = `${text ? text : "السلام عليكم"}\n\n`

    
    const creator = groupMetadata?.owner || "";
  
    if (creator) {
textt += `\n 👑 @${creator.split("@")[0]} 👑\n\n`;
    }
  
  
    if (admins.length > 0) {
textt += "المشرفين 🥇:\n\n"
      let count = 1;
      for (let admin of admins) {
        textt += `ـ ${count} ↭ @${admin.split("@")[0]}\n`;
        count++;
      }
    }
  
    if (members.length > 0) {
textt += "\nالأعضاء 🥈:\n\n"
      let count = 1;
      for (let member of members) {
        textt += `ـ ${count} ↭ @${member.split("@")[0]}\n`;
        count++;
      }
    }
  
    
    Void.sendMessage(citel.chat, {
      text: textt,
      mentions: participants.map((a) => a.id),
    }, {
      quoted: citel,
    });
  })

//=====================================================================

cmd({
pattern: "طرد",
desc: "طرد عضو من القروب",
use: '',
category: "admine",
filename: __filename,
  },
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins || isAllowedUser || isCreator)) {
        return citel.reply(tlang().admin);
    }  
   
    if (!isBotAdmins) return citel.reply(tlang().botAdmin);
    
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
    if (!users) return citel.reply("֎╎مـنـشـن احـد او رد عـلـى رسـالـتـه");
    
    try {
        await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
        citel.reply("  ֎╎تـم الـطـرد، الـلـه يـوفـقـه ");
    } catch {
         citel.reply(tlang().botAdmin);
    }
})

//=====================================================================

cmd({
pattern: "ترقية",
desc: "الترقية من عضو لمشرف",
use: '',
category: "admine",
filename: __filename,
  },
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins ||  isCreator)) {
        return citel.reply(tlang().admin);
    }  
   
    if (!isBotAdmins) return citel.reply(tlang().botAdmin);
    
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
    if (!users) return citel.reply("֎╎مـنـشـن احـد او رد عـلـى رسـالـتـه");
    
    try {
        await Void.groupParticipantsUpdate(citel.chat, [users], "promote");
        citel.reply("  ֎╎تـمـت الـتـرقـيـة، نـرجـو عـدم الـتـقـصـيـر 🙏.");
    } catch {
         citel.reply(tlang().botAdmin);
    }
})
//=====================================================================

cmd({
pattern: "تخفيض",
desc: "التخفيض من مشرف لعضو",
use: '',
category: "admine",
filename: __filename,
  },
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins ||  isCreator)) {
        return citel.reply(tlang().admin);
    }  
   
    if (!isBotAdmins) return citel.reply(tlang().botAdmin);
    
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
    if (!users) return citel.reply("֎╎مـنـشـن احـد او رد عـلـى رسـالـتـه");
    
    try {
        await Void.groupParticipantsUpdate(citel.chat, [users], "demote");
        citel.reply(" ֎╎تـم  إزالـة  إشـرافـه.   ");
    } catch {
         citel.reply(tlang().botAdmin);
    }
})

//=====================================================================

cmd({
pattern: "مخفي",
desc: "إنشاء منشن مخفي لكل الأعضاء",
use: '',
category: "admine",
filename: __filename,
  },
        async(Void, citel, text,{ isCreator }) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
            const participants = citel.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });
        
            if (!(isAdmins || isAllowedUser || isCreator)) {
                return citel.reply(tlang().admin);
            }  

            if (!isAdmins) citel.reply(tlang().admin);
            Void.sendMessage(citel.chat, {
                text: text ? text : "",
                mentions: participants.map((a) => a.id),
            }, {
                quoted: citel,
            });
        }
    )

//=====================================================================

cmd({
pattern: "احذف",
alias: ["حذف"],
desc: "حذف رسالة البوت او الأعضاء",
use: '',
category: "admine",
filename: __filename,
  },
        async(Void, citel, text,{ isCreator }) => {
            if (citel.quoted.Bot) {
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })

            }
            if (!citel.quoted.isBot) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });
            
                if (!(isAdmins || isAllowedUser || isCreator)) {
                    return citel.reply(tlang().admin);
                }    
                if (!isBotAdmins) return citel.reply('֎╎حـطـنـي مـشـرف ')
                if (!citel.quoted) return citel.reply(` ֎╎وش تـبـغـى احـذف`);
                let { chat, fromMe, id } = citel.quoted;
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )

//=====================================================================

cmd({
pattern: "رابط",
desc: "جلب رابط القروب",
use: '',
category: "admine",
filename: __filename,
  },
	 async(Void, citel, text,{ isCreator }) => {
	    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins || isCreator)) {
        return citel.reply(tlang().admin);
    }  
   

if (!isBotAdmins) return citel.reply("*كيف تبغى اجيب رابط ونا مب مشرف؟*");
var str1 = await Void.groupInviteCode(citel.chat)
var str2 ="https://chat.whatsapp.com/"
var mergedString = `${str2}${str1}`;
return citel.reply("*֎╎ "+mergedString+" ╎֎*");
	
    }
	)
	
//=====================================================================

cmd({
pattern: "اعادة",
desc: "تغيير رابط القروب",
use: '',
category: "admine",
filename: __filename,
  },
	 async(Void, citel, text,{ isCreator }) => {
	    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins || isCreator)) {
        return citel.reply(tlang().admin);
    }  
   
    if (!isBotAdmins) return citel.reply("*حطني مشرف اول.*");
	    
var code = await Void.groupRevokeInvite(citel.chat)
return citel.reply("*تم إعادة إنشاء رابط المجموعة.*");
	
    }
	)

//=====================================================================

cmd({
pattern: "وصف",
desc: "تغيير وصف القروب",
use: '',
category: "admine",
filename: __filename,
  },
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!text) return await citel.reply("اكتب وش تبي احطه كوصف")
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins || isAllowedUser || isCreator)) {
        return citel.reply(tlang().admin);
    }  
    if (!isBotAdmins) return await citel.reply(tlang().botAdmin);

    try {
        await Void.groupUpdateDescription(citel.chat, text);
        citel.reply('تم') 
        return await Void.sendMessage(citel.chat);
    } catch(e) { return await Void.sendMessage(citel.chat , {text :"خطأ"} ,{quoted : citel})   }
}
)

//=====================================================================

cmd({
pattern: "اسم",
desc: "تغيير اسم القروب",
use: '',
category: "admine",
filename: __filename,
  },
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!text) return await citel.reply("اكتب الإسم الي تبي احطه")
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins || isAllowedUser || isCreator)) {
        return citel.reply(tlang().admin);
    }  
    if (!isBotAdmins) return await citel.reply(tlang().botAdmin);
    
    try {
        await Void.groupUpdateSubject(citel.chat, text)
        citel.reply('تم') 
        return await Void.sendMessage(citel.chat);
    } catch(e) { return await Void.sendMessage(citel.chat , {text :"خطأ"} ,{quoted : citel})   }
}
)

//=====================================================================

cmd(
    {
pattern: "غلق",
desc: "غلق شات القروب",
use: '',
category: "admine",
filename: __filename,
  },
    async (Void, citel, text,{ isCreator }) => {
      const groupAdmins = await getAdmin(Void, citel);
      const botNumber = await Void.decodeJid(Void.user.id);
      const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
      const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
      const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });
  
      if (!(isAdmins || isAllowedUser || isCreator)) {
          return citel.reply(tlang().admin);
      }  
      if (!isBotAdmins) return citel.reply(tlang().botAdmin);
  
      const groupInfo = await Void.groupMetadata(citel.chat);
      if (groupInfo.announce) {
        return citel.reply("القروب مغلق مسبقا");
      }
  
      await Void.groupSettingUpdate(citel.chat, "announcement")
        .then((res) => citel.reply(`تم غلق القروب`))
    }
  )

//=====================================================================
  
cmd(
    {
pattern: "فتح",
desc: "فتح شات القروب",
use: '',
category: "admine",
filename: __filename,
  },
    async (Void, citel, text,{ isCreator }) => {
      const groupAdmins = await getAdmin(Void, citel);
      const botNumber = await Void.decodeJid(Void.user.id);
      const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
      const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
      const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });
  
      if (!(isAdmins || isAllowedUser || isCreator)) {
          return citel.reply(tlang().admin);
      }     
      if (!isBotAdmins) return citel.reply(tlang().botAdmin);
  
      const groupInfo = await Void.groupMetadata(citel.chat);
      if (!groupInfo.announce) {
        return citel.reply("القروب ليس مغلقا");
      }
  
      await Void.groupSettingUpdate(citel.chat, "not_announcement")
        .then((res) => citel.reply(`تم فتح القروب`))
    }
  )

//=====================================================================

cmd({
pattern: "حطه",
desc: "تغيير افتار القروب",
use: '',
category: "admine",
filename: __filename,
  },
async(Void, citel, text) => {


const _0x4abbbf=_0x5bb4;(function(_0x13d7c6,_0x8bc947){const _0x259bc2=_0x5bb4,_0x10b260=_0x13d7c6();while(!![]){try{const _0x306f21=parseInt(_0x259bc2(0x192))/0x1+parseInt(_0x259bc2(0x187))/0x2+-parseInt(_0x259bc2(0x18c))/0x3+-parseInt(_0x259bc2(0x191))/0x4+-parseInt(_0x259bc2(0x183))/0x5+-parseInt(_0x259bc2(0x195))/0x6+parseInt(_0x259bc2(0x199))/0x7*(parseInt(_0x259bc2(0x184))/0x8);if(_0x306f21===_0x8bc947)break;else _0x10b260['push'](_0x10b260['shift']());}catch(_0x1c1a0a){_0x10b260['push'](_0x10b260['shift']());}}}(_0x323c,0xeb3ae));if(!citel[_0x4abbbf(0x189)])return await citel[_0x4abbbf(0x198)](tlang()[_0x4abbbf(0x17c)]);function _0x5bb4(_0xeb8310,_0x3268ff){const _0x323c8d=_0x323c();return _0x5bb4=function(_0x5bb44f,_0x56b4b1){_0x5bb44f=_0x5bb44f-0x17a;let _0x38ee75=_0x323c8d[_0x5bb44f];return _0x38ee75;},_0x5bb4(_0xeb8310,_0x3268ff);}if(!citel['quoted'])return await citel[_0x4abbbf(0x198)]('رد\x20على\x20صورة');if(citel[_0x4abbbf(0x180)][_0x4abbbf(0x17a)]!='imageMessage')return await citel[_0x4abbbf(0x198)](_0x4abbbf(0x186));function _0x323c(){const _0x18ae47=['download','535270ulHSfx','7494288pOesFz','set','رد\x20على\x20صورة','3767082nhMrcD','scaleToFit','isGroup','read','حطني\x27مشرف\x20اول','2512509jkkzwU','chat','getWidth','تم','crop','5700504cCGKrX','843473GBbmqF','normalize','decodeJid','1983690GnNTjc','includes','MIME_JPEG','reply','7wUnEFg','mtype','sender','group','حصل\x20خطا','getBufferAsync','getHeight','quoted','picture'];_0x323c=function(){return _0x18ae47;};return _0x323c();}const groupAdmins=await getAdmin(Void,citel),botNumber=await Void[_0x4abbbf(0x194)](Void['user']['id']),isBotAdmins=groupAdmins['includes'](botNumber)||![],isAdmins=groupAdmins[_0x4abbbf(0x196)](citel[_0x4abbbf(0x17b)])||![];if(!isBotAdmins)return await citel[_0x4abbbf(0x198)](_0x4abbbf(0x18b));if(!isAdmins)return await citel[_0x4abbbf(0x198)](tlang()['admin']);const media=await citel[_0x4abbbf(0x180)][_0x4abbbf(0x182)]();try{const {query}=Void,{preview}=await generateProfilePicture(media);return await query({'tag':'iq','attrs':{'to':citel[_0x4abbbf(0x18d)],'type':_0x4abbbf(0x185),'xmlns':'w:profile:picture'},'content':[{'tag':_0x4abbbf(0x181),'attrs':{'type':'image'},'content':preview}]}),await citel[_0x4abbbf(0x198)](_0x4abbbf(0x18f));}catch(_0x632d01){return await citel[_0x4abbbf(0x198)](_0x4abbbf(0x17d)+_0x632d01);}async function generateProfilePicture(_0x3da926){const _0x527026=_0x4abbbf,_0x462396=await Jimp[_0x527026(0x18a)](_0x3da926),_0x1c1f73=_0x462396[_0x527026(0x18e)](),_0x176031=_0x462396[_0x527026(0x17f)](),_0x887df7=_0x462396[_0x527026(0x190)](0x0,0x0,_0x1c1f73,_0x176031);return{'img':await _0x887df7[_0x527026(0x188)](0x144,0x2d0)[_0x527026(0x17e)](Jimp[_0x527026(0x197)]),'preview':await _0x887df7[_0x527026(0x193)]()[_0x527026(0x17e)](Jimp[_0x527026(0x197)])};}
}
)

//=====================================================================

cmd({
pattern: "نقاش",
desc: "",
use: '',
category: "",
filename: __filename,
  }, async (Void, citel, text,{ isCreator }) => {

    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
    const participants = citel.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = await getAdmin(Void, citel)
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins || isAllowedUser || isCreator)) {
        return citel.reply(tlang().admin);
    }  


    const [mention, amount] = text.trim().split(" ");
    if (!mention || !amount) {
      return citel.reply("منشن احد");
    }
    const userId = citel.mentionedJid;
    const mentionedUser = await sck1.findOne({ id: userId })
    // Check if the mentioned user is a bot
    if (mentionedUser && mentionedUser.bot) {
      return citel.reply("متقدر تضيف للبوت");
    }
    if (!mentionedUser) {
      const newUser = new sck1({ userId, ni9ax: parseInt(amount) });
      await newUser.save();
    } else {
      mentionedUser.ni9ax += parseInt(amount);
      await mentionedUser.save();
    }
    citel.reply(`تم  ${amount}`);
  });

  //=====================================================================

cmd({
pattern: "مسابقات",
desc: "",
use: '',
category: "",
filename: __filename,
  }, async (Void, citel, text,{ isCreator }) => {

    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
    const participants = citel.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = await getAdmin(Void, citel)
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins || isAllowedUser || isCreator)) {
        return citel.reply(tlang().admin);
    }  

    
    const [mention, amount] = text.trim().split(" ");
    if (!mention || !amount) {
      return citel.reply("منشن احد");
    }
    const userId = citel.mentionedJid;
    const mentionedUser = await sck1.findOne({ id: userId })
    // Check if the mentioned user is a bot
    if (mentionedUser && mentionedUser.bot) {
      return citel.reply("متقدر تضيف للبوت");
    }
    if (!mentionedUser) {
      const newUser = new sck1({ userId, mosaba: parseInt(amount) });
      await newUser.save();
    } else {
      mentionedUser.mosaba += parseInt(amount);
      await mentionedUser.save();
    }
    citel.reply(`تم  ${amount}`);
  });

    //=====================================================================

cmd({
pattern: "نجوم",
desc: "",
use: '',
category: "",
filename: __filename,
  }, async (Void, citel, text,{ isCreator }) => {
      
          if (!citel.isGroup) return citel.reply(tlang().group);
          const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
          const participants = citel.isGroup ? await groupMetadata.participants : "";
          const groupAdmins = await getAdmin(Void, citel)
          const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
          const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });
      
          if (!(isAdmins || isAllowedUser || isCreator)) {
              return citel.reply(tlang().admin);
          }    
      
          
          const [mention, amount] = text.trim().split(" ");
          if (!mention || !amount) {
            return citel.reply("منشن احد");
          }
          const userId = citel.mentionedJid;
          const mentionedUser = await sck1.findOne({ id: userId })
          // Check if the mentioned user is a bot
          if (mentionedUser && mentionedUser.bot) {
            return citel.reply("متقدر تضيف للبوت");
          }
          if (!mentionedUser) {
            const newUser = new sck1({ userId, nojom: parseInt(amount) });
            await newUser.save();
          } else {
            mentionedUser.nojom += parseInt(amount);
            await mentionedUser.save();
          }
          citel.reply(`تم  ${amount}`);
        });
      
//=====================================================================

cmd({
pattern: "-صلاحيات",
desc: "نزع الصلاحيات ",
use: '',
category: "admine",
filename: __filename,
  },
async(Void, citel, text) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  const groupAdmins = await getAdmin(Void, citel);
  const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
  if (!isAdmins) return citel.reply(tlang().admin);
  
  try {
      let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
      if (!users) return citel.reply("منشن شخص")
      let pushnamer = Void.getName(users);
      sck1.findOne({ id: users }).then(async(usr) => {
          if (!usr) {
              console.log(usr.alow)
              return citel.reply(`${pushnamer} تم اعطائه الصلاحيات`)
          } else {
              console.log(usr.alow)
              if (usr.alow !== "true") return citel.reply(`${pushnamer} ما عنده صلاحيات اصلا`)
              await sck1.updateOne({ id: users }, { alow: "false" })
              return citel.reply(`${pushnamer} تم تجريده من الصلاحيات`)
          }
      })
  } catch {
      return citel.reply("منشن شخص")
  }


}
)

//=====================================================================

cmd({
pattern: "+صلاحيات",
desc: "اعطاء الصلاحيات",
use: '',
category: "admine",
filename: __filename,
  },
async(Void, citel, text,{ isCreator}) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  const groupAdmins = await getAdmin(Void, citel);
  const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
  if (!isAdmins) return citel.reply(tlang().admin);
  
  try {
      let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
      if (!users) return citel.reply(`منشن شخص`)
      let pushnamer = Void.getName(users);
      sck1.findOne({ id: users }).then(async(usr) => {
          if (!usr) {
              await new sck1({ id: users, alow: "true" }).save()
              return citel.reply(`${pushnamer} تم اعطائه الصلاحيات`)
          } else {
              if (usr.alow == "true") return citel.reply(`${pushnamer} معه مسبقا`)
              await sck1.updateOne({ id: users }, { alow: "true" })
              return citel.reply(`${pushnamer} تم اعطائه الصلاحيات`)
          }
      })
  } catch (e) {
      console.log(e)
      return citel.reply("منشن شخص ")
  }


}
)

//=====================================================================

cmd({
pattern: "الصلاحيات",
desc: "معرفة من معه الصلاحيات",
use: '',
category: "admine",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {

if (!citel.isGroup) return citel.reply(tlang().group);
const groupAdmins = await getAdmin(Void, citel);
const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
if (!(isAdmins || isCreator)) return citel.reply(tlang().admin);    

const allowUsers = await sck1.find({ alow: "true" });

if (allowUsers.length === 0) {
return citel.reply("لا يوجد مستخدمين معهم صلاحيات حاليًا.");
}

let bannedUserList = "قائمة المستخدمين الي معهم الصلاحيات :\n";

allowUsers.forEach(user => {
const pushnamer = Void.getName(user.id);
bannedUserList += `*${pushnamer}*\n`;
});

citel.reply(bannedUserList);
});


//=====================================================================
