/*globals angular*/
angular.module('cart', [])
    .factory('cart', function() {
        'use strict';

        var cartData = [];

        return {

            addProduct: function(id, name, price) {
                var addedToExistingItem = false;
                for(var i = 0; i < cartData.length; i++) {
                    if(cartData[i].id === id) {
                        cartData[i].count++;
                        addedToExistingItem = true;
                        break;
                    }
                }

                if(!addedToExistingItem) {
                    cartData.push({
                        count: 1, id: id, price: price, name: name
                    });
                }
            },

            removeProduct: function(id) {
                for(var i = 0; i < cartData.length; i++) {
                    if(cartData[i].id === id) {
                        cartData.splice(i, 1);
                        break;
                    }
                }
            },

            incrementUp: function(id) {
                for(var i = 0; i < cartData.length; i++) {
                    if(cartData[i].id === id) {
                        cartData[i].count++;
                        break;
                    }
                }
            },

            incrementDown: function(id) {
                for(var i = 0; i < cartData.length; i++) {
                    if(cartData[i].id === id) {
                        cartData[i].count--;

                        if(cartData[i].count === 0) {
                            this.removeProduct(id);
                        }

                        break;
                    }
                }
            },

            getProducts: function() {
                return cartData;
            }
        };
    })
    .directive('cartSummary', function(cart) {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'components/cart/cartSummary.html',
            controller: function($scope) {
                var cartData = cart.getProducts();

                $scope.total = function() {
                    var total = 0;
                    for(var i = 0; i < cartData.length; i++) {
                        total += (cartData[i].price * cartData[i].count);
                    }

                    return total;
                };

                $scope.itemCount = function() {
                    var total = 0;
                    for(var i = 0; i < cartData.length; i++) {
                        total += cartData[i].count;
                    }

                    return total;
                };
            }
        };
    });