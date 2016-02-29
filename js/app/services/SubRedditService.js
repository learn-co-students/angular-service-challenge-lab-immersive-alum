function SubRedditService($http) {
	this.getData = function (subreddit) {
		return $http.get('/rest/subreddit/' + subreddit);
	};
}

angular
	.module('app')
	.service('SubRedditService', SubRedditService);