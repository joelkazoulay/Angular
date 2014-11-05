/*globals angular*/
angular.module('exampleApp.Filters', [])
    .filter('dayName', function() {
    'use strict';

    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return function(input) {
        return angular.isNumber(input) ? dayNames[input] : input;
    };
});