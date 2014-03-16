'use strict';

angular.module('zenTasksApp')
  .controller('GroupviewCtrl', function ($scope, $rootScope, $routeParams, Groups) {
  	$scope.group = Groups.find($routeParams.groupId);
  	$scope.groupId = $routeParams.groupId;
  	$scope.notInGroup = function(){
  		if($rootScope.currentUser){
  			if($rootScope.currentUser.groups){
  				return ! ($rootScope.currentUser.groups[$scope.groupId])
  			}
  		}
  		return 1;
  	}
  	$scope.joinGroup = function(){
  		Groups.join($scope.groupId);
  	};
  	$scope.leaveGroup = function(username){
  		Groups.leave($scope.groupId, username)
  	};
  	$scope.deleteGroup = function(){
    	Groups.delete($scope.groupId);
    };
  });
