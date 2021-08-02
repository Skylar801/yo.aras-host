module.exports = {
    name: 'clear',
    aliases: ['purge', 'delete', 'cls'],
    description: "clears / deletes the amout of messages said!",
    async execute(client, message, cmd, args, Discord) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You cannot use this command.');
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I require \`MANAGE_MESSAGES\` permission.");
        if (!args[0]) return message.channel.send("You must state a number of messages to purge. \`~purge number.\`");
        const amonutToDelete = Number(args[0], 10);

        if (isNaN(amonutToDelete)) return message.channel.send("Number stated is not a vaild number.");
        if (!Number.isInteger(amonutToDelete)) return message.channel.send("Number stated must be a whole number.");
        if (!amonutToDelete || amonutToDelete < 2 || amonutToDelete > 100) return message.channel.send('The number stated must be between 2 and 100.');
        const fetched = await message.channel.messages.fetch({
            limit: amonutToDelete
        });

        try {
            await message.channel.bulkDelete(fetched)
                .then(messages => message.channel.send(`Deleted \`${messages.size}\` messages!`)).then((msg) => {
                    setTimeout(() => msg.delete(), 4000);
                })
        } catch (err) {
            console.log(err);
            message.channel.send(`I was unable to delete the amount stated make sure they are within 14 days old.`);
        }
    }
}