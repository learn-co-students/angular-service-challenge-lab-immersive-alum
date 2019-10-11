function SubRedditService($http) {
  this.getData = function(name) {
    return $http.get(`http://localhost:8080/rest/subreddit/${name}`);
  };
}

angular
  .module('app') 
  .service('SubRedditService', SubRedditService );