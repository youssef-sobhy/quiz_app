angular
	.module('quizApp')
	.controller('quizController', quizController);

	function quizController($scope, $http, toastr, quizzesService, $routeParams){
		var vm = this;
		vm.quiz = {};

		quizzesService.getQuiz($routeParams["id"])
		.then(function(success){
			vm.quiz = succes.data;
		}, function(error){
			toastr.error('Something went Wrong', "ERROR!");
		});
	}