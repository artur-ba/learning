"use strict";
//Controller as syntax examples with date filters

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {

    this.now = new Date();

    this.user = {
        name: 'john doe',
        birthday: 171781200000,
        lastLogin: 1437705300000,
    };

}]);


