describe('StaffController', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));


	it('should not be using $scope to set values', function () {
		var $scope = {};
		$controller('StaffController as vm', {$scope: $scope});

		expect($scope.name).toBe(undefined);
		expect($scope.email).toBe(undefined);
	});
	it('should have values assigned to `this`', function () {
		var $scope = {};
		$controller('StaffController as vm', {$scope: $scope});

		expect($scope.vm.name).toBe('Steve Jobs');
		expect($scope.vm.email).toBe('steve@apple.com');
	})
});
