const mongoose = require("mongoose");
const MemeCoin = require("../models/memeCoins.js")
const { mongoURL } = require('../config.json');
mongoose.connect(mongoURL, {useNewUrlParser: true});


module.exports = {
	name: 'memerinos',
	description: 'how many memes do i have',
	args: false,
	usage: '',
	async execute(message, args) {
		MemeCoin.findOne(
			{userID: message.author.id},
			(err, res) =>{
				if(err) console.log(err);
				if(res) message.reply("You have " + res.coins + " memerinos!!!!")
				if(!res) message.reply("You have no memerinos!!!!")
			}
			);


}
}
		