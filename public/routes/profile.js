'use strict';

angular.module('mean.profile').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('profile settings', {
      url: '/profile/settings',
      templateUrl: 'profile/views/settings.html'
    });
  }
]);
