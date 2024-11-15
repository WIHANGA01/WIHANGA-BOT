const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "owner",
    desc: "im owner",
    react: "👩‍💻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let owner =` 
*HEAR IS BOT OWNER INFO*
*NAME:-* *WIHANGA ANUHAS*
*AGE:-* *14 YEARS*
*PUBLIC NAME:-* *WIHANGA*

> *WIHANGA-ANUHAS*
`
await conn.sendMessage(from, { text: owner ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "SILENTLOVER432",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'WIHANGA-BOT',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://wa.me/+94769611502?text=HY_WIHANGA_BROTHER^^" ,
thumbnailUrl: "https://telegra.ph/file/ffda25ad4092b3328d551.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});
