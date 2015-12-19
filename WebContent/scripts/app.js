/* global angular */
// app.js
var routerApp = angular.module('routerApp', ['ui.router']);
debugger;
routerApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/rating');
    
    $stateProvider
        
        .state('ratingSummary', {
            url: '/rating-summary',
            templateUrl: 'partials/ratingSummary.html'
        })
        
        .state('logIn', {
             url: '/login',
             templateUrl: 'partials/login.html'
        })
        .state('register', {
              url: '/register',
             templateUrl: 'partials/register.html'
        });
        
}]);