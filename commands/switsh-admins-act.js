
const { cmd,sck, getAdmin, tlang } = require('../lib')
//=====================================================================
cmd({
pattern: "شغل",
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
                        await new sck({ id: citel.chat, antipromote: "true" })
                            .save()
                        return citel.reply('تم التشغيل')
                    } else {
                        if (checkgroup.antipromote == "true") return citel.reply("شغال مسبقا")
                        await sck.updateOne({ id: citel.chat }, { antipromote: "true" })
                        citel.reply('تم التشغيل')
                        return
                    }
                }
                break
            case 'مضاد_تخفيض':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antidemote: "true" })
                            .save()
                        return citel.reply('تم التشغيل')
                    } else {
                        if (checkgroup.antidemote == "true") return citel.reply("شغال مسبقا")
                        await sck.updateOne({ id: citel.chat }, { antidemote: "true" })
                        return citel.reply('تم التشغيل')
                    }
                }
                break
            default:
                {
                    citel.reply("اختر وش تبي تشغل")
                }
        }
    }
)
//=====================================================================	
