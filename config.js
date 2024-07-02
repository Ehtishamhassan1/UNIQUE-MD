import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//Owner Numbers 
global.owner = [
  ['923005597178', 'wasi', false],
  [''], 
  [''],
]

//global.pairingNumber = "" //put your bot number here
global.mods = ['923192173398'] 
global.prems = ['923192173398', '923192173398', '923192173398']
global.allowed = ['923192173398']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEJ5ZGtlcjBPblREQTZKY3VkMFFIdDBqVC9CUmxtK3o1WlpHVSt0MHNVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmNQWXk0a0JGNGVLNmQzRVE3azRucGRhYVNkb1VlbXovTW5nZkd1bVRtMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TklNS2pOM1Q0TE50THdNL3liejFsYmxGSzlnMVgvUHhkQ1hzME5Fem00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2c1ZrNU9BcG40QituVmtqRTQ5L0ZiazdTZVNYcmJmdmdxYWJDRDdIMmdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitPRWcwNUJFc3Y2clpZcjN4cFhabTNUejlVYlVEZmhJTnpaSVB6elVsbEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxkeDdFcVA1TmUyeWNPQk94UVlRQTYvQ2lBRkh3WHlCZkN2V2ZJcGRjakE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia01kVHV0MW9MbkdzM1FOWDEvcXlCUWN5d0FVRmhtMDJYMWt2ako3UG5Hdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFFiNTJUNmpBbWI4aFJHVkM2QUVYQVF1SkVmMjA1OTFiUExVQkkvRTIxbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5HYkdJWkU4OXlDcWx5OEVRRjN5Y1kxL1FTM1BGT1cwdzZlQnY3NmQ1N1QyRUpNSnM1MkJnUWxYNjhvNmhRL3FGQmFKcDQ3QXh6U0wreU9BL1cxWWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6IkJhWGM5NUQvMThaOGlqUU5lcVFVdjh0aU54NzByT3g4ZExnZUhsbVk1WEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDA1NTk3MTc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdEQjk4RkEzNkVFQTg0MzE0Nzg0NUM4RjZCNDBGNzA3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk5MzgwMTB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAwNTU5NzE3OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGQ0RDRjc3RTk0NTFCOENDNzhEODZGQzM5ODUzRjA2OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5OTM4MDExfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyX0JxMEdpSFNGV1d6aFhTMnRPM2lnIiwicGhvbmVJZCI6ImU5ZjRjYWNjLTQ3ZWMtNDBiOC04ZTA4LTc5ZTVkZGE1NjliOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXdGZtbk1oUUc2R0c2Qzl5ejBUQ2V3aW83MTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL09hWlYxaWhRMUVNWTk4Ukt6M1lrTDg2MS9zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZMWUtKUkVEIiwibWUiOnsiaWQiOiI5MjMwMDU1OTcxNzg6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoifiRoYW51fiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTZ2ME1jR0VNelhrTFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV1poZVU1OVo3bTZXcU9YUkVFcSswV0JudE5zaXdTQ3dhdnkxcktUZVUzQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS29KK2thU2Rka1RGS01Xd1EyZXdTSUdIdkREdHRIak5mWTlYL0RZWWROOGZORjJwc2YraXU5R3FEU2ttVG8wWmpXRmIzU1NBWXFpOXUvYk5HdlNwQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IlhlSU4vcGhGVXlPTlhIMnZHZ21rQTZENzVBb0tKR2ZLTHhBRjdBaXMxRmRLQ0VJT1Q1VWU4UVRva09aVW9nbFp6REdqQVdBS0dHdDRWRE5jVG55ZWp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDA1NTk3MTc4OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZtWVhsT2ZXZTV1bHFqbDBSQkt2dEZnWjdUYklzRWdzR3I4dGF5azNsTncifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk5MzgwMDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSERhIn0='
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY'
}

// Sticker WM
global.botname = 'Shani-hacker'
global.princebot = '🛡️shani-hacker🛡️'
global.packname = 'shani♥️' 
global.author = 'shani♥️' 
global.princeig = 'https://www.instagram.com' 
global.princegp = 'https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j'
global.menuvid = 'https://i.imgur.com/0UK6D3b.mp4'
global.Princesc = '' 
global.princeyt = 'https://youtube.com/@wasitech1'
global.Princelog = 'https://i.imgur.com/ujxeU8g.jpeg'
global.thumb = fs.readFileSync('./Assets/wasi.png')

global.wait = '*♻️ _ʟᴏᴅɪɴɢ ᴘʟᴢ ᴡᴀɪᴛ ᴅᴇᴀʀ _*\n*▰▰▰▱▱▱▱▱*'
global.imgs = '*🖼️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 ɪᴍᴀɢᴇs 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
