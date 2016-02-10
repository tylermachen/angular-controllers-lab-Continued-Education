function StaffController() {
    this.name = 'Steve Jobs';
    this.email = 'steve@apple.com';
}

angular
    .module('app')
    .controller('StaffController', StaffController);