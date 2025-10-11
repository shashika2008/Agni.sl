const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XY9QQK7Y#rewRPcbc2ZfnrFt25jPo5vyLNf6pgI5dd9hwXD8N2oQ", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:TIeFqQLptfPyhBsZDTHLLUANpZSVCDKg@interchange.proxy.rlwy.net:47301",  //ඔයාගෙ mongoDb url එක
};
 
