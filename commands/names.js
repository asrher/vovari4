const { cmd, sck1, sck , tlang, getAdmin } = require('../lib');

//=====================================================================

const allowedNumber = ["34612538080", "966539128675"];
const akidaJIDs = ["34612538080@s.whatsapp.net", "966539128675@s.whatsapp.net"];

function isAkida(userJID) {
    return akidaJIDs.includes(userJID);
}

//=====================================================================

cmd({
pattern: "حذف_لقب",
desc: "حذف لقب العضو",
use: '',
category: "admine",
filename: __filename,
  },
async (Void, citel, match, { isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins || isAllowedUser || isCreator)) {
        return citel.reply(tlang().admin);
    }  
    

    const messageParts = citel.text.split(" ");
    
    if (messageParts.length < 2) {
        return citel.reply("اكتب اللقب الي تبغى احذفه.");
    }

    const usernameToDelete = messageParts.slice(1).join(" "); // Extract the name to delete from the message
    
    const existingUser = await sck1.findOne({ name: usernameToDelete });

    if (existingUser) {
        await sck1.deleteOne({ name: usernameToDelete });
        return citel.reply(`تم حذف اللقب : ${usernameToDelete}`);
    } else {
        return citel.reply(`اللقب "${usernameToDelete}" غير مسجل لأحد.`);
    }
})

//=====================================================================

cmd({
pattern: "لقب",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text) => {

    const username = text.trim(); // Trim any leading/trailing spaces from the input

    if (!username) {
        return citel.reply("اكتب لقب عشان اشوف اذا مأخوذ او لا.");
    }

    const existingUser = await sck1.findOne({ name: username });

    if (existingUser) {
        return citel.reply(`اللقب "${username}" مأخوذ من @${existingUser.id.split("@")[0]}.`);
    } else {
        return citel.reply(`اللقب "${username}" متوفر.`);
    }
})

//=====================================================================

cmd({
pattern: "لقبي",
desc: "معرفة لقبي",
use: '',
category: "member",
filename: __filename,
  },
async (Void, citel) => {

    const user = await sck1.findOne({ id: citel.sender });

    if (user) {
        return citel.reply(`لقبك هو: ${user.name}`);
    } else {
        return citel.reply("انت مب مسجل ");
    }
})

//=====================================================================

cmd({
pattern: "تسجيل",
desc: "تسجيل لقب للعضو",
use: '',
category: "admine",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {

    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins || isAllowedUser || isCreator)) {
        return citel.reply(tlang().admin);
    }  
  
    

    const parts = text.split(" "); // Split the input by spaces
    const targetUser = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : false;

    if (!targetUser) {
        return citel.reply("منشن الي تبغى تسجل بعدها الاسم.\n مثال : .تسجيل @منشن جيرايا");
    }

    const username = parts.slice(1).join(" "); // Rejoin the remaining parts as the username
    if (!username) {
        return citel.reply("وين الإسم ؟");
    }

    const existingUser = await sck1.findOne({ id: targetUser });
    const existingUsername = await sck1.findOne({ name: username });

    if (existingUser) {
        await sck1.deleteOne({ id: targetUser });
    }

    if (existingUsername) {
        return citel.reply(`الإسم  "${username}" مأخوذ من طرف  @${existingUsername.id.split("@")[0]}.`);
    }

    const newUser = new sck1({
        id: targetUser,
        name: username,
        bot: false, // Assuming the user is not a bot
    });

    try {
        await newUser.save();
        return citel.reply(` تم تسجيله بنجاح.`);
    } catch (error) {
        console.error(error);
        return citel.reply("حصل خطأ في التسجيل.");
    }
})

//=====================================================================

cmd({
pattern: "الالقاب",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, { isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins || isAllowedUser || isCreator)) {
        return citel.reply(tlang().admin);
    }  
  
    

    const registeredUsers = await sck1.find({}, 'name');

    if (registeredUsers.length === 0) {
        return citel.reply("لم يتم تسجيل أي أسماء بعد.");
    }

    // Define the Arabic alphabet letters
    const arabicAlphabet = "اأبتثجحخدذرزسشصضطظعغفقكلمنهوي";

    // Create an object to group names by their first letter
    const namesByLetter = {};

    // Sort the registered names alphabetically
    registeredUsers.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'ar'));

    // Group names by their first letter
    registeredUsers.forEach(user => {
        if (user.name) {
            const firstLetter = user.name.charAt(0);
            if (!namesByLetter[firstLetter]) {
                namesByLetter[firstLetter] = [];
            }
            namesByLetter[firstLetter].push(user.name);
        }
    });

    // Create the formatted response
    let response = "";
    arabicAlphabet.split('').forEach(letter => {
        if (namesByLetter[letter]) {
            response += `*⊹⊱≼━━━⌬〔 ${letter} 〕⌬━━━≽⊰⊹*\n`;
            namesByLetter[letter].forEach(name => {
                response += `↲ ${name}\n`;
            });
        }
    });

    return citel.reply(response);
})

//=====================================================================

cmd({
pattern: "لقبه",
desc: "معرفة لقب عضو",
use: '',
category: "member",
filename: __filename,
  },
async (Void, citel, match) => {

    const targetUser = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : false;

    if (!targetUser) {
        return citel.reply("منشن احد");
    }

    const user = await sck1.findOne({ id: targetUser });

    if (user) {
        return citel.reply(`لقبه هو: ${user.name}`);
    } else {
        return citel.reply(`العضو غير مسجل.`);
    }
})

//=====================================================================


cmd({
pattern: "المنشن",
desc: "",
use: '',
category: "",
filename: __filename,
  },
async (Void, citel, text, { isCreator }) => {

    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
    const participants = citel.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isAllowedUser = await sck1.findOne({ id: citel.sender, alow: "true" });

    if (!(isAdmins || isAllowedUser || isCreator)) {
        return citel.reply(tlang().admin);
    }  
  
    const registeredUsers = await sck1.find(); // Retrieve all registered users from the collection

    const admins = [];
    const members = [];
    let creatorName = "";

    for (let mem of participants) {
        if (groupAdmins.includes(mem.id)) {
            admins.push(mem.id);
        } else {
            members.push(mem.id);
        }
    }

    let textt = `${text ? text : "السلام عليكم"}\n\n`;

    const creator = groupMetadata?.owner || "";

    if (creator) {
        textt += `\n المؤسس 👑:  @${creator.split("@")[0]}\n\n`;
    }

    // List Group Admins
    if (admins.length > 0) {
        textt += "المشرفين 🥇:\n\n";
        let count = 1;
        for (let admin of admins) {
            const adminName = registeredUsers.find(user => user.id === admin)?.name || `@${admin.split("@")[0]}`;
            textt += `ـ ${count} ↭ ${adminName} ╎ @${admin.split("@")[0]} \n`;
            count++;
        }
    }

    // Add the "الأعضاء 🥈" section
    textt += "\nالأعضاء 🥈:\n\n";
    let count = 1;

    // Define the Arabic alphabet letters
    const arabicAlphabet = "اأبتثجحخدذرزسشصضطظعغفقكلمنهوي";

    // Create an object to group members by their first letter
    const membersByLetter = {};

    // Sort the member names alphabetically
    members.sort((a, b) => {
        const nameA = registeredUsers.find(user => user.id === a)?.name || a;
        const nameB = registeredUsers.find(user => user.id === b)?.name || b;
        return nameA.localeCompare(nameB, 'ar');
    });

    // Group members by their first letter
    members.forEach(member => {
        const displayName = registeredUsers.find(user => user.id === member)?.name || `@${member.split("@")[0]}`;
        let firstLetter = displayName.charAt(0).toUpperCase();

        // Check if the first letter is in the list of allowed letters
        if (!arabicAlphabet.includes(firstLetter)) {
            firstLetter = 'Other'; // If not in the allowed list, use 'Other' category
        }

        if (!membersByLetter[firstLetter]) {
            membersByLetter[firstLetter] = [];
        }
        membersByLetter[firstLetter].push(member);
    });

    // Create the formatted member list
    arabicAlphabet.split('').forEach(letter => {
        if (membersByLetter[letter]) {
            textt += `\n*⊹⊱≼━━━⌬〔 ${letter} 〕⌬━━━≽⊰⊹*\n\n`;
            membersByLetter[letter].forEach(member => {
                const displayName = registeredUsers.find(user => user.id === member)?.name || `@${member.split("@")[0]}`;
                textt += `↲ ${displayName}  ╎ @${member.split("@")[0]}\n`;
            });
        }
    });

    // Add 'Other' category if it exists
    if (membersByLetter['Other']) {
        textt += `\n\n *⊹⊱≼━━━⌬〔 دون لقب 〕⌬━━━≽⊰⊹*\n\n`;
        membersByLetter['Other'].forEach(member => {
            const displayName = registeredUsers.find(user => user.id === member)?.name || `@${member.split("@")[0]}`;
            textt += `↲ ـ ${displayName}  ↭ @${member.split("@")[0]}\n`;
        });
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
pattern: "مسح",
desc: "",
use: '',
category: "",
filename: __filename,
  },
    async (Void, citel,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        if (citel.sender !== allowedNumber && !isAkida(citel.sender)) {
        return citel.reply("هذا الامر خاص بالمطور ");
    }
        
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";   
        // Retrieve all registered users from the collection
        const registeredUsers = await sck1.find({}, 'id');   
        // Create an array of user IDs from the registered users
        const registeredUserIDs = registeredUsers.map(user => user.id);
        // Create an array of participant IDs from the current group members
        const participantIDs = participants.map(participant => participant.id);
        // Find user IDs that are in the registered users but not in the current group
        const usersToRemove = registeredUserIDs.filter(id => !participantIDs.includes(id));
        if (usersToRemove.length === 0) {
            return citel.reply("لا توجد أسماء مسجلة لأعضاء غير موجودين في المجموعة.");
        } 
        // Delete the names of users who are no longer in the group
        const deleteResult = await sck1.deleteMany({ id: { $in: usersToRemove } });
        return citel.reply(`تم حذف أسماء المستخدمين الغير موجودين في المجموعة. تم حذف ${deleteResult.deletedCount} سجلات.`);
    });

    //=====================================================================