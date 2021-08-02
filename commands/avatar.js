const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ['pfp', 'profile'],
    description: "Displays someone's avatar!",
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])
        const avatar = user.displayAvatarURL({ size: 4096, dynamic: true })
        let aEmbed = new Discord.MessageEmbed()
            .setTitle('Here is the avatar!')
            .setImage(avatar)
            .setTimestamp()
        message.channel.send(aEmbed)
    }
}