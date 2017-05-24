angular
.module('quizApp')
.controller('topicController', topicController);

function topicController($scope, $http, toastr, topicsService, $stateParams) {
  var vm = this;
  vm.topic = {};
  console.log($stateParams);

  topicsService.getTopic($stateParams["id"])
    .then(function(success){
      vm.topic = success.data;
      console.log(vm.topic);
    }, function(error){
      toastr.error('Failed to retrieve the topic you clicked', "ERROR!");
    });
}
