const Discord = require("discord.js")
const ButtonPages = require("discord-button-pages")

module.exports = {
    name: 'help',
    aliases: ["h"],
    description: "for uses to give feedbacks!",
    async execute(client, message, cmd, args, Discord) {
        try {
            const newsong = new Discord.MessageEmbed()
                .setTitle("✅ test")

                .setColor("#c219d8")

                .setFooter(`درخاست شده توسط : ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
                .addField("مدت زمان:", `\` Minutes\``, true)

            var playingMessage = await message.channel.send(newsong);

            await playingMessage.react("❓");
            await playingMessage.react("↩");
        } catch (error) {
            console.error(error);
        }

        const filter = (reaction, user) => user.id !== message.client.user.id;
        var collector = playingMessage.createReactionCollector(filter);

        collector.on("collect", async (reaction, user) => {

            const member = message.guild.member(user);

            switch (reaction.emoji.name) {

                //np
                case "❓":
                    reaction.users.remove(user).catch(console.error);

                    const helpEmbed = new Discord.MessageEmbed()
                        .setColor('#00FFEA')
                        .setTitle('Server name : yo.aras')
                        .setDescription(`prefix: \`-\` \n bots prefix`)
                        .addFields(
                            { name: '> -avatar', value: 'Sends users avatar', inline: true },
                            { name: '> -ban', value: 'Bans member', inline: true },
                            { name: '> -botinfo', value: 'sends the bots info', inline: true },
                            { name: '> -channelinfo', value: 'Shows channelinfo', inline: true },
                            { name: '> -clear', value: 'Deletes messages', inline: true },
                            { name: '> -feedback', value: 'Give feedbacks!', inline: true },
                            { name: '> -help', value: 'Help Command', inline: true },
                            { name: '> -hug', value: 'Hugs the member mentioned', inline: true },
                            { name: '> -kick', value: 'Kicks member', inline: true },
                            { name: '> -kiss', value: 'Kisses the member mentioned', inline: true },
                            { name: '> -meme', value: 'Sends memes', inline: true },
                            { name: '> -nickname', value: 'Changes the members nickname', inline: true },
                            { name: '> -ping', value: 'Shows bots ping', inline: true },
                            { name: '> -poll', value: 'Starts a poll', inline: true },
                            { name: '> -report', value: 'Reports a member', inline: true },
                            { name: '> -slowmode', value: 'Sets a channels slowmode', inline: true },
                            { name: '> -stats', value: 'Shows bots stats', inline: true },
                            { name: '> -suggest', value: 'Suggest something for the server!', inline: true },
                            { name: '> -ticket', value: 'Open a ticket to talk to a admin', inline: true },
                            { name: '> -uptime', value: 'Shows bots uptime', inline: true },
                            { name: '> -userinfo', value: 'Shows the users information', inline: true },
                            { name: '> -warn', value: 'warns the member', inline: true }

                        )

                    playingMessage.edit(helpEmbed).then(m => {
                        m.delete({ timeout: 120000 });
                    })

                    break;

                case "↩":
                    reaction.users.remove(user).catch(console.error);

                    const help = new Discord.MessageEmbed()
                        .setTitle("✅ Help ✅")

                        .setColor("#c219d8")

                        .setFooter(`درخاست شده توسط: ${message.author.username}#${message.author.discriminator} `, message.member.user.displayAvatarURL({ dynamic: true }))

                    playingMessage.edit(help)

                    break;

                default:
                    reaction.users.remove(user).catch(console.error);
                    break;
            }
        });

    }
}