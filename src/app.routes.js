angular
  .module('quizApp')
  .config(function ($authProvider, $routeProvider, $locationProvider, ENV_VARS) {
    $authProvider.configure([
      {
        default: {
          apiUrl: ENV_VARS.base_url
        }
      }, {
        gameMaker: {
          apiUrl: ENV_VARS.base_url,
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
    })
    .when('/topics', {
      templateUrl: 'app/topics/topics.html'
    })
    .when('/topics/:id', {
      templateUrl: 'app/topics/topic.html'
    });
    $locationProvider.html5Mode(true);
  });
