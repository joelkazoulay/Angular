/*globals angular, console*/
angular.module('exampleApp', ['exampleApp.Controllers', 'exampleApp.Filters',
    'exampleApp.Services', 'exampleApp.Directives'])
    .constant('startTime', new Date().toLocaleTimeString())
    .config(function(startTime) {
        'use strict';

        console.log('Main module config:' + startTime);
    })
    .run(function(startTime) {
        'use strict';

        console.log('Main module run:' + startTime);
    });