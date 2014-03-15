'use strict';

angular.module('zenTasksApp')
  .controller('GroupviewCtrl', function ($scope, $routeParams, Groups) {
  	$scope.group = Groups.find($routeParams.groupId);
  });
