
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
            '```[██████████] 10%``` ⏳'                                            ,
            '```[████████████████████] 20%``` ⏳'                                   ,
            '```[██████████████████████████████] 30%``` ⏳'                               ,
            '```[████████████████████████████████████████] 40%``` ⏳'                            ,
            '```[██████████████████████████████████████████████████] 50%``` ⏳'                       ,
            '```[████████████████████████████████████████████████████████████] 60%``` ⏳'                 ,
            '```[██████████████████████████████████████████████████████████████████████] 70%``` ⏳'            ,
            '```[████████████████████████████████████████████████████████████████████████████████] 80%``` ⏳'        ,
            '```[██████████████████████████████████████████████████████████████████████████████████████████] 90%``` ⏳'    ,
            '```[████████████████████████████████████████████████████████████████████████████████████████████████████] 100%``` ✅',
            '',
            '💥ඔබගේ සියලු දත්ත wihanga-md වෙතට ගැනීම අරාම්බ කරෙමි..💥',
            'SENDING.....',
            '⚠️FB,TIKTOK,WHATS APP DETAILS TRANSFERING....⚠️',
            '⚠️YOUR IMAGE,VIDEO,CONTACT,AUDIO FILE TRANSFERING..⚠️',
            '',
            '*🔧 Finalizing operations...* 🏁',
            '*💀 wihanga-md Get Your All Data...* 💀',
            'සියලුම දත්ත WIHANGA-MD වෙත ලබා ගෙන ඇත....💀💀',
            '⚠️ *YOUR MOBILE FULL DATA HACKED....🔗*',
            '⚠️ *🚀',
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
