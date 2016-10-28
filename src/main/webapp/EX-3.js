var app = angular.module('myApp', []);
                    app.controller('myController', ['myFactory', function (myFactory) {
                            var self = this;                           
                            self.randomNumber = myFactory.getRandomNumber(100);
                            self.randomString = myFactory.getRandomString(self.randomNumber);
                        }]);

                    app.factory('myFactory', function () {
                        var factory = {  
                            //Random Number from 1 to N 
                            getRandomNumber: function (N) {
                                return Math.floor((Math.random() * N) + 1);
                            },
                            //Random string of length "N"
                            getRandomString: function (N) {
                                return new Array(N + 1).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, N);
                            }
                        };
                        return factory;
                    });