//angular.module('myApp',['ngRoute']).config(config).controller('dataController1',dataController1);
angular.module('myApp',['ngRoute']).config(config)

function config($routeProvider){
	$routeProvider
	.when('/',{

		templateUrl:'angular-app/titleList.html',
		controller:dataController1,
		controllerAs:'vm'
	});


}

