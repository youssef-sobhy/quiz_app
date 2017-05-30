angular
.module('quizApp')
.controller('TopicsController', TopicsController);

function TopicsController($scope, toastr, TopicsService, Upload, ENV_VARS) {

  var vm = this;
  vm.topics = [];

  TopicsService.getTopics()
    .then(function (success) {
      vm.topics = success.data;
      console.log(success.data)
    }, function (error) {
      toastr.error('Failed to retrieve topics', 'ERROR!');
    });

  vm.addTopic = function (topic) {
    var data = {
      topic: {
        title: topic.title,
        description: topic.description,
        logo: topic.logo
      }
    };
    console.log(data);
    TopicsService.postTopic(data)
      .then(function (success) {
        vm.topics.push(success.data);
        topic = {}
      }, function (error) {
        toastr.error('Failed to add topic you entered', 'ERROR!');
      });
  };
}
