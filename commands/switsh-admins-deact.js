
const { sck,cmd, getAdmin, tlang } = require('../lib')

//=====================================================================
cmd({
pattern: "عطل",
desc: "",
use: '',
category: "",
filename: __filename,
  },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel);
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

        if (!citel.isGroup) return citel.reply("هذا الامر خاص بالقروب")
        if (!text) return citel.reply(`اختر وش تبي تعطل`)
        if (!(isAdmins || isCreator)) return citel.reply(tlang().admin);    
        switch (text.split(" ")[0]) {

           case 'مضاد_ترقية':
               {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   if (!checkgroup) {
                       await new sck({ id: citel.chat, antipromote: "false" })
                           .save()
                       return citel.reply('تم التعطيل')
                   } else {
                       if (checkgroup.antipromote == "false") return citel.reply("معطل مسبقا")
                       await sck.updateOne({ id: citel.chat }, { antipromote: "false" })
                       citel.reply('تم التعطيل')
                       return
                   }
               }
               break
               case 'مضاد_تخفيض':
                   {
                       let checkgroup = await sck.findOne({ id: citel.chat })
                       if (!checkgroup) {
                           await new sck({ id: citel.chat, antidemote: "false" })
                               .save()
                           return citel.reply('تم التعطيل')
                       } else {
                           if (checkgroup.antidemote == "false") return citel.reply("معطل مسبقا")
                           await sck.updateOne({ id: citel.chat }, { antidemote: "false" })
                           return citel.reply('تم التعطيل')
                       }
                   }
                   break
               default:
                   {
                       citel.reply("اختر وش تبي تعطل")
                   }
        }
    }
)

//=====================================================================	