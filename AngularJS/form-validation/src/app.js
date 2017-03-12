"use strict";
//Controller as syntax examples with validation

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {

    this.user = {

    };

    this.submitForm = function (form) {
        if(form.$valid)
        {
            window.alert('Passed.');
        }
        else{
            window.alert('Failed.');
        }
    };

}]);

