const mongoose = require("mongoose");
const MemeCoin = require("../models/memeCoins.js")
mongoose.connect('mongodb://localhost/MemeCoins', {useNewUrlParser: true});


module.exports = {
	name: 'givecoin',
	description: 'get coined kid',
	args: true,
	usage: '<user>',
	cooldown: 86400,
	async execute(message, args) {
		let rUser = message.mentions.members.first();
		let coinstoadd = 1; 

		MemeCoin.findOneAndUpdate(
			{userID: rUser.id},
			{$inc: {coins: 1}},
			(err, res) =>{
				if(err) console.log(err);
				if(!res && rUser.id != message.author.id){
					const newcoin = new MemeCoin({
						_id: mongoose.Types.ObjectId(),
						userID: rUser.id,
						coins: 1
					})
					newcoin.save()
					message.reply("That kid has 1 memerino now, bitch!");
				}
				if(rUser.id == message.author.id){
					message.reply("Pump the breaks kid, you can't jerk yourself off!");
				}
				if(res && rUser.id != message.author.id){
				message.reply("Swag. " + message.mentions.members.first() + " now has " + (res.coins+1) + " memerinos!");
				return res.save(MemeCoin);
				}
			}
			);


}
}
		