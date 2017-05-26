angular
  .module('quizApp')
  .factory('questionsService', function ($http, ENV_VARS) {
    var base_url = ENV_VARS.base_url + 'topics/';
  });
