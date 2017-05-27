angular
	.module('quizApp')
	.controller('quizController', quizController);

	function quizController($scope, $state, toastr, quizzesService, $stateParams){
		var vm = this;
		vm.quiz = {};

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
	}
