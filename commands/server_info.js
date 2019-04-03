module.exports = {
	name: 'server_info',
	description: 'Server Info',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nDate Created: ${message.guild.createdAt}`);
	},
};