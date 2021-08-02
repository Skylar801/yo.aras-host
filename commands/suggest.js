const Discord = require('discord.js');

module.exports = {
    name: 'suggest',
    aliases: [],
    description: '..',
    async execute(client, message, cmd, args, Discord) {
        let suggestion = args.slice(0).join(" ");
        let SuggestionChannel = message.guild.channels.cache.get("870190657644412958")
        if(!suggestion) return message.reply("Please state something to suggest")

        const embed = new Discord.MessageEmbed()
            .setTitle("New suggestion")
            .setDescription(suggestion)
            .setColor("GREEN")
            .setFooter(`${message.author.tag} | ID: ${message.author.id}`)
            .setTimestamp()
        SuggestionChannel.send(embed).then(msg => {
            msg.react("👍")
            msg.react("👎")
        message.channel.send("Your Suggestion has been sent successfully!").then(msg => {
            msg.react("✅")
        })
        }).catch((err) => {
            throw err;
        })
    }
}
