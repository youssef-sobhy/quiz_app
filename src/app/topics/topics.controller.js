angular
.module('quizApp')
.controller('TopicsController', topicsController);

function topicsController($scope, $http, toastr, topicsService) {
  var vm = this;
  vm.topics = [];
  topicsService.getTopics()
    .then(function (success) {
      vm.topics = success.data;
    }, function (error) {
      toastr.error('Failed to retrieve topics', 'ERROR!');
    });

  vm.addTopic = function () {
    var data = {
      topic: {
        title: vm.title,
        description: vm.description,
        logo: vm.logo
      }
    };
    topicsService.postTopic(data)
      .then(function (success) {
        vm.topics.push(success.data);
      }, function (error) {
        toastr.error('Failed to add topic you entered', 'ERROR!');
      });
  };
}
