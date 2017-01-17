(function () {

  'use strict';

  	angular
    	.module('app')
	    .controller('LoginController', loginController);

  	loginController.$inject = ['authService'];

  	function loginController(authService) {

    var vm = this;

   	vm.authService = authService;

    vm.login = function () {
		// Show loading indicator
		vm.message = 'loading...';
		vm.loading = true;
		authService.login(vm.username, vm.password, function (err) {
			if (err) {
				vm.message = "something went wrong: " + err.message;
				vm.loading = false;
			}
		});
    };

    vm.signup = function () {
      // Show loading indicator
		vm.message = 'loading...';
		vm.loading = true;
		authService.signup(vm.username, vm.password, function (err) {				
			if (err) {
				vm.message = "something went wrong: " + err.message;
				vm.loading = false;
			}
		});
    };

    vm.googleLogin = function () {
		vm.message = 'loading...';
		vm.loading = true;
		authService.googleLogin(function (err) {
			if (err) {
				vm.message = "something went wrong: " + err.message;
				vm.loading = false;
			}
		});
    };
  }

})();