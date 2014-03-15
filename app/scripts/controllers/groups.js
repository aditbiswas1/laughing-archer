'use strict';

angular.module('zenTasksApp')
  .controller('GroupsCtrl', function ($scope, Group) {
    $scope.groups = Group.all;

    $scope.group = { title: "An Awesome Ogranizeion", description: "we build awesome stuff"};

    $scope.submitGroup = function(){
    	Group.create($scope.group).then(function(){
    		$scope.group = { title: "An Awesome Ogranizeion", description: "we build awesome stuff"};
    	});
    };

    $scope.deleteGroup = function(groupId){
    	Group.delete(groupId);
    };

  });
