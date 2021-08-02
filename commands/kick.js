const Discord = require('discord.js');

module.exports = {
    name: "kick",
    aliases: ['k'],
    description: "kicks embed!",
    async execute(client, message, cmd, args, Discord) {
        const logs = message.guild.channels.cache.get("870186655099809832");
        if (!message.member.hasPermission("KICK_MEMBERS")) return;

        const member = message.mentions.members.first();
        if (!member) return message.reply("Please specify a member to kick!");

        const embed = new Discord.MessageEmbed()
            .setColor("6CFF00")
            .setDescription(`✅ Successfully kicked ${member} ✅`)

        const verify = new Discord.MessageEmbed()
            .setColor("6CFF00")
            .setDescription(`✅ ${message.author} Successfully kicked ${member} ✅`)

        if (
            message.member.roles.highest.postition <=
            member.roles.highest.postition
        )
            return message.reply(
                "You cannot kick a member that has the same role or a higher role then you!"
            );
        const reason = args.slice(1).join(" ") || "No Reason Given.";

        member.kick({ reason });
        message.channel.send(embed)
        logs.send(verify)
    }
}