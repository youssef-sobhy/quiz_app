angular
.module('quizApp')
.controller('topicsController', topicsController);

function topicsController($scope, $http, toastr, topicsService) {
  var vm = this;
  vm.topics = [];

  topicsService.getTopics()
    .then(function(success){
      vm.topics = success.data;
    }, function(error){
      toastr.error('Failed to retrieve topics', "ERROR!");
    });
}
