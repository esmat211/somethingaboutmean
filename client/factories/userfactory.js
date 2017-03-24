
myApp.factory('UserFactory', function($http, $location){
	var obj ={};

	obj.loggedInUser;

	obj.create = function(name){
		var user = {name: name}
		$http.post('/', user).success(function(user){
			obj.loggedInUser = user;
			$location.path('/dashboard')
		});
	}
	return obj;
})
