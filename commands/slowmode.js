module.exports = {
    name: 'slowmode',
    aliases: ['sm'],
    description: "sets a slowmode for the channel!",
    async execute(client, message, cmd, args, Discord) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You do not have permission to use this command.');
        if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I require \`MANAGE CHANNEL\` permission to enable slowmode.');
    
        //~slomode 100
        
        const value = Number(args[0]);
    
        if (!args[0]) return message.channel.send('You need to state a number in which how long you would like the slowmode to be set to.');
        if (!value || value < 5 || value > 21600 ) return message.channel.send('You need to state a number between 5 and 21600, which represents the second the slowmode will be.');
        try {
          await message.channel.setRateLimitPerUser(value);
          message.channel.send(`The slowmode for ${message.channel} is set to ${value} seconds.`);
        } catch (err) {
          console.log(err);
          message.channel.send('Something went wrong setting the slowmode.');
        }
    }
}