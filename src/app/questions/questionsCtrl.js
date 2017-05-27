angular
  .module('quizApp')
  .controller('QuestionsController', QuestionsController);

function QuestionsController($scope, $stateParams, $log, toastr, questionsService) {
  var vm = this;

  questionsService.getQuestions($stateParams.topicId, $stateParams.quizId)
  .then(
    function (success) {
      vm.questions = success.data;
    },
    function () {
      toastr.error('Cannot retrieve questions', 'ERROR!');
    }
  );

  vm.choices = [{}, {}, {}, {}];

  vm.updateCheckBox = function (position) {
    angular.forEach(vm.choices, function (choice, index) {
      if (position !== index) {
        choice.right_choice = false;
      }
    });
  };

  vm.addQuestion = function () {
    vm.questionData = {
      question: {
        question: vm.question,
        choices_attributes: vm.choices
      }
    };

    questionsService.addQuestion(vm.questionData)
    .then(
      function (success) {
        $log.log(success.data);
        vm.question = '';
        vm.choices = [{}, {}, {}, {}];
      },
      function (err) {
        $log.error(err);
      }
    );
  };

  vm.editQuestion = function (question) {
    var data = {
      question: question
    };

    questionsService.editQuestion(question.id, data)
    .then(
      function () {
        toastr.success('Question successfully edited!');
      },
      function (err) {
        $log.error(err);
      }
    );
  };

  vm.deleteQuestion = function (question) {
    questionsService.deleteQuestion(question.id)
    .then(
      function () {
        var index = vm.questions.indexOf(question);
        vm.questions.splice(index, 1);
      },
      function (err) {
        $log.error(err);
      }
    );
  };
}
