
const { cmd,sck, getAdmin, tlang } = require('../lib')
//=====================================================================
cmd({
pattern: "شغلل",
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
        if (!text) return citel.reply(`اختر وش تبي تشغل`)
        if(!isCreator) return citel.reply(tlang().owner)
        switch (text.split(" ")[0]) {
            case 'مضاد_روابط':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antilink: "true" })
                            .save()
                        return citel.reply('تم تشغيل مضاد الروابط')
                    } else {
                        if (checkgroup.antilink == "true") return citel.reply("شغال مسبقا")
                        await sck.updateOne({ id: citel.chat }, { antilink: "true" })
                        citel.reply('تم تشغيل مضاد الروابط')
                        return
                    }
                }
                break

                case 'البوت':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, botenable: "true" })
                            .save()
                        return citel.reply("تم تشغيل البوت")
                    } else {
                        if (checkgroup.botenable == "true") return citel.reply("شغال مسبقا")
                        await sck.updateOne({ id: citel.chat }, { botenable: "true" })
                        return citel.reply("تم تشغيل البوت")
                    }
                }
                break
          
                      case 'البنك':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, economy: "true" })
                            .save()
                        return citel.reply('تم تشغيل البنك')
                    } else {
                        if (checkgroup.economy == "true") return citel.reply("شغال مسبقا")
                        await sck.updateOne({ id: citel.chat }, { economy: "true" })
                        citel.reply('تم تشغيل البنك')
                        return
                    }
                }
                break

                case 'استمارة':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, istimara: "true" })
                            .save()
                        return citel.reply('تم تشغيل الاستمارات')
                    } else {
                        if (checkgroup.istimara == "true") return citel.reply("شغال مسبقا")
                        await sck.updateOne({ id: citel.chat }, { istimara: "true" })
                        citel.reply('تم تشغيل الاستمارات')
                        return
                    }
                }
                break

                case 'جرجير':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, chatt: "true" })
                            .save()
                        return citel.reply('تم تشغيل جرجير')
                    } else {
                        if (checkgroup.chatt == "true") return citel.reply("شغال مسبقا")
                        await sck.updateOne({ id: citel.chat }, { chatt: "true" })
                        citel.reply('تم تشغيل جرجير')
                        return
                    }
                }
                break

                case 'كت':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, ktt: "true" })
                            .save()
                        return citel.reply('تم تشغيل كت')
                    } else {
                        if (checkgroup.ktt == "true") return citel.reply("شغال مسبقا")
                        await sck.updateOne({ id: citel.chat }, { ktt: "true" })
                        citel.reply('تم تشغيل كت')
                        return
                    }
                }
                break

                case 'بروفايل':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, lvl: "true" })
                            .save()
                        return citel.reply(' تم تشغيل البروفايل ')
                    } else {
                        if (checkgroup.lvl == "true") return citel.reply("شغال مسبقا")
                        await sck.updateOne({ id: citel.chat }, { lvl: "true" })
                        citel.reply('تم تشغيل البروفايل')
                        return
                    }
                }
                break
                case 'الترقيات':
                    {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, pdm: "true" })
                                .save()
                            return citel.reply("تم تشغيل الترقيات")
                        } else {
                            if (checkgroup.pdm == "true") return citel.reply("شغال مسبقا")
                            await sck.updateOne({ id: citel.chat }, { pdm: "true" })
                            return citel.reply("تم تشغيل الترقيات")
                        }
                    }
                    break
            case 'الاحداث':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, events: "true" })
                            .save()
                        return citel.reply("تم تشغيل الأحداث")
                    } else {
                        if (checkgroup.events == "true") return citel.reply("شغال مسبقا")
                        await sck.updateOne({ id: citel.chat }, { events: "true" })
                        return citel.reply("تم تشغيل الأحداث")
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
