

var myApp = angular.module('examApp', []).
        controller("MyController", [function () {
                var self = this;
                self.persons = [
                    {name: 'Hans', gender: 'male', age: 8}, {name: 'Grethe', gender: 'female', age: 7},
                    {name: 'Frederik', gender: 'male', age: 61}, {name: 'Hassan', gender: 'male', age: 13},
                    {name: 'Karen', gender: 'female', age: 31}, ];
            }]);

myApp.filter('childrenFilter', function () {

    return function (input) {
        var out = [];
        angular.forEach(input, function (person) {
            if (person.age > 5 && person.age < 16) {
                out.push(person);
            }
        })
        return out;
    }
})