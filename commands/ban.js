const Discord = require('discord.js');

module.exports = {
    name: "kick",
    aliases: [],
    description: "Displays someone's avatar!",
    async execute(client, message, cmd, args, Discord) {
        msg = message
        const logs = msg.guild.channels.cache.get("870186655099809832");
        if (!message.member.hasPermission("KICK_MEMBERS")) return;

        const member = message.mentions.members.first();
        if (!member) return message.reply("Please specify a member to ban!");

        const embed = new Discord.MessageEmbed()
            .setColor("6CFF00")
            .setDescription(`✅ Successfully ban ${member} ✅`)

        const verify = new Discord.MessageEmbed()
            .setColor("6CFF00")
            .setDescription(`✅ ${message.author} Successfully banned ${member} ✅`)

        if (
            message.member.roles.highest.postition <=
            member.roles.highest.postition
        )
            return message.reply(
                "You cannot kick a member that has the same role or a higher role then you!"
            );
        const reason = args.slice(1).join(" ") || "No Reason Given.";

        member.ban({ reason });
        message.channel.send(embed)
        logs.send(verify)
    }
}