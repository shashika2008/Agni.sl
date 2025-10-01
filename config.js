const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "AgnijF8EGBIA#oNGmZY-Xr5NVqrYRscbUe10AqbpvLC2R4wVfFZ_3vtY", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:pJixBaqwVwLZBXELIILarYUbVqMFiJtH@shinkansen.proxy.rlwy.net:21896",  //ඔයාගෙ mongoDb url එක
};
 
