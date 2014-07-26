var triviaApp = angular.module('triviaApp', []);

triviaApp.controller('QuestionListCtrl', function($scope) {
  $scope.questions = [
    {
      id: 1,
      question: "Why is AngularJS named AngularJS?",
      option1: "It sounds cool.",
      option2: "It describes HTML brackets.",
      option3: "The author had a habit of holding his head at an angle while coding.",
      answer: "2"
    },
    {
      id: 2,
      question: "Why does AngularJS use the namespace ng?",
      option1: "It stands for 'n gage' (engage).",
      option2: "It's the initials of the original author.",
      option3: "It sounds like angular.",
      answer: "3"
    }
  ]
});
