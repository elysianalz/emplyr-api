var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/emplyr-api', {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.Profile = require('./profile');