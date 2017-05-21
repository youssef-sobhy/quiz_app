(function () {
  'use strict';

  angular
    .module('quizApp', ['ng-token-auth', 'ngRoute', 'toastr'])
    .config(function ($authProvider, $routeProvider, $locationProvider) {
      $authProvider.configure([
      {
        default: {
          apiUrl: 'http://localhost:3002'
        }
      }, {
        gameMaker: {
          apiUrl: 'http://localhost:3002',
          signOutUrl: '/gamemaker_auth/sign_out',
          emailSignInPath: '/gamemaker_auth/sign_in',
          passwordResetPath: '/gamemaker_auth/password',
          passwordUpdatePath: '/gamemaker_auth/password',
          tokenValidationPath: '/gamemaker_auth/validate_token'
        }
      }

      ]);

      $routeProvider
      .when('/', {
        templateUrl: 'app/authentication/user_sign_in.html',
        controller: 'AuthController',
        controllerAs: 'vm'
      })
      .when('/sign_up', {
        templateUrl: 'app/authentication/user_sign_up.html',
        controller: 'AuthController',
        controllerAs: 'vm'
      })
      .when('/game_maker', {
        templateUrl: 'app/authentication/gamemaker_sign_in.html'
      });

      $locationProvider.html5Mode(true);
    });
})();
