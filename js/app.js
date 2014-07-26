var triviaApp = angular.module('triviaApp', ['firebase']);

triviaApp.controller('QuestionListCtrl', ['$scope', '$firebase', function($scope, $firebase) {
  var firebaseUrl = "https://triviaapp.firebaseio.com/questions";
  $scope.questions = $firebase(new Firebase(firebaseUrl));
}]);
