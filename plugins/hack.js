
const {cmd , commands} = require('../command');

cmd({
    pattern: "hack",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    react: "👨‍💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const steps = [
             '',
            '💻 *WIHANGA-MD HACKING START...* 💻',
            '*Initializing hacking tools...* 🛠️',
            '*Connecting to remote servers...* 🌐',
            '',
            '```▰▰▰▰▰▰▰▰▱▱▱▱▱▱▱▱▱▱▱▱▱ 10%``` ⏳',
            '```▰▰▰▰▰▰▰▰▰▰▬▰▰▱▱▱▱▱▱▱▱▱ 20%``` ⏳',
            '```▰▰▰▰▰▰▰▰▰▰▰▰▰▬▰▰▰▭▭▭▭▭ 30%``` ⏳',
            '```▰▰▰▰▰▰▰▰▰▬▬▬▬▬▬▬▬▰▰▰▱▱▱▱▱ 40%``` ⏳'                            ,
            '```▰▰▰▰▰▰▰▬▬▬▬▬▬▬▰▰▰▰▰▰▰▬▰▰▰▱▱▱▱ 50%``` ⏳',
            '```▰▰▰▰▰▬▬▬▬▬▬▬▬▬▬▬▬▰▰▬▬▬▬▬▬▬▬▰▰▰▱▱▱▱ 60%``` ⏳',                
            '```▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▬▬▬▬▬▬▬▬▰▰▬▬▬▬▬▬▬▬▰▰▰▱▱▱▱ 70%``` ⏳',
            '```▰▰▰▰▰▰▰▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▰▰▰▱▱▱▱ 80%``` ⏳',
            '```[▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▬▬▬▬▬▬▬▬▰▰▰▰▱▱▱▱▱] 90%``` ⏳'    ,
            '```[▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰] 100%``` ✅',
            '𝙇𝙊𝘿𝙄𝙉 𝘾𝙊𝙈𝙋𝙇𝙀𝘼𝙏 ツ',
            '💥ඔබගේ සියලු දත්ත wihanga-md වෙතට ගැනීම අරාම්බ කරෙමි..💥',
            'SENDING.....',
            '⚠️FB,TIKTOK,WHATS APP DETAILS TRANSFERING....⚠️',
            '⚠️YOUR IMAGE,VIDEO,CONTACT,AUDIO FILE TRANSFERING..⚠️',
            '',
            '▬▬▬▱▱▭▭▭25%',
            '▰▰▰▰▬▭▭▱ 75%',
            '▬▬▬▬▬▬▬▬ 100% ',
            '⚠️ *YOUR MOBILE FULL DATA HACKED....🔗*',
            'ඔබගේ ජංගම දුරකතනයේ සියලු ම දත්ත 𝙬𝙞𝙝𝙖𝙣𝙜𝙖-𝙢𝙙 වෙතට ලබාගෙන ඇත ☠️☠️',
            '',
            ' *👨‍💻 YOUR DATA HACK SUCCESSFULLY 👩‍💻*'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});
