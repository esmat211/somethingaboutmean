var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/surveys');

require(__dirname + '/../models/user');
require(__dirname + '/../models/survey');
