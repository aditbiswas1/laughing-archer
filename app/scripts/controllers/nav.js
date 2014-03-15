'use strict';

angular.module('zenTasksApp')
  .controller('NavCtrl', function ($scope, $location, Auth) {
  	$scope.logout = function(){
    	Auth.logout();
    };
  });
