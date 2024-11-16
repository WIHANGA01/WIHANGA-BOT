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
            '💻 *WIHANGA-MD HACKING START....* 💻',
            '',
            '*Initializing hacking tools...* 🛠️',
            '*Connecting to remote servers...* 🌐',
            '',
            '`LODING HACKING SYSTEM.....💥`',
            '',
            '',
             '`NOW I'M GET YOUR ALL FILE.....📁`',
             '',
             '',
             '`HAKING STARTING YOUR DEVIS.....⤵️`',
               '',
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
            '⚠️ *System Breach: Successful!* ⚠️',
             '💥 *your image shera wihanga-md database!* 💥',
             '💥 *your contact shera wihanga-md database!* 💥',
            '💥 *your documnt shera wihanga-md database!* 💥',
            '💥 *your facebook details shera wihanga-md database!* 💥',
            '💥 *your tiktok details shera wihanga-md database!* 💥',
            '💥 *your whatsapp details shera wihanga-md database!* 💥',
            '🚀 *Everything on your mobile phone is brought to wihanga-md...*',
            '',
             '',
            '*📡 Transmitting data...* 📤',
            '*🕵️‍♂️ Ensuring stealth...* 🤫',
            '*🔧 Finalizing operations...* 🏁',
            '*🔧 wihanga Get Your All Data...* 🎁',
            '',
             '💥ඔබගේ ජංගම දුරකත්නයේ සියලුම දෑ wihanga-md වෙත්ට රැගෙන ඇත...💥',
              '',
            '⚠️ *Note:* All actions are for demonstration purposes only.',
            '⚠️ *Reminder:* Ethical hacking is the only way to ensure security.',
            '⚠️ *Reminder:* Strong hacking is the only way to ensure security.',
            '',
            '',
            
            ' *👨‍💻 YOUR DATA HACK SUCCESSFULLY 👩‍💻☣*'
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
