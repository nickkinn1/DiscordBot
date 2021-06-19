module.exports = {
	name: 'kick',
	description: 'Kick a user from the server.',
	guildOnly: true,
	/*permissions: 'KICK_MEMBERS',*/
	execute(message, args) {
		let taggedUser = message.mentions.users.first();
        message.reply(`Kick ${taggedUser}?`);
	},
};