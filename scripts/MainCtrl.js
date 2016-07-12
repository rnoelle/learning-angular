angular
  .module('avengersApp')
  .controller('MainController', function ($scope, dataService) {

    $scope.test = 'Testing, 1, 2, 3';

    $scope.getHeroes = function () {


        $scope.avengers = dataService.getAvengers();
    };

    $scope.avengers = dataService.avengers;


}); // end MainCtrl
