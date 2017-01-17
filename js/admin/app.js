(function () {

  'use strict';

  angular
    .module('app', ['auth0.auth0', 'angular-jwt', 'ui.router'])
    .config(config);

  config.$inject = ['$stateProvider', '$qProvider', 'angularAuth0Provider', '$urlRouterProvider'];

  function config($stateProvider, $qProvider, angularAuth0Provider, $urlRouterProvider) {

    $qProvider.errorOnUnhandledRejections(false);

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        controller: 'DashboardController',
        templateUrl: '/js/admin/components/dashboard/dashboard.html',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: '/js/admin/components/login/login.html',
        controllerAs: 'vm'
      });


    // Initialization for the angular-auth0 library
    angularAuth0Provider.init({
      clientID: AUTH0_CLIENT_ID,
      domain: AUTH0_DOMAIN
    });

    $urlRouterProvider.otherwise('/dashboard');
  }

})();