const mongoose = require("mongoose");
const memeCoinsSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	userID: String,
	coins: Number 

}, { collection: 'MemeCoins' })

module.exports = mongoose.model("MemeCoins", memeCoinsSchema);