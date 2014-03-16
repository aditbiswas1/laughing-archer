'use strict';

angular.module('zenTasksApp')
  .controller('GroupsCtrl', function ($scope, $location, Groups) {
    $scope.groups = Groups.all;

    $scope.group = { title: "An Awesome Ogranization", description: "we build awesome stuff"};

    $scope.submitGroup = function(){
    	Groups.create($scope.group).then(function(groupId){
    		$scope.group = { title: "An Awesome Ogranization", description: "we build awesome stuff"};
    		$location.path('groups/' + groupId);
    	});
    };
    $scope.deleteGroup = function(groupId){
        Groups.delete(groupId);
    };
    

  });
