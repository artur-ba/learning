"use strict";
//Controller as syntax examples with filters and order limit

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {
    this.user = [
        {
            firstName: 'john',
            lastName: 'smith',
            accountType: 'CHECKING',
            balance: 1349.2
        },
        {
            firstName: 'mary',
            lastName: 'jhonson',
            accountType: 'savings',
            balance: 3221.2
        },
        {
            firstName: 'daryl',
            lastName: 'Obye',
            accountType: 'checking',
            balance: 1766.2
        },
        {
            firstName: 'martha',
            lastName: 'zalusky',
            accountType: 'savings',
            balance: 545.2
        },
        {
            firstName: 'paul',
            lastName: 'mitchel',
            accountType: 'checkings',
            balance: 3422.2
        }
    ]


}]);


