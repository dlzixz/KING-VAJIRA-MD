const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2347039570336,923466319114'
global.devs = '2347039570336';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'VAJIRA 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'excel' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0thSldRanl3eWM4MVVJSlRUVkJPQXpMRFFwbk4yVzhkK3QzUXpYaWNuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0w3ZHFZUmtGRittNmFmMFRaM1dwTlN0MzJXYkgzWFE5YkRXNVBGUzhCcz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQmsxKzNYZlBGOEFnNGlpM0pBWkpZazF1bnF4ajN2WEJkSWlhbkRJY21ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1QTA1bkljY21LSDVaZDZuVDRTWEI4Zkh6UlF3QUcyQ2tTcFZCWlN5QW4wPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllOSjVFSzZjclBjdm15UG9IbWpaMW9zTFlBbTJTcUhYZ0Q4Snp4aTljMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhMMTRSVXRJcUpkY3pDUDMrcmlKNXAyempLQkRWcjBBcmJqY3lvS21xbVU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1RDJvYjlMSVdHL3QwTmZDa1VGVHo2RVFFUVNzaS9GV0FWNVV3R2lkYll4TjNFM3RPYkQvWEdQOU81S0QxNktVZzY2SW8rQndNeHZLWEpITGJXa2REQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEwNywiYWR2U2VjcmV0S2V5IjoiUXhOM2ttSW9BWE1UNklra1dXKzNpTW85a3ZtNzFGZS8zZ1BsYlVSY0V6ND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUnRuekhKRENSUmVvdzNIME1lTUhDUSIsInBob25lSWQiOiIwMWE2MDViNS0zODVhLTQyN2QtOTZmZi1hYzg2Njg3OWRjM2MiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWpUVTM3QnBkdUh5TThrQmVOZ2RZeG5YZjFNPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsN05laGpMdlM0M3RRRytEa0ppQ1NSd0JGbFk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOS0g3ZWtIRUxxMDRhc0dHQkE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IklTSFpJQmQ3eHNsdjF4SWtEUTErN1o5NFJDdTVseG5Rd2lqNEt3WG1xejg9IiwiYWNjb3VudFNpZ25hdHVyZSI6InN2MllmR0RCcEhYQ3N1amVuTXBEVWFuUmR6VmlPaXU0SmNEek5TQlNpNHJEOGt2VTFZd3dBcFFPbUp3RVlGVFNHSitpNFZCZWhFTFlwajNpTU9XQUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlRzhEajA2bmJRTEYzRlpzRTN0anhQYWVVWm1iQ0FBWDFaYUtwekFVVkMzcHg0RzJyMHpHbVl4SnJ2VnkwQWhnV3hmNWY2ZjVFeExKNzlCRkxVZnpDQT09In0sIm1lIjp7ImlkIjoiOTQ3MDQ4MDg4MzU6MzlAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDQ4MDg4MzU6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU0VoMlNBWGU4YkpiOWNTSkEwTmZ1MmZlRVFydVpjWjBNSW8rQ3NGNXFzLyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMjM4NjIzOX0=' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  afk:  process.env.AFK ||true,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
