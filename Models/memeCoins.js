const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/MemeCoins', {useNewUrlParser: true});
const memeCoinsSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	userID: String,
	name: String,
	coins: Number 

}, { collection: 'MemeCoins' });

module.exports = mongoose.model("MemeCoins", memeCoinsSchema);