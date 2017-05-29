// Generated by CoffeeScript 1.10.0
(function() {
  angular.module('alMakinah').config(function($authProvider, $logProvider, ENV_VARS) {
    'ngInject';
    $logProvider.debugEnabled(true);

    $authProvider.configure([
      {
        default: {
          apiUrl: ENV_VARS.baseUrl
        }
      }, {
        gameMaker: {
          apiUrl: ENV_VARS.baseUrl,
          signOutUrl: '/gamemaker_auth/sign_out',
          emailSignInPath: '/gamemaker_auth/sign_in',
          passwordResetPath: '/gamemaker_auth/password',
          passwordUpdatePath: '/gamemaker_auth/password',
          tokenValidationPath: '/gamemaker_auth/validate_token'
        }
      }
    ]);
  });

}).call(this);
