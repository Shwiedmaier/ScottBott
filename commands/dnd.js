const fetch = require('node-fetch');
const querystring = require('querystring');
const Discord = require('discord.js');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
	module.exports = {
	name: 'dnd',
	description: 'dungeons  galore!',
	cooldown: 5,
	async execute(message, args) {
		if (!args.length) {
	   		return message.channel.send('You need to supply a search term!');
	  	}
	  	var joined = args.join("-");
	  	
  		fetch(`https://api-beta.open5e.com/spells/${joined}`)
  			.then(response => response.json())
  			.then(json => {
  				if (!json.desc) {
					return message.channel.send(`No results found for **${args.join(' ')}**.`);
				}
				

			const embed = new Discord.RichEmbed()
				.setColor('#EFFF00')
				.setTitle(json.name)
				.setURL(json.permalink)
				.addField('Level', trim(json.level, 1024))
				.addField('description', trim(json.desc, 1024))
				.addField('material', trim(json.material, 1024));

			message.channel.send(embed);
  			});
	},
};