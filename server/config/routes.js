var Users = require(__dirname + '/../controllers/Users');
var Surveys = require(__dirname + '/../controllers/Surveys');


module.exports = function(app){

	app.get('/', Users.index);
	app.post('/', Users.create);
	app.post('/create', Surveys.create)
	app.get('/dashboard', Surveys.show)
	app.delete('/dashboard/:id', Surveys.delete)
	app.get('/poll/:id', Surveys.showOne)
	app.put('/poll/:id', Surveys.vote);
	app.get('#/login', function(req, res){
		user.logout(req, res)
	})

}
