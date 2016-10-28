

var app = angular.module('myApp', []);
app.controller("DirectiveController", ['$scope', function ($scope) {
        $scope.user = {
            companyName: "Coolest Company on Earth",
            companyUrl: "http://www.cool.cooler.com",
            created: new Date()
        };
    }]);

app.directive('myDirective', function() {
   return {
       restrict: 'AE',
       templateUrl: 'myCompany.html',
       controller: 'DirectiveController'
   };
   });