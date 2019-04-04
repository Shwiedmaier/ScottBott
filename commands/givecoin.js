const mongoose = require("mongoose");
const MemeCoin = require("../models/memeCoins.js")
const { mongoURL } = require('../config.json');
mongoose.connect(mongoURL, {useNewUrlParser: true});


module.exports = {
	name: 'givecoin',
	description: 'get coined kid',
	args: true,
	usage: '<user>',
	cooldown: 1,
	async execute(message, args) {
		let rUser = message.mentions.members.first();
		let coinstoadd = 1; 
		var rUserGM = message.guild.member(message.mentions.members.first())

		MemeCoin.findOneAndUpdate(
			{userID: rUser.id},
			{$inc: {coins: 1}},
			(err, res) =>{
				if(err) console.log(err);
				if(!res && rUser.id != message.author.id){
					const newcoin = new MemeCoin({
						_id: mongoose.Types.ObjectId(),
						userID: rUser.id,
						name: rUserGM.displayName,
						coins: 1
					})
					newcoin.save()
					message.reply("That kid has 1 memerino now, bitch!");
				}
				if(rUser.id == message.author.id){
					message.reply("Pump the breaks kid, you can't jerk yourself off!");
				}
				if(res && rUser.id != message.author.id){
				message.reply("Swag. " + rUserGM.displayName + " now has " + (res.coins+1) + " memerinos!");
				return res.save(MemeCoin);
				}
			}
			);


}
}
		