(function() {

	var app = angular.module('AppBeer', ['ngRoute', 'controllers', 'directives']);

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider.
	      when('/categories', {
	        templateUrl: 'partials/categories.html',
	        controller: 'CategorieController'
	      }).
	      when('/beers/:categorieId', {
	        templateUrl: 'partials/beers.html',
	        controller: 'BeerListController'
	      }).
	      when('/beer/:beerId', {
	        templateUrl: 'partials/beer.html',
	        controller: 'BeerController'
	      }).
	      otherwise({
	        redirectTo: '/categories'
	      });
	  }]);

})();