angular
	.module('quizApp')
	.controller('quizzesController', quizzesController);

	function quizzesController($scope, $http, toastr, quizzesService) {
		var vm = this;
		vm.quiz = [];

		quizzesService.getQuizzes()
		.then(function(success){
			vm.quiz = success.data;
		}, function(error){
			toastr.error('Something went Wrong', 'ERROR!');
		});
	}