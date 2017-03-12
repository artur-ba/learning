"use strict";
//Controller as syntax examples with filters

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {
    this.user = {
        firstName: 'John',
        lastName: 'Smith',
        accountType: 'CHECKING',
        balance: 1349.2
    }
}]);
