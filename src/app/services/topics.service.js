angular
.module('quizApp')
.factory('TopicsService', function ($http, ENV_VARS) {
    var baseUrl = ENV_VARS.baseUrl + 'topics';

    return {
        getTopics: function () {
            return $http.get(baseUrl + '.json');
        },
        getTopic: function (id) {
            return $http.get(baseUrl + '/' + id + '.json');
        },
        postTopic: function (data) {
            return $http.post(baseUrl + '.json', data);
        }
    };
});
