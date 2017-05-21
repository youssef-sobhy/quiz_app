angular
.module('quizApp')
.controller('AuthController', AuthController);

function AuthController($scope, $auth, $location, $log, toastr) {
  var vm = this;

  vm.registerUser = function () {
    $auth.submitRegistration($scope.registrationForm)
    .then(function () {
      toastr.success('You have successfully registered.');
    }).catch(function (response) {
      $log.log(response);
    });
  };

  vm.loginUser = function () {
    $auth.submitLogin($scope.loginForm)
    .then(function () {
      toastr.success('You have successfully logged in.');
    }).catch(function (response) {
      $log.log(response);
      toastr.error('Wrong email or password.', 'ERROR!');
    });
  };
}
