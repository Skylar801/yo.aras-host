const Discord = require('discord.js');
const moment = require(`moment`);
const prefix = process.env.PREFIX;


module.exports = {
    name: 'botinfo',
    aliases: ['bot', 'bot-info'],
    description: "sends the bots information!",
    async execute(client, message, cmd, args, Discord) {
        if(!message.content.startsWith(prefix)) return;

        const bEmbed = new Discord.MessageEmbed()
            .setColor('#FFF300')
            .setTitle(`Bot's Info`)
            .setThumbnail(client.user.displayAvatarURL())
            .addField(`**General**`, [
                `**Username:** ${client.user.username}`,
                `**Tag:** ${client.user.tag}`,
                `**ID:** ${client.user.id}`,
                `**Created At:** ${moment(client.user.createdAt).format("DD-MM-YYYY [at] HH:mm")}`,
                `**Owner:** You#7553(805166992432431124)`,
                '\u200b'
            ])
            .addField(`**Stats**`, [
                `**Servers:** ${client.guilds.cache.size}`,
                `**Channels:** ${client.channels.cache.size}`,
                `**Users:** ${client.users.cache.size}`,
                `**Discord.js Version:** 12.5.3`,
                `**Node.js Version:** 14.16.0`
            ])
        message.channel.send(bEmbed)
    }
}