/*globals angular*/
angular.module('sportsStore', ['customFilters', 'cart', 'ngRoute'])
    .config(function($routeProvider) {
        'use strict';

        $routeProvider.when('/complete', {
            templateUrl: '/views/thankYou.html'
        });

        $routeProvider.when('/placeorder', {
            templateUrl: '/views/placeOrder.html'
        });

        $routeProvider.when('/checkout', {
            templateUrl: '/views/checkoutSummary.html'
        });

        $routeProvider.when('/products', {
            templateUrl: '/views/productList.html'
        });

        $routeProvider.otherwise({
            templateUrl: '/views/productList.html'
        });
    });