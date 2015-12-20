
EduRate.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/rating-summary');

    $stateProvider
        .state('ratingSummary', {
            url: '/rating-summary',
            templateUrl: 'partials/ratingSummary.html'
        })

        .state('logIn', {
            url: '/login',
            templateUrl: 'partials/login.html'
        })
        .state('rateUni', {
            url: '/rate',
            templateUrl: 'partials/rate.html'
        })
        .state('uniRatingDetails', {
            url: '/ratingDetails/:uniId',
            templateUrl: 'partials/ratingDetails.html',
            controller:"ratingDetailsCtrl as _ratingDetail"
        })
        .state('register', {
            url: '/register',
            templateUrl: 'partials/register.html'
        });

}]);
