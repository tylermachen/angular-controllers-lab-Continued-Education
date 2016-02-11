function StaffController($scope) {
    $scope.name = 'Steve Jobs';
    $scope.email = 'steve@apple.com';
}

angular
    .module('app')
    .controller('StaffController', StaffController);