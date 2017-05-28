angular
  .module('quizApp')
  .config(function ($authProvider, $stateProvider, $locationProvider, ENV_VARS) {
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
    
    $stateProvider
      .state('sign in', {
        url: '/',
        templateUrl: 'app/authentication/user_sign_in.html'
      })
      .state('sign up', {
        url: '/sign_up',
        templateUrl: 'app/authentication/user_sign_up.html'
      })
      .state('gm sign in', {
        url: '/game_maker',
        templateUrl: 'app/authentication/gamemaker_sign_in.html'
      })
      .state('topics', {
        url: '/topics',
        templateUrl: 'app/topics/topics.html'
      })
      .state('topic', {
        url: '/topics/{id}',
        templateUrl: 'app/topics/topic.html'
      })
      .state('quiz', {
        url:'/topics/{topic_id}/quizzes/{id}',
        templateUrl: 'app/quizzes/quiz.html'
      });
    $locationProvider.html5Mode(true);
  });
