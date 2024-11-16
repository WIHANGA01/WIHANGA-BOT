const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "mIt0WBCZ#URBceh0H31fWcM5XOH6LxIH9ScmkOXeclN6NQRJSQTc",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/user-attachments/assets/1db105d7-0068-4879-b1fc-fece3c5f18b4",
PING_IMG : process.env.PING_IMG || "https://github.com/user-attachments/assets/578e0865-1fe7-4a4e-affe-7578ff29fe65",
ALIVE_MSG: process.env.ALIVE_MSG || "╭┄┄┄┄┄┄┄◯\n┆⚙️ 𝙒𝙄𝙃𝘼𝙉𝙂𝘼-𝙈𝘿 𝘼𝙇𝙄𝙑𝙀  ⚙️┆\n┆\n┆\n┆📜𝙏𝙔𝙋𝙀. 𝙢𝙚𝙣𝙪 𝙂𝙀𝙏\n┆𝘾𝙈𝘿 ┆𝙇𝙄𝙎𝙏📜\n┆\n┆🧬𝙏𝙔𝙋𝙀 .𝙥𝙞𝙣𝙜 𝘾𝙃𝙀𝙆 ┆𝙎𝙋𝙀𝙀𝘿🧬\n┆\n┆⏳𝙏𝙔𝙋𝙀 .𝙧𝙪𝙣𝙩𝙮𝙢𝙚 𝘾𝙃𝙀𝙆 ┆𝙍𝙐𝙈𝙏𝙄𝙈𝙀⏳\n┆\n┆⚒️𝘽𝙊𝙏 𝙋𝙍𝙀𝙁𝙄𝙓 ( . )⚒️\n┆\n┆\n┆\n┆🎐◁ ᴡɪʜᴀɴɢᴀ-ᴍᴅ⃞ ㋡\n┆\n╰┄┄┄┄┄┄┄┄┄◯",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "WIHANGA-MD",
AUTO_VOICE : "true",
};
