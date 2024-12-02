const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳3YNSAaYY#9aPUdYAbqE09iMo5EQpoIOWNA2_MQcCNtneViwM0QpE",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/user-attachments/assets/c032c326-0b99-46d0-8eb1-1f760a0fa71d",
PING_IMG : process.env.PING_IMG || "https://github.com/user-attachments/assets/578e0865-1fe7-4a4e-affe-7578ff29fe65",
ALIVE_MSG: process.env.ALIVE_MSG || "*WIHANGA-MD ALLIVE NOV\n\n\nHOW CAN HELP YOY....",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "WIHANGA-MD",
AUTO_VOICE : "true",
};
