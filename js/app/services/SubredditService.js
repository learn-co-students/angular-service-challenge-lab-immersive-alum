SubredditService = ($http) => {
    this.getData = (subreddit) => {
        return $http.get('/rest/subreddit' + subreddit)
    }
}

angular
    .module('app')
    .service('SubredditService', SubredditService)