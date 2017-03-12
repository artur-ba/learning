"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', ['$scope' , '$interval', function ($scope, $interval) {

    //using scope methods
    var items = ['bananas', 'apples', 'pears', 'cherries', 'peaches'];
    $scope.itemIndex = null;
    $scope.currentItem = '';
    $scope.getItem = function () {
        $scope.currentItem = items[$scope.itemIndex];
    };
    $interval(function () {
       $scope.itemIndex = Math.round( Math.random() * (items.length - 1) );
       $scope.getItem();
    }, 2000);


    //using scope function
    $scope.message="Hello";
    $scope.sayHello = function (name) {
        return $scope.message + " " + name;
    };

    //expressions
    $scope.randomValue= -999;
    $scope.names = ['David', 'Tom', 'Joe']

    $scope.qty = 20;
    $scope.cost = 1.99;

    $scope.pWidth = 100;

    $interval(function () {
        $scope.randomValue = Math.round( Math.random() * 100000 );
    }, 2000);
}]);

//parent controller

angular.module('myApp').controller('ParentController',['$scope', function ($scope) {

    $scope.model = {
        name: 'John Smith'
    };
}]);

angular.module('myApp').controller('ChildController',['$scope', function ($scope) {

}]);