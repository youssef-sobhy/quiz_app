(function () {
  'use strict';

  angular
    .module('quizApp', ['ng-token-auth', 'ngRoute', 'toastr'])
    .config(function ($authProvider, $routeProvider, $locationProvider) {
      $authProvider.configure({
        apiUrl: 'http://localhost:3002'
      });

      $routeProvider
      .when('/', {
        templateUrl: 'app/authentication/sign_in.html',
        controller: 'AuthController',
        controllerAs: 'vm'
      })
      .when('/sign_up', {
        templateUrl: 'app/authentication/sign_up.html',
        controller: 'AuthController',
        controllerAs: 'vm'
      });

      $locationProvider.html5Mode(true);
    });
})();
