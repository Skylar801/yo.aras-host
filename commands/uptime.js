const ms = require('ms');

module.exports = {
    name: 'uptime',
    aliases: [],
    description: '..',
    async execute(client, message, cmd, args, Discord) {
        let days = Math.floor(client.uptime / 86400000 );
        let hours = Math.floor(client.uptime / 3600000 ) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        let uptimeEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle(`My uptime is **${days}d ${hours}h ${minutes}m ${seconds}s**`)
        message.channel.send(uptimeEmbed)
    }
}