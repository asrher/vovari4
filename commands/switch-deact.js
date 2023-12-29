
const { sck,cmd, getAdmin, tlang } = require('../lib')

//=====================================================================
cmd({
pattern: "عطلل",
desc: "",
use: '',
category: "",
filename: __filename,
  },
    async(Void, citel, text,{ isCreator }) => {
//=====================================================================	
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)
        const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        
//=====================================================================  
        if (!citel.isGroup) return citel.reply("هذا الامر خاص بالقروب")
        if (!text) return citel.reply(`اختر وش تبي تعطل\n1-الاحداث\n2-البنك\n3-مضاد_روابط`)
        if(!isCreator) return citel.reply(tlang().owner)
        switch (text.split(" ")[0]) {
           case 'مضاد_روابط':
               {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   if (!checkgroup) {
                       await new sck({ id: citel.chat, antilink: "false" })
                           .save()
                       return citel.reply('تم تعطيل مضاد الروابط')
                   } else {
                       if (checkgroup.antilink == "false") return citel.reply("معطل مسبقا")
                       await sck.updateOne({ id: citel.chat }, { antilink: "false" })
                       citel.reply('تم تعطيل مضاد الروابط')
                       return
                   }
               }
               break

               case 'البوت':
               {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   if (!checkgroup) {
                       await new sck({ id: citel.chat, botenable: "false" })
                           .save()
                       return citel.reply('تم تعطيل البوت')
                   } else {
                       if (checkgroup.botenable == "false") return citel.reply("معطل مسبقا")
                       await sck.updateOne({ id: citel.chat }, { botenable: "false" })
                       citel.reply('تم تعطيل البوت')
                       return
                   }
               }
               break


                      case 'البنك':
               {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   if (!checkgroup) {
                       await new sck({ id: citel.chat, economy: "false" })
                           .save()
                       return citel.reply('تم تعطيل البنك')
                   } else {
                       if (checkgroup.economy == "false") return citel.reply("معطل مسبقا")
                       await sck.updateOne({ id: citel.chat }, { economy: "false" })
                       citel.reply('تم تعطيل البنك')
                       return
                   }
               }
               break

               case 'بروفايل':
               {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   if (!checkgroup) {
                       await new sck({ id: citel.chat, lvl: "false" })
                           .save()
                       return citel.reply('تم تعطيل البروفايل')
                   } else {
                       if (checkgroup.lvl == "false") return citel.reply("معطل مسبقا")
                       await sck.updateOne({ id: citel.chat }, { lvl: "false" })
                       citel.reply('تم تعطيل البروفايل')
                       return
                   }
               }
               break

               case 'جرجير':
               {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   if (!checkgroup) {
                       await new sck({ id: citel.chat, chatt: "false" })
                           .save()
                       return citel.reply('تم تعطيل جرجير')
                   } else {
                       if (checkgroup.chatt == "false") return citel.reply("معطل مسبقا")
                       await sck.updateOne({ id: citel.chat }, { chatt: "false" })
                       citel.reply('تم تعطيل جرجير')
                       return
                   }
               }
               break

               case 'كت':
               {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   if (!checkgroup) {
                       await new sck({ id: citel.chat, ktt: "false" })
                           .save()
                       return citel.reply('تم تعطيل كت')
                   } else {
                       if (checkgroup.ktt == "false") return citel.reply("معطل مسبقا")
                       await sck.updateOne({ id: citel.chat }, { ktt: "false" })
                       citel.reply('تم تعطيل كت')
                       return
                   }
               }
               break
               case 'الترقيات':
               {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   if (!checkgroup) {
                       await new sck({ id: citel.chat, pdm: "false" })
                           .save()
                       return citel.reply('تم تعطيل الترقيات')
                   } else {
                       if (checkgroup.pdm == "false") return citel.reply("معطل مسبقا")
                       await sck.updateOne({ id: citel.chat }, { pdm: "false" })
                       citel.reply('تم تعطيل الترقيات')
                       return
                   }
               }
               break
               case 'استمارة':
               {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   if (!checkgroup) {
                       await new sck({ id: citel.chat, istimara: "false" })
                           .save()
                       return citel.reply('تم تعطيل الاستمارات')
                   } else {
                       if (checkgroup.istimara == "false") return citel.reply("معطل مسبقا")
                       await sck.updateOne({ id: citel.chat }, { istimara: "false" })
                       citel.reply('تم تعطيل الاستمارات')
                       return
                   }
               }
               break
               case 'الاحداث':
                   {
                       let checkgroup = await sck.findOne({ id: citel.chat })
                       if (!checkgroup) {
                           await new sck({ id: citel.chat, events: "false" })
                               .save()
                           return citel.reply("تم تعطيل الاحداث")
                       } else {
                           if (checkgroup.events == "false") return citel.reply("معطل مسبقا")
                           await sck.updateOne({ id: citel.chat }, { events: "false" })
                           return citel.reply("تم تعطيل الاحداث")
                       }
                   }
                   break
               default:
                   {
                       citel.reply("اختر وش تبي تعطل\n1-الاحداث\n2-البنك\n3-مضاد_روابط")
                   }
        }
    }
)
