function DomainService($http) {
	this.getData = function (domain) {
		return $http.get('/rest/domain/' + domain);
	};
}

angular
	.module('app')
	.service('DomainService', DomainService);