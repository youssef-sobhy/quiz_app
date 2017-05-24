angular
	.module('quizApp')
	.factory('quizzesService', function($http, ENV_VARS){
		var base_url = ENV_VARS.base_url + "topics/" + id + "/quizzes";

		return{
			getQuizzes: function(){
				return $http.get(base_url + ".json");
			}
			getQuiz: function(id){
				return $http.get(base_url + "/" + id + ".json");
			},
			postQuiz: function(data){
				return $http.post(base_url, data)
			}
		}
	});