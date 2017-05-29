angular
  .module('quizApp')
  .controller('quizController', quizController);

  function quizController($scope, $state, toastr, quizzesService, $stateParams){
    var vm = this;
    vm.quiz = {};

    vm.editQuiz = true;

    vm.showEditQuiz = function () {
      if (vm.editQuiz === true) {
        vm.editQuiz = false;
      } else {
        vm.editQuiz = true;
      }
    };

    quizzesService.getQuiz($stateParams.topicId, $stateParams.quizId)
    .then(function(success){
      vm.quiz = success.data;
    }, function(error){
      toastr.error('Something went Wrong', "ERROR!");
    })

    vm.delete = function() {
      quizzesService.deleteQuiz($stateParams.topicId, $stateParams.quizId)
      .then(function(success){
        $state.go("topic", { "topicId": $stateParams.topicId});
      }, function(error){
        toastr.error('Something went Wrong', "ERROR!");
      });
    }

    vm.updateQuiz = function () {
      var data = {
        quiz: {
          title: vm.quiz.title,
          passing_score: vm.quiz.passing_score
      }
        };

      quizzesService.editQuiz($stateParams.topicId, $stateParams.quizId, data)
      .then(function(success){
        console.log("success.data")
        toastr.success('Your Quiz has been successfully updated!');
        vm.quiz = success.data;
      }, function(error){
        toastr.error('Something went Wrong!');
      });
    };
  }
