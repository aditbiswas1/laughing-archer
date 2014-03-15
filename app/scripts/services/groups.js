'use strict';

angular.module('zenTasksApp')
  .factory('Groups', function ($firebase, FIREBASE_URL) {
    /*
     * Firebase Ref
    */
      var ref = new Firebase(FIREBASE_URL + 'groups');

      var groups = $firebase(ref);

      var Group = {
        all: groups,

        create: function(group){
          return groups.$add(group);
        },
        find: function(groupId){
          return groups.$child(groupId);
        },

        delete: function(groupId){
          return groups.$remove(groupId);
        }
      };

      return Group;
  });
