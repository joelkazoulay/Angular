/*globals angular, console*/
angular.module('exampleApp', [])
    .config(function($httpProvider) {
        'use strict';

        $httpProvider.interceptors.push(function() {
            return {
                request: function(config) {
                    config.url = 'productData.json';
                    return config;
                },
                response: function(response) {
                    console.log('Data Count: ' + response.data.length);
                    return response;
                }
            };
        });
    })
    .controller('defaultCtrl', function($scope, $http) {
        'use strict';

        $scope.loadData = function() {
            $http.get('productData.xml').success(function(data) {
                $scope.products = data;
            });
        };
    });
