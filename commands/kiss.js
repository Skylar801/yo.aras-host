const Discord = require('discord.js');

module.exports = {
    name: 'kiss',
    aliases: [],
    description: "kisses a mentioned user!",
    async execute(client, message, cmd, args, Discord) {
        const list = [
            'https://i.imgur.com/WVSwvm6.gif',
            'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
        ];

        const rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() ||
        client.users.cache.get(args[0]);
        if (!user) {
            return message.reply('you have to mention a member to kiss');
        }
        let avatar = message.author.displayAvatarURL({format: 'png'});
        const kiss = new Discord.MessageEmbed()
            .setColor('#CF00FF')
            .setDescription(`${message.author} kissed ${user}`)
            .setImage(rand)
            .setTimestamp()
            .setFooter(`you naughty 😏`)
            .setAuthor(message.author.tag, avatar);
            
        await message.channel.send(kiss)
    }
}