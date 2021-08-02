const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'meme',
    aliases: ['funny'],
    description: "sends a meme!",
    async execute(client, message, cmd, args, Discord) {
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(async json => {
      const memeEmbed = new Discord.MessageEmbed()
        .setTitle(json.title)
        .setImage(json.url)
        .setFooter(`${json.subreddit} ${json.postLink}`);

      let msg = await message.channel.send('Fetching you a meme...')
      msg.edit(memeEmbed);
    });
    }
}