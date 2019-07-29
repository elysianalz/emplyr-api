var express = require('express');
var router = express.Router();
var db = require('../models');

//profile get request //get user
router.get('/', function(req, res){

	db.Profile.findOne({id: req.query.id})

	.then(function(profile){
		res.json(profile)
	})

	.catch(function(err){
		res.send(err);
	});

});

//profile post request //create new user
router.post('/', function(req, res){

	db.Profile.create(req.body, function(err, newProfile){
		if(err || !newProfile){
			res.json("error creating new user");
			return;
		}
		newProfile.save();
	});

});

//profile put request //edit user
router.put('/', function(req, res) {
	console.log(req.body);

	db.Profile.findOne({id: req.query.id})

	.then(profile => {
		/*profile.update({description: req.body.description});*/
		profile.description = req.body.description;
		profile.save()
	})

	.then(() => {
		res.json("successfully update profile description")
	})

	.catch(error => console.error("error!:", error));
});

module.exports = router;