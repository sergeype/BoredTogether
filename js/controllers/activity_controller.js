app.controller('TestController', ['$scope', function($scope) {
	$scope.test = "PREVED!!!"; 

	$scope.imageMap = {
		'climbing' : 'images/climbing.jpeg',
		'lunch' : 'images/lunch.jpeg'
	}

	$scope.activities = [
	  	{
	  		title: "Best activity" ,
	  		created_by: "Zork",
	  		type: "climbing",
	  		registered: 5,
	  	},
	  	{
	  		title: "Better activity",
	  		type: 'lunch' 
		},
	];
}]);