angular
.module('quizApp')
.controller('TopicController', topicController);

function topicController($scope, $http, $routeParams, toastr, topicsService) {
  var vm = this;
  vm.topic = {};

  topicsService.getTopic($routeParams.id)
    .then(function (success) {
      vm.topic = success.data;
    }, function (error) {
      toastr.error('Failed to retrieve the topic you clicked', 'ERROR!');
    });
}
