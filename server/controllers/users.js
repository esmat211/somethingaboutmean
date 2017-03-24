var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

	index: function(req, res){
		res.render('index')
	},


	create: function(req, res){
		User.findOne({name: req.body.name}, function(err, user){
			if(err){
				res.json({error: "Please entre at lest 8 character for title and 4 character for questions"})
			}
			if(user){

				res.json(user);
			} else {
				var user = new User(req.body)
				user.save(function(err, user){

					res.json(user);
				});
			}
		})
	},

}
