const Discord = require('discord.js');

module.exports = {
    name: 'userinfo',
    description: "sends the users info in an embed!",
    execute(client, message, cmd, args, Discord) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "Online 🟢";
                break;
            case "dnd":
                status = "Do Not Disturb 🔴";
                break;
            case "dnd":
                status = "Idle 🟡";
                break;
            case "dnd":
                status = "Offline ⚫";
                break;
        };

        const uEmbed = new Discord.MessageEmbed()
            .setTitle(`${user.user.username} stats`)
            .setColor('#f3f3f3')
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
            .addFields(
            {
                name: ":information_source: **Name: **",
                value: user.user.username,
                inline: true
            },
            {
                name: "#️⃣ **Discriminator:**",
                value: `#${user.user.discriminator}`,
                inline: true
            },
            {
                name: "🆔 **ID:**",
                value: user.user.id,
            },
            {
                name: "🌐 **Current Status: **",
                value: status,
                inline: true
            },
            {
                name: "👀 **Activity: **",
                value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                inline: true
            },
            {
                name: '🔗 **Avatar Link**',
                value: `[Download Avatar](${user.user.displayAvatarURL()})`,
                inline: true
            },
            {
                name: '🍼 **Creation Date: **',
                value: user.user.createdAt.toLocaleDateString("en-us"),
                inline: true,
            },
            {
                name: '🗓️ **Joined Date: **',
                value: user.joinedAt.toLocaleDateString("en-us"),
                inline: true
            },
        )
    message.channel.send(uEmbed).then(message => {
        message.react('☕')
    })
    }
}