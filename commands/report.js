const Discord = require('discord.js');
const prefix = process.env.PREFIX;

module.exports = {
    name: 'report',
    aliases: ['r'],
    description: "reports the member mentioned!",
    async execute(client, message, cmd, args, Discord) {
        if (!message.content.startsWith(prefix)) return;

        let user = message.mentions.users.first()
        if (!user) return message.reply('Please mention a user to report \`p!report @member reason\`')

        let reason = args.slice(1).join(" ");
        if (!reason) return message.reply("please provide a reason to report this user!")

        let Avatar = user.displayAvatarURL();
        let Channel = message.guild.channels.cache.get('870190716918308865')
        if (!Channel) return message.reply("I could not find a channel called log or reports, please create or contact a mod to create that channel!")

        const rEmbed = new Discord.MessageEmbed()
            .setTitle('Report!')
            .setDescription(`The Member \`${message.author.tag}\` has reported the user \`${user.tag}\`!`)
            .setColor('RED')
            .setThumbnail(Avatar)
            .addFields(
                { name: "Member ID", value: `${message.author.id}`, inline: true},
                { name: "Member Tag", value: `${message.author.tag}`, inline: true},
                { name: "Reported ID", value: `${user.id}`, inline: true},
                { name: "Member ID", value: `${user.tag}`, inline: true},
                { name: "Member ID", value: `${reason}`, inline: true}
            )

            Channel.send(rEmbed)
            message.channel.send('The report was send successfully, and will be viewed by a mod / admin. shortly!')
    }
}