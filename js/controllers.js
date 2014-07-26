var triviaControllers = angular.module('triviaControllers', ['firebase']);

triviaApp.controller('QuestionListCtrl', ['$scope', '$firebase', function($scope, $firebase) {
  var firebaseUrl = "https://triviaapp.firebaseio.com/questions";
  $scope.questions = $firebase(new Firebase(firebaseUrl));

  $scope.deleteQuestion = function(questionId) {
    $scope.questions.$remove(questionId);
  };

  $scope.answerQuestion = function(question, selectedAnswer) {
    question.answered = true;
    question.correct = (question.answer == selectedAnswer);
  };
}]);

triviaApp.controller('QuestionNewCtrl', ['$scope', '$firebase', '$location', function($scope, $firebase, $location) {
  $scope.question = {}

  $scope.persistQuestion = function(question) {
    var firebaseUrl = "https://triviaapp.firebaseio.com/questions";
    $scope.questions = $firebase(new Firebase(firebaseUrl));
    $scope.questions.$add(question).then(function(ref) {
      $location.url('questions');
    });
  };
}]);

triviaApp.controller('QuestionDetailCtrl', ['$scope', '$firebase', '$routeParams', '$location', function($scope, $firebase, $routeParams, $location) {
  var firebaseUrl = "https://triviaapp.firebaseio.com/questions/" + $routeParams.questionId;
  $scope.question = $firebase(new Firebase(firebaseUrl));

  $scope.persistQuestion = function(question) {
    $scope.question.$update({
      question: question.question,
      option1: question.option1,
      option2: question.option2,
      option3: question.option3,
      answer: question.answer
    }).then(function(ref) {
      $location.url('/questions');
    });
  };
}]);
