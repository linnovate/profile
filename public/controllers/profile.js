'use strict';

/* jshint -W098 */
angular.module('mean.profile').controller('ProfileController', ['$scope', 'Global', 'Profile','Menus',
  function($scope, Global, Profile, Menus) {
    $scope.global = Global;
    $scope.package = {
      name: 'profile'
    };
    // This should move to Menus
    $scope.menus = {};
    Menus.query({
      name: 'profile',
      defaultMenu: []
    }, function(menu) {
      $scope.menus.profile = menu;
    });
  }
]);