var triviaControllers = angular.module('triviaControllers', ['firebase', 'triviaServices']);

triviaControllers.controller('QuestionListCtrl', ['$scope', 'FirebaseService', function($scope, FirebaseService){
  $scope.questions = FirebaseService.getAllQuestions();

  $scope.deleteQuestion = function(questionId) {
    $scope.questions.$remove(questionId);
  };

  $scope.answerQuestion = function(question, selectedAnswer) {
    question.answered = true;
    question.correct = (question.answer == selectedAnswer);
  };
}]);

triviaControllers.controller('QuestionNewCtrl', ['$scope', '$location', 'FirebaseService', function($scope, $location, FirebaseService){
  $scope.question = {}

  $scope.persistQuestion = function(question) {
    var firebaseUrl = "https://triviaapp.firebaseio.com/questions";
    $scope.questions = $firebase(new Firebase(firebaseUrl));
    $scope.questions.$add(question).then(function(ref) {
      $location.url('questions');
    });
  };
}]);

triviaControllers.controller('QuestionDetailCtrl', ['$scope', '$routeParams', '$location', 'FirebaseService', function($scope, $routeParams, $location, FirebaseService){
  $scope.question = FirebaseService.getQuestion($routeParams.questionId);

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
