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

  TopicsService.getTopic($stateParams.topicId)
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
    console.log(data);
    TopicsService.editTopic(vm.topic.id, data)
      .then(function (success) {
        vm.topic = success.data
      }, function (error) {
        toastr.error('Failed to add topic you entered', 'ERROR!');
      });
  };

  // vm.updateTopic = function () {
  //   var data = {
  //     topic: {
  //       title: vm.topic.title,
  //       description: vm.topic.description
  //       // logo: vm.topic.logo
  //     }
  //   };
  //   TopicsService.editTopic($stateParams.topicId, data)
  //     .then(function (success) {
  //       toastr.success('Topic has been updated', 'successfully');
  //       vm.topic = success.data;

  //       Upload.upload({
  //         url: ENV_VARS + "topics/" + vm.topic.id + ".json",
  //         method: 'PUT',
  //         data: {
  //           topic: {
  //             logo: vm.topic.logo
  //           }
  //         }
  //       })

  //     },function (error) {
  //       toastr.error('Failed to editing this topic', 'ERROR!');
  //     });
  // };

// vm.updateTopic = function (topic) {
//     var data = {
//       topic: {
//         title: topic.title,
//         description: topic.description
//         logo: topic.logo
//       }
//     };
//     TopicsService.editTopic($stateParams.topicId, data)
//       .then(function (success) {
//         toastr.success('Topic has been updated', 'successfully');
//         vm.topic = success.data;

//         Upload.upload({
//           url: ENV_VARS + "topics/" + vm.topic.id + ".json",
//           method: 'PUT',
//           data: {
//             topic: {
//               logo: vm.topic.logo
//             }
//           }
//         })

//       },function (error) {
//         toastr.error('Failed to editing this topic', 'ERROR!');
//       });
//   };





  vm.removeTopic = function () {
    TopicsService.deleteTopic($stateParams.topicId)
      .then(function (success) {
        vm.topic = success.data;
        $state.go('topics');
      }, function (error) {
        toastr.error('Failed to delete this topic', 'ERROR!');
      });
  }

}
