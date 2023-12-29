
const { sck,sck1, cmd,getAdmin  } = require('../lib')
const moment = require("moment-timezone");
const Levels = require("discord-xp");
const canvacord = require("canvacord");
const eco = require('siraj-bank')
const ty = eco.connect(mongodb);

//=====================================================================

cmd({
    pattern: "المطور",
    react: "💙",
    desc: "إرسال رقم المطور",
    use: '',
    category: "member",
    filename: __filename,
      },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD';
    
        return await Void.sendMessage(citel.chat, { contacts: { displayName: Config.ownername, contacts: [{ vcard }] } }, { quoted: citel });
    });

//=====================================================================

cmd({
pattern: "رابطي",
desc: "إنشاء رابط لرقمك",
use: '',
category: "member",
filename: __filename,
 },
        async(Void, citel, text) => {
            let users = citel.sender ? citel.sender.split('@')[0] : citel.quoted ? citel.quoted.sender.split('@')[0] : text.replace('@')[0]
            citel.reply(`https://wa.me/${users}`)

        }
    )
    
//=====================================================================

cmd({
pattern: "التوب",
desc: "معرفة توب متفاعلين فالقروب",
use: '',
category: "spi",
filename: __filename,
  },
async (Void, citel) => {
    const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
    let leadtext = `
⊹⊱≼━━━⌬〔 تـوب الـمـتـفـاعـلـيـن 〕⌬━━━≽⊰⊹
\n\n`;

    for (let i = 0; i < fetchlb.length; i++) {
        const lvpoints = fetchlb[i].level;
        let registeredUser = await sck1.findOne({ id: fetchlb[i].userID });
        let name = registeredUser ? registeredUser.name : "دون لقب";
      var role = "الدون 😔💙.";
                    if (lvpoints <= 2) {
                        var role = "مبتدأ";
                    } else if (lvpoints <= 4) {
                        var role = "متدرب";
                    } else if (lvpoints <= 6) {
                        var role = "عضو جيد";
                    } else if (lvpoints <= 8) {
                        var role = "عضو مميز";
                    } else if (lvpoints <= 10) {
                        var role = "عضو ذهبي";
                    } else if (lvpoints <= 12) {
                        var role = "عضو ماسي";
                    } else if (lvpoints <= 14) {
                        var role = "رقيب III";
                    } else if (lvpoints <= 16) {
                        var role = "رقيب II";
                    } else if (lvpoints <= 18) {
                        var role = "رقيب I";
                    } else if (lvpoints <= 20) {
                        var role = "عقيد III";
                    } else if (lvpoints <= 22) {
                        var role = "عقيد II";
                    } else if (lvpoints <= 24) {
                        var role = "عقيد I";
                    } else if (lvpoints <= 26) {
                        var role = "نقيب III";
                    } else if (lvpoints <= 28) {
                        var role = "نقيب II";
                    } else if (lvpoints <= 30) {
                        var role = "نقيب I";
                    } else if (lvpoints <= 32) {
                        var role = "ملازم III";
                    } else if (lvpoints <= 34) {
                        var role = "ملازم II";
                    } else if (lvpoints <= 36) {
                        var role = "ملازم I";
                    } else if (lvpoints <= 38) {
                        var role = "جنرال I";
                    } else if (lvpoints <= 40) {
                        var role = "زعيم I";
                    } else if (lvpoints <= 42) {
                        var role = "اسطوري III";
                    } else if (lvpoints <= 44) {
                        var role = "اسطوري II";
                    } else if (lvpoints <= 46) {
                        var role = "اسطوري I";
                    } else if (lvpoints <= 55) {
                        var role = "زوجة جيرايا 😔💙";
                    }

        let ttms = fetchlb[i].xp / 8;
        let profileLink = `https://wa.me/${fetchlb[i].userID.split('@')[0]}`;
        leadtext += `*${i + 1} ╎ اللقب*: ${name} \n*֎╎ المستوى*: ${lvpoints}\n*֎╎ عدد الرسائل*: ${ttms}\n*֎╎ رقمه*: ${profileLink}\n\n`;
    }
    return citel.reply(leadtext);
});

//=====================================================================

cmd({
pattern: "رابطه",
desc: "إنشاء رابط لأي شخص",
use: '',
category: "member",
filename: __filename,
  },
        async(Void, citel, text) => {
            let users = citel.mentionedJid ? citel.mentionedJid[0].split('@')[0] : citel.quoted ? citel.quoted.sender.split('@')[0] : text.replace('@')[0]
            citel.reply(`https://wa.me/${users}`)

        }
    )

    //=====================================================================

cmd({
pattern: "بروفايله",
desc: "معرفة مستوى ورسائل خويك",
use: '',
category: "spi",
filename: __filename,
  },
async (Void, citel, text) => {

    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.lvl || "false";
    if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل بروفايل فـالـمـجـمـوعـة\n\nادخل قروب البوت كلشي متوفر فيه اكتب .مساعدة");
    
    const groupAdmins = await getAdmin(Void, citel);
    const targetUser = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : false;
    const isAdmin = citel.isGroup ? groupAdmins.includes(targetUser) : false;
    if (!targetUser) {
        return citel.reply("منشن احد");
    }
    const user = await sck1.findOne({ id: targetUser })
    let disc = targetUser.substring(3, 7);
    const userq = await Levels.fetch(targetUser, "RandomXP");
    const lvpoints = userq.level;
    const secktor = "secktor"
    const balance = await eco.balance(targetUser, secktor);

    const registeredUser = await sck1.findOne({ id: targetUser });
    const registeredName = registeredUser ? registeredUser.name : "دون لقب";
    
    var role = "الدون 😔💙.";
            if (lvpoints <= 2) {
                var role = "مبتدأ";
            } else if (lvpoints <= 4) {
                var role = "متدرب";
            } else if (lvpoints <= 6) {
                var role = "عضو جيد";
            } else if (lvpoints <= 8) {
                var role = "عضو مميز";
            } else if (lvpoints <= 10) {
                var role = "عضو ذهبي";
            } else if (lvpoints <= 12) {
                var role = "عضو ماسي";
            } else if (lvpoints <= 14) {
                var role = "رقيب III";
            } else if (lvpoints <= 16) {
                var role = "رقيب II";
            } else if (lvpoints <= 18) {
                var role = "رقيب I";
            } else if (lvpoints <= 20) {
                var role = "عقيد III";
            } else if (lvpoints <= 22) {
                var role = "عقيد II";
            } else if (lvpoints <= 24) {
                var role = "عقيد I";
            } else if (lvpoints <= 26) {
                var role = "نقيب III";
            } else if (lvpoints <= 28) {
                var role = "نقيب II";
            } else if (lvpoints <= 30) {
                var role = "نقيب I";
            } else if (lvpoints <= 32) {
                var role = "ملازم III";
            } else if (lvpoints <= 34) {
                var role = "ملازم II";
            } else if (lvpoints <= 36) {
                var role = "ملازم I";
            } else if (lvpoints <= 38) {
                var role = "جنرال I";
            } else if (lvpoints <= 40) {
                var role = "زعيم I";
            } else if (lvpoints <= 42) {
                var role = "اسطوري III";
            } else if (lvpoints <= 44) {
                var role = "اسطوري II";
            } else if (lvpoints <= 46) {
                var role = "اسطوري I";
            } else if (lvpoints <= 55) {
                var role = "الخاتِم 😔💙";
            }
    // ... add more role checks as you did in the original code

    let ttms = `${userq.xp}` / 8;
    let users = targetUser ? targetUser.split('@')[0] : text.replace('@')[0];

    const timenow = moment(moment())
        .format('HH:mm:ss')
    moment.tz.setDefault('Asia/Riyadh')
        .locale('id')

    let greeting = `
  السـلام عـلـيـكـم
  
  [ إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا. ]
  
  ⊹⊱≼━━━⌬〔🌗〕⌬━━━≽⊰⊹
      
          ֎╎اللقب ⟦ ${registeredName} ⟧
          ֎╎نقاش ⟦ ${user.ni9ax} ⟧
          ֎╎مسابقات ⟦ ${user.mosaba} ⟧
          ֎╎النقاط ⟦ ${user.points} ⟧
          ֎╎التصنيف ⟦ ${role} ⟧
          ֎╎الرسائل ⟦ ${ttms} ⟧
          ֎╎البنك ⟦ ${balance.wallet} 💰 بيلي ⟧
          ֎╎الرابط ⟦ https://wa.me/${users} ⟧
     
          اكتب .تقييم لتقييم البوت
      ⊹⊱≼━━━⌬〔🌗〕⌬━━━≽⊰⊹`;

  if (isAdmin) {
      greeting = `
      السـلام عـلـيـكـم
      
      [ إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا. ]
      
      ⊹⊱≼━━━⌬〔🌗〕⌬━━━≽⊰⊹
          
          ֎╎اللقب ⟦ ${registeredName} ⟧
          ֎╎النجوم ⟦ ${user.nojom} ⭐ ⟧
          ֎╎نقاش ⟦ ${user.ni9ax} ⟧
          ֎╎مسابقات ⟦ ${user.mosaba} ⟧
          ֎╎النقاط ⟦ ${user.points} ⟧
          ֎╎التصنيف ⟦ ${role} ⟧
          ֎╎الرسائل ⟦ ${ttms} ⟧
          ֎╎البنك ⟦ ${balance.wallet} 💰 بيلي ⟧
          ֎╎الرابط ⟦ https://wa.me/${users} ⟧
         
      
          ⊹⊱≼━━━⌬〔🌗〕⌬━━━≽⊰⊹`;
  }


  let textr = '';
  textr += greeting;

    try {
        ppuser = await Void.profilePictureUrl(targetUser, "image");
    } catch {
        ppuser = 'https://i.ibb.co/724hb34/4629879b5b5c7890ce414dcad00376ae.jpg';
    }

    const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
    const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
    const imageLinks = [
           "https://i.ibb.co/dMXn5wF/2.jpg",
    "https://i.ibb.co/NNwzZzV/18.jpg",
    "https://i.ibb.co/sCqYLsb/17.jpg",
    "https://i.ibb.co/8780NWW/16.jpg",
    "https://i.ibb.co/mvV1yW2/14.jpg",
    "https://i.ibb.co/Fh6bWNj/13.jpg",
    "https://i.ibb.co/GPrrfdZ/12.jpg",
    "https://i.ibb.co/F7zGsJd/11.jpg",
    "https://i.ibb.co/wzbksTF/10.jpg",
    "https://i.ibb.co/5G1CwV4/9.jpg",
    "https://i.ibb.co/54PVqNF/8.jpg",
    "https://i.ibb.co/ngYy8nC/15.jpg",
    "https://i.ibb.co/XJnRjh0/6.jpg",
    "https://i.ibb.co/F89mG8x/7.jpg",
    "https://i.ibb.co/VS7fgkJ/4.jpg",
    "https://i.ibb.co/0Bgqzy9/3.jpg",
    "https://i.ibb.co/WKyLrX6/5.jpg",
    "https://i.ibb.co/6Bv3wZ6/1.jpg",
             ];
    const randomImageLink = imageLinks[Math.floor(Math.random() * imageLinks.length)];

    const rank = new canvacord.Rank()
        .setAvatar(ppuser)
        .setLevel(userq.level) 
        .setLevelColor(randomHex, randomHex)
        .setCurrentXP(userq.xp)
        .setStatus("online")
        .setBackground("IMAGE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ2FaU2C-dSC-6OlY14wM_7hWajwD3x41cA&usqp=CAU")
        .setOverlay(randomHex, 100, false)
        .setRequiredXP(Levels.xpFor(userq.level + 1))
        .setProgressBar(randomHexs, "COLOR")
        .setBackground("IMAGE", randomImageLink)
        .setRank(0, role, false)
        .setUsername("B K 9")
        .setDiscriminator(disc);

    rank.build()
        .then(async (data) => {
            Void.sendMessage(citel.chat, {
                image: data,
                caption: textr,
            }, {
                quoted: citel,
            });
        });
})

//=====================================================================

cmd({
pattern: "توب_مشرفين",
desc: "معرفة افضل المشرفين",
use: '',
category: "member",
filename: __filename,
  }, async (Void, citel) => {
        const fetchlb = await sck1.find({}).sort({ nojom: -1 }).limit(5); 
    
        let leadtext = `
    ⊹⊱≼━━━⌬〔 تـوب الـمـشـرفـيـن 〕⌬━━━≽⊰⊹
    \n\n`;
    
        for (let i = 0; i < fetchlb.length; i++) {
            const user = fetchlb[i];
            let name = user.name || "دون لقب";
            let ttmsnjm = user.nojom;
            let profileLink = `https://wa.me/${user.id.split('@')[0]}`;
            leadtext += `*${i + 1} ╎ اللقب*: ${name} \n*֎╎ عدد النجوم*: ${ttmsnjm} ⭐\n*֎╎ رقمه*: ${profileLink}\n\n`;
        }
        return citel.reply(leadtext);
    });

//=====================================================================

cmd({
pattern: "توب_لاعبين",
desc: "معرفة افضل لاعبين البوت",
use: '',
category: "member",
filename: __filename,
  }, async (Void, citel) => {
    const fetchlb = await sck1.find({}).sort({ points: -1 }).limit(5); // Fetch top 5 users based on ni9ax

    let leadtext = `
⊹⊱≼━━━⌬〔 تـوب الـلاعـبـيـن  〕⌬━━━≽⊰⊹
\n\n`;

    for (let i = 0; i < fetchlb.length; i++) {
        const user = fetchlb[i];
        let name = user.name || "دون لقب";
        let ttmspnt = user.points;
        let profileLink = `https://wa.me/${user.id.split('@')[0]}`;
        leadtext += `*${i + 1} ╎ اللقب*: ${name} \n*֎╎ عدد النقاط*: ${ttmspnt}\n*֎╎ رقمه*: ${profileLink}\n\n`;
    }
    return citel.reply(leadtext);
});

//=====================================================================

cmd({
pattern: "توب_نقاش",
desc: "معرفة افضل المناقشين",
use: '',
category: "member",
filename: __filename,
  }, async (Void, citel) => {
    const fetchlb = await sck1.find({}).sort({ ni9ax: -1 }).limit(5); // Fetch top 5 users based on ni9ax

    let leadtext = `
⊹⊱≼━━━⌬〔 تـوب الـمـنـاقـشـيـن 〕⌬━━━≽⊰⊹
\n\n`;

    for (let i = 0; i < fetchlb.length; i++) {
        const user = fetchlb[i];
        let name = user.name || "دون لقب";
        let ttmsn9x = user.ni9ax;
        let profileLink = `https://wa.me/${user.id.split('@')[0]}`;
        leadtext += `*${i + 1} ╎ اللقب*: ${name} \n*֎╎ عدد النقاشات*: ${ttmsn9x}\n*֎╎ رقمه*: ${profileLink}\n\n`;
    }
    return citel.reply(leadtext);
});

//=====================================================================

cmd({
pattern: "توب_مسابقات",
desc: "معرفة افضل من يفوز فالمسابقات",
use: '',
category: "member",
filename: __filename,
  }, async (Void, citel) => {
    const fetchlb = await sck1.find({}).sort({ mosaba: -1 }).limit(5); // Fetch top 5 users based on ni9ax

    let leadtext = `
⊹⊱≼━━━⌬〔 تـوب الـفـائـزيـن 〕⌬━━━≽⊰⊹
\n\n`;

    for (let i = 0; i < fetchlb.length; i++) {
        const user = fetchlb[i];
        let name = user.name || "دون لقب";
        let ttmsmsb = user.mosaba;
        let profileLink = `https://wa.me/${user.id.split('@')[0]}`;
        leadtext += `*${i + 1} ╎ اللقب*: ${name} \n*֎╎ عدد المسابقات*: ${ttmsmsb}\n*֎╎ رقمه*: ${profileLink}\n\n`;
    }
    return citel.reply(leadtext);
});

//=====================================================================