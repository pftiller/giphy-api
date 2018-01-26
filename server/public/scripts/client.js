const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
   $routeProvider
                .when('/random', {
                    templateUrl: '/views/random.html',
                    controller: 'RandomController as vm',
                })
                .when('/search', {
                    templateUrl: '/views/search.html',
                    controller: 'SearchController as vm',
                })
                .otherwise(
                    {redirectTo: '/random'}
                );
        });