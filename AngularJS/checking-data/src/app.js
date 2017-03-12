"use strict";
//Example of verifying variables

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [ function () {
    this.data = {name:'John', age:22};
    //this.data = [1,2,3,4]
    //this.data = 'this is a string';
    //this.data = 323213;
    //this.data = NaN;
    //this.data = new Date();
    //this.data = angular.element('<p></p>');
    this.results = [];

    var isObject = 'Is Object? '+ angular.isObject(this.data);
    var isArray = 'Is Array? '+ angular.isArray(this.data);
    var isString = 'Is String? '+angular.isString(this.data);
    var isNumber = 'Is isNumber? '+angular.isNumber(this.data);
    var isDate = 'isDate? '+angular.isDate(this.data);
    var isElement = 'isElement? '+angular.isElement(this.data);
    var isDefined = 'isDefined?'+angular.isDefined(this.data);
    var isUndefined = 'isUndefined? '+angular.isUndefined(this.data);

    this.results.push(isObject,isArray,isString,isNumber,isDate,isElement,isDefined,isUndefined);
}]);
