module.exports = {
    name: 'ping',
    aliases: [],
    description: "This is a ping command!",
    execute(client, message, cmd, args){
        message.channel.send('🏓 pinging bots ping...').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`🏓 Pong!, Pluto Mod's ping is ${ping}`)
        })
    }
}