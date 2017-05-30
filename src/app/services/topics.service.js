angular
  .module('quizApp')
  .factory('TopicsService', function ($http, Upload, ENV_VARS) {
    var baseUrl = ENV_VARS.baseUrl + 'topics';

    return {
      getTopics: function () {
        return $http.get(baseUrl + '.json');
      },
      getTopic: function (id) {
        return $http.get(baseUrl + '/' + id + '.json');
      },
      editTopic: function (id, data) {
        return Upload.upload({
          url: baseUrl + '/' + id + '.json',
          method: 'put',
          data: data
        });
      },
      postTopic: function (data){
        return Upload.upload({
          url: baseUrl + '.json',
          method: 'post',
          data: data
        });
      },
      deleteTopic: function (id) {
        return $http.delete(baseUrl + '/' + id + '.json');
      }
    };
  });
