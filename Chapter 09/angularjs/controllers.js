/*globals angular*/
angular.module('exampleApp.Controllers', [])
    .controller('dayCtrl', function($scope, days) {
        'use strict';

        $scope.day = days.today;
    })
    .controller('tomorrowCtrl', function($scope, days) {
        'use strict';

        $scope.day = days.tomorrow;
    });