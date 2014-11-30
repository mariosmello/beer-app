(function() {

	var app = angular.module('controllers', []);

	app.controller('CategorieController', ['$scope','$http', function($scope,$http) {

		showLoading();
		$http.get('http://api.brewerydb.com/v2/categories', {
			params: {
				key: 'db17627b7f9ce9a85fc7bb7653497394',
				format: 'json'
			}
		}).
		success(function(json) {
			hideLoading();
			$scope.categories = json.data;
		});

	}]);

	app.controller('BeerListController', ['$scope','$http','$routeParams', function($scope,$http,$routeParams) {

		showLoading();
		$http.get('http://api.brewerydb.com/v2/beers', {
			params: {
				key: 'db17627b7f9ce9a85fc7bb7653497394',
				format: 'json',
				styleId: $routeParams.categorieId
			}
		}).
		success(function(json) {
			hideLoading();
			$scope.beers = json.data;
		});

	}]);

	app.controller('BeerController', ['$scope','$http','$routeParams', function($scope,$http,$routeParams) {

		showLoading();
		$http.get('http://api.brewerydb.com/v2/beer/' + $routeParams.beerId, {
			params: {
				key: 'db17627b7f9ce9a85fc7bb7653497394',
				format: 'json'
			}
		}).
		success(function(json) {
			hideLoading();
			$scope.beer = json.data;
		}).then(function() {

			$http.get('http://api.brewerydb.com/v2/beer/' + $routeParams.beerId + '/hops', {
				params: {
					key: 'db17627b7f9ce9a85fc7bb7653497394',
					format: 'json'
				}
			}).
			success(function(json) {
				$scope.hops = json.data;
			});

		});

	}]);

	function showLoading() {
		$('#loading').show();
	}

	function hideLoading() {
		$('#loading').hide();
	}

})();