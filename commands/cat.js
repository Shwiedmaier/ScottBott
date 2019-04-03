const fetch = require('node-fetch');
module.exports = {
	name: 'cat',
	description: 'cats!',
	cooldown: 5,
	async execute(message, args) {
		fetch('https://aws.random.cat/meow')
		.then(response => response.json())
		.then(json => {
			message.channel.send(json.file);
		});
		
	},
};