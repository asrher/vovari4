const { sck, sck1, cmd, tlang, getAdmin } = require('../lib')
const eco = require('siraj-bank')
const ty = eco.connect(mongodb);

//=====================================================================
    
cmd({
pattern: "بيلي",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
        id: citel.chat,
    })
        .save());
    let mongoschemas = zerogroup.economy || "false";
    if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل الـبـنـك فـالـمـجـمـوعـة\n\nادخل قروب البوت كلشي متوفر فيه اكتب .مساعدة");
    if (!citel.isGroup) return citel.reply(tlang().group);
    
    const secktor = "secktor"
    const minReward = 500; // Minimum reward amount
    const maxReward = 2000; // Maximum reward amount
    const randomReward = Math.floor(Math.random() * (maxReward - minReward + 1)) + minReward;
    
    const daily = await eco.daily(citel.sender, secktor, randomReward);
    
    if (daily.cd) {
        return await citel.reply(`اخذت مسبقا، انتضر \n ${daily.cdL}`);
    } else {
        citel.reply(`لقد حصلت على ${daily.amount} بيلي`);
    }
})

//=====================================================================

cmd({
pattern: "صفر",
desc: "",
use: '',
category: "",
filename: __filename,
  },
    async(Void, citel, text,{ isCreator }) => {
       let zerogroup = (await sck.findOne({
           id: citel.chat,
       })) || (await new sck({
               id: citel.chat,
           })
           .save());
       let mongoschemas = zerogroup.economy || "false";
       if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل الـبـنـك فـالـمـجـمـوعـة\n\nادخل قروب البوت كلشي متوفر فيه اكتب .مساعدة");
    if(!isCreator) return citel.reply(tlang().owner)
       let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
   if(!users) return citel.reply(tlang().tag);
       const balance  = await eco.balance(users, "secktor")
       await eco.deduct(users, "secktor", balance.wallet);
       return await citel.reply(`֎╎تـم تـصـفـيـر الـبـيـلـي الـخـاص ب : @${users.split('@')[0]} `,{mentions:[users]})
}
)

//=====================================================================

cmd({
pattern: "ترتيب_البيلي",
desc: "",
use: '',
category: "",
filename: __filename,
     },
   async(Void, citel, text,{ isCreator }) => {
    const groupAdmins = await getAdmin(Void, citel)
        if(!isCreator) return citel.reply(tlang().owner)
   let h = await eco.lb('secktor',300);
   let str = ``
   const { sck1 } = require('../lib');
   let arr = []
    for(let i=0;i<h.length;i++){
           let username = await sck1.findOne({ id: h[i].userID })
           var tname;
           if (username && username !== undefined) {
               tname = username.name
           } else {
               tname = Void.getName(h[i].userID)
           }
str+= `ـ *${i+1}* \n╮─────────────ـ\n│ *⧉ - البيلي:*  ${h[i].wallet}\n│ـ\n│ *⧉ - الرقم:* wa.me/${h[i].userID.split('@')[0]}\n╯─────────────ـ\n\n`
    arr.push(h[i].userID)
    }
        citel.reply(str,{mentions:arr})
        
    })

    //=====================================================================

cmd({
pattern: "تحويل",
desc: "تحويل بيلي لخويك",
use: '',
category: "spi",
filename: __filename,
      },
     async (Void, citel, text, { isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل الـبـنـك فـالـمـجـمـوعـة\n\nادخل قروب البوت كلشي متوفر فيه اكتب .مساعدة");
        let value = text.trim().split(" ");
        if (value[0] === "") return citel.reply(`مثال : .تحويل 1000 @منشن احد`);
        let user = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
        if (!user) return citel.reply('֎╎مـنـشـن احـد بـعـد الأمـر @');
        const secktor = "secktor";
        const user1 = citel.sender;
        const user2 = user;
        const amount = parseInt(value[0]);
        
        if (!amount || amount < 10000) {
            return citel.reply("֎╎الحد الأدنى للتحويل هو 10,000 بيلي.");
        }
        
        const balance = await eco.balance(user1, secktor);
        if (balance.wallet < amount) {
            return citel.reply("֎╎لا يوجد لديك مبلغ كافي للتحويل.");
        }
     
        // Calculate tax based on the transferred amount
        let taxPercentage = amount < 100000 ? 0.1 : 0.05;
        let taxAmount = Math.ceil(amount * taxPercentage);
        
        // Deduct the total amount from the sender's balance (transferred amount + tax)
        const totalDeduct = amount;
        const deduct = await eco.deduct(user1, secktor, totalDeduct);
        
        // Give the transferred amount (after tax deduction) to the recipient
        const give = await eco.give(user2, secktor, amount - taxAmount);
        
        return await citel.reply(`⊹⊱≼━━━⌬〔🌗〕⌬━━━≽⊰⊹
     ↫ ⟦ بـنـك مـون 🏦 ⟧
     
     ֎ ╎تـم تـحـويـل  *${amount}*  مـن حـسـابـك
     ֎ ╎تـم خصـم الـضـريـبـة *${taxAmount}* 
     
     ֎ ╎لـمـعـرفـة رصـيـدك اكـتـب *.اموالي*
     
     ⊹⊱≼━━━⌬〔🌗〕⌬━━━≽⊰⊹`);
     })

//=====================================================================

cmd({
pattern: "اموالي",
desc: "معرفة رصيدك من البيلي",
use: '',
category: "spi",
filename: __filename,
      },
     async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل الـبـنـك فـالـمـجـمـوعـة\n\nادخل قروب البوت كلشي متوفر فيه اكتب .مساعدة");
         const secktor = "secktor"
         const balance = await eco.balance(citel.sender, secktor); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
         return await citel.reply(`⊹⊱≼━━━⌬〔🌗〕⌬━━━≽⊰⊹
↫ ⟦ بـنـك مـون 🏦 ⟧
             
֎ ╎رصـيـدك 💰 ⟦ ${balance.wallet} بيلي ⟧
             
⊹⊱≼━━━⌬〔🌗〕⌬━━━≽⊰⊹`)
     
     }
     )

//=====================================================================

cmd({
pattern: "ضف",
desc: "تضيف بيلي لشخص معين",
use: '',
category: "spi",
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
    

         const secktor = "secktor"
         let users = citel.mentionedJid ? citel.mentionedJid : citel.msg.contextInfo.participant || false;
         if(!users) return citel.reply('֎╎مـنـشـن مـيـن تـبـغـى تـضـيـف لـه/م')
         users.forEach(async (user) => {
           await eco.give(user, secktor, parseInt(text.split(' ')[0]));
         });
        return await Void.sendMessage(citel.chat,{text: ` ֎╎تـم ضـفـت ${parseInt(text.split(' ')[0])} ل ${users.length} `,mentions:users},{quoted:citel})
    }
)

//=====================================================================

cmd({
pattern: "جرد",
desc: "تجرد البيلي من شخص معين",
use: '',
category: "spi",
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

        const secktor = "secktor"
        let users = citel.mentionedJid ? citel.mentionedJid : citel.msg.contextInfo.participant || false;
if(!users) return citel.reply('منشن مين تبغى تجرد منه/م')
for (const user of users) {
 await eco.deduct(user, secktor, parseInt(text.split(' ')[0]));
}

       return await Void.sendMessage(citel.chat,{text: `تم اخذت ${parseInt(text.split(' ')[0])}`,mentions:[users]},{quoted:citel})

   }
)

//=====================================================================
