const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "aJRDhD7D#Io66l6JkyY_nJcR9Fm4-tctM873S7lfA2l5t0gb5aGE", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:TIeFqQLptfPyhBsZDTHLLUANpZSVCDKg@interchange.proxy.rlwy.net:47301",  //ඔයාගෙ mongoDb url එක
};
 
