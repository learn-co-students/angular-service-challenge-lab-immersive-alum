function SubRedditService($http) {
  this.getData = function(name) {
    return $http.get('/rest/subreddit/'+name)
  }
}


angular
  .module('app')
  .service('SubRedditService', SubRedditService)