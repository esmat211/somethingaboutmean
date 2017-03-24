myApp.controller('UserController', function($scope, UserFactory, $routeParams){
	$scope.loggedInUser = UserFactory.loggedInUser;

	$scope.create = function(){
		UserFactory.create($scope.name);
	}

});
