const Discord = require('discord.js');

module.exports = {
    name: 'feedback',
    aliases: [],
    description: "for uses to give feedbacks!",
    async execute(client, message, cmd, args, Discord) {
        const feedbackId = "870190683338727445";

        if(!args[0]) return message.reply('Please add a reason to feedback!')

        message.reply(`✉️ | ${message.author.username}, Thanks for the feedback! :)`)

        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Feedback:`)
            .addField("On the server:", `${message.guild.name}`)
            .addField("Server ID:", `${message.guild.id}`)

            client.channels.cache.get(feedbackId).send(embed)
    }
}