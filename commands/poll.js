const Discord = require('discord.js');

module.exports = {
    name: 'poll',
    aliases: [],
    description: "sets up a poll for the users to vote!",
    async execute(client, message, cmd, args, Discord) {
        let channelID = message.mentions.channels.first()
        let theDescription = args.slice(1).join(" ")

        if(!channelID) return message.reply("Please specify a channel you want the poll to be in!")
        if(!theDescription) return message.reply("Please specify a description / topic for the poll!")

        const pollEmbed = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle("POLL")
            .setDescription(theDescription)
            .setFooter("Poll started by: "+ message.author.username +'#'+ message.author.discriminator)

            let messageEmbed = await channelID.send(pollEmbed)
            await messageEmbed.react('👍')
            await messageEmbed.react('👎')
    }
}