/*globals angular*/
angular.module('sportsStore')
    .constant('dataUrl', 'products')
    .controller('sportStoreCtrl', function($scope, $http, dataUrl) {
        'use strict';

        $scope.data = {};

        $http.get(dataUrl)
            .success(function(data) {
                $scope.data.products = data;
            })
            .error(function(error) {
                $scope.data.error = error;
            });
    });