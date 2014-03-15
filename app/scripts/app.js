'use strict';

angular.module('zenTasksApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/group.html',
        controller: 'GroupsCtrl'
      })
      .when('/groups/:groupId', {
        templateUrl: 'views/groupview.html',
        controller: 'GroupviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
