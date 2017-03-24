var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
	question: {type: String, required: true, minlength: 8},
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	options: [{value: String, vote: {type: Number, default: 0}}]
},{timestamps: true, minlength: 4});

mongoose.model('Survey', SurveySchema);
