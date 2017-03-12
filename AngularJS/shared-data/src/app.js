"use strict";

angular.module('myApp', []);

//singleton
angular.module('myApp').service('SharedService', function () {
    return {name: 'Bill Johnson'};
});

angular.module('myApp').controller('FirstController', ['$scope' ,'SharedService', function ($scope, SharedService) {
    $scope.model = SharedService;

}]);

angular.module('myApp').controller('SecondController', ['$scope', 'SharedService', function ($scope, SharedService) {
    $scope.model = SharedService;

}]);


