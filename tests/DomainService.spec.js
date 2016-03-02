describe('DomainService', function () {
	var DomainService, $httpBackend;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		DomainService = $injector.get('DomainService');
		$httpBackend = $injector.get('$httpBackend');

		$httpBackend
			.when('GET', '/rest/domain/google.co.uk')
			.respond([
				{
					key: 'hello'
				}
			]);
	}));

	it('should request the correct endpoint', function (done) {
		$httpBackend.expectGET('/rest/domain/google.co.uk');

		DomainService
			.getData('google.co.uk')
			.then(function (res) {
				if (res.data && res.data[0].key === 'hello') {
					done();
				}
			});

		$httpBackend.flush();
	});
});
