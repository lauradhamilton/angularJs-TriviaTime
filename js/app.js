var triviaApp = angular.module('triviaApp', ['firebase','ngRoute']);

triviaApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/questions', {
      templateUrl: 'partials/question-list.html',
      controller: 'QuestionListCtrl'
    }).
    otherwise({
      redirectTo: '/questions'
    });
}]);

triviaApp.controller('QuestionListCtrl', ['$scope', '$firebase', function($scope, $firebase) {
  var firebaseUrl = "https://triviaapp.firebaseio.com/questions";
  $scope.questions = $firebase(new Firebase(firebaseUrl));
}]);
