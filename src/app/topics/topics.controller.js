angular
.module('quizApp')
.controller('TopicsController', TopicsController);

<<<<<<< HEAD
function TopicsController($scope, toastr, TopicsService, Upload, ENV_VARS) {
=======
function TopicsController($scope, toastr, TopicsService) {
>>>>>>> 2746d983ab64165de8915d558ca0a4903853edc1
  var vm = this;
  vm.topics = [];

  TopicsService.getTopics()
    .then(function (success) {
      vm.topics = success.data;
    }, function (error) {
      toastr.error('Failed to retrieve topics', 'ERROR!');
    });

  // vm.addLogo = function () {
  //     Upload.upload({
  //       url: ENV_VARS + "topics/" + id ".json",
  //       method: 'POST',
  //       data: {
  //         topic: {
  //           logo: vm.topic.logo
  //         }
  //       }
  //     })
  //   };

  vm.addTopic = function () {
    var data = {
      topic: {
        title: vm.title,
        description: vm.description
        // logo: vm.logo
      }
    };
    TopicsService.postTopic(data)
      .then(function (success) {
        vm.topics.push(success.data);
        vm.title = "";
        vm.description = "";
        vm.logo = "";

        Upload.upload({
          url: ENV_VARS + "topics/" + success.data.id + ".json",
          method: 'PUT',
          data: {
            topic: {
              logo: vm.logo
            }
          }
        })
      }, function (error) {
        toastr.error('Failed to add topic you entered', 'ERROR!');
      });
  };
}
