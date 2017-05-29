angular
.module('quizApp')
.controller('AuthController', AuthController);

function AuthController($scope, $auth, $log, toastr) {
  var vm = this;

  vm.registerUser = function () {
    $auth.submitRegistration($scope.registrationForm)

    .then(function () {
      toastr.success('You have successfully registered.');
    }).catch(function (response) {
    });
  };

  vm.loginUser = function () {
    $auth.submitLogin($scope.loginForm)

    .then(function () {
      toastr.success('You have successfully logged in as a user.');
    }).catch(function (response) {
      toastr.error('Wrong email or password.', 'ERROR!');
    });
  };

  vm.loginGameMaker = function () {
    $auth.submitLogin($scope.loginForm,
      {
        config: 'gameMaker'
      })

    .then(function () {
      toastr.success('You have successfully logged in as a game maker.');
    }).catch(function (response) {
      toastr.error('Wrong email or password.', 'ERROR!');
    });
  };
}
