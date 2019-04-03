const mongoose = require("mongoose");
const MemeCoin = require("../models/memeCoins.js")
mongoose.connect('mongodb://localhost/MemeCoins', {useNewUrlParser: true});


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
				message.reply("You have " + res.coins + " memerinos!!!!")
			}
			);


}
}
		