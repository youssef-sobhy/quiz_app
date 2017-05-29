angular
.module('quizApp')
.controller('TopicController', TopicController);

function TopicController($scope, $stateParams, $state, toastr, TopicsService, Upload, ENV_VARS) {
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
        description: vm.topic.description
        // logo: vm.topic.logo
      }
    };
    TopicsService.editTopic($stateParams.id, data)
      .then(function (success) {
        toastr.success('Topic has been updated', 'successfully');
        vm.topic = success.data;

        Upload.upload({
          url: ENV_VARS + "topics/" + vm.topic.id + ".json",
          method: 'PUT',
          data: {
            topic: {
              logo: vm.topic.logo
            }
          }
        })

      },function (error) {
        toastr.error('Failed to editing this topic', 'ERROR!');
      });
  };

  vm.removeTopic = function () {
    TopicsService.deleteTopic($stateParams.id)
      .then(function (success) {
        vm.topic = success.data;
        $state.go('topics');
      }, function (error) {
        toastr.error('Failed to delete this topic', 'ERROR!');
      });  
  }

vm.updateLogo = function () {
      Upload.upload({
        url: 'ENV_VARS + "topics/" + id ".json"',
        method: 'PUT',
        data: {
          topic: {
            logo: $scope.logo
          }
        }
      })
    };
}
