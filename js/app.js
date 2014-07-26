var triviaApp = angular.module('triviaApp', []);

triviaApp.controller('QuestionListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('data/questions.json').success(function(data) {
    $scope.questions = data;
  });
}]);
