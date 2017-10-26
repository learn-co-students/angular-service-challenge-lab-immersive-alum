function DomainService($http) {
  this.getData = function(name) {
    return $http.get('/rest/domain/'+name)
  }
}


angular
  .module('app')
  .service('DomainService', DomainService)