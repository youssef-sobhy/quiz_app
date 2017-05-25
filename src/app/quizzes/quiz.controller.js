angular
	.module('quizApp')
	.controller('quizController', quizController);

	function quizController($scope, $state, toastr, quizzesService, $stateParams){
		var vm = this;
		vm.quiz = {};
console.log("i am in the quiz controller")
		quizzesService.getQuiz($stateParams["topic_id"], $stateParams["id"])
		.then(function(success){
			vm.quiz = success.data;
		}, function(error){
			toastr.error('Something went Wrong', "ERROR!");
		})

		vm.delete = function() {
			quizzesService.deleteQuiz($stateParams["topic_id"], $stateParams["id"])
			.then(function(success){
				$state.go("topic", { "id": $stateParams["topic_id"]});
			}, function(error){
				toastr.error('Something went Wrong', "ERROR!");
			});
		}
	}