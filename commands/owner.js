const { sck, sck1,cmd, Config, delnote, allnotes, tlang, delallnote, addnote, sleep,getAdmin } = require('../lib')
const Siraj = require('../lib/commands')
const Levels = require("discord-xp");

//=====================================================================


cmd({
  pattern: "--صلاحيات",
  desc: "Remove 'alow' from all users",
  use: '',
  category: "admine",
  filename: __filename,
}, async (Void, citel) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  const groupAdmins = await getAdmin(Void, citel);
  const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
  if (!isAdmins) return citel.reply(tlang().admin);

  try {
    await sck1.updateMany({ alow: "true" }, { $set: { alow: "false" } });
    return citel.reply("تم إزالة الصلاحيات من جميع المستخدمين الذين لديهم الصلاحيات.");
  } catch {
    return citel.reply("حدث خطأ أثناء محاولة إزالة الصلاحيات.");
  }
});


cmd({
pattern: "ادخل",
desc: "",
use: '',
category: "",
filename: __filename,
  },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`֎╎ويـن  الـرابـط ؟ ${tlang().greet}`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com"))
                citel.reply(" ֎╎الـرابـط غـلـط ");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Void.groupAcceptInvite(result)
                .then((res) => citel.reply("تم"))
                .catch((err) => citel.reply(" ֎╎مـقـدرت ادخـل"));

        }
    )

//=====================================================================

cmd({
pattern: "قروبات",
desc: "",
use: '',
category: "",
filename: __filename,
  },
    async(Void, citel, text,{ isCreator }) => {
        if (!isCreator) return citel.reply(tlang().owner)
        let getGroups = await Void.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);
        let jackhuh = `جميع قروبات البوت\n\n`
        for (let i of anu) {
            let metadata = await Void.groupMetadata(i);
            await sleep(500)
            jackhuh += `*الاسم:* ${metadata.subject}\n`
            jackhuh += `*الاعضاء :* ${metadata.participants.length}\n`
            jackhuh += `*الايدي:* ${i}\n\n`

        }
        citel.reply(jackhuh)

    }
)

//=====================================================================

cmd({
pattern: "ترحيب_دخول",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                await new sck({ id: citel.chat, welcome: text,events:'true' }).save()
                return citel.reply('تم')
            } else {
                await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
                return citel.reply('تم')
                
            }      
}
)

//=====================================================================

cmd({
pattern: "رسالة_خروج",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                await new sck({ id: citel.chat, goodbye: text,events:'true' }).save()
                return citel.reply('تم');
            } else {
                await await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' })
                return citel.reply('تم');     
            }      
}
)

//=====================================================================

cmd({
pattern: "اوت",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async(Void, citel, text,{ isCreator }) => 
{	
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!isCreator) return citel.reply(tlang().owner)
if(!text) return await citel.reply("اكتب رمز الدولة.")
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
const groupAdmins = await getAdmin(Void, citel)
    let isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
    if (!isAdmins)
{
    if(isCreator) citel.reply("لازم اشراف")
    else return citel.reply(tlang().admin);
}
let find = text.split(" ")[0].replace('+' , '');
let error = '*لم يتم طرد هؤلاء المستخدمين* \n\t' ;
let users = await groupMetadata.participants
let hmanykik = 0;
let iskikstart = false ;
const botNumber = await Void.decodeJid(Void.user.id)
for (let i of users) { 
    let isuseradmin  =  groupAdmins.includes(i.id) || false 
    if(i.id.startsWith(find) && !isuseradmin)
    { 
        if(!iskikstart)
        {
            iskikstart = true ;
            await citel.reply(`*طرد جميع الاعظاء رقمهم يبدا ب ${find}*`)
        }
        try { await Void.groupParticipantsUpdate(citel.chat, [i.id], "remove"); hmanykik++ ;  }
        catch (e) { console.log("خطأ أثناء الطرد : " , e) } 	
    }
}
if(hmanykik == 0) return await citel.reply(`لا يوجد اعضاء من هذه الدولة ${find}`)
    else return await citel.reply(`*${hmanykik.toString()} طرد جميع الاعظاء رقمهم يبدا ب ${find}*`)
})

//=====================================================================

cmd({
pattern: "رقم",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async(Void, citel, text,{ isCreator }) => 
{	
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!isCreator) return citel.reply(tlang().owner)
if(!text) return await citel.reply("*اكتب رمز الدولة.*")
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
const groupAdmins = await getAdmin(Void, citel)
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
    if (!isAdmins && !isCreator ) return citel.reply(tlang().admin);
let find = text.split(" ")[0];
let users = await groupMetadata.participants
let nums = `*لائحة الاعضاء الذين يبدا رقمهم ب ${find}*\n`
let num = '';
for (let i of users) {  if(i.id.startsWith(find)) num += i.id.split("@")[0] +"\n";   }
if(!num) {nums =`*لا يوجد اعضاء من هذه الدولة ${find}*` }
else { nums += num+Config.caption }
await citel.reply(nums)		
})

//=====================================================================

cmd({
pattern: "نشر",
fromMe: true,
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner);
    let getGroups = await Void.groupFetchAllParticipating();
    let groups = Object.entries(getGroups)
        .slice(0)
        .map((entry) => entry[1]);
    let anu = groups.map((v) => v.id);
    citel.reply(`ثواني`);
    for (let i of anu) {
        await sleep(1500);
        let txt = `*--❗🤖 إعـلانـات الـبـوت 🤖--*\n\n${text}`;
        let buttonMessaged = {
            image: log0,
            caption: txt,
                footer: citel.pushName,
                headerType: 1,
            };
        await Void.sendMessage(i, buttonMessaged, {
            quoted: citel,
        });
    }
    citel.reply(`تم في ${anu.length}`);
});


//=====================================================================

cmd({
pattern: "ملاحظة",
desc: "",
use: '',
category: "",
filename: __filename,
  },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!text) return citel.reply("")
            await addnote(text)
            return citel.reply(`تم`)

        }
    )
 
//=====================================================================

cmd({
pattern: "فك_البان",
desc: "",
use: '',
category: "",
filename: __filename,
  },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply("هذا الأمر خاص بالمطور")
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply("منشن شخص")
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        console.log(usr.ban)
                        return citel.reply(`${pushnamer} تم فك البان عن`)
                    } else {
                        console.log(usr.ban)
                        if (usr.ban !== "true") return citel.reply(`${pushnamer} مب مبند هو `)
                        await sck1.updateOne({ id: users }, { ban: "false" })
                        return citel.reply(`${pushnamer} يمكنه استعمال البوت الان`)
                    }
                })
            } catch {
                return citel.reply("منشن شخص")
            }


        }
    )
    
//=====================================================================

cmd({
pattern: "حذف_ملاحظة",
desc: "",
use: '',
category: "",
filename: __filename,
  },
        async(Void, citel, text,{ isCreator }) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delnote(text.split(" ")[0])
             return citel.reply(`تم حذف الملاحظة رقم ${text.split(" ")[0]}\ `)

        }
    )

//=====================================================================

cmd({
pattern: "حذف_ملاحظات",
desc: "",
use: '',
category: "",
filename: __filename,
  },
        async(Void, citel, text, isCreator) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delallnote()
             return citel.reply(`تم حذف جميع الملاحظات`)

        }
    )

//=====================================================================

cmd({
pattern: "بان",
desc: "",
use: '',
category: "",
filename: __filename,
  },
        async(Void, citel, text,{ isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;

                if (!users) return citel.reply(`منشن شخص`)
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        await new sck1({ id: users, ban: "true" }).save()
                        return citel.reply(`تم حضر ${pushnamer} من استخدام البوت`)
                    } else {
                        if (usr.ban == "true") return citel.reply(`${pushnamer} محضور مسبقا`)
                        await sck1.updateOne({ id: users }, { ban: "true" })
                        return citel.reply(`تم حضر ${pushnamer} من استخدام البوت`)
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
pattern: "ملاحظات",
desc: "",
use: '',
category: "",
filename: __filename,
  },
          async(Void, citel, text,{ isCreator }) => {
              const { tlang } = require('../lib')
              if (!isCreator) return citel.reply(tlang().owner)
              const note_store = new Array()
              let leadtext = `الملاحظات التي تم تسجيلها هي:-\n\n`
              leadtext += await allnotes()
              return citel.reply(leadtext)
      
          }
      )

      //=====================================================================
          
cmd({
pattern: "توقيف",
desc: "",
use: '',
category: "",
filename: __filename,
  },
        async(Void, citel, text , {isCreator}) => {
          if (!citel.isGroup) return citel.reply(tlang().group);
          const groupAdmins = await getAdmin(Void, citel)    
          const botNumber = await Void.decodeJid(Void.user.id)
          const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
          const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
          if (!isAdmins && !isCreator) return citel.reply(tlang().admin)
          let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
        
          let textt = text ? text.toLowerCase().trim() : false;
          let cmdName = textt ? textt.split(" ")[0] : '';  
          if (!cmdName) { return await citel.reply(`*اكتب الأمر الي تبغى اعطله.*`) }
          else if (cmdName.startsWith("info") || cmdName.startsWith("list") || cmdName.startsWith("cmds") ) { return await citel.reply( checkinfo.disablecmds==='false'?`*لا يوجد امر معطل في المجموعة الحالية.*` : "*_الأوامر المعطلة :_* ```"+checkinfo.disablecmds.replace("false,",'')+ "```"); }
          else if (cmdName.startsWith("تشغيل") || cmdName.startsWith("توقيف")) { return await citel.reply(`*غبي انت؟*`)}
          else if(cmdName) {
            const cmds = Siraj.commands.find((cmd) => cmd.pattern === cmdName || (cmd.alias && cmd.alias.includes(cmdName)));
if (cmds) {
  let newCmd = cmds.pattern;
                let regex = new RegExp(`\\b${newCmd}\\b`, 'u');
                if (regex.test(checkinfo.disablecmds)) {return await citel.reply("*هذا الأمر تم توقيفه بالفعل.*"); }
                var newDisable_Cmd = checkinfo.disablecmds + ','+ cmds.pattern
                await sck.updateOne({ id: citel.chat }, { disablecmds : newDisable_Cmd });
                let lists = newDisable_Cmd.replace("false,",'')
                return await citel.reply(`*تم تعطيل الأمر "${cmdName}"*${lists === ''? '' : "\n*_الأوامر المعطلة :_* ```"+lists+ "```" }`)
            }else return await citel.reply(`*هذا الأمر '${cmdName}' غير موجود فالبوت.*`)
          }
        })

      //=====================================================================-

cmd({
pattern: "تشغيل",
desc: "",
use: '',
category: "",
filename: __filename,
  },
        async(Void, citel, text , {isCreator}) => {
          if (!citel.isGroup) return citel.reply(tlang().group);
          const groupAdmins = await getAdmin(Void, citel)    
          const botNumber = await Void.decodeJid(Void.user.id)
          const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
          const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
          if (!isAdmins && !isCreator) return citel.reply(tlang().admin)
          let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
        
          let textt = text ? text.toLowerCase().trim() : false;
          let cmdName = textt ? `,${textt.split(" ")[0]}` : '';
          let ReplaceCmd = cmdName;
          let regex = new RegExp(`\\b${ReplaceCmd}\\b`, 'u');
        
        
       if (!cmdName || cmdName === '') {
  return await citel.reply(`*اكتب الأمر الذي تريد تشغيله.*`);
} else if (cmdName.startsWith("الكل")) {
  await sck.updateOne({ id: citel.chat }, { disablecmds: 'false' });
  return await citel.reply(`*تم تشغيل كل الأوامر.*`);
} else if (checkinfo.disablecmds.includes(cmdName)) {
  let newCmds = checkinfo.disablecmds.replace(cmdName, '');
  await sck.updateOne({ id: citel.chat }, { disablecmds: newCmds });
  return await citel.reply(`*"${cmdName}" تم تشغيله.*`);
} else {
  return await citel.reply(`مافي أمر موقف بهذا الاسم. *${cmdName.replace("," , "")}*`);
}
})

      //=====================================================================

cmd({
pattern: "اكسبي",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {

    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isCreator) return citel.reply(tlang().owner)

    let users = citel.mentionedJid;
    if (!users || users.length === 0) return citel.reply('منشن احد');

    const xp = parseInt(text.split(' ')[0]);
    if (isNaN(xp) || xp < 0) return citel.reply('اكتب المقدار بالطريقة الصحيحة.');

    let updatedCount = 0;
    for (const user of users) {
        await Levels.setXp(user, "RandomXP", xp);
        updatedCount++;
    }

    return await Void.sendMessage(citel.chat, {
        text: `تم.`,
        mentions: users
    }, { quoted: citel });
})

//=====================================================================

cmd({
pattern: "+اكسبي",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {

  const groupAdmins = await getAdmin(Void, citel);
  const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
  if (!isCreator) return citel.reply(tlang().owner)
  
  let users = citel.mentionedJid;
  if (!users || users.length === 0) return citel.reply('منشن احد');

  const amount = parseInt(text.split(' ')[0]);
  if (isNaN(amount) || amount <= 0) return citel.reply('اكتب المقدار بالطريقة الصحيحة.');

  let addedCount = 0;
  for (const user of users) {
      await Levels.appendXp(user, "RandomXP", amount);
      addedCount++;
  }

  return await Void.sendMessage(citel.chat, {
      text: `تم.`,
      mentions: users
  }, { quoted: citel });
})


//=====================================================================

cmd({
pattern: "-اكسبي",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {


    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isCreator) return citel.reply(tlang().owner)

    let users = citel.mentionedJid;
    if (!users || users.length === 0) return citel.reply('منشن احد');

    const xp = parseInt(text.split(' ')[0]);
    if (isNaN(xp) || xp <= 0) return citel.reply('اكتب المقدار بالطريقة الصحيحة.');

    let subtractedCount = 0;
    for (const user of users) {
        await Levels.subtractXp(user, "RandomXP", xp);
        subtractedCount++;
    }

    return await Void.sendMessage(citel.chat, {
        text: `تم.`,
        mentions: users
    }, { quoted: citel });
})


//=====================================================================

cmd({
pattern: "+لفل",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {
    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isCreator) return citel.reply(tlang().owner)
    
    let users = citel.mentionedJid;
    if (!users || users.length === 0) return citel.reply('منشن احد');

    const amount = parseInt(text.split(' ')[0]);
    if (isNaN(amount) || amount <= 0) return citel.reply('اكتب المقدار بالطريقة الصحيحة.');

    let addedCount = 0;
    for (const user of users) {
        await Levels.appendLevel(user, "RandomXP", amount);
        addedCount++;
    }

    return await Void.sendMessage(citel.chat, {
        text: `تم.`,
        mentions: users
    }, { quoted: citel });
})





//=====================================================================

cmd({
pattern: "-لفل",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {
    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isCreator) return citel.reply(tlang().owner)

    let users = citel.mentionedJid;
    if (!users || users.length === 0) return citel.reply('منشن احد');

    const amount = parseInt(text.split(' ')[0]);
    if (isNaN(amount) || amount <= 0) return citel.reply('اكتب المقدار بالطريقة الصحيحة.');

    let subtractedCount = 0;
    for (const user of users) {
        await Levels.subtractLevel(user, "RandomXP", amount);
        subtractedCount++;
    }

    return await Void.sendMessage(citel.chat, {
        text: `تم.`,
        mentions: users
    }, { quoted: citel });
})

//=====================================================================

cmd({
pattern: "لفل",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {


    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isCreator) return citel.reply(tlang().owner)

    let users = citel.mentionedJid;
    if (!users || users.length === 0) return citel.reply('منشن احد');

    const level = parseInt(text.split(' ')[0]);
    if (isNaN(level) || level < 0) return citel.reply('اكتب المقدار بالطريقة الصحيحة.');

    let updatedCount = 0;
    for (const user of users) {
        await Levels.setLevel(user, "RandomXP", level);
        updatedCount++;
    }

    return await Void.sendMessage(citel.chat, {
        text: `تم.`,
        mentions: users
    }, { quoted: citel });
})

//=====================================================================

cmd({
pattern: "+امر",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator } ) => {
  if (!isCreator) return await citel.reply(tlang().owner);
  if (!text) return await citel.send("اكتب الأمر ورد على ملصق");

  let a = text.split(",");
  var cmdName ;
  var newAlias ;
  let isSticker = false;

  if (citel.quoted) {
    let mime = citel.quoted.mtype;
    if (mime == 'stickerMessage' && text) 
    {
      isSticker = true ;
      cmdName = text.split(" ")[0];
      newAlias = `sticker-${citel.quoted.fileSha256}`
    }        
  }
  if (!isSticker && a.length > 1 ) {
    newAlias = a[0].trim().toLowerCase();
    cmdName = a[1].trim().toLowerCase();
  } else if (!isSticker ) {
    return await citel.send("اكتب اسم اخر للأمر");
  }
  if (newAlias.length < 1 ) {
    return await citel.reply("اكتب اسم اخر للأمر");
  }
  
  const cmd = Siraj.commands.find((cmd) => cmd.pattern === (cmdName)) || Siraj.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
  if (cmd) {
    // Store the alias in MongoDB
    await sck.updateOne({ id: citel.chat }, { [`cmdAlias.${newAlias}`]: cmd.pattern });
    return await citel.send(`تم إضافة الأمر "${cmd.pattern}" ك "${isSticker ? 'ملصق' : newAlias }"`);
  } else {
    return await citel.send(`الأمر( ${cmdName}) غير موجود في البوت اساسا.`);
  }
});

//=====================================================================

cmd({
pattern: "-امر",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator } ) => {
  if (!isCreator) return await citel.reply(tlang().owner);

  let Alias = typeof text === "string" ? text.trim().toLowerCase() : ''; // Check if text is a string before calling trim()
  let isSticker = false;
  if (citel.quoted) {
    if (citel.quoted.mtype == 'stickerMessage') {
      isSticker = true ;
      Alias = `sticker-${citel.quoted.fileSha256}`
    } else if (!text) {
      return await citel.send("رد على الملصق الي فيه الأمر");
    }
  } else if (!text) {
    return await citel.send("اكتب اسم الأمر الي ضفته");
  }

  const groupSettings = await sck.findOne({ id: citel.chat });
  if (groupSettings && groupSettings.cmdAlias[Alias]) {
    await sck.updateOne({ id: citel.chat }, { $unset: { [`cmdAlias.${Alias}`]: 1 } });
    return await citel.send(`تم الحذف`);
  } else {
    return await citel.send(`تم الحذف`);
  }
});

//=====================================================================

cmd({
pattern: "بند",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner);
    const nameToBan = text.trim();
    sck1.findOne({ name: nameToBan }).then(async (usr) => {
        if (!usr) {
            return citel.reply(`محد مسجل بذا الإسم "${nameToBan}".`);
        } else {
            if (usr.ban == "true") return citel.reply(`"${nameToBan}" مبند مسبقا`);
            await sck1.updateOne({ name: nameToBan }, { ban: "true" });
            return citel.reply(` "${nameToBan}" تم تبنيده`);
        }
    });
});

//=====================================================================

cmd({
pattern: "نقاط",
desc: "",
use: '',
category: "",
filename: __filename,
  }, async (Void, citel, text, { isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner);
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
      const newUser = new sck1({ userId, points: parseInt(amount) });
      await newUser.save();
    } else {
      mentionedUser.points += parseInt(amount);
      await mentionedUser.save();
    }
    citel.reply(`تم  ${amount}`);
  });

//=====================================================================

cmd({
pattern: "فك_تبنيد",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner);
    const nameToBan = text.trim();
    sck1.findOne({ name: nameToBan }).then(async (usr) => {
        if (!usr) {
            return citel.reply(`محد مسجل بذا الإسم "${nameToBan}".`);
        } else {
            if (usr.ban == "false") return citel.reply(`"${nameToBan}" مب مبند هو `);
            await sck1.updateOne({ name: nameToBan }, { ban: "false" });
            return citel.reply(` "${nameToBan}" تم `);
        }
    });
});
  //=====================================================================

cmd({
pattern: "المحظورين",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner);
    
    // Find all users who are banned
    const bannedUsers = await sck1.find({ ban: "true" });
    
    if (bannedUsers.length === 0) {
        return citel.reply("لا يوجد مستخدمين محظورين حاليًا.");
    }
    
    let bannedUserList = "قائمة المستخدمين المحظورين:\n";
    
    bannedUsers.forEach(user => {
        const pushnamer = Void.getName(user.id);
        bannedUserList += `*${pushnamer}*\n`;
    });
    
    citel.reply(bannedUserList);
});

  //=====================================================================

