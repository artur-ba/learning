"use strict";
//Controller provides css classes

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {
    this.hello = 'Hello from AngularJS';
    this.name = '';
}]);
