(function () {
	'use strict';

	angular
		.module('app')
		.controller('DashboardController', DashboardController);

	DashboardController.$inject = ['authService'];

	function DashboardController(authService) {

		var vm = this;
		vm.authService = authService;

	}
})();