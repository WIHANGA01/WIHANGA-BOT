const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "🚀",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: 'Pong..' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from,{image: {url: config.PING_IMG},caption: `*⚡𝗪𝗜𝗛𝗔𝗡𝗚𝗔-𝗠𝗗 𝗣𝗜𝗡𝗚 𝗜𝗦⚡ : ${ping}MS*\n\n\n\n𝗪𝗜𝗛𝗔𝗡𝗚𝗔-𝗠𝗗 𝗦𝗣𝗣𝗘𝗘𝗗 හරිද ළමයෝ 😾` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
