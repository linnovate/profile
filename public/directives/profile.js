'use strict';

angular.module('mean.profile').directive('meanProfileMenu', function(Global) {
  return {
    templateUrl: 'profile/directives/views/mean-profile-menu.html',
    scope: {
    },
    restrict: 'A',
    replace: true,
    link: function($scope, element, attrs) {
      $scope.global = Global;
    }
  };
});