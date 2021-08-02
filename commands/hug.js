const Discord = require('discord.js');

module.exports = {
    name: 'hug',
    aliases: [],
    description: "hugs a mentioned user!",
    async execute(client, message, cmd, args, Discord) {
        const list = [
            'https://i.imgur.com/r9aU2xv.gif?noredirect',
            'http://25.media.tumblr.com/tumblr_ma7l17EWnk1rq65rlo1_500.gif',
        ];

        const rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() ||
        client.users.cache.get(args[0]);
        if (!user) {
            return message.reply('you have to mention a member to hug');
        }
        let avatar = message.author.displayAvatarURL({format: 'png'});
        const hug = new Discord.MessageEmbed()
            .setColor('#CF00FF')
            .setDescription(`${message.author} hugged ${user}`)
            .setImage(rand)
            .setTimestamp()
            .setFooter(`awww 😍`)
            .setAuthor(message.author.tag, avatar);
            
        await message.channel.send(hug)
    }
}