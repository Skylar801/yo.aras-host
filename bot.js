const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const prefix = process.env.prefix;
const Canvas = require('canvas')
const fs = require('fs');
const ms = require('ms')



client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
})
//-------------------------------------------------------
client.on("ready", () => {
  function YousamPower() {
    let adrenalin = [`${prefix}ticket | `, `${prefix}help |`]
    let Power = Math.floor(Math.random() * adrenalin.length);
    client.user.setActivity(adrenalin[Power], { type: "LISTENING" });
  }; setInterval(YousamPower, 15000)
});
const welcomeCanvas = {};
welcomeCanvas.create = Canvas.createCanvas(1024, 500)
welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
welcomeCanvas.context.font = '72px sans-serif';
welcomeCanvas.context.fillStyle = '#ffffff';

Canvas.loadImage("./img/yes.png").then(async (img) => {
  welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)
  welcomeCanvas.context.fillText("WELCOME", 360, 360);
  welcomeCanvas.context.beginPath();
  welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
  welcomeCanvas.context.stroke()
  welcomeCanvas.context.fill()
})

//---------------------------------------------------------------------------
client.on('guildMemberAdd', async member => {
  const welcomeChannel = client.channels.cache.get('850399560567357501')
  let canvas = welcomeCanvas;
  canvas.context.font = '42px Sans-serif',
    canvas.context.textAlign = 'center';
  canvas.context.fillText(member.user.tag.toUpperCase(), 512, 410)
  canvas.context.font = '32px Sans-serif'
  canvas.context.fillText(`${member.guild.memberCount}`, 512, 455)
  canvas.context.beginPath()
  canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
  canvas.context.closePath()
  canvas.context.clip()
  await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png', size: 1024 }))
    .then(img => {
      canvas.context.drawImage(img, 393, 47, 238, 238);
    })
  let atta = new Discord.MessageAttachment(canvas.create.toBuffer(), `Welcome-${member.id}.png`)
  try {
    welcomeChannel.send(`${member}`)
  } catch (error) {
    console.log(error)
  }
  welcomeChannel.send(atta);
})
//------------------------------------------------------
//---------------------------------------------------------
client.on('guildMemberAdd', async (member) => {
  await client.channels.cache.get('862090423576690718').setName(`🌎 Total Members: ${member.guild.memberCount}`)
  await client.channels.cache.get('862090579663781938').setName(`👥 Total Users: ${member.guild.members.cache.filter(m => !m.user.bot).size}`)
  await client.channels.cache.get('862090792818704384').setName(`🤖 Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`)
})

client.on('guildMemberRemove', async (member) => {
  await client.channels.cache.get('862090423576690718').setName(`🌎 Total Members: ${member.guild.memberCount}`)
  await client.channels.cache.get('862090579663781938').setName(`👥 Total Users: ${member.guild.members.cache.filter(m => !m.user.bot).size}`)
  await client.channels.cache.get('862090792818704384').setName(`🤖 Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`)
})

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
client.on('guildMemberAdd', guildMember => {

  const joinedEmbed = new Discord.MessageEmbed()
    .setTitle(`Welcome To yo.aras!`)
    .setDescription(`Welcome! make sure to read the message below before going into the server!`)
    .addField("Please do not self-promo", "self promotion will result in a ban / mute!")
    .addField("Please do not spam", "as spaming will get you muted")
    .addField("Please do not ping the owner", "pinging the owner without a reason will result in a warn")
    .addField("Warns", "3 warns will end up in a ban")
    .addField("Need Help?", "do -ticket to talk to a mod / admin")
    .addField("خوش آمدی!", "اگر ایرانی هستید قوانین سرور را بررسی کنید زیرا این قوانین فارسی هستند.")
    .setImage('https://media.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif')


  let joinedRole = guildMember.guild.roles.cache.get('850396278059565076');
  guildMember.roles.add(joinedRole);
  guildMember.user.send(joinedEmbed)
})
//----------------------------------------------------------------------------
client.on("message", async (message) => {
  if (message.content.length >= 300) {
    message.delete();
    message.channel.send(`${message.author}, you are not allowed to send long-messages in this server!`).then((msg) => {
      setTimeout(() => msg.delete(), 7000)
    }).catch((err) => {
      throw err;
    })
  }

  var array = ["https://top.gg/", "https://discord.com/", "https://youtube.com/", "https://twitch.tv/", "fuck", "fuk", "fuc", "bitch", "hoe", "whore", "nigger", "nigga", "nig", "gay"];
  if (message.member.hasPermission("ADMINISTRATOR")) return;
  if (array.some(w => `${message.content.toLowerCase()}`.includes(`${w}`))) {
    message.delete();
    message.channel.send(`${message.author} please refrain from using that word again, you have been muted for 3 minutes to stop you from making this mistake again!`).then((msg) => {
      setTimeout(() => msg.delete(), 7000)
    })

    var reason = ("Warning from Auto Mod | Using filtered language / self-promo")
    var filterEmbed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("You were muted in yo.aras.")
      .addField("Reason", reason)
      .addField("Mute Expires:", "\`3 minutes\`")
    try {
      message.author.send(filterEmbed)
    } catch (err) {
      console.warn(err);
    }
    const muteRole = message.guild.roles.cache.get("865061734620200971");
    message.member.roles.add(muteRole)
    setTimeout(async () => {
      message.member.roles.remove(muteRole)
    }, ms('3m'))
  }
})
//----------------------------------------------------------------------------
client.login(process.env.token);
