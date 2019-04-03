module.exports = {
	name: 'user_info',
	description: 'Display user info!',
	args: true,
	usage: '<user>',
	execute(message, args) {
		const taggedUser = message.mentions.users.first();
		message.channel.send(`Your username: ${taggedUser.username}\nYour ID: ${taggedUser.id}\n ${taggedUser.displayAvatarURL}`);
	},
};