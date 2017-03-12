"use strict";
//Example of watching scopes

angular.module('myApp', []);

angular.module('myApp').controller('MainController', ['$scope', function ($scope) {

    var vm = this;

    vm.specialName = 'David Jones';
    vm.message='';
    vm.name = 'John Smith';

    $scope.$watch('main.name', function (newValue, oldValue) {
        console.log('newValue: ', newValue,', oldValue: ',oldValue);
        if(newValue == vm.specialName){
            vm.message = 'Hello! We\'ve been waiting for you';
        }
        else{
            vm.message = '';
        }
    });
}]);
