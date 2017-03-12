"use strict";
//Example of filter system

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {
   this.items = [
       {name: 'Bananas', type:'fruits'},
       {name: 'Apple', type:'fruits'},
       {name: 'Cherries', type:'fruits'},
       {name: 'Beef', type:'meats'},
       {name: 'Port', type:'meats'},
       {name: 'Milk', type:'dairy'},
       {name: 'Chicken', type:'meats'},
       {name: 'Beans', type:'vegetables'},
       {name: 'Bread', type:'grains'},
       {name: 'Special case fruits', type:'other'}

   ];

   this.selectedType = '';
}]);
