describe('SubRedditService', function () {
	var SubRedditService, $httpBackend;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		SubRedditService = $injector.get('SubRedditService');
		$httpBackend = $injector.get('$httpBackend');

		$httpBackend
			.when('GET', '/rest/subreddit/javascript')
			.respond([
				{
					key: 'hello'
				}
			]);
	}));

	it('should request the correct endpoint', function (done) {
		$httpBackend.expectGET('/rest/subreddit/javascript');

		SubRedditService
			.getData('javascript')
			.then(function (res) {
				if (res.data && res.data[0].key === 'hello') {
					done();
				}
			});

		$httpBackend.flush();
	});
});
