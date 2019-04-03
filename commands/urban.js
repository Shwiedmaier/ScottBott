const fetch = require('node-fetch');
const querystring = require('querystring');
	module.exports = {
	name: 'urban',
	description: 'memes  galore!',
	cooldown: 5,
	async execute(message, args) {
		if (!args.length) {
	   		return message.channel.send('You need to supply a search term!');
	  	}

		const query = querystring.stringify({ term: args.join(' ') });

  		fetch(`https://api.urbandictionary.com/v0/define?${query}`)
  			.then(response => response.json())
  			.then(json => {
  				if (!json.list.length) {
					return message.channel.send(`No results found for **${args.join(' ')}**.`);
				}
  			 message.channel.send(json.list[0].definition);
  			});
	},
};