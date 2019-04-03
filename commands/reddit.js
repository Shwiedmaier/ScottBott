const fetch = require('node-fetch');
const querystring = require('querystring');
const Discord = require('discord.js');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
	module.exports = {
	name: 'reddit',
	description: 'reddit  galore!',
	cooldown: 5,
	async execute(message, args) {
		if (!args.length) {
	   		return message.channel.send('You need to supply a search term!');
	  	}
	  	console.log(`https://www.reddit.com/r/${args}/hot.json`)
  		fetch(`https://www.reddit.com/r/${args}/hot.json`)
  			.then(response => response.json())
  			.then(json => {
  				//if (!json.desc) {
				//	return message.channel.send(`No results found for **${args.join(' ')}**.`);
				//}
				
				console.log(json.data.children[0].data.title);
				const embed = new Discord.RichEmbed()
					.setColor('#EFFF00')
					//.setThumbnail(json.data.children[0].data.thumbnail)
					.setTitle(json.data.children[0].data.title)
					.addField(json.data.children[0].data.url);
					if(json.data.children[0].data.selftext!==""){
						embed.addField('Body', trim(json.data.children[0].data.selftext, 1024))
					};

			message.channel.send(embed);
  			});
	},
};