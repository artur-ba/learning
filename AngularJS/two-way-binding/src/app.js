"use strict";
//Controller as syntax examples with two way bindings

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {

    this.fruitList = ['bananas', 'cherries', 'apples', 'pears', 'peaches'];

    this.user = {
        name: 'john doe',
        favoriteFruit: 'cherries',
        isActive: true
    };

}]);
//custom filter return Yes or No
angular.module('myApp').filter('yesorno', function () {
   return function (value) {
       if (value === true){
           return 'yes';
       }
       else if (value === false){
           return 'no';
       }
       else{
           return 'unknown';
       }
   }
});
