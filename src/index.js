(function() {
    var app = angular.module('wheatherApp', []);
	
	app.controller('MainCtrl', function($scope, $http) {
		$scope.showTable = false;
		$scope.units = 'metric';
		$scope.days = 2;
		$scope.lang = 'ru';
		$scope.getTime = function(time) {
			var date = new Date(time * 1000);
			return date.toLocaleString();
		};
		$scope.search = function() {
			if (isCityNameIncorrect($scope.city)) {
				alert("Try again, type some more letters!");
				return;
			}
			
			var url = 'http://api.openweathermap.org/data/2.5/forecast/daily';
			$http.jsonp(url, { params : {
				cnt: $scope.days,
				q : $scope.city,
				lang: $scope.lang,
				units : $scope.units,
				appid: '2de143494c0b295cca9337e1e96b00e0',
				callback: 'JSON_CALLBACK'
			  }}).success(function(response) {
				$scope.showTable = true;
				$scope.wheatherList = response.list;
			});				
		};
    });
	
	app.directive('ngEnter', function() {
		return function(scope, element, attrs) {
			element.bind("keydown keypress", function(event) {
				if(event.which === 13) {
					scope.$apply(function(){
							scope.$eval(attrs.ngEnter);
					});
					
					event.preventDefault();
				}
			});
		};
	});	
}());
