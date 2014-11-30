(function() {

var app = angular.module('directives', []);

    app.directive('appHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'includes/header.html',
            link: function($scope) {
                $('#btn-back').on('click', function() {
                    history.back();
                    $scope.$apply();
                });
            }
        };
    });

})();