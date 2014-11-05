/*globals angular, console*/
angular.module('customDirectives', ['customServices'])
    .directive('triButton', function(logService) {
        'use strict';
        return {
            scope: { counter: '=counter' },
            link: function(scope, element, attrs) {
                element.on('click', function(event) {
                    logService.log('Button click: ' + event.target.innerText);
                    scope.$apply(function() {
                        scope.counter++;
                    });
                });
            }
        };
    });