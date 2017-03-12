"use strict";
//Controller as syntax examples with filters json

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {
    this.users = {
        firstName: 'john',
        lastName: 'smith',
        accountType: {
            accountId:'65475638475',
            name: 'checking'
        },
        balance: 1349.2,
        birthday: 2578937993,
        hobbies: ['biking']
    };

}]);