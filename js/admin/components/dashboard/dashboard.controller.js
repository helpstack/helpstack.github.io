(function () {
	'use strict';

	angular
		.module('app')
		.controller('DashboardController', DashboardController);

	DashboardController.$inject = ['$scope', 'authService'];

	function DashboardController($scope, authService) {

		var vm = this;
		vm.authService = authService;

		$scope.questions = [
			{ name: "Hoe kan ik mijn huur betalen?", author: 'Jasper' },
			{ name: "Hoe kan ik mijn huur betalen 2?", author: 'Nancy Steenweg' },
			{ name: "Waarom zijn bananen krom?", author: 'Nancy Steenweg' },
			{ name: "Hoe krijg je een giraf in de koelkast?", author: 'Nancy Steenweg' },
			{ name: "Kan ik mijn huur eigelijk nog wel betalen?", author: 'Jasper' },
		];

		$scope.sortableOptions = {
			handle: '> .handle',
			'update': function(e, ui) { },
			'ui-floating': false,
			'axis': 'x'
		};

	}
})();