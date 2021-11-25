const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const axios = require("axios")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const kurr = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const gcdetect = JSON.parse(fs.readFileSync('./database/gcdetect.json'))
const brightcolor  = require('colors');
const encodeUrl = require('encodeurl')
const chalk = require('chalk')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
shp = '⬡'
spc1 = '           '

spc2 = '\n                '
spc3 = '                   '
spc4 = '       '

require('./HermanChanel.js')
nocache('./HermanChanel.js', module => console.log(`${module} is now updated!`))

const starts = async (kurr = new WAConnection()) => {
	console.log(color('SHINCHAN GANTENG NO DEBAT\n\n', 'orange'), color('\n======TQTO KEPADA======\n•Aldy Fauzy\n•Kemol\nSHIN-CHAN\n•ADI\n•KurrXd\n•YUDHA\n•PAJAR\n•Dcode Denpa\n•Finx\n•Subscriber\n•All Creator Botz', 'yellow'))
	console.log(color('\n\nSUBSCRIBE LAH JAN MAKE DOANG ©HERMAN CHANEL GO1KSUBS', 'pink'))
    kurr.logger.level = 'warn'
    kurr.version = [2, 2143, 3]
    kurr.browserDescription = [ 'SHIN-CHAN', 'Firefox', '3.0' ]
    
    kurr.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && kurr.loadAuthInfo('./session.json')
    kurr.on('connecting', () => {
        start('2', 'Connecting...')
    })
    kurr.on('open', () => {
        success('2', 'Connected')
        setTimeout( () => { 	
	    	}, 1000)    		    	     	
    })
    await kurr.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(kurr.base64EncodedAuthInfo(), null, '\t'))
        
        

    kurr.on('chat-update', async (message) => {
        require('./HermanChanel.js')(kurr, message)
        ownerNumber = ["6283146208804@s.whatsapp.net","6283146208804@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6283146208804@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   

// Send Message
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
      kma = gam1;
      mhan = await kurr.prepareMessage(id, kma, MessageType.image);
       buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      }
      kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await kurr.prepareMessage(id, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

kurr.on("group-update", async (anu) => {

    metdata = await kurr.groupMetadata(anu.jid);

    if (anu.announce == "false") {

      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;

      kurr.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Opened ] - In ${metdata.subject}`);

    } else if (anu.announce == "true") {

      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;

      kurr.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Closed ] - In ${metdata.subject}`);

    } else if (!anu.desc == "") {

      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";

      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${

        anu.descOwner.split("@")[0]

      }\nï¿½ Deskripsi Baru : ${anu.desc}`;

      kurr.sendMessage(metdata.id, teks, MessageType.text, {

        contextInfo: { mentionedJid: [tag] },

      });

      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);

    } else if (anu.restrict == "false") {

      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;

      kurr.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);

    } else if (anu.restrict == "true") {

      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;

      kurr.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);

    }

  });

kurr.on('group-participants-update', async (anu) => {

	try {

		mdata = await kurr.groupMetadata(anu.jid)

		console.log(anu)

		if (anu.action == 'add') {

			num = anu.participants[0]

			try {

				ppUrl = await kurr.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `ðŸŒ¹ Hi @${num.split('@')[0]} ðŸ‘‹\nðŸŒ¹ Selamat Datang Di Group: ${mdata.subject}\n\n Join Pada Jam: ${time} Waktu Server`

				sendButImage(anu.jid, teks, `Shin-Chan Yucan`, img,but = [{buttonId:`donasi`, 

               buttonText:{displayText: 'WELCOME'},type:1}], options = {contextInfo: {mentionedJid: [num, htod]}})

			} else if (anu.action == 'remove') {

			num = anu.participants[0]

			try {

				ppUrl = await kurr.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `Daahh @${num.split('@')[0]}\nSelamat Tinggal Di Group: ${mdata.subject}`

				sendButImage(anu.jid, teks, `ShinChan Yucan`, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SAYONARA !!`}, type: 1}], options = {contextInfo: {mentionedJid: [num, htod]}})

			} else if (anu.action == 'promote') {

			num = anu.participants[0]

			try {

				ppUrl = await kurr.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `ã€Œ PROMOTE - DETECTED ã€\n\nNama : @${num.split("@")[0]}\nStatus : Member -> Admin\nGroup : ${mdata.subject}`

				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SELAMAT KAK`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})

			} else if (anu.action == 'demote') {

			num = anu.participants[0]

			try {

				ppUrl = await kurr.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `ã€Œ DEMOTE - DETECTED ã€\n\nNama : @${num.split("@")[0]}\nStatus : Admin -> Member\nGroup : ${mdata.subject}`

				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SABAR YA`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})

			}

		} catch (e) {

			console.log(e)

			}

		})
		
kurr.on('group-update', async (anu) => {
	try { 
	console.log(anu)
	from = anu.jid
	group = await kurr.groupMetadata(anu.jid)
	if (!anu.desc == '') {
		tag = anu.descOwner.replace('@c.us', '@s.whatsapp.net')
		kurr.sendMessage(group.id, `Group Description Change\n\nâ€¢ Admin : @${tag.split("@")[0]}\nâ€¢ Group : ${group.subject}\nâ€¢ descTime : ${anu.descTime}\nâ€¢ descID : ${anu.descId}\nâ€¢ descNew : ${anu.desc}`, MessageType.text, {contextInfo: { mentionedJid: [tag]}})
		} else if (!anu.restrict == '') {
			kurr.sendMessage(group.id, `Group Restrict Change\n\nâ€¢ Group : ${group.subject}\nâ€¢ groupId : ${anu.jid}\nâ€¢ restrict : ${anu.restrict}`, MessageType.text)
			} else if (!anu.announce == '') {
				kurr.sendMessage(group.id, `Group Announce Change\n\nâ€¢ Group : ${group.subject}\nâ€¢ groupId : ${anu.jid}\nâ€¢ announce : ${anu.announce}`, MessageType.text)
				} 
					} catch(err) {
						e = String(err)
						console.log(e)
						}

	})

//-----------------< ANTI DELETE >---------------------\\
antidel = true
  kurr.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
    if (antidel === false) return m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const type = Object.keys(m.message)[0];
    kurr.sendMessage(
      m.key.remoteJid,
`┏◪ 「 Anti Delete 」
┃ •Nama : @${m.participant.split("@")[0]}
┃ •Waktu : ${jam} ${week} ${calender}
┃ •Type : ${type}
┗◪`,
      MessageType.text,
      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
    );

    kurr.copyNForward(m.key.remoteJid, m.message);
  });

antical = true
kurr.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
kurr.sendMessage(call, `*Sorry ${kurr.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => kurr.blockUser(call, "add"))
})

}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log(chalk.bgHex('#FFDF00').underline(color('Module','black'), color(`'${module}'`, 'red'), color('is now being watched for changes', 'black')))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
