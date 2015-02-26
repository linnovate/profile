'use strict';

/* jshint -W098 */
angular.module('mean.profile').controller('ProfileController', ['$scope', 'Global','Menus',
  function($scope, Global, Menus) {
    $scope.global = Global;
    $scope.package = {
      name: 'profile'
    };

  }
]);