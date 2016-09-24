//Modules
var app = angular.module('app', ['ngRoute']);

//Routes
app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })
});

//Services
app.service('dayService', function () {
    this.monday = function () {
        return "Japanese dish";
    };
    this.tuesday = function () {
        return "korean dish";
    };
    this.wednesday = function () {
        return "Indian dish";
    };
    this.thursday = function () {
        return "Mexican dish";
    };
    this.friday = function () {
        return "Thai dish";
    };
    this.saturday = function () {
        return "Grill bar";
    };
    this.sunday = function () {
        return "Fasting...";
    };

});

app.service('foodService', function (dayService) {

    this.weekday = function (day) {
        switch (day.toLowerCase()) {
            case "monday" :
                return dayService.monday();
                break;
            case "tuesday" :
                return dayService.tuesday();
                break;
            case "wednesday" :
                return dayService.wednesday();
                break;
            case "thursday" :
                return dayService.thursday();
                break;
            case "friday" :
                return dayService.friday();
                break;
            case "saturday" :
                return dayService.saturday();
                break;
            case "sunday" :
                return dayService.sunday();
                break;
            default:
                alert("No matches...");

        }
        ;
    };

});

//Directives
app.directive('dayFood', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/foodschedule.html'
    }
});

//Controllers
app.controller('foodController', ['$scope', 'foodService', function ($scope, foodService) {
    $scope.findFood = function () {
        $scope.food = foodService.weekday($scope.day);
    }

}]);

app.controller('mainController', ['$scope', function ($scope) {
    $scope.message = "Thank you";

}]);
app.controller('aboutController', ['$scope', function ($scope) {
    $scope.message = "Thank you";

}]);
app.controller('contactController', ['$scope', function ($scope) {
    $scope.message = "Thank you";

}]);
 
