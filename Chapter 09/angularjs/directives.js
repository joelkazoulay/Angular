/*globals angular*/
angular.module('exampleApp.Directives', [])
    .directive('highlight', function($filter) {
        'use strict';

        var dayFilter = $filter('dayName');

        return function(scope, element, attrs) {
            if(dayFilter(scope.day) === attrs.highlight) {
                element.css('color', 'red');
            }
        };
    });