angular
.module('quizApp')
.controller('TopicsController', topicsController);

function topicsController($scope, toastr, TopicsService) {
  var vm = this;
  vm.topics = [];

  TopicsService.getTopics()
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
    TopicsService.postTopic(data)
      .then(function (success) {
        vm.topics.push(success.data);
        vm.title = "";
        vm.description = "";
        vm.logo = "";
      }, function (error) {
        toastr.error('Failed to add topic you entered', 'ERROR!');
      });
  };
}
