const Discord = require('discord.js');
const prefix = process.env.PREFIX;

module.exports = {
    name: 'nickname',
    aliases: ['nick'],
    description: "nicknames the @ user",
    async execute(client, message, cmd, args, Discord) {
        const logs = message.guild.channels.cache.get('870186655099809832');

        let member = message.mentions.members.first()

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("You cannot use this command.")

        let user = message.mentions.users.first()
        if (!user) return message.reply("**Please specify a member to change their nickname**")

        let nickname = args.slice(1).join(" ")
        if (!nickname) return message.reply("**Please specify a nickname.")

        await member.setNickname(nickname);

        const embed = new Discord.MessageEmbed()
            .setTitle("✅Done!")
            .setDescription(`Successfully changed ${user.tag}'s nickname to ${nickname}`)
            .setColor("GREEN")
            .setTimestamp();
        message.channel.send(embed)

        const confirm = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .addField("**Nickname Changed Of**", member.user.username)
            .addField("**Nickname Changed By**", message.author.username)
            .addField("Nickname Changed To", `${nickname}`)
            .setTimestamp();

        logs.send(confirm)
    }
}