const Discord = require('discord.js')

module.exports = {
    name: 'stats',
    aliases: [],
    description: "..",
    async execute(client, message, cmd, args, Discord) {
        const statsEmbed = new Discord.MessageEmbed()
            .setTitle('info')
            .setColor('GREEN')
            .setDescription('what version of node and discord the bot uses!')
            .addField('Discord Version' ,'`**Discord.js Version:** 12.5.3`')
            .addField('Node Version', '`**Node.js Version:** 14.16.0`')
        message.channel.send(statsEmbed)
    }
}