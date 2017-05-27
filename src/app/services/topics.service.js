angular
  .module('quizApp')
  .factory('topicsService', function($http, ENV_VARS){
    var base_url = ENV_VARS.base_url + "topics";

    return {
        getTopics: function(){
            console.log('I am in getTopics function');
            return $http.get(base_url + ".json");
        },
        getTopic: function(id){
            return $http.get(base_url + "/" + id + ".json");
        },
        postTopic: function(data){
            return $http.post(base_url, data)
        }
    }
});
