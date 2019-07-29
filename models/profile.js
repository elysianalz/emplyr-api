var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
	id: String,
	name: String,
	picture: String,
	description: {
		type: String,
		default: 'edit your profile to add a your description',
	},
	jobs: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Job',
	}],
});

var Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;