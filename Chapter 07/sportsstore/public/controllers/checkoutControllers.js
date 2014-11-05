/*globals angular*/
angular.module('sportsStore')
    .controller('cartSummaryController', function($scope, cart) {
        'use strict';

        $scope.cartData = cart.getProducts();

        $scope.total = function() {
            var total = 0;
            for(var i = 0; i < $scope.cartData.length; i++) {
                total += ($scope.cartData[i].price * $scope.cartData[i].count);
            }

            return total;
        };

        $scope.remove = function(id) {
            cart.removeProduct(id);
        };

        $scope.incrementUp = function(id) {
            cart.incrementUp(id);
        };

        $scope.incrementDown = function(id) {
            cart.incrementDown(id);
        };
    });