"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('ParentController', ['$scope', function ($scope) {

    $scope.model = {
        name: 'John Smith'
    };
}]);

angular.module('myApp').controller('ChildController', ['$scope', function ($scope) {

}]);

//New independent controller
angular.module('myApp').controller('IndieController', ['$scope', function ($scope) {
    $scope.model = {
        name: 'John Doe'
    };
}]);