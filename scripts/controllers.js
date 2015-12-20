EduRate.controller('appBodyCtrl', function () {
    var _body = this;
    _body.test = "test";

});




EduRate.controller('chartCtrl', function ($ocLazyLoad) {
    var _chart = this;


    _chart.labels = ['იდეალური', 'თავისუფალი', 'თსუ', 'კავკასიის', 'ილია', 'აგრარული', 'სტუ', 'სდასუ', 'სეუ', 'საქართველოს'];
    _chart.series = ['სწავლება', 'ინფრასტრუქტურა', 'ხელმისაწვდომობა', "დასაქმების კოეფიციენტი"];
    _chart.data = [
        [100, 89, 67, 75, 51, 58, 38, 50, 55, 60],
        [100, 70, 45, 76, 56, 70, 21, 56, 70, 70],
        [100, 26, 70, 35, 70, 64, 70, 55, 55, 45],
        [100, 90, 45, 60, 38, 40, 30, 30, 30, 35]
    ];
    _chart.onClick = function (points, evt) {
        console.log(points, evt);
    };
});


EduRate.controller('summaryCtrl', ['dataProvider', function (dataProvider) {
   
    var _summary = this;
    dataProvider.loadUniversitySummaries().then(function (result) {
        _summary.univercities = result;
    });

}]);


EduRate.controller("ratingDetailsCtrl", ['dataProvider','$stateParams', function (dataProvider,$stateParams) {
	
    var _ratingDetail = this;
   
    dataProvider.loadUniversityRatingById($stateParams.uniId).then(function (result) {
        _ratingDetail.university = result;
    });

}]);



EduRate.controller("EvaluationCtrl", ['dataProvider','$sce', function (dataProvider,$sce) {
  
   var _totalRate = this;
   
   _totalRate.trustAsHtml = function(value) {
	   return $sce.trustAsHtml(value);
	 };
   
   dataProvider.loadUniversitiesList().then(function (result) {
	   _totalRate.universities = result;
   });
   
   
   _totalRate.loadSpecialities = function (uniId){
	   dataProvider.loadSpecialitiesByUniId(uniId).then(function (result) {
		   _totalRate.specialities = result;
	   });
   }
   
   _totalRate.loadCategories = function (specialityId){
	   dataProvider.loadCategoriesBySpecialityId(specialityId).then(function (result) {
		   _totalRate.categories = result;
	   });
   }
   
   
}]);




(function() {
  'use strict';

  EduRate
    .controller('RatingController', RatingController)
    .directive('starRating', starRating);

  function RatingController() {
    this.rating1 = 5;
    this.rating2 = 2;
    this.isReadonly = true;
    this.rateFunction = function(rating,trueModel) {
      debugger;
      console.log('Rating selected: ' + rating);
      switch (stars){
      case 1: return "საერთოდ არ არსებობს!";break;
      }
    };
   
  }

  function starRating() {
    return {
      restrict: 'EA',
      template:
        '<ul class="star-rating" ng-class="{readonly: readonly}">' +
        '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
        '    <i class="fa fa-star"></i>' + // or &#9733
        '  </li>' +
        '</ul>',
      scope: {
        ratingValue: '=ngModel',
        max: '=?', // optional (default is 5)
        onRatingSelect: '&?',
        customModel : '=',
        readonly: '=?'
      },
      link: function(scope, element, attributes) {
        if (scope.max == undefined) {
          scope.max = 5;
        }
        function updateStars() {
          scope.stars = [];
          for (var i = 0; i < scope.max; i++) {
            scope.stars.push({
              filled: i < scope.ratingValue
            });
          }
        };
        scope.toggle = function(index) {
          if (scope.readonly == undefined || scope.readonly === false){
            scope.ratingValue = index + 1;
            scope.customModel = scope.ratingValue;
            scope.onRatingSelect({
              rating: index + 1
            });
          }
        };
        scope.$watch('ratingValue', function(oldValue, newValue) {
          if (newValue) {
            updateStars();
          }
        });
      }
    };
  }
})();
