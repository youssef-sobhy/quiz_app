angular
.module('quizApp')
.controller('TopicController', TopicController);

function TopicController($scope, $http, toastr, topicsService, $stateParams) {
  var vm = this;
  vm.topic = {};

  topicsService.getTopic($stateParams.topicId)
    .then(function(success){
      vm.topic = success.data;
    }, function(error){
      toastr.error('Failed to retrieve the topic you clicked', "ERROR!");
    });
}
