var app = angular.module('myApp', []);

app.controller("myController", ['$scope', 'myFactory', '$http', function ($scope, myFactory, $http) {
        var self = this;
        self.getAllCountries = function() {
            myFactory.getAll()
            .then(function (response) {
                console.log("Response is: " + response);
                self.countries_all = response.data;
                console.log(self.countries_all);
            }, function (error) {
                self.status = 'Unable to load customer data: ' + error.message;
            });
        };
       
        self.getAllCountries();


    }]);

app.factory('myFactory', ['$http', function($http){
        var factory = {};
        var baseUrl = "https://restcountries.eu/rest/v1/";
        factory.getAll = function() {
            return $http.get(baseUrl + "all");
        };
        return factory;
}]);