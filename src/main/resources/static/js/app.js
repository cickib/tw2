var app = angular.module('BpFF', ['ngRoute', 'ngSanitize']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/search', {
            templateUrl: 'views/search_bar.html',
            controller: 'SearchCtrl'
        })
        .when('/display', {
            templateUrl: 'views/display_flats.html',
            controller: 'DisplayCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
