angular.module('directives',[])
.directive("tabPane",function(){
	return {
		restrict:'E',
		transclude:true,
		templateUrl:'Templates/tabPane.html'
	}
})