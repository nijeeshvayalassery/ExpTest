var Controllers=angular.module("Controllers",[])
Controllers.controller("Ctrl1",function($scope){
	$scope.Title="Test App";
})
angular.module('directives',[])
.directive("tabPane",function(){
	return {
		restrict:'E',
		transclude:true,
		templateUrl:'Templates/tabPane.html'
	}
})

var App=angular.module("MyApp",["Controllers","directives"]);


