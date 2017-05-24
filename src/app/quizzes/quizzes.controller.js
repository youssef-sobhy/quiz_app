angular
	.module('quizApp')
	.controller('quizzesController', quizzesController);

	function quizzesController($scope, $http, toastr, quizzesService, $stateParams) {
		var vm = this;
		vm.quiz = [];

		quizzesService.getQuizzes($stateParams["id"])
		.then(function(success){
			vm.quizzes = success.data;
		}, function(error){
			toastr.error('Something went Wrong', 'ERROR!');
		});
	}