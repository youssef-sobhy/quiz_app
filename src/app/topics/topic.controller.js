angular
.module('quizApp')
.controller('TopicController', topicController);

function topicController($scope, $stateParams, toastr, TopicsService) {
  var vm = this;
  vm.topic = {};
  vm.editForm = true;

  vm.showEditForm = function () {
    if (vm.editForm === true) {
      vm.editForm = false;
    } else {
      vm.editForm = true;
    }
  };

  TopicsService.getTopic($stateParams.id)
    .then(function (success) {
      vm.topic = success.data;
    }, function (error) {
      toastr.error('Failed to retrieve the topic you clicked', 'ERROR!');
    });
  vm.updateTopic = function () {
    var data = {
      topic: {
        title: vm.topic.title,
        description: vm.topic.description,
        logo: vm.topic.logo
      }
    };
    TopicsService.editTopic($stateParams.id, data)
      .then(function (success) {
        toastr.success('Topic has been updated', 'successfully');
        vm.topic = success.data;
      },function (error) {
        toastr.error('Failed to editing this topic', 'ERROR!');
      });
  };

  vm.removeTopic = function () {
    console.log('test');
    TopicsService.deleteTopic($stateParams.id)
      .then(function (success) {
        vm.topic = success.data;
      }, function (error) {
        toastr.error('Failed to delete this topic', 'ERROR!');
      });  
  }


}
