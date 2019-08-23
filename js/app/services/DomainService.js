DomainService = ($http) => {
    this.getData = (domain) => {
        return $http.get('/rest/domain/' + domain)
    }
}

angular
    .module('app')
    .service('DomainService', DomainService)