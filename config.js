const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nFBEgLSb#htrRXt3xUHpMhBK7hctriTVg_aibpocKdjbeaqjwEt8", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:qdxquszCpjNbltPMCqPHrebbWeLzznTF@gondola.proxy.rlwy.net:57535",  //ඔයාගෙ mongoDb url එක
};
 
