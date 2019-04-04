const mongoose = require("mongoose");
const Report = require("../models/report.js")
const { mongoURL } = require('../config.json');
mongoose.connect(mongoURL, {useNewUrlParser: true});


module.exports = {
	name: 'testreport',
	description: 'test  report',
	args: true,
	usage: '<user> <reason>',
	async execute(message, args) {
		let rUser = message.mentions.members.first();
		let rreason = args;
		const report = new Report({
			_id: mongoose.Types.ObjectId(),
			username: rUser.user.username,
			userID: rUser.id,
			reason: rreason,
			rUsername: message.author.username,
			rID: message.author.id,
			time: message.createdAt
		})

		report.save()
		//.then(result => console.log(result))
		//.catch(err => console.log(err));

		message.reply("that report has been saved!");
	},
};
