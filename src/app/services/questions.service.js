angular
  .module('quizApp')
  .factory('questionsService', function ($http, $stateParams, ENV_VARS) {
    var base_url = ENV_VARS.base_url + 'topics/' + $stateParams.topicId + '/quizzes/' + $stateParams.quizId;
    var submitQuizUrl = 'http://localhost:3000/user_answers.json'

    return {
      getQuestions: function () {
        return $http.get(base_url + '/questions.json');
      },
      addQuestion: function (data) {
        return $http.post(base_url + '/questions.json', data);
      },
      editQuestion: function (id, data) {
        return $http.patch(base_url + '/questions/' + id + '.json', data);
      },
      deleteQuestion: function (id) {
        return $http.delete(base_url + '/questions/' + id + '.json');
      },
      submitQuiz: function (data) {
        return $http.post(submitQuizUrl, data);
      }
    };
  });
