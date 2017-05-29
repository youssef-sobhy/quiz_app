angular
  .module('quizApp')
  .controller('UserController', UserController);

  function UserController($scope, Upload) {
    var vm = this;

    vm.uploadPicture = function () {
      Upload.upload({
        url: 'http://localhost:3000/users/1.json',
        method: 'PUT',
        data: {
          user: {
            picture: $scope.picture
          }
        }
      })
    };
  };